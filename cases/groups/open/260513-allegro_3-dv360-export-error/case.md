<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# allegro_3 dv360 export-error

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `open`
Tags: `triage:needs_review`, `triage:blocked-env-unavailable`
Incidents: [Q0UU3VAZ2I5R5H](https://growthloop.pagerduty.com/incidents/Q0UU3VAZ2I5R5H)
Alerts: 1

## Current Summary

Triage preflight attempted, but Allegro export checks were skipped because this laptop cannot access the Allegro Bifrost proxy. Manual triage needs an environment with Allegro access or non-Pizza evidence.

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `allegro_3`
- Audiences: `1266`
- Destinations: `dv360`
- State tuples: `snapshotting_finished/export_error`
- Commands seen: `glcli --env allegro bifrost pizza --audience-id 1266 --org-id 3`

Representative alerts:
- Q0UU3VAZ2I5R5H/Q3RAMU5DKK9FQW: 2026-05-13T07:33:18-07:00; allegro_3; audience 1266; dv360; snapshotting_finished/export_error. allegro (Marketing): Exports for audience 1266 failed with states: <(snapshotting_finished,export_error)>
  Runs: `1266-dv360_1669-scheduled__2026-05-13T00:00:00+00:00`

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
