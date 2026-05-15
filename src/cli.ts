#!/usr/bin/env bun
import { appendEvidence, groupImportedAlerts, importPagerDutyIncident, initWorkspace, mergeGroups, regenerateIndex, splitGroup, syncPagerDutyWorkspace, transitionGroup } from "./workspace";
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
    const result = await importPagerDutyIncident({
      workspaceDir,
      incident,
      ...(alertsFile ? { alertsFile } : {}),
    });
    console.log(`Imported ${result.alert_count} alert(s) from ${result.incident_id}`);
    return;
  }
  if (command === "group") {
    const result = await groupImportedAlerts(workspaceDir);
    console.log(`Grouped alerts: created=${result.created}, attached=${result.attached}`);
    for (const group of result.groups) console.log(`- ${group}`);
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
  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (!arg?.startsWith("--")) throw new Error(`Unexpected argument: ${arg}`);
    const key = arg.slice(2);
    const value = args[i + 1];
    if (!value || value.startsWith("--")) throw new Error(`Missing value for --${key}`);
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

function usage(): void {
  console.log(usageText());
}

function usageText(): string {
  return `Usage:
  bun run oncall-triage init <workspace>
  bun run oncall-triage import-pd <workspace> --incident <pd-url-or-id> [--alerts-file <file>]
  bun run oncall-triage group <workspace>
  bun run oncall-triage index <workspace>
  bun run oncall-triage transition <workspace> --group <id> --state <open|waiting|monitoring|resolved> --summary <text> [--tag <tag>]
  bun run oncall-triage merge <workspace> --source <id> --target <id> --rationale <text>
  bun run oncall-triage split <workspace> --group <id> --alerts <comma-separated-alert-ids> --rationale <text>
  bun run oncall-triage sync-pd <workspace> [--incident <pd-url-or-id>]
  bun run oncall-triage evidence <workspace> --group <id> --summary <text> [--kind <kind>] [--source <source>]`;
}

main(process.argv.slice(2)).catch((err) => {
  console.error(err instanceof Error ? err.message : String(err));
  process.exit(1);
});
