# whirlpool_525 no-batches

State: `resolved`
Tags: `triage:needs_review`, `resolved:pd_closed_external`
Incidents: [Q3WZUE4915S6J4](https://growthloop.pagerduty.com/incidents/Q3WZUE4915S6J4)
Alerts: 2

## Current Summary

All attached PagerDuty incidents are resolved externally.

## Alert Scope

- Alert facts: 2 imported, 2 linked to this group.
- Orgs: `whirlpool_525`
- Audiences: `35609`, `35838`
- Destinations: `live_ramp_sftp`
- State tuples: `snapshotting_finished/no_batches`
- Commands seen: `glcli --env prod bifrost pizza --audience-id 35609 --org-id 525`, `glcli --env prod bifrost pizza --audience-id 35838 --org-id 525`

Representative alerts:
- Q3WZUE4915S6J4/Q0ICMTY4KJ5LTR: 2026-05-15T08:09:49-07:00; whirlpool_525; audience 35609; live_ramp_sftp; snapshotting_finished/no_batches. Whirlpool (KASA Prod): Exports for audience 35609 failed with states: <(snapshotting_finished,no_batches)>
  Runs: `35609-live_ramp_sftp_21569-scheduled__2026-05-14T00:00:00+00:00`
- Q3WZUE4915S6J4/Q16QNW2SCJ1514: 2026-05-15T08:09:51-07:00; whirlpool_525; audience 35838; live_ramp_sftp; snapshotting_finished/no_batches. Whirlpool (KASA Prod): Exports for audience 35838 failed with states: <(snapshotting_finished,no_batches)>
  Runs: `35838-live_ramp_sftp_21833-scheduled__2026-05-13T00:00:00+00:00`

## Recent Evidence

- All attached PagerDuty incidents are resolved externally. Attached incidents: Q3WZUE4915S6J4.
  Source: `pagerduty`; kind: `pd_sync`; captured: `2026-05-16T16:37:00.383Z`.

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
