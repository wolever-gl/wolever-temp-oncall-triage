<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# 451 salesforce-audience export-error

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `waiting`
Tags: `triage:needs_review`, `triage:export-error`, `waiting:client_salesforce_password_expired`
Incidents: [Q3XQABQFPPVNT5](https://growthloop.pagerduty.com/incidents/Q3XQABQFPPVNT5)
Alerts: 4

## Current Summary

Waiting on ASU/client Salesforce credential renewal: audience 31982 Salesforce Audience exports are failing because Salesforce returns INVALID_OPERATION_WITH_EXPIRED_PASSWORD for the ASU UAT sandbox. Pizza shows daily failures since the 2026-05-14 scheduled run; retrying before the Salesforce password/session is reset is expected to fail.

## Alert Scope

- Alert facts: 4 imported, 4 linked to this group.
- Orgs: `451`
- Audiences: `31982`, `981`, `984`
- Destinations: `salesforce_audience`
- State tuples: `snapshotting_finished/export_error`
- Commands seen: `glcli --env prod bifrost pizza --audience-id 31982 --org-id 451`, `glcli --env prod bifrost pizza --audience-id 981 --org-id 451`, `glcli --env prod bifrost pizza --audience-id 984 --org-id 451`

Representative alerts:
- Q3XQABQFPPVNT5/Q0XF5RYJ4EGXJZ: 2026-05-13T17:01:38-07:00; 451; audience 981. ASU Enterprise Partners (General - ASU Data) - SignalRoute 981: SignalRoute Export failure for 981 sent to client.
- Q3XQABQFPPVNT5/Q1X4ZB5GQBRSU1: 2026-05-13T17:03:15-07:00; 451; audience 984. ASU Enterprise Partners (General - ASU Data) - SignalRoute 984: SignalRoute Export failure for 984 sent to client.
- Q3XQABQFPPVNT5/Q20R8OKEQNMTTK: 2026-05-13T19:19:06-07:00; 451; audience 31982. ASU Enterprise Partners (Restricted) - Audience 31982: Audience Export failure for 31982 sent to client.
- Q3XQABQFPPVNT5/Q07JGZI66746XA: 2026-05-14T08:15:15-07:00; 451; audience 31982; salesforce_audience; snapshotting_finished/export_error. ASU Enterprise Partners (Restricted): Exports for audience 31982 failed with states: <(snapshotting_finished,export_error)>
  Runs: `31982-salesforce_audience_21336-scheduled__2026-05-14T00:00:00+00:00`

## Export Checks

- Checks: 4.
- States: `blocked`=1, `healthy_closed`=2, `open`=1
- Blockers seen: `evidence_unavailable`, `export_error`, `failed_export_count`

Check evidence:
- chk_q3xqabqfppvnt5_q07jgzi66746xa (Q3XQABQFPPVNT5/Q07JGZI66746XA): state=`blocked`.
  Scope: env=prod; org=451; audience=31982; endpoint=app_salesforce_audience_2196; destination=salesforce_audience.
  Checked runs: `31982-salesforce_audience_21336-scheduled__2026-05-14T00:00:00+00:00`
  Command: `glcli --env prod bifrost pizza --audience-id 31982 --org-id 451`
  Blockers: `failed_export_count`, `export_error`
  Run 31982-salesforce_audience_21336-scheduled__2026-05-14T00:00:00+00:00: health=`blocked`; blockers=failed_export_count, export_error; created=2026-05-14T01:11:00.672570+00:00; snapshotting=snapshotting_finished; export=export_error; failed=32.
- chk_q3xqabqfppvnt5_q0xf5ryj4egxjz (Q3XQABQFPPVNT5/Q0XF5RYJ4EGXJZ): state=`healthy_closed`.
  Scope: env=prod; org=451; audience=981.
  Command: `glcli --env prod bifrost pizza --audience-id 981 --org-id 451`
  Run 981-campaign_manager_360_object_981-scheduled__2026-06-14T00:00:00+00:00: health=`healthy`; created=2026-06-15T00:02:57.790390+00:00; snapshotting=snapshotting_finished_no_deltas; export=no_batches; failed=0.
- chk_q3xqabqfppvnt5_q1x4zb5gqbrsu1 (Q3XQABQFPPVNT5/Q1X4ZB5GQBRSU1): state=`healthy_closed`.
  Scope: env=prod; org=451; audience=984.
  Command: `glcli --env prod bifrost pizza --audience-id 984 --org-id 451`
  Run 984-campaign_manager_360_object_984-scheduled__2026-05-15T00:00:00+00:00: health=`healthy`; created=2026-05-16T00:02:18.543254+00:00; snapshotting=snapshotting_finished; export=export_finished; failed=0.
- chk_q3xqabqfppvnt5_q20r8okeqnmttk (Q3XQABQFPPVNT5/Q20R8OKEQNMTTK): state=`open`, next_check_at=`2026-06-15T16:41:59.827Z`.
  Scope: env=prod; org=451; audience=31982.
  Command: `glcli --env prod bifrost pizza --audience-id 31982 --org-id 451`
  Blockers: `evidence_unavailable`

## Recent Evidence

- Latest ASU Salesforce Audience run for audience 31982 fails because Salesforce returns INVALID_OPERATION_WITH_EXPIRED_PASSWORD from advancement--uat.sandbox.my.salesforce.com. Logs for batch 859362f6-ebbe-490f-9114-30fc9aff8f81 show SalesforceExpiredSession 401 with message "Your password has expired. Please reset your password." This is a client/Salesforce credential issue; retrying before ASU renews the Salesforce password/session should keep failing.
  Source: `flywheel-prod-328213 bifrost logs`; kind: `gcloud_logs`; captured: `2026-05-17T16:22:43.659Z`.
  Command: `gcloud logging read resource.type="k8s_container" AND resource.labels.namespace_name="bifrost" AND timestamp>="2026-05-17T01:17:00Z" AND timestamp<="2026-05-17T01:25:00Z" AND jsonPayload.batch_id="859362f6-ebbe-490f-9114-30fc9aff8f81" --project=flywheel-prod-328213`
- Pizza confirms audience 31982 daily Salesforce Audience exports succeeded through the 2026-05-13 scheduled run, then failed every scheduled run from 2026-05-14 through the latest 2026-05-17 run. Latest row is 2026-05-17 01:18:17 UTC, run 31982-salesforce_audience_21336-scheduled__2026-05-17T00:00:00+00:00, snapshotting_finished/export_error with 48 failures and 0 adds.
  Source: `glcli bifrost pizza`; kind: `pizza`; captured: `2026-05-17T16:22:43.659Z`.
  Command: `PATH=/Users/wolever/.local/share/mise/installs/gcloud/562.0.0/bin:$PATH glcli --env prod bifrost pizza --audience-id 31982 --org-id 451 --format json`
- Audience 31982 still fails on latest Pizza: 2026-05-16 00:18:45 UTC, run 31982-salesforce_audience_21336-scheduled__2026-05-16T00:00:00+00:00, snapshotting_finished/export_error with 14 failures.
  Source: `glcli bifrost pizza`; kind: `pizza`; captured: `2026-05-16T22:09:15.603Z`.
  Command: `glcli --env prod bifrost pizza --audience-id 31982 --org-id 451 --format json`

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
