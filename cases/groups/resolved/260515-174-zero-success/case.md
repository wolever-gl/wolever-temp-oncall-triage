<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# 174 zero-success

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `resolved`
Tags: `triage:needs_review`, `resolved:recovered`
Incidents: [Q20XI8KK8YWADB](https://growthloop.pagerduty.com/incidents/Q20XI8KK8YWADB)
Alerts: 1

## Current Summary

Resolved: NJ Devils audience 36378 is no longer zero-success; subsequent Marketing Cloud runs completed export_finished with thousands of adds after the alert.

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `174`
- Audiences: `36378`
- Destinations: none
- State tuples: none
- Commands seen: `glcli --env prod bifrost pizza --audience-id 36378 --org-id 174`

Representative alerts:
- Q20XI8KK8YWADB/Q1V8K8GS8KTX2I: 2026-05-15T06:42:11-07:00; 174; audience 36378. NJ Devils (default) - Audience 36378: 0 successfull_exports from pizza tracker found 10 minutes after new export

## Export Checks

- Checks: 1.
- States: `blocked`=1
- Blockers seen: `failed_export_count`

Check evidence:
- chk_q20xi8kk8ywadb_q1v8k8gs8ktx2i (Q20XI8KK8YWADB/Q1V8K8GS8KTX2I): state=`blocked`.
  Scope: env=prod; org=174; audience=36378.
  Command: `glcli --env prod bifrost pizza --audience-id 36378 --org-id 174`
  Blockers: `failed_export_count`
  Run 36378-marketing_cloud_22179-scheduled__2026-05-16T10:00:00+00:00: health=`blocked`; blockers=failed_export_count; created=2026-05-16T11:51:48.300382+00:00; snapshotting=snapshotting_finished; export=export_finished; failed=1.

## Recent Evidence

- Audience 36378 has successful exports after the zero-success alert. Pizza shows 36378-marketing_cloud_22179-webapp__2026-05-15T13:32:06+00:00 completed with snapshotting_finished/export_finished, 44,786 adds, 3 failures, and 5 rejects; the later scheduled run 2026-05-16T10:00:00+00:00 also completed export_finished with 5,121 adds, 58 removes, and 1 failure. This is no longer a zero-success condition.
  Source: `glcli bifrost pizza`; kind: `pizza`; captured: `2026-05-17T16:30:05.536Z`.
  Command: `PATH=/Users/wolever/.local/share/mise/installs/gcloud/562.0.0/bin:$PATH glcli --env prod bifrost pizza --audience-id 36378 --org-id 174 --format json`

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
