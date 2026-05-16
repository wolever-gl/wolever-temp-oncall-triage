import { describe, expect, test } from "bun:test";
import { mkdtemp, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";

const script = path.resolve(import.meta.dir, "260516-albertsons-zero-success-progress.ts");

describe("260516-albertsons-zero-success-progress tagger", () => {
  test("tags later successful export as recovered", async () => {
    const result = await runTagger({
      alert: zeroSuccessAlert("12742", "2026-05-13T09:32:35-07:00"),
      rows: [{
        "created at": "2026-05-13 16:34:21 UTC",
        id: "12742",
        "snapshot state": "snapshotting_finished",
        "export state": "export_finished",
        failures: 0,
        "export run id": "12742-big_query_4548-webapp__2026-05-13T16:17:21+00:00",
      }],
    });

    expect(result.decision).toBe("tag");
    expect(result.tags).toContain("resolved:export-healthy");
    expect(result.evidence[0].data.classification).toBe("zero-success-recovered");
  });

  test("tags processing export as monitoring", async () => {
    const result = await runTagger({
      alert: zeroSuccessAlert("12801", "2026-05-12T16:05:54-07:00"),
      rows: [{
        "created at": "2026-05-12 22:58:30 UTC",
        id: "12801",
        "snapshot state": "snapshotting_finished",
        "export state": "export_processing",
        failures: 0,
        "export run id": "12801-live_ramp_activation_4542-webapp__2026-05-12T22:25:38+00:00",
      }],
    });

    expect(result.decision).toBe("tag");
    expect(result.tags).toContain("monitoring:export-processing");
    expect(result.evidence[0].data.classification).toBe("zero-success-export-in-progress");
  });

  test("tags no-delta no-batches export as recovered", async () => {
    const result = await runTagger({
      alert: zeroSuccessAlert("10685", "2026-05-16T03:08:00-07:00"),
      rows: [{
        "created at": "2026-05-15 21:16:01 UTC",
        id: "10685",
        "snapshot state": "snapshotting_finished_no_deltas",
        "export state": "no_batches",
        failures: 0,
        "export run id": "10685-big_query_4623-webapp__2026-05-15T21:07:32+00:00",
      }],
    });

    expect(result.decision).toBe("tag");
    expect(result.tags).toContain("resolved:export-healthy");
    expect(result.evidence[0].data.classification).toBe("zero-success-recovered");
  });
});

function zeroSuccessAlert(audience_id: string, created_at: string) {
  return {
    incident_id: "QINC",
    alert_id: `Q${audience_id}`,
    created_at,
    org_id: "albertsons_6",
    audience_id,
    summary: `albertsons (Albertsons Media) - Audience ${audience_id}: 0 successfull_exports from pizza tracker found 10 minutes after new export`,
  };
}

async function runTagger(input: { alert: unknown; rows: unknown[] }): Promise<any> {
  const workspaceDir = await mkdtemp(path.join(tmpdir(), "zero-success-tagger-"));
  try {
    const alertPath = path.join(workspaceDir, "alert.json");
    await writeFile(alertPath, JSON.stringify(input.alert));
    const proc = Bun.spawn([process.execPath, script, "--alert", alertPath], {
      cwd: workspaceDir,
      env: {
        ...process.env,
        ZERO_SUCCESS_PIZZA_ROWS_JSON: JSON.stringify(input.rows),
      },
      stdout: "pipe",
      stderr: "pipe",
    });
    const [stdout, stderr, exitCode] = await Promise.all([
      new Response(proc.stdout).text(),
      new Response(proc.stderr).text(),
      proc.exited,
    ]);
    expect(stderr).toBe("");
    expect(exitCode).toBe(0);
    return JSON.parse(stdout);
  } finally {
    await rm(workspaceDir, { recursive: true, force: true });
  }
}
