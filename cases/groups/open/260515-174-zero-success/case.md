<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# 174 zero-success

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `open`
Tags: `triage:needs_review`, `triage:needs_recovery_evidence`, `triage:destination_failures_remain`
Incidents: [Q20XI8KK8YWADB](https://growthloop.pagerduty.com/incidents/Q20XI8KK8YWADB)
Alerts: 1

## Current Summary

Zero-success condition recovered, but not cleanly enough to auto-close. Audience 36378 produced successful Marketing Cloud exports after the alert, including the alert-time webapp run and a later scheduled run, but both evidence and preflight show nonzero failed rows. Keep open for destination-failure review or an explicit policy decision that small row-level SFMC failures are acceptable for this alert type.

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

- Investigated audience 36378 zero-success alert. The alert fired at 2026-05-15T13:42:11Z, about ten minutes after run 36378-marketing_cloud_22179-webapp__2026-05-15T13:32:06+00:00 started; that run later completed snapshotting_finished/export_finished with 44,786 adds, 3 failures, and 5 rejects. Logs show the remaining failures were Marketing Cloud row/write errors such as connection reset and could-not-add-record warnings, not a continued zero-success condition. The 2026-05-16 scheduled run also completed export_finished with 5,121 adds, 58 removes, and 1 failure. Keep open for destination-failure review because preflight correctly blocks on nonzero failed_export_count.
  Source: `zero-success-investigation`; kind: `runbook`; captured: `2026-05-17T16:42:54.800Z`.
  Command: `gcloud logging read scoped to org=njdevils_174 audience_id=36378 Marketing Cloud batch ids 8a0d0056-dc23-4e4c-a7e3-4ecf04cf20c0 and 2df0add1-f633-4427-acdf-86953b5d0f74`
- Reopened: previous closure was too aggressive. The later runs had export_finished but nonzero failed rows, and the case was closed without runbook-level evidence that the zero-success condition and any delta/export failure risk were safely recovered. Need scoped evidence for the alert run family before resolving.
  Source: `runbook review`; kind: `triage`; captured: `2026-05-17T16:37:00.561Z`.
- Audience 36378 has successful exports after the zero-success alert. Pizza shows 36378-marketing_cloud_22179-webapp__2026-05-15T13:32:06+00:00 completed with snapshotting_finished/export_finished, 44,786 adds, 3 failures, and 5 rejects; the later scheduled run 2026-05-16T10:00:00+00:00 also completed export_finished with 5,121 adds, 58 removes, and 1 failure. This is no longer a zero-success condition.
  Source: `glcli bifrost pizza`; kind: `pizza`; captured: `2026-05-17T16:30:05.536Z`.
  Command: `PATH=/Users/wolever/.local/share/mise/installs/gcloud/562.0.0/bin:$PATH glcli --env prod bifrost pizza --audience-id 36378 --org-id 174 --format json`

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
