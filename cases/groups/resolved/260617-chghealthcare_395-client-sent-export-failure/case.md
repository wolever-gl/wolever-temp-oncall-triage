<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# chghealthcare_395 client-sent-export-failure

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `resolved`
Tags: `triage:needs_review`, `resolved:export-healthy`
Incidents: [Q05I07B3Q0N74R](https://growthloop.pagerduty.com/incidents/Q05I07B3Q0N74R)
Alerts: 1

## Current Summary

Auto-resolved from Pizza export checks: all 1 alert-scoped export check(s) are healthy_closed with no blockers.

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `chghealthcare_395`
- Audiences: `31696`
- Destinations: none
- State tuples: none
- Commands seen: `glcli --env prod bifrost pizza --audience-id 31696 --org-id 395`

Representative alerts:
- Q05I07B3Q0N74R/Q2QLHQQFO5BI04: 2026-06-17T16:53:27-07:00; chghealthcare_395; audience 31696. chghealthcare (Weatherby Healthcare) - Audience 31696: Audience Export failure for 31696 sent to client.

## Export Checks

- Checks: 1.
- States: `healthy_closed`=1

Check evidence:
- chk_q05i07b3q0n74r_q2qlhqqfo5bi04 (Q05I07B3Q0N74R/Q2QLHQQFO5BI04): state=`healthy_closed`.
  Scope: env=prod; org=395; audience=31696.
  Command: `glcli --env prod bifrost pizza --audience-id 31696 --org-id 395`
  Run 31696-snowflake_19518-scheduled__2026-06-21T23:00:00+00:00: health=`healthy`; created=2026-06-21T23:46:26.465346+00:00; snapshotting=snapshotting_finished; export=export_finished; failed=0.

## Recent Evidence

- Auto-resolved from Pizza export checks: all 1 alert-scoped export check(s) are healthy_closed with no blockers.
  Source: `check-exports`; kind: `export_check`; captured: `2026-06-22T21:34:33.200Z`.

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
