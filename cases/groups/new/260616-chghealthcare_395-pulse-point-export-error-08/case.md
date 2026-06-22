<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# chghealthcare_395 pulse-point export-error

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `new`
Tags: `triage:needs_review`
Incidents: [Q1BAYFS9U9T1FE](https://growthloop.pagerduty.com/incidents/Q1BAYFS9U9T1FE)
Alerts: 1

## Current Summary

chghealthcare (Global Medical Staffing): Exports for audience 18684 failed with states: <(snapshotting_finished,export_error)>

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `chghealthcare_395`
- Audiences: `18684`
- Destinations: `pulse_point`
- State tuples: `snapshotting_finished/export_error`
- Commands seen: `glcli --env prod bifrost pizza --audience-id 18684 --org-id 395`

Representative alerts:
- Q1BAYFS9U9T1FE/Q1Y1BJPTNT9J5M: 2026-06-16T07:38:15-07:00; chghealthcare_395; audience 18684; pulse_point; snapshotting_finished/export_error. chghealthcare (Global Medical Staffing): Exports for audience 18684 failed with states: <(snapshotting_finished,export_error)>
  Runs: `18684-pulse_point_11878-scheduled__2026-06-15T23:00:00+00:00`

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
