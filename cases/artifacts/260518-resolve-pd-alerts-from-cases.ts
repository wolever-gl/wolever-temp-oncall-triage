import { readdir, readFile } from "node:fs/promises";
import path from "node:path";

type GroupState = {
  group_id: string;
  state: string;
  alert_refs?: Array<{ incident_id: string; alert_id: string }>;
};

type PdAlert = {
  id: string;
  status?: string;
  summary?: string;
};

const workspace = process.argv[2] ?? "cases";
const apply = process.argv.includes("--apply");
const fromArg = process.argv.find((arg) => arg.startsWith("--from="));
const from = fromArg?.slice("--from=".length) ?? "david.wolever@growthloop.com";

const token =
  (await Bun.secrets.get({ service: "gaia-skill-pagerduty", name: "api-token" })) ??
  (await Bun.secrets.get({ service: "gaia-skill-pagerduty", name: "token" })) ??
  Bun.env.PAGERDUTY_API_TOKEN;

if (!token) throw new Error("Missing PagerDuty API token.");

const groups = await loadGroups(workspace);
const nonResolvedRefs = new Set<string>();
const resolvedRefs = new Map<string, { incident_id: string; alert_id: string; groups: string[] }>();

for (const group of groups) {
  for (const ref of group.alert_refs ?? []) {
    const key = refKey(ref);
    if (group.state === "resolved") {
      const existing = resolvedRefs.get(key) ?? { ...ref, groups: [] };
      existing.groups.push(group.group_id);
      resolvedRefs.set(key, existing);
    } else {
      nonResolvedRefs.add(key);
    }
  }
}

const candidates = [...resolvedRefs.values()].filter((ref) => !nonResolvedRefs.has(refKey(ref)));
const candidatesByIncident = Map.groupBy(candidates, (ref) => ref.incident_id);
const liveCandidates: Array<{ incident_id: string; alert_id: string; status: string; groups: string[] }> = [];
const skippedResolved: Array<{ incident_id: string; alert_id: string; status: string }> = [];
const missing: Array<{ incident_id: string; alert_id: string }> = [];

for (const [incidentId, refs] of candidatesByIncident) {
  const alerts = await fetchIncidentAlerts(incidentId);
  const alertsById = new Map(alerts.map((alert) => [alert.id, alert]));
  for (const ref of refs) {
    const alert = alertsById.get(ref.alert_id);
    if (!alert) {
      missing.push(ref);
      continue;
    }
    const status = alert.status ?? "unknown";
    if (status === "resolved") {
      skippedResolved.push({ ...ref, status });
      continue;
    }
    liveCandidates.push({ ...ref, status });
  }
}

console.log(`Resolved-only case refs: ${candidates.length}`);
console.log(`Already resolved in PagerDuty: ${skippedResolved.length}`);
console.log(`Missing from PagerDuty incident alert lists: ${missing.length}`);
console.log(`Will resolve in PagerDuty: ${liveCandidates.length}`);

for (const [incidentId, refs] of Map.groupBy(liveCandidates, (ref) => ref.incident_id)) {
  const statuses = refs.map((ref) => `${ref.alert_id}:${ref.status}`).join(", ");
  console.log(`${apply ? "Resolving" : "Dry-run"} ${incidentId}: ${refs.length} alert(s): ${statuses}`);
  if (apply) await resolveIncidentAlerts(incidentId, refs.map((ref) => ref.alert_id));
}

async function loadGroups(root: string): Promise<GroupState[]> {
  const states = ["new", "open", "monitoring", "waiting", "resolved"];
  const loaded: GroupState[] = [];
  for (const state of states) {
    const dir = path.join(root, "groups", state);
    let entries: string[] = [];
    try {
      entries = await readdir(dir);
    } catch {
      continue;
    }
    for (const entry of entries) {
      const statePath = path.join(dir, entry, "state.json");
      try {
        loaded.push(JSON.parse(await readFile(statePath, "utf8")) as GroupState);
      } catch {
        // Ignore non-case entries.
      }
    }
  }
  return loaded;
}

async function fetchIncidentAlerts(incidentId: string): Promise<PdAlert[]> {
  const alerts: PdAlert[] = [];
  for (let offset = 0; ; ) {
    const resp = await pdFetch(`/incidents/${incidentId}/alerts?limit=100&offset=${offset}`, { method: "GET" });
    const payload = await resp.json() as { alerts?: PdAlert[]; more?: boolean; limit?: number; offset?: number };
    alerts.push(...(payload.alerts ?? []));
    if (!payload.more) break;
    offset = (payload.offset ?? offset) + (payload.limit ?? 100);
  }
  return alerts;
}

async function resolveIncidentAlerts(incidentId: string, alertIds: string[]): Promise<void> {
  const resp = await pdFetch(`/incidents/${incidentId}/alerts`, {
    method: "PUT",
    body: JSON.stringify({
      alerts: alertIds.map((id) => ({ id, type: "alert", status: "resolved" })),
    }),
  });
  if (!resp.ok) throw new Error(`PagerDuty update failed for ${incidentId}: ${resp.status} ${resp.statusText} ${await resp.text()}`);
}

async function pdFetch(pathname: string, init: RequestInit): Promise<Response> {
  const resp = await fetch(`https://api.pagerduty.com${pathname}`, {
    ...init,
    headers: {
      Accept: "application/vnd.pagerduty+json;version=2",
      "Content-Type": "application/json",
      Authorization: `Token token=${token}`,
      From: from,
      ...(init.headers ?? {}),
    },
  });
  if (!resp.ok && init.method === "GET") {
    throw new Error(`PagerDuty fetch failed ${pathname}: ${resp.status} ${resp.statusText} ${await resp.text()}`);
  }
  return resp;
}

function refKey(ref: { incident_id: string; alert_id: string }): string {
  return `${ref.incident_id}/${ref.alert_id}`;
}
