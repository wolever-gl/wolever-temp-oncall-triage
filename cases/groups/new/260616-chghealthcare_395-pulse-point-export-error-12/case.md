<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# chghealthcare_395 pulse-point export-error

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `new`
Tags: `triage:needs_review`
Incidents: [Q3P1RPN1LQ18L5](https://growthloop.pagerduty.com/incidents/Q3P1RPN1LQ18L5)
Alerts: 1

## Current Summary

chghealthcare (Weatherby Healthcare): Exports for audience 26145 failed with states: <(snapshotting_finished,export_error)>

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `chghealthcare_395`
- Audiences: `26145`
- Destinations: `pulse_point`
- State tuples: `snapshotting_finished/export_error`
- Commands seen: `glcli --env prod bifrost pizza --audience-id 26145 --org-id 395`

Representative alerts:
- Q3P1RPN1LQ18L5/Q2FVAZ1CM1QZL9: 2026-06-16T07:39:51-07:00; chghealthcare_395; audience 26145; pulse_point; snapshotting_finished/export_error. chghealthcare (Weatherby Healthcare): Exports for audience 26145 failed with states: <(snapshotting_finished,export_error)>
  Runs: `26145-pulse_point_16182-scheduled__2026-06-15T23:00:00+00:00`

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
