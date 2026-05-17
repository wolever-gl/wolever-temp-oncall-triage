import { describe, expect, test } from "bun:test";
import { mkdtemp, readFile, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { checkExportsWorkspace } from "./checkExports";
import { appendEvidence, groupImportedAlerts, groupTaggedAlerts, importPagerDutyIncident, loadAllGroups, loadMatchRules, mergeGroups, queryAlertFacts, readIncidentRecord, regenerateIndex, runAlertTagger, splitGroup, syncPagerDutyWorkspace, transitionGroup } from "./workspace";
import type { PagerDutyIncidentStatusRecord } from "./pagerduty";
import type { PizzaExportRow } from "./schema";

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
      expect(indexMd).toContain("## New (1)");
      expect(indexMd).toContain("groups/new/260515-chghealthcare_395-client-sent-export-failure/case.md");
      const groupedCase = await readFile(groupFile(workspaceDir, "new", "260515-chghealthcare_395-client-sent-export-failure", "case.md"), "utf8");
      expect(groupedCase).toContain("State: `new`");
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
      const decisions = await readFile(groupFile(workspaceDir, "monitoring", grouped.group.group_id, "decisions.jsonl"), "utf8");
      expect(decisions).toContain("created_group_from_tags");
      const matchRules = await loadMatchRules(workspaceDir);
      expect(matchRules.every((rule) => rule.status === "redirect" && rule.target_group_id === grouped.group.group_id)).toBe(true);
    } finally {
      await rm(workspaceDir, { recursive: true, force: true });
    }
  });

  test("rejects waiting transitions without communication evidence", async () => {
    const workspaceDir = await mkdtemp(path.join(tmpdir(), "oncall-triage-v2-"));
    try {
      await importPagerDutyIncident({ workspaceDir, incident: "QTEST123", alertsFile: fixture });
      const grouped = await groupImportedAlerts(workspaceDir);
      const groupId = grouped.groups[0]!;

      await appendEvidence(workspaceDir, groupId, {
        ts: "2026-05-16T17:00:00.000Z",
        kind: "triage",
        source: "gcloud scoped logs",
        summary: "Scoped logs show a client-side blocker, but no one has been notified yet.",
        data: {
          links: [{ label: "Scoped run logs", url: "https://console.cloud.google.com/logs/query;query=test?project=flywheel-prod-328213" }],
        },
      });

      await expect(transitionGroup({
        workspaceDir,
        groupId,
        state: "waiting",
        summary: "Waiting on the client-side blocker.",
      })).rejects.toThrow("Cannot move");

      const group = (await loadAllGroups(workspaceDir))[0]!;
      expect(group.state).toBe("open");
    } finally {
      await rm(workspaceDir, { recursive: true, force: true });
    }
  });

  test("allows waiting transitions after communication evidence is recorded", async () => {
    const workspaceDir = await mkdtemp(path.join(tmpdir(), "oncall-triage-v2-"));
    try {
      await importPagerDutyIncident({ workspaceDir, incident: "QTEST123", alertsFile: fixture });
      const grouped = await groupImportedAlerts(workspaceDir);
      const groupId = grouped.groups[0]!;

      await appendEvidence(workspaceDir, groupId, {
        ts: "2026-05-16T17:00:00.000Z",
        kind: "support_thread",
        source: "slack",
        summary: "Support thread opened with the owning team for the client-side blocker.",
        data: {
          links: [{ label: "Support thread", url: "https://flywheeltechnologies.slack.com/archives/C02J2RJ6VSL/p1778964420710189" }],
        },
      });

      const group = await transitionGroup({
        workspaceDir,
        groupId,
        state: "waiting",
        tag: "waiting:client_schema",
        summary: "Waiting on client schema remediation; support thread opened.",
      });

      expect(group.state).toBe("waiting");
      expect(group.tags).toContain("waiting:client_schema");
      const caseMarkdown = await readFile(groupFile(workspaceDir, "waiting", groupId, "case.md"), "utf8");
      expect(caseMarkdown).toContain("Support thread opened");
    } finally {
      await rm(workspaceDir, { recursive: true, force: true });
    }
  });

  test("allows waiting transitions with explicit communication notes", async () => {
    const workspaceDir = await mkdtemp(path.join(tmpdir(), "oncall-triage-v2-"));
    try {
      await importPagerDutyIncident({ workspaceDir, incident: "QTEST123", alertsFile: fixture });
      const grouped = await groupImportedAlerts(workspaceDir);
      const groupId = grouped.groups[0]!;
      await writeFile(
        groupFile(workspaceDir, "new", groupId, "notes.md"),
        "Communication: notified Support in #eng-support thread https://flywheeltechnologies.slack.com/archives/C02J2RJ6VSL/p1778964420710189.\n",
      );

      const group = await transitionGroup({
        workspaceDir,
        groupId,
        state: "waiting",
        summary: "Waiting on owner response in the linked support thread.",
      });

      expect(group.state).toBe("waiting");
      const caseMarkdown = await readFile(groupFile(workspaceDir, "waiting", groupId, "case.md"), "utf8");
      expect(caseMarkdown).toContain("## Notes");
      expect(caseMarkdown).toContain("notified Support");
    } finally {
      await rm(workspaceDir, { recursive: true, force: true });
    }
  });

  test("tag grouping cannot create a waiting group without communication evidence", async () => {
    const workspaceDir = await mkdtemp(path.join(tmpdir(), "oncall-triage-v2-"));
    try {
      await importPagerDutyIncident({ workspaceDir, incident: "QTEST123", alertsFile: fixture });
      await groupImportedAlerts(workspaceDir);
      const tagger = await writeFixtureTagger(workspaceDir);
      await runAlertTagger({
        workspaceDir,
        filters: { orgId: "chghealthcare_395" },
        scriptPath: tagger,
        tags: ["evidence:client-blocker"],
      });

      await expect(groupTaggedAlerts({
        title: "Client schema blocker",
        summary: "Alerts share a client-side blocker.",
        rationale: "Agent verified the blocker evidence.",
        tags: ["evidence:client-blocker"],
        state: "waiting",
        groupTags: ["waiting:client_schema"],
        workspaceDir,
      })).rejects.toThrow("Cannot create a group directly in waiting");
    } finally {
      await rm(workspaceDir, { recursive: true, force: true });
    }
  });

  test("tag grouping cannot move an existing group to waiting without communication evidence", async () => {
    const workspaceDir = await mkdtemp(path.join(tmpdir(), "oncall-triage-v2-"));
    try {
      await importPagerDutyIncident({ workspaceDir, incident: "QTEST123", alertsFile: fixture });
      const grouped = await groupImportedAlerts(workspaceDir);
      const groupId = grouped.groups[0]!;
      const tagger = await writeFixtureTagger(workspaceDir);
      await runAlertTagger({
        workspaceDir,
        filters: { orgId: "chghealthcare_395" },
        scriptPath: tagger,
        tags: ["evidence:client-blocker"],
      });

      await expect(groupTaggedAlerts({
        title: "Client schema blocker",
        summary: "Alerts share a client-side blocker.",
        rationale: "Agent verified the blocker evidence.",
        tags: ["evidence:client-blocker"],
        groupId,
        state: "waiting",
        groupTags: ["waiting:client_schema"],
        workspaceDir,
      })).rejects.toThrow("Cannot move");
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

      await transitionGroup({
        workspaceDir,
        groupId,
        state: "open",
        summary: "Investigation started.",
      });
      const group = await transitionGroup({
        workspaceDir,
        groupId,
        state: "resolved",
        tag: "resolved:retry_succeeded",
        summary: "Later pizza run finished successfully.",
      });
      expect(group.state).toBe("resolved");
      expect(group.tags).toContain("resolved:retry_succeeded");

      const decisions = await readFile(groupFile(workspaceDir, "resolved", groupId, "decisions.jsonl"), "utf8");
      expect(decisions).toContain("transitioned_to_open");
      expect(decisions).toContain("transitioned_to_resolved");
    } finally {
      await rm(workspaceDir, { recursive: true, force: true });
    }
  });

  test("appending evidence refreshes case markdown with investigation details and links", async () => {
    const workspaceDir = await mkdtemp(path.join(tmpdir(), "oncall-triage-v2-"));
    try {
      await importPagerDutyIncident({ workspaceDir, incident: "QTEST123", alertsFile: fixture });
      const grouped = await groupImportedAlerts(workspaceDir);
      const groupId = grouped.groups[0]!;

      await appendEvidence(workspaceDir, groupId, {
        ts: "2026-05-16T17:00:00.000Z",
        kind: "triage",
        source: "gcloud scoped logs",
        summary: "Scoped logs show base_table_not_empty_check_failed for export run 34484-iterable_21078-scheduled__2026-05-16T00:00:00+00:00.",
        data: {
          links: [
            {
              label: "Scoped run logs",
              url: "https://console.cloud.google.com/logs/query;query=test?project=flywheel-prod-328213",
            },
          ],
          commands: [
            "gcloud logging read 'resource.type=\"k8s_container\"' --project=flywheel-prod-328213",
          ],
        },
      });

      const caseMarkdown = await readFile(groupFile(workspaceDir, "open", groupId, "case.md"), "utf8");
      expect(caseMarkdown).toContain("State: `open`");
      expect(caseMarkdown).toContain("## Recent Evidence");
      expect(caseMarkdown).toContain("base_table_not_empty_check_failed");
      expect(caseMarkdown).toContain("[Scoped run logs](https://console.cloud.google.com/logs/query;query=test?project=flywheel-prod-328213)");
      expect(caseMarkdown).toContain("gcloud logging read");
    } finally {
      await rm(workspaceDir, { recursive: true, force: true });
    }
  });

  test("regenerating the index refreshes case markdown with export check evidence", async () => {
    const workspaceDir = await mkdtemp(path.join(tmpdir(), "oncall-triage-v2-"));
    try {
      await importPagerDutyIncident({ workspaceDir, incident: "QTEST123", alertsFile: fixture });
      const grouped = await groupImportedAlerts(workspaceDir);
      const groupId = grouped.groups[0]!;
      const rows: PizzaExportRow[] = [
        {
          export_run_id: "16985-marketing_cloud_10988-scheduled__2026-05-15T16:00:00+00:00",
          audience_id: "16985",
          destination_type: "marketing_cloud",
          snapshotting_state: "snapshotting_finished",
          export_state: "export_finished",
          failed_export_count: 0,
          created_at: "2026-05-15T16:30:00Z",
        },
        {
          export_run_id: "20770-marketing_cloud_10988-scheduled__2026-05-15T16:00:00+00:00",
          audience_id: "20770",
          destination_type: "marketing_cloud",
          snapshotting_state: "snapshotting_finished",
          export_state: "export_finished",
          failed_export_count: 0,
          created_at: "2026-05-15T16:31:00Z",
        },
      ];

      await checkExportsWorkspace({
        workspaceDir,
        apply: true,
        now: new Date("2026-05-15T17:00:00Z"),
        fetchPizzaRows: async () => rows,
      });
      await regenerateIndex(workspaceDir);

      const caseMarkdown = await readFile(groupFile(workspaceDir, "open", groupId, "case.md"), "utf8");
      expect(caseMarkdown).toContain("## Alert Scope");
      expect(caseMarkdown).toContain("## Export Checks");
      expect(caseMarkdown).toContain("chk_qtest123_palt1");
      expect(caseMarkdown).toContain("Checked runs:");
      expect(caseMarkdown).toContain("16985-marketing_cloud_10988-scheduled__2026-05-15T16:00:00+00:00");
      expect(caseMarkdown).toContain("health=`healthy`");
      expect(caseMarkdown).toContain("Command: `glcli --env prod bifrost pizza --org-id 395 --audience-id 16985`");
    } finally {
      await rm(workspaceDir, { recursive: true, force: true });
    }
  });

  test("case markdown includes notes markdown but remains generated", async () => {
    const workspaceDir = await mkdtemp(path.join(tmpdir(), "oncall-triage-v2-"));
    try {
      await importPagerDutyIncident({ workspaceDir, incident: "QTEST123", alertsFile: fixture });
      const grouped = await groupImportedAlerts(workspaceDir);
      const groupId = grouped.groups[0]!;
      await writeFile(groupFile(workspaceDir, "new", groupId, "notes.md"), "Agent note: waiting on owner confirmation.\n\n- Evidence looks client-side.\n");

      await regenerateIndex(workspaceDir);

      const caseMarkdown = await readFile(groupFile(workspaceDir, "new", groupId, "case.md"), "utf8");
      expect(caseMarkdown.startsWith("<!-- AUTO-GENERATED: Do not edit case.md directly.")).toBe(true);
      expect(caseMarkdown).toContain("Generated file. Do not edit directly");
      expect(caseMarkdown).toContain("## Notes");
      expect(caseMarkdown).toContain("Agent note: waiting on owner confirmation.");
      expect(caseMarkdown).toContain("- Evidence looks client-side.");
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

      const sourceLineage = await readFile(groupFile(workspaceDir, "resolved", sourceGroupId, "lineage.jsonl"), "utf8");
      const targetLineage = await readFile(groupFile(workspaceDir, "new", targetGroupId, "lineage.jsonl"), "utf8");
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

      const sourceLineage = await readFile(groupFile(workspaceDir, "new", source!.group_id, "lineage.jsonl"), "utf8");
      const createdLineage = await readFile(groupFile(workspaceDir, "open", result.created.group_id, "lineage.jsonl"), "utf8");
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
        const evidence = await readFile(groupFile(workspaceDir, "resolved", group.group_id, "evidence.jsonl"), "utf8");
        expect(evidence).toContain("pd_sync");
      }
    } finally {
      await rm(workspaceDir, { recursive: true, force: true });
    }
  });
});

function groupFile(workspaceDir: string, state: string, groupId: string, file: string): string {
  return path.join(workspaceDir, "groups", state, groupId, file);
}

async function writeFixtureTagger(workspaceDir: string): Promise<string> {
  const tagger = path.join(workspaceDir, "tagger.ts");
  await writeFile(
    tagger,
    `const alertPath = process.argv[process.argv.indexOf("--alert") + 1];
const alert = await Bun.file(alertPath).json();
console.log(JSON.stringify({
  decision: alert.org_id === "chghealthcare_395" ? "tag" : "skip",
  tags: ["evidence:client-blocker"],
  confidence: "high",
  summary: "Fixture tagger matched chghealthcare alert."
}));
`,
  );
  return tagger;
}
