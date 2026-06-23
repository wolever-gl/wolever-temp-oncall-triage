<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# chghealthcare_395 client-sent-export-failure

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `resolved`
Tags: `triage:needs_review`, `resolved:export-healthy`
Incidents: [Q1WKE74FO46PA1](https://growthloop.pagerduty.com/incidents/Q1WKE74FO46PA1)
Alerts: 1

## Current Summary

Auto-resolved from Pizza export checks: all 1 alert-scoped export check(s) are healthy_closed with no blockers.

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `chghealthcare_395`
- Audiences: `22844`
- Destinations: none
- State tuples: none
- Commands seen: `glcli --env prod bifrost pizza --audience-id 22844 --org-id 395`

Representative alerts:
- Q1WKE74FO46PA1/Q33JPW9FSM42FB: 2026-06-20T16:31:18-07:00; chghealthcare_395; audience 22844. chghealthcare (Weatherby Healthcare) - Audience 22844: Audience Export failure for 22844 sent to client.

## Export Checks

- Checks: 1.
- States: `healthy_closed`=1

Check evidence:
- chk_q1wke74fo46pa1_q33jpw9fsm42fb (Q1WKE74FO46PA1/Q33JPW9FSM42FB): state=`healthy_closed`.
  Scope: env=prod; org=395; audience=22844.
  Command: `glcli --env prod bifrost pizza --audience-id 22844 --org-id 395`
  Run 22844-linkedin_ads_14276-scheduled__2026-06-21T23:00:00+00:00: health=`healthy`; created=2026-06-22T00:00:54.815172+00:00; snapshotting=snapshotting_finished; export=export_finished; failed=0.

## Recent Evidence

- Auto-resolved from Pizza export checks: all 1 alert-scoped export check(s) are healthy_closed with no blockers.
  Source: `check-exports`; kind: `export_check`; captured: `2026-06-22T21:57:33.076Z`.

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
