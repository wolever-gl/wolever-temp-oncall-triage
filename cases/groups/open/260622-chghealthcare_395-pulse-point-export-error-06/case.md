<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# chghealthcare_395 pulse-point export-error

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `open`
Tags: `triage:needs_review`
Incidents: [Q2RQ5RSII4P5F5](https://growthloop.pagerduty.com/incidents/Q2RQ5RSII4P5F5)
Alerts: 1

## Current Summary

chghealthcare (Weatherby Healthcare): Exports for audience 31575 failed with states: <(snapshotting_finished,export_error)>

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `chghealthcare_395`
- Audiences: `31575`
- Destinations: `pulse_point`
- State tuples: `snapshotting_finished/export_error`
- Commands seen: `glcli --env prod bifrost pizza --audience-id 31575 --org-id 395`

Representative alerts:
- Q2RQ5RSII4P5F5/Q20I8C019UXKAG: 2026-06-22T07:40:23-07:00; chghealthcare_395; audience 31575; pulse_point; snapshotting_finished/export_error. chghealthcare (Weatherby Healthcare): Exports for audience 31575 failed with states: <(snapshotting_finished,export_error)>
  Runs: `31575-pulse_point_19525-scheduled__2026-06-21T23:00:00+00:00`

## Export Checks

- Checks: 1.
- States: `blocked`=1
- Blockers seen: `export_error`, `failed_export_count`

Check evidence:
- chk_q2rq5rsii4p5f5_q20i8c019uxkag (Q2RQ5RSII4P5F5/Q20I8C019UXKAG): state=`blocked`.
  Scope: env=prod; org=395; audience=31575; endpoint=app_pulsepoint_1408; destination=pulse_point.
  Checked runs: `31575-pulse_point_19525-scheduled__2026-06-21T23:00:00+00:00`
  Command: `glcli --env prod bifrost pizza --audience-id 31575 --org-id 395`
  Blockers: `failed_export_count`, `export_error`
  Run 31575-pulse_point_19525-scheduled__2026-06-21T23:00:00+00:00: health=`blocked`; blockers=failed_export_count, export_error; created=2026-06-22T00:07:19.552122+00:00; snapshotting=snapshotting_finished; export=export_error; failed=207.

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
