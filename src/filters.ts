import type { AlertFact, AlertRef, GroupState, GroupStateName } from "./schema";

export interface AlertFilter {
  incidentId?: string;
  orgId?: string;
  audienceId?: string;
  destination?: string;
  state?: string;
  alertRefs?: AlertRef[];
  limit?: number;
}

export interface GroupFilter {
  id?: string;
  ids?: string[];
  state?: GroupStateName;
  tags?: string[];
  incidentId?: string;
}

export interface CommandFilters {
  alert: AlertFilter;
  group: GroupFilter;
}

const GROUP_STATES = new Set<GroupStateName>(["new", "open", "waiting", "monitoring", "resolved"]);

export function parseFilterValues(values: string[]): CommandFilters {
  const filters: CommandFilters = { alert: {}, group: {} };
  for (const value of values) {
    const inFilter = parseInFilter(value);
    if (inFilter) {
      const { key, rawValues } = inFilter;
      switch (key) {
        case "group.id":
          mergeValues(filters.group, "ids", parseList(rawValues), key);
          break;
        default:
          throw new Error(`Unsupported --filter in operator for key: ${key}`);
      }
      continue;
    }

    const separator = value.indexOf("=");
    if (separator < 1) throw new Error(`--filter must be key=value: ${value}`);
    const key = value.slice(0, separator).trim();
    const raw = value.slice(separator + 1).trim();
    if (!raw) throw new Error(`--filter ${key} must not be empty.`);

    switch (key) {
      case "alert.incident":
        setScalar(filters.alert, "incidentId", raw, key);
        break;
      case "alert.org":
        setScalar(filters.alert, "orgId", raw, key);
        break;
      case "alert.audience":
        setScalar(filters.alert, "audienceId", raw, key);
        break;
      case "alert.destination":
        setScalar(filters.alert, "destination", raw, key);
        break;
      case "alert.state":
        setScalar(filters.alert, "state", raw, key);
        break;
      case "group.id":
        setScalar(filters.group, "id", raw, key);
        break;
      case "group.state":
        if (!GROUP_STATES.has(raw as GroupStateName)) throw new Error(`Invalid group.state filter: ${raw}`);
        setScalar(filters.group, "state", raw as GroupStateName, key);
        break;
      case "group.tag":
        filters.group.tags = [...(filters.group.tags ?? []), raw];
        break;
      case "group.incident":
        setScalar(filters.group, "incidentId", raw, key);
        break;
      default:
        throw new Error(`Unknown --filter key: ${key}`);
    }
  }
  return filters;
}

export function mergeAlertFilter(left: AlertFilter, right: AlertFilter): AlertFilter {
  const merged: AlertFilter = { ...left };
  mergeScalar(merged, "incidentId", right.incidentId, "alert.incident");
  mergeScalar(merged, "orgId", right.orgId, "alert.org");
  mergeScalar(merged, "audienceId", right.audienceId, "alert.audience");
  mergeScalar(merged, "destination", right.destination, "alert.destination");
  mergeScalar(merged, "state", right.state, "alert.state");
  if (right.alertRefs) {
    merged.alertRefs = merged.alertRefs ? intersectAlertRefs(merged.alertRefs, right.alertRefs) : right.alertRefs;
  }
  mergeScalar(merged, "limit", right.limit, "alert.limit");
  return merged;
}

export function mergeGroupFilter(left: GroupFilter, right: GroupFilter): GroupFilter {
  const merged: GroupFilter = { ...left };
  mergeScalar(merged, "id", right.id, "group.id");
  if (right.ids) merged.ids = merged.ids ? intersectValues(merged.ids, right.ids) : right.ids;
  mergeScalar(merged, "state", right.state, "group.state");
  mergeScalar(merged, "incidentId", right.incidentId, "group.incident");
  if (right.tags) merged.tags = [...(merged.tags ?? []), ...right.tags];
  return merged;
}

export function filterAlertFacts(alerts: AlertFact[], filters: AlertFilter | undefined): AlertFact[] {
  if (!filters) return alerts;
  const matched = alerts.filter((alert) => matchesAlertFilter(alert, filters));
  return filters.limit ? matched.slice(0, filters.limit) : matched;
}

export function matchesAlertFilter(alert: AlertFact, filters: AlertFilter): boolean {
  const alertRefKeys = filters.alertRefs ? new Set(filters.alertRefs.map(refKey)) : undefined;
  if (alertRefKeys && !alertRefKeys.has(alertKey(alert))) return false;
  if (filters.incidentId && alert.incident_id !== filters.incidentId) return false;
  if (filters.orgId && alert.org_id !== filters.orgId && alert.org_id_numeric !== filters.orgId) return false;
  if (filters.audienceId && alert.audience_id !== filters.audienceId) return false;
  if (filters.destination && alert.destination_type !== filters.destination && alert.destination_product !== filters.destination) return false;
  if (filters.state) {
    const tuple = [alert.state_tuple?.snapshotting ?? "", alert.state_tuple?.export ?? ""].filter(Boolean).join("/");
    if (tuple !== filters.state && alert.state_tuple?.snapshotting !== filters.state && alert.state_tuple?.export !== filters.state) return false;
  }
  return true;
}

export function matchesGroupFilter(group: GroupState, filters: GroupFilter | undefined): boolean {
  if (!filters) return true;
  if (filters.id && group.group_id !== filters.id) return false;
  if (filters.ids && !filters.ids.includes(group.group_id)) return false;
  if (filters.state && group.state !== filters.state) return false;
  if (filters.incidentId && !group.incident_ids.includes(filters.incidentId)) return false;
  if (filters.tags && !filters.tags.every((tag) => group.tags.includes(tag))) return false;
  return true;
}

function setScalar<T extends object, K extends keyof T>(target: T, key: K, value: NonNullable<T[K]>, label: string): void {
  const current = target[key];
  if (current !== undefined && current !== value) throw new Error(`Conflicting --filter ${label} values: ${String(current)} and ${String(value)}`);
  target[key] = value;
}

function mergeScalar<T extends object, K extends keyof T>(target: T, key: K, value: T[K] | undefined, label: string): void {
  if (value === undefined) return;
  setScalar(target, key, value as NonNullable<T[K]>, label);
}

function mergeValues<T extends object, K extends keyof T>(target: T, key: K, values: string[], label: string): void {
  if (values.length === 0) throw new Error(`--filter ${label} in must include at least one value.`);
  const current = target[key] as string[] | undefined;
  target[key] = (current ? intersectValues(current, values) : values) as T[K];
}

function parseInFilter(value: string): { key: string; rawValues: string } | undefined {
  const match = value.match(/^(.+?)\s+in\s+(.+)$/);
  if (!match) return undefined;
  const key = match[1]?.trim();
  const rawValues = match[2]?.trim();
  if (!key || !rawValues) throw new Error(`--filter in must be key in value[,value...]: ${value}`);
  return { key, rawValues };
}

function parseList(raw: string): string[] {
  const values = raw
    .split(/[,\s]+/)
    .map((value) => value.trim())
    .filter(Boolean);
  return sortedUnique(values);
}

function intersectValues(left: string[], right: string[]): string[] {
  const rightValues = new Set(right);
  return left.filter((value) => rightValues.has(value));
}

function intersectAlertRefs(left: AlertRef[], right: AlertRef[]): AlertRef[] {
  const rightKeys = new Set(right.map(refKey));
  return left.filter((ref) => rightKeys.has(refKey(ref)));
}

function sortedUnique(values: string[]): string[] {
  return [...new Set(values)].sort();
}

function refKey(ref: AlertRef): string {
  return `${ref.incident_id}::${ref.alert_id}`;
}

function alertKey(alert: AlertFact): string {
  return `${alert.incident_id}::${alert.alert_id}`;
}
