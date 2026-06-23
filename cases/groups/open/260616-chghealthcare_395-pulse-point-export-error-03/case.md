<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# chghealthcare_395 pulse-point export-error

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `open`
Tags: `triage:needs_review`
Incidents: [Q0ANZAZWZHOW2E](https://growthloop.pagerduty.com/incidents/Q0ANZAZWZHOW2E)
Alerts: 1

## Current Summary

chghealthcare (Weatherby Healthcare): Exports for audience 31696 failed with states: <(snapshotting_finished,export_error)>

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `chghealthcare_395`
- Audiences: `31696`
- Destinations: `pulse_point`
- State tuples: `snapshotting_finished/export_error`
- Commands seen: `glcli --env prod bifrost pizza --audience-id 31696 --org-id 395`

Representative alerts:
- Q0ANZAZWZHOW2E/Q2ABXHDLOH5VB2: 2026-06-16T07:42:14-07:00; chghealthcare_395; audience 31696; pulse_point; snapshotting_finished/export_error. chghealthcare (Weatherby Healthcare): Exports for audience 31696 failed with states: <(snapshotting_finished,export_error)>
  Runs: `31696-pulse_point_19521-scheduled__2026-06-15T23:00:00+00:00`

## Export Checks

- Checks: 1.
- States: `blocked`=1
- Blockers seen: `export_error`, `failed_export_count`

Check evidence:
- chk_q0anzazwzhow2e_q2abxhdloh5vb2 (Q0ANZAZWZHOW2E/Q2ABXHDLOH5VB2): state=`blocked`.
  Scope: env=prod; org=395; audience=31696; endpoint=app_pulsepoint_1408; destination=pulse_point.
  Checked runs: `31696-pulse_point_19521-scheduled__2026-06-15T23:00:00+00:00`
  Command: `glcli --env prod bifrost pizza --audience-id 31696 --org-id 395`
  Blockers: `failed_export_count`, `export_error`
  Run 31696-pulse_point_19521-scheduled__2026-06-15T23:00:00+00:00: health=`blocked`; blockers=failed_export_count, export_error; created=2026-06-15T23:54:51.115343+00:00; snapshotting=snapshotting_finished; export=export_error; failed=54.

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
