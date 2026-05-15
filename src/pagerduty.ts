import path from "node:path";
import type { AlertFact, IncidentRecord } from "./schema";

const PD_BASE = "https://growthloop.pagerduty.com/incidents";
const PAGERDUTY_SCRIPT = "/Users/wolever/src/github.com/GrowthLoop/gaia/agents/skills/pagerduty/scripts/pagerduty";

export function parseIncidentId(input: string): string {
  const match = input.match(/\/incidents\/([A-Z0-9]+)/i) ?? input.match(/^([A-Z0-9]+)$/i);
  if (!match?.[1]) throw new Error(`Could not parse PagerDuty incident id from ${input}`);
  return match[1].toUpperCase();
}

export function incidentUrl(input: string): string {
  return input.includes("/incidents/") ? input : `${PD_BASE}/${parseIncidentId(input)}`;
}

export async function fetchPagerDutyAlerts(incident: string): Promise<string> {
  const proc = Bun.spawn([PAGERDUTY_SCRIPT, "alerts", incident], { stdout: "pipe", stderr: "pipe" });
  const [stdout, stderr, exitCode] = await Promise.all([
    new Response(proc.stdout).text(),
    new Response(proc.stderr).text(),
    proc.exited,
  ]);
  if (exitCode !== 0) throw new Error(`pagerduty alerts failed (${exitCode}): ${stderr}`);
  return stdout;
}

export async function loadAlertFacts(input: {
  incident: string;
  alertsFile?: string;
}): Promise<{ incident: IncidentRecord; alerts: AlertFact[]; rawText: string }> {
  const incident_id = parseIncidentId(input.incident);
  const rawText = input.alertsFile ? await Bun.file(input.alertsFile).text() : await fetchPagerDutyAlerts(input.incident);
  const alerts = parseAlertFacts(rawText, input.incident);
  return {
    incident: {
      incident_id,
      incident_url: incidentUrl(input.incident),
      imported_at: new Date().toISOString(),
      source: input.alertsFile ? "fixture" : "pagerduty",
      alert_count: alerts.length,
    },
    alerts,
    rawText,
  };
}

export function parseAlertFacts(rawText: string, incidentInput: string): AlertFact[] {
  const incident_id = parseIncidentId(incidentInput);
  const incident_url = incidentUrl(incidentInput);
  const trimmed = rawText.trim();
  if (!trimmed) return [];

  const json = tryParseJson(trimmed);
  if (Array.isArray(json)) return json.map((entry, idx) => normalizeAlert(entry, idx, incident_id, incident_url));
  if (json && typeof json === "object" && Array.isArray((json as { alerts?: unknown[] }).alerts)) {
    return (json as { alerts: unknown[] }).alerts.map((entry, idx) => normalizeAlert(entry, idx, incident_id, incident_url));
  }

  return parseLooseTextAlerts(rawText, incident_id, incident_url);
}

function normalizeAlert(entry: unknown, idx: number, incident_id: string, incident_url: string): AlertFact {
  const obj = isRecord(entry) ? entry : {};
  const details = isRecord(obj.details) ? obj.details : obj;
  const alertId = stringField(obj, "alert_id", "id", "html_url") || `alert_${idx + 1}`;
  const summary = stringField(obj, "summary", "title", "description") || stringField(details, "summary", "error", "failure_reason") || "PagerDuty alert";
  const createdAt = stringField(obj, "created_at", "createdAt") || new Date().toISOString();
  const alert: AlertFact = {
    alert_id: alertId.includes("/") ? path.basename(alertId) : alertId,
    incident_id,
    incident_url,
    created_at: createdAt,
    summary,
    raw: entry,
  };
  const org_id = stringField(details, "org_id", "organization_identifier");
  const org_id_numeric = stringField(details, "org_id_numeric", "organization_id");
  const audience_id = stringField(details, "audience_id", "internal_audience_id");
  const endpoint_id = stringField(details, "endpoint_id", "destination_id", "export_id");
  const export_run_id = stringField(details, "export_run_id", "export run id");
  const export_run_hash = stringField(details, "export_run_hash", "export run hash");
  const service = stringField(details, "service", "component");
  const source_glcli = stringField(details, "glcli", "source_glcli");
  if (org_id) alert.org_id = org_id;
  if (org_id_numeric) alert.org_id_numeric = org_id_numeric;
  if (audience_id) alert.audience_id = audience_id;
  if (endpoint_id) alert.endpoint_id = endpoint_id;
  if (export_run_id) alert.export_run_id = export_run_id;
  if (export_run_hash) alert.export_run_hash = export_run_hash;
  if (service) alert.service = service;
  alert.error_signature = signature(stringField(details, "error", "failure_reason", "message") || summary);
  if (source_glcli) alert.source_glcli = source_glcli;
  return alert;
}

function parseLooseTextAlerts(rawText: string, incident_id: string, incident_url: string): AlertFact[] {
  const chunks = rawText.split(/\n(?=(?:Alert|ID|PD Alert|PagerDuty Alert)\b)/i).filter((chunk) => chunk.trim());
  return chunks.map((chunk, idx) => {
    const alertId = matchValue(chunk, /\b(?:alert_id|Alert ID|ID):\s*([A-Z0-9]+)/i) || `alert_${idx + 1}`;
    const org = matchValue(chunk, /\borg(?:anization)?[_ ]id:\s*([a-z0-9_]+)/i);
    const audience = matchValue(chunk, /\baudience[_ ]id:\s*(\d+)/i);
    const endpoint = matchValue(chunk, /\b(?:endpoint|destination|export)[_ ]id:\s*([a-z0-9_:-]+)/i);
    const runId = matchValue(chunk, /\bexport[_ ]run[_ ]id:\s*([a-z0-9_:+.-]+)/i);
    const glcli = chunk.match(/glcli[^\n]+/)?.[0]?.trim();
    const firstLine = chunk.trim().split("\n")[0] ?? "PagerDuty alert";
    return {
      alert_id: alertId,
      incident_id,
      incident_url,
      created_at: new Date().toISOString(),
      summary: firstLine,
      ...(org ? { org_id: org } : {}),
      ...(audience ? { audience_id: audience } : {}),
      ...(endpoint ? { endpoint_id: endpoint } : {}),
      ...(runId ? { export_run_id: runId } : {}),
      ...(glcli ? { source_glcli: glcli } : {}),
      error_signature: signature(chunk),
      raw: chunk,
    };
  });
}

function signature(input: string): string {
  return input
    .toLowerCase()
    .replace(/[0-9a-f]{16,}/g, "<hash>")
    .replace(/\d{4}-\d{2}-\d{2}t[^\s]+/g, "<time>")
    .replace(/\d+/g, "<n>")
    .replace(/\s+/g, " ")
    .slice(0, 120);
}

function tryParseJson(input: string): unknown {
  try {
    return JSON.parse(input);
  } catch {
    return undefined;
  }
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function stringField(obj: Record<string, unknown>, ...keys: string[]): string | undefined {
  for (const key of keys) {
    const value = obj[key];
    if (typeof value === "string" && value.trim()) return value.trim();
    if (typeof value === "number") return String(value);
  }
  return undefined;
}

function matchValue(input: string, regex: RegExp): string | undefined {
  return input.match(regex)?.[1]?.trim();
}
