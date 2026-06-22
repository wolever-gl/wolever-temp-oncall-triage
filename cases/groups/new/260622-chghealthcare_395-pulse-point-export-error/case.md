<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# chghealthcare_395 pulse-point export-error

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `new`
Tags: `triage:needs_review`
Incidents: [Q022HUJ54DU2R9](https://growthloop.pagerduty.com/incidents/Q022HUJ54DU2R9)
Alerts: 1

## Current Summary

chghealthcare (Weatherby Healthcare): Exports for audience 31726 failed with states: <(snapshotting_finished,export_error)>

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `chghealthcare_395`
- Audiences: `31726`
- Destinations: `pulse_point`
- State tuples: `snapshotting_finished/export_error`
- Commands seen: `glcli --env prod bifrost pizza --audience-id 31726 --org-id 395`

Representative alerts:
- Q022HUJ54DU2R9/Q1CS2KTQNQU7NF: 2026-06-22T07:40:50-07:00; chghealthcare_395; audience 31726; pulse_point; snapshotting_finished/export_error. chghealthcare (Weatherby Healthcare): Exports for audience 31726 failed with states: <(snapshotting_finished,export_error)>
  Runs: `31726-pulse_point_19520-scheduled__2026-06-21T23:00:00+00:00`

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
