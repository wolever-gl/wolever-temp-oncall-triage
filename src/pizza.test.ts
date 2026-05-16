import { describe, expect, test } from "bun:test";
import { rowsFromPizzaResponse } from "./pizza";

describe("pizza response parsing", () => {
  test("normalizes Bifrost export metrics rows", () => {
    const rows = rowsFromPizzaResponse({
      export_metrics: [
        {
          info: {
            internal_audience_id: "16985",
            export_run_id: "16985-marketing_cloud_10988-scheduled__2026-05-15T16:00:00+00:00",
            created_at: "2026-05-15T16:00:00Z",
          },
          snapshotting_state: "snapshotting_finished",
          export_state: "export_finished",
          failed_export_count: 0,
        },
      ],
    });

    expect(rows).toEqual([
      {
        export_run_id: "16985-marketing_cloud_10988-scheduled__2026-05-15T16:00:00+00:00",
        audience_id: "16985",
        destination_type: "marketing_cloud",
        created_at: "2026-05-15T16:00:00Z",
        snapshotting_state: "snapshotting_finished",
        export_state: "export_finished",
        failed_export_count: 0,
        raw: {
          info: {
            internal_audience_id: "16985",
            export_run_id: "16985-marketing_cloud_10988-scheduled__2026-05-15T16:00:00+00:00",
            created_at: "2026-05-15T16:00:00Z",
          },
          snapshotting_state: "snapshotting_finished",
          export_state: "export_finished",
          failed_export_count: 0,
        },
      },
    ]);
  });
});
