import { describe, expect, test } from "bun:test";
import { mkdtemp, readFile, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { groupImportedAlerts, groupTaggedAlerts, importPagerDutyIncident, loadAllGroups, loadMatchRules, mergeGroups, queryAlertFacts, readIncidentRecord, regenerateIndex, runAlertTagger, splitGroup, syncPagerDutyWorkspace, transitionGroup } from "./workspace";
import type { PagerDutyIncidentStatusRecord } from "./pagerduty";

const fixture = path.resolve(import.meta.dir, "..", "fixtures", "pagerduty-alerts.json");

describe("case workspace", () => {
  test("imports alerts, groups conservatively, and generates indexes", async () => {
    const workspaceDir = await mkdtemp(path.join(tmpdir(), "oncall-triage-v2-"));
    try {
      const imported = await importPagerDutyIncident({ workspaceDir, incident: "QTEST123", alertsFile: fixture });
      expect(imported).toEqual({ incident_id: "QTEST123", alert_count: 3 });
      const versionedFacts = await readFile(path.join(workspaceDir, "incidents", "QTEST123", "alerts.v2.jsonl"), "utf8");
      expect(versionedFacts.trim().split("\n")).toHaveLength(3);

      const grouped = await groupImportedAlerts(workspaceDir);
      expect(grouped.created).toBe(1);
      expect(grouped.attached).toBe(2);

      const groups = await loadAllGroups(workspaceDir);
      expect(groups).toHaveLength(1);
      expect(groups[0]?.alert_refs).toHaveLength(3);
      expect(groups[0]?.tags).toContain("triage:needs_review");
      expect(groups.map((group) => group.group_id).sort()).toEqual([
        "260515-chghealthcare_395-client-sent-export-failure",
      ]);
      const matchRules = await loadMatchRules(workspaceDir);
      expect(matchRules).toHaveLength(1);
      expect(matchRules.every((rule) => rule.status === "active")).toBe(true);

      const index = await regenerateIndex(workspaceDir);
      expect(index.open_count).toBe(1);
      expect(index.alert_count).toBe(3);
      const alertIndex = await readFile(path.join(workspaceDir, "indexes", "alert_facts.json"), "utf8");
      expect(alertIndex).toContain("16985");
      const indexMd = await readFile(path.join(workspaceDir, "index.md"), "utf8");
      expect(indexMd).toContain("On-call Triage Cases");
    } finally {
      await rm(workspaceDir, { recursive: true, force: true });
    }
  });

  test("queries alert facts across groups", async () => {
    const workspaceDir = await mkdtemp(path.join(tmpdir(), "oncall-triage-v2-"));
    try {
      await importPagerDutyIncident({ workspaceDir, incident: "QTEST123", alertsFile: fixture });
      await groupImportedAlerts(workspaceDir);

      const alerts = await queryAlertFacts(workspaceDir, { orgId: "chghealthcare_395", audienceId: "16985" });
      expect(alerts).toHaveLength(2);
      expect(alerts.map((alert) => alert.alert_id).sort()).toEqual(["PALT1", "PALT2"]);
    } finally {
      await rm(workspaceDir, { recursive: true, force: true });
    }
  });

  test("tags alerts with a script and groups by tag", async () => {
    const workspaceDir = await mkdtemp(path.join(tmpdir(), "oncall-triage-v2-"));
    try {
      await importPagerDutyIncident({ workspaceDir, incident: "QTEST123", alertsFile: fixture });
      await importPagerDutyIncident({ workspaceDir, incident: "QTEST456", alertsFile: fixture });
      await groupImportedAlerts(workspaceDir);
      const tagger = path.join(workspaceDir, "tagger.ts");
      await writeFile(
        tagger,
        `const alertPath = process.argv[process.argv.indexOf("--alert") + 1];
const alert = await Bun.file(alertPath).json();
console.log(JSON.stringify({
  decision: alert.org_id === "chghealthcare_395" ? "tag" : "skip",
  tags: ["evidence:retry-succeeded"],
  confidence: "high",
  summary: "Fixture tagger matched chghealthcare alert."
}));
`,
      );

      const tagged = await runAlertTagger({
        workspaceDir,
        filters: { orgId: "chghealthcare_395" },
        scriptPath: tagger,
        tags: ["waiting:uploads"],
      });
      expect(tagged.candidates).toBe(6);
      expect(tagged.tagged).toBe(6);

      const grouped = await groupTaggedAlerts({
        title: "Marketing Cloud retry succeeded",
        summary: "These alerts share confirmed recovery evidence and can be tracked together.",
        rationale: "Agent verified common recovery evidence across the queried alerts.",
        tags: ["evidence:retry-succeeded", "waiting:uploads"],
        state: "monitoring",
        groupTags: ["waiting:uploads"],
        workspaceDir,
      });

      expect(grouped.group.group_id).toBe("260515-chghealthcare_395-marketing-cloud-retry-succeeded");
      expect(grouped.group.alert_refs).toHaveLength(6);
      expect(grouped.group.incident_ids).toEqual(["QTEST123", "QTEST456"]);
      expect(grouped.group.tags).toContain("triage:tag_grouped");
      expect(grouped.group.tags).toContain("waiting:uploads");

      const groups = await loadAllGroups(workspaceDir);
      expect(groups.map((group) => group.group_id)).toEqual([grouped.group.group_id]);
      const decisions = await readFile(path.join(workspaceDir, "groups", grouped.group.group_id, "decisions.jsonl"), "utf8");
      expect(decisions).toContain("created_group_from_tags");
      const matchRules = await loadMatchRules(workspaceDir);
      expect(matchRules.every((rule) => rule.status === "redirect" && rule.target_group_id === grouped.group.group_id)).toBe(true);
    } finally {
      await rm(workspaceDir, { recursive: true, force: true });
    }
  });

  test("transitions group state and records decision trail", async () => {
    const workspaceDir = await mkdtemp(path.join(tmpdir(), "oncall-triage-v2-"));
    try {
      await importPagerDutyIncident({ workspaceDir, incident: "QTEST123", alertsFile: fixture });
      const grouped = await groupImportedAlerts(workspaceDir);
      const groupId = grouped.groups[0]!;

      const group = await transitionGroup({
        workspaceDir,
        groupId,
        state: "resolved",
        tag: "resolved:retry_succeeded",
        summary: "Later pizza run finished successfully.",
      });
      expect(group.state).toBe("resolved");
      expect(group.tags).toContain("resolved:retry_succeeded");

      const decisions = await readFile(path.join(workspaceDir, "groups", groupId, "decisions.jsonl"), "utf8");
      expect(decisions).toContain("transitioned_to_resolved");
    } finally {
      await rm(workspaceDir, { recursive: true, force: true });
    }
  });

  test("merges groups with lineage and combined refs", async () => {
    const workspaceDir = await mkdtemp(path.join(tmpdir(), "oncall-triage-v2-"));
    try {
      await importPagerDutyIncident({ workspaceDir, incident: "QTEST123", alertsFile: fixture });
      await importPagerDutyIncident({ workspaceDir, incident: "QTEST456", alertsFile: fixture });
      const grouped = await groupImportedAlerts(workspaceDir);
      const sourceGroupId = grouped.groups[0]!;
      const targetGroupId = grouped.groups[1]!;

      const result = await mergeGroups({
        workspaceDir,
        sourceGroupId,
        targetGroupId,
        rationale: "Same root cause across both groups.",
      });

      expect(result.source.state).toBe("resolved");
      expect(result.source.tags).toContain("resolved:merged");
      expect(result.source.next_action).toContain(targetGroupId);
      expect(result.target.alert_refs).toHaveLength(6);
      expect(result.target.incident_ids).toEqual(["QTEST123", "QTEST456"]);

      const sourceLineage = await readFile(path.join(workspaceDir, "groups", sourceGroupId, "lineage.jsonl"), "utf8");
      const targetLineage = await readFile(path.join(workspaceDir, "groups", targetGroupId, "lineage.jsonl"), "utf8");
      expect(sourceLineage).toContain(`"kind":"merge"`);
      expect(targetLineage).toContain(`"kind":"merge"`);

      const index = await regenerateIndex(workspaceDir);
      expect(index.groups.find((group) => group.group_id === sourceGroupId)?.state).toBe("resolved");
    } finally {
      await rm(workspaceDir, { recursive: true, force: true });
    }
  });

  test("redirects deterministic grouping from a merged source to its live target", async () => {
    const workspaceDir = await mkdtemp(path.join(tmpdir(), "oncall-triage-v2-"));
    try {
      await importPagerDutyIncident({ workspaceDir, incident: "QTEST123", alertsFile: fixture });
      await importPagerDutyIncident({ workspaceDir, incident: "QTEST456", alertsFile: fixture });
      const grouped = await groupImportedAlerts(workspaceDir);
      const sourceGroupId = grouped.groups[0]!;
      const targetGroupId = grouped.groups[1]!;

      await mergeGroups({
        workspaceDir,
        sourceGroupId,
        targetGroupId,
        rationale: "Consolidating duplicate cases.",
      });

      const redirectFixture = path.join(workspaceDir, "redirect-alerts.json");
      await writeFile(
        redirectFixture,
        JSON.stringify([
          {
            id: "PALT4",
            created_at: "2026-05-15T16:08:00Z",
            summary: "Audience export failure for 16985 on a new incident",
            details: {
              org_id: "chghealthcare_395",
              org_id_numeric: "395",
              audience_id: "16985",
              endpoint_id: "marketing_cloud_10988",
              export_run_id: "16985-marketing_cloud_10988-scheduled__2026-05-15T16:10:00+00:00",
              service: "bifrost",
              error: "HTTP SOAP Error Response: Updating an existing Data Extension definition is not allowed when doing an add-only operation.",
              glcli: "glcli --env prod bifrost pizza --org-id 395 --audience-id 16985",
            },
          },
        ]),
      );

      await importPagerDutyIncident({ workspaceDir, incident: "QTEST123", alertsFile: redirectFixture });
      const regrouped = await groupImportedAlerts(workspaceDir);
      const groups = await loadAllGroups(workspaceDir);
      const source = groups.find((group) => group.group_id === sourceGroupId);
      const target = groups.find((group) => group.group_id === targetGroupId);
      const matchRules = await loadMatchRules(workspaceDir);

      expect(regrouped.created).toBe(0);
      expect(regrouped.attached).toBe(1);
      expect(regrouped.groups).toEqual([targetGroupId]);
      expect(source?.alert_refs).toHaveLength(3);
      expect(target?.alert_refs).toHaveLength(7);
      expect(matchRules.some((rule) => rule.status === "redirect" && rule.target_group_id === targetGroupId)).toBe(true);
    } finally {
      await rm(workspaceDir, { recursive: true, force: true });
    }
  });

  test("splits alerts into a new group and records lineage", async () => {
    const workspaceDir = await mkdtemp(path.join(tmpdir(), "oncall-triage-v2-"));
    try {
      await importPagerDutyIncident({ workspaceDir, incident: "QTEST123", alertsFile: fixture });
      await groupImportedAlerts(workspaceDir);
      const groups = await loadAllGroups(workspaceDir);
      const source = groups.find((group) => group.alert_refs.length === 3);
      expect(source).toBeDefined();
      const alertId = source!.alert_refs[0]!.alert_id;

      const result = await splitGroup({
        workspaceDir,
        sourceGroupId: source!.group_id,
        alertIds: [alertId],
        rationale: "One alert needs to stand on its own.",
      });

      expect(result.source.alert_refs).toHaveLength(2);
      expect(result.created.alert_refs).toHaveLength(1);
      expect(result.created.summary).toBe("One alert needs to stand on its own.");
      expect(result.created.related_group_ids).toContain(source!.group_id);

      const sourceLineage = await readFile(path.join(workspaceDir, "groups", source!.group_id, "lineage.jsonl"), "utf8");
      const createdLineage = await readFile(path.join(workspaceDir, "groups", result.created.group_id, "lineage.jsonl"), "utf8");
      expect(sourceLineage).toContain(`"kind":"split"`);
      expect(createdLineage).toContain(`"kind":"split"`);

      const index = await regenerateIndex(workspaceDir);
      expect(index.groups).toHaveLength(2);
    } finally {
      await rm(workspaceDir, { recursive: true, force: true });
    }
  });

  test("sync-pd refreshes incident records and resolves groups when every incident is closed", async () => {
    const workspaceDir = await mkdtemp(path.join(tmpdir(), "oncall-triage-v2-"));
    try {
      const statuses = new Map<string, PagerDutyIncidentStatusRecord>([
        ["QTEST123", { incident_id: "QTEST123", status: "triggered", refreshed_at: "2026-05-15T16:00:00Z" }],
        ["QTEST456", { incident_id: "QTEST456", status: "triggered", refreshed_at: "2026-05-15T16:00:00Z" }],
      ]);
      const fetchIncidentStatus = async (incident: string): Promise<PagerDutyIncidentStatusRecord> => {
        const record = statuses.get(incident);
        if (!record) throw new Error(`Missing fixture for ${incident}`);
        return record;
      };

      await importPagerDutyIncident({ workspaceDir, incident: "QTEST123", alertsFile: fixture });
      await importPagerDutyIncident({ workspaceDir, incident: "QTEST456", alertsFile: fixture });
      await groupImportedAlerts(workspaceDir);

      statuses.set("QTEST123", {
        incident_id: "QTEST123",
        status: "resolved",
        resolved_at: "2026-05-15T17:00:00Z",
        refreshed_at: "2026-05-15T17:00:00Z",
      });
      statuses.set("QTEST456", {
        incident_id: "QTEST456",
        status: "resolved",
        resolved_at: "2026-05-15T17:01:00Z",
        refreshed_at: "2026-05-15T17:01:00Z",
      });

      const result = await syncPagerDutyWorkspace({
        workspaceDir,
        fetchIncidentStatus,
      });
      expect(result.refreshed).toEqual(["QTEST123", "QTEST456"]);
      expect(result.resolved_groups).toHaveLength(2);

      const incidents = await Promise.all([
        readIncidentRecord(workspaceDir, "QTEST123"),
        readIncidentRecord(workspaceDir, "QTEST456"),
      ]);
      expect(incidents.map((incident) => incident.status)).toEqual(["resolved", "resolved"]);
      expect(incidents[0]?.resolved_at).toBe("2026-05-15T17:00:00Z");

      const groups = await loadAllGroups(workspaceDir);
      expect(groups).toHaveLength(2);
      for (const group of groups) {
        expect(group.state).toBe("resolved");
        expect(group.tags).toContain("resolved:pd_closed_external");
        expect(group.summary).toBe("All attached PagerDuty incidents are resolved externally.");
        const evidence = await readFile(path.join(workspaceDir, "groups", group.group_id, "evidence.jsonl"), "utf8");
        expect(evidence).toContain("pd_sync");
      }
    } finally {
      await rm(workspaceDir, { recursive: true, force: true });
    }
  });
});
