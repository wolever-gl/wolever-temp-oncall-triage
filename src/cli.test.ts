import { describe, expect, test } from "bun:test";
import path from "node:path";

const repoRoot = path.resolve(import.meta.dir, "..");

describe("cli selector aliases", () => {
  test("alerts rejects removed alert selector aliases", () => {
    const result = runCli(["alerts", "cases", "--org", "acme_123"]);

    expect(result.exitCode).toBe(1);
    expect(result.stderr).toContain("Removed selector alias --org");
    expect(result.stderr).toContain("Use --filter key=value instead");
  });

  test("tag rejects removed alert selector aliases", () => {
    const result = runCli(["tag", "cases", "--script", "./tagger.ts", "--incident", "Q123"]);

    expect(result.exitCode).toBe(1);
    expect(result.stderr).toContain("Removed selector alias --incident");
  });

  test("check-exports rejects removed alert and group selector aliases", () => {
    const result = runCli(["check-exports", "cases", "--group", "g1", "--destination", "live-ramp"]);

    expect(result.exitCode).toBe(1);
    expect(result.stderr).toContain("Removed selector aliases --destination, --group");
  });

  test("preflight rejects removed group selector aliases", () => {
    const result = runCli(["preflight", "cases", "--state", "new"]);

    expect(result.exitCode).toBe(1);
    expect(result.stderr).toContain("Removed selector alias --state");
  });
});

function runCli(args: string[]): { exitCode: number; stdout: string; stderr: string } {
  const result = Bun.spawnSync({
    cmd: ["bun", "run", "src/cli.ts", ...args],
    cwd: repoRoot,
    stdout: "pipe",
    stderr: "pipe",
  });
  return {
    exitCode: result.exitCode,
    stdout: new TextDecoder().decode(result.stdout),
    stderr: new TextDecoder().decode(result.stderr),
  };
}
