export type GroupStateName = "open" | "waiting" | "monitoring" | "resolved";

export interface AlertFact {
  alert_id: string;
  incident_id: string;
  incident_url: string;
  created_at: string;
  summary: string;
  org_id?: string;
  org_id_numeric?: string;
  audience_id?: string;
  endpoint_id?: string;
  export_run_id?: string;
  export_run_hash?: string;
  service?: string;
  error_signature?: string;
  source_glcli?: string;
  raw?: unknown;
}

export interface IncidentRecord {
  incident_id: string;
  incident_url: string;
  imported_at: string;
  source: "pagerduty" | "fixture";
  alert_count: number;
}

export interface GroupState {
  group_id: string;
  state: GroupStateName;
  tags: string[];
  title: string;
  summary: string;
  deterministic_key: string;
  grouping_version: number;
  primary_runbook?: string;
  next_check_at?: string;
  next_action?: string;
  created_at: string;
  updated_at: string;
  alert_refs: AlertRef[];
  incident_ids: string[];
  related_group_ids: string[];
}

export interface AlertRef {
  incident_id: string;
  alert_id: string;
}

export interface EvidenceEvent {
  ts: string;
  kind: string;
  source: string;
  summary: string;
  data?: unknown;
}

export interface DecisionEvent {
  ts: string;
  actor: string;
  decision: string;
  rationale: string;
}

export interface ActionEvent {
  ts: string;
  actor: string;
  action: string;
  result: "proposed" | "skipped" | "performed" | "failed";
  summary: string;
  data?: unknown;
}

export interface LineageEvent {
  ts: string;
  actor: string;
  kind: "merge" | "split";
  related_group_id: string;
  summary: string;
  rationale: string;
  alert_ids?: string[];
}

export interface IndexGroup {
  group_id: string;
  state: GroupStateName;
  tags: string[];
  title: string;
  summary: string;
  next_action?: string;
  next_check_at?: string;
  incident_ids: string[];
  alert_count: number;
  path: string;
}

export interface WorkspaceIndex {
  generated_at: string;
  open_count: number;
  groups: IndexGroup[];
}
