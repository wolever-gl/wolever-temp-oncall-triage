<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# ford_310 client-sent-export-failure

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `resolved`
Tags: `triage:needs_review`, `resolved:export-healthy`
Incidents: [Q11M3VVXNRHVT8](https://growthloop.pagerduty.com/incidents/Q11M3VVXNRHVT8)
Alerts: 1

## Current Summary

Auto-resolved from Pizza export checks: all 1 alert-scoped export check(s) are healthy_closed with no blockers.

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `ford_310`
- Audiences: `33346`
- Destinations: none
- State tuples: none
- Commands seen: `glcli --env prod bifrost pizza --audience-id 33346 --org-id 310`

Representative alerts:
- Q11M3VVXNRHVT8/Q0QRXPCFMC6QRD: 2026-06-19T21:43:40-07:00; ford_310; audience 33346. ford (Marketing Production) - Audience 33346: Audience Export failure for 33346 sent to client.

## Export Checks

- Checks: 1.
- States: `healthy_closed`=1

Check evidence:
- chk_q11m3vvxnrhvt8_q0qrxpcfmc6qrd (Q11M3VVXNRHVT8/Q0QRXPCFMC6QRD): state=`healthy_closed`.
  Scope: env=prod; org=310; audience=33346.
  Command: `glcli --env prod bifrost pizza --audience-id 33346 --org-id 310`
  Run 33346-the_trade_desk_crm_20847-scheduled__2026-06-22T00:00:00+00:00: health=`healthy`; created=2026-06-22T00:30:48.766790+00:00; snapshotting=snapshotting_finished; export=export_finished; failed=0.

## Recent Evidence

- Auto-resolved from Pizza export checks: all 1 alert-scoped export check(s) are healthy_closed with no blockers.
  Source: `check-exports`; kind: `export_check`; captured: `2026-06-22T21:54:10.136Z`.

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
