import { describe, expect, test } from "bun:test";
import { mkdir, mkdtemp, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";

const script = path.resolve(import.meta.dir, "client-source-schema-missing.ts");

describe("client-source-schema-missing tagger", () => {
  test("tags snapshotting failures caused by a missing source schema field", async () => {
    const workspaceDir = await mkdtemp(path.join(tmpdir(), "oncall-schema-tagger-"));
    try {
      await writeAlertAndCheck(workspaceDir, {
        incident_id: "QINC",
        alert_id: "QSCHEMA",
        audience_id: "36168",
        org_id: "gopuff_544",
        destination_type: "facebook",
        state_tuple: {
          snapshotting: "snapshotting_error",
          export: "no_batches",
        },
        checked_export_run_ids: ["36168-facebook_22063-scheduled__2026-05-15T00:00:00+00:00"],
      }, {
        state: "blocked",
        updated_at: "2026-05-16T00:00:00Z",
        blockers: ["snapshotting_error_requires_review"],
        run_evaluations: [
          {
            export_run_id: "36168-facebook_22063-scheduled__2026-05-15T00:00:00+00:00",
            health: "blocked",
            blockers: ["snapshotting_error_requires_review"],
            selected_row: {
              export_state: "no_batches",
              snapshotting_state: "snapshotting_error",
              failed_export_count: 0,
              created_at: "2026-05-15T00:16:05Z",
              raw: {
                failure_reason: "Snapshotting failed while running pre_snapshotting_check: Requested field was not found in the source schema",
                glerror: {
                  resources: {
                    warehouse_column: ["CLASS"],
                    report_name: ["pre_snapshotting_check"],
                  },
                },
              },
            },
          },
        ],
      });

      const result = await runTagger(workspaceDir);

      expect(result.decision).toBe("tag");
      expect(result.confidence).toBe("high");
      expect(result.tags).toContain("evidence:client-source-schema-missing");
      expect(result.tags).toContain("triage:client_schema_missing");
      expect(result.evidence?.[0]?.data?.classification).toBe("client-source-schema-missing");
      expect(result.evidence?.[0]?.data?.missing_columns).toEqual(["CLASS"]);
      expect(result.evidence?.[0]?.data?.report_names).toEqual(["pre_snapshotting_check"]);
    } finally {
      await rm(workspaceDir, { recursive: true, force: true });
    }
  });

  test("does not tag generic snapshotting errors without source-schema evidence", async () => {
    const workspaceDir = await mkdtemp(path.join(tmpdir(), "oncall-schema-tagger-"));
    try {
      await writeAlertAndCheck(workspaceDir, {
        incident_id: "QINC",
        alert_id: "QGENERIC",
        audience_id: "123",
        state_tuple: {
          snapshotting: "snapshotting_error",
          export: "no_batches",
        },
      }, {
        state: "blocked",
        updated_at: "2026-05-16T00:00:00Z",
        blockers: ["snapshotting_error_requires_review"],
        run_evaluations: [
          {
            export_run_id: "123-facebook_1-scheduled__2026-05-15T00:00:00+00:00",
            health: "blocked",
            blockers: ["snapshotting_error_requires_review"],
            selected_row: {
              export_state: "no_batches",
              snapshotting_state: "snapshotting_error",
              failed_export_count: 0,
              created_at: "2026-05-15T00:16:05Z",
              raw: {
                failure_reason: "snapshotting worker failed unexpectedly",
              },
            },
          },
        ],
      });

      const result = await runTagger(workspaceDir);

      expect(result.decision).toBe("needs_evidence");
      expect(result.summary).toContain("does not prove a missing source-schema field");
    } finally {
      await rm(workspaceDir, { recursive: true, force: true });
    }
  });
});

async function writeAlertAndCheck(workspaceDir: string, alert: { incident_id: string; alert_id: string }, check: unknown): Promise<void> {
  const checkId = `chk_${slug(`${alert.incident_id}_${alert.alert_id}`)}`;
  await mkdir(path.join(workspaceDir, "cases", "checks", checkId), { recursive: true });
  await writeFile(path.join(workspaceDir, "alert.json"), JSON.stringify(alert));
  await writeFile(path.join(workspaceDir, "cases", "checks", checkId, "check.json"), JSON.stringify(check));
}

async function runTagger(workspaceDir: string): Promise<{
  decision: string;
  confidence?: string;
  tags?: string[];
  summary: string;
  evidence?: Array<{ data?: { classification?: string; missing_columns?: string[]; report_names?: string[] } }>;
}> {
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
  return JSON.parse(stdout);
}

function slug(input: string): string {
  return input.toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_+|_+$/g, "").slice(0, 96) || "unknown";
}
