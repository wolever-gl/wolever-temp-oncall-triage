<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# chghealthcare_395 pulse-point export-error

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `open`
Tags: `triage:needs_review`
Incidents: [Q1EA8SLBPMMLZ7](https://growthloop.pagerduty.com/incidents/Q1EA8SLBPMMLZ7)
Alerts: 1

## Current Summary

chghealthcare (Omni-Division): Exports for audience 31808 failed with states: <(snapshotting_finished,export_error)>

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `chghealthcare_395`
- Audiences: `31808`
- Destinations: `pulse_point`
- State tuples: `snapshotting_finished/export_error`
- Commands seen: `glcli --env prod bifrost pizza --audience-id 31808 --org-id 395`

Representative alerts:
- Q1EA8SLBPMMLZ7/Q2XM8FJ6NX08KG: 2026-06-18T07:43:54-07:00; chghealthcare_395; audience 31808; pulse_point; snapshotting_finished/export_error. chghealthcare (Omni-Division): Exports for audience 31808 failed with states: <(snapshotting_finished,export_error)>
  Runs: `31808-pulse_point_19414-scheduled__2026-06-17T23:00:00+00:00`

## Export Checks

- Checks: 1.
- States: `blocked`=1
- Blockers seen: `export_error`, `failed_export_count`

Check evidence:
- chk_q1ea8slbpmmlz7_q2xm8fj6nx08kg (Q1EA8SLBPMMLZ7/Q2XM8FJ6NX08KG): state=`blocked`.
  Scope: env=prod; org=395; audience=31808; endpoint=app_pulsepoint_1640; destination=pulse_point.
  Checked runs: `31808-pulse_point_19414-scheduled__2026-06-17T23:00:00+00:00`
  Command: `glcli --env prod bifrost pizza --audience-id 31808 --org-id 395`
  Blockers: `failed_export_count`, `export_error`
  Run 31808-pulse_point_19414-scheduled__2026-06-17T23:00:00+00:00: health=`blocked`; blockers=failed_export_count, export_error; created=2026-06-17T23:57:39.330902+00:00; snapshotting=snapshotting_finished; export=export_error; failed=8.

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
