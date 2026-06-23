<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# chghealthcare_395 client-sent-export-failure

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `resolved`
Tags: `triage:needs_review`, `resolved:export-healthy`
Incidents: [Q0RGK12D17FKM7](https://growthloop.pagerduty.com/incidents/Q0RGK12D17FKM7)
Alerts: 1

## Current Summary

Auto-resolved from Pizza export checks: all 1 alert-scoped export check(s) are healthy_closed with no blockers.

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `chghealthcare_395`
- Audiences: `26145`
- Destinations: none
- State tuples: none
- Commands seen: `glcli --env prod bifrost pizza --audience-id 26145 --org-id 395`

Representative alerts:
- Q0RGK12D17FKM7/Q3IRX9X5EI9FR8: 2026-06-17T16:37:01-07:00; chghealthcare_395; audience 26145. chghealthcare (Weatherby Healthcare) - Audience 26145: Audience Export failure for 26145 sent to client.

## Export Checks

- Checks: 1.
- States: `healthy_closed`=1

Check evidence:
- chk_q0rgk12d17fkm7_q3irx9x5ei9fr8 (Q0RGK12D17FKM7/Q3IRX9X5EI9FR8): state=`healthy_closed`.
  Scope: env=prod; org=395; audience=26145.
  Command: `glcli --env prod bifrost pizza --audience-id 26145 --org-id 395`
  Run 26145-snowflake_16135-scheduled__2026-06-21T23:00:00+00:00: health=`healthy`; created=2026-06-21T23:21:37.445604+00:00; snapshotting=snapshotting_finished; export=export_finished; failed=0.

## Recent Evidence

- Auto-resolved from Pizza export checks: all 1 alert-scoped export check(s) are healthy_closed with no blockers.
  Source: `check-exports`; kind: `export_check`; captured: `2026-06-22T21:34:55.824Z`.

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
