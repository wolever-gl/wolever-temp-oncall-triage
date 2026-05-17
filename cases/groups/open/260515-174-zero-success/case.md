<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# 174 zero-success

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `open`
Tags: `triage:needs_review`
Incidents: [Q20XI8KK8YWADB](https://growthloop.pagerduty.com/incidents/Q20XI8KK8YWADB)
Alerts: 1

## Current Summary

NJ Devils (default) - Audience 36378: 0 successfull_exports from pizza tracker found 10 minutes after new export

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

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
