<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# chghealthcare_395 pulse-point export-error

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `open`
Tags: `triage:needs_review`
Incidents: [Q0SNCF988XJVUM](https://growthloop.pagerduty.com/incidents/Q0SNCF988XJVUM)
Alerts: 1

## Current Summary

chghealthcare (Weatherby Healthcare): Exports for audience 19441 failed with states: <(snapshotting_finished,export_error)>

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `chghealthcare_395`
- Audiences: `19441`
- Destinations: `pulse_point`
- State tuples: `snapshotting_finished/export_error`
- Commands seen: `glcli --env prod bifrost pizza --audience-id 19441 --org-id 395`

Representative alerts:
- Q0SNCF988XJVUM/Q2SV22K2PA2I84: 2026-06-16T07:38:26-07:00; chghealthcare_395; audience 19441; pulse_point; snapshotting_finished/export_error. chghealthcare (Weatherby Healthcare): Exports for audience 19441 failed with states: <(snapshotting_finished,export_error)>
  Runs: `19441-pulse_point_12246-scheduled__2026-06-15T23:00:00+00:00`

## Export Checks

- Checks: 1.
- States: `blocked`=1
- Blockers seen: `export_error`, `failed_export_count`

Check evidence:
- chk_q0sncf988xjvum_q2sv22k2pa2i84 (Q0SNCF988XJVUM/Q2SV22K2PA2I84): state=`blocked`.
  Scope: env=prod; org=395; audience=19441; endpoint=app_pulsepoint_1408; destination=pulse_point.
  Checked runs: `19441-pulse_point_12246-scheduled__2026-06-15T23:00:00+00:00`
  Command: `glcli --env prod bifrost pizza --audience-id 19441 --org-id 395`
  Blockers: `failed_export_count`, `export_error`
  Run 19441-pulse_point_12246-scheduled__2026-06-15T23:00:00+00:00: health=`blocked`; blockers=failed_export_count, export_error; created=2026-06-15T23:27:20.650494+00:00; snapshotting=snapshotting_finished; export=export_error; failed=13.

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
