<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# chghealthcare_395 pulse-point export-error

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `new`
Tags: `triage:needs_review`
Incidents: [Q2RQ5RSII4P5F5](https://growthloop.pagerduty.com/incidents/Q2RQ5RSII4P5F5)
Alerts: 1

## Current Summary

chghealthcare (Weatherby Healthcare): Exports for audience 31575 failed with states: <(snapshotting_finished,export_error)>

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `chghealthcare_395`
- Audiences: `31575`
- Destinations: `pulse_point`
- State tuples: `snapshotting_finished/export_error`
- Commands seen: `glcli --env prod bifrost pizza --audience-id 31575 --org-id 395`

Representative alerts:
- Q2RQ5RSII4P5F5/Q20I8C019UXKAG: 2026-06-22T07:40:23-07:00; chghealthcare_395; audience 31575; pulse_point; snapshotting_finished/export_error. chghealthcare (Weatherby Healthcare): Exports for audience 31575 failed with states: <(snapshotting_finished,export_error)>
  Runs: `31575-pulse_point_19525-scheduled__2026-06-21T23:00:00+00:00`

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
