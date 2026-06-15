import path from "node:path";
import { stat } from "node:fs/promises";
import { homedir } from "node:os";
import type { ExportCheckScope, PizzaExportRow } from "./schema";

export interface LivePizzaFetchOptions {
  portBase?: number;
  glcliBin?: string;
  gcloudBin?: string;
  authMaxAgeMs?: number;
  onProgress?: (message: string) => void;
}

export type LivePizzaFetcher = ((scope: ExportCheckScope) => Promise<PizzaExportRow[]>) & {
  close: () => Promise<void>;
};

interface BifrostProxy {
  env: string;
  port: number;
  proc: Bun.Subprocess<"ignore", "pipe", "pipe">;
  stdout: Promise<string>;
  stderr: Promise<string>;
}

const DEFAULT_AUTH_MAX_AGE_MS = 12 * 60 * 60 * 1000;

export function createLivePizzaFetcher(options: LivePizzaFetchOptions = {}): LivePizzaFetcher {
  let nextPort = options.portBase ?? 29000 + Math.floor(Math.random() * 1000);
  const proxies = new Map<string, BifrostProxy>();
  let authReady: Promise<void> | undefined;
  const fetcher = (async (scope) => {
    if (!scope.env || !scope.org_id || !scope.audience_id) return [];
    authReady ??= ensureFreshGoogleAuth({
      gcloudBin: options.gcloudBin ?? Bun.env.GCLOUD_BIN ?? "gcloud",
      maxAgeMs: options.authMaxAgeMs ?? DEFAULT_AUTH_MAX_AGE_MS,
      ...(options.onProgress ? { onProgress: options.onProgress } : {}),
    });
    await authReady;
    let proxy = proxies.get(scope.env);
    if (!proxy) {
      nextPort += 1;
      proxy = await startBifrostProxy(scope.env, {
        port: nextPort,
        glcliBin: options.glcliBin ?? Bun.env.GLCLI_BIN ?? "glcli",
        ...(options.onProgress ? { onProgress: options.onProgress } : {}),
      });
      proxies.set(scope.env, proxy);
    }
    return fetchPizzaRowsViaProxy(scope, proxy, options.onProgress);
  }) as LivePizzaFetcher;
  fetcher.close = async () => {
    for (const proxy of proxies.values()) await stopBifrostProxy(proxy, options.onProgress);
    proxies.clear();
  };
  return fetcher;
}

async function ensureFreshGoogleAuth(options: {
  gcloudBin: string;
  maxAgeMs: number;
  onProgress?: (message: string) => void;
}): Promise<void> {
  const cache = await googleAuthCacheAgeMs(new Date());
  if (cache !== undefined && cache <= options.maxAgeMs) {
    options.onProgress?.(`gcloud auth: credentials cache is fresh (${formatDuration(cache)} old).`);
    return;
  }

  const reason = cache === undefined ? "credentials cache is missing" : `credentials cache is stale (${formatDuration(cache)} old)`;
  const command = [options.gcloudBin, "auth", "login", "--update-adc"];
  options.onProgress?.(`gcloud auth: ${reason}; running ${shellQuote(command)}.`);
  const proc = Bun.spawn(command, {
    stdin: "inherit",
    stdout: "inherit",
    stderr: "inherit",
  });
  const exitCode = await proc.exited;
  if (exitCode !== 0) throw new Error(`gcloud auth login --update-adc failed with exit code ${exitCode}`);
  options.onProgress?.("gcloud auth: login completed.");
}

export async function googleAuthCacheAgeMs(now: Date): Promise<number | undefined> {
  const files = googleAuthCacheFiles();
  const adcMtime = await fileMtimeMs(files[0]!);
  if (adcMtime === undefined) return undefined;
  const mtimes = await Promise.all(files.map(fileMtimeMs));
  const newest = mtimes.filter((mtime): mtime is number => mtime !== undefined).sort((a, b) => b - a)[0];
  return newest === undefined ? undefined : Math.max(0, now.getTime() - newest);
}

async function fileMtimeMs(file: string): Promise<number | undefined> {
  try {
    return (await stat(file)).mtimeMs;
  } catch (err) {
    if ((err as NodeJS.ErrnoException).code === "ENOENT") return undefined;
    throw err;
  }
}

function googleAuthCacheFiles(): string[] {
  const configDir = Bun.env.CLOUDSDK_CONFIG ?? path.join(homedir(), ".config", "gcloud");
  return [
    path.join(configDir, "application_default_credentials.json"),
    path.join(configDir, "credentials.db"),
    path.join(configDir, "access_tokens.db"),
  ];
}

async function startBifrostProxy(
  env: string,
  options: {
    port: number;
    glcliBin: string;
    onProgress?: (message: string) => void;
  },
): Promise<BifrostProxy> {
  const command = [
    options.glcliBin,
    "--env",
    env,
    "proxy",
    "--service",
    "bifrost",
    "--local-port",
    String(options.port),
  ];
  options.onProgress?.(`pizza: starting Bifrost proxy env=${env} port=${options.port}: ${shellQuote(command)}`);
  const proc = Bun.spawn(
    command,
    {
      stdout: "pipe",
      stderr: "pipe",
    },
  );

  const proxy: BifrostProxy = {
    env,
    port: options.port,
    proc,
    stdout: new Response(proc.stdout).text(),
    stderr: new Response(proc.stderr).text(),
  };
  await delay(3500);
  return proxy;
}

async function fetchPizzaRowsViaProxy(
  scope: ExportCheckScope,
  proxy: BifrostProxy,
  onProgress?: (message: string) => void,
): Promise<PizzaExportRow[]> {
  if (!scope.env || !scope.org_id || !scope.audience_id) return [];
  let lastError: unknown;
  for (let attempt = 0; attempt < 4; attempt++) {
    try {
      onProgress?.(`pizza: fetching /v1/exports env=${scope.env} org=${scope.org_id} audience=${scope.audience_id} attempt=${attempt + 1}.`);
      const response = await fetch(`http://127.0.0.1:${proxy.port}/v1/exports?environment=${encodeURIComponent(cloudForEnv(scope.env))}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          org_id: scope.org_id,
          internal_ids: [scope.audience_id],
          limit: 100,
          target_types: ["audience", "signal"],
        }),
        signal: AbortSignal.timeout(120_000),
      });
      if (!response.ok) {
        throw new Error(`pizza fetch failed (${response.status} ${response.statusText}): ${await response.text()}`);
      }
      const rows = rowsFromPizzaResponse(await response.json());
      onProgress?.(`pizza: received ${rows.length} row(s) for audience=${scope.audience_id}.`);
      return rows;
    } catch (err) {
      lastError = err;
      onProgress?.(`pizza: attempt ${attempt + 1} failed: ${err instanceof Error ? err.message : String(err)}.`);
      await delay(2000 * (attempt + 1));
    }
  }
  throw lastError instanceof Error ? lastError : new Error(String(lastError));
}

async function stopBifrostProxy(proxy: BifrostProxy, onProgress?: (message: string) => void): Promise<void> {
  onProgress?.(`pizza: stopping Bifrost proxy env=${proxy.env} port=${proxy.port}.`);
  proxy.proc.kill();
  await proxy.proc.exited.catch(() => undefined);
  const [stdout, stderr] = await Promise.all([proxy.stdout.catch(() => ""), proxy.stderr.catch(() => "")]);
  const exitCode = await proxy.proc.exited.catch(() => undefined);
  if (exitCode && exitCode !== 0 && exitCode !== 143 && exitCode !== 15) {
    throw new Error(`glcli proxy failed (${exitCode}): ${stderr || stdout}`);
  }
}

export function rowsFromPizzaResponse(payload: unknown): PizzaExportRow[] {
  const root = isRecord(payload) ? payload : {};
  const rows = arrayField(root, "export_metrics") ?? arrayField(root, "results") ?? (Array.isArray(payload) ? payload : []);
  return rows.map(normalizePizzaMetric).filter((row): row is PizzaExportRow => Boolean(row));
}

function normalizePizzaMetric(metric: unknown): PizzaExportRow | undefined {
  const value = isRecord(metric) ? metric : {};
  const info = isRecord(value.info) ? value.info : {};
  const export_run_id = stringField(value, "export_run_id") ?? stringField(info, "export_run_id");
  if (!export_run_id) return undefined;
  const audience_id = stringField(value, "audience_id", "internal_audience_id") ?? stringField(info, "internal_audience_id");
  const endpoint_id = stringField(value, "endpoint_id") ?? stringField(info, "endpoint_id");
  const destination_type = stringField(value, "destination_type") ?? destinationFromRun(export_run_id);
  const created_at = stringField(value, "created_at") ?? stringField(info, "created_at");
  const snapshotting_state = nullableStringField(value, "snapshotting_state");
  const export_state = nullableStringField(value, "export_state");
  return {
    export_run_id,
    ...(audience_id ? { audience_id } : {}),
    ...(endpoint_id ? { endpoint_id } : {}),
    ...(destination_type ? { destination_type } : {}),
    ...(created_at ? { created_at } : {}),
    ...(snapshotting_state !== undefined ? { snapshotting_state } : {}),
    ...(export_state !== undefined ? { export_state } : {}),
    failed_export_count: numberField(value, "failed_export_count") ?? null,
    raw: metric,
  };
}

function cloudForEnv(env: string): "aws" | "gcp" {
  return env.includes("aws") || env.startsWith("aws-") ? "aws" : "gcp";
}

function destinationFromRun(runId: string): string | undefined {
  return runId.match(/^\d+-(.+)_\d+-[a-z]+__/)?.[1];
}

function arrayField(obj: Record<string, unknown>, key: string): unknown[] | undefined {
  const value = obj[key];
  return Array.isArray(value) ? value : undefined;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function stringField(obj: Record<string, unknown>, ...keys: string[]): string | undefined {
  for (const key of keys) {
    const value = obj[key];
    if (typeof value === "string" && value.trim()) return value.trim();
    if (typeof value === "number") return String(value);
  }
  return undefined;
}

function nullableStringField(obj: Record<string, unknown>, key: string): string | null | undefined {
  const value = obj[key];
  if (value === null) return null;
  if (typeof value === "string") return value;
  return undefined;
}

function numberField(obj: Record<string, unknown>, key: string): number | undefined {
  const value = obj[key];
  if (typeof value === "number") return value;
  if (typeof value === "string" && value.trim() && !Number.isNaN(Number(value))) return Number(value);
  return undefined;
}

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function formatDuration(ms: number): string {
  const minutes = Math.round(ms / 60_000);
  if (minutes < 60) return `${minutes}m`;
  const hours = Math.round(minutes / 60);
  return `${hours}h`;
}

function shellQuote(args: string[]): string {
  return args.map((arg) => (/^[A-Za-z0-9_./:=@+-]+$/.test(arg) ? arg : `'${arg.replaceAll("'", "'\\''")}'`)).join(" ");
}
