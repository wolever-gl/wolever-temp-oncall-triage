<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# 174 zero-success

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `resolved`
Tags: `triage:needs_review`, `resolved:export-healthy`
Incidents: [Q2B59NKI3YD7Z6](https://growthloop.pagerduty.com/incidents/Q2B59NKI3YD7Z6)
Alerts: 1

## Current Summary

Auto-resolved from Pizza export checks: all 1 alert-scoped export check(s) are healthy_closed with no blockers.

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `174`
- Audiences: `38727`
- Destinations: none
- State tuples: none
- Commands seen: `glcli --env prod bifrost pizza --audience-id 38727 --org-id 174`

Representative alerts:
- Q2B59NKI3YD7Z6/Q2YEP9URC7Q9VX: 2026-06-22T16:03:10-07:00; 174; audience 38727. NJ Devils (default) - Audience 38727: 0 successfull_exports from pizza tracker found 10 minutes after new export

## Export Checks

- Checks: 1.
- States: `healthy_closed`=1

Check evidence:
- chk_q2b59nki3yd7z6_q2yep9urc7q9vx (Q2B59NKI3YD7Z6/Q2YEP9URC7Q9VX): state=`healthy_closed`.
  Scope: env=prod; org=174; audience=38727.
  Command: `glcli --env prod bifrost pizza --audience-id 38727 --org-id 174`
  Run 38727-marketing_cloud_22833-scheduled__2026-06-23T10:00:00+00:00: health=`healthy`; created=2026-06-23T11:35:10.286241+00:00; snapshotting=snapshotting_finished_no_deltas; export=no_batches; failed=0.

## Recent Evidence

- Auto-resolved from Pizza export checks: all 1 alert-scoped export check(s) are healthy_closed with no blockers.
  Source: `check-exports`; kind: `export_check`; captured: `2026-06-23T13:55:09.696Z`.

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
