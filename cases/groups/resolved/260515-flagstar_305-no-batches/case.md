# flagstar_305 no-batches

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `resolved`
Tags: `triage:needs_review`, `resolved:pd_closed_external`
Incidents: [Q28HZS5TYC0NM9](https://growthloop.pagerduty.com/incidents/Q28HZS5TYC0NM9)
Alerts: 1

## Current Summary

All attached PagerDuty incidents are resolved externally.

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `flagstar_305`
- Audiences: `30059`
- Destinations: `marketing_cloud`
- State tuples: `snapshotting_finished/no_batches`
- Commands seen: `glcli --env prod bifrost pizza --audience-id 30059 --org-id 305`

Representative alerts:
- Q28HZS5TYC0NM9/Q056HXGKRMM8CI: 2026-05-15T08:23:14-07:00; flagstar_305; audience 30059; marketing_cloud; snapshotting_finished/no_batches. flagstar (default): Exports for audience 30059 failed with states: <(snapshotting_finished,no_batches)>
  Runs: `30059-marketing_cloud_18388-scheduled__2026-05-13T12:30:00+00:00`, `30059-marketing_cloud_18388-scheduled__2026-05-14T12:30:00+00:00`

## Recent Evidence

- All attached PagerDuty incidents are resolved externally. Attached incidents: Q28HZS5TYC0NM9.
  Source: `pagerduty`; kind: `pd_sync`; captured: `2026-05-16T16:37:00.364Z`.

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
