<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# chghealthcare_395 pulse-point export-error

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `open`
Tags: `triage:needs_review`
Incidents: [Q1EJUER52Q5GMD](https://growthloop.pagerduty.com/incidents/Q1EJUER52Q5GMD)
Alerts: 1

## Current Summary

chghealthcare (Omni-Division): Exports for audience 27539 failed with states: <(snapshotting_finished,export_error)>

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `chghealthcare_395`
- Audiences: `27539`
- Destinations: `pulse_point`
- State tuples: `snapshotting_finished/export_error`
- Commands seen: `glcli --env prod bifrost pizza --audience-id 27539 --org-id 395`

Representative alerts:
- Q1EJUER52Q5GMD/Q2S2NOLELO40U7: 2026-06-18T07:41:33-07:00; chghealthcare_395; audience 27539; pulse_point; snapshotting_finished/export_error. chghealthcare (Omni-Division): Exports for audience 27539 failed with states: <(snapshotting_finished,export_error)>
  Runs: `27539-pulse_point_16996-scheduled__2026-06-17T23:00:00+00:00`

## Export Checks

- Checks: 1.
- States: `blocked`=1
- Blockers seen: `export_error`, `failed_export_count`

Check evidence:
- chk_q1ejuer52q5gmd_q2s2nolelo40u7 (Q1EJUER52Q5GMD/Q2S2NOLELO40U7): state=`blocked`.
  Scope: env=prod; org=395; audience=27539; endpoint=app_pulsepoint_1640; destination=pulse_point.
  Checked runs: `27539-pulse_point_16996-scheduled__2026-06-17T23:00:00+00:00`
  Command: `glcli --env prod bifrost pizza --audience-id 27539 --org-id 395`
  Blockers: `failed_export_count`, `export_error`
  Run 27539-pulse_point_16996-scheduled__2026-06-17T23:00:00+00:00: health=`blocked`; blockers=failed_export_count, export_error; created=2026-06-17T23:40:12.863574+00:00; snapshotting=snapshotting_finished; export=export_error; failed=702.

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
