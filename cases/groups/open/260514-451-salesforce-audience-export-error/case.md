<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# 451 salesforce-audience export-error

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `open`
Tags: `triage:needs_review`, `triage:export-error`
Incidents: [Q3XQABQFPPVNT5](https://growthloop.pagerduty.com/incidents/Q3XQABQFPPVNT5)
Alerts: 4

## Current Summary

Needs investigation: ASU audience 31982 Salesforce audience export continues to fail; latest Pizza is snapshotting_finished/export_error with 14 failures.

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
- States: `blocked`=3, `healthy_closed`=1
- Blockers seen: `export_error`, `failed_export_count`

Check evidence:
- chk_q3xqabqfppvnt5_q07jgzi66746xa (Q3XQABQFPPVNT5/Q07JGZI66746XA): state=`blocked`.
  Scope: env=prod; org=451; audience=31982; endpoint=app_salesforce_audience_2196; destination=salesforce_audience.
  Checked runs: `31982-salesforce_audience_21336-scheduled__2026-05-14T00:00:00+00:00`
  Command: `glcli --env prod bifrost pizza --audience-id 31982 --org-id 451`
  Blockers: `failed_export_count`, `export_error`
  Run 31982-salesforce_audience_21336-scheduled__2026-05-14T00:00:00+00:00: health=`blocked`; blockers=failed_export_count, export_error; created=2026-05-14T01:11:00.672570+00:00; snapshotting=snapshotting_finished; export=export_error; failed=32.
- chk_q3xqabqfppvnt5_q0xf5ryj4egxjz (Q3XQABQFPPVNT5/Q0XF5RYJ4EGXJZ): state=`blocked`.
  Scope: env=prod; org=451; audience=981.
  Command: `glcli --env prod bifrost pizza --audience-id 981 --org-id 451`
  Blockers: `failed_export_count`, `export_error`
  Run 981-campaign_manager_360_object_981-scheduled__2026-05-15T00:00:00+00:00: health=`blocked`; blockers=failed_export_count, export_error; created=2026-05-16T00:01:26.085781+00:00; snapshotting=snapshotting_finished; export=export_error; failed=1299.
- chk_q3xqabqfppvnt5_q1x4zb5gqbrsu1 (Q3XQABQFPPVNT5/Q1X4ZB5GQBRSU1): state=`healthy_closed`.
  Scope: env=prod; org=451; audience=984.
  Command: `glcli --env prod bifrost pizza --audience-id 984 --org-id 451`
  Run 984-campaign_manager_360_object_984-scheduled__2026-05-15T00:00:00+00:00: health=`healthy`; created=2026-05-16T00:02:18.543254+00:00; snapshotting=snapshotting_finished; export=export_finished; failed=0.
- chk_q3xqabqfppvnt5_q20r8okeqnmttk (Q3XQABQFPPVNT5/Q20R8OKEQNMTTK): state=`blocked`.
  Scope: env=prod; org=451; audience=31982.
  Command: `glcli --env prod bifrost pizza --audience-id 31982 --org-id 451`
  Blockers: `failed_export_count`, `export_error`
  Run 31982-salesforce_audience_21336-scheduled__2026-05-16T00:00:00+00:00: health=`blocked`; blockers=failed_export_count, export_error; created=2026-05-16T00:18:45.617445+00:00; snapshotting=snapshotting_finished; export=export_error; failed=14.

## Recent Evidence

- Audience 31982 still fails on latest Pizza: 2026-05-16 00:18:45 UTC, run 31982-salesforce_audience_21336-scheduled__2026-05-16T00:00:00+00:00, snapshotting_finished/export_error with 14 failures.
  Source: `glcli bifrost pizza`; kind: `pizza`; captured: `2026-05-16T22:09:15.603Z`.
  Command: `glcli --env prod bifrost pizza --audience-id 31982 --org-id 451 --format json`

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
