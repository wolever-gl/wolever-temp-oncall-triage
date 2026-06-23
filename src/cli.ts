#!/usr/bin/env bun
import { autoMonitorExportGroup, autoResolveHealthyExportGroup, checkExportsWorkspace, loadPizzaRowsFile } from "./checkExports";
import { matchesGroupFilter, mergeAlertFilter, parseFilterValues, type AlertFilter, type CommandFilters, type GroupFilter } from "./filters";
import { createLivePizzaFetcher } from "./pizza";
import { appendEvidence, closePagerDutyAlertsForResolvedGroups, groupImportedAlerts, groupTaggedAlerts, importActivePagerDutyIncidents, importPagerDutyIncident, initWorkspace, loadAllGroups, mergeManyGroups, queryAlertFacts, readGroupState, regenerateIndex, runAlertTagger, splitGroup, syncPagerDutyWorkspace, transitionGroup } from "./workspace";
import type { AlertRef, GroupState, GroupStateName } from "./schema";

async function main(argv: string[]): Promise<void> {
  const [command, workspaceDir, ...rest] = argv;
  if (!command || command === "help" || command === "--help") return usage();
  if (!workspaceDir) throw new Error(`Missing workspace directory.\n\n${usageText()}`);

  const args = parseArgs(rest);
  if (command === "init") {
    await initWorkspace(workspaceDir);
    console.log(`Initialized ${workspaceDir}`);
    return;
  }
  if (command === "import-pd") {
    const incident = required(args, "incident");
    const alertsFile = optional(args, "alerts-file");
    const allowPartial = optional(args, "allow-partial") === "true";
    const result = await importPagerDutyIncident({
      workspaceDir,
      incident,
      ...(alertsFile ? { alertsFile } : {}),
      ...(allowPartial ? { allowPartial } : {}),
    });
    console.log(`Imported ${result.alert_count} alert(s) from ${result.incident_id}`);
    return;
  }
  if (command === "import-active-pd") {
    const result = await importActivePagerDutyIncidents({
      workspaceDir,
      includeKnown: Boolean(args["include-known"]),
      onProgress: (message) => console.log(message),
    });
    console.log(`Imported active PagerDuty incidents: active=${result.active_incidents.length}, skipped_known=${result.skipped_known.length}, imported=${result.imported.length}, groups_created=${result.grouped.created}, alerts_attached=${result.grouped.attached}`);
    for (const imported of result.imported) console.log(`- ${imported.incident_id}: ${imported.alert_count} alert(s)`);
    return;
  }
  if (command === "alerts") {
    rejectRemovedSelectorAliases(args, ["incident", "org", "audience", "destination", "state"]);
    const { alertFilter: filters } = await alertFilterForArgs(workspaceDir, args);
    const alerts = await queryAlertFacts(workspaceDir, filters);
    for (const alert of alerts) console.log(JSON.stringify(alert));
    return;
  }
  if (command === "group") {
    const tags = values(args, "tag");
    if (tags.length > 0) {
      const groupId = optional(args, "group");
      const state = optional(args, "state");
      const result = await groupTaggedAlerts({
        workspaceDir,
        tags,
        title: required(args, "title"),
        summary: required(args, "summary"),
        rationale: required(args, "rationale"),
        ...(groupId ? { groupId } : {}),
        ...(state ? { state: state as GroupStateName } : {}),
        groupTags: values(args, "group-tag"),
        ...(optional(args, "limit") ? { limit: parsePositiveInteger(required(args, "limit"), "limit") } : {}),
        test: Boolean(args.test),
      });
      const prefix = result.test ? "Would group" : "Grouped";
      console.log(`${prefix} ${result.matched} tagged alert(s) into ${result.group.group_id}`);
      if (result.test) {
        console.log(`State: ${result.group.state}`);
        console.log(`Tags: ${result.group.tags.join(", ")}`);
        console.log(`Incidents: ${result.group.incident_ids.join(", ")}`);
      }
      return;
    }
    const result = await groupImportedAlerts(workspaceDir);
    console.log(`Grouped alerts: created=${result.created}, attached=${result.attached}`);
    for (const group of result.groups) console.log(`- ${group}`);
    return;
  }
  if (command === "tag") {
    rejectRemovedSelectorAliases(args, ["incident", "org", "audience", "destination", "state"]);
    const { alertFilter: filters } = await alertFilterForArgs(workspaceDir, args);
    const result = await runAlertTagger({
      workspaceDir,
      filters,
      scriptPath: required(args, "script"),
      tags: values(args, "tag"),
      ...(optional(args, "limit") ? { limit: parsePositiveInteger(required(args, "limit"), "limit") } : {}),
      test: Boolean(args.test),
    });
    const prefix = args.test ? "Tag preview" : "Tagged";
    console.log(`${prefix}: candidates=${result.candidates}, processed=${result.processed}, tagged=${result.tagged}, skipped=${result.skipped}, needs_evidence=${result.needs_evidence}, run=${result.run_id}`);
    for (const annotation of result.results) {
      console.log(`${annotation.decision}\t${annotation.alert_ref.incident_id}/${annotation.alert_ref.alert_id}\t${annotation.tags.join(",")}\t${annotation.summary}`);
    }
    return;
  }
  if (command === "index") {
    const index = await regenerateIndex(workspaceDir);
    console.log(`Indexed ${index.groups.length} group(s), open=${index.open_count}`);
    return;
  }
  if (command === "transition") {
    const groupId = required(args, "group");
    const state = required(args, "state") as GroupStateName;
    if (!["new", "open", "waiting", "monitoring", "resolved"].includes(state)) throw new Error(`Invalid state: ${state}`);
    const summary = required(args, "summary");
    const tag = optional(args, "tag");
    const group = await transitionGroup({
      workspaceDir,
      groupId,
      state,
      summary,
      ...(tag ? { tag } : {}),
    });
    console.log(`Transitioned ${group.group_id} to ${group.state}`);
    return;
  }
  if (command === "merge") {
    const sourceGroupIds = values(args, "source");
    if (sourceGroupIds.length === 0) throw new Error("Missing --source");
    const targetGroupId = required(args, "target");
    const rationale = required(args, "rationale");
    const result = await mergeManyGroups({ workspaceDir, sourceGroupIds, targetGroupId, rationale });
    console.log(`Merged ${result.sources.map((source) => source.group_id).join(", ")} into ${result.target.group_id}`);
    return;
  }
  if (command === "split") {
    const sourceGroupId = required(args, "group");
    const alertIds = required(args, "alerts").split(",").map((value) => value.trim()).filter(Boolean);
    const rationale = required(args, "rationale");
    const result = await splitGroup({ workspaceDir, sourceGroupId, alertIds, rationale });
    console.log(`Split ${result.source.group_id} into ${result.created.group_id}`);
    return;
  }
  if (command === "sync-pd") {
    const result = await syncPagerDutyWorkspace({
      workspaceDir,
      ...(args.incident ? { incidents: values(args, "incident") } : {}),
    });
    console.log(`Synced PagerDuty: imported=${result.imported.length}, refreshed=${result.refreshed.length}, resolved_groups=${result.resolved_groups.length}`);
    return;
  }
  if (command === "close-pd") {
    rejectRemovedSelectorAliases(args, ["group", "state"]);
    const parsedFilters = commandFiltersFromArgs(args);
    if (hasAlertFilter(parsedFilters.alert)) throw new Error("close-pd only supports group filters.");
    const result = await closePagerDutyAlertsForResolvedGroups({
      workspaceDir,
      groupFilter: hasGroupFilter(parsedFilters.group) ? parsedFilters.group : { state: "resolved" },
      apply: Boolean(args.apply),
    });
    console.log(`${result.apply ? "Closed" : "Dry-run close-pd"}: groups=${result.selected_groups.length}, resolved_only_refs=${result.resolved_only_refs.length}, already_resolved=${result.already_resolved.length}, missing=${result.missing.length}, ${result.apply ? "resolved" : "would_resolve"}=${result.apply ? result.resolved.length : result.to_resolve.length}`);
    for (const [incidentId, refs] of groupCloseRowsByIncident(result.to_resolve)) {
      const statuses = refs.map((ref) => `${ref.alert_id}:${ref.status}`).join(", ");
      console.log(`${result.apply ? "Resolved" : "Would resolve"} ${incidentId}: ${refs.length} alert(s): ${statuses}`);
    }
    if (result.missing.length > 0) {
      for (const [incidentId, refs] of groupCloseRowsByIncident(result.missing)) {
        console.log(`Missing ${incidentId}: ${refs.map((ref) => ref.alert_id).join(", ")}`);
      }
    }
    return;
  }
  if (command === "check-exports") {
    rejectRemovedSelectorAliases(args, ["incident", "org", "audience", "destination", "state", "group"]);
    const pizzaRowsFile = optional(args, "pizza-rows-file");
    const pizzaRows = pizzaRowsFile ? await loadPizzaRowsFile(pizzaRowsFile) : undefined;
    const progress = (message: string): void => console.log(message);
    const liveFetcher = pizzaRows ? undefined : createLivePizzaFetcher({ onProgress: progress });
    const { alertFilter: filters, groups } = await alertFilterForArgs(workspaceDir, args);
    const group = groups.length === 1 ? groups[0] : undefined;
    if (args["auto-resolve"] && !args.apply) throw new Error("--auto-resolve requires --apply.");
    if (args["auto-resolve"] && groups.length !== 1) throw new Error("--auto-resolve requires exactly one group selected by --filter group.id=...");
    const limit = optional(args, "limit");
    try {
      const result = await checkExportsWorkspace({
        workspaceDir,
        apply: Boolean(args.apply),
        filters: {
          ...filters,
          ...(limit ? { limit: parsePositiveInteger(limit, "limit") } : {}),
        },
        fetchPizzaRows: pizzaRows ? async () => pizzaRows : liveFetcher!,
        onProgress: progress,
      });
      console.log(
        `Checked exports: derived=${result.derived}, evaluated=${result.evaluated}, skipped_unavailable=${result.skipped_unavailable}, healthy_closed=${result.healthy_closed}, monitoring=${result.monitoring}, blocked=${result.blocked}, not_applicable=${result.not_applicable}`,
      );
      if (group && args["auto-resolve"]) {
        const resolved = await autoResolveHealthyExportGroup({ workspaceDir, groupId: group.group_id });
        console.log(`Auto-resolve ${resolved.group_id}: resolved=${resolved.resolved} reason=${resolved.reason} healthy_checks=${resolved.healthy_checks}`);
        if (!resolved.resolved) {
          const monitored = await autoMonitorExportGroup({ workspaceDir, groupId: group.group_id });
          console.log(`Auto-monitor ${monitored.group_id}: monitored=${monitored.monitored} reason=${monitored.reason} healthy_checks=${monitored.healthy_checks} monitoring_checks=${monitored.monitoring_checks}`);
        }
      }
    } finally {
      await liveFetcher?.close();
    }
    return;
  }
  if (command === "preflight") {
    rejectRemovedSelectorAliases(args, ["group", "state"]);
    const parsedFilters = commandFiltersFromArgs(args);
    const groupFilter = hasGroupFilter(parsedFilters.group) ? parsedFilters.group : { state: "new" as GroupStateName };
    const progress = (message: string): void => console.log(message);
    const liveFetcher = createLivePizzaFetcher({ onProgress: progress });
    let checked = 0;
    let resolved = 0;
    let monitored = 0;
    try {
      const groups = await resolveGroups(workspaceDir, groupFilter);
      const alertRefs = uniqueAlertRefs(groups.flatMap((group) => group.alert_refs));
      if (groups.length > 0) {
        console.log(`Preflight selected ${groups.length} group(s), ${alertRefs.length} alert ref(s).`);
        await checkExportsWorkspace({
          workspaceDir,
          apply: true,
          filters: { alertRefs },
          fetchPizzaRows: liveFetcher,
          onProgress: progress,
        });
      }
      for (const group of groups) {
        console.log(`Preflight ${group.group_id}`);
        const auto = await autoResolveHealthyExportGroup({ workspaceDir, groupId: group.group_id });
        let monitorReason = "resolved";
        if (!auto.resolved) {
          const monitor = await autoMonitorExportGroup({ workspaceDir, groupId: group.group_id });
          if (monitor.monitored) monitored++;
          monitorReason = monitor.reason;
        }
        if (auto.resolved) resolved++;
        checked++;
        console.log(`Preflight ${group.group_id}: resolved=${auto.resolved} reason=${auto.reason} monitor_reason=${monitorReason}`);
      }
    } finally {
      await liveFetcher.close();
    }
    const index = await regenerateIndex(workspaceDir);
    console.log(`Preflight complete: groups=${checked}, resolved=${resolved}, monitored=${monitored}, open=${index.open_count}`);
    return;
  }
  if (command === "evidence") {
    const groupId = required(args, "group");
    const summary = required(args, "summary");
    const links = values(args, "link").map(parseEvidenceLink);
    const commands = values(args, "command");
    const artifacts = values(args, "artifact").map(parseEvidenceArtifact);
    const findings = values(args, "finding");
    const logQueries = values(args, "log-query");
    await appendEvidence(workspaceDir, groupId, {
      ts: new Date().toISOString(),
      kind: optional(args, "kind") ?? "note",
      source: optional(args, "source") ?? "agent",
      summary,
      ...((links.length > 0 || commands.length > 0 || artifacts.length > 0 || findings.length > 0 || logQueries.length > 0) ? {
        data: {
          ...(links.length > 0 ? { links } : {}),
          ...(commands.length > 0 ? { commands } : {}),
          ...(artifacts.length > 0 ? { artifacts } : {}),
          ...(findings.length > 0 ? { findings } : {}),
          ...(logQueries.length > 0 ? { log_queries: logQueries } : {}),
        },
      } : {}),
    });
    console.log(`Appended evidence to ${groupId}`);
    return;
  }
  throw new Error(`Unknown command: ${command}\n\n${usageText()}`);
}

function parseArgs(args: string[]): Record<string, string | string[]> {
  const parsed: Record<string, string | string[]> = {};
  const booleanFlags = new Set(["apply", "test", "auto-resolve"]);
  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (!arg?.startsWith("--")) throw new Error(`Unexpected argument: ${arg}`);
    const key = arg.slice(2);
    const value = args[i + 1];
    if (!value || value.startsWith("--")) {
      if (!booleanFlags.has(key)) throw new Error(`Missing value for --${key}`);
      parsed[key] = "true";
      continue;
    }
    const current = parsed[key];
    parsed[key] = current === undefined ? value : Array.isArray(current) ? [...current, value] : [current, value];
    i++;
  }
  return parsed;
}

function values(args: Record<string, string | string[]>, key: string): string[] {
  const value = args[key];
  if (value === undefined) return [];
  return Array.isArray(value) ? value : [value];
}

function optional(args: Record<string, string | string[]>, key: string): string | undefined {
  const value = args[key];
  if (value === undefined) return undefined;
  return Array.isArray(value) ? value[0] : value;
}

function required(args: Record<string, string | string[]>, key: string): string {
  const value = args[key];
  if (!value) throw new Error(`Missing --${key}`);
  return Array.isArray(value) ? value[0]! : value;
}

async function alertFilterForArgs(
  workspaceDir: string,
  args: Record<string, string | string[]>,
): Promise<{ alertFilter: AlertFilter; groups: GroupState[] }> {
  const parsedFilters = commandFiltersFromArgs(args);
  const hasGroups = hasGroupFilter(parsedFilters.group);
  const groups = hasGroups ? await resolveGroups(workspaceDir, parsedFilters.group) : [];
  const alertFilter = hasGroups ? mergeAlertFilter(parsedFilters.alert, { alertRefs: groups.flatMap((group) => group.alert_refs) }) : parsedFilters.alert;
  return { alertFilter, groups };
}

function commandFiltersFromArgs(
  args: Record<string, string | string[]>,
): CommandFilters {
  return parseFilterValues(values(args, "filter"));
}

async function resolveGroups(workspaceDir: string, filter: GroupFilter): Promise<GroupState[]> {
  if (filter.id) {
    const group = await readGroupState(workspaceDir, filter.id);
    return matchesGroupFilter(group, filter) ? [group] : [];
  }
  if (filter.ids && !filter.state && !filter.incidentId && (!filter.tags || filter.tags.length === 0)) {
    const groups: GroupState[] = [];
    for (const id of filter.ids) {
      try {
        const group = await readGroupState(workspaceDir, id);
        if (matchesGroupFilter(group, filter)) groups.push(group);
      } catch (err) {
        if ((err as NodeJS.ErrnoException).code !== "ENOENT") throw err;
      }
    }
    return groups.sort((a, b) => a.group_id.localeCompare(b.group_id));
  }
  return (await loadAllGroups(workspaceDir)).filter((group) => matchesGroupFilter(group, filter)).sort((a, b) => a.group_id.localeCompare(b.group_id));
}

function hasGroupFilter(filter: GroupFilter): boolean {
  return Boolean(filter.id || (filter.ids && filter.ids.length > 0) || filter.state || filter.incidentId || (filter.tags && filter.tags.length > 0));
}

function hasAlertFilter(filter: AlertFilter): boolean {
  return Boolean(filter.incidentId || filter.orgId || filter.audienceId || filter.destination || filter.state || filter.alertRefs || filter.limit);
}

function uniqueAlertRefs(refs: AlertRef[]): AlertRef[] {
  const byKey = new Map<string, AlertRef>();
  for (const ref of refs) byKey.set(`${ref.incident_id}::${ref.alert_id}`, ref);
  return [...byKey.values()].sort((a, b) => a.incident_id.localeCompare(b.incident_id) || a.alert_id.localeCompare(b.alert_id));
}

function groupCloseRowsByIncident<T extends { incident_id: string }>(refs: T[]): Array<[string, T[]]> {
  const grouped = new Map<string, T[]>();
  for (const ref of refs) {
    const existing = grouped.get(ref.incident_id) ?? [];
    existing.push(ref);
    grouped.set(ref.incident_id, existing);
  }
  return [...grouped.entries()].sort(([left], [right]) => left.localeCompare(right));
}

function rejectRemovedSelectorAliases(args: Record<string, string | string[]>, flags: string[]): void {
  const used = flags.filter((flag) => args[flag] !== undefined);
  if (used.length === 0) return;
  const rendered = used.map((flag) => `--${flag}`).join(", ");
  throw new Error(`Removed selector alias${used.length === 1 ? "" : "es"} ${rendered}. Use --filter key=value instead.`);
}

function parsePositiveInteger(value: string, name: string): number {
  const parsed = Number.parseInt(value, 10);
  if (!Number.isInteger(parsed) || parsed < 1) throw new Error(`--${name} must be a positive integer.`);
  return parsed;
}

function parseEvidenceLink(value: string): { label: string; url: string } {
  const separator = value.indexOf("=");
  const label = separator >= 0 ? value.slice(0, separator).trim() : "Link";
  const url = separator >= 0 ? value.slice(separator + 1).trim() : value.trim();
  if (!/^https?:\/\//.test(url)) throw new Error(`--link must be either <url> or <label>=<url>: ${value}`);
  return { label: label || "Link", url };
}

function parseEvidenceArtifact(value: string): { label: string; path: string } {
  const separator = value.indexOf("=");
  const label = separator >= 0 ? value.slice(0, separator).trim() : "Artifact";
  const artifactPath = separator >= 0 ? value.slice(separator + 1).trim() : value.trim();
  if (artifactPath.length === 0) throw new Error(`--artifact must be either <path> or <label>=<path>: ${value}`);
  return { label: label || "Artifact", path: artifactPath };
}

function usage(): void {
  console.log(usageText());
}

function usageText(): string {
  return `Usage:
  bun run oncall-triage init <workspace>
  bun run oncall-triage import-pd <workspace> --incident <pd-url-or-id> [--alerts-file <file>] [--allow-partial true]
  bun run oncall-triage import-active-pd <workspace> [--include-known]
  bun run oncall-triage alerts <workspace> [--filter alert.org=<org_id>] [--filter alert.incident=<id>] [--filter alert.audience=<id>] [--filter alert.destination=<destination>] [--filter alert.state=<state>]
  bun run oncall-triage tag <workspace> --script <file> [--filter alert.org=<org_id>] [--filter alert.incident=<id>] [--filter alert.audience=<id>] [--filter alert.destination=<destination>] [--filter alert.state=<state>] [--tag <tag>] [--limit <n>] [--test]
  bun run oncall-triage group <workspace>
  bun run oncall-triage group <workspace> --tag <tag> --title <text> --summary <text> --rationale <text> [--group <id>] [--state <new|open|waiting|monitoring|resolved>] [--group-tag <tag>] [--limit <n>] [--test]
  bun run oncall-triage index <workspace>
  bun run oncall-triage transition <workspace> --group <id> --state <new|open|waiting|monitoring|resolved> --summary <text> [--tag <tag>]
  bun run oncall-triage merge <workspace> --source <id> [--source <id> ...] --target <id> --rationale <text>
  bun run oncall-triage split <workspace> --group <id> --alerts <comma-separated-alert-ids> --rationale <text>
  bun run oncall-triage sync-pd <workspace> [--incident <pd-url-or-id>]
  bun run oncall-triage close-pd <workspace> [--filter group.state=resolved] [--filter group.id=<id>] [--filter "group.id in id1,id2"] [--test] [--apply]
  bun run oncall-triage preflight <workspace> [--filter group.state=<state>] [--filter group.id=<id>] [--filter "group.id in id1,id2"]
  bun run oncall-triage check-exports <workspace> [--apply] [--auto-resolve] [--filter group.id=<id>] [--filter "group.id in id1,id2"] [--filter alert.destination=<destination>] [--filter alert.incident=<id>] [--filter alert.org=<org_id>] [--filter alert.audience=<id>] [--filter alert.state=<state>] [--pizza-rows-file <file>] [--limit <n>]
  bun run oncall-triage evidence <workspace> --group <id> --summary <text> [--kind <kind>] [--source <source>] [--link <label=url>] [--command <command>] [--artifact <label=path>] [--log-query <query>] [--finding <text>]

Waiting transitions require prior communication evidence in evidence.jsonl or notes.md. Use evidence --kind communication_thread/support_thread/slack_thread with a durable link before transition --state waiting.`;
}

main(process.argv.slice(2)).catch((err) => {
  console.error(err instanceof Error ? err.message : String(err));
  process.exit(1);
});
