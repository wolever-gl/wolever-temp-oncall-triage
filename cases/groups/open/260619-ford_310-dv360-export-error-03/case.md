<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# ford_310 dv360 export-error

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `open`
Tags: `triage:needs_review`
Incidents: [Q2GR6SL6PJFO6B](https://growthloop.pagerduty.com/incidents/Q2GR6SL6PJFO6B)
Alerts: 1

## Current Summary

ford (Marketing Production): Exports for audience 33348 failed with states: <(snapshotting_finished,export_error)>

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `ford_310`
- Audiences: `33348`
- Destinations: `dv360`
- State tuples: `snapshotting_finished/export_error`
- Commands seen: `glcli --env prod bifrost pizza --audience-id 33348 --org-id 310`

Representative alerts:
- Q2GR6SL6PJFO6B/Q1VX18N949X22X: 2026-06-19T07:51:04-07:00; ford_310; audience 33348; dv360; snapshotting_finished/export_error. ford (Marketing Production): Exports for audience 33348 failed with states: <(snapshotting_finished,export_error)>
  Runs: `33348-dv360_20851-scheduled__2026-06-19T00:00:00+00:00`

## Export Checks

- Checks: 1.
- States: `blocked`=1
- Blockers seen: `export_error`, `failed_export_count`

Check evidence:
- chk_q2gr6sl6pjfo6b_q1vx18n949x22x (Q2GR6SL6PJFO6B/Q1VX18N949X22X): state=`blocked`.
  Scope: env=prod; org=310; audience=33348; endpoint=app_dv360_1807; destination=dv360.
  Checked runs: `33348-dv360_20851-scheduled__2026-06-19T00:00:00+00:00`
  Command: `glcli --env prod bifrost pizza --audience-id 33348 --org-id 310`
  Blockers: `failed_export_count`, `export_error`
  Run 33348-dv360_20851-scheduled__2026-06-19T00:00:00+00:00: health=`blocked`; blockers=failed_export_count, export_error; created=2026-06-19T00:52:04.165821+00:00; snapshotting=snapshotting_finished; export=export_error; failed=12051.

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
