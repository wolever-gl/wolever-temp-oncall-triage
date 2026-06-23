<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# chghealthcare_395 client-sent-export-failure

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `resolved`
Tags: `triage:needs_review`, `resolved:export-healthy`
Incidents: [Q1X467GY84NHLS](https://growthloop.pagerduty.com/incidents/Q1X467GY84NHLS)
Alerts: 1

## Current Summary

Auto-resolved from Pizza export checks: all 1 alert-scoped export check(s) are healthy_closed with no blockers.

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `chghealthcare_395`
- Audiences: `31726`
- Destinations: none
- State tuples: none
- Commands seen: `glcli --env prod bifrost pizza --audience-id 31726 --org-id 395`

Representative alerts:
- Q1X467GY84NHLS/Q3F1J2F6LHW5X4: 2026-06-20T16:55:09-07:00; chghealthcare_395; audience 31726. chghealthcare (Weatherby Healthcare) - Audience 31726: Audience Export failure for 31726 sent to client.

## Export Checks

- Checks: 1.
- States: `healthy_closed`=1

Check evidence:
- chk_q1x467gy84nhls_q3f1j2f6lhw5x4 (Q1X467GY84NHLS/Q3F1J2F6LHW5X4): state=`healthy_closed`.
  Scope: env=prod; org=395; audience=31726.
  Command: `glcli --env prod bifrost pizza --audience-id 31726 --org-id 395`
  Run 31726-snowflake_19519-scheduled__2026-06-21T23:00:00+00:00: health=`healthy`; created=2026-06-21T23:45:23.515477+00:00; snapshotting=snapshotting_finished; export=export_finished; failed=0.

## Recent Evidence

- Auto-resolved from Pizza export checks: all 1 alert-scoped export check(s) are healthy_closed with no blockers.
  Source: `check-exports`; kind: `export_check`; captured: `2026-06-22T21:57:56.189Z`.

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
