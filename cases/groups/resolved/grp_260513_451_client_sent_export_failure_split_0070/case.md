<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# 451 client-sent-export-failure split

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `resolved`
Tags: `triage:needs_review`, `resolved:merged`
Incidents: [Q3XQABQFPPVNT5](https://growthloop.pagerduty.com/incidents/Q3XQABQFPPVNT5)
Alerts: 1

## Current Summary

Merged into 260514-451-campaign-manager-360-export-error: SignalRoute 981 client-sent alert is the notification counterpart of the Campaign Manager 360 export-error case; latest Pizza still shows 981 export_error.

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `451`
- Audiences: `981`
- Destinations: none
- State tuples: none
- Commands seen: `glcli --env prod bifrost pizza --audience-id 981 --org-id 451`

Representative alerts:
- Q3XQABQFPPVNT5/Q0XF5RYJ4EGXJZ: 2026-05-13T17:01:38-07:00; 451; audience 981. ASU Enterprise Partners (General - ASU Data) - SignalRoute 981: SignalRoute Export failure for 981 sent to client.

## Export Checks

- Checks: 1.
- States: `blocked`=1
- Blockers seen: `export_error`, `failed_export_count`

Check evidence:
- chk_q3xqabqfppvnt5_q0xf5ryj4egxjz (Q3XQABQFPPVNT5/Q0XF5RYJ4EGXJZ): state=`blocked`.
  Scope: env=prod; org=451; audience=981.
  Command: `glcli --env prod bifrost pizza --audience-id 981 --org-id 451`
  Blockers: `failed_export_count`, `export_error`
  Run 981-campaign_manager_360_object_981-scheduled__2026-05-16T00:00:00+00:00: health=`blocked`; blockers=failed_export_count, export_error; created=2026-05-17T00:01:49.876651+00:00; snapshotting=snapshotting_finished; export=export_error; failed=1235.

## Recent Evidence

- SignalRoute 981 remains failing: latest Pizza row is 2026-05-16 00:01:26 UTC, run 981-campaign_manager_360_object_981-scheduled__2026-05-15T00:00:00+00:00, snapshotting_finished/export_error with 1299 failures and zero rejects.
  Source: `glcli bifrost pizza`; kind: `pizza`; captured: `2026-05-16T22:08:40.015Z`.
  Command: `glcli --env prod bifrost pizza --audience-id 981 --org-id 451 --format json`

## Next Action

Follow target group 260514-451-campaign-manager-360-export-error.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
