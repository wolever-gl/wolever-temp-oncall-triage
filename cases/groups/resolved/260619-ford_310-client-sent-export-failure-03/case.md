<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# ford_310 client-sent-export-failure

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `resolved`
Tags: `triage:needs_review`, `resolved:export-healthy`
Incidents: [Q2XB8NIEMC66SV](https://growthloop.pagerduty.com/incidents/Q2XB8NIEMC66SV)
Alerts: 1

## Current Summary

Auto-resolved from Pizza export checks: all 1 alert-scoped export check(s) are healthy_closed with no blockers.

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `ford_310`
- Audiences: `32920`
- Destinations: none
- State tuples: none
- Commands seen: `glcli --env prod bifrost pizza --audience-id 32920 --org-id 310`

Representative alerts:
- Q2XB8NIEMC66SV/Q1OE1APFK1UXUG: 2026-06-19T21:42:00-07:00; ford_310; audience 32920. ford (Marketing Production) - Audience 32920: Audience Export failure for 32920 sent to client.

## Export Checks

- Checks: 1.
- States: `healthy_closed`=1

Check evidence:
- chk_q2xb8niemc66sv_q1oe1apfk1uxug (Q2XB8NIEMC66SV/Q1OE1APFK1UXUG): state=`healthy_closed`.
  Scope: env=prod; org=310; audience=32920.
  Command: `glcli --env prod bifrost pizza --audience-id 32920 --org-id 310`
  Run 32920-facebook_20867-scheduled__2026-06-22T00:00:00+00:00: health=`healthy`; created=2026-06-22T00:29:25.642454+00:00; snapshotting=snapshotting_finished; export=export_finished; failed=0.

## Recent Evidence

- Auto-resolved from Pizza export checks: all 1 alert-scoped export check(s) are healthy_closed with no blockers.
  Source: `check-exports`; kind: `export_check`; captured: `2026-06-22T21:54:53.791Z`.

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
