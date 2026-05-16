<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# dexcom_478 no-batches

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `resolved`
Tags: `triage:needs_review`, `resolved:retry_succeeded`
Incidents: [Q2RVN4BPATQXSR](https://growthloop.pagerduty.com/incidents/Q2RVN4BPATQXSR)
Alerts: 1

## Current Summary

Resolved as retry/false alarm: alert reported snapshotting_finished/no_batches, but live Pizza shows the checked Dexcom Marketing Cloud run and later same-scope scheduled runs completed export_finished with zero failures/rejects.

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

## Recent Evidence

- Live Pizza shows the alert-scoped Dexcom Marketing Cloud run 36000-marketing_cloud_21959-scheduled__2026-05-14T15:30:00+00:00 is snapshotting_finished/export_finished with 1 row and 0 failures/rejects; later same-scope runs on 2026-05-15 and 2026-05-16 also export_finished with 0 failures/rejects. Treat as retry/false-positive recovery, not client/external failure.
  Source: `glcli pizza`; kind: `triage`; captured: `2026-05-16T20:33:59.914Z`.
  Command: `glcli --env prod bifrost pizza --audience-id 36000 --org-id 478 --format=json`

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
