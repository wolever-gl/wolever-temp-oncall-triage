<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# chghealthcare_395 pulse-point export-error

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `open`
Tags: `triage:needs_review`
Incidents: [Q1RFCSJYF0MPKQ](https://growthloop.pagerduty.com/incidents/Q1RFCSJYF0MPKQ)
Alerts: 1

## Current Summary

chghealthcare (Omni-Division): Exports for audience 29545 failed with states: <(snapshotting_finished,export_error)>

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `chghealthcare_395`
- Audiences: `29545`
- Destinations: `pulse_point`
- State tuples: `snapshotting_finished/export_error`
- Commands seen: `glcli --env prod bifrost pizza --audience-id 29545 --org-id 395`

Representative alerts:
- Q1RFCSJYF0MPKQ/Q3YGY4LX3CHJGR: 2026-06-18T07:42:03-07:00; chghealthcare_395; audience 29545; pulse_point; snapshotting_finished/export_error. chghealthcare (Omni-Division): Exports for audience 29545 failed with states: <(snapshotting_finished,export_error)>
  Runs: `29545-pulse_point_18389-scheduled__2026-06-17T23:00:00+00:00`

## Export Checks

- Checks: 1.
- States: `blocked`=1
- Blockers seen: `export_error`, `failed_export_count`

Check evidence:
- chk_q1rfcsjyf0mpkq_q3ygy4lx3chjgr (Q1RFCSJYF0MPKQ/Q3YGY4LX3CHJGR): state=`blocked`.
  Scope: env=prod; org=395; audience=29545; endpoint=app_pulsepoint_1640; destination=pulse_point.
  Checked runs: `29545-pulse_point_18389-scheduled__2026-06-17T23:00:00+00:00`
  Command: `glcli --env prod bifrost pizza --audience-id 29545 --org-id 395`
  Blockers: `failed_export_count`, `export_error`
  Run 29545-pulse_point_18389-scheduled__2026-06-17T23:00:00+00:00: health=`blocked`; blockers=failed_export_count, export_error; created=2026-06-17T23:45:14.775791+00:00; snapshotting=snapshotting_finished; export=export_error; failed=39.

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
