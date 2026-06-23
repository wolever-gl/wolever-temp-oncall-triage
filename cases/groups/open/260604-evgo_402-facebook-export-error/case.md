<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# evgo_402 facebook export-error

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `open`
Tags: `triage:needs_review`
Incidents: [Q2SD1O3BRD8DHQ](https://growthloop.pagerduty.com/incidents/Q2SD1O3BRD8DHQ)
Alerts: 1

## Current Summary

EVgo (EVgo Prod): Exports for audience 14107 failed with states: <(snapshotting_finished,export_error)>

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `evgo_402`
- Audiences: `14107`
- Destinations: `facebook`
- State tuples: `snapshotting_finished/export_error`
- Commands seen: `glcli --env prod bifrost pizza --audience-id 14107 --org-id 402`

Representative alerts:
- Q2SD1O3BRD8DHQ/Q0IP259O9VT0XW: 2026-06-04T07:48:45-07:00; evgo_402; audience 14107; facebook; snapshotting_finished/export_error. EVgo (EVgo Prod): Exports for audience 14107 failed with states: <(snapshotting_finished,export_error)>
  Runs: `14107-facebook_9350-scheduled__2026-06-04T00:00:00+00:00`

## Export Checks

- Checks: 1.
- States: `blocked`=1
- Blockers seen: `export_error`, `failed_export_count`

Check evidence:
- chk_q2sd1o3brd8dhq_q0ip259o9vt0xw (Q2SD1O3BRD8DHQ/Q0IP259O9VT0XW): state=`blocked`.
  Scope: env=prod; org=402; audience=14107; endpoint=app_facebook_1322; destination=facebook.
  Checked runs: `14107-facebook_9350-scheduled__2026-06-04T00:00:00+00:00`
  Command: `glcli --env prod bifrost pizza --audience-id 14107 --org-id 402`
  Blockers: `failed_export_count`, `export_error`
  Run 14107-facebook_9350-scheduled__2026-06-04T00:00:00+00:00: health=`blocked`; blockers=failed_export_count, export_error; created=2026-06-04T00:28:36.294141+00:00; snapshotting=snapshotting_finished; export=export_error; failed=115.

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
