<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# chghealthcare_395 client-sent-export-failure

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `resolved`
Tags: `triage:needs_review`, `resolved:export-healthy`
Incidents: [Q1TMB51T1PY013](https://growthloop.pagerduty.com/incidents/Q1TMB51T1PY013)
Alerts: 1

## Current Summary

Auto-resolved from Pizza export checks: all 1 alert-scoped export check(s) are healthy_closed with no blockers.

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `chghealthcare_395`
- Audiences: `31437`
- Destinations: none
- State tuples: none
- Commands seen: `glcli --env prod bifrost pizza --audience-id 31437 --org-id 395`

Representative alerts:
- Q1TMB51T1PY013/Q0IQOXJ16FB93X: 2026-06-17T16:51:42-07:00; chghealthcare_395; audience 31437. chghealthcare (CompHealth) - Audience 31437: Audience Export failure for 31437 sent to client.

## Export Checks

- Checks: 1.
- States: `healthy_closed`=1

Check evidence:
- chk_q1tmb51t1py013_q0iqoxj16fb93x (Q1TMB51T1PY013/Q0IQOXJ16FB93X): state=`healthy_closed`.
  Scope: env=prod; org=395; audience=31437.
  Command: `glcli --env prod bifrost pizza --audience-id 31437 --org-id 395`
  Run 31437-snowflake_19516-scheduled__2026-06-21T23:00:00+00:00: health=`healthy`; created=2026-06-22T00:08:25.831399+00:00; snapshotting=snapshotting_finished; export=export_finished; failed=0.

## Recent Evidence

- Auto-resolved from Pizza export checks: all 1 alert-scoped export check(s) are healthy_closed with no blockers.
  Source: `check-exports`; kind: `export_check`; captured: `2026-06-22T21:35:41.050Z`.

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
