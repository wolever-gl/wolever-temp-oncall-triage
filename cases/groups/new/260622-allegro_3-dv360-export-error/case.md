<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# allegro_3 dv360 export-error

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `new`
Tags: `triage:needs_review`
Incidents: [Q1F0Z4E82XDV0A](https://growthloop.pagerduty.com/incidents/Q1F0Z4E82XDV0A)
Alerts: 1

## Current Summary

allegro (Marketing): Exports for audience 707 failed with states: <(snapshotting_finished,export_error)>

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `allegro_3`
- Audiences: `707`
- Destinations: `dv360`
- State tuples: `snapshotting_finished/export_error`
- Commands seen: `glcli --env allegro bifrost pizza --audience-id 707 --org-id 3`

Representative alerts:
- Q1F0Z4E82XDV0A/Q171DROXRROPG3: 2026-06-22T07:31:51-07:00; allegro_3; audience 707; dv360; snapshotting_finished/export_error. allegro (Marketing): Exports for audience 707 failed with states: <(snapshotting_finished,export_error)>
  Runs: `707-dv360_1774-webapp__2026-06-19T11:27:34+00:00`

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
