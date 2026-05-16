import path from "node:path";
import { readFile } from "node:fs/promises";
import { ensureDir, listDirs, readJson, slug, writeJson } from "./fsutil";
import { loadAllAlerts, markGroupsStartedForAlerts } from "./workspace";
import type { AlertFact, ExportCheck, ExportCheckScope, ExportCheckState, ExportRunEvaluation, PizzaExportRow } from "./schema";

export interface CheckExportsOptions {
  workspaceDir: string;
  apply?: boolean;
  now?: Date;
  filters?: {
    incidentId?: string;
    orgId?: string;
    audienceId?: string;
    destination?: string;
    state?: string;
    limit?: number;
  };
  fetchPizzaRows?: (scope: ExportCheckScope) => Promise<PizzaExportRow[]>;
  onProgress?: (message: string) => void;
}

export interface CheckExportsResult {
  derived: number;
  evaluated: number;
  healthy_closed: number;
  monitoring: number;
  blocked: number;
  not_applicable: number;
}

export async function checkExportsWorkspace(options: CheckExportsOptions): Promise<CheckExportsResult> {
  await ensureDir(checksDir(options.workspaceDir));
  const now = options.now ?? new Date();
  const nowIso = now.toISOString();
  const existing = new Map((await loadAllExportChecks(options.workspaceDir)).map((check) => [check.check_id, check]));
  const allAlerts = await loadAllAlerts(options.workspaceDir);
  const alerts = filterAlerts(allAlerts, options.filters);
  const checks: ExportCheck[] = [];
  let derived = 0;
  options.onProgress?.(`Loaded ${alerts.length} alert fact(s); deriving export checks.`);

  for (const alert of alerts) {
    const previous = existing.get(checkIdForAlert(alert));
    const check = deriveExportCheck(alert, nowIso, previous);
    if (!previous) derived++;
    checks.push(check);
  }

  let evaluated = 0;
  for (const check of checks) {
    if (check.state === "healthy_closed" || check.state === "not_applicable") {
      options.onProgress?.(`${check.check_id}: skipping ${check.state}.`);
      await writeExportCheck(options.workspaceDir, check);
      continue;
    }
    if (check.next_check_at && check.next_check_at > nowIso) {
      options.onProgress?.(`${check.check_id}: skipping until ${check.next_check_at}.`);
      await writeExportCheck(options.workspaceDir, check);
      continue;
    }

    let rows: PizzaExportRow[];
    try {
      options.onProgress?.(`${check.check_id}: checking env=${check.scope.env ?? "?"} org=${check.scope.org_id ?? "?"} audience=${check.scope.audience_id ?? "?"} runs=${check.scope.checked_export_run_ids.length}.`);
      if (check.scope.glcli) options.onProgress?.(`${check.check_id}: pizza command: ${check.scope.glcli}`);
      rows = await fetchRowsForCheck(check, options.fetchPizzaRows);
      options.onProgress?.(`${check.check_id}: fetched ${rows.length} pizza row(s).`);
    } catch (err) {
      const unavailable = markEvidenceUnavailable(check, err, nowIso);
      evaluated++;
      await writeExportCheck(options.workspaceDir, unavailable);
      options.onProgress?.(`${check.check_id}: evidence unavailable; will retry later.`);
      continue;
    }
    const evaluatedCheck = evaluateExportCheck(check, rows, {
      apply: Boolean(options.apply),
      now,
    });
    evaluated++;
    await writeExportCheck(options.workspaceDir, evaluatedCheck);
    options.onProgress?.(`${check.check_id}: wrote state=${evaluatedCheck.state}${evaluatedCheck.proposed_state ? ` proposed=${evaluatedCheck.proposed_state}` : ""}${evaluatedCheck.blockers.length > 0 ? ` blockers=${evaluatedCheck.blockers.join(",")}` : ""}.`);
  }

  if (options.apply && evaluated > 0) {
    await markGroupsStartedForAlerts(
      options.workspaceDir,
      checks.map((check) => ({ incident_id: check.incident_id, alert_id: check.alert_id })),
      {
        actor: "check-exports",
        rationale: "Export evidence check evaluated alert facts for this group.",
        ts: nowIso,
      },
    );
  }

  await writeCheckIndex(options.workspaceDir);
  const allChecks = await loadAllExportChecks(options.workspaceDir);
  return {
    derived,
    evaluated,
    healthy_closed: allChecks.filter((check) => check.state === "healthy_closed").length,
    monitoring: allChecks.filter((check) => check.state === "monitoring").length,
    blocked: allChecks.filter((check) => check.state === "blocked").length,
    not_applicable: allChecks.filter((check) => check.state === "not_applicable").length,
  };
}

function filterAlerts(alerts: AlertFact[], filters: CheckExportsOptions["filters"]): AlertFact[] {
  if (!filters) return alerts;
  const matched = alerts.filter((alert) => {
    if (filters.incidentId && alert.incident_id !== filters.incidentId) return false;
    if (filters.orgId && alert.org_id !== filters.orgId) return false;
    if (filters.audienceId && alert.audience_id !== filters.audienceId) return false;
    if (filters.destination && alert.destination_type !== filters.destination && alert.destination_product !== filters.destination) return false;
    if (filters.state) {
      const tuple = [alert.state_tuple?.snapshotting ?? "", alert.state_tuple?.export ?? ""].filter(Boolean).join("/");
      if (tuple !== filters.state && alert.state_tuple?.snapshotting !== filters.state && alert.state_tuple?.export !== filters.state) return false;
    }
    return true;
  });
  return filters.limit ? matched.slice(0, filters.limit) : matched;
}

export function deriveExportCheck(alert: AlertFact, nowIso: string, previous?: ExportCheck): ExportCheck {
  if (previous?.state === "healthy_closed") return previous;

  const glcli = parseGlcli(alert.source_glcli);
  const checkedRunIds = checkedRunIdsFor(alert);
  const isExportAlert = Boolean(alert.source_glcli || alert.audience_id || alert.state_tuple || checkedRunIds.length > 0);
  const scope: ExportCheckScope = {
    ...(glcli.env ? { env: glcli.env } : {}),
    ...(glcli.org_id || alert.org_id_numeric ? { org_id: glcli.org_id ?? alert.org_id_numeric } : {}),
    ...(glcli.audience_id || alert.audience_id ? { audience_id: glcli.audience_id ?? alert.audience_id } : {}),
    ...(alert.endpoint_id ? { endpoint_id: alert.endpoint_id } : {}),
    ...(alert.destination_type ? { destination_type: alert.destination_type } : {}),
    checked_export_run_ids: checkedRunIds,
    ...(alert.source_glcli ? { glcli: alert.source_glcli } : {}),
  };

  const base: ExportCheck = previous ?? {
    check_id: checkIdForAlert(alert),
    source: "pagerduty",
    incident_id: alert.incident_id,
    alert_id: alert.alert_id,
    state: isExportAlert ? "open" : "not_applicable",
    scope,
    scope_key: scopeKey(scope),
    run_evaluations: [],
    blockers: [],
    evidence_artifacts: [],
    created_at: nowIso,
    updated_at: nowIso,
  };

  return {
    ...base,
    state: isExportAlert ? base.state : "not_applicable",
    scope,
    scope_key: scopeKey(scope),
    updated_at: nowIso,
  };
}

export function evaluateExportCheck(
  check: ExportCheck,
  rows: PizzaExportRow[],
  options: { apply: boolean; now: Date },
): ExportCheck {
  const nowIso = options.now.toISOString();
  const next = { ...check, updated_at: nowIso };
  delete next.proposed_state;
  delete next.next_check_at;
  if (check.state === "not_applicable" || check.state === "healthy_closed") return next;

  const preflightBlockers = scopeBlockers(check.scope);
  if (preflightBlockers.length > 0) {
    return {
      ...next,
      state: "blocked",
      blockers: preflightBlockers,
      run_evaluations: [],
    };
  }

  const runEvaluations = check.scope.checked_export_run_ids.map((runId): ExportRunEvaluation => {
    const row = rows.find((candidate) => candidate.export_run_id === runId);
    if (!row) {
      return {
        export_run_id: runId,
        health: "missing",
        match_basis: "checked_export_run_id",
        blockers: ["missing_pizza_row"],
      };
    }
    return evaluateRunRow(runId, row, check.scope);
  });

  const blockers = runEvaluations.flatMap((evaluation) => evaluation.blockers);
  if (blockers.length > 0) {
    return {
      ...next,
      state: "blocked",
      blockers,
      run_evaluations: runEvaluations,
    };
  }
  if (runEvaluations.some((evaluation) => evaluation.health === "monitoring")) {
    return {
      ...next,
      state: "monitoring",
      blockers: [],
      run_evaluations: runEvaluations,
      next_check_at: new Date(options.now.getTime() + 15 * 60 * 1000).toISOString(),
    };
  }

  if (options.apply) {
    return {
      ...next,
      state: "healthy_closed",
      blockers: [],
      run_evaluations: runEvaluations,
      closed_at: nowIso,
    };
  }
  return {
    ...next,
    blockers: [],
    run_evaluations: runEvaluations,
    proposed_state: "healthy_closed",
  };
}

export async function loadAllExportChecks(workspaceDir: string): Promise<ExportCheck[]> {
  const ids = await listDirs(checksDir(workspaceDir));
  const checks: ExportCheck[] = [];
  for (const id of ids) {
    try {
      checks.push(await readJson<ExportCheck>(path.join(checksDir(workspaceDir), id, "check.json")));
    } catch (err) {
      if ((err as NodeJS.ErrnoException).code !== "ENOENT") throw err;
    }
  }
  return checks.sort((a, b) => a.check_id.localeCompare(b.check_id));
}

export async function writeExportCheck(workspaceDir: string, check: ExportCheck): Promise<void> {
  await writeJson(path.join(checksDir(workspaceDir), check.check_id, "check.json"), check);
}

async function fetchRowsForCheck(
  check: ExportCheck,
  fetchPizzaRows: CheckExportsOptions["fetchPizzaRows"],
): Promise<PizzaExportRow[]> {
  if (!fetchPizzaRows) return [];
  if (!check.scope.env || !check.scope.org_id || !check.scope.audience_id) return [];
  return fetchPizzaRows(check.scope);
}

function evaluateRunRow(runId: string, row: PizzaExportRow, scope: ExportCheckScope): ExportRunEvaluation {
  const scopeDestination = scope.destination_type || destinationFromRun(runId);
  const rowDestination = row.destination_type || destinationFromRun(row.export_run_id);
  const blockers: string[] = [];
  if (scope.audience_id && row.audience_id && scope.audience_id !== row.audience_id) blockers.push("audience_mismatch");
  if (scope.endpoint_id && row.endpoint_id && endpointNumericPart(scope.endpoint_id) !== endpointNumericPart(row.endpoint_id)) blockers.push("endpoint_mismatch");
  if (scopeDestination && rowDestination && scopeDestination !== rowDestination) blockers.push("destination_mismatch");
  if (blockers.length > 0) {
    return { export_run_id: runId, health: "blocked", match_basis: "checked_export_run_id", blockers, selected_row: row };
  }

  const failedCount = row.failed_export_count ?? 0;
  if (failedCount > 0) blockers.push("failed_export_count");
  if (row.snapshotting_state === "snapshotting_error") blockers.push("snapshotting_error_requires_review");
  if (row.export_state === "export_error") blockers.push("export_error");
  if (blockers.length > 0) {
    return { export_run_id: runId, health: "blocked", match_basis: "checked_export_run_id", blockers, selected_row: row };
  }

  if (
    row.export_state === "export_processing" ||
    row.export_state === "export_waiting" ||
    row.export_state === "export_queued" ||
    row.snapshotting_state === "snapshotting_processing"
  ) {
    return { export_run_id: runId, health: "monitoring", match_basis: "checked_export_run_id", blockers: [], selected_row: row };
  }

  if (row.export_state === "export_finished") {
    return { export_run_id: runId, health: "healthy", match_basis: "checked_export_run_id", blockers: [], selected_row: row };
  }
  if (
    row.export_state === "no_batches" &&
    (row.snapshotting_state === null ||
      row.snapshotting_state === undefined ||
      row.snapshotting_state === "snapshotting_finished" ||
      row.snapshotting_state === "snapshotting_finished_no_deltas")
  ) {
    return { export_run_id: runId, health: "healthy", match_basis: "checked_export_run_id", blockers: [], selected_row: row };
  }

  return {
    export_run_id: runId,
    health: "blocked",
    match_basis: "checked_export_run_id",
    blockers: ["unhealthy_or_unknown_state"],
    selected_row: row,
  };
}

function scopeBlockers(scope: ExportCheckScope): string[] {
  const blockers: string[] = [];
  if (!scope.env) blockers.push("missing_env");
  if (!scope.org_id) blockers.push("missing_org_id");
  if (!scope.audience_id) blockers.push("missing_audience_id");
  if (scope.checked_export_run_ids.length === 0) blockers.push("missing_run_identity");
  return blockers;
}

function markEvidenceUnavailable(check: ExportCheck, err: unknown, nowIso: string): ExportCheck {
  return {
    ...check,
    state: "open",
    blockers: ["evidence_unavailable"],
    run_evaluations: [],
    updated_at: nowIso,
    next_check_at: new Date(Date.parse(nowIso) + 15 * 60 * 1000).toISOString(),
    evidence_artifacts: [
      ...check.evidence_artifacts,
      `pizza_fetch_error:${err instanceof Error ? err.message : String(err)}`,
    ],
  };
}

function checkedRunIdsFor(alert: AlertFact): string[] {
  if (alert.checked_export_run_ids && alert.checked_export_run_ids.length > 0) return alert.checked_export_run_ids;
  return alert.export_run_id ? [alert.export_run_id] : [];
}

function checkIdForAlert(alert: AlertFact): string {
  return `chk_${slug(`${alert.incident_id}_${alert.alert_id}`)}`;
}

function parseGlcli(glcli: string | undefined): { env?: string; org_id?: string; audience_id?: string } {
  if (!glcli) return {};
  return {
    ...(glcli.match(/--env\s+(\S+)/)?.[1] ? { env: glcli.match(/--env\s+(\S+)/)![1] } : {}),
    ...(glcli.match(/--org-id\s+(\S+)/)?.[1] ? { org_id: glcli.match(/--org-id\s+(\S+)/)![1] } : {}),
    ...(glcli.match(/--audience-id\s+(\S+)/)?.[1] ? { audience_id: glcli.match(/--audience-id\s+(\S+)/)![1] } : {}),
  };
}

function scopeKey(scope: ExportCheckScope): string {
  return [
    scope.env ?? "unknown_env",
    scope.org_id ?? "unknown_org",
    scope.audience_id ?? "unknown_audience",
    scope.destination_type ?? "unknown_destination",
    scope.endpoint_id ?? "unknown_endpoint",
    scope.checked_export_run_ids.join(",") || "unknown_run",
  ].join("|");
}

function destinationFromRun(runId: string | undefined): string | undefined {
  return runId?.match(/^\d+-(.+)_\d+-/)?.[1];
}

function endpointNumericPart(endpoint: string): string {
  return endpoint.match(/(\d+)$/)?.[1] ?? endpoint;
}

function checksDir(workspaceDir: string): string {
  return path.join(workspaceDir, "checks");
}

async function writeCheckIndex(workspaceDir: string): Promise<void> {
  const checks = await loadAllExportChecks(workspaceDir);
  await writeJson(path.join(workspaceDir, "indexes", "checks.json"), checks.map((check) => ({
    check_id: check.check_id,
    incident_id: check.incident_id,
    alert_id: check.alert_id,
    state: check.state,
    proposed_state: check.proposed_state,
    blockers: check.blockers,
    next_check_at: check.next_check_at,
    scope: check.scope,
  })));
}

export async function loadPizzaRowsFile(file: string): Promise<PizzaExportRow[]> {
  const raw = await readFile(file, "utf8");
  const parsed = JSON.parse(raw) as unknown;
  if (!Array.isArray(parsed)) throw new Error("Pizza rows file must contain a JSON array.");
  return parsed.map(normalizePizzaRow);
}

function normalizePizzaRow(row: unknown): PizzaExportRow {
  const value = isRecord(row) ? row : {};
  const info = isRecord(value.info) ? value.info : {};
  const export_run_id = stringField(value, "export_run_id") ?? stringField(info, "export_run_id");
  if (!export_run_id) throw new Error("Pizza row missing export_run_id.");
  const audience_id = stringField(value, "audience_id") ?? stringField(value, "internal_audience_id") ?? stringField(info, "internal_audience_id");
  const endpoint_id = stringField(value, "endpoint_id") ?? stringField(info, "endpoint_id");
  const destination_type = stringField(value, "destination_type") ?? destinationFromRun(export_run_id);
  const created_at = stringField(value, "created_at") ?? stringField(info, "created_at");
  const snapshotting_state = nullableStringField(value, "snapshotting_state");
  const export_state = nullableStringField(value, "export_state");
  return {
    export_run_id,
    ...(audience_id ? { audience_id } : {}),
    ...(endpoint_id ? { endpoint_id } : {}),
    ...(destination_type ? { destination_type } : {}),
    ...(created_at ? { created_at } : {}),
    ...(snapshotting_state !== undefined ? { snapshotting_state } : {}),
    ...(export_state !== undefined ? { export_state } : {}),
    failed_export_count: numberField(value, "failed_export_count") ?? null,
    raw: row,
  };
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

function nullableStringField(obj: Record<string, unknown>, key: string): string | null | undefined {
  const value = obj[key];
  if (value === null) return null;
  if (typeof value === "string") return value;
  return undefined;
}

function numberField(obj: Record<string, unknown>, key: string): number | undefined {
  const value = obj[key];
  if (typeof value === "number") return value;
  if (typeof value === "string" && value.trim() && !Number.isNaN(Number(value))) return Number(value);
  return undefined;
}
