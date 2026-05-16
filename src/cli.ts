#!/usr/bin/env bun
import { checkExportsWorkspace, loadPizzaRowsFile } from "./checkExports";
import { createLivePizzaFetcher } from "./pizza";
import { appendEvidence, groupImportedAlerts, groupTaggedAlerts, importPagerDutyIncident, initWorkspace, mergeGroups, queryAlertFacts, regenerateIndex, runAlertTagger, splitGroup, syncPagerDutyWorkspace, transitionGroup } from "./workspace";
import type { GroupStateName } from "./schema";

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
  if (command === "alerts") {
    const filters: Parameters<typeof queryAlertFacts>[1] = {};
    const incident = optional(args, "incident");
    const org = optional(args, "org");
    const audience = optional(args, "audience");
    const destination = optional(args, "destination");
    const state = optional(args, "state");
    if (incident) filters.incidentId = incident;
    if (org) filters.orgId = org;
    if (audience) filters.audienceId = audience;
    if (destination) filters.destination = destination;
    if (state) filters.state = state;
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
    const filters: Parameters<typeof queryAlertFacts>[1] = {};
    const incident = optional(args, "incident");
    const org = optional(args, "org");
    const audience = optional(args, "audience");
    const destination = optional(args, "destination");
    const alertState = optional(args, "state");
    if (incident) filters.incidentId = incident;
    if (org) filters.orgId = org;
    if (audience) filters.audienceId = audience;
    if (destination) filters.destination = destination;
    if (alertState) filters.state = alertState;
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
    if (!["open", "waiting", "monitoring", "resolved"].includes(state)) throw new Error(`Invalid state: ${state}`);
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
    const sourceGroupId = required(args, "source");
    const targetGroupId = required(args, "target");
    const rationale = required(args, "rationale");
    const result = await mergeGroups({ workspaceDir, sourceGroupId, targetGroupId, rationale });
    console.log(`Merged ${result.source.group_id} into ${result.target.group_id}`);
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
  if (command === "check-exports") {
    const pizzaRowsFile = optional(args, "pizza-rows-file");
    const pizzaRows = pizzaRowsFile ? await loadPizzaRowsFile(pizzaRowsFile) : undefined;
    const progress = (message: string): void => console.log(message);
    const liveFetcher = pizzaRows ? undefined : createLivePizzaFetcher({ onProgress: progress });
    const filters = alertFiltersFromArgs(args);
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
        `Checked exports: derived=${result.derived}, evaluated=${result.evaluated}, healthy_closed=${result.healthy_closed}, monitoring=${result.monitoring}, blocked=${result.blocked}, not_applicable=${result.not_applicable}`,
      );
    } finally {
      await liveFetcher?.close();
    }
    return;
  }
  if (command === "evidence") {
    const groupId = required(args, "group");
    const summary = required(args, "summary");
    await appendEvidence(workspaceDir, groupId, {
      ts: new Date().toISOString(),
      kind: optional(args, "kind") ?? "note",
      source: optional(args, "source") ?? "agent",
      summary,
    });
    console.log(`Appended evidence to ${groupId}`);
    return;
  }
  throw new Error(`Unknown command: ${command}\n\n${usageText()}`);
}

function parseArgs(args: string[]): Record<string, string | string[]> {
  const parsed: Record<string, string | string[]> = {};
  const booleanFlags = new Set(["apply", "test"]);
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

function alertFiltersFromArgs(args: Record<string, string | string[]>): Parameters<typeof queryAlertFacts>[1] {
  const filters: Parameters<typeof queryAlertFacts>[1] = {};
  const incident = optional(args, "incident");
  const org = optional(args, "org");
  const audience = optional(args, "audience");
  const destination = optional(args, "destination");
  const state = optional(args, "state");
  if (incident) filters.incidentId = incident;
  if (org) filters.orgId = org;
  if (audience) filters.audienceId = audience;
  if (destination) filters.destination = destination;
  if (state) filters.state = state;
  return filters;
}

function parsePositiveInteger(value: string, name: string): number {
  const parsed = Number.parseInt(value, 10);
  if (!Number.isInteger(parsed) || parsed < 1) throw new Error(`--${name} must be a positive integer.`);
  return parsed;
}

function usage(): void {
  console.log(usageText());
}

function usageText(): string {
  return `Usage:
  bun run oncall-triage init <workspace>
  bun run oncall-triage import-pd <workspace> --incident <pd-url-or-id> [--alerts-file <file>] [--allow-partial true]
  bun run oncall-triage alerts <workspace> [--incident <id>] [--org <org_id>] [--audience <id>] [--destination <destination>] [--state <state>]
  bun run oncall-triage tag <workspace> --script <file> [--incident <id>] [--org <org_id>] [--audience <id>] [--destination <destination>] [--state <state>] [--tag <tag>] [--limit <n>] [--test]
  bun run oncall-triage group <workspace>
  bun run oncall-triage group <workspace> --tag <tag> --title <text> --summary <text> --rationale <text> [--group <id>] [--state <open|waiting|monitoring|resolved>] [--group-tag <tag>] [--limit <n>] [--test]
  bun run oncall-triage index <workspace>
  bun run oncall-triage transition <workspace> --group <id> --state <open|waiting|monitoring|resolved> --summary <text> [--tag <tag>]
  bun run oncall-triage merge <workspace> --source <id> --target <id> --rationale <text>
  bun run oncall-triage split <workspace> --group <id> --alerts <comma-separated-alert-ids> --rationale <text>
  bun run oncall-triage sync-pd <workspace> [--incident <pd-url-or-id>]
  bun run oncall-triage check-exports <workspace> [--apply] [--pizza-rows-file <file>] [--incident <id>] [--org <org_id>] [--audience <id>] [--destination <destination>] [--state <state>] [--limit <n>]
  bun run oncall-triage evidence <workspace> --group <id> --summary <text> [--kind <kind>] [--source <source>]`;
}

main(process.argv.slice(2)).catch((err) => {
  console.error(err instanceof Error ? err.message : String(err));
  process.exit(1);
});
