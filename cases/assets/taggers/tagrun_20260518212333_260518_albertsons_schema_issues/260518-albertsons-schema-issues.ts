import { readdir } from "node:fs/promises";
import path from "node:path";

type AlertFact = {
  alert_id: string;
  incident_id: string;
  org_id?: string;
  audience_id?: string;
  checked_export_run_ids?: string[];
  export_run_id?: string;
  summary?: string;
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
      created_at?: string;
      raw?: {
        failure_reason?: string | null;
      };
    };
  }>;
  updated_at?: string;
};

type AlertAnnotation = {
  alert_ref?: {
    incident_id?: string;
    alert_id?: string;
  };
  tags?: string[];
  summary?: string;
  evidence?: unknown;
};

type GroupState = {
  group_id: string;
  alert_refs?: Array<{
    incident_id: string;
    alert_id: string;
  }>;
};

const schemaPatterns = [
  /missing[_ -]?table[_ -]?field/i,
  /FieldNotFoundException/i,
  /field[^.]{0,80}(not present|not found|missing)/i,
  /missing fields?/i,
  /RFM_Category_Group/i,
  /Product_Attributes_Product_Group_categoryL/i,
];

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

const evidence = [];
const checkEvidence = await checkForSchemaEvidence(alert);
if (checkEvidence) evidence.push(checkEvidence);

const annotationEvidence = await annotationSchemaEvidence(alert);
if (annotationEvidence) evidence.push(annotationEvidence);

const groupEvidence = await scopedGroupSchemaEvidence(alert);
if (groupEvidence.length > 0) evidence.push(...groupEvidence);

if (evidence.length === 0) {
  emit({
    decision: "skip",
    confidence: "medium",
    summary: `${alertLabel(alert)} has no scoped schema evidence.`,
  });
}

const confidence = evidence.some((item) => item.kind === "export_check" || item.kind === "alert_annotation") ? "high" : "medium";
emit({
  decision: "tag",
  tags: ["evidence:albertsons-schema-issue", "triage:schema-issue"],
  confidence,
  summary: `${alertLabel(alert)} has scoped Albertsons schema evidence (${evidence.map((item) => item.kind).join(", ")}).`,
  evidence,
});

async function checkForSchemaEvidence(alertFact: AlertFact) {
  const checkId = `chk_${slug(`${alertFact.incident_id}_${alertFact.alert_id}`)}`;
  const checkPath = path.join(process.cwd(), "cases", "checks", checkId, "check.json");
  let check: ExportCheck;
  try {
    check = await Bun.file(checkPath).json() as ExportCheck;
  } catch {
    return undefined;
  }

  const evaluations = check.run_evaluations ?? [];
  const matching = evaluations.filter((evaluation) => {
    const haystack = [
      evaluation.export_run_id,
      evaluation.health,
      ...(evaluation.blockers ?? []),
      evaluation.selected_row?.snapshotting_state,
      evaluation.selected_row?.export_state,
      evaluation.selected_row?.raw?.failure_reason,
    ].filter(Boolean).join(" ");
    return isSchemaText(haystack);
  });

  if (matching.length === 0 && !isSchemaText([...(check.blockers ?? [])].join(" "))) return undefined;

  return {
    kind: "export_check",
    matched: true,
    source: checkPath,
    summary: `Export check contains schema evidence: check=${check.state}; matches=${matching.length}.`,
    data: {
      check_state: check.state,
      blockers: check.blockers ?? [],
      run_evaluations: matching.map((evaluation) => ({
        export_run_id: evaluation.export_run_id,
        health: evaluation.health,
        blockers: evaluation.blockers ?? [],
        snapshotting_state: evaluation.selected_row?.snapshotting_state,
        export_state: evaluation.selected_row?.export_state,
        failure_reason: evaluation.selected_row?.raw?.failure_reason,
        row_created_at: evaluation.selected_row?.created_at,
      })),
      updated_at: check.updated_at,
    },
  };
}

async function annotationSchemaEvidence(alertFact: AlertFact) {
  const annotationsPath = path.join(process.cwd(), "cases", "indexes", "alert_annotations.jsonl");
  let text: string;
  try {
    text = await Bun.file(annotationsPath).text();
  } catch {
    return undefined;
  }

  const matches = text.split("\n").filter(Boolean).flatMap((line) => {
    try {
      const annotation = JSON.parse(line) as AlertAnnotation;
      if (annotation.alert_ref?.incident_id !== alertFact.incident_id || annotation.alert_ref?.alert_id !== alertFact.alert_id) return [];
      const haystack = JSON.stringify({
        tags: annotation.tags ?? [],
        summary: annotation.summary,
        evidence: annotation.evidence,
      });
      return isSchemaText(haystack) ? [annotation] : [];
    } catch {
      return [];
    }
  });

  if (matches.length === 0) return undefined;

  return {
    kind: "alert_annotation",
    matched: true,
    source: annotationsPath,
    summary: `Existing alert annotations contain schema evidence (${matches.length} match(es)).`,
    data: {
      tags: sortedUnique(matches.flatMap((match) => match.tags ?? [])),
      summaries: matches.map((match) => match.summary).filter(Boolean),
    },
  };
}

async function scopedGroupSchemaEvidence(alertFact: AlertFact) {
  const groupsRoot = path.join(process.cwd(), "cases", "groups");
  const groupDirs = await findGroupDirs(groupsRoot);
  const scopedNeedles = sortedUnique([
    alertFact.alert_id,
    alertFact.audience_id,
    alertFact.export_run_id,
    ...(alertFact.checked_export_run_ids ?? []),
  ].filter((value): value is string => Boolean(value)));
  const matches = [];

  for (const groupDir of groupDirs) {
    let state: GroupState;
    try {
      state = await Bun.file(path.join(groupDir, "state.json")).json() as GroupState;
    } catch {
      continue;
    }
    const hasAlert = (state.alert_refs ?? []).some((ref) => ref.incident_id === alertFact.incident_id && ref.alert_id === alertFact.alert_id);
    if (!hasAlert) continue;

    const evidencePath = path.join(groupDir, "evidence.jsonl");
    let evidenceText: string;
    try {
      evidenceText = await Bun.file(evidencePath).text();
    } catch {
      continue;
    }

    const summaries = evidenceText.split("\n").filter(Boolean).flatMap((line) => {
      if (!isSchemaText(line) || isNegatedSchemaEvidence(line)) return [];
      if (!isScopedToAlert(line, scopedNeedles)) return [];
      try {
        const parsed = JSON.parse(line) as { summary?: string; kind?: string; source?: string };
        return [{
          kind: parsed.kind,
          source: parsed.source,
          summary: parsed.summary ?? line,
        }];
      } catch {
        return [{ summary: line }];
      }
    });

    if (summaries.length > 0) {
      matches.push({
        kind: "group_evidence",
        matched: true,
        source: evidencePath,
        summary: `Scoped group evidence contains schema evidence for ${alertLabel(alertFact)}.`,
        data: {
          group_id: state.group_id,
          evidence: summaries,
        },
      });
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

function isSchemaText(text: string): boolean {
  return schemaPatterns.some((pattern) => pattern.test(text));
}

function isNegatedSchemaEvidence(text: string): boolean {
  return /not (client )?schema or missing field evidence/i.test(text)
    || /no (client )?schema or missing field evidence/i.test(text)
    || /no missing[_ -]?table[_ -]?field failure reason/i.test(text);
}

function isScopedToAlert(text: string, needles: string[]): boolean {
  return needles.some((needle) => needle.length > 0 && text.includes(needle));
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

function sortedUnique(values: string[]): string[] {
  return [...new Set(values)].sort();
}
