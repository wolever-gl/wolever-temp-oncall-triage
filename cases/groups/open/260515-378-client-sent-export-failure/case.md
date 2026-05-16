# 378 client-sent-export-failure

State: `open`
Tags: `triage:needs_review`
Incidents: [Q33KFL1KESEMVC](https://growthloop.pagerduty.com/incidents/Q33KFL1KESEMVC)
Alerts: 1

## Current Summary

Cincinnati Reds (default) - Audience 34484: Audience Export failure for 34484 sent to client.

Latest scoped evidence points to a snapshotting precondition failure, not an Iterable delivery failure:

- Org: `378` / `cincinnatireds_378`
- Audience: `34484`
- Destination/export: `iterable_21078`
- Export run: `34484-iterable_21078-scheduled__2026-05-16T00:00:00+00:00`
- Latest pizza state: `snapshotting_error` / `no_batches`, `total rows=0`, `failure reason=base_table_not_empty_check_failed`
- Snapshotting logs show two attempts for this same scheduled run, both failing with `Base table not empty check failed`, `success=False`, `retry=False`.
- Ownership guess: likely client/source-data precondition issue rather than an obvious GrowthLoop product bug. Direct BigQuery validation against `reds-wheelhouse-prod.flywheel_system.model_564_b54e77` was blocked by missing query permission, so confidence is medium.
- Progress: blocked for the current run. No later healthy run was present in `glcli` output.

Useful commands:

```sh
glcli --env prod bifrost pizza --audience-id 34484 --org-id 378 --format=json

gcloud logging read 'resource.type="k8s_container" AND jsonPayload.organization_id="cincinnatireds_378" AND jsonPayload.internal_audience_id="34484" AND jsonPayload.export_run_id_hash="b1568a5bbc46b6dfb756d73e575dd043" AND timestamp>="2026-05-16T00:20:00Z" AND timestamp<="2026-05-16T00:35:00Z"' --project=flywheel-prod-328213
```

Useful logs:

- [Scoped run logs](https://console.cloud.google.com/logs/query;query=resource.type%3D%22k8s_container%22%0AjsonPayload.organization_id%3D%22cincinnatireds_378%22%0AjsonPayload.internal_audience_id%3D%2234484%22%0AjsonPayload.export_run_id_hash%3D%22b1568a5bbc46b6dfb756d73e575dd043%22%0Atimestamp%3E%3D%222026-05-16T00%3A20%3A00Z%22%0Atimestamp%3C%3D%222026-05-16T00%3A35%3A00Z%22;timeRange=2026-05-16T00:20:00Z%2F2026-05-16T00:35:00Z?project=flywheel-prod-328213)
- [Exact error log entries](https://console.cloud.google.com/logs/query;query=resource.type%3D%22k8s_container%22%0AinsertId%3D(%22kbbonx3mvzm3e4tw%22%20OR%20%220gamvmn5o20k3vvr%22);timeRange=2026-05-16T00:20:00Z%2F2026-05-16T00:35:00Z?project=flywheel-prod-328213)

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
