<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# chghealthcare_395 pulse-point export-error

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `open`
Tags: `triage:needs_review`
Incidents: [Q2A5FG05GM1Z1I](https://growthloop.pagerduty.com/incidents/Q2A5FG05GM1Z1I)
Alerts: 1

## Current Summary

chghealthcare (Weatherby Healthcare): Exports for audience 22844 failed with states: <(snapshotting_finished,export_error)>

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `chghealthcare_395`
- Audiences: `22844`
- Destinations: `pulse_point`
- State tuples: `snapshotting_finished/export_error`
- Commands seen: `glcli --env prod bifrost pizza --audience-id 22844 --org-id 395`

Representative alerts:
- Q2A5FG05GM1Z1I/Q1U5FXF6X7L794: 2026-06-22T07:37:57-07:00; chghealthcare_395; audience 22844; pulse_point; snapshotting_finished/export_error. chghealthcare (Weatherby Healthcare): Exports for audience 22844 failed with states: <(snapshotting_finished,export_error)>
  Runs: `22844-pulse_point_14254-scheduled__2026-06-21T23:00:00+00:00`

## Export Checks

- Checks: 1.
- States: `blocked`=1
- Blockers seen: `export_error`, `failed_export_count`

Check evidence:
- chk_q2a5fg05gm1z1i_q1u5fxf6x7l794 (Q2A5FG05GM1Z1I/Q1U5FXF6X7L794): state=`blocked`.
  Scope: env=prod; org=395; audience=22844; endpoint=app_pulsepoint_1408; destination=pulse_point.
  Checked runs: `22844-pulse_point_14254-scheduled__2026-06-21T23:00:00+00:00`
  Command: `glcli --env prod bifrost pizza --audience-id 22844 --org-id 395`
  Blockers: `failed_export_count`, `export_error`
  Run 22844-pulse_point_14254-scheduled__2026-06-21T23:00:00+00:00: health=`blocked`; blockers=failed_export_count, export_error; created=2026-06-22T00:00:22.237479+00:00; snapshotting=snapshotting_finished; export=export_error; failed=22.

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
