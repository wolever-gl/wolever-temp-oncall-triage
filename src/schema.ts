export type GroupStateName = "new" | "open" | "waiting" | "monitoring" | "resolved";

export interface AlertFact {
  alert_id: string;
  incident_id: string;
  incident_url: string;
  created_at: string;
  summary: string;
  parser_version?: number;
  alert_status?: PagerDutyIncidentStatus;
  org_id?: string;
  org_slug?: string;
  org_id_numeric?: string;
  audience_kind?: "audience" | "signal" | "signal_route" | "unknown";
  audience_id?: string;
  endpoint_id?: string;
  export_run_id?: string;
  checked_export_run_ids?: string[];
  export_check_strategy?: "checked_export_run_ids" | "any_export_after_alert";
  parsed_run_ids?: ParsedRunId[];
  destination_type?: string;
  destination_product?: string;
  export_run_hash?: string;
  service?: string;
  state_tuple?: AlertStateTuple;
  error_signature?: string;
  source_glcli?: string;
  logs_url?: string;
  raw?: unknown;
}

export interface ParsedRunId {
  raw: string;
  audience_id?: string;
  destination_type?: string;
  endpoint_id?: string;
  trigger_type?: string;
  scheduled_at?: string;
  hash?: string;
}

export interface AlertStateTuple {
  snapshotting?: string;
  export?: string;
}

export type ExportCheckState = "open" | "monitoring" | "blocked" | "healthy_closed" | "not_applicable";

export interface ExportCheck {
  check_id: string;
  source: "pagerduty";
  incident_id: string;
  alert_id: string;
  state: ExportCheckState;
  scope: ExportCheckScope;
  scope_key: string;
  run_evaluations: ExportRunEvaluation[];
  blockers: string[];
  evidence_artifacts: string[];
  proposed_state?: ExportCheckState;
  next_check_at?: string;
  created_at: string;
  updated_at: string;
  closed_at?: string;
}

export interface ExportCheckScope {
  env?: string;
  org_id?: string;
  audience_id?: string;
  endpoint_id?: string;
  destination_type?: string;
  match_strategy?: "checked_export_run_ids" | "any_export_after_alert";
  alert_created_at?: string;
  checked_export_run_ids: string[];
  glcli?: string;
}

export interface ExportRunEvaluation {
  export_run_id: string;
  health: "healthy" | "monitoring" | "blocked" | "missing";
  match_basis: "checked_export_run_id" | "any_export_after_alert";
  blockers: string[];
  selected_row?: PizzaExportRow;
}

export interface PizzaExportRow {
  export_run_id: string;
  audience_id?: string;
  endpoint_id?: string;
  destination_type?: string;
  created_at?: string;
  snapshotting_state?: string | null;
  export_state?: string | null;
  failed_export_count?: number | null;
  raw?: unknown;
}

export interface IncidentRecord {
  incident_id: string;
  incident_url: string;
  imported_at: string;
  source: "pagerduty" | "fixture";
  alert_count: number;
  status: PagerDutyIncidentStatus;
  refreshed_at: string;
  resolved_at?: string;
}

export type PagerDutyIncidentStatus = "triggered" | "acknowledged" | "resolved" | "closed" | "unknown";

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

export type MatchRuleStatus = "active" | "redirect" | "ambiguous";

export interface MatchRule {
  match_key: string;
  status: MatchRuleStatus;
  target_group_id?: string;
  reason: "created" | "merged" | "split" | "migration_alias";
  created_at: string;
  created_by: string;
  rationale: string;
}

export interface AlertRef {
  incident_id: string;
  alert_id: string;
}

export type AlertTagDecision = "tag" | "skip" | "needs_evidence";
export type EvidenceConfidence = "low" | "medium" | "high";

export interface AlertAnnotation {
  ts: string;
  alert_ref: AlertRef;
  tags: string[];
  decision: AlertTagDecision;
  confidence?: EvidenceConfidence;
  summary: string;
  source: {
    kind: "tagger";
    run_id: string;
    script_sha256: string;
    script_path: string;
  };
  evidence?: TaggerEvidenceItem[];
}

export interface TaggerEvidenceItem {
  kind: string;
  matched: boolean;
  summary: string;
  source?: string;
  query?: string;
  data?: unknown;
}

export interface TaggerResult {
  decision: AlertTagDecision;
  tags?: string[];
  confidence?: EvidenceConfidence;
  summary: string;
  evidence?: TaggerEvidenceItem[];
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

export interface IndexAlertFact {
  incident_id: string;
  alert_id: string;
  created_at: string;
  summary: string;
  org_id?: string;
  audience_id?: string;
  destination_type?: string;
  destination_product?: string;
  endpoint_id?: string;
  state_tuple?: AlertStateTuple;
  checked_export_run_ids?: string[];
  export_check_strategy?: "checked_export_run_ids" | "any_export_after_alert";
}

export interface WorkspaceIndex {
  generated_at: string;
  open_count: number;
  groups: IndexGroup[];
  alert_count?: number;
}
