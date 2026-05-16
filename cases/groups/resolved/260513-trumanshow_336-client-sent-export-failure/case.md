<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# trumanshow_336 client-sent-export-failure

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `resolved`
Tags: `triage:needs_review`, `resolved:export-healthy`
Incidents: [Q12A5QFIM3F9LN](https://growthloop.pagerduty.com/incidents/Q12A5QFIM3F9LN)
Alerts: 1

## Current Summary

Auto-resolved from Pizza export checks: all 1 alert-scoped export check(s) are healthy_closed with no blockers.

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `trumanshow_336`
- Audiences: `35783`
- Destinations: none
- State tuples: none
- Commands seen: `glcli --env prod bifrost pizza --audience-id 35783 --org-id 336`

Representative alerts:
- Q12A5QFIM3F9LN/Q3GVOV55Z30Y4R: 2026-05-13T17:18:48-07:00; trumanshow_336; audience 35783. trumanshow (Retail & CPG) - Audience 35783: Audience Export failure for 35783 sent to client.

## Export Checks

- Checks: 1.
- States: `healthy_closed`=1

Check evidence:
- chk_q12a5qfim3f9ln_q3gvov55z30y4r (Q12A5QFIM3F9LN/Q3GVOV55Z30Y4R): state=`healthy_closed`.
  Scope: env=prod; org=336; audience=35783.
  Command: `glcli --env prod bifrost pizza --audience-id 35783 --org-id 336`
  Run 35783-adobe_experience_platform_21768-scheduled__2026-05-15T00:00:00+00:00: health=`healthy`; created=2026-05-15T00:17:04.946473+00:00; snapshotting=snapshotting_finished_no_deltas; export=no_batches; failed=0.

## Recent Evidence

- Auto-resolved from Pizza export checks: all 1 alert-scoped export check(s) are healthy_closed with no blockers.
  Source: `check-exports`; kind: `export_check`; captured: `2026-05-16T23:49:08.427Z`.

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
