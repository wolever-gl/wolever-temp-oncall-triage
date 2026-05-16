<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# chghealthcare_395 marketing-cloud export-error

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `new`
Tags: `triage:needs_review`
Incidents: [Q29I2IVNNVK80X](https://growthloop.pagerduty.com/incidents/Q29I2IVNNVK80X)
Alerts: 1

## Current Summary

chghealthcare (CompHealth): Exports for audience 36059 failed with states: <(snapshotting_finished,export_error)>

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

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
