<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# cmegroup_3 snapshotting-error

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `new`
Tags: `triage:needs_review`
Incidents: [Q35YEO4G99PYRM](https://growthloop.pagerduty.com/incidents/Q35YEO4G99PYRM)
Alerts: 1

## Current Summary

cmegroup (default): Exports for audience 73 failed with states: <(snapshotting_error,no_batches)>

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `cmegroup_3`
- Audiences: `73`
- Destinations: `marketing_cloud`
- State tuples: `snapshotting_error/no_batches`
- Commands seen: `glcli --env cme bifrost pizza --audience-id 73 --org-id 3`

Representative alerts:
- Q35YEO4G99PYRM/Q2EOYMJL1SONFZ: 2026-06-22T07:30:00-07:00; cmegroup_3; audience 73; marketing_cloud; snapshotting_error/no_batches. cmegroup (default): Exports for audience 73 failed with states: <(snapshotting_error,no_batches)>
  Runs: `73-marketing_cloud_57-scheduled__2026-06-22T00:00:00+00:00`

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
