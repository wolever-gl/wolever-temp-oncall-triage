<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# chghealthcare_395 pulse-point export-error

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `open`
Tags: `triage:needs_review`
Incidents: [Q36KG67I5QPOE8](https://growthloop.pagerduty.com/incidents/Q36KG67I5QPOE8)
Alerts: 1

## Current Summary

chghealthcare (CompHealth): Exports for audience 21184 failed with states: <(snapshotting_finished,export_error)>

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `chghealthcare_395`
- Audiences: `21184`
- Destinations: `pulse_point`
- State tuples: `snapshotting_finished/export_error`
- Commands seen: `glcli --env prod bifrost pizza --audience-id 21184 --org-id 395`

Representative alerts:
- Q36KG67I5QPOE8/Q3U92DDSTP9JWI: 2026-06-18T07:40:01-07:00; chghealthcare_395; audience 21184; pulse_point; snapshotting_finished/export_error. chghealthcare (CompHealth): Exports for audience 21184 failed with states: <(snapshotting_finished,export_error)>
  Runs: `21184-pulse_point_13454-scheduled__2026-06-17T23:00:00+00:00`

## Export Checks

- Checks: 1.
- States: `blocked`=1
- Blockers seen: `export_error`, `failed_export_count`

Check evidence:
- chk_q36kg67i5qpoe8_q3u92ddstp9jwi (Q36KG67I5QPOE8/Q3U92DDSTP9JWI): state=`blocked`.
  Scope: env=prod; org=395; audience=21184; endpoint=app_pulsepoint_1409; destination=pulse_point.
  Checked runs: `21184-pulse_point_13454-scheduled__2026-06-17T23:00:00+00:00`
  Command: `glcli --env prod bifrost pizza --audience-id 21184 --org-id 395`
  Blockers: `failed_export_count`, `export_error`
  Run 21184-pulse_point_13454-scheduled__2026-06-17T23:00:00+00:00: health=`blocked`; blockers=failed_export_count, export_error; created=2026-06-17T23:17:25.144595+00:00; snapshotting=snapshotting_finished; export=export_error; failed=371.

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
