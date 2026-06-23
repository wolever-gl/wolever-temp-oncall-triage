<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# chghealthcare_395 client-sent-export-failure

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `resolved`
Tags: `triage:needs_review`, `resolved:export-healthy`
Incidents: [Q3A7D1ICRBKS8O](https://growthloop.pagerduty.com/incidents/Q3A7D1ICRBKS8O)
Alerts: 1

## Current Summary

Auto-resolved from Pizza export checks: all 1 alert-scoped export check(s) are healthy_closed with no blockers.

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `chghealthcare_395`
- Audiences: `31904`
- Destinations: none
- State tuples: none
- Commands seen: `glcli --env prod bifrost pizza --audience-id 31904 --org-id 395`

Representative alerts:
- Q3A7D1ICRBKS8O/Q0JAASRJG3XTUX: 2026-06-20T16:19:42-07:00; chghealthcare_395; audience 31904. chghealthcare (CompHealth) - Audience 31904: Audience Export failure for 31904 sent to client.

## Export Checks

- Checks: 1.
- States: `healthy_closed`=1

Check evidence:
- chk_q3a7d1icrbks8o_q0jaasrjg3xtux (Q3A7D1ICRBKS8O/Q0JAASRJG3XTUX): state=`healthy_closed`.
  Scope: env=prod; org=395; audience=31904.
  Command: `glcli --env prod bifrost pizza --audience-id 31904 --org-id 395`
  Run 31904-snowflake_19515-scheduled__2026-06-21T23:00:00+00:00: health=`healthy`; created=2026-06-21T23:31:55.469033+00:00; snapshotting=snapshotting_finished; export=export_finished; failed=0.

## Recent Evidence

- Auto-resolved from Pizza export checks: all 1 alert-scoped export check(s) are healthy_closed with no blockers.
  Source: `check-exports`; kind: `export_check`; captured: `2026-06-22T21:59:04.716Z`.

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
