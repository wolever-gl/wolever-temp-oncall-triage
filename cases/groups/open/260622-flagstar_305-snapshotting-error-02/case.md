<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# flagstar_305 snapshotting-error

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `open`
Tags: `triage:needs_review`
Incidents: [Q3I7WFMCCHK300](https://growthloop.pagerduty.com/incidents/Q3I7WFMCCHK300)
Alerts: 1

## Current Summary

flagstar (default): Exports for audience 31062 failed with states: <(snapshotting_error,no_batches)>

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `flagstar_305`
- Audiences: `31062`
- Destinations: `marketing_cloud`
- State tuples: `snapshotting_error/no_batches`
- Commands seen: `glcli --env prod bifrost pizza --audience-id 31062 --org-id 305`

Representative alerts:
- Q3I7WFMCCHK300/Q0HGP71YKK2DEV: 2026-06-22T07:54:30-07:00; flagstar_305; audience 31062; marketing_cloud; snapshotting_error/no_batches. flagstar (default): Exports for audience 31062 failed with states: <(snapshotting_error,no_batches)>
  Runs: `31062-marketing_cloud_18833-scheduled__2026-06-22T00:00:00+00:00`

## Export Checks

- Checks: 1.
- States: `blocked`=1
- Blockers seen: `snapshotting_error_requires_review`

Check evidence:
- chk_q3i7wfmcchk300_q0hgp71ykk2dev (Q3I7WFMCCHK300/Q0HGP71YKK2DEV): state=`blocked`.
  Scope: env=prod; org=305; audience=31062; destination=marketing_cloud.
  Checked runs: `31062-marketing_cloud_18833-scheduled__2026-06-22T00:00:00+00:00`
  Command: `glcli --env prod bifrost pizza --audience-id 31062 --org-id 305`
  Blockers: `snapshotting_error_requires_review`
  Run 31062-marketing_cloud_18833-scheduled__2026-06-22T00:00:00+00:00: health=`blocked`; blockers=snapshotting_error_requires_review; created=2026-06-22T00:16:29.229904+00:00; snapshotting=snapshotting_error; export=no_batches; failed=0.

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
