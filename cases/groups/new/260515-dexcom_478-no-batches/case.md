# dexcom_478 no-batches

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `new`
Tags: `triage:needs_review`
Incidents: [Q2RVN4BPATQXSR](https://growthloop.pagerduty.com/incidents/Q2RVN4BPATQXSR)
Alerts: 1

## Current Summary

dexcom (Production): Exports for audience 36000 failed with states: <(snapshotting_finished,no_batches)>

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `dexcom_478`
- Audiences: `36000`
- Destinations: `marketing_cloud`
- State tuples: `snapshotting_finished/no_batches`
- Commands seen: `glcli --env prod bifrost pizza --audience-id 36000 --org-id 478`

Representative alerts:
- Q2RVN4BPATQXSR/Q2NVEG55VM3680: 2026-05-15T08:05:27-07:00; dexcom_478; audience 36000; marketing_cloud; snapshotting_finished/no_batches. dexcom (Production): Exports for audience 36000 failed with states: <(snapshotting_finished,no_batches)>
  Runs: `36000-marketing_cloud_21959-scheduled__2026-05-14T15:30:00+00:00`

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
