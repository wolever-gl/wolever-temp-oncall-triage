<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# chghealthcare_395 pulse-point export-error

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `open`
Tags: `triage:needs_review`
Incidents: [Q0F5DR7F1TF0FW](https://growthloop.pagerduty.com/incidents/Q0F5DR7F1TF0FW)
Alerts: 1

## Current Summary

chghealthcare (Weatherby Healthcare): Exports for audience 26105 failed with states: <(snapshotting_finished,export_error)>

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `chghealthcare_395`
- Audiences: `26105`
- Destinations: `pulse_point`
- State tuples: `snapshotting_finished/export_error`
- Commands seen: `glcli --env prod bifrost pizza --audience-id 26105 --org-id 395`

Representative alerts:
- Q0F5DR7F1TF0FW/Q1UR7U6USZ9Q5A: 2026-06-22T07:38:32-07:00; chghealthcare_395; audience 26105; pulse_point; snapshotting_finished/export_error. chghealthcare (Weatherby Healthcare): Exports for audience 26105 failed with states: <(snapshotting_finished,export_error)>
  Runs: `26105-pulse_point_16181-scheduled__2026-06-21T23:00:00+00:00`

## Export Checks

- Checks: 1.
- States: `blocked`=1
- Blockers seen: `export_error`, `failed_export_count`

Check evidence:
- chk_q0f5dr7f1tf0fw_q1ur7u6usz9q5a (Q0F5DR7F1TF0FW/Q1UR7U6USZ9Q5A): state=`blocked`.
  Scope: env=prod; org=395; audience=26105; endpoint=app_pulsepoint_1408; destination=pulse_point.
  Checked runs: `26105-pulse_point_16181-scheduled__2026-06-21T23:00:00+00:00`
  Command: `glcli --env prod bifrost pizza --audience-id 26105 --org-id 395`
  Blockers: `failed_export_count`, `export_error`
  Run 26105-pulse_point_16181-scheduled__2026-06-21T23:00:00+00:00: health=`blocked`; blockers=failed_export_count, export_error; created=2026-06-21T23:20:36.263844+00:00; snapshotting=snapshotting_finished; export=export_error; failed=29.

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
