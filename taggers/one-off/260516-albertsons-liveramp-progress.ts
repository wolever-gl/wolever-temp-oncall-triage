import path from "node:path";

type AlertFact = {
  alert_id: string;
  incident_id: string;
  audience_id?: string;
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
      raw?: {
        failure_reason?: string | null;
      };
    };
  }>;
  updated_at: string;
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
    summary: `No export check found for ${alert.incident_id}/${alert.alert_id}; run preflight for this group first.`,
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
const healthy = evaluations.filter((evaluation) => evaluation.health === "healthy");
const monitoring = evaluations.filter((evaluation) => evaluation.health === "monitoring");
const blocked = evaluations.filter((evaluation) => evaluation.health === "blocked" || evaluation.health === "missing");
const latestEvaluation = [...evaluations].sort((left, right) => evaluationTime(left).localeCompare(evaluationTime(right))).at(-1);
const latestIsHealthy = latestEvaluation?.health === "healthy";
const allBlockers = sortedUnique([
  ...(check.blockers ?? []),
  ...evaluations.flatMap((evaluation) => evaluation.blockers ?? []),
]);
const hasEarlierExportFailure = evaluations.some((evaluation) =>
  (evaluation.blockers ?? []).some((blocker) => blocker === "export_error" || blocker === "failed_export_count")
);
const hasSnapshottingError = allBlockers.includes("snapshotting_error_requires_review");
const hasMissingTableField = evaluations.some((evaluation) => evaluation.selected_row?.raw?.failure_reason === "missing_table_field");
const hasExportFailure = allBlockers.some((blocker) => blocker === "export_error" || blocker === "failed_export_count");
const hasMissingEvidence = allBlockers.some((blocker) => blocker === "missing_run_identity" || blocker === "missing_pizza_row" || blocker === "evidence_unavailable");
const hasProgress = monitoring.length > 0 || check.state === "monitoring";
const isComplete = check.state === "healthy_closed" || check.proposed_state === "healthy_closed" || (latestIsHealthy && healthy.length > 0);

let decision: "tag" | "skip" | "needs_evidence";
let tags: string[];
let classification: string;
let confidence: "low" | "medium" | "high";

if (hasSnapshottingError) {
  decision = "tag";
  classification = hasMissingTableField ? "snapshotting-schema-error" : "snapshotting-error";
  confidence = hasMissingTableField ? "high" : "medium";
  tags = [
    "evidence:albertsons-liveramp-snapshotting-error",
    hasMissingTableField ? "evidence:snapshotting-schema-error" : "triage:snapshotting-error",
  ];
} else if (hasEarlierExportFailure && latestIsHealthy) {
  decision = "tag";
  classification = "recovered-after-export-failure";
  confidence = "high";
  tags = ["evidence:albertsons-liveramp-recovered", "resolved:later-export-succeeded"];
} else if (isComplete && healthy.length > 0) {
  decision = "tag";
  classification = "export-complete";
  confidence = "high";
  tags = ["evidence:albertsons-liveramp-complete", "resolved:export-healthy"];
} else if (hasProgress) {
  decision = "tag";
  classification = "export-in-progress";
  confidence = "high";
  tags = ["evidence:albertsons-liveramp-progress", "monitoring:export-processing"];
} else if (hasExportFailure) {
  decision = "tag";
  classification = "export-failure-unrecovered";
  confidence = "medium";
  tags = ["evidence:albertsons-liveramp-export-failure", "triage:export-blocked"];
} else if (hasMissingEvidence || evaluations.length === 0) {
  decision = "needs_evidence";
  classification = "needs-more-export-evidence";
  confidence = "low";
  tags = [];
} else {
  decision = "needs_evidence";
  classification = "unclassified-export-state";
  confidence = "low";
  tags = [];
}

const stateSummary = [
  `classification=${classification}`,
  `check=${check.state}`,
  check.proposed_state ? `proposed=${check.proposed_state}` : undefined,
  `healthy_runs=${healthy.length}`,
  `monitoring_runs=${monitoring.length}`,
  `blocked_runs=${blocked.length}`,
  (check.blockers?.length ?? 0) > 0 ? `blockers=${check.blockers!.join(",")}` : undefined,
].filter(Boolean).join("; ");

console.log(JSON.stringify({
  decision,
  tags,
  confidence,
  summary: `${alert.audience_id ? `Audience ${alert.audience_id}: ` : ""}${classification} (${stateSummary}).`,
  evidence: [{
    kind: "export_check",
    matched: decision === "tag",
    source: checkPath,
    summary: stateSummary,
    data: {
      classification,
      check_state: check.state,
      proposed_state: check.proposed_state,
      blockers: check.blockers ?? [],
      checked_export_run_ids: alert.checked_export_run_ids ?? [],
      run_evaluations: evaluations.map((evaluation) => ({
        export_run_id: evaluation.export_run_id,
        health: evaluation.health,
        blockers: evaluation.blockers ?? [],
        export_state: evaluation.selected_row?.export_state,
        snapshotting_state: evaluation.selected_row?.snapshotting_state,
        failed_export_count: evaluation.selected_row?.failed_export_count,
        failure_reason: evaluation.selected_row?.raw?.failure_reason,
        row_created_at: evaluation.selected_row?.created_at,
      })),
      updated_at: check.updated_at,
    },
  }],
}));

function argValue(name: string): string | undefined {
  const index = process.argv.indexOf(name);
  return index >= 0 ? process.argv[index + 1] : undefined;
}

function slug(input: string): string {
  return input.toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_+|_+$/g, "").slice(0, 96) || "unknown";
}

function evaluationTime(evaluation: NonNullable<ExportCheck["run_evaluations"]>[number]): string {
  return evaluation.selected_row?.created_at ?? timestampFromRunId(evaluation.export_run_id) ?? evaluation.export_run_id;
}

function timestampFromRunId(runId: string): string | undefined {
  const match = runId.match(/__(.+)$/);
  return match?.[1];
}

function sortedUnique(values: string[]): string[] {
  return [...new Set(values)].sort();
}
