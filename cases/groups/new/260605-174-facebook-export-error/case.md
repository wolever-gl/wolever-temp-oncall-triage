<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# 174 facebook export-error

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `new`
Tags: `triage:needs_review`
Incidents: [Q1H2G1LPQBKYIZ](https://growthloop.pagerduty.com/incidents/Q1H2G1LPQBKYIZ)
Alerts: 2

## Current Summary

NJ Devils (default): Exports for audience 25474 failed with states: <(snapshotting_finished,export_error)>

## Alert Scope

- Alert facts: 2 imported, 2 linked to this group.
- Orgs: `174`
- Audiences: `25474`, `27576`
- Destinations: `facebook`
- State tuples: `snapshotting_finished/export_error`
- Commands seen: `glcli --env prod bifrost pizza --audience-id 25474 --org-id 174`, `glcli --env prod bifrost pizza --audience-id 27576 --org-id 174`

Representative alerts:
- Q1H2G1LPQBKYIZ/Q360QWB0ARJAJZ: 2026-06-03T08:05:10-07:00; 174; audience 27576; facebook; snapshotting_finished/export_error. NJ Devils (default): Exports for audience 27576 failed with states: <(snapshotting_finished,export_error)>
  Runs: `27576-facebook_16836-scheduled__2026-05-27T00:00:00+00:00`, `27576-facebook_16836-scheduled__2026-06-03T00:00:00+00:00`
- Q1H2G1LPQBKYIZ/Q3UWOJDOIO35GQ: 2026-06-05T07:59:36-07:00; 174; audience 25474; facebook; snapshotting_finished/export_error. NJ Devils (default): Exports for audience 25474 failed with states: <(snapshotting_finished,export_error)>
  Runs: `25474-facebook_15654-scheduled__2026-06-05T00:00:00+00:00`

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
