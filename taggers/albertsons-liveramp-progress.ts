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
    summary: `No export check found for ${alert.incident_id}/${alert.alert_id}; run check-exports for this alert first.`,
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
const hasProgress = check.state === "monitoring" || check.state === "healthy_closed" || check.proposed_state === "healthy_closed";
const decision = hasProgress ? "tag" : "skip";
const tags = [
  ...(monitoring.length > 0 || check.state === "monitoring" ? ["evidence:albertsons-liveramp-progress", "waiting:uploads"] : []),
  ...(check.state === "healthy_closed" || check.proposed_state === "healthy_closed" ? ["evidence:albertsons-liveramp-complete"] : []),
];

const stateSummary = [
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
  confidence: hasProgress ? "high" : "medium",
  summary: `${alert.audience_id ? `Audience ${alert.audience_id}: ` : ""}${hasProgress ? "progress evidence found" : "no progress evidence yet"} (${stateSummary}).`,
  evidence: [{
    kind: "export_check",
    matched: hasProgress,
    source: checkPath,
    summary: stateSummary,
    data: {
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
