import path from "node:path";
import { readFile, writeFile } from "node:fs/promises";
import { appendJsonl, ensureDir, listDirs, readJson, relativePath, slug, writeJson } from "./fsutil";
import { loadAlertFacts, parseIncidentId } from "./pagerduty";
import type { ActionEvent, AlertFact, DecisionEvent, EvidenceEvent, GroupState, IndexGroup, LineageEvent, WorkspaceIndex } from "./schema";

export const GROUPING_VERSION = 1;

export async function initWorkspace(workspaceDir: string): Promise<void> {
  await ensureDir(path.join(workspaceDir, "incidents"));
  await ensureDir(path.join(workspaceDir, "groups"));
  await ensureDir(path.join(workspaceDir, "artifacts"));
  await ensureDir(path.join(workspaceDir, "indexes"));
  await regenerateIndex(workspaceDir);
}

export async function importPagerDutyIncident(options: {
  workspaceDir: string;
  incident: string;
  alertsFile?: string;
}): Promise<{ incident_id: string; alert_count: number }> {
  await initWorkspace(options.workspaceDir);
  const loaded = await loadAlertFacts({
    incident: options.incident,
    ...(options.alertsFile ? { alertsFile: options.alertsFile } : {}),
  });
  const incidentDir = path.join(options.workspaceDir, "incidents", loaded.incident.incident_id);
  await ensureDir(incidentDir);
  await writeJson(path.join(incidentDir, "incident.json"), loaded.incident);
  await writeFile(path.join(incidentDir, "alerts.raw.txt"), loaded.rawText);
  await writeFile(path.join(incidentDir, "alerts.jsonl"), loaded.alerts.map((alert) => JSON.stringify(alert)).join("\n") + "\n");
  await appendJsonl(path.join(options.workspaceDir, "events.jsonl"), {
    ts: new Date().toISOString(),
    kind: "incident_imported",
    incident_id: loaded.incident.incident_id,
    alert_count: loaded.alerts.length,
  });
  return { incident_id: loaded.incident.incident_id, alert_count: loaded.alerts.length };
}

export async function groupImportedAlerts(workspaceDir: string): Promise<{ created: number; attached: number; groups: string[] }> {
  await initWorkspace(workspaceDir);
  const alerts = await loadAllAlerts(workspaceDir);
  const existingGroups = await loadAllGroups(workspaceDir);
  const groupsById = new Map(existingGroups.map((group) => [group.group_id, group]));
  const byKey = new Map(existingGroups.map((group) => [group.deterministic_key, group]));
  for (const group of existingGroups) {
    if (group.state !== "resolved" || !group.tags.includes("resolved:merged")) continue;
    const redirectTargetId = group.related_group_ids.find((groupId) => {
      const related = groupsById.get(groupId);
      return related?.state !== "resolved";
    });
    if (!redirectTargetId) continue;
    const redirectTarget = groupsById.get(redirectTargetId);
    if (redirectTarget) byKey.set(group.deterministic_key, redirectTarget);
  }
  const now = new Date().toISOString();
  let created = 0;
  let attached = 0;
  const touched = new Set<string>();

  for (const alert of alerts) {
    const key = deterministicGroupKey(alert);
    const existing = byKey.get(key);
    if (existing) {
      if (!existing.alert_refs.some((ref) => ref.incident_id === alert.incident_id && ref.alert_id === alert.alert_id)) {
        existing.alert_refs.push({ incident_id: alert.incident_id, alert_id: alert.alert_id });
        existing.incident_ids = sortedUnique([...existing.incident_ids, alert.incident_id]);
        existing.updated_at = now;
        await writeGroupState(workspaceDir, existing);
        await appendDecision(workspaceDir, existing.group_id, {
          ts: now,
          actor: "oncall-triage",
          decision: "attached_alert_to_existing_group",
          rationale: `Alert matched deterministic key ${key}.`,
        });
        attached++;
      }
      touched.add(existing.group_id);
      continue;
    }

    const group = newGroup(alert, key, now, existingGroups.length + created + 1);
    byKey.set(key, group);
    await writeGroupState(workspaceDir, group);
    await writeCaseMarkdown(workspaceDir, group);
    await appendDecision(workspaceDir, group.group_id, {
      ts: now,
      actor: "oncall-triage",
      decision: "created_group",
      rationale: `Conservative deterministic grouping created a new group for ${key}.`,
    });
    created++;
    touched.add(group.group_id);
  }

  await regenerateIndex(workspaceDir);
  return { created, attached, groups: [...touched].sort() };
}

export async function transitionGroup(options: {
  workspaceDir: string;
  groupId: string;
  state: GroupState["state"];
  tag?: string;
  summary: string;
  actor?: string;
}): Promise<GroupState> {
  const group = await readGroupState(options.workspaceDir, options.groupId);
  const now = new Date().toISOString();
  group.state = options.state;
  if (options.tag && !group.tags.includes(options.tag)) group.tags.push(options.tag);
  group.summary = options.summary;
  group.updated_at = now;
  await writeGroupState(options.workspaceDir, group);
  await appendDecision(options.workspaceDir, group.group_id, {
    ts: now,
    actor: options.actor ?? "agent",
    decision: `transitioned_to_${options.state}`,
    rationale: options.summary,
  });
  await writeCaseMarkdown(options.workspaceDir, group);
  await regenerateIndex(options.workspaceDir);
  return group;
}

export async function mergeGroups(options: {
  workspaceDir: string;
  sourceGroupId: string;
  targetGroupId: string;
  rationale: string;
  actor?: string;
}): Promise<{ source: GroupState; target: GroupState }> {
  await initWorkspace(options.workspaceDir);
  if (options.sourceGroupId === options.targetGroupId) throw new Error("Source and target groups must differ.");

  const now = new Date().toISOString();
  const source = await readGroupState(options.workspaceDir, options.sourceGroupId);
  const target = await readGroupState(options.workspaceDir, options.targetGroupId);
  const actor = options.actor ?? "agent";

  source.state = "resolved";
  if (!source.tags.includes("resolved:merged")) source.tags.push("resolved:merged");
  source.summary = `Merged into ${target.group_id}: ${options.rationale}`;
  source.next_action = `Follow target group ${target.group_id}.`;
  source.updated_at = now;
  source.related_group_ids = sortedUnique([...source.related_group_ids, target.group_id]);

  target.alert_refs = sortedUniqueRefs([...target.alert_refs, ...source.alert_refs]);
  target.incident_ids = sortedUnique([...target.incident_ids, ...source.incident_ids]);
  target.updated_at = now;
  target.related_group_ids = sortedUnique([...target.related_group_ids, source.group_id]);

  await writeGroupState(options.workspaceDir, source);
  await writeGroupState(options.workspaceDir, target);
  await appendLineage(options.workspaceDir, source.group_id, {
    ts: now,
    actor,
    kind: "merge",
    related_group_id: target.group_id,
    summary: `Merged into ${target.group_id}.`,
    rationale: options.rationale,
  });
  await appendLineage(options.workspaceDir, target.group_id, {
    ts: now,
    actor,
    kind: "merge",
    related_group_id: source.group_id,
    summary: `Received merge from ${source.group_id}.`,
    rationale: options.rationale,
  });
  await writeCaseMarkdown(options.workspaceDir, source);
  await writeCaseMarkdown(options.workspaceDir, target);
  await regenerateIndex(options.workspaceDir);
  return { source, target };
}

export async function splitGroup(options: {
  workspaceDir: string;
  sourceGroupId: string;
  alertIds: string[];
  rationale: string;
  actor?: string;
}): Promise<{ source: GroupState; created: GroupState }> {
  await initWorkspace(options.workspaceDir);
  const source = await readGroupState(options.workspaceDir, options.sourceGroupId);
  const selected = new Set(options.alertIds);
  const moving = source.alert_refs.filter((ref) => selected.has(ref.alert_id));
  if (moving.length === 0) throw new Error("No matching alert ids found in source group.");

  const now = new Date().toISOString();
  const actor = options.actor ?? "agent";
  const remaining = source.alert_refs.filter((ref) => !selected.has(ref.alert_id));
  const allGroups = await loadAllGroups(options.workspaceDir);
  const created = newSplitGroup(source, moving, allGroups.length + 1, now, options.rationale);

  source.alert_refs = remaining;
  source.incident_ids = sortedUnique(remaining.map((ref) => ref.incident_id));
  source.updated_at = now;
  source.related_group_ids = sortedUnique([...source.related_group_ids, created.group_id]);

  await writeGroupState(options.workspaceDir, source);
  await writeGroupState(options.workspaceDir, created);
  await appendLineage(options.workspaceDir, source.group_id, {
    ts: now,
    actor,
    kind: "split",
    related_group_id: created.group_id,
    summary: `Split ${moving.length} alert(s) into ${created.group_id}.`,
    rationale: options.rationale,
    alert_ids: options.alertIds,
  });
  await appendLineage(options.workspaceDir, created.group_id, {
    ts: now,
    actor,
    kind: "split",
    related_group_id: source.group_id,
    summary: `Split from ${source.group_id}.`,
    rationale: options.rationale,
    alert_ids: options.alertIds,
  });
  await writeCaseMarkdown(options.workspaceDir, source);
  await writeCaseMarkdown(options.workspaceDir, created);
  await regenerateIndex(options.workspaceDir);
  return { source, created };
}

export async function appendEvidence(workspaceDir: string, groupId: string, event: EvidenceEvent): Promise<void> {
  await appendJsonl(path.join(groupDir(workspaceDir, groupId), "evidence.jsonl"), event);
}

export async function appendDecision(workspaceDir: string, groupId: string, event: DecisionEvent): Promise<void> {
  await appendJsonl(path.join(groupDir(workspaceDir, groupId), "decisions.jsonl"), event);
}

export async function appendAction(workspaceDir: string, groupId: string, event: ActionEvent): Promise<void> {
  await appendJsonl(path.join(groupDir(workspaceDir, groupId), "actions.jsonl"), event);
}

export async function appendLineage(workspaceDir: string, groupId: string, event: LineageEvent): Promise<void> {
  await appendJsonl(path.join(groupDir(workspaceDir, groupId), "lineage.jsonl"), event);
}

export async function regenerateIndex(workspaceDir: string): Promise<WorkspaceIndex> {
  await ensureDir(path.join(workspaceDir, "indexes"));
  const groups = await loadAllGroups(workspaceDir);
  const indexGroups: IndexGroup[] = groups
    .map((group) => ({
      group_id: group.group_id,
      state: group.state,
      tags: group.tags,
      title: group.title,
      summary: group.summary,
      ...(group.next_action ? { next_action: group.next_action } : {}),
      ...(group.next_check_at ? { next_check_at: group.next_check_at } : {}),
      incident_ids: group.incident_ids,
      alert_count: group.alert_refs.length,
      path: relativePath(workspaceDir, path.join(groupDir(workspaceDir, group.group_id), "case.md")),
    }))
    .sort((a, b) => stateRank(a.state) - stateRank(b.state) || a.group_id.localeCompare(b.group_id));
  const index: WorkspaceIndex = {
    generated_at: new Date().toISOString(),
    open_count: indexGroups.filter((group) => group.state !== "resolved").length,
    groups: indexGroups,
  };
  await writeJson(path.join(workspaceDir, "index.json"), index);
  await writeJson(path.join(workspaceDir, "indexes", "groups.json"), indexGroups);
  await writeFile(path.join(workspaceDir, "index.md"), renderIndex(index));
  return index;
}

export async function loadAllAlerts(workspaceDir: string): Promise<AlertFact[]> {
  const incidentsDir = path.join(workspaceDir, "incidents");
  const incidentIds = await listDirs(incidentsDir);
  const alerts: AlertFact[] = [];
  for (const incidentId of incidentIds) {
    const file = path.join(incidentsDir, incidentId, "alerts.jsonl");
    try {
      const lines = (await readFile(file, "utf8")).split("\n").filter(Boolean);
      alerts.push(...lines.map((line) => JSON.parse(line) as AlertFact));
    } catch (err) {
      if ((err as NodeJS.ErrnoException).code !== "ENOENT") throw err;
    }
  }
  return alerts;
}

export async function loadAllGroups(workspaceDir: string): Promise<GroupState[]> {
  const ids = await listDirs(path.join(workspaceDir, "groups"));
  const groups: GroupState[] = [];
  for (const id of ids) {
    try {
      groups.push(await readGroupState(workspaceDir, id));
    } catch (err) {
      if ((err as NodeJS.ErrnoException).code !== "ENOENT") throw err;
    }
  }
  return groups;
}

export async function readGroupState(workspaceDir: string, groupId: string): Promise<GroupState> {
  return readJson<GroupState>(path.join(groupDir(workspaceDir, groupId), "state.json"));
}

export async function writeGroupState(workspaceDir: string, group: GroupState): Promise<void> {
  await writeJson(path.join(groupDir(workspaceDir, group.group_id), "state.json"), group);
}

export function deterministicGroupKey(alert: AlertFact): string {
  const org = alert.org_id || alert.org_id_numeric || "unknown_org";
  const destination = alert.endpoint_id || destinationFromRun(alert.export_run_id) || "unknown_destination";
  const audience = alert.audience_id ? `audience:${alert.audience_id}` : "audience:unknown";
  const signature = alert.error_signature || alert.summary;
  return [org, destination, audience, slug(signature)].join("|");
}

function destinationFromRun(runId: string | undefined): string | undefined {
  return runId?.split("-")[1];
}

function newGroup(alert: AlertFact, key: string, now: string, ordinal: number): GroupState {
  const org = alert.org_id || alert.org_id_numeric || "unknown_org";
  const destination = alert.endpoint_id || destinationFromRun(alert.export_run_id) || "unknown_destination";
  const audience = alert.audience_id || "unknown_audience";
  const group_id = `grp_${slug(org)}_${slug(destination)}_${slug(audience)}_${String(ordinal).padStart(4, "0")}`;
  return {
    group_id,
    state: "open",
    tags: ["triage:needs_review"],
    title: `${org} ${destination} audience ${audience}`,
    summary: alert.summary,
    deterministic_key: key,
    grouping_version: GROUPING_VERSION,
    created_at: now,
    updated_at: now,
    alert_refs: [{ incident_id: alert.incident_id, alert_id: alert.alert_id }],
    incident_ids: [alert.incident_id],
    related_group_ids: [],
  };
}

async function writeCaseMarkdown(workspaceDir: string, group: GroupState): Promise<void> {
  const lines = [
    `# ${group.title}`,
    "",
    `State: \`${group.state}\``,
    `Tags: ${group.tags.map((tag) => `\`${tag}\``).join(", ") || "none"}`,
    `Incidents: ${group.incident_ids.map((id) => `[${id}](https://growthloop.pagerduty.com/incidents/${id})`).join(", ")}`,
    `Alerts: ${group.alert_refs.length}`,
    "",
    "## Current Summary",
    "",
    group.summary || "No summary yet.",
    "",
    "## Next Action",
    "",
    group.next_action || "Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.",
    "",
    "## Decision Trail",
    "",
    "See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.",
    "",
  ];
  await writeFile(path.join(groupDir(workspaceDir, group.group_id), "case.md"), lines.join("\n"));
}

function renderIndex(index: WorkspaceIndex): string {
  const lines = [
    "# On-call Triage Cases",
    "",
    `Generated: ${index.generated_at}`,
    `Open groups: ${index.open_count}`,
    "",
    "| State | Tags | Group | Summary | Incidents | Alerts |",
    "|---|---|---|---|---|---:|",
  ];
  for (const group of index.groups) {
    lines.push(
      `| \`${group.state}\` | ${group.tags.map((tag) => `\`${tag}\``).join("<br>")} | [${group.group_id}](${group.path}) | ${escapeTable(group.summary)} | ${group.incident_ids.join("<br>")} | ${group.alert_count} |`,
    );
  }
  lines.push("");
  return lines.join("\n");
}

function stateRank(state: GroupState["state"]): number {
  return { open: 0, monitoring: 1, waiting: 2, resolved: 3 }[state];
}

function escapeTable(input: string): string {
  return input.replaceAll("|", "\\|").replaceAll("\n", " ");
}

function sortedUnique(values: string[]): string[] {
  return [...new Set(values)].sort();
}

function sortedUniqueRefs(values: { incident_id: string; alert_id: string }[]): { incident_id: string; alert_id: string }[] {
  const seen = new Set<string>();
  const refs: { incident_id: string; alert_id: string }[] = [];
  for (const ref of values) {
    const key = `${ref.incident_id}::${ref.alert_id}`;
    if (seen.has(key)) continue;
    seen.add(key);
    refs.push(ref);
  }
  return refs.sort((a, b) => a.incident_id.localeCompare(b.incident_id) || a.alert_id.localeCompare(b.alert_id));
}

function newSplitGroup(
  source: GroupState,
  refs: { incident_id: string; alert_id: string }[],
  ordinal: number,
  now: string,
  rationale: string,
): GroupState {
  const group_id = `grp_${slug(source.group_id)}_split_${String(ordinal).padStart(4, "0")}`;
  return {
    group_id,
    state: "open",
    tags: ["triage:needs_review"],
    title: `${source.title} split`,
    summary: rationale,
    deterministic_key: `${source.deterministic_key}|split|${refs.map((ref) => ref.alert_id).sort().join(",")}`,
    grouping_version: GROUPING_VERSION,
    created_at: now,
    updated_at: now,
    alert_refs: refs,
    incident_ids: sortedUnique(refs.map((ref) => ref.incident_id)),
    related_group_ids: [source.group_id],
  };
}

function groupDir(workspaceDir: string, groupId: string): string {
  return path.join(workspaceDir, "groups", groupId);
}
