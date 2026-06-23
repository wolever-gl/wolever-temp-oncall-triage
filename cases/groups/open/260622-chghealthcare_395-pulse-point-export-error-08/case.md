<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# chghealthcare_395 pulse-point export-error

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `open`
Tags: `triage:needs_review`
Incidents: [Q31ZXXXLPBJF56](https://growthloop.pagerduty.com/incidents/Q31ZXXXLPBJF56)
Alerts: 1

## Current Summary

chghealthcare (CompHealth): Exports for audience 31904 failed with states: <(snapshotting_finished,export_error)>

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `chghealthcare_395`
- Audiences: `31904`
- Destinations: `pulse_point`
- State tuples: `snapshotting_finished/export_error`
- Commands seen: `glcli --env prod bifrost pizza --audience-id 31904 --org-id 395`

Representative alerts:
- Q31ZXXXLPBJF56/Q0AS7TFTADT6DS: 2026-06-22T07:41:05-07:00; chghealthcare_395; audience 31904; pulse_point; snapshotting_finished/export_error. chghealthcare (CompHealth): Exports for audience 31904 failed with states: <(snapshotting_finished,export_error)>
  Runs: `31904-pulse_point_19578-scheduled__2026-06-21T23:00:00+00:00`

## Export Checks

- Checks: 1.
- States: `blocked`=1
- Blockers seen: `export_error`, `failed_export_count`

Check evidence:
- chk_q31zxxxlpbjf56_q0as7tftadt6ds (Q31ZXXXLPBJF56/Q0AS7TFTADT6DS): state=`blocked`.
  Scope: env=prod; org=395; audience=31904; endpoint=app_pulsepoint_1409; destination=pulse_point.
  Checked runs: `31904-pulse_point_19578-scheduled__2026-06-21T23:00:00+00:00`
  Command: `glcli --env prod bifrost pizza --audience-id 31904 --org-id 395`
  Blockers: `failed_export_count`, `export_error`
  Run 31904-pulse_point_19578-scheduled__2026-06-21T23:00:00+00:00: health=`blocked`; blockers=failed_export_count, export_error; created=2026-06-21T23:31:50.997267+00:00; snapshotting=snapshotting_finished; export=export_error; failed=518.

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
