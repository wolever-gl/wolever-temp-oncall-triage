import path from "node:path";
import { copyFile, mkdtemp, readFile, rm, writeFile } from "node:fs/promises";
import { createHash } from "node:crypto";
import { execFile } from "node:child_process";
import { promisify } from "node:util";
import { tmpdir } from "node:os";
import { appendJsonl, ensureDir, listDirs, readJson, relativePath, slug, writeJson } from "./fsutil";
import { fetchPagerDutyIncidentStatus, loadAlertFacts, parseAlertFacts } from "./pagerduty";
import type {
  ActionEvent,
  AlertAnnotation,
  AlertFact,
  AlertRef,
  DecisionEvent,
  EvidenceEvent,
  GroupState,
  IndexAlertFact,
  IndexGroup,
  IncidentRecord,
  LineageEvent,
  MatchRule,
  PagerDutyIncidentStatus,
  TaggerResult,
  WorkspaceIndex,
} from "./schema";

export const GROUPING_VERSION = 3;
const execFileAsync = promisify(execFile);

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
  allowPartial?: boolean;
}): Promise<{ incident_id: string; alert_count: number }> {
  await initWorkspace(options.workspaceDir);
  const loaded = await loadAlertFacts({
    incident: options.incident,
    ...(options.alertsFile ? { alertsFile: options.alertsFile } : {}),
    ...(options.allowPartial ? { allowPartial: options.allowPartial } : {}),
  });
  const incidentDir = path.join(options.workspaceDir, "incidents", loaded.incident.incident_id);
  await ensureDir(incidentDir);
  await writeJson(path.join(incidentDir, "incident.json"), loaded.incident);
  await writeFile(path.join(incidentDir, "alerts.raw.txt"), loaded.rawText);
  await writeFile(path.join(incidentDir, "alerts.v2.jsonl"), renderJsonl(loaded.alerts));
  await writeFile(path.join(incidentDir, "alerts.jsonl"), loaded.alerts.map((alert) => JSON.stringify(alert)).join("\n") + "\n");
  await appendJsonl(path.join(options.workspaceDir, "events.jsonl"), {
    ts: new Date().toISOString(),
    kind: "incident_imported",
    incident_id: loaded.incident.incident_id,
    alert_count: loaded.alerts.length,
  });
  return { incident_id: loaded.incident.incident_id, alert_count: loaded.alerts.length };
}

export async function syncPagerDutyWorkspace(options: {
  workspaceDir: string;
  incidents?: string[];
  fetchIncidentStatus?: (incident: string) => Promise<{ incident_id: string; status: PagerDutyIncidentStatus; refreshed_at: string; resolved_at?: string }>;
}): Promise<{
  imported: string[];
  refreshed: string[];
  resolved_groups: string[];
}> {
  await initWorkspace(options.workspaceDir);
  const imported: string[] = [];
  const refreshed: string[] = [];
  const fetchIncidentStatus = options.fetchIncidentStatus ?? fetchPagerDutyIncidentStatus;

  for (const incident of options.incidents ?? []) {
    const importedIncident = await importPagerDutyIncident({ workspaceDir: options.workspaceDir, incident });
    imported.push(importedIncident.incident_id);
  }
  if (imported.length > 0) await groupImportedAlerts(options.workspaceDir);

  const incidentRecords = await loadIncidentRecords(options.workspaceDir);
  const previousStatusById = new Map(incidentRecords.map((record) => [record.incident_id, record.status]));
  const incidentById = new Map(incidentRecords.map((record) => [record.incident_id, record]));
  for (const record of incidentRecords) {
    const refreshedRecord = await fetchIncidentStatus(record.incident_id);
    const nextRecord: IncidentRecord = {
      ...record,
      ...refreshedRecord,
      incident_id: record.incident_id,
    };
    await writeIncidentRecord(options.workspaceDir, nextRecord);
    refreshed.push(record.incident_id);
    incidentById.set(record.incident_id, nextRecord);
  }

  const resolved_groups: string[] = [];
  for (const group of await loadAllGroups(options.workspaceDir)) {
    if (group.state === "resolved") continue;
    const groupIncidentStatuses = group.incident_ids.map((incident_id) => incidentById.get(incident_id));
    if (groupIncidentStatuses.some((record) => !record)) continue;
    const groupIncidentRecords = groupIncidentStatuses.filter((record): record is IncidentRecord => Boolean(record));
    const resolvedIncidentRecords = groupIncidentRecords.filter((record) => isResolvedIncident(record.status));
    if (resolvedIncidentRecords.length === 0) continue;

    const resolvedIds = resolvedIncidentRecords.map((record) => record.incident_id).sort();
    const openIds = group.incident_ids.filter((incident_id) => !resolvedIds.includes(incident_id));
    const summary = "All attached PagerDuty incidents are resolved externally.";

    if (resolvedIds.length === group.incident_ids.length) {
      const updated = await transitionGroup({
        workspaceDir: options.workspaceDir,
        groupId: group.group_id,
        state: "resolved",
        tag: "resolved:pd_closed_external",
        summary,
        actor: "pagerduty-sync",
      });
      await appendEvidence(options.workspaceDir, updated.group_id, {
        ts: new Date().toISOString(),
        kind: "pd_sync",
        source: "pagerduty",
        summary: `${summary} Attached incidents: ${resolvedIds.join(", ")}.`,
        data: {
          resolved_incidents: resolvedIds,
          incident_statuses: groupIncidentStatuses.map((record) => ({ incident_id: record!.incident_id, status: record!.status, resolved_at: record!.resolved_at })),
        },
      });
      resolved_groups.push(updated.group_id);
      continue;
    }

    const newlyResolvedIds = resolvedIncidentRecords
      .filter((record) => !isResolvedIncident(previousStatusById.get(record.incident_id)))
      .map((record) => record.incident_id)
      .sort();
    if (newlyResolvedIds.length === 0) continue;

    await appendEvidence(options.workspaceDir, group.group_id, {
      ts: new Date().toISOString(),
      kind: "pd_sync",
      source: "pagerduty",
      summary: `PagerDuty status refresh: resolved ${resolvedIds.join(", ")}; still open ${openIds.join(", ")}.`,
      data: {
        resolved_incidents: resolvedIds,
        open_incidents: openIds,
        newly_resolved_incidents: newlyResolvedIds,
      },
    });
    await appendDecision(options.workspaceDir, group.group_id, {
      ts: new Date().toISOString(),
      actor: "pagerduty-sync",
      decision: "pd_incidents_partially_resolved",
      rationale: `PagerDuty incidents resolved externally for ${resolvedIds.join(", ")}; remaining incidents still open: ${openIds.join(", ")}.`,
    });
  }

  await regenerateIndex(options.workspaceDir);
  return { imported, refreshed, resolved_groups };
}

export async function groupImportedAlerts(workspaceDir: string): Promise<{ created: number; attached: number; groups: string[] }> {
  await initWorkspace(workspaceDir);
  const alerts = await loadAllAlerts(workspaceDir);
  const existingGroups = await loadAllGroups(workspaceDir);
  const groupsById = new Map(existingGroups.map((group) => [group.group_id, group]));
  const matchRules = await loadMatchRules(workspaceDir);
  const byKey = new Map<string, MatchRule>(matchRules.map((rule) => [rule.match_key, rule]));
  const now = new Date().toISOString();
  let created = 0;
  let attached = 0;
  const touched = new Set<string>();

  for (const alert of alerts) {
    const key = deterministicGroupKey(alert);
    const rule = byKey.get(key);
    if (rule?.status === "ambiguous") {
      continue;
    }
    const existing = rule?.target_group_id ? groupsById.get(rule.target_group_id) : undefined;
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

    const group = newGroup(alert, key, now, [...groupsById.keys(), ...[...touched]]);
    groupsById.set(group.group_id, group);
    const matchRule: MatchRule = {
      match_key: key,
      status: "active",
      target_group_id: group.group_id,
      reason: "created",
      created_at: now,
      created_by: "oncall-triage",
      rationale: `Initial deterministic grouping for ${group.group_id}.`,
    };
    byKey.set(key, matchRule);
    matchRules.push(matchRule);
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

  await writeMatchRules(workspaceDir, matchRules);
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
  const matchRules = await loadMatchRules(options.workspaceDir);
  let changedRules = false;
  for (const rule of matchRules) {
    if (rule.status !== "active" || rule.target_group_id !== source.group_id) continue;
    rule.status = "redirect";
    rule.target_group_id = target.group_id;
    rule.reason = "merged";
    rule.rationale = options.rationale;
    changedRules = true;
  }
  if (changedRules) await writeMatchRules(options.workspaceDir, matchRules);
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

export async function runAlertTagger(options: {
  workspaceDir: string;
  filters: Parameters<typeof queryAlertFacts>[1];
  scriptPath: string;
  tags?: string[];
  limit?: number;
  test?: boolean;
}): Promise<{ run_id: string; candidates: number; processed: number; tagged: number; skipped: number; needs_evidence: number; results: AlertAnnotation[] }> {
  await initWorkspace(options.workspaceDir);
  const alerts = await queryAlertFacts(options.workspaceDir, options.filters);
  const selected = typeof options.limit === "number" ? alerts.slice(0, options.limit) : alerts;
  const now = new Date().toISOString();
  const run_id = `tagrun_${now.replace(/\D/g, "").slice(0, 14)}_${slug(path.basename(options.scriptPath, path.extname(options.scriptPath)))}`;
  const scriptText = await readFile(options.scriptPath);
  const script_sha256 = createHash("sha256").update(scriptText).digest("hex");
  const runDir = path.join(options.workspaceDir, "assets", "taggers", run_id);
  const archivedScript = path.join(runDir, path.basename(options.scriptPath));
  const resultsDir = path.join(runDir, "results");
  if (!options.test) {
    await ensureDir(resultsDir);
    await copyFile(options.scriptPath, archivedScript);
    await writeJson(path.join(runDir, "manifest.json"), {
      run_id,
      created_at: now,
      script_path: archivedScript,
      script_sha256,
      filters: options.filters,
      requested_tags: options.tags ?? [],
      candidate_count: alerts.length,
      processed_count: selected.length,
    });
  }

  const annotations: AlertAnnotation[] = [];
  let skipped = 0;
  let needs_evidence = 0;
  for (const alert of selected) {
    const alertFile = path.join(resultsDir, `${alert.incident_id}__${alert.alert_id}.alert.json`);
    if (!options.test) await writeJson(alertFile, alert);
    const taggerRun = await runTaggerScript(options.test ? options.scriptPath : archivedScript, options.test ? alert : undefined, alertFile);
    const tags = taggerRun.result.decision === "tag" ? sortedUnique([...(options.tags ?? []), ...(taggerRun.result.tags ?? [])]) : [];
    const annotation: AlertAnnotation = {
      ts: new Date().toISOString(),
      alert_ref: { incident_id: alert.incident_id, alert_id: alert.alert_id },
      tags,
      decision: taggerRun.result.decision,
      ...(taggerRun.result.confidence ? { confidence: taggerRun.result.confidence } : {}),
      summary: taggerRun.result.summary,
      source: {
        kind: "tagger",
        run_id,
        script_sha256,
        script_path: options.test ? options.scriptPath : archivedScript,
      },
      ...(taggerRun.result.evidence ? { evidence: taggerRun.result.evidence } : {}),
    };
    annotations.push(annotation);
    if (annotation.decision === "skip") skipped++;
    if (annotation.decision === "needs_evidence") needs_evidence++;
    if (!options.test) {
      await writeJson(path.join(resultsDir, `${alert.incident_id}__${alert.alert_id}.result.json`), {
        annotation,
        process: taggerRun.process,
      });
      await appendJsonl(alertAnnotationsFile(options.workspaceDir), annotation);
    }
  }

  return {
    run_id,
    candidates: alerts.length,
    processed: selected.length,
    tagged: annotations.filter((annotation) => annotation.decision === "tag").length,
    skipped,
    needs_evidence,
    results: annotations,
  };
}

export async function groupTaggedAlerts(options: {
  workspaceDir: string;
  tags: string[];
  title: string;
  summary: string;
  rationale: string;
  groupId?: string;
  state?: GroupState["state"];
  groupTags?: string[];
  limit?: number;
  test?: boolean;
  actor?: string;
}): Promise<{ group: GroupState; matched: number; would_create: boolean; test: boolean }> {
  await initWorkspace(options.workspaceDir);
  if (options.tags.length === 0) throw new Error("At least one --tag is required.");
  const annotations = await loadAlertAnnotations(options.workspaceDir);
  const refs = refsWithTags(annotations, options.tags);
  const selectedRefs = typeof options.limit === "number" ? refs.slice(0, options.limit) : refs;
  if (selectedRefs.length === 0) throw new Error("No tagged alerts matched the requested tags.");

  const alerts = await loadAllAlerts(options.workspaceDir);
  const alertsByRef = new Map(alerts.map((alert) => [alertKey(alert), alert]));
  const selectedAlerts = selectedRefs.map((ref) => alertsByRef.get(refKey(ref))).filter((alert): alert is AlertFact => Boolean(alert));
  if (selectedAlerts.length === 0) throw new Error("Tagged alerts matched annotations, but no current alert facts were found.");

  const existingGroups = await loadAllGroups(options.workspaceDir);
  const groupId = options.groupId ?? uniqueGroupId(agentGroupIdBase(selectedAlerts, options.title), existingGroups.map((group) => group.group_id));
  const now = new Date().toISOString();
  const previousTarget = existingGroups.find((group) => group.group_id === groupId);
  const target = buildTaggedGroup({
    ...(previousTarget ? { previousTarget } : {}),
    groupId,
    selectedRefs,
    title: options.title,
    summary: options.summary,
    ...(options.state ? { state: options.state } : {}),
    groupTags: options.groupTags ?? [],
    now,
  });
  if (options.test) return { group: target, matched: selectedRefs.length, would_create: !previousTarget, test: true };

  await moveRefsIntoGroup({
    workspaceDir: options.workspaceDir,
    target,
    existingGroups,
    refs: selectedRefs,
    actor: options.actor ?? "agent",
    rationale: options.rationale,
  });
  await appendDecision(options.workspaceDir, target.group_id, {
    ts: now,
    actor: options.actor ?? "agent",
    decision: previousTarget ? "updated_group_from_tags" : "created_group_from_tags",
    rationale: options.rationale,
  });
  await appendEvidence(options.workspaceDir, target.group_id, {
    ts: now,
    kind: "tag_grouping",
    source: "oncall-triage",
    summary: options.summary,
    data: {
      tags: options.tags,
      alert_count: selectedRefs.length,
    },
  });
  await regenerateIndex(options.workspaceDir);
  return { group: target, matched: selectedRefs.length, would_create: !previousTarget, test: false };
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
  const alerts = await loadAllAlerts(workspaceDir);
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
  const indexAlerts: IndexAlertFact[] = alerts.map(indexAlertFact).sort((a, b) => a.created_at.localeCompare(b.created_at) || a.incident_id.localeCompare(b.incident_id) || a.alert_id.localeCompare(b.alert_id));
  const index: WorkspaceIndex = {
    generated_at: new Date().toISOString(),
    open_count: indexGroups.filter((group) => group.state !== "resolved").length,
    groups: indexGroups,
    alert_count: indexAlerts.length,
  };
  await writeJson(path.join(workspaceDir, "index.json"), index);
  await writeJson(path.join(workspaceDir, "indexes", "groups.json"), indexGroups);
  await writeJson(path.join(workspaceDir, "indexes", "alert_facts.json"), indexAlerts);
  await ensureMatchRulesFile(workspaceDir);
  await writeFile(path.join(workspaceDir, "index.md"), renderIndex(index));
  return index;
}

export async function loadAllAlerts(workspaceDir: string): Promise<AlertFact[]> {
  const incidentsDir = path.join(workspaceDir, "incidents");
  const incidentIds = await listDirs(incidentsDir);
  const alerts: AlertFact[] = [];
  for (const incidentId of incidentIds) {
    const incidentDir = path.join(incidentsDir, incidentId);
    const v2File = path.join(incidentDir, "alerts.v2.jsonl");
    const rawFile = path.join(incidentDir, "alerts.raw.txt");
    const legacyFile = path.join(incidentDir, "alerts.jsonl");
    const file = await firstExistingFile([v2File]);
    if (!file) {
      const parsedFromRaw = await parseAlertsFromRawIfPresent(rawFile, incidentId);
      if (parsedFromRaw) {
        alerts.push(...parsedFromRaw);
        continue;
      }
    }
    const readableFile = file ?? (await firstExistingFile([legacyFile]));
    if (!readableFile) continue;
    try {
      const lines = (await readFile(readableFile, "utf8")).split("\n").filter(Boolean);
      alerts.push(...lines.map((line) => JSON.parse(line) as AlertFact));
    } catch (err) {
      if ((err as NodeJS.ErrnoException).code !== "ENOENT") throw err;
    }
  }
  return alerts;
}

export async function queryAlertFacts(
  workspaceDir: string,
  filters: {
    incidentId?: string;
    orgId?: string;
    audienceId?: string;
    destination?: string;
    state?: string;
  },
): Promise<AlertFact[]> {
  const alerts = await loadAllAlerts(workspaceDir);
  return alerts.filter((alert) => {
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

export async function loadIncidentRecords(workspaceDir: string): Promise<IncidentRecord[]> {
  const ids = await listDirs(path.join(workspaceDir, "incidents"));
  const incidents: IncidentRecord[] = [];
  for (const id of ids) {
    try {
      incidents.push(await readIncidentRecord(workspaceDir, id));
    } catch (err) {
      if ((err as NodeJS.ErrnoException).code !== "ENOENT") throw err;
    }
  }
  return incidents;
}

export async function readGroupState(workspaceDir: string, groupId: string): Promise<GroupState> {
  return readJson<GroupState>(path.join(groupDir(workspaceDir, groupId), "state.json"));
}

export async function writeGroupState(workspaceDir: string, group: GroupState): Promise<void> {
  await writeJson(path.join(groupDir(workspaceDir, group.group_id), "state.json"), group);
}

export async function readIncidentRecord(workspaceDir: string, incidentId: string): Promise<IncidentRecord> {
  return readJson<IncidentRecord>(path.join(workspaceDir, "incidents", incidentId, "incident.json"));
}

export async function writeIncidentRecord(workspaceDir: string, incident: IncidentRecord): Promise<void> {
  await writeJson(path.join(workspaceDir, "incidents", incident.incident_id, "incident.json"), incident);
}

export function deterministicGroupKey(alert: AlertFact): string {
  const org = alert.org_id || alert.org_id_numeric || "unknown_org";
  const grouping = groupingParts(alert);
  return [
    `v3`,
    `incident:${alert.incident_id}`,
    `org:${org}`,
    ...(grouping.destination ? [`dest:${grouping.destination}`] : []),
    `class:${grouping.failureClass}`,
  ].join("|");
}

function destinationFromRun(runId: string | undefined): string | undefined {
  return runId?.split("-")[1];
}

function isResolvedIncident(status: PagerDutyIncidentStatus | undefined): boolean {
  return status === "resolved" || status === "closed";
}

function newGroup(alert: AlertFact, key: string, now: string, existingGroupIds: string[]): GroupState {
  const org = alert.org_id || alert.org_id_numeric || "unknown_org";
  const grouping = groupingParts(alert);
  const group_id = uniqueGroupId(
    [groupDate(alert), groupOrgPart(org), ...(grouping.destination ? [groupIdPart(grouping.destination)] : []), groupIdPart(grouping.failureClass)].join("-"),
    existingGroupIds,
  );
  const title = [org, grouping.destination, grouping.failureClass].filter(Boolean).join(" ");
  return {
    group_id,
    state: "open",
    tags: ["triage:needs_review"],
    title,
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

export async function loadMatchRules(workspaceDir: string): Promise<MatchRule[]> {
  try {
    return await readJson<MatchRule[]>(matchRulesFile(workspaceDir));
  } catch (err) {
    if ((err as NodeJS.ErrnoException).code === "ENOENT") return [];
    throw err;
  }
}

async function writeMatchRules(workspaceDir: string, rules: MatchRule[]): Promise<void> {
  await writeJson(matchRulesFile(workspaceDir), dedupeMatchRules(rules));
}

async function ensureMatchRulesFile(workspaceDir: string): Promise<void> {
  try {
    await readFile(matchRulesFile(workspaceDir), "utf8");
  } catch (err) {
    if ((err as NodeJS.ErrnoException).code !== "ENOENT") throw err;
    await writeMatchRules(workspaceDir, []);
  }
}

function matchRulesFile(workspaceDir: string): string {
  return path.join(workspaceDir, "indexes", "group_matches.json");
}

function alertAnnotationsFile(workspaceDir: string): string {
  return path.join(workspaceDir, "indexes", "alert_annotations.jsonl");
}

async function loadAlertAnnotations(workspaceDir: string): Promise<AlertAnnotation[]> {
  try {
    const lines = (await readFile(alertAnnotationsFile(workspaceDir), "utf8")).split("\n").filter(Boolean);
    return lines.map((line) => JSON.parse(line) as AlertAnnotation);
  } catch (err) {
    if ((err as NodeJS.ErrnoException).code === "ENOENT") return [];
    throw err;
  }
}

function refsWithTags(annotations: AlertAnnotation[], tags: string[]): AlertRef[] {
  const tagsByRef = new Map<string, { ref: AlertRef; tags: Set<string> }>();
  for (const annotation of annotations) {
    if (annotation.decision !== "tag") continue;
    const key = refKey(annotation.alert_ref);
    const entry = tagsByRef.get(key) ?? { ref: annotation.alert_ref, tags: new Set<string>() };
    for (const tag of annotation.tags) entry.tags.add(tag);
    tagsByRef.set(key, entry);
  }
  return [...tagsByRef.values()]
    .filter((entry) => tags.every((tag) => entry.tags.has(tag)))
    .map((entry) => entry.ref)
    .sort((a, b) => a.incident_id.localeCompare(b.incident_id) || a.alert_id.localeCompare(b.alert_id));
}

async function runTaggerScript(scriptPath: string, alert: AlertFact | undefined, alertFile: string): Promise<{
  result: TaggerResult;
  process: { stdout: string; stderr: string; exit_code: number | null; error?: string };
}> {
  let tempDir: string | undefined;
  let inputFile = alertFile;
  if (alert) {
    tempDir = await mkdtemp(path.join(tmpdir(), "oncall-alert-tagger-"));
    inputFile = path.join(tempDir, "alert.json");
    await writeJson(inputFile, alert);
  }
  try {
    const { stdout, stderr } = await execFileAsync("bun", ["run", scriptPath, "--alert", inputFile], { maxBuffer: 10 * 1024 * 1024 });
    try {
      const parsed = JSON.parse(stdout.trim()) as TaggerResult;
      validateTaggerResult(parsed);
      return { result: parsed, process: { stdout, stderr, exit_code: 0 } };
    } catch (err) {
      return {
        result: {
          decision: "needs_evidence",
          confidence: "low",
          summary: `Tagger output could not be parsed: ${err instanceof Error ? err.message : String(err)}`,
        },
        process: { stdout, stderr, exit_code: 0, error: err instanceof Error ? err.message : String(err) },
      };
    }
  } catch (err) {
    const error = err as NodeJS.ErrnoException & { stdout?: string; stderr?: string; code?: number };
    return {
      result: {
        decision: "needs_evidence",
        confidence: "low",
        summary: `Tagger failed: ${error.message}`,
      },
      process: {
        stdout: error.stdout ?? "",
        stderr: error.stderr ?? "",
        exit_code: typeof error.code === "number" ? error.code : null,
        error: error.message,
      },
    };
  } finally {
    if (tempDir) await rm(tempDir, { recursive: true, force: true });
  }
}

function validateTaggerResult(result: TaggerResult): void {
  if (!["tag", "skip", "needs_evidence"].includes(result.decision)) throw new Error(`Invalid tagger decision: ${result.decision}`);
  if (result.confidence && !["low", "medium", "high"].includes(result.confidence)) throw new Error(`Invalid tagger confidence: ${result.confidence}`);
  if (!result.summary) throw new Error("Tagger result must include summary.");
}

function buildTaggedGroup(options: {
  previousTarget?: GroupState;
  groupId: string;
  selectedRefs: AlertRef[];
  title: string;
  summary: string;
  state?: GroupState["state"];
  groupTags: string[];
  now: string;
}): GroupState {
  if (options.previousTarget) {
    return {
      ...options.previousTarget,
      state: options.state ?? options.previousTarget.state,
      tags: sortedUnique([...options.previousTarget.tags, ...options.groupTags, "triage:tag_grouped"]),
      title: options.title,
      summary: options.summary,
      updated_at: options.now,
      alert_refs: sortedUniqueRefs([...options.previousTarget.alert_refs, ...options.selectedRefs]),
      incident_ids: sortedUnique([...options.previousTarget.incident_ids, ...options.selectedRefs.map((ref) => ref.incident_id)]),
    };
  }
  return {
    group_id: options.groupId,
    state: options.state ?? "open",
    tags: sortedUnique([...options.groupTags, "triage:tag_grouped"]),
    title: options.title,
    summary: options.summary,
    deterministic_key: `tag|${options.groupId}`,
    grouping_version: GROUPING_VERSION,
    created_at: options.now,
    updated_at: options.now,
    alert_refs: sortedUniqueRefs(options.selectedRefs),
    incident_ids: sortedUnique(options.selectedRefs.map((ref) => ref.incident_id)),
    related_group_ids: [],
  };
}

async function moveRefsIntoGroup(options: {
  workspaceDir: string;
  target: GroupState;
  existingGroups: GroupState[];
  refs: AlertRef[];
  actor: string;
  rationale: string;
}): Promise<void> {
  const now = new Date().toISOString();
  const selectedKeys = new Set(options.refs.map(refKey));
  const consumedGroupIds: string[] = [];
  for (const group of options.existingGroups) {
    if (group.group_id === options.target.group_id) continue;
    const before = group.alert_refs.length;
    const remaining = group.alert_refs.filter((ref) => !selectedKeys.has(refKey(ref)));
    if (remaining.length === before) continue;
    options.target.related_group_ids = sortedUnique([...options.target.related_group_ids, group.group_id]);
    if (remaining.length === 0) {
      consumedGroupIds.push(group.group_id);
      await rm(groupDir(options.workspaceDir, group.group_id), { recursive: true, force: true });
      continue;
    }
    group.alert_refs = remaining;
    group.incident_ids = sortedUnique(remaining.map((ref) => ref.incident_id));
    group.updated_at = now;
    group.related_group_ids = sortedUnique([...group.related_group_ids, options.target.group_id]);
    await writeGroupState(options.workspaceDir, group);
    await writeCaseMarkdown(options.workspaceDir, group);
    await appendLineage(options.workspaceDir, group.group_id, {
      ts: now,
      actor: options.actor,
      kind: "split",
      related_group_id: options.target.group_id,
      summary: `Moved ${before - remaining.length} alert(s) into ${options.target.group_id}.`,
      rationale: options.rationale,
      alert_ids: options.refs.map((ref) => ref.alert_id),
    });
  }
  await writeGroupState(options.workspaceDir, options.target);
  await writeCaseMarkdown(options.workspaceDir, options.target);
  if (consumedGroupIds.length === 0) return;
  const matchRules = await loadMatchRules(options.workspaceDir);
  let changedRules = false;
  for (const rule of matchRules) {
    if (rule.status !== "active" || !rule.target_group_id || !consumedGroupIds.includes(rule.target_group_id)) continue;
    rule.status = "redirect";
    rule.target_group_id = options.target.group_id;
    rule.reason = "merged";
    rule.rationale = options.rationale;
    changedRules = true;
  }
  if (changedRules) await writeMatchRules(options.workspaceDir, matchRules);
}

function refKey(ref: AlertRef): string {
  return `${ref.incident_id}::${ref.alert_id}`;
}

function alertKey(alert: AlertFact): string {
  return `${alert.incident_id}::${alert.alert_id}`;
}

function dedupeMatchRules(rules: MatchRule[]): MatchRule[] {
  const byKey = new Map<string, MatchRule>();
  for (const rule of rules) byKey.set(rule.match_key, rule);
  return [...byKey.values()].sort((a, b) => a.match_key.localeCompare(b.match_key));
}

function groupDate(alert: AlertFact): string {
  const date = alert.created_at.match(/^(\d{4})-(\d{2})-(\d{2})/) ?? [];
  if (date[1] && date[2] && date[3]) return `${date[1].slice(2)}${date[2]}${date[3]}`;
  const parsed = new Date(alert.created_at);
  if (!Number.isNaN(parsed.getTime())) return parsed.toISOString().slice(2, 10).replaceAll("-", "");
  return new Date().toISOString().slice(2, 10).replaceAll("-", "");
}

function agentGroupIdBase(alerts: AlertFact[], title: string): string {
  const first = [...alerts].sort((a, b) => a.created_at.localeCompare(b.created_at))[0]!;
  const orgs = sortedUnique(alerts.map((alert) => alert.org_id || alert.org_id_numeric || "unknown_org"));
  const org = orgs.length === 1 ? orgs[0]! : "mixed_org";
  return [groupDate(first), groupOrgPart(org), groupIdPart(title)].join("-");
}

function uniqueGroupId(base: string, existingGroupIds: string[]): string {
  const existing = new Set(existingGroupIds);
  if (!existing.has(base)) return base;
  for (let idx = 2; ; idx++) {
    const candidate = `${base}-${String(idx).padStart(2, "0")}`;
    if (!existing.has(candidate)) return candidate;
  }
}

function groupIdPart(input: string): string {
  return input
    .toLowerCase()
    .replaceAll("_", "-")
    .replace(/[^a-z0-9-]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/-+/g, "-")
    .slice(0, 80) || "unknown";
}

function groupOrgPart(input: string): string {
  return input
    .toLowerCase()
    .replace(/[^a-z0-9_]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/-+/g, "-")
    .slice(0, 80) || "unknown_org";
}

function stateOrClassFor(alert: AlertFact): string {
  const stateClass = stateFailureClass(alert);
  if (stateClass) return stateClass;
  if (/0 successfull?_exports/i.test(alert.summary)) return "zero-success";
  if (/audience export failure|signalroute export failure/i.test(alert.summary)) return "client-sent-export-failure";
  return slug(alert.error_signature || alert.summary).replaceAll("_", "-").slice(0, 48) || "alert";
}

function groupingParts(alert: AlertFact): { failureClass: string; destination?: string } {
  const failureClass = stateOrClassFor(alert);
  const destination = alert.destination_product || alert.destination_type || destinationFromRun(alert.export_run_id);
  const includeDestination = Boolean(destination && (failureClass === "export-error" || failureClass === "export-processing"));
  if (includeDestination && destination) return { failureClass, destination };
  return { failureClass };
}

function stateFailureClass(alert: AlertFact): string | undefined {
  if (alert.state_tuple?.snapshotting && alert.state_tuple.snapshotting !== "snapshotting_finished") {
    return alert.state_tuple.snapshotting.replace(/^snapshotting_/, "snapshotting-").replaceAll("_", "-");
  }
  if (alert.state_tuple?.export === "export_error") return "export-error";
  if (alert.state_tuple?.export === "export_processing") return "export-processing";
  if (alert.state_tuple?.export) return alert.state_tuple.export.replaceAll("_", "-");
  if (alert.state_tuple?.snapshotting) return alert.state_tuple.snapshotting.replace(/^snapshotting_/, "snapshotting-").replaceAll("_", "-");
  return undefined;
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
    `Alert facts: ${index.alert_count ?? 0}`,
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

function indexAlertFact(alert: AlertFact): IndexAlertFact {
  return {
    incident_id: alert.incident_id,
    alert_id: alert.alert_id,
    created_at: alert.created_at,
    summary: alert.summary,
    ...(alert.org_id ? { org_id: alert.org_id } : {}),
    ...(alert.audience_id ? { audience_id: alert.audience_id } : {}),
    ...(alert.destination_type ? { destination_type: alert.destination_type } : {}),
    ...(alert.destination_product ? { destination_product: alert.destination_product } : {}),
    ...(alert.endpoint_id ? { endpoint_id: alert.endpoint_id } : {}),
    ...(alert.state_tuple ? { state_tuple: alert.state_tuple } : {}),
    ...(alert.checked_export_run_ids ? { checked_export_run_ids: alert.checked_export_run_ids } : {}),
  };
}

function renderJsonl(values: unknown[]): string {
  return values.map((value) => JSON.stringify(value)).join("\n") + (values.length > 0 ? "\n" : "");
}

async function firstExistingFile(files: string[]): Promise<string | undefined> {
  for (const file of files) {
    try {
      await readFile(file, "utf8");
      return file;
    } catch (err) {
      if ((err as NodeJS.ErrnoException).code !== "ENOENT") throw err;
    }
  }
  return undefined;
}

async function parseAlertsFromRawIfPresent(rawFile: string, incidentId: string): Promise<AlertFact[] | undefined> {
  try {
    const raw = await readFile(rawFile, "utf8");
    return parseAlertFacts(raw, incidentId);
  } catch (err) {
    if ((err as NodeJS.ErrnoException).code === "ENOENT") return undefined;
    throw err;
  }
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
