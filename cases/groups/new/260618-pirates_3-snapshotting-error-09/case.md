<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# pirates_3 snapshotting-error

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `new`
Tags: `triage:needs_review`
Incidents: [Q3OJICG8DM3BS0](https://growthloop.pagerduty.com/incidents/Q3OJICG8DM3BS0)
Alerts: 1

## Current Summary

pirates (default): Exports for audience 1654 failed with states: <(snapshotting_error,no_batches)>

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `pirates_3`
- Audiences: `1654`
- Destinations: `dynamics`
- State tuples: `snapshotting_error/no_batches`
- Commands seen: `glcli --env pirates bifrost pizza --audience-id 1654 --org-id 3`

Representative alerts:
- Q3OJICG8DM3BS0/Q23YLLXAEWC2QI: 2026-06-18T07:30:08-07:00; pirates_3; audience 1654; dynamics; snapshotting_error/no_batches. pirates (default): Exports for audience 1654 failed with states: <(snapshotting_error,no_batches)>
  Runs: `1654-dynamics_874-scheduled__2026-06-18T12:00:00+00:00`, `1654-dynamics_874-scheduled__2026-06-18T13:00:00+00:00`, `1654-dynamics_874-scheduled__2026-06-18T14:00:00+00:00`

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
