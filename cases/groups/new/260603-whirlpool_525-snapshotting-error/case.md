<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# whirlpool_525 snapshotting-error

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `new`
Tags: `triage:needs_review`
Incidents: [Q1WT0Y2J3SAWEC](https://growthloop.pagerduty.com/incidents/Q1WT0Y2J3SAWEC)
Alerts: 1

## Current Summary

Whirlpool (KASA Prod): Exports for audience 36072 failed with states: <(snapshotting_error,no_batches)>

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `whirlpool_525`
- Audiences: `36072`
- Destinations: `live_ramp_sftp`
- State tuples: `snapshotting_error/no_batches`
- Commands seen: `glcli --env prod bifrost pizza --audience-id 36072 --org-id 525`

Representative alerts:
- Q1WT0Y2J3SAWEC/Q1V8NT43KS99Q6: 2026-06-03T07:57:39-07:00; whirlpool_525; audience 36072; live_ramp_sftp; snapshotting_error/no_batches. Whirlpool (KASA Prod): Exports for audience 36072 failed with states: <(snapshotting_error,no_batches)>
  Runs: `36072-live_ramp_sftp_22011-scheduled__2026-05-26T00:00:00+00:00`

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
