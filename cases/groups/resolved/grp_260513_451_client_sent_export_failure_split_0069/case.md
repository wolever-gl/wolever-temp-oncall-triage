<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# 451 client-sent-export-failure split

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `resolved`
Tags: `triage:needs_review`, `evidence:retry-succeeded`
Incidents: [Q3XQABQFPPVNT5](https://growthloop.pagerduty.com/incidents/Q3XQABQFPPVNT5)
Alerts: 1

## Current Summary

Resolved: ASU SignalRoute 984 has a later Campaign Manager 360 export_finished run after the client-sent alert.

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `451`
- Audiences: `984`
- Destinations: none
- State tuples: none
- Commands seen: `glcli --env prod bifrost pizza --audience-id 984 --org-id 451`

Representative alerts:
- Q3XQABQFPPVNT5/Q1X4ZB5GQBRSU1: 2026-05-13T17:03:15-07:00; 451; audience 984. ASU Enterprise Partners (General - ASU Data) - SignalRoute 984: SignalRoute Export failure for 984 sent to client.

## Export Checks

- Checks: 1.
- States: `healthy_closed`=1

Check evidence:
- chk_q3xqabqfppvnt5_q1x4zb5gqbrsu1 (Q3XQABQFPPVNT5/Q1X4ZB5GQBRSU1): state=`healthy_closed`.
  Scope: env=prod; org=451; audience=984.
  Command: `glcli --env prod bifrost pizza --audience-id 984 --org-id 451`
  Run 984-campaign_manager_360_object_984-scheduled__2026-05-15T00:00:00+00:00: health=`healthy`; created=2026-05-16T00:02:18.543254+00:00; snapshotting=snapshotting_finished; export=export_finished; failed=0.

## Recent Evidence

- SignalRoute 984 recovered after the client-sent alert: latest Pizza row is 2026-05-16 00:02:18 UTC, run 984-campaign_manager_360_object_984-scheduled__2026-05-15T00:00:00+00:00, snapshotting_finished/export_finished with zero failures. Earlier 2026-05-13 and 2026-05-14 scheduled runs had export_error.
  Source: `glcli bifrost pizza`; kind: `pizza`; captured: `2026-05-16T22:08:38.568Z`.
  Command: `glcli --env prod bifrost pizza --audience-id 984 --org-id 451 --format json`

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
