<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# chghealthcare_395 pulse-point export-error

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `new`
Tags: `triage:needs_review`
Incidents: [Q3P4EBJ8WENZ8L](https://growthloop.pagerduty.com/incidents/Q3P4EBJ8WENZ8L)
Alerts: 1

## Current Summary

chghealthcare (Omni-Division): Exports for audience 34238 failed with states: <(snapshotting_finished,export_error)>

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `chghealthcare_395`
- Audiences: `34238`
- Destinations: `pulse_point`
- State tuples: `snapshotting_finished/export_error`
- Commands seen: `glcli --env prod bifrost pizza --audience-id 34238 --org-id 395`

Representative alerts:
- Q3P4EBJ8WENZ8L/Q33G6LEDNC9LXF: 2026-06-22T07:41:45-07:00; chghealthcare_395; audience 34238; pulse_point; snapshotting_finished/export_error. chghealthcare (Omni-Division): Exports for audience 34238 failed with states: <(snapshotting_finished,export_error)>
  Runs: `34238-pulse_point_20926-scheduled__2026-06-21T23:00:00+00:00`

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
