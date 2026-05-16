import { describe, expect, test } from "bun:test";
import { mkdir, mkdtemp, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";

const script = path.resolve(import.meta.dir, "260516-albertsons-liveramp-progress.ts");

describe("260516-albertsons-liveramp-progress tagger", () => {
  test("tags an export failure followed by a later healthy run as recovered", async () => {
    const workspaceDir = await mkdtemp(path.join(tmpdir(), "oncall-tagger-"));
    try {
      await writeAlertAndCheck(workspaceDir, {
        incident_id: "QINC",
        alert_id: "QRECOVERED",
        audience_id: "12632",
      }, {
        state: "blocked",
        updated_at: "2026-05-16T00:00:00Z",
        blockers: ["export_error"],
        run_evaluations: [
          {
            export_run_id: "12632-live_ramp_activation_4405-webapp__2026-05-04T18:34:33+00:00",
            health: "blocked",
            blockers: ["export_error", "failed_export_count"],
            selected_row: {
              export_state: "export_error",
              snapshotting_state: "snapshotting_finished",
              failed_export_count: 10,
              created_at: "2026-05-04T18:39:09Z",
            },
          },
          {
            export_run_id: "12632-live_ramp_activation_4405-scheduled__2026-05-11T00:00:00+00:00",
            health: "healthy",
            blockers: [],
            selected_row: {
              export_state: "export_finished",
              snapshotting_state: "snapshotting_finished",
              failed_export_count: 0,
              created_at: "2026-05-11T02:08:19Z",
            },
          },
        ],
      });

      const result = await runTagger(workspaceDir);

      expect(result.decision).toBe("tag");
      expect(result.tags).toContain("evidence:albertsons-liveramp-recovered");
      expect(result.tags).toContain("resolved:later-export-succeeded");
      expect(result.evidence?.[0]?.data?.classification).toBe("recovered-after-export-failure");
    } finally {
      await rm(workspaceDir, { recursive: true, force: true });
    }
  });

  test("tags missing-table snapshotting failures separately from export recovery", async () => {
    const workspaceDir = await mkdtemp(path.join(tmpdir(), "oncall-tagger-"));
    try {
      await writeAlertAndCheck(workspaceDir, {
        incident_id: "QINC",
        alert_id: "QSCHEMA",
        audience_id: "10749",
      }, {
        state: "blocked",
        updated_at: "2026-05-16T00:00:00Z",
        blockers: ["snapshotting_error_requires_review"],
        run_evaluations: [
          {
            export_run_id: "10749-live_ramp_activation_2412-scheduled__2026-05-05T00:00:00+00:00",
            health: "blocked",
            blockers: ["snapshotting_error_requires_review"],
            selected_row: {
              export_state: "no_batches",
              snapshotting_state: "snapshotting_error",
              failed_export_count: 0,
              created_at: "2026-05-05T06:16:10Z",
              raw: {
                failure_reason: "missing_table_field",
              },
            },
          },
        ],
      });

      const result = await runTagger(workspaceDir);

      expect(result.decision).toBe("tag");
      expect(result.tags).toContain("evidence:snapshotting-schema-error");
      expect(result.evidence?.[0]?.data?.classification).toBe("snapshotting-schema-error");
    } finally {
      await rm(workspaceDir, { recursive: true, force: true });
    }
  });
});

async function writeAlertAndCheck(workspaceDir: string, alert: { incident_id: string; alert_id: string; audience_id: string }, check: unknown): Promise<void> {
  const checkId = `chk_${slug(`${alert.incident_id}_${alert.alert_id}`)}`;
  await mkdir(path.join(workspaceDir, "cases", "checks", checkId), { recursive: true });
  await writeFile(path.join(workspaceDir, "alert.json"), JSON.stringify(alert));
  await writeFile(path.join(workspaceDir, "cases", "checks", checkId, "check.json"), JSON.stringify(check));
}

async function runTagger(workspaceDir: string): Promise<{ decision: string; tags?: string[]; summary: string; evidence?: Array<{ data?: { classification?: string } }> }> {
  const proc = Bun.spawn([process.execPath, script, "--alert", path.join(workspaceDir, "alert.json")], {
    cwd: workspaceDir,
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
  const parsed = JSON.parse(stdout);
  expect(parsed.summary).toContain("Audience");
  return parsed;
}

function slug(input: string): string {
  return input.toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_+|_+$/g, "").slice(0, 96) || "unknown";
}
