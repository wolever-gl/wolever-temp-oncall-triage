<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# trumanshow_336 no-batches

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `new`
Tags: `triage:needs_review`
Incidents: [Q34AH3IU2OMFFB](https://growthloop.pagerduty.com/incidents/Q34AH3IU2OMFFB)
Alerts: 1

## Current Summary

trumanshow (Retail & CPG): Exports for audience 38604 failed with states: <(snapshotting_finished,no_batches)>

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `trumanshow_336`
- Audiences: `38604`
- Destinations: `personalization_api`
- State tuples: `snapshotting_finished/no_batches`
- Commands seen: `glcli --env prod bifrost pizza --audience-id 38604 --org-id 336`

Representative alerts:
- Q34AH3IU2OMFFB/Q37PU7V8TBBPFS: 2026-06-22T07:54:02-07:00; trumanshow_336; audience 38604; personalization_api; snapshotting_finished/no_batches. trumanshow (Retail & CPG): Exports for audience 38604 failed with states: <(snapshotting_finished,no_batches)>
  Runs: `38604-personalization_api_22808-webapp__2026-06-19T17:35:08+00:00`

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
