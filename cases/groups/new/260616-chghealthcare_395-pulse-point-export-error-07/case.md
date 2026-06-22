<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# chghealthcare_395 pulse-point export-error

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `new`
Tags: `triage:needs_review`
Incidents: [Q19ZVR1G9PYYK1](https://growthloop.pagerduty.com/incidents/Q19ZVR1G9PYYK1)
Alerts: 1

## Current Summary

chghealthcare (Weatherby Healthcare): Exports for audience 31806 failed with states: <(snapshotting_finished,export_error)>

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `chghealthcare_395`
- Audiences: `31806`
- Destinations: `pulse_point`
- State tuples: `snapshotting_finished/export_error`
- Commands seen: `glcli --env prod bifrost pizza --audience-id 31806 --org-id 395`

Representative alerts:
- Q19ZVR1G9PYYK1/Q1V38QI9JJ0OE5: 2026-06-16T07:42:38-07:00; chghealthcare_395; audience 31806; pulse_point; snapshotting_finished/export_error. chghealthcare (Weatherby Healthcare): Exports for audience 31806 failed with states: <(snapshotting_finished,export_error)>
  Runs: `31806-pulse_point_19529-scheduled__2026-06-15T23:00:00+00:00`

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
