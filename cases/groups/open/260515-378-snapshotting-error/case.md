<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# 378 snapshotting-error

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `open`
Tags: `triage:needs_review`
Incidents: [Q1QD2CX8MRAYBW](https://growthloop.pagerduty.com/incidents/Q1QD2CX8MRAYBW)
Alerts: 1

## Current Summary

Cincinnati Reds (default): Exports for signal 891 failed with states: <(snapshotting_error,no_batches)>

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `378`
- Audiences: `891`
- Destinations: `dynamics_object`
- State tuples: `snapshotting_error/no_batches`
- Commands seen: `glcli --env prod bifrost pizza --audience-id 891 --org-id 378`

Representative alerts:
- Q1QD2CX8MRAYBW/Q08TXNT2TOYP3Q: 2026-05-15T08:09:23-07:00; 378; audience 891; dynamics_object; snapshotting_error/no_batches. Cincinnati Reds (default): Exports for signal 891 failed with states: <(snapshotting_error,no_batches)>
  Runs: `891-dynamics_object_891-scheduled__2026-05-15T12:00:00+00:00`, `891-dynamics_object_891-scheduled__2026-05-15T13:00:00+00:00`, `891-dynamics_object_891-scheduled__2026-05-15T14:00:00+00:00`

## Export Checks

- Checks: 1.
- States: `blocked`=1
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

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
