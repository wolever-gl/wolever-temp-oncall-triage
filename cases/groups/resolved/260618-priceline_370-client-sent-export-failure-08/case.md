<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# priceline_370 client-sent-export-failure

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `resolved`
Tags: `triage:needs_review`, `resolved:export-healthy`
Incidents: [Q2A87BAEMCU660](https://growthloop.pagerduty.com/incidents/Q2A87BAEMCU660)
Alerts: 1

## Current Summary

Auto-resolved from Pizza export checks: all 1 alert-scoped export check(s) are healthy_closed with no blockers.

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `priceline_370`
- Audiences: `18479`
- Destinations: none
- State tuples: none
- Commands seen: `glcli --env prod bifrost pizza --audience-id 18479 --org-id 370`

Representative alerts:
- Q2A87BAEMCU660/Q3URY9WI5O9THI: 2026-06-18T17:50:20-07:00; priceline_370; audience 18479. priceline (default) - Audience 18479: Audience Export failure for 18479 sent to client.

## Export Checks

- Checks: 1.
- States: `healthy_closed`=1

Check evidence:
- chk_q2a87baemcu660_q3ury9wi5o9thi (Q2A87BAEMCU660/Q3URY9WI5O9THI): state=`healthy_closed`.
  Scope: env=prod; org=370; audience=18479.
  Command: `glcli --env prod bifrost pizza --audience-id 18479 --org-id 370`
  Run 18479-microsoft_ads_11790-scheduled__2026-06-22T00:00:00+00:00: health=`healthy`; created=2026-06-22T00:23:51.781221+00:00; snapshotting=snapshotting_finished; export=export_finished; failed=0.

## Recent Evidence

- Auto-resolved from Pizza export checks: all 1 alert-scoped export check(s) are healthy_closed with no blockers.
  Source: `check-exports`; kind: `export_check`; captured: `2026-06-22T21:50:58.019Z`.

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
