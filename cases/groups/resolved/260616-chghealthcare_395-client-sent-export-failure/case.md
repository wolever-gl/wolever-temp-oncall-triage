<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# chghealthcare_395 client-sent-export-failure

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `resolved`
Tags: `triage:needs_review`, `resolved:export-healthy`
Incidents: [Q06WT8XY9ZPH9S](https://growthloop.pagerduty.com/incidents/Q06WT8XY9ZPH9S)
Alerts: 1

## Current Summary

Auto-resolved from Pizza export checks: all 1 alert-scoped export check(s) are healthy_closed with no blockers.

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `chghealthcare_395`
- Audiences: `29870`
- Destinations: none
- State tuples: none
- Commands seen: `glcli --env prod bifrost pizza --audience-id 29870 --org-id 395`

Representative alerts:
- Q06WT8XY9ZPH9S/Q3A2GM89AE16JM: 2026-06-16T16:58:35-07:00; chghealthcare_395; audience 29870. chghealthcare (Omni-Division) - Audience 29870: Audience Export failure for 29870 sent to client.

## Export Checks

- Checks: 1.
- States: `healthy_closed`=1

Check evidence:
- chk_q06wt8xy9zph9s_q3a2gm89ae16jm (Q06WT8XY9ZPH9S/Q3A2GM89AE16JM): state=`healthy_closed`.
  Scope: env=prod; org=395; audience=29870.
  Command: `glcli --env prod bifrost pizza --audience-id 29870 --org-id 395`
  Run 29870-snowflake_18277-scheduled__2026-06-21T23:00:00+00:00: health=`healthy`; created=2026-06-21T23:46:53.895586+00:00; snapshotting=snapshotting_finished_no_deltas; export=no_batches; failed=0.

## Recent Evidence

- Auto-resolved from Pizza export checks: all 1 alert-scoped export check(s) are healthy_closed with no blockers.
  Source: `check-exports`; kind: `export_check`; captured: `2026-06-22T21:27:37.790Z`.

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
