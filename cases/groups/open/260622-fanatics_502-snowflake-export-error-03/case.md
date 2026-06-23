<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# fanatics_502 snowflake export-error

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `open`
Tags: `triage:needs_review`
Incidents: [Q2FTM4GR255QLF](https://growthloop.pagerduty.com/incidents/Q2FTM4GR255QLF)
Alerts: 1

## Current Summary

fanatics (default): Exports for audience 30899 failed with states: <(snapshotting_finished,export_error)>

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `fanatics_502`
- Audiences: `30899`
- Destinations: `snowflake`
- State tuples: `snapshotting_finished/export_error`
- Commands seen: `glcli --env prod bifrost pizza --audience-id 30899 --org-id 502`

Representative alerts:
- Q2FTM4GR255QLF/Q2P5ITJGIVK5ZI: 2026-06-22T08:08:14-07:00; fanatics_502; audience 30899; snowflake; snapshotting_finished/export_error. fanatics (default): Exports for audience 30899 failed with states: <(snapshotting_finished,export_error)>
  Runs: `30899-snowflake_21612-scheduled__2026-06-18T00:00:00+00:00`

## Export Checks

- Checks: 1.
- States: `blocked`=1
- Blockers seen: `export_error`, `failed_export_count`

Check evidence:
- chk_q2ftm4gr255qlf_q2p5itjgivk5zi (Q2FTM4GR255QLF/Q2P5ITJGIVK5ZI): state=`blocked`.
  Scope: env=prod; org=502; audience=30899; endpoint=app_snowflake_1746; destination=snowflake.
  Checked runs: `30899-snowflake_21612-scheduled__2026-06-18T00:00:00+00:00`
  Command: `glcli --env prod bifrost pizza --audience-id 30899 --org-id 502`
  Blockers: `failed_export_count`, `export_error`
  Run 30899-snowflake_21612-scheduled__2026-06-18T00:00:00+00:00: health=`blocked`; blockers=failed_export_count, export_error; created=2026-06-18T03:34:48.569281+00:00; snapshotting=snapshotting_finished; export=export_error; failed=12677.

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
