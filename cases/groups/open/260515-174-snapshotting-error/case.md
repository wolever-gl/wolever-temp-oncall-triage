<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# 174 snapshotting-error

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `open`
Tags: `triage:needs_review`, `resolved:recovered`, `triage:needs_delta_recovery_evidence`
Incidents: [Q20XI8KK8YWADB](https://growthloop.pagerduty.com/incidents/Q20XI8KK8YWADB)
Alerts: 1

## Current Summary

Reopened: do not resolve until snapshotting-delta-recovery is satisfied. Later Pizza success exists, but the case still needs scoped stage evidence proving no stranded delta files or missed delta window from the failed scheduled runs.

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `174`
- Audiences: `23746`
- Destinations: `marketing_cloud`
- State tuples: `snapshotting_error/no_batches`
- Commands seen: `glcli --env prod bifrost pizza --audience-id 23746 --org-id 174`

Representative alerts:
- Q20XI8KK8YWADB/Q34FUGOIWL0YYV: 2026-05-15T08:24:59-07:00; 174; audience 23746; marketing_cloud; snapshotting_error/no_batches. NJ Devils (default): Exports for audience 23746 failed with states: <(snapshotting_error,no_batches)>
  Runs: `23746-marketing_cloud_14765-scheduled__2026-05-06T00:00:00+00:00`, `23746-marketing_cloud_14765-scheduled__2026-05-13T00:00:00+00:00`

## Export Checks

- Checks: 1.
- States: `blocked`=1
- Blockers seen: `snapshotting_error_requires_review`

Check evidence:
- chk_q20xi8kk8ywadb_q34fugoiwl0yyv (Q20XI8KK8YWADB/Q34FUGOIWL0YYV): state=`blocked`.
  Scope: env=prod; org=174; audience=23746; destination=marketing_cloud.
  Checked runs: `23746-marketing_cloud_14765-scheduled__2026-05-06T00:00:00+00:00`, `23746-marketing_cloud_14765-scheduled__2026-05-13T00:00:00+00:00`
  Command: `glcli --env prod bifrost pizza --audience-id 23746 --org-id 174`
  Blockers: `snapshotting_error_requires_review`, `snapshotting_error_requires_review`
  Run 23746-marketing_cloud_14765-scheduled__2026-05-06T00:00:00+00:00: health=`blocked`; blockers=snapshotting_error_requires_review; created=2026-05-06T00:16:39.410494+00:00; snapshotting=snapshotting_error; export=no_batches; failed=0.
  Run 23746-marketing_cloud_14765-scheduled__2026-05-13T00:00:00+00:00: health=`blocked`; blockers=snapshotting_error_requires_review; created=2026-05-13T00:16:05.954540+00:00; snapshotting=snapshotting_error; export=no_batches; failed=0.

## Recent Evidence

- Reopened: previous closure did not satisfy snapshotting-delta-recovery. Later Pizza success alone is insufficient for a delta export. Need scoped logs for failed scheduled runs and later same-scope run proving whether snapshot_history_write_up, metadata_write_up, delta_history_write_up, unload, and unloaded_deltas_write completed, and whether any failed-run deltas/files were stranded or later selected/marked.
  Source: `runbook review`; kind: `triage`; captured: `2026-05-17T16:37:00.561Z`.
- Audience 23746 recovered after the alert-scoped scheduled snapshotting errors. Pizza shows a later 2026-05-15 15:04:39 UTC webapp run, 23746-marketing_cloud_14765-webapp__2026-05-15T14:59:02+00:00, with snapshotting_finished/export_finished, 184,416 total rows, 41,272 adds, 142,279 removes, 857 rejects, and 8 failures. This confirms snapshotting and export both completed after the 2026-05-13 scheduled snapshotting_error/no_batches alert.
  Source: `glcli bifrost pizza`; kind: `pizza`; captured: `2026-05-17T16:30:05.536Z`.
  Command: `PATH=/Users/wolever/.local/share/mise/installs/gcloud/562.0.0/bin:$PATH glcli --env prod bifrost pizza --audience-id 23746 --org-id 174 --format json`

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
