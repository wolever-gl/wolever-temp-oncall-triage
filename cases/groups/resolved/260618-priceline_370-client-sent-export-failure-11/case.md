<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# priceline_370 client-sent-export-failure

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `resolved`
Tags: `triage:needs_review`, `resolved:export-healthy`
Incidents: [Q316XM91D7LCYZ](https://growthloop.pagerduty.com/incidents/Q316XM91D7LCYZ)
Alerts: 1

## Current Summary

Auto-resolved from Pizza export checks: all 1 alert-scoped export check(s) are healthy_closed with no blockers.

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `priceline_370`
- Audiences: `18480`
- Destinations: none
- State tuples: none
- Commands seen: `glcli --env prod bifrost pizza --audience-id 18480 --org-id 370`

Representative alerts:
- Q316XM91D7LCYZ/Q2IMMQ69BW5FW5: 2026-06-18T18:04:26-07:00; priceline_370; audience 18480. priceline (default) - Audience 18480: Audience Export failure for 18480 sent to client.

## Export Checks

- Checks: 1.
- States: `healthy_closed`=1

Check evidence:
- chk_q316xm91d7lcyz_q2immq69bw5fw5 (Q316XM91D7LCYZ/Q2IMMQ69BW5FW5): state=`healthy_closed`.
  Scope: env=prod; org=370; audience=18480.
  Command: `glcli --env prod bifrost pizza --audience-id 18480 --org-id 370`
  Run 18480-microsoft_ads_11788-scheduled__2026-06-22T00:00:00+00:00: health=`healthy`; created=2026-06-22T00:24:25.964525+00:00; snapshotting=snapshotting_finished; export=export_finished; failed=0.

## Recent Evidence

- Auto-resolved from Pizza export checks: all 1 alert-scoped export check(s) are healthy_closed with no blockers.
  Source: `check-exports`; kind: `export_check`; captured: `2026-06-22T21:52:06.564Z`.

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
