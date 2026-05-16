<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# chghealthcare_395 marketing-cloud export-error

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `resolved`
Tags: `triage:needs_review`, `resolved:export-healthy`
Incidents: [Q29I2IVNNVK80X](https://growthloop.pagerduty.com/incidents/Q29I2IVNNVK80X)
Alerts: 1

## Current Summary

Auto-resolved from Pizza export checks: all 1 alert-scoped export check(s) are healthy_closed with no blockers.

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `chghealthcare_395`
- Audiences: `36059`
- Destinations: `marketing_cloud`
- State tuples: `snapshotting_finished/export_error`
- Commands seen: `glcli --env prod bifrost pizza --audience-id 36059 --org-id 395`

Representative alerts:
- Q29I2IVNNVK80X/Q0LJEMVW0Z0UUI: 2026-05-15T07:41:43-07:00; chghealthcare_395; audience 36059; marketing_cloud; snapshotting_finished/export_error. chghealthcare (CompHealth): Exports for audience 36059 failed with states: <(snapshotting_finished,export_error)>
  Runs: `36059-marketing_cloud_21999-scheduled__2026-05-14T16:30:00+00:00`

## Export Checks

- Checks: 1.
- States: `healthy_closed`=1

Check evidence:
- chk_q29i2ivnnvk80x_q0ljemvw0z0uui (Q29I2IVNNVK80X/Q0LJEMVW0Z0UUI): state=`healthy_closed`.
  Scope: env=prod; org=395; audience=36059; endpoint=app_marketing_cloud_1135; destination=marketing_cloud.
  Checked runs: `36059-marketing_cloud_21999-scheduled__2026-05-14T16:30:00+00:00`
  Command: `glcli --env prod bifrost pizza --audience-id 36059 --org-id 395`
  Run 36059-marketing_cloud_21999-scheduled__2026-05-14T16:30:00+00:00: health=`healthy`; created=2026-05-15T22:55:29.266646+00:00; snapshotting=snapshotting_finished; export=export_finished; failed=0.

## Recent Evidence

- Auto-resolved from Pizza export checks: all 1 alert-scoped export check(s) are healthy_closed with no blockers.
  Source: `check-exports`; kind: `export_check`; captured: `2026-05-16T21:05:40.437Z`.

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
