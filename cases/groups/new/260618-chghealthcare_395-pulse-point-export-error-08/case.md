<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# chghealthcare_395 pulse-point export-error

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `new`
Tags: `triage:needs_review`
Incidents: [Q3XGYEDYFHJA4J](https://growthloop.pagerduty.com/incidents/Q3XGYEDYFHJA4J)
Alerts: 1

## Current Summary

chghealthcare (Omni-Division): Exports for audience 29661 failed with states: <(snapshotting_finished,export_error)>

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `chghealthcare_395`
- Audiences: `29661`
- Destinations: `pulse_point`
- State tuples: `snapshotting_finished/export_error`
- Commands seen: `glcli --env prod bifrost pizza --audience-id 29661 --org-id 395`

Representative alerts:
- Q3XGYEDYFHJA4J/Q0B8B3T7GP9TN2: 2026-06-18T07:42:10-07:00; chghealthcare_395; audience 29661; pulse_point; snapshotting_finished/export_error. chghealthcare (Omni-Division): Exports for audience 29661 failed with states: <(snapshotting_finished,export_error)>
  Runs: `29661-pulse_point_18466-scheduled__2026-06-17T23:00:00+00:00`

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
