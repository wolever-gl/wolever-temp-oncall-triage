# 378 client-sent-export-failure

State: `open`
Tags: `triage:needs_review`
Incidents: [Q33KFL1KESEMVC](https://growthloop.pagerduty.com/incidents/Q33KFL1KESEMVC)
Alerts: 1

## Current Summary

Cincinnati Reds (default) - Audience 34484: Audience Export failure for 34484 sent to client.

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `378`
- Audiences: `34484`
- Destinations: none
- State tuples: none
- Commands seen: `glcli --env prod bifrost pizza --audience-id 34484 --org-id 378`

Representative alerts:
- Q33KFL1KESEMVC/Q33GT851B14YV7: 2026-05-15T17:25:50-07:00; 378; audience 34484. Cincinnati Reds (default) - Audience 34484: Audience Export failure for 34484 sent to client.

## Export Checks

- Checks: 1.
- States: `blocked`=1
- Blockers seen: `missing_run_identity`

Check evidence:
- chk_q33kfl1kesemvc_q33gt851b14yv7 (Q33KFL1KESEMVC/Q33GT851B14YV7): state=`blocked`.
  Scope: env=prod; org=378; audience=34484.
  Command: `glcli --env prod bifrost pizza --audience-id 34484 --org-id 378`
  Blockers: `missing_run_identity`

## Recent Evidence

- For Cincinnati Reds org 378 audience 34484, glcli shows latest run 34484-iterable_21078-scheduled__2026-05-16T00:00:00+00:00 created 2026-05-16 00:25:15 UTC ended snapshotting_error/no_batches with total rows=0 and failure reason base_table_not_empty_check_failed. Scoped logs for org cincinnatireds_378, audience 34484, export_run_id_hash b1568a5bbc46b6dfb756d73e575dd043, 2026-05-16T00:20:00Z..00:35:00Z show two snapshotting attempts (snapshot_run_id 5459d8b1-a4dc-4bb3-a7d6-4155928ec997 at 00:25:31Z and 9fad0940-ef10-4580-bb97-a4db1a9d30c1 at 00:31:45Z) both failing: Core snapshotting failed / Base table not empty check failed / success=False retry=False for export_id iterable_21078. Direct BQ validation was attempted but credentials lack query permission on reds-wheelhouse-prod.flywheel_system.model_564_b54e77.
  Source: `glcli + scoped gcloud logs`; kind: `triage`; captured: `2026-05-16T16:48:07.812Z`.

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
