import { readdir } from "node:fs/promises";
import path from "node:path";

type AlertFact = {
  alert_id: string;
  incident_id: string;
  org_id?: string;
  audience_id?: string;
  summary?: string;
};

type AlertAnnotation = {
  alert_ref?: {
    incident_id?: string;
    alert_id?: string;
  };
  tags?: string[];
  decision?: string;
  summary?: string;
  evidence?: unknown;
  source?: {
    kind?: string;
    run_id?: string;
    script_path?: string;
  };
};

type ExportCheck = {
  state: string;
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
  updated_at?: string;
};

type GroupState = {
  group_id: string;
  state?: string;
  title?: string;
  alert_refs?: Array<{
    incident_id: string;
    alert_id: string;
  }>;
};

type Classification = {
  name: string;
  confidence: "low" | "medium" | "high";
  tags: string[];
  summary: string;
  evidence: unknown[];
};

const alertPath = argValue("--alert");
if (!alertPath) throw new Error("Missing --alert <file>.");

const alert = await Bun.file(alertPath).json() as AlertFact;
if (alert.org_id !== "albertsons_6") {
  emit({
    decision: "skip",
    confidence: "high",
    summary: "Not an Albertsons alert.",
  });
}

const annotations = await loadAnnotations();
const exactAnnotations = annotations.filter((annotation) =>
  annotation.alert_ref?.incident_id === alert.incident_id && annotation.alert_ref?.alert_id === alert.alert_id
);
const audienceAnnotations = alert.audience_id
  ? annotations.filter((annotation) => annotation.summary?.includes(`Audience ${alert.audience_id}:`) || annotation.summary?.includes(`audience ${alert.audience_id}`))
  : [];
const check = await loadCheck(alert);
const groupEvidence = await loadGroupEvidence(alert);

const classification = classifyAlert(alert, exactAnnotations, audienceAnnotations, check, groupEvidence);

emit({
  decision: "tag",
  tags: ["evidence:albertsons-audience-classified", `classification:${classification.name}`, ...classification.tags],
  confidence: classification.confidence,
  summary: classification.summary,
  evidence: classification.evidence,
});

function classifyAlert(
  alertFact: AlertFact,
  exactAnnotations: AlertAnnotation[],
  audienceAnnotations: AlertAnnotation[],
  check: { path: string; value: ExportCheck } | undefined,
  groupEvidence: Array<{ source: string; group_id: string; state?: string; summary: string }>,
): Classification {
  const exactTagText = tagText(exactAnnotations);
  const audienceTagText = tagText(audienceAnnotations);
  const exactSummaries = exactAnnotations.map((annotation) => annotation.summary).filter((value): value is string => Boolean(value));
  const audienceSummaries = audienceAnnotations.map((annotation) => annotation.summary).filter((value): value is string => Boolean(value));
  const groupSummaryText = groupEvidence.map((item) => item.summary).join(" ");
  const evidenceBase = [
    ...exactAnnotations.slice(-3).map((annotation) => ({
      kind: "alert_annotation",
      source: annotation.source,
      summary: annotation.summary,
      tags: annotation.tags ?? [],
    })),
  ];

  if (/albertsons-schema-issue|snapshotting-schema-error/.test(exactTagText)) {
    return {
      name: "schema_issue",
      confidence: "high",
      tags: ["triage:schema-issue"],
      summary: `${alertLabel(alertFact)} classified as schema_issue from direct schema evidence.`,
      evidence: evidenceBase,
    };
  }

  if (/albertsons-liveramp-recovered|later-export-succeeded/.test(exactTagText)) {
    return {
      name: "recovered_after_export_failure",
      confidence: "high",
      tags: ["resolved:later-export-succeeded"],
      summary: `${alertLabel(alertFact)} classified as recovered_after_export_failure from direct LiveRamp export evidence.`,
      evidence: evidenceBase,
    };
  }

  if (/albertsons-liveramp-complete|resolved:export-healthy/.test(exactTagText)) {
    return {
      name: "export_complete",
      confidence: "high",
      tags: ["resolved:export-healthy"],
      summary: `${alertLabel(alertFact)} classified as export_complete from direct healthy export evidence.`,
      evidence: evidenceBase,
    };
  }

  if (/albertsons-liveramp-progress|albertsons-zero-success-progress|monitoring:export-processing|waiting:uploads/.test(exactTagText)) {
    return {
      name: "export_in_progress",
      confidence: "high",
      tags: ["monitoring:export-processing"],
      summary: `${alertLabel(alertFact)} classified as export_in_progress from direct monitoring evidence.`,
      evidence: evidenceBase,
    };
  }

  if (/albertsons-zero-success-recovered/.test(exactTagText)) {
    return {
      name: "zero_success_recovered",
      confidence: "high",
      tags: ["resolved:export-healthy"],
      summary: `${alertLabel(alertFact)} classified as zero_success_recovered from direct zero-success evidence.`,
      evidence: evidenceBase,
    };
  }

  if (/albertsons-schema-issue|snapshotting-schema-error/.test(audienceTagText)) {
    return {
      name: "schema_issue",
      confidence: "high",
      tags: ["triage:schema-issue"],
      summary: `${alertLabel(alertFact)} classified as schema_issue from same-audience schema evidence.`,
      evidence: audienceEvidence("same_audience_annotation", audienceSummaries, audienceAnnotations),
    };
  }

  if (/albertsons-liveramp-recovered|albertsons-liveramp-complete|albertsons-zero-success-recovered|later-export-succeeded|resolved:export-healthy/.test(audienceTagText)
    || /later successful runs|export_finished/.test(groupSummaryText)) {
    return {
      name: "client_sent_recovered",
      confidence: "high",
      tags: ["resolved:export-healthy"],
      summary: `${alertLabel(alertFact)} classified as client_sent_recovered from same-audience recovered export evidence.`,
      evidence: [
        ...audienceEvidence("same_audience_annotation", audienceSummaries, audienceAnnotations),
        ...groupEvidence.map((item) => ({
          kind: "group_evidence",
          source: item.source,
          summary: item.summary,
          group_id: item.group_id,
          state: item.state,
        })),
      ],
    };
  }

  if (/albertsons-liveramp-progress|albertsons-zero-success-progress|monitoring:export-processing|waiting:uploads/.test(audienceTagText)
    || checkHasMonitoring(check?.value)) {
    return {
      name: "client_sent_export_in_progress",
      confidence: "high",
      tags: ["monitoring:export-processing"],
      summary: `${alertLabel(alertFact)} classified as client_sent_export_in_progress from monitoring export evidence.`,
      evidence: checkEvidence(check, "matching export check is monitoring"),
    };
  }

  if (check?.value.blockers?.includes("missing_export_after_alert")) {
    return {
      name: "client_sent_missing_export_after_alert",
      confidence: "medium",
      tags: ["triage:needs-evidence"],
      summary: `${alertLabel(alertFact)} classified as client_sent_missing_export_after_alert from preflight export check.`,
      evidence: checkEvidence(check, "preflight found Pizza rows but no matching export after alert"),
    };
  }

  if ((check?.value.blockers ?? []).some((blocker) => blocker === "evidence_unavailable" || blocker === "missing_run_identity")) {
    return {
      name: "needs_export_evidence",
      confidence: "low",
      tags: ["triage:needs-evidence"],
      summary: `${alertLabel(alertFact)} classified as needs_export_evidence from incomplete export check.`,
      evidence: checkEvidence(check, "export check did not have enough run identity evidence"),
    };
  }

  return {
    name: "needs_export_evidence",
    confidence: "low",
    tags: ["triage:needs-evidence"],
    summary: `${alertLabel(alertFact)} classified as needs_export_evidence because no durable export classification evidence matched.`,
    evidence: evidenceBase,
  };
}

async function loadAnnotations(): Promise<AlertAnnotation[]> {
  const annotationsPath = path.join(process.cwd(), "cases", "indexes", "alert_annotations.jsonl");
  let text: string;
  try {
    text = await Bun.file(annotationsPath).text();
  } catch {
    return [];
  }

  return text.split("\n").filter(Boolean).flatMap((line) => {
    try {
      return [JSON.parse(line) as AlertAnnotation];
    } catch {
      return [];
    }
  });
}

async function loadCheck(alertFact: AlertFact): Promise<{ path: string; value: ExportCheck } | undefined> {
  const checkId = `chk_${slug(`${alertFact.incident_id}_${alertFact.alert_id}`)}`;
  const checkPath = path.join(process.cwd(), "cases", "checks", checkId, "check.json");
  try {
    return { path: checkPath, value: await Bun.file(checkPath).json() as ExportCheck };
  } catch {
    return undefined;
  }
}

async function loadGroupEvidence(alertFact: AlertFact): Promise<Array<{ source: string; group_id: string; state?: string; summary: string }>> {
  const groupsRoot = path.join(process.cwd(), "cases", "groups");
  const matches = [];
  for (const groupDir of await findGroupDirs(groupsRoot)) {
    let state: GroupState;
    try {
      state = await Bun.file(path.join(groupDir, "state.json")).json() as GroupState;
    } catch {
      continue;
    }
    const hasAlert = (state.alert_refs ?? []).some((ref) => ref.incident_id === alertFact.incident_id && ref.alert_id === alertFact.alert_id);
    if (!hasAlert) continue;

    const evidencePath = path.join(groupDir, "evidence.jsonl");
    let evidenceText = "";
    try {
      evidenceText = await Bun.file(evidencePath).text();
    } catch {
      continue;
    }
    for (const line of evidenceText.split("\n").filter(Boolean)) {
      try {
        const parsed = JSON.parse(line) as { summary?: string };
        if (parsed.summary) matches.push({ source: evidencePath, group_id: state.group_id, state: state.state, summary: parsed.summary });
      } catch {
        matches.push({ source: evidencePath, group_id: state.group_id, state: state.state, summary: line });
      }
    }
  }
  return matches;
}

async function findGroupDirs(groupsRoot: string): Promise<string[]> {
  const states = await readdir(groupsRoot, { withFileTypes: true });
  const dirs: string[] = [];
  for (const stateDir of states) {
    if (!stateDir.isDirectory()) continue;
    const statePath = path.join(groupsRoot, stateDir.name);
    const groups = await readdir(statePath, { withFileTypes: true });
    for (const group of groups) {
      if (group.isDirectory()) dirs.push(path.join(statePath, group.name));
    }
  }
  return dirs;
}

function tagText(annotations: AlertAnnotation[]): string {
  return annotations.flatMap((annotation) => annotation.tags ?? []).join(" ");
}

function audienceEvidence(kind: string, summaries: string[], annotations: AlertAnnotation[]): unknown[] {
  return [{
    kind,
    matched: summaries.length > 0,
    summaries: summaries.slice(-5),
    sources: annotations.slice(-5).map((annotation) => annotation.source).filter(Boolean),
  }];
}

function checkEvidence(check: { path: string; value: ExportCheck } | undefined, summary: string): unknown[] {
  if (!check) return [{ kind: "export_check", matched: false, summary: "No export check found." }];
  return [{
    kind: "export_check",
    matched: true,
    source: check.path,
    summary,
    data: {
      state: check.value.state,
      blockers: check.value.blockers ?? [],
      run_evaluations: (check.value.run_evaluations ?? []).map((evaluation) => ({
        export_run_id: evaluation.export_run_id,
        health: evaluation.health,
        blockers: evaluation.blockers ?? [],
        export_state: evaluation.selected_row?.export_state,
        snapshotting_state: evaluation.selected_row?.snapshotting_state,
        failed_export_count: evaluation.selected_row?.failed_export_count,
        failure_reason: evaluation.selected_row?.raw?.failure_reason,
        row_created_at: evaluation.selected_row?.created_at,
      })),
      updated_at: check.value.updated_at,
    },
  }];
}

function checkHasMonitoring(check: ExportCheck | undefined): boolean {
  return check?.state === "monitoring" || (check?.run_evaluations ?? []).some((evaluation) => evaluation.health === "monitoring");
}

function alertLabel(alertFact: AlertFact): string {
  return `${alertFact.incident_id}/${alertFact.alert_id}${alertFact.audience_id ? ` audience ${alertFact.audience_id}` : ""}`;
}

function argValue(name: string): string | undefined {
  const index = process.argv.indexOf(name);
  return index >= 0 ? process.argv[index + 1] : undefined;
}

function emit(value: unknown): never {
  console.log(JSON.stringify(value));
  process.exit(0);
}

function slug(input: string): string {
  return input.toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_+|_+$/g, "").slice(0, 96) || "unknown";
}
