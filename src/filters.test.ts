import { describe, expect, test } from "bun:test";
import { filterAlertFacts, matchesGroupFilter, mergeAlertFilter, parseFilterValues } from "./filters";
import type { AlertFact, GroupState } from "./schema";

describe("shared filters", () => {
  test("parses namespaced alert and group filters", () => {
    expect(
      parseFilterValues([
        "alert.incident=Q123",
        "alert.org=albertsons_6",
        "alert.audience=12873",
        "alert.destination=live_ramp_activation",
        "alert.state=snapshotting_finished/export_processing",
        "group.id in g2,g1",
        "group.state=open",
        "group.tag=triage:needs_review",
        "group.incident=Q123",
      ]),
    ).toEqual({
      alert: {
        incidentId: "Q123",
        orgId: "albertsons_6",
        audienceId: "12873",
        destination: "live_ramp_activation",
        state: "snapshotting_finished/export_processing",
      },
      group: {
        ids: ["g1", "g2"],
        state: "open",
        tags: ["triage:needs_review"],
        incidentId: "Q123",
      },
    });
  });

  test("rejects malformed and unknown filters", () => {
    expect(() => parseFilterValues(["alert.org"])).toThrow(/key=value/);
    expect(() => parseFilterValues(["alert.org="])).toThrow(/must not be empty/);
    expect(() => parseFilterValues(["state=open"])).toThrow(/Unknown --filter key/);
    expect(() => parseFilterValues(["group.state=bogus"])).toThrow(/Invalid group.state/);
    expect(() => parseFilterValues(["alert.org in one_1,two_2"])).toThrow(/Unsupported --filter in operator/);
  });

  test("rejects conflicting scalar filters", () => {
    expect(() => parseFilterValues(["alert.org=one_1", "alert.org=two_2"])).toThrow(/Conflicting --filter alert.org/);
    expect(() => mergeAlertFilter({ orgId: "one_1" }, { orgId: "two_2" })).toThrow(/Conflicting --filter alert.org/);
  });

  test("filters alerts by incident, org, audience, destination, tuple state, and limit", () => {
    const alerts = [
      alert({ alert_id: "A", incident_id: "Q1", org_id: "albertsons_6", audience_id: "12873", destination_type: "live_ramp_activation", state_tuple: { snapshotting: "snapshotting_finished", export: "export_processing" } }),
      alert({ alert_id: "B", incident_id: "Q1", org_id: "albertsons_6", audience_id: "12874", destination_type: "live_ramp_activation", state_tuple: { snapshotting: "snapshotting_finished", export: "export_processing" } }),
      alert({ alert_id: "C", incident_id: "Q2", org_id: "ford_310", audience_id: "12873", destination_product: "live-ramp", state_tuple: { snapshotting: "snapshotting_finished", export: "export_finished" } }),
    ];

    expect(
      filterAlertFacts(alerts, {
        incidentId: "Q1",
        orgId: "albertsons_6",
        destination: "live_ramp_activation",
        state: "export_processing",
        limit: 1,
      }).map((item) => item.alert_id),
    ).toEqual(["A"]);
  });

  test("filters alerts by selected refs", () => {
    const alerts = [alert({ alert_id: "A", incident_id: "Q1" }), alert({ alert_id: "B", incident_id: "Q1" })];
    expect(filterAlertFacts(alerts, { alertRefs: [{ incident_id: "Q1", alert_id: "B" }] }).map((item) => item.alert_id)).toEqual(["B"]);
  });

  test("matches groups by id, state, tag, and incident", () => {
    const group: GroupState = {
      group_id: "g1",
      state: "open",
      tags: ["triage:needs_review", "triage:snapshotting-error"],
      title: "case",
      summary: "summary",
      deterministic_key: "key",
      grouping_version: 1,
      created_at: "2026-05-16T00:00:00Z",
      updated_at: "2026-05-16T00:00:00Z",
      alert_refs: [],
      incident_ids: ["Q1"],
      related_group_ids: [],
    };

    expect(matchesGroupFilter(group, { id: "g1", state: "open", tags: ["triage:needs_review"], incidentId: "Q1" })).toBe(true);
    expect(matchesGroupFilter(group, { ids: ["g1", "g2"] })).toBe(true);
    expect(matchesGroupFilter(group, { ids: ["g2", "g3"] })).toBe(false);
    expect(matchesGroupFilter(group, { tags: ["missing"] })).toBe(false);
    expect(matchesGroupFilter(group, { state: "new" })).toBe(false);
  });
});

function alert(fields: Partial<AlertFact>): AlertFact {
  return {
    alert_id: "A",
    incident_id: "Q1",
    incident_url: "https://growthloop.pagerduty.com/incidents/Q1",
    created_at: "2026-05-16T00:00:00Z",
    summary: "alert",
    ...fields,
  };
}
