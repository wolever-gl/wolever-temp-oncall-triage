<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# chghealthcare_395 client-sent-export-failure

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `resolved`
Tags: `triage:needs_review`, `resolved:export-healthy`
Incidents: [Q2IHPM0C5B5TZL](https://growthloop.pagerduty.com/incidents/Q2IHPM0C5B5TZL)
Alerts: 1

## Current Summary

Auto-resolved from Pizza export checks: all 1 alert-scoped export check(s) are healthy_closed with no blockers.

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `chghealthcare_395`
- Audiences: `27539`
- Destinations: none
- State tuples: none
- Commands seen: `glcli --env prod bifrost pizza --audience-id 27539 --org-id 395`

Representative alerts:
- Q2IHPM0C5B5TZL/Q11TA1WW577T0D: 2026-06-15T16:41:04-07:00; chghealthcare_395; audience 27539. chghealthcare (Omni-Division) - Audience 27539: Audience Export failure for 27539 sent to client.

## Export Checks

- Checks: 1.
- States: `healthy_closed`=1

Check evidence:
- chk_q2ihpm0c5b5tzl_q11ta1ww577t0d (Q2IHPM0C5B5TZL/Q11TA1WW577T0D): state=`healthy_closed`.
  Scope: env=prod; org=395; audience=27539.
  Command: `glcli --env prod bifrost pizza --audience-id 27539 --org-id 395`
  Run 27539-snowflake_17605-scheduled__2026-06-21T23:00:00+00:00: health=`healthy`; created=2026-06-21T23:25:54.949739+00:00; snapshotting=snapshotting_finished; export=export_finished; failed=0.

## Recent Evidence

- Auto-resolved from Pizza export checks: all 1 alert-scoped export check(s) are healthy_closed with no blockers.
  Source: `check-exports`; kind: `export_check`; captured: `2026-06-22T21:22:07.231Z`.

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
