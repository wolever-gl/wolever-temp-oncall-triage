<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# ford_310 dv360 export-error

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `open`
Tags: `triage:needs_review`
Incidents: [Q1Q6JC0PWT03MJ](https://growthloop.pagerduty.com/incidents/Q1Q6JC0PWT03MJ)
Alerts: 1

## Current Summary

ford (Marketing Production): Exports for audience 34059 failed with states: <(snapshotting_finished,export_error)>

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `ford_310`
- Audiences: `34059`
- Destinations: `dv360`
- State tuples: `snapshotting_finished/export_error`
- Commands seen: `glcli --env prod bifrost pizza --audience-id 34059 --org-id 310`

Representative alerts:
- Q1Q6JC0PWT03MJ/Q3Z23KFNFF51K8: 2026-06-19T07:51:06-07:00; ford_310; audience 34059; dv360; snapshotting_finished/export_error. ford (Marketing Production): Exports for audience 34059 failed with states: <(snapshotting_finished,export_error)>
  Runs: `34059-dv360_20857-scheduled__2026-06-19T00:00:00+00:00`

## Export Checks

- Checks: 1.
- States: `blocked`=1
- Blockers seen: `export_error`, `failed_export_count`

Check evidence:
- chk_q1q6jc0pwt03mj_q3z23kfnff51k8 (Q1Q6JC0PWT03MJ/Q3Z23KFNFF51K8): state=`blocked`.
  Scope: env=prod; org=310; audience=34059; endpoint=app_dv360_1807; destination=dv360.
  Checked runs: `34059-dv360_20857-scheduled__2026-06-19T00:00:00+00:00`
  Command: `glcli --env prod bifrost pizza --audience-id 34059 --org-id 310`
  Blockers: `failed_export_count`, `export_error`
  Run 34059-dv360_20857-scheduled__2026-06-19T00:00:00+00:00: health=`blocked`; blockers=failed_export_count, export_error; created=2026-06-19T01:16:33.930975+00:00; snapshotting=snapshotting_finished; export=export_error; failed=50371.

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
