<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# chghealthcare_395 pulse-point export-error

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `new`
Tags: `triage:needs_review`
Incidents: [Q0722LHSBTC3QW](https://growthloop.pagerduty.com/incidents/Q0722LHSBTC3QW)
Alerts: 1

## Current Summary

chghealthcare (CompHealth): Exports for audience 28130 failed with states: <(snapshotting_finished,export_error)>

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `chghealthcare_395`
- Audiences: `28130`
- Destinations: `pulse_point`
- State tuples: `snapshotting_finished/export_error`
- Commands seen: `glcli --env prod bifrost pizza --audience-id 28130 --org-id 395`

Representative alerts:
- Q0722LHSBTC3QW/Q1TIPIL19SFM75: 2026-06-16T07:40:28-07:00; chghealthcare_395; audience 28130; pulse_point; snapshotting_finished/export_error. chghealthcare (CompHealth): Exports for audience 28130 failed with states: <(snapshotting_finished,export_error)>
  Runs: `28130-pulse_point_17214-scheduled__2026-06-15T23:00:00+00:00`

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
