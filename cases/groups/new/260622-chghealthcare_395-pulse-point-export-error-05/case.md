<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# chghealthcare_395 pulse-point export-error

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `new`
Tags: `triage:needs_review`
Incidents: [Q2IUDXA8BX2HYJ](https://growthloop.pagerduty.com/incidents/Q2IUDXA8BX2HYJ)
Alerts: 1

## Current Summary

chghealthcare (CompHealth): Exports for audience 22843 failed with states: <(snapshotting_finished,export_error)>

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `chghealthcare_395`
- Audiences: `22843`
- Destinations: `pulse_point`
- State tuples: `snapshotting_finished/export_error`
- Commands seen: `glcli --env prod bifrost pizza --audience-id 22843 --org-id 395`

Representative alerts:
- Q2IUDXA8BX2HYJ/Q3BXVEDYARRILY: 2026-06-22T07:37:56-07:00; chghealthcare_395; audience 22843; pulse_point; snapshotting_finished/export_error. chghealthcare (CompHealth): Exports for audience 22843 failed with states: <(snapshotting_finished,export_error)>
  Runs: `22843-pulse_point_14252-scheduled__2026-06-21T23:00:00+00:00`

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
