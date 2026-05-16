import { spawnSync } from "node:child_process";

type AlertFact = {
  alert_id: string;
  incident_id: string;
  created_at?: string;
  summary?: string;
  org_id?: string;
  audience_id?: string;
};

type PizzaRow = {
  "created at"?: string;
  id?: string;
  "snapshot state"?: string;
  "export state"?: string;
  failures?: number;
  "export run id"?: string;
  "failure reason"?: string;
};

const alertPath = argValue("--alert");
if (!alertPath) throw new Error("Missing --alert <file>.");

const alert = await Bun.file(alertPath).json() as AlertFact;
if (alert.org_id !== "albertsons_6" || !/0 successfull?_exports/i.test(alert.summary ?? "")) {
  emit({
    decision: "skip",
    confidence: "high",
    summary: "Not an Albertsons zero-success alert.",
  });
}

if (!alert.audience_id) {
  emit({
    decision: "needs_evidence",
    confidence: "low",
    summary: "Albertsons zero-success alert is missing audience_id.",
  });
}

const rows = await loadRows(alert.audience_id!);
const afterAlert = rows.filter((row) => {
  const rowTime = parseTime(row["created at"]);
  const alertTime = parseTime(alert.created_at);
  return rowTime !== undefined && alertTime !== undefined ? rowTime >= alertTime : true;
});
const relevantRows = afterAlert.length > 0 ? afterAlert : rows;
const healthyRows = relevantRows.filter(isHealthy);
const monitoringRows = relevantRows.filter(isMonitoring);
const blockedRows = relevantRows.filter(isBlocked);
const latest = [...relevantRows].sort((left, right) => rowSortKey(left).localeCompare(rowSortKey(right))).at(-1);

let classification: string;
let decision: "tag" | "skip" | "needs_evidence";
let confidence: "low" | "medium" | "high";
let tags: string[];

if (healthyRows.length > 0) {
  classification = "zero-success-recovered";
  decision = "tag";
  confidence = "high";
  tags = ["evidence:albertsons-zero-success-recovered", "resolved:export-healthy"];
} else if (monitoringRows.length > 0) {
  classification = "zero-success-export-in-progress";
  decision = "tag";
  confidence = "high";
  tags = ["evidence:albertsons-zero-success-progress", "waiting:uploads"];
} else if (blockedRows.length > 0) {
  classification = "zero-success-export-blocked";
  decision = "tag";
  confidence = "medium";
  tags = ["evidence:albertsons-zero-success-blocked", "triage:export-blocked"];
} else {
  classification = "zero-success-no-export-rows";
  decision = "needs_evidence";
  confidence = "medium";
  tags = [];
}

emit({
  decision,
  tags,
  confidence,
  summary: [
    `Audience ${alert.audience_id}: ${classification}`,
    `rows=${rows.length}`,
    `post_alert_rows=${afterAlert.length}`,
    healthyRows.length > 0 ? `healthy=${healthyRows.length}` : undefined,
    monitoringRows.length > 0 ? `monitoring=${monitoringRows.length}` : undefined,
    blockedRows.length > 0 ? `blocked=${blockedRows.length}` : undefined,
    latest ? `latest=${latest["export state"] ?? "unknown"} ${latest["export run id"] ?? ""}`.trim() : undefined,
  ].filter(Boolean).join("; ") + ".",
  evidence: [{
    kind: "pizza_zero_success",
    matched: decision === "tag",
    source: "glcli bifrost pizza",
    query: `glcli --env albertsons bifrost pizza --audience-id ${alert.audience_id} --org-id 6 --format json`,
    summary: `${classification}; rows=${rows.length}; post_alert_rows=${afterAlert.length}.`,
    data: {
      classification,
      audience_id: alert.audience_id,
      alert_created_at: alert.created_at,
      rows: relevantRows.map((row) => ({
        created_at: row["created at"],
        export_run_id: row["export run id"],
        snapshot_state: row["snapshot state"],
        export_state: row["export state"],
        failures: row.failures,
        failure_reason: row["failure reason"],
      })),
    },
  }],
});

async function loadRows(audienceId: string): Promise<PizzaRow[]> {
  const fixture = process.env.ZERO_SUCCESS_PIZZA_ROWS_JSON;
  if (fixture) return JSON.parse(fixture) as PizzaRow[];

  const gcloudBin = "/Users/wolever/.local/share/mise/installs/gcloud/562.0.0/bin";
  const env = { ...process.env, PATH: `${gcloudBin}:${process.env.PATH ?? ""}` };
  const result = spawnSync("glcli", ["--env", "albertsons", "bifrost", "pizza", "--audience-id", audienceId, "--org-id", "6", "--format", "json"], {
    encoding: "utf8",
    env,
    maxBuffer: 1024 * 1024 * 10,
  });
  if (result.status !== 0) {
    throw new Error(`glcli failed for audience ${audienceId}: ${result.stderr || result.stdout}`);
  }
  const jsonStart = result.stdout.search(/[\\[{]/);
  if (jsonStart < 0) return [];
  return JSON.parse(result.stdout.slice(jsonStart)) as PizzaRow[];
}

function isHealthy(row: PizzaRow): boolean {
  const failures = row.failures ?? 0;
  return failures === 0 && (
    row["export state"] === "export_finished" ||
    (row["snapshot state"] === "snapshotting_finished_no_deltas" && row["export state"] === "no_batches")
  );
}

function isMonitoring(row: PizzaRow): boolean {
  return ["export_processing", "export_waiting", "export_queued"].includes(row["export state"] ?? "");
}

function isBlocked(row: PizzaRow): boolean {
  return (row.failures ?? 0) > 0 || row["export state"] === "export_error" || row["snapshot state"] === "snapshotting_error";
}

function rowSortKey(row: PizzaRow): string {
  return row["created at"] ?? row["export run id"] ?? "";
}

function parseTime(value: string | undefined): number | undefined {
  if (!value) return undefined;
  const normalized = value.endsWith(" UTC") ? value.replace(" UTC", "Z").replace(" ", "T") : value;
  const parsed = Date.parse(normalized);
  return Number.isFinite(parsed) ? parsed : undefined;
}

function argValue(name: string): string | undefined {
  const index = process.argv.indexOf(name);
  return index >= 0 ? process.argv[index + 1] : undefined;
}

function emit(result: unknown): never {
  console.log(JSON.stringify(result));
  process.exit(0);
}
