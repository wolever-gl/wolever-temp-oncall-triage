<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# 174 snapshotting-error

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `new`
Tags: `triage:needs_review`
Incidents: [Q20XI8KK8YWADB](https://growthloop.pagerduty.com/incidents/Q20XI8KK8YWADB)
Alerts: 1

## Current Summary

NJ Devils (default): Exports for audience 23746 failed with states: <(snapshotting_error,no_batches)>

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `174`
- Audiences: `23746`
- Destinations: `marketing_cloud`
- State tuples: `snapshotting_error/no_batches`
- Commands seen: `glcli --env prod bifrost pizza --audience-id 23746 --org-id 174`

Representative alerts:
- Q20XI8KK8YWADB/Q34FUGOIWL0YYV: 2026-05-15T08:24:59-07:00; 174; audience 23746; marketing_cloud; snapshotting_error/no_batches. NJ Devils (default): Exports for audience 23746 failed with states: <(snapshotting_error,no_batches)>
  Runs: `23746-marketing_cloud_14765-scheduled__2026-05-06T00:00:00+00:00`, `23746-marketing_cloud_14765-scheduled__2026-05-13T00:00:00+00:00`

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
