import path from "node:path";

type AlertFact = {
  alert_id: string;
  incident_id: string;
  audience_id?: string;
  org_id?: string;
  destination_type?: string;
  destination_product?: string;
  state_tuple?: {
    snapshotting?: string;
    export?: string;
  };
  checked_export_run_ids?: string[];
};

type ExportCheck = {
  state: string;
  proposed_state?: string;
  blockers?: string[];
  run_evaluations?: Array<{
    export_run_id: string;
    health: string;
    blockers?: string[];
    selected_row?: {
      export_state?: string | null;
      snapshotting_state?: string | null;
      failed_export_count?: number | null;
      created_at?: string;
      raw?: unknown;
    };
  }>;
  updated_at: string;
};

type SchemaEvidence = {
  export_run_id: string;
  row_created_at?: string;
  snapshotting_state?: string | null;
  export_state?: string | null;
  failure_reason?: string;
  missing_columns: string[];
  report_names: string[];
  raw_summary: string;
};

const alertPath = argValue("--alert");
if (!alertPath) throw new Error("Missing --alert <file>.");

const alert = await Bun.file(alertPath).json() as AlertFact;
const checkId = `chk_${slug(`${alert.incident_id}_${alert.alert_id}`)}`;
const checkPath = path.join(process.cwd(), "cases", "checks", checkId, "check.json");

let check: ExportCheck;
try {
  check = await Bun.file(checkPath).json() as ExportCheck;
} catch (err) {
  console.log(JSON.stringify({
    decision: "needs_evidence",
    confidence: "low",
    summary: `No export check found for ${alert.incident_id}/${alert.alert_id}; run check-exports before schema-missing grouping.`,
    evidence: [{
      kind: "export_check",
      matched: false,
      source: checkPath,
      summary: err instanceof Error ? err.message : String(err),
    }],
  }));
  process.exit(0);
}

const evaluations = check.run_evaluations ?? [];
const schemaEvidence = evaluations.map(schemaEvidenceFromEvaluation).filter((value): value is SchemaEvidence => Boolean(value));
const alertLooksLikeSnapshottingFailure = alert.state_tuple?.snapshotting === "snapshotting_error" || evaluations.some((evaluation) => evaluation.selected_row?.snapshotting_state === "snapshotting_error");
const alertHasNoBatches = alert.state_tuple?.export === "no_batches" || evaluations.some((evaluation) => evaluation.selected_row?.export_state === "no_batches");

if (schemaEvidence.length > 0 && alertLooksLikeSnapshottingFailure) {
  const columns = sortedUnique(schemaEvidence.flatMap((evidence) => evidence.missing_columns));
  const reports = sortedUnique(schemaEvidence.flatMap((evidence) => evidence.report_names));
  const classification = "client-source-schema-missing";
  const stateSummary = [
    `classification=${classification}`,
    alert.org_id ? `org=${alert.org_id}` : undefined,
    alert.audience_id ? `audience=${alert.audience_id}` : undefined,
    destination(alert) ? `destination=${destination(alert)}` : undefined,
    columns.length > 0 ? `missing_columns=${columns.join(",")}` : undefined,
    reports.length > 0 ? `reports=${reports.join(",")}` : undefined,
    alertHasNoBatches ? "export=no_batches" : undefined,
  ].filter(Boolean).join("; ");

  console.log(JSON.stringify({
    decision: "tag",
    tags: ["evidence:client-source-schema-missing", "triage:client_schema_missing"],
    confidence: "high",
    summary: `${alert.audience_id ? `Audience ${alert.audience_id}: ` : ""}${stateSummary}.`,
    evidence: [{
      kind: "export_check",
      matched: true,
      source: checkPath,
      summary: stateSummary,
      data: {
        classification,
        check_state: check.state,
        proposed_state: check.proposed_state,
        check_blockers: check.blockers ?? [],
        checked_export_run_ids: alert.checked_export_run_ids ?? [],
        missing_columns: columns,
        report_names: reports,
        schema_failures: schemaEvidence,
        updated_at: check.updated_at,
      },
    }],
  }));
} else if (alertLooksLikeSnapshottingFailure) {
  console.log(JSON.stringify({
    decision: "needs_evidence",
    confidence: "medium",
    summary: `${alert.audience_id ? `Audience ${alert.audience_id}: ` : ""}snapshotting failure found, but export check does not prove a missing source-schema field.`,
    evidence: [{
      kind: "export_check",
      matched: false,
      source: checkPath,
      summary: `check=${check.state}; blockers=${(check.blockers ?? []).join(",") || "none"}`,
      data: {
        check_state: check.state,
        blockers: check.blockers ?? [],
        checked_export_run_ids: alert.checked_export_run_ids ?? [],
      },
    }],
  }));
} else {
  console.log(JSON.stringify({
    decision: "skip",
    confidence: "high",
    summary: `${alert.incident_id}/${alert.alert_id} is not a snapshotting schema-missing candidate.`,
    evidence: [{
      kind: "export_check",
      matched: false,
      source: checkPath,
      summary: `snapshotting=${alert.state_tuple?.snapshotting ?? "unknown"}; export=${alert.state_tuple?.export ?? "unknown"}`,
    }],
  }));
}

function schemaEvidenceFromEvaluation(evaluation: NonNullable<ExportCheck["run_evaluations"]>[number]): SchemaEvidence | undefined {
  const raw = evaluation.selected_row?.raw;
  const rawSummary = summarizeRaw(raw);
  const failureReason = rawFailureReason(raw);
  const missingColumns = sortedUnique([
    ...resourceValues(raw, "warehouse_column"),
    ...fieldNotFoundColumns(rawSummary),
  ]);
  const reportNames = sortedUnique(resourceValues(raw, "report_name"));
  const hasMissingSchemaSignal = [
    failureReason,
    rawSummary,
    ...(evaluation.blockers ?? []),
    ...(evaluation.selected_row?.raw && typeof evaluation.selected_row.raw === "object" ? [JSON.stringify(evaluation.selected_row.raw)] : []),
  ].some((value) => /missing_table_field|requested field was not found|field ['"][^'"]+['"] not found|source schema/i.test(value));

  if (!hasMissingSchemaSignal) return undefined;

  return {
    export_run_id: evaluation.export_run_id,
    row_created_at: evaluation.selected_row?.created_at,
    snapshotting_state: evaluation.selected_row?.snapshotting_state,
    export_state: evaluation.selected_row?.export_state,
    failure_reason: failureReason,
    missing_columns: missingColumns,
    report_names: reportNames,
    raw_summary: rawSummary.slice(0, 1000),
  };
}

function rawFailureReason(raw: unknown): string | undefined {
  if (!raw || typeof raw !== "object") return undefined;
  const record = raw as Record<string, unknown>;
  if (typeof record.failure_reason === "string") return record.failure_reason;
  if (typeof record.error === "string") return record.error;
  return undefined;
}

function resourceValues(raw: unknown, key: string): string[] {
  if (!raw || typeof raw !== "object") return [];
  const rawResources = (raw as { glerror?: { resources?: Record<string, unknown> } }).glerror?.resources;
  const value = rawResources?.[key];
  if (Array.isArray(value)) return value.filter((item): item is string => typeof item === "string");
  return typeof value === "string" ? [value] : [];
}

function fieldNotFoundColumns(value: string): string[] {
  return [...value.matchAll(/field ['"]([^'"]+)['"] not found/gi)].map((match) => match[1]!).filter(Boolean);
}

function summarizeRaw(raw: unknown): string {
  if (typeof raw === "string") return raw;
  if (raw === undefined || raw === null) return "";
  return JSON.stringify(raw);
}

function destination(alert: AlertFact): string | undefined {
  return alert.destination_type ?? alert.destination_product;
}

function argValue(name: string): string | undefined {
  const index = process.argv.indexOf(name);
  return index >= 0 ? process.argv[index + 1] : undefined;
}

function slug(input: string): string {
  return input.toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_+|_+$/g, "").slice(0, 96) || "unknown";
}

function sortedUnique(values: string[]): string[] {
  return [...new Set(values.filter(Boolean))].sort();
}
