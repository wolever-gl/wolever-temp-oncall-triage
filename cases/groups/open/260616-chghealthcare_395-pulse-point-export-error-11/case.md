<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# chghealthcare_395 pulse-point export-error

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `open`
Tags: `triage:needs_review`
Incidents: [Q3A36H88A6UETC](https://growthloop.pagerduty.com/incidents/Q3A36H88A6UETC)
Alerts: 1

## Current Summary

chghealthcare (CompHealth): Exports for audience 31437 failed with states: <(snapshotting_finished,export_error)>

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `chghealthcare_395`
- Audiences: `31437`
- Destinations: `pulse_point`
- State tuples: `snapshotting_finished/export_error`
- Commands seen: `glcli --env prod bifrost pizza --audience-id 31437 --org-id 395`

Representative alerts:
- Q3A36H88A6UETC/Q1DR7XYFNM8DDG: 2026-06-16T07:42:00-07:00; chghealthcare_395; audience 31437; pulse_point; snapshotting_finished/export_error. chghealthcare (CompHealth): Exports for audience 31437 failed with states: <(snapshotting_finished,export_error)>
  Runs: `31437-pulse_point_19579-scheduled__2026-06-15T23:00:00+00:00`

## Export Checks

- Checks: 1.
- States: `blocked`=1
- Blockers seen: `export_error`, `failed_export_count`

Check evidence:
- chk_q3a36h88a6uetc_q1dr7xyfnm8ddg (Q3A36H88A6UETC/Q1DR7XYFNM8DDG): state=`blocked`.
  Scope: env=prod; org=395; audience=31437; endpoint=app_pulsepoint_1409; destination=pulse_point.
  Checked runs: `31437-pulse_point_19579-scheduled__2026-06-15T23:00:00+00:00`
  Command: `glcli --env prod bifrost pizza --audience-id 31437 --org-id 395`
  Blockers: `failed_export_count`, `export_error`
  Run 31437-pulse_point_19579-scheduled__2026-06-15T23:00:00+00:00: health=`blocked`; blockers=failed_export_count, export_error; created=2026-06-15T23:53:13.975061+00:00; snapshotting=snapshotting_finished; export=export_error; failed=72.

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
