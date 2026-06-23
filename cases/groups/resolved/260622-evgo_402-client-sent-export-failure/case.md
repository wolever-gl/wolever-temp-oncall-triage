<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# evgo_402 client-sent-export-failure

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `resolved`
Tags: `triage:needs_review`, `resolved:export-healthy`
Incidents: [Q2PX830CKT6WFR](https://growthloop.pagerduty.com/incidents/Q2PX830CKT6WFR)
Alerts: 1

## Current Summary

Auto-resolved from Pizza export checks: all 1 alert-scoped export check(s) are healthy_closed with no blockers.

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `evgo_402`
- Audiences: `14107`
- Destinations: none
- State tuples: none
- Commands seen: `glcli --env prod bifrost pizza --audience-id 14107 --org-id 402`

Representative alerts:
- Q2PX830CKT6WFR/Q09O21JZQO8Y07: 2026-06-22T17:25:23-07:00; evgo_402; audience 14107. EVgo (EVgo Prod) - Audience 14107: Audience Export failure for 14107 sent to client.

## Export Checks

- Checks: 1.
- States: `healthy_closed`=1

Check evidence:
- chk_q2px830ckt6wfr_q09o21jzqo8y07 (Q2PX830CKT6WFR/Q09O21JZQO8Y07): state=`healthy_closed`.
  Scope: env=prod; org=402; audience=14107.
  Command: `glcli --env prod bifrost pizza --audience-id 14107 --org-id 402`
  Run 14107-braze_17445-scheduled__2026-06-23T00:00:00+00:00: health=`healthy`; created=2026-06-23T00:25:39.887004+00:00; snapshotting=snapshotting_finished; export=export_finished; failed=0.

## Recent Evidence

- Auto-resolved from Pizza export checks: all 1 alert-scoped export check(s) are healthy_closed with no blockers.
  Source: `check-exports`; kind: `export_check`; captured: `2026-06-23T14:11:29.896Z`.

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
