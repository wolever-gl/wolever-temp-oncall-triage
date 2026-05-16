<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# allegro_3 dv360 export-error

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `new`
Tags: `triage:needs_review`
Incidents: [Q2KT0WUDEVL42Q](https://growthloop.pagerduty.com/incidents/Q2KT0WUDEVL42Q)
Alerts: 1

## Current Summary

allegro (Marketing): Exports for audience 1277 failed with states: <(snapshotting_finished,export_error)>

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `allegro_3`
- Audiences: `1277`
- Destinations: `dv360`
- State tuples: `snapshotting_finished/export_error`
- Commands seen: `glcli --env allegro bifrost pizza --audience-id 1277 --org-id 3`

Representative alerts:
- Q2KT0WUDEVL42Q/Q005363Z9SLJJ7: 2026-05-14T07:33:17-07:00; allegro_3; audience 1277; dv360; snapshotting_finished/export_error. allegro (Marketing): Exports for audience 1277 failed with states: <(snapshotting_finished,export_error)>
  Runs: `1277-dv360_1696-webapp__2026-05-13T08:50:27+00:00`

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
