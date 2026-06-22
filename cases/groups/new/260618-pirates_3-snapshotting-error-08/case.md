<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# pirates_3 snapshotting-error

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `new`
Tags: `triage:needs_review`
Incidents: [Q2ZGP954MEDFXH](https://growthloop.pagerduty.com/incidents/Q2ZGP954MEDFXH)
Alerts: 1

## Current Summary

pirates (default): Exports for signal 20 failed with states: <(snapshotting_error,no_batches)>

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `pirates_3`
- Audiences: `20`
- Destinations: `dynamics_object`
- State tuples: `snapshotting_error/no_batches`
- Commands seen: `glcli --env pirates bifrost pizza --audience-id 20 --org-id 3`

Representative alerts:
- Q2ZGP954MEDFXH/Q1RVSUJX0PP6WC: 2026-06-18T07:30:08-07:00; pirates_3; audience 20; dynamics_object; snapshotting_error/no_batches. pirates (default): Exports for signal 20 failed with states: <(snapshotting_error,no_batches)>
  Runs: `20-dynamics_object_20-scheduled__2026-06-18T11:00:00+00:00`, `20-dynamics_object_20-scheduled__2026-06-18T12:00:00+00:00`, `20-dynamics_object_20-scheduled__2026-06-18T13:00:00+00:00`

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
