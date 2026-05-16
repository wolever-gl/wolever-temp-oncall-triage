import { describe, expect, test } from "bun:test";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { parseAlertFacts } from "./pagerduty";

const repoRoot = path.resolve(import.meta.dir, "..");

async function rawCase(incidentId: string): Promise<string> {
  return readFile(path.join(repoRoot, "cases", "incidents", incidentId, "alerts.raw.txt"), "utf8");
}

describe("PagerDuty alert parsing", () => {
  test("parses one fact per alert from the PagerDuty wrapper format", async () => {
    const alerts = parseAlertFacts(await rawCase("Q269WMZF4MKMNL"), "Q269WMZF4MKMNL");

    expect(alerts).toHaveLength(2);
    expect(alerts[0]).toMatchObject({
      alert_id: "Q1E9RQ6EFI68FV",
      incident_id: "Q269WMZF4MKMNL",
      alert_status: "triggered",
      created_at: "2026-05-15T14:46:08-07:00",
      org_id: "albertsons_6",
      org_id_numeric: "6",
      org_slug: "albertsons",
      audience_id: "10684",
      source_glcli: "glcli --env albertsons bifrost pizza --audience-id 10684 --org-id 6",
      export_check_strategy: "any_export_after_alert",
      parser_version: 2,
    });
    expect(alerts[0]?.summary).toContain("0 successfull_exports");
    expect(alerts[1]?.audience_id).toBe("10685");
  });

  test("extracts endpoint, checked run ids, destination, and state tuple", async () => {
    const alerts = parseAlertFacts(await rawCase("Q2CEMYYJ9N4IAX"), "Q2CEMYYJ9N4IAX");

    expect(alerts).toHaveLength(1);
    expect(alerts[0]).toMatchObject({
      alert_id: "Q3QQZ6V22UZC2A",
      org_id: "nerdwallet_373",
      org_id_numeric: "373",
      org_slug: "nerdwallet",
      audience_id: "28175",
      endpoint_id: "app_tiktok_1899",
      destination_type: "tik_tok",
      destination_product: "tik-tok",
      export_check_strategy: "checked_export_run_ids",
      state_tuple: {
        snapshotting: "snapshotting_finished",
        export: "export_processing",
      },
    });
    expect(alerts[0]?.checked_export_run_ids).toHaveLength(10);
    expect(alerts[0]?.parsed_run_ids?.[0]).toMatchObject({
      audience_id: "28175",
      destination_type: "tik_tok",
      endpoint_id: "17978",
      trigger_type: "scheduled",
      scheduled_at: "2026-05-06T00:00:00+00:00",
    });
  });

  test("parses large multi-alert incidents without collapsing them", async () => {
    const alerts = parseAlertFacts(await rawCase("Q064V2C56CNTCR"), "Q064V2C56CNTCR");

    expect(alerts).toHaveLength(182);
    expect(alerts[0]?.alert_id).toBe("Q0GIQNJAUIKNV2");
    expect(alerts[0]?.org_id).toBe("chghealthcare_395");
    expect(alerts[0]?.audience_id).toBe("30299");
    expect(alerts[7]).toMatchObject({
      audience_id: "341",
      destination_type: "marketing_cloud_object",
      destination_product: "marketing-cloud",
    });
  });

  test("fails on PagerDuty wrapper alert count mismatch by default", () => {
    const raw = `Alerts (2)
----------------
1. QABC123 | triggered | 2026-05-15T10:00:00-07:00
   untrusted_message: "acme (default): Exports for audience 1 failed with states: <(snapshotting_finished,no_batches)>"
   audience_id: "1"
   glcli: glcli --env prod bifrost pizza --audience-id 1 --org-id 42
`;

    expect(() => parseAlertFacts(raw, "QTEST123")).toThrow(/PagerDuty alert count mismatch/);
  });
});
