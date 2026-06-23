<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# chghealthcare_395 pulse-point export-error

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `open`
Tags: `triage:needs_review`
Incidents: [Q3P4EBJ8WENZ8L](https://growthloop.pagerduty.com/incidents/Q3P4EBJ8WENZ8L)
Alerts: 1

## Current Summary

chghealthcare (Omni-Division): Exports for audience 34238 failed with states: <(snapshotting_finished,export_error)>

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `chghealthcare_395`
- Audiences: `34238`
- Destinations: `pulse_point`
- State tuples: `snapshotting_finished/export_error`
- Commands seen: `glcli --env prod bifrost pizza --audience-id 34238 --org-id 395`

Representative alerts:
- Q3P4EBJ8WENZ8L/Q33G6LEDNC9LXF: 2026-06-22T07:41:45-07:00; chghealthcare_395; audience 34238; pulse_point; snapshotting_finished/export_error. chghealthcare (Omni-Division): Exports for audience 34238 failed with states: <(snapshotting_finished,export_error)>
  Runs: `34238-pulse_point_20926-scheduled__2026-06-21T23:00:00+00:00`

## Export Checks

- Checks: 1.
- States: `blocked`=1
- Blockers seen: `export_error`, `failed_export_count`

Check evidence:
- chk_q3p4ebj8wenz8l_q33g6lednc9lxf (Q3P4EBJ8WENZ8L/Q33G6LEDNC9LXF): state=`blocked`.
  Scope: env=prod; org=395; audience=34238; endpoint=app_pulsepoint_1640; destination=pulse_point.
  Checked runs: `34238-pulse_point_20926-scheduled__2026-06-21T23:00:00+00:00`
  Command: `glcli --env prod bifrost pizza --audience-id 34238 --org-id 395`
  Blockers: `failed_export_count`, `export_error`
  Run 34238-pulse_point_20926-scheduled__2026-06-21T23:00:00+00:00: health=`blocked`; blockers=failed_export_count, export_error; created=2026-06-21T23:39:12.244295+00:00; snapshotting=snapshotting_finished; export=export_error; failed=27.

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
