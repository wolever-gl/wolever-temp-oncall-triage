<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# 378 snapshotting-error

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `waiting`
Tags: `triage:needs_review`, `waiting:source-schema`
Incidents: [Q1QD2CX8MRAYBW](https://growthloop.pagerduty.com/incidents/Q1QD2CX8MRAYBW)
Alerts: 2

## Current Summary

Waiting on source/schema remediation for Cincinnati Reds SignalRoute 891: latest Pizza run still fails snapshot_history_write_up with a non-retryable BigQuery column type mismatch (source tickets_status INT64 into snapshot history tickets_status STRING); no later healthy export exists.

## Alert Scope

- Alert facts: 2 imported, 2 linked to this group.
- Orgs: `378`
- Audiences: `891`
- Destinations: `dynamics_object`
- State tuples: `snapshotting_error/no_batches`
- Commands seen: `glcli --env prod bifrost pizza --audience-id 891 --org-id 378`

Representative alerts:
- Q1QD2CX8MRAYBW/Q3AS52WT001FD8: 2026-05-14T18:01:37-07:00; 378; audience 891. Cincinnati Reds (default) - SignalRoute 891: SignalRoute Export failure for 891 sent to client.
- Q1QD2CX8MRAYBW/Q08TXNT2TOYP3Q: 2026-05-15T08:09:23-07:00; 378; audience 891; dynamics_object; snapshotting_error/no_batches. Cincinnati Reds (default): Exports for signal 891 failed with states: <(snapshotting_error,no_batches)>
  Runs: `891-dynamics_object_891-scheduled__2026-05-15T12:00:00+00:00`, `891-dynamics_object_891-scheduled__2026-05-15T13:00:00+00:00`, `891-dynamics_object_891-scheduled__2026-05-15T14:00:00+00:00`

## Export Checks

- Checks: 2.
- States: `blocked`=2
- Blockers seen: `snapshotting_error_requires_review`

Check evidence:
- chk_q1qd2cx8mraybw_q08txnt2toyp3q (Q1QD2CX8MRAYBW/Q08TXNT2TOYP3Q): state=`blocked`.
  Scope: env=prod; org=378; audience=891; destination=dynamics_object.
  Checked runs: `891-dynamics_object_891-scheduled__2026-05-15T12:00:00+00:00`, `891-dynamics_object_891-scheduled__2026-05-15T13:00:00+00:00`, `891-dynamics_object_891-scheduled__2026-05-15T14:00:00+00:00`
  Command: `glcli --env prod bifrost pizza --audience-id 891 --org-id 378`
  Blockers: `snapshotting_error_requires_review`, `snapshotting_error_requires_review`, `snapshotting_error_requires_review`
  Run 891-dynamics_object_891-scheduled__2026-05-15T12:00:00+00:00: health=`blocked`; blockers=snapshotting_error_requires_review; created=2026-05-15T13:01:27.047005+00:00; snapshotting=snapshotting_error; export=no_batches; failed=0.
  Run 891-dynamics_object_891-scheduled__2026-05-15T13:00:00+00:00: health=`blocked`; blockers=snapshotting_error_requires_review; created=2026-05-15T14:02:02.411761+00:00; snapshotting=snapshotting_error; export=no_batches; failed=0.
  Run 891-dynamics_object_891-scheduled__2026-05-15T14:00:00+00:00: health=`blocked`; blockers=snapshotting_error_requires_review; created=2026-05-15T15:01:24.740215+00:00; snapshotting=snapshotting_error; export=no_batches; failed=0.
- chk_q1qd2cx8mraybw_q3as52wt001fd8 (Q1QD2CX8MRAYBW/Q3AS52WT001FD8): state=`blocked`.
  Scope: env=prod; org=378; audience=891.
  Command: `glcli --env prod bifrost pizza --audience-id 891 --org-id 378`
  Blockers: `snapshotting_error_requires_review`
  Run 891-dynamics_object_891-scheduled__2026-05-16T22:00:00+00:00: health=`blocked`; blockers=snapshotting_error_requires_review; created=2026-05-16T23:01:35.303004+00:00; snapshotting=snapshotting_error; export=no_batches; failed=0.

## Recent Evidence

- Fresh scoped logs for Cincinnati Reds SignalRoute 891 latest run 891-dynamics_object_891-scheduled__2026-05-16T22:00:00+00:00 show snapshot_history_write_up failed in Quervice/BigQuery: tickets_status from hall_of_fame_orders.status is INT64 but reds-wheelhouse-prod.flywheel_system.snapshotting_signal_891_snapshot_history.tickets_status is STRING. glerror marks category=validation, owner=system, retryable=false. No later healthy Pizza run exists; remediation needs source/schema or snapshot-history schema handling before this can recover.
  Source: `flywheel-prod-328213 snapshotting logs`; kind: `gcloud_logs`; captured: `2026-05-16T23:50:49.156Z`.
  Command: `PATH=/Users/wolever/.local/share/mise/installs/gcloud/562.0.0/bin:$PATH gcloud logging read 'jsonPayload.export_run_id_hash="33e3307850942af4a2496b3c3f5693d3" AND resource.labels.namespace_name="snapshotting-30755505"' --project=flywheel-prod-328213 --freshness=24h --limit=50`

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
