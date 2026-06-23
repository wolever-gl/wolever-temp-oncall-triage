import { describe, expect, test } from "bun:test";
import { mkdtemp, readFile, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { autoMonitorExportGroup, autoResolveHealthyExportGroup, checkExportsWorkspace, loadAllExportChecks } from "./checkExports";
import { groupImportedAlerts, importPagerDutyIncident, readGroupState } from "./workspace";
import type { ExportCheckScope, PizzaExportRow } from "./schema";

const fixture = path.resolve(import.meta.dir, "..", "fixtures", "pagerduty-alerts.json");

describe("check-exports", () => {
  test("derives export checks and proposes local closure from exact healthy run evidence", async () => {
    const workspaceDir = await mkdtemp(path.join(tmpdir(), "oncall-triage-v2-"));
    try {
      await importPagerDutyIncident({ workspaceDir, incident: "QTEST123", alertsFile: fixture });
      const rows: PizzaExportRow[] = [
        healthyRow("16985-marketing_cloud_10988-scheduled__2026-05-15T16:00:00+00:00", "16985"),
        healthyRow("20770-marketing_cloud_10988-scheduled__2026-05-15T16:00:00+00:00", "20770"),
      ];

      const result = await checkExportsWorkspace({
        workspaceDir,
        now: new Date("2026-05-15T17:00:00Z"),
        fetchPizzaRows: async () => rows,
      });

      expect(result.derived).toBe(3);
      expect(result.evaluated).toBe(3);
      expect(result.healthy_closed).toBe(0);

      const checks = await loadAllExportChecks(workspaceDir);
      expect(checks).toHaveLength(3);
      expect(checks.every((check) => check.proposed_state === "healthy_closed")).toBe(true);
      expect(checks.every((check) => check.state === "open")).toBe(true);
      expect(checks[0]?.run_evaluations[0]?.health).toBe("healthy");
    } finally {
      await rm(workspaceDir, { recursive: true, force: true });
    }
  });

  test("primes batch-capable Pizza fetchers before evaluating checks", async () => {
    const workspaceDir = await mkdtemp(path.join(tmpdir(), "oncall-triage-v2-"));
    try {
      await importPagerDutyIncident({ workspaceDir, incident: "QTEST123", alertsFile: fixture });
      const rowsByAudience = new Map<string, PizzaExportRow[]>();
      const primedAudienceIds: string[] = [];
      const fetchPizzaRows = (async (scope: ExportCheckScope) => rowsByAudience.get(scope.audience_id ?? "") ?? []) as
        ((scope: ExportCheckScope) => Promise<PizzaExportRow[]>) & { prime: (scopes: ExportCheckScope[]) => Promise<void> };
      fetchPizzaRows.prime = async (scopes) => {
        for (const scope of scopes) {
          if (!scope.audience_id) continue;
          primedAudienceIds.push(scope.audience_id);
          rowsByAudience.set(scope.audience_id, [
            healthyRow(`${scope.audience_id}-marketing_cloud_10988-scheduled__2026-05-15T16:00:00+00:00`, scope.audience_id),
          ]);
        }
      };

      const result = await checkExportsWorkspace({
        workspaceDir,
        apply: true,
        now: new Date("2026-05-15T17:00:00Z"),
        fetchPizzaRows,
      });

      expect(primedAudienceIds.sort()).toEqual(["16985", "16985", "20770"]);
      expect(result.healthy_closed).toBe(3);
    } finally {
      await rm(workspaceDir, { recursive: true, force: true });
    }
  });

  test("filters checks to a group and auto-resolves when every group check is healthy", async () => {
    const workspaceDir = await mkdtemp(path.join(tmpdir(), "oncall-triage-v2-"));
    try {
      await importPagerDutyIncident({ workspaceDir, incident: "QTEST123", alertsFile: fixture });
      const grouped = await groupImportedAlerts(workspaceDir);
      const groupId = grouped.groups[0]!;
      const group = await readGroupState(workspaceDir, groupId);
      const rows: PizzaExportRow[] = [
        healthyRow("16985-marketing_cloud_10988-scheduled__2026-05-15T16:00:00+00:00", "16985"),
        healthyRow("20770-marketing_cloud_10988-scheduled__2026-05-15T16:00:00+00:00", "20770"),
      ];

      await checkExportsWorkspace({
        workspaceDir,
        apply: true,
        now: new Date("2026-05-15T17:00:00Z"),
        filters: { alertRefs: group.alert_refs },
        fetchPizzaRows: async () => rows,
      });
      const result = await autoResolveHealthyExportGroup({
        workspaceDir,
        groupId,
        now: new Date("2026-05-15T17:01:00Z"),
      });

      expect(result).toMatchObject({
        group_id: groupId,
        resolved: true,
        reason: "all_checks_healthy_closed",
        healthy_checks: 3,
      });
      const resolved = await readGroupState(workspaceDir, groupId);
      expect(resolved.state).toBe("resolved");
      expect(resolved.tags).toContain("resolved:export-healthy");
      expect(resolved.summary).toContain("Auto-resolved from Pizza export checks");
      const evidence = await readFile(path.join(workspaceDir, "groups", "resolved", groupId, "evidence.jsonl"), "utf8");
      expect(evidence).toContain("all 3 alert-scoped export check");
    } finally {
      await rm(workspaceDir, { recursive: true, force: true });
    }
  });

  test("auto-monitors a group when remaining checks are processing", async () => {
    const workspaceDir = await mkdtemp(path.join(tmpdir(), "oncall-triage-v2-"));
    try {
      await importPagerDutyIncident({ workspaceDir, incident: "QTEST123", alertsFile: fixture });
      const grouped = await groupImportedAlerts(workspaceDir);
      const groupId = grouped.groups[0]!;
      const group = await readGroupState(workspaceDir, groupId);
      const rows: PizzaExportRow[] = [
        healthyRow("16985-marketing_cloud_10988-scheduled__2026-05-15T16:00:00+00:00", "16985"),
        processingRow("20770-marketing_cloud_10988-scheduled__2026-05-15T16:00:00+00:00", "20770"),
      ];

      await checkExportsWorkspace({
        workspaceDir,
        apply: true,
        now: new Date("2026-05-15T17:00:00Z"),
        filters: { alertRefs: group.alert_refs },
        fetchPizzaRows: async () => rows,
      });
      const resolved = await autoResolveHealthyExportGroup({
        workspaceDir,
        groupId,
        now: new Date("2026-05-15T17:01:00Z"),
      });
      const monitored = await autoMonitorExportGroup({
        workspaceDir,
        groupId,
        now: new Date("2026-05-15T17:02:00Z"),
      });

      expect(resolved.resolved).toBe(false);
      expect(monitored).toMatchObject({
        group_id: groupId,
        monitored: true,
        reason: "checks_healthy_or_monitoring",
        healthy_checks: 2,
        monitoring_checks: 1,
      });
      const monitoring = await readGroupState(workspaceDir, groupId);
      expect(monitoring.state).toBe("monitoring");
      expect(monitoring.tags).toContain("monitoring:export-processing");
      expect(monitoring.summary).toContain("still processing");
      const evidence = await readFile(path.join(workspaceDir, "groups", "monitoring", groupId, "evidence.jsonl"), "utf8");
      expect(evidence).toContain("Auto-monitored from Pizza export checks");
    } finally {
      await rm(workspaceDir, { recursive: true, force: true });
    }
  });

  test("--apply closes checks locally when all exact runs are healthy", async () => {
    const workspaceDir = await mkdtemp(path.join(tmpdir(), "oncall-triage-v2-"));
    try {
      await importPagerDutyIncident({ workspaceDir, incident: "QTEST123", alertsFile: fixture });
      const rows: PizzaExportRow[] = [
        healthyRow("16985-marketing_cloud_10988-scheduled__2026-05-15T16:00:00+00:00", "16985"),
        healthyRow("20770-marketing_cloud_10988-scheduled__2026-05-15T16:00:00+00:00", "20770"),
      ];

      const result = await checkExportsWorkspace({
        workspaceDir,
        apply: true,
        now: new Date("2026-05-15T17:00:00Z"),
        fetchPizzaRows: async () => rows,
      });

      expect(result.healthy_closed).toBe(3);
      const checks = await loadAllExportChecks(workspaceDir);
      expect(checks.every((check) => check.state === "healthy_closed")).toBe(true);
      expect(checks.every((check) => check.closed_at === "2026-05-15T17:00:00.000Z")).toBe(true);
    } finally {
      await rm(workspaceDir, { recursive: true, force: true });
    }
  });

  test("ignores sibling destination run ids when an alert is scoped to one destination", async () => {
    const workspaceDir = await mkdtemp(path.join(tmpdir(), "oncall-triage-v2-"));
    try {
      const alertsFile = path.join(workspaceDir, "alerts.json");
      await writeFile(
        alertsFile,
        JSON.stringify([
          {
            id: "PMULTIDEST",
            created_at: "2026-05-15T16:05:00Z",
            summary: "Exports for audience 31274 failed with states: <(snapshotting_finished,no_batches)>",
            details: {
              org_id: "ford_310",
              org_id_numeric: "310",
              audience_id: "31274",
              destination_type: "facebook",
              checked_export_run_ids:
                "31274-facebook_19687-scheduled__2026-05-13T00:00:00+00:00,31274-the_trade_desk_crm_19688-scheduled__2026-05-13T00:00:00+00:00",
              glcli: "glcli --env prod bifrost pizza --audience-id 31274 --org-id 310",
            },
          },
        ]),
      );
      await importPagerDutyIncident({ workspaceDir, incident: "QFORD", alertsFile });

      await checkExportsWorkspace({
        workspaceDir,
        apply: true,
        now: new Date("2026-05-15T17:00:00Z"),
        fetchPizzaRows: async () => [
          healthyRow("31274-facebook_19687-scheduled__2026-05-13T00:00:00+00:00", "31274", "facebook"),
          healthyRow("31274-the_trade_desk_crm_19688-scheduled__2026-05-13T00:00:00+00:00", "31274", "the_trade_desk_crm"),
        ],
      });

      const checks = await loadAllExportChecks(workspaceDir);
      expect(checks).toHaveLength(1);
      expect(checks[0]?.state).toBe("healthy_closed");
      expect(checks[0]?.run_evaluations).toHaveLength(1);
      expect(checks[0]?.run_evaluations[0]?.export_run_id).toContain("facebook");
    } finally {
      await rm(workspaceDir, { recursive: true, force: true });
    }
  });

  test("explicit any-export checks close from any healthy Pizza row after the alert", async () => {
    const workspaceDir = await mkdtemp(path.join(tmpdir(), "oncall-triage-v2-"));
    try {
      const alertsFile = path.join(workspaceDir, "alerts.json");
      await writeFile(
        alertsFile,
        JSON.stringify([
          {
            id: "PZEROSUCCESS",
            created_at: "2026-05-15T16:05:00Z",
            summary: "albertsons (Albertsons Media) - Audience 12873: 0 successfull_exports from pizza tracker found 10 minutes after new export",
            details: {
              org_id: "albertsons_6",
              org_id_numeric: "6",
              audience_id: "12873",
              glcli: "glcli --env albertsons bifrost pizza --audience-id 12873 --org-id 6",
            },
          },
        ]),
      );
      await importPagerDutyIncident({ workspaceDir, incident: "QZERO", alertsFile });

      await checkExportsWorkspace({
        workspaceDir,
        apply: true,
        now: new Date("2026-05-15T17:00:00Z"),
        fetchPizzaRows: async () => [
          datedRow("12873-live_ramp_activation_4612-scheduled__2026-05-15T00:00:00+00:00", "12873", "2026-05-15T15:00:00Z", "export_finished"),
          datedRow("12873-live_ramp_activation_4612-scheduled__2026-05-16T00:00:00+00:00", "12873", "2026-05-16T00:29:57Z", "export_finished"),
        ],
      });

      const checks = await loadAllExportChecks(workspaceDir);
      expect(checks).toHaveLength(1);
      expect(checks[0]?.scope.match_strategy).toBe("any_export_after_alert");
      expect(checks[0]?.state).toBe("healthy_closed");
      expect(checks[0]?.run_evaluations[0]?.match_basis).toBe("any_export_after_alert");
      expect(checks[0]?.run_evaluations[0]?.export_run_id).toContain("2026-05-16");
    } finally {
      await rm(workspaceDir, { recursive: true, force: true });
    }
  });

  test("explicit any-export checks monitor processing rows after the alert", async () => {
    const workspaceDir = await mkdtemp(path.join(tmpdir(), "oncall-triage-v2-"));
    try {
      const alertsFile = path.join(workspaceDir, "alerts.json");
      await writeFile(
        alertsFile,
        JSON.stringify([
          {
            id: "PCLIENT",
            created_at: "2026-05-15T16:05:00Z",
            summary: "albertsons (Albertsons Media) - Audience 12875: Audience Export failure for 12875 sent to client.",
            details: {
              org_id: "albertsons_6",
              org_id_numeric: "6",
              audience_id: "12875",
              glcli: "glcli --env albertsons bifrost pizza --audience-id 12875 --org-id 6",
            },
          },
        ]),
      );
      await importPagerDutyIncident({ workspaceDir, incident: "QCLIENT", alertsFile });

      await checkExportsWorkspace({
        workspaceDir,
        apply: true,
        now: new Date("2026-05-15T17:00:00Z"),
        fetchPizzaRows: async () => [
          datedRow("12875-live_ramp_activation_4613-scheduled__2026-05-16T00:00:00+00:00", "12875", "2026-05-16T00:36:47Z", "export_processing"),
        ],
      });

      const checks = await loadAllExportChecks(workspaceDir);
      expect(checks).toHaveLength(1);
      expect(checks[0]?.scope.match_strategy).toBe("any_export_after_alert");
      expect(checks[0]?.state).toBe("monitoring");
      expect(checks[0]?.run_evaluations[0]?.health).toBe("monitoring");
    } finally {
      await rm(workspaceDir, { recursive: true, force: true });
    }
  });

  test("monitoring groups refresh evidence instead of returning already_monitoring", async () => {
    const workspaceDir = await mkdtemp(path.join(tmpdir(), "oncall-triage-v2-"));
    try {
      await importPagerDutyIncident({ workspaceDir, incident: "QTEST123", alertsFile: fixture });
      const grouped = await groupImportedAlerts(workspaceDir);
      const groupId = grouped.groups[0]!;
      const group = await readGroupState(workspaceDir, groupId);
      const rows: PizzaExportRow[] = [
        healthyRow("16985-marketing_cloud_10988-scheduled__2026-05-15T16:00:00+00:00", "16985"),
        processingRow("20770-marketing_cloud_10988-scheduled__2026-05-15T16:00:00+00:00", "20770"),
      ];

      await checkExportsWorkspace({
        workspaceDir,
        apply: true,
        now: new Date("2026-05-15T17:00:00Z"),
        filters: { alertRefs: group.alert_refs },
        fetchPizzaRows: async () => rows,
      });
      await autoMonitorExportGroup({ workspaceDir, groupId, now: new Date("2026-05-15T17:01:00Z") });
      const refreshed = await autoMonitorExportGroup({ workspaceDir, groupId, now: new Date("2026-05-15T17:02:00Z") });

      expect(refreshed).toMatchObject({
        group_id: groupId,
        monitored: true,
        reason: "checks_healthy_or_monitoring",
      });
      const evidence = await readFile(path.join(workspaceDir, "groups", "monitoring", groupId, "evidence.jsonl"), "utf8");
      expect(evidence.match(/Auto-monitored from Pizza export checks/g)?.length).toBe(2);
    } finally {
      await rm(workspaceDir, { recursive: true, force: true });
    }
  });

  test("skips environments marked unavailable without fetching or starting work", async () => {
    const workspaceDir = await mkdtemp(path.join(tmpdir(), "oncall-triage-v2-"));
    try {
      const alertsFile = path.join(workspaceDir, "alerts.json");
      await writeFile(
        alertsFile,
        JSON.stringify([
          {
            id: "PALLEGRO",
            created_at: "2026-05-15T16:05:00Z",
            summary: "Exports for audience 731 failed with states: <(snapshotting_finished,export_error)>",
            details: {
              org_id: "allegro_3",
              org_id_numeric: "3",
              audience_id: "731",
              checked_export_run_ids: "731-dv360_123-scheduled__2026-05-15T16:00:00+00:00",
              glcli: "glcli --env allegro bifrost pizza --audience-id 731 --org-id 3",
            },
          },
        ]),
      );
      await importPagerDutyIncident({ workspaceDir, incident: "QALLEGRO", alertsFile });
      const grouped = await groupImportedAlerts(workspaceDir);
      await writeFile(
        path.join(workspaceDir, "env_availability.json"),
        JSON.stringify({ environments: { allegro: { status: "unavailable", reason: "not reachable here" } } }),
      );

      const result = await checkExportsWorkspace({
        workspaceDir,
        apply: true,
        filters: { alertRefs: (await readGroupState(workspaceDir, grouped.groups[0]!)).alert_refs },
        fetchPizzaRows: async () => {
          throw new Error("fetch should not run");
        },
      });

      expect(result.evaluated).toBe(0);
      expect(result.skipped_unavailable).toBe(1);
      expect(await loadAllExportChecks(workspaceDir)).toHaveLength(0);
      const group = await readGroupState(workspaceDir, grouped.groups[0]!);
      expect(group.state).toBe("new");
    } finally {
      await rm(workspaceDir, { recursive: true, force: true });
    }
  });

  test("blocks snapshotting errors and missing run identity", async () => {
    const workspaceDir = await mkdtemp(path.join(tmpdir(), "oncall-triage-v2-"));
    try {
      const alertsFile = path.join(workspaceDir, "alerts.json");
      await writeFile(
        alertsFile,
        JSON.stringify([
          {
            id: "PERR",
            created_at: "2026-05-15T16:05:00Z",
            summary: "Exports for audience 16985 failed with states: <(snapshotting_error,no_batches)>",
            details: {
              org_id: "chghealthcare_395",
              org_id_numeric: "395",
              audience_id: "16985",
              endpoint_id: "marketing_cloud_10988",
              checked_export_run_ids: "16985-marketing_cloud_10988-scheduled__2026-05-15T16:00:00+00:00",
              glcli: "glcli --env prod bifrost pizza --org-id 395 --audience-id 16985",
            },
          },
          {
            id: "PNORUN",
            created_at: "2026-05-15T16:06:00Z",
            summary: "Audience 20770 has zero successful exports",
            details: {
              org_id_numeric: "395",
              audience_id: "20770",
              glcli: "glcli --env prod bifrost pizza --audience-id 20770 --org-id 395",
            },
          },
        ]),
      );
      await importPagerDutyIncident({ workspaceDir, incident: "QTEST999", alertsFile });

      await checkExportsWorkspace({
        workspaceDir,
        apply: true,
        now: new Date("2026-05-15T17:00:00Z"),
        fetchPizzaRows: async () => [
          {
            export_run_id: "16985-marketing_cloud_10988-scheduled__2026-05-15T16:00:00+00:00",
            audience_id: "16985",
            destination_type: "marketing_cloud",
            snapshotting_state: "snapshotting_error",
            export_state: "no_batches",
            failed_export_count: 0,
          },
        ],
      });

      const checks = await loadAllExportChecks(workspaceDir);
      expect(checks).toHaveLength(2);
      expect(checks.find((check) => check.alert_id === "PERR")?.blockers).toContain("snapshotting_error_requires_review");
      expect(checks.find((check) => check.alert_id === "PNORUN")?.blockers).toContain("missing_run_identity");

      const index = await readFile(path.join(workspaceDir, "indexes", "checks.json"), "utf8");
      expect(index).toContain("snapshotting_error_requires_review");
    } finally {
      await rm(workspaceDir, { recursive: true, force: true });
    }
  });
});

function healthyRow(export_run_id: string, audience_id: string, destination_type = "marketing_cloud"): PizzaExportRow {
  return {
    export_run_id,
    audience_id,
    destination_type,
    snapshotting_state: "snapshotting_finished",
    export_state: "export_finished",
    failed_export_count: 0,
  };
}

function processingRow(export_run_id: string, audience_id: string): PizzaExportRow {
  return {
    export_run_id,
    audience_id,
    destination_type: "marketing_cloud",
    snapshotting_state: "snapshotting_finished",
    export_state: "export_processing",
    failed_export_count: 0,
  };
}

function datedRow(export_run_id: string, audience_id: string, created_at: string, export_state: string): PizzaExportRow {
  return {
    export_run_id,
    audience_id,
    destination_type: "live_ramp_activation",
    created_at,
    snapshotting_state: "snapshotting_finished",
    export_state,
    failed_export_count: 0,
  };
}
