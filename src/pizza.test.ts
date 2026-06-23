import { describe, expect, test } from "bun:test";
import { mkdtemp, rm, writeFile, utimes } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { googleAuthCacheAgeMs, groupRowsByAudience, rowsFromPizzaResponse } from "./pizza";

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

  test("groups rows by explicit or run-derived audience id", () => {
    const grouped = groupRowsByAudience([
      {
        export_run_id: "16985-marketing_cloud_10988-scheduled__2026-05-15T16:00:00+00:00",
        audience_id: "16985",
      },
      {
        export_run_id: "16985-live_ramp_activation_10989-scheduled__2026-05-15T16:00:00+00:00",
      },
      {
        export_run_id: "731-dv360_123-scheduled__2026-05-15T16:00:00+00:00",
      },
    ]);

    expect(grouped.get("16985")?.map((row) => row.export_run_id)).toEqual([
      "16985-marketing_cloud_10988-scheduled__2026-05-15T16:00:00+00:00",
      "16985-live_ramp_activation_10989-scheduled__2026-05-15T16:00:00+00:00",
    ]);
    expect(grouped.get("731")?.map((row) => row.export_run_id)).toEqual([
      "731-dv360_123-scheduled__2026-05-15T16:00:00+00:00",
    ]);
  });
});

describe("gcloud auth cache freshness", () => {
  test("returns undefined when no cache files exist", async () => {
    const previous = Bun.env.CLOUDSDK_CONFIG;
    const configDir = await mkdtemp(path.join(tmpdir(), "gcloud-config-"));
    try {
      Bun.env.CLOUDSDK_CONFIG = configDir;
      await expect(googleAuthCacheAgeMs(new Date("2026-05-18T12:00:00Z"))).resolves.toBeUndefined();
    } finally {
      if (previous === undefined) delete Bun.env.CLOUDSDK_CONFIG;
      else Bun.env.CLOUDSDK_CONFIG = previous;
      await rm(configDir, { recursive: true, force: true });
    }
  });

  test("uses the newest gcloud credential cache file", async () => {
    const previous = Bun.env.CLOUDSDK_CONFIG;
    const configDir = await mkdtemp(path.join(tmpdir(), "gcloud-config-"));
    try {
      Bun.env.CLOUDSDK_CONFIG = configDir;
      const adc = path.join(configDir, "application_default_credentials.json");
      const credentials = path.join(configDir, "credentials.db");
      await writeFile(adc, "{}");
      await writeFile(credentials, "");
      await utimes(adc, new Date("2026-05-17T00:00:00Z"), new Date("2026-05-17T00:00:00Z"));
      await utimes(credentials, new Date("2026-05-18T06:00:00Z"), new Date("2026-05-18T06:00:00Z"));

      await expect(googleAuthCacheAgeMs(new Date("2026-05-18T12:00:00Z"))).resolves.toBe(6 * 60 * 60 * 1000);
    } finally {
      if (previous === undefined) delete Bun.env.CLOUDSDK_CONFIG;
      else Bun.env.CLOUDSDK_CONFIG = previous;
      await rm(configDir, { recursive: true, force: true });
    }
  });
});
