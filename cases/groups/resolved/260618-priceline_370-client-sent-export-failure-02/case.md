<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# priceline_370 client-sent-export-failure

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `resolved`
Tags: `triage:needs_review`, `resolved:export-healthy`
Incidents: [Q06BXI4V8NFY0H](https://growthloop.pagerduty.com/incidents/Q06BXI4V8NFY0H)
Alerts: 1

## Current Summary

Auto-resolved from Pizza export checks: all 1 alert-scoped export check(s) are healthy_closed with no blockers.

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `priceline_370`
- Audiences: `28647`
- Destinations: none
- State tuples: none
- Commands seen: `glcli --env prod bifrost pizza --audience-id 28647 --org-id 370`

Representative alerts:
- Q06BXI4V8NFY0H/Q1O1HK7IP3937I: 2026-06-18T17:45:44-07:00; priceline_370; audience 28647. priceline (default) - Audience 28647: Audience Export failure for 28647 sent to client.

## Export Checks

- Checks: 1.
- States: `healthy_closed`=1

Check evidence:
- chk_q06bxi4v8nfy0h_q1o1hk7ip3937i (Q06BXI4V8NFY0H/Q1O1HK7IP3937I): state=`healthy_closed`.
  Scope: env=prod; org=370; audience=28647.
  Command: `glcli --env prod bifrost pizza --audience-id 28647 --org-id 370`
  Run 28647-big_query_17506-scheduled__2026-06-22T00:00:00+00:00: health=`healthy`; created=2026-06-22T01:18:32.977618+00:00; snapshotting=snapshotting_finished; export=export_finished; failed=0.

## Recent Evidence

- Auto-resolved from Pizza export checks: all 1 alert-scoped export check(s) are healthy_closed with no blockers.
  Source: `check-exports`; kind: `export_check`; captured: `2026-06-22T21:48:44.505Z`.

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
