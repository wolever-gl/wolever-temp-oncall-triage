import { describe, expect, test } from "bun:test";
import { mkdtemp, readFile, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { groupImportedAlerts, importPagerDutyIncident, loadAllGroups, mergeGroups, regenerateIndex, splitGroup, transitionGroup } from "./workspace";

const fixture = path.resolve(import.meta.dir, "..", "fixtures", "pagerduty-alerts.json");

describe("case workspace", () => {
  test("imports alerts, groups conservatively, and generates indexes", async () => {
    const workspaceDir = await mkdtemp(path.join(tmpdir(), "oncall-triage-v2-"));
    try {
      const imported = await importPagerDutyIncident({ workspaceDir, incident: "QTEST123", alertsFile: fixture });
      expect(imported).toEqual({ incident_id: "QTEST123", alert_count: 3 });

      const grouped = await groupImportedAlerts(workspaceDir);
      expect(grouped.created).toBe(2);
      expect(grouped.attached).toBe(1);

      const groups = await loadAllGroups(workspaceDir);
      expect(groups).toHaveLength(2);
      expect(groups.find((group) => group.alert_refs.length === 2)?.tags).toContain("triage:needs_review");

      const index = await regenerateIndex(workspaceDir);
      expect(index.open_count).toBe(2);
      const indexMd = await readFile(path.join(workspaceDir, "index.md"), "utf8");
      expect(indexMd).toContain("On-call Triage Cases");
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
      expect(result.target.alert_refs).toHaveLength(3);
      expect(result.target.incident_ids).toEqual(["QTEST123"]);

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

      await importPagerDutyIncident({ workspaceDir, incident: "QREDIR1", alertsFile: redirectFixture });
      const regrouped = await groupImportedAlerts(workspaceDir);
      const groups = await loadAllGroups(workspaceDir);
      const source = groups.find((group) => group.group_id === sourceGroupId);
      const target = groups.find((group) => group.group_id === targetGroupId);

      expect(regrouped.created).toBe(0);
      expect(regrouped.attached).toBe(1);
      expect(regrouped.groups).toEqual([targetGroupId]);
      expect(source?.alert_refs).toHaveLength(2);
      expect(target?.alert_refs).toHaveLength(4);
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
      const source = groups.find((group) => group.alert_refs.length === 2);
      expect(source).toBeDefined();
      const alertId = source!.alert_refs[0]!.alert_id;

      const result = await splitGroup({
        workspaceDir,
        sourceGroupId: source!.group_id,
        alertIds: [alertId],
        rationale: "One alert needs to stand on its own.",
      });

      expect(result.source.alert_refs).toHaveLength(1);
      expect(result.created.alert_refs).toHaveLength(1);
      expect(result.created.summary).toBe("One alert needs to stand on its own.");
      expect(result.created.related_group_ids).toContain(source!.group_id);

      const sourceLineage = await readFile(path.join(workspaceDir, "groups", source!.group_id, "lineage.jsonl"), "utf8");
      const createdLineage = await readFile(path.join(workspaceDir, "groups", result.created.group_id, "lineage.jsonl"), "utf8");
      expect(sourceLineage).toContain(`"kind":"split"`);
      expect(createdLineage).toContain(`"kind":"split"`);

      const index = await regenerateIndex(workspaceDir);
      expect(index.groups).toHaveLength(3);
    } finally {
      await rm(workspaceDir, { recursive: true, force: true });
    }
  });
});
