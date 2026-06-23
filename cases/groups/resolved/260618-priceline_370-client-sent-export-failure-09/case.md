<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# priceline_370 client-sent-export-failure

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `resolved`
Tags: `triage:needs_review`, `resolved:export-healthy`
Incidents: [Q2H0B9ZSAV46KN](https://growthloop.pagerduty.com/incidents/Q2H0B9ZSAV46KN)
Alerts: 1

## Current Summary

Auto-resolved from Pizza export checks: all 1 alert-scoped export check(s) are healthy_closed with no blockers.

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `priceline_370`
- Audiences: `18472`
- Destinations: none
- State tuples: none
- Commands seen: `glcli --env prod bifrost pizza --audience-id 18472 --org-id 370`

Representative alerts:
- Q2H0B9ZSAV46KN/Q3525BH523596Y: 2026-06-18T17:47:31-07:00; priceline_370; audience 18472. priceline (default) - Audience 18472: Audience Export failure for 18472 sent to client.

## Export Checks

- Checks: 1.
- States: `healthy_closed`=1

Check evidence:
- chk_q2h0b9zsav46kn_q3525bh523596y (Q2H0B9ZSAV46KN/Q3525BH523596Y): state=`healthy_closed`.
  Scope: env=prod; org=370; audience=18472.
  Command: `glcli --env prod bifrost pizza --audience-id 18472 --org-id 370`
  Run 18472-microsoft_ads_11804-scheduled__2026-06-22T00:00:00+00:00: health=`healthy`; created=2026-06-22T00:19:38.654944+00:00; snapshotting=snapshotting_finished; export=export_finished; failed=0.

## Recent Evidence

- Auto-resolved from Pizza export checks: all 1 alert-scoped export check(s) are healthy_closed with no blockers.
  Source: `check-exports`; kind: `export_check`; captured: `2026-06-22T21:51:22.856Z`.

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
