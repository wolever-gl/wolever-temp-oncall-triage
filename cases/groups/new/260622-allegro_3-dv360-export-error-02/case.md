<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# allegro_3 dv360 export-error

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `new`
Tags: `triage:needs_review`
Incidents: [Q2U45YSOGF3QHG](https://growthloop.pagerduty.com/incidents/Q2U45YSOGF3QHG)
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
- Q2U45YSOGF3QHG/Q0UL6KATA6LTLK: 2026-06-22T07:31:51-07:00; allegro_3; audience 707; dv360; snapshotting_finished/export_error. allegro (Marketing): Exports for audience 707 failed with states: <(snapshotting_finished,export_error)>
  Runs: `707-dv360_1773-webapp__2026-06-19T11:26:21+00:00`

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
