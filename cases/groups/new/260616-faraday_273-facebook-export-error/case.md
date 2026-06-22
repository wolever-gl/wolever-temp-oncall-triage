<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# faraday_273 facebook export-error

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `new`
Tags: `triage:needs_review`
Incidents: [Q09VNZ6WUTJ8HM](https://growthloop.pagerduty.com/incidents/Q09VNZ6WUTJ8HM)
Alerts: 1

## Current Summary

Faraday (EmpowerFi - CUNJ): Exports for audience 21403 failed with states: <(snapshotting_finished,export_error)>

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `faraday_273`
- Audiences: `21403`
- Destinations: `facebook`
- State tuples: `snapshotting_finished/export_error`
- Commands seen: `glcli --env prod bifrost pizza --audience-id 21403 --org-id 273`

Representative alerts:
- Q09VNZ6WUTJ8HM/Q1JCHVGXPGRZVV: 2026-06-16T08:08:55-07:00; faraday_273; audience 21403; facebook; snapshotting_finished/export_error. Faraday (EmpowerFi - CUNJ): Exports for audience 21403 failed with states: <(snapshotting_finished,export_error)>
  Runs: `21403-facebook_13599-scheduled__2026-06-11T00:00:00+00:00`

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
