import path from "node:path";
import type { AlertFact, IncidentRecord, PagerDutyIncidentStatus, ParsedRunId } from "./schema";

const PD_BASE = "https://growthloop.pagerduty.com/incidents";
const PD_API_BASE = "https://api.pagerduty.com";
const PAGERDUTY_SCRIPT = "/Users/wolever/src/github.com/GrowthLoop/gaia/agents/skills/pagerduty/scripts/pagerduty";

export function parseIncidentId(input: string): string {
  const match = input.match(/\/incidents\/([A-Z0-9]+)/i) ?? input.match(/^([A-Z0-9]+)$/i);
  if (!match?.[1]) throw new Error(`Could not parse PagerDuty incident id from ${input}`);
  return match[1].toUpperCase();
}

export function incidentUrl(input: string): string {
  return input.includes("/incidents/") ? input : `${PD_BASE}/${parseIncidentId(input)}`;
}

export interface PagerDutyIncidentStatusRecord {
  incident_id: string;
  status: PagerDutyIncidentStatus;
  refreshed_at: string;
  resolved_at?: string;
}

export interface PagerDutyAlertStatusRecord {
  id: string;
  status: PagerDutyIncidentStatus;
  summary?: string;
}

export async function fetchPagerDutyIncidentStatus(input: string): Promise<PagerDutyIncidentStatusRecord> {
  const incident_id = parseIncidentId(input);
  const token = await pagerDutyApiToken();
  if (!token) throw new Error("Missing PagerDuty API token secret: gaia-skill-pagerduty/api-token");

  const response = await fetch(`${PD_API_BASE}/incidents/${incident_id}`, {
    headers: {
      Accept: "application/vnd.pagerduty+json;version=2",
      Authorization: `Token token=${token}`,
    },
  });
  if (!response.ok) {
    throw new Error(`pagerduty status failed (${response.status} ${response.statusText}) for ${incident_id}`);
  }

  const payload = (await response.json()) as unknown;
  const incident = isRecord(payload) && isRecord(payload.incident) ? payload.incident : isRecord(payload) ? payload : {};
  const status = normalizeStatus(stringField(incident, "status"));
  const resolved_at = stringField(incident, "resolved_at", "last_status_change_at");
  return {
    incident_id,
    status,
    refreshed_at: new Date().toISOString(),
    ...(status === "resolved" && resolved_at ? { resolved_at } : {}),
  };
}

export async function fetchPagerDutyIncidentAlerts(incident: string): Promise<PagerDutyAlertStatusRecord[]> {
  const incident_id = parseIncidentId(incident);
  const alerts: PagerDutyAlertStatusRecord[] = [];
  for (let offset = 0; ; ) {
    const response = await pagerDutyFetch(`/incidents/${incident_id}/alerts?limit=100&offset=${offset}`, { method: "GET" });
    const payload = (await response.json()) as unknown;
    const pageAlerts = isRecord(payload) && Array.isArray(payload.alerts) ? payload.alerts : [];
    alerts.push(...pageAlerts.map(normalizePagerDutyAlertStatus));
    const more = isRecord(payload) && payload.more === true;
    if (!more) break;
    const limit = isRecord(payload) && typeof payload.limit === "number" ? payload.limit : 100;
    const payloadOffset = isRecord(payload) && typeof payload.offset === "number" ? payload.offset : offset;
    offset = payloadOffset + limit;
  }
  return alerts;
}

export async function resolvePagerDutyIncidentAlerts(incident: string, alertIds: string[]): Promise<void> {
  if (alertIds.length === 0) return;
  const incident_id = parseIncidentId(incident);
  await pagerDutyFetch(`/incidents/${incident_id}/alerts`, {
    method: "PUT",
    body: JSON.stringify({
      alerts: alertIds.map((id) => ({ id, type: "alert", status: "resolved" })),
    }),
  });
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
  allowPartial?: boolean;
}): Promise<{ incident: IncidentRecord; alerts: AlertFact[]; rawText: string }> {
  const incident_id = parseIncidentId(input.incident);
  const rawText = input.alertsFile ? await Bun.file(input.alertsFile).text() : await fetchPagerDutyAlerts(input.incident);
  const alerts = parseAlertFacts(rawText, input.incident, input.allowPartial ? { allowPartial: true } : {});
  return {
    incident: {
      incident_id,
      incident_url: incidentUrl(input.incident),
      imported_at: new Date().toISOString(),
      source: input.alertsFile ? "fixture" : "pagerduty",
      alert_count: alerts.length,
      status: "unknown",
      refreshed_at: new Date().toISOString(),
    },
    alerts,
    rawText,
  };
}

export function parseAlertFacts(rawText: string, incidentInput: string, options: { allowPartial?: boolean } = {}): AlertFact[] {
  const incident_id = parseIncidentId(incidentInput);
  const incident_url = incidentUrl(incidentInput);
  const trimmed = rawText.trim();
  if (!trimmed) return [];

  const json = tryParseJson(trimmed);
  if (Array.isArray(json)) return json.map((entry, idx) => normalizeAlert(entry, idx, incident_id, incident_url));
  if (json && typeof json === "object" && Array.isArray((json as { alerts?: unknown[] }).alerts)) {
    return (json as { alerts: unknown[] }).alerts.map((entry, idx) => normalizeAlert(entry, idx, incident_id, incident_url));
  }

  const wrapperAlerts = parsePagerDutyWrapperAlerts(rawText, incident_id, incident_url, options);
  if (wrapperAlerts) return wrapperAlerts;

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
  const checked_export_run_ids = splitCsv(stringField(details, "checked_export_run_ids"));
  const parsed_run_ids = checked_export_run_ids.map(parseRunId);
  const state_tuple = parseStateTuple(summary);
  const export_check_strategy = exportCheckStrategy(summary, checked_export_run_ids);
  if (org_id) alert.org_id = org_id;
  if (org_id_numeric) alert.org_id_numeric = org_id_numeric;
  if (org_id && org_id_numeric) alert.org_id = org_id.includes(`_${org_id_numeric}`) ? org_id : `${org_id}_${org_id_numeric}`;
  if (alert.org_id) alert.org_slug = orgSlug(alert.org_id);
  if (audience_id) alert.audience_id = audience_id;
  if (endpoint_id) alert.endpoint_id = endpoint_id;
  if (export_run_id) alert.export_run_id = export_run_id;
  if (checked_export_run_ids.length > 0) alert.checked_export_run_ids = checked_export_run_ids;
  alert.export_check_strategy = export_check_strategy;
  if (parsed_run_ids.length > 0) alert.parsed_run_ids = parsed_run_ids;
  const destination = firstDefined(parsed_run_ids.map((run) => run.destination_type)) || destinationFromEndpoint(endpoint_id);
  if (destination) {
    alert.destination_type = destination;
    alert.destination_product = destinationProduct(destination);
  }
  if (export_run_hash) alert.export_run_hash = export_run_hash;
  if (service) alert.service = service;
  if (state_tuple) alert.state_tuple = state_tuple;
  alert.error_signature = signature(stringField(details, "error", "failure_reason", "message") || summary);
  if (source_glcli) alert.source_glcli = source_glcli;
  alert.parser_version = 2;
  return alert;
}

function parsePagerDutyWrapperAlerts(rawText: string, incident_id: string, incident_url: string, options: { allowPartial?: boolean }): AlertFact[] | undefined {
  const header = rawText.match(/^\s*Alerts\s*\((\d+)\)\s*$/m);
  if (!header) return undefined;

  const expected = Number(header[1]);
  const alertsSection = rawText.split(/\nDeduped glcli commands by audience\b/i)[0] ?? rawText;
  const alertStart = /^(\d+)\.\s+([A-Z0-9]+)\s+\|\s+([a-z_]+)\s+\|\s+([^\n]+)$/gim;
  const starts = [...alertsSection.matchAll(alertStart)];
  if (starts.length !== expected && !options.allowPartial) {
    throw new Error(`PagerDuty alert count mismatch for ${incident_id}: header says ${expected}, parsed ${starts.length}`);
  }
  return starts.map((match, idx) => {
    const start = match.index ?? 0;
    const next = starts[idx + 1]?.index ?? alertsSection.length;
    const block = alertsSection.slice(start, next).trim();
    const fields = parseIndentedFields(block);
    const summary = fields.untrusted_message ?? block.split("\n")[0] ?? "PagerDuty alert";
    const glcli = fields.glcli;
    const org_id_numeric = orgIdFromGlcli(glcli);
    const org_slug = orgSlugFromSummary(summary);
    const org_id = org_slug && org_id_numeric ? `${org_slug}_${org_id_numeric}` : undefined;
    const checked_export_run_ids = splitCsv(fields.checked_export_run_ids);
    const parsed_run_ids = checked_export_run_ids.map(parseRunId);
    const state_tuple = parseStateTuple(summary);
    const export_check_strategy = exportCheckStrategy(summary, checked_export_run_ids);
    const endpoint_id = fields.endpoint_id;
    const destination_type = firstDefined(parsed_run_ids.map((run) => run.destination_type)) || destinationFromEndpoint(endpoint_id);
    const audience_id = fields.audience_id ?? audienceFromSummary(summary) ?? audienceFromGlcli(glcli);
    const alert: AlertFact = {
      alert_id: match[2]!,
      incident_id,
      incident_url,
      alert_status: normalizeStatus(match[3]),
      created_at: match[4]!.trim(),
      summary,
      parser_version: 2,
      ...(org_id ? { org_id } : {}),
      ...(org_slug ? { org_slug } : {}),
      ...(org_id_numeric ? { org_id_numeric } : {}),
      audience_kind: audienceKind(summary),
      ...(audience_id ? { audience_id } : {}),
      ...(endpoint_id ? { endpoint_id } : {}),
      ...(checked_export_run_ids.length > 0 ? { checked_export_run_ids } : {}),
      export_check_strategy,
      ...(parsed_run_ids.length > 0 ? { parsed_run_ids } : {}),
      ...(destination_type ? { destination_type, destination_product: destinationProduct(destination_type) } : {}),
      ...(state_tuple ? { state_tuple } : {}),
      ...(glcli ? { source_glcli: glcli } : {}),
      ...(fields.logs ? { logs_url: fields.logs } : {}),
      error_signature: signature(summary),
      raw: block,
    };
    return alert;
  });
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
    const checkedRunIds = runId ? [runId] : [];
    return {
      alert_id: alertId,
      incident_id,
      incident_url,
      created_at: new Date().toISOString(),
      summary: firstLine,
      parser_version: 2,
      ...(org ? { org_id: org } : {}),
      ...(audience ? { audience_id: audience } : {}),
      ...(endpoint ? { endpoint_id: endpoint } : {}),
      ...(runId ? { export_run_id: runId } : {}),
      export_check_strategy: exportCheckStrategy(firstLine, checkedRunIds),
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

export function exportCheckStrategy(
  summary: string,
  checkedExportRunIds: string[],
): NonNullable<AlertFact["export_check_strategy"]> {
  if (checkedExportRunIds.length > 0) return "checked_export_run_ids";
  const normalized = summary.toLowerCase();
  if (normalized.includes("0 successfull_exports from pizza tracker")) return "any_export_after_alert";
  if (normalized.includes("audience export failure") && normalized.includes("sent to client")) return "any_export_after_alert";
  if (normalized.includes("signalroute export failure") && normalized.includes("sent to client")) return "any_export_after_alert";
  return "checked_export_run_ids";
}

function parseIndentedFields(block: string): Record<string, string> {
  const fields: Record<string, string> = {};
  for (const line of block.split("\n")) {
    const match = line.match(/^\s+([a-zA-Z0-9_]+):\s*(.*)$/);
    if (!match) continue;
    fields[match[1]!] = unquote(match[2]!.trim());
  }
  return fields;
}

function unquote(value: string): string {
  if (value.startsWith('"') && value.endsWith('"')) return value.slice(1, -1);
  return value;
}

function splitCsv(value: string | undefined): string[] {
  return value?.split(",").map((part) => part.trim()).filter(Boolean) ?? [];
}

function parseRunId(raw: string): ParsedRunId {
  if (/^[0-9a-f]{16,}$/i.test(raw)) return { raw, hash: raw };
  const match = raw.match(/^(\d+)-(.+)_([0-9]+)-([a-z]+)__(.+)$/i);
  if (!match) return { raw };
  return {
    raw,
    ...(match[1] ? { audience_id: match[1] } : {}),
    ...(match[2] ? { destination_type: match[2] } : {}),
    ...(match[3] ? { endpoint_id: match[3] } : {}),
    ...(match[4] ? { trigger_type: match[4] } : {}),
    ...(match[5] ? { scheduled_at: match[5] } : {}),
  };
}

function parseStateTuple(summary: string): { snapshotting?: string; export?: string } | undefined {
  const match = summary.match(/states:\s*<\(([^,]*),([^)]+)\)>/i);
  if (!match) return undefined;
  return {
    ...(match[1] ? { snapshotting: match[1] } : {}),
    ...(match[2] ? { export: match[2] } : {}),
  };
}

function orgIdFromGlcli(glcli: string | undefined): string | undefined {
  return glcli?.match(/--org-id\s+([0-9]+)/)?.[1];
}

function audienceFromGlcli(glcli: string | undefined): string | undefined {
  return glcli?.match(/--audience-id\s+([0-9]+)/)?.[1];
}

function orgSlugFromSummary(summary: string): string | undefined {
  return summary.match(/^([A-Za-z0-9_-]+)\s+\(/)?.[1]?.toLowerCase();
}

function orgSlug(orgId: string): string {
  return orgId.replace(/_\d+$/, "");
}

function audienceFromSummary(summary: string): string | undefined {
  return summary.match(/\b(?:audience|signal|SignalRoute)\s+([0-9]+)/i)?.[1];
}

function audienceKind(summary: string): NonNullable<AlertFact["audience_kind"]> {
  if (/\bSignalRoute\b/.test(summary)) return "signal_route";
  if (/\bsignal\s+\d+/i.test(summary)) return "signal";
  if (/\baudience\s+\d+/i.test(summary)) return "audience";
  return "unknown";
}

function destinationFromEndpoint(endpointId: string | undefined): string | undefined {
  return endpointId?.replace(/^app_/, "").replace(/_[0-9]+$/, "");
}

function destinationProduct(destinationType: string): string {
  return destinationType
    .replace(/_(activation|object)$/, "")
    .replaceAll("_", "-");
}

function firstDefined<T>(values: (T | undefined)[]): T | undefined {
  return values.find((value): value is T => value !== undefined);
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

function normalizeStatus(status: string | undefined): PagerDutyIncidentStatus {
  const lower = status?.toLowerCase();
  switch (lower) {
    case "triggered":
    case "acknowledged":
    case "resolved":
    case "closed":
      return lower as PagerDutyIncidentStatus;
    default:
      return "unknown";
  }
}

async function pagerDutyApiToken(): Promise<string | undefined> {
  return (
    (await Bun.secrets.get({ service: "gaia-skill-pagerduty", name: "api-token" })) ??
    (await Bun.secrets.get({ service: "gaia-skill-pagerduty", name: "token" })) ??
    Bun.env.PAGERDUTY_API_TOKEN
  );
}

async function pagerDutyFetch(pathname: string, init: RequestInit): Promise<Response> {
  const token = await pagerDutyApiToken();
  if (!token) throw new Error("Missing PagerDuty API token secret: gaia-skill-pagerduty/api-token");

  const response = await fetch(`${PD_API_BASE}${pathname}`, {
    ...init,
    headers: {
      Accept: "application/vnd.pagerduty+json;version=2",
      "Content-Type": "application/json",
      Authorization: `Token token=${token}`,
      From: Bun.env.PAGERDUTY_FROM ?? "david.wolever@growthloop.com",
      ...(init.headers ?? {}),
    },
  });
  if (!response.ok) {
    throw new Error(`pagerduty ${init.method ?? "GET"} failed ${pathname}: ${response.status} ${response.statusText} ${await response.text()}`);
  }
  return response;
}

function normalizePagerDutyAlertStatus(entry: unknown): PagerDutyAlertStatusRecord {
  const obj = isRecord(entry) ? entry : {};
  const id = stringField(obj, "id", "alert_id");
  if (!id) throw new Error("PagerDuty alert response included an alert without an id.");
  const summary = stringField(obj, "summary");
  return {
    id,
    status: normalizeStatus(stringField(obj, "status")),
    ...(summary ? { summary } : {}),
  };
}

function matchValue(input: string, regex: RegExp): string | undefined {
  return input.match(regex)?.[1]?.trim();
}
