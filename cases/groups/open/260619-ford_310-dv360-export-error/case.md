<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# ford_310 dv360 export-error

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `open`
Tags: `triage:needs_review`
Incidents: [Q1ILC7ZME4R6FU](https://growthloop.pagerduty.com/incidents/Q1ILC7ZME4R6FU)
Alerts: 1

## Current Summary

ford (Marketing Production): Exports for audience 34008 failed with states: <(snapshotting_finished,export_error)>

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `ford_310`
- Audiences: `34008`
- Destinations: `dv360`
- State tuples: `snapshotting_finished/export_error`
- Commands seen: `glcli --env prod bifrost pizza --audience-id 34008 --org-id 310`

Representative alerts:
- Q1ILC7ZME4R6FU/Q25AQIPDXRHVRN: 2026-06-19T07:51:04-07:00; ford_310; audience 34008; dv360; snapshotting_finished/export_error. ford (Marketing Production): Exports for audience 34008 failed with states: <(snapshotting_finished,export_error)>
  Runs: `34008-dv360_20854-scheduled__2026-06-19T00:00:00+00:00`

## Export Checks

- Checks: 1.
- States: `blocked`=1
- Blockers seen: `export_error`, `failed_export_count`

Check evidence:
- chk_q1ilc7zme4r6fu_q25aqipdxrhvrn (Q1ILC7ZME4R6FU/Q25AQIPDXRHVRN): state=`blocked`.
  Scope: env=prod; org=310; audience=34008; endpoint=app_dv360_1807; destination=dv360.
  Checked runs: `34008-dv360_20854-scheduled__2026-06-19T00:00:00+00:00`
  Command: `glcli --env prod bifrost pizza --audience-id 34008 --org-id 310`
  Blockers: `failed_export_count`, `export_error`
  Run 34008-dv360_20854-scheduled__2026-06-19T00:00:00+00:00: health=`blocked`; blockers=failed_export_count, export_error; created=2026-06-19T00:57:41.472307+00:00; snapshotting=snapshotting_finished; export=export_error; failed=21465.

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
