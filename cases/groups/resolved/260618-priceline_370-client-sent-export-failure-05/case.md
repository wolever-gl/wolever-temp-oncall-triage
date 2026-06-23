<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# priceline_370 client-sent-export-failure

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `resolved`
Tags: `triage:needs_review`, `resolved:export-healthy`
Incidents: [Q1950VJIJROFR2](https://growthloop.pagerduty.com/incidents/Q1950VJIJROFR2)
Alerts: 1

## Current Summary

Auto-resolved from Pizza export checks: all 1 alert-scoped export check(s) are healthy_closed with no blockers.

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `priceline_370`
- Audiences: `18483`
- Destinations: none
- State tuples: none
- Commands seen: `glcli --env prod bifrost pizza --audience-id 18483 --org-id 370`

Representative alerts:
- Q1950VJIJROFR2/Q2KIE7HO5GSX4G: 2026-06-18T18:19:59-07:00; priceline_370; audience 18483. priceline (default) - Audience 18483: Audience Export failure for 18483 sent to client.

## Export Checks

- Checks: 1.
- States: `healthy_closed`=1

Check evidence:
- chk_q1950vjijrofr2_q2kie7ho5gsx4g (Q1950VJIJROFR2/Q2KIE7HO5GSX4G): state=`healthy_closed`.
  Scope: env=prod; org=370; audience=18483.
  Command: `glcli --env prod bifrost pizza --audience-id 18483 --org-id 370`
  Run 18483-microsoft_ads_11782-scheduled__2026-06-22T00:00:00+00:00: health=`healthy`; created=2026-06-22T00:26:03.397086+00:00; snapshotting=snapshotting_finished; export=export_finished; failed=0.

## Recent Evidence

- Auto-resolved from Pizza export checks: all 1 alert-scoped export check(s) are healthy_closed with no blockers.
  Source: `check-exports`; kind: `export_check`; captured: `2026-06-22T21:49:55.263Z`.

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
