<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# royals_4 snapshotting-error

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `new`
Tags: `triage:needs_review`
Incidents: [Q0COH0SL8SQ39V](https://growthloop.pagerduty.com/incidents/Q0COH0SL8SQ39V)
Alerts: 1

## Current Summary

royals (default): Exports for audience 1639 failed with states: <(snapshotting_error,no_batches)>

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `royals_4`
- Audiences: `1639`
- Destinations: `iterable`
- State tuples: `snapshotting_error/no_batches`
- Commands seen: `glcli --env royals bifrost pizza --audience-id 1639 --org-id 4`

Representative alerts:
- Q0COH0SL8SQ39V/Q2EXVB188F92Q4: 2026-06-18T07:30:02-07:00; royals_4; audience 1639; iterable; snapshotting_error/no_batches. royals (default): Exports for audience 1639 failed with states: <(snapshotting_error,no_batches)>
  Runs: `1639-iterable_1385-scheduled__2026-06-18T14:00:00+00:00`

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
