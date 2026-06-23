<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# trumanshow_336 zero-success

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `resolved`
Tags: `triage:needs_review`, `resolved:export-healthy`
Incidents: [Q305SOPXQQALTL](https://growthloop.pagerduty.com/incidents/Q305SOPXQQALTL)
Alerts: 1

## Current Summary

Auto-resolved from Pizza export checks: all 1 alert-scoped export check(s) are healthy_closed with no blockers.

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `trumanshow_336`
- Audiences: `38610`
- Destinations: none
- State tuples: none
- Commands seen: `glcli --env prod bifrost pizza --audience-id 38610 --org-id 336`

Representative alerts:
- Q305SOPXQQALTL/Q0HYE13XBPN90K: 2026-06-20T09:24:32-07:00; trumanshow_336; audience 38610. trumanshow (INTL) - Audience 38610: 0 successfull_exports from pizza tracker found 10 minutes after new export

## Export Checks

- Checks: 1.
- States: `healthy_closed`=1

Check evidence:
- chk_q305sopxqqaltl_q0hye13xbpn90k (Q305SOPXQQALTL/Q0HYE13XBPN90K): state=`healthy_closed`.
  Scope: env=prod; org=336; audience=38610.
  Command: `glcli --env prod bifrost pizza --audience-id 38610 --org-id 336`
  Run 38610-salesforce_audience_22816-scheduled__2026-06-22T00:00:00+00:00: health=`healthy`; created=2026-06-22T00:18:13.627583+00:00; snapshotting=snapshotting_finished_no_deltas; export=no_batches; failed=0.

## Recent Evidence

- Auto-resolved from Pizza export checks: all 1 alert-scoped export check(s) are healthy_closed with no blockers.
  Source: `check-exports`; kind: `export_check`; captured: `2026-06-22T22:00:49.229Z`.

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
