<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# chghealthcare_395 pulse-point export-error

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `open`
Tags: `triage:needs_review`
Incidents: [Q004R9HPG7ZZ1L](https://growthloop.pagerduty.com/incidents/Q004R9HPG7ZZ1L)
Alerts: 1

## Current Summary

chghealthcare (CompHealth): Exports for audience 19070 failed with states: <(snapshotting_finished,export_error)>

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `chghealthcare_395`
- Audiences: `19070`
- Destinations: `pulse_point`
- State tuples: `snapshotting_finished/export_error`
- Commands seen: `glcli --env prod bifrost pizza --audience-id 19070 --org-id 395`

Representative alerts:
- Q004R9HPG7ZZ1L/Q33B23IQ8F57WW: 2026-06-16T07:38:19-07:00; chghealthcare_395; audience 19070; pulse_point; snapshotting_finished/export_error. chghealthcare (CompHealth): Exports for audience 19070 failed with states: <(snapshotting_finished,export_error)>
  Runs: `19070-pulse_point_12048-scheduled__2026-06-15T23:00:00+00:00`

## Export Checks

- Checks: 1.
- States: `blocked`=1
- Blockers seen: `export_error`, `failed_export_count`

Check evidence:
- chk_q004r9hpg7zz1l_q33b23iq8f57ww (Q004R9HPG7ZZ1L/Q33B23IQ8F57WW): state=`blocked`.
  Scope: env=prod; org=395; audience=19070; endpoint=app_pulsepoint_1409; destination=pulse_point.
  Checked runs: `19070-pulse_point_12048-scheduled__2026-06-15T23:00:00+00:00`
  Command: `glcli --env prod bifrost pizza --audience-id 19070 --org-id 395`
  Blockers: `failed_export_count`, `export_error`
  Run 19070-pulse_point_12048-scheduled__2026-06-15T23:00:00+00:00: health=`blocked`; blockers=failed_export_count, export_error; created=2026-06-15T23:27:03.710372+00:00; snapshotting=snapshotting_finished; export=export_error; failed=124.

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
