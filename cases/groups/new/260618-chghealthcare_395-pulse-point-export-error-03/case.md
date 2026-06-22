<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# chghealthcare_395 pulse-point export-error

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `new`
Tags: `triage:needs_review`
Incidents: [Q1EA8SLBPMMLZ7](https://growthloop.pagerduty.com/incidents/Q1EA8SLBPMMLZ7)
Alerts: 1

## Current Summary

chghealthcare (Omni-Division): Exports for audience 31808 failed with states: <(snapshotting_finished,export_error)>

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `chghealthcare_395`
- Audiences: `31808`
- Destinations: `pulse_point`
- State tuples: `snapshotting_finished/export_error`
- Commands seen: `glcli --env prod bifrost pizza --audience-id 31808 --org-id 395`

Representative alerts:
- Q1EA8SLBPMMLZ7/Q2XM8FJ6NX08KG: 2026-06-18T07:43:54-07:00; chghealthcare_395; audience 31808; pulse_point; snapshotting_finished/export_error. chghealthcare (Omni-Division): Exports for audience 31808 failed with states: <(snapshotting_finished,export_error)>
  Runs: `31808-pulse_point_19414-scheduled__2026-06-17T23:00:00+00:00`

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
