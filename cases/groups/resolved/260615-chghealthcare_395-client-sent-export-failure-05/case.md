<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# chghealthcare_395 client-sent-export-failure

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `resolved`
Tags: `triage:needs_review`, `resolved:export-healthy`
Incidents: [Q18NS66LYDC2MH](https://growthloop.pagerduty.com/incidents/Q18NS66LYDC2MH)
Alerts: 1

## Current Summary

Auto-resolved from Pizza export checks: all 1 alert-scoped export check(s) are healthy_closed with no blockers.

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `chghealthcare_395`
- Audiences: `31806`
- Destinations: none
- State tuples: none
- Commands seen: `glcli --env prod bifrost pizza --audience-id 31806 --org-id 395`

Representative alerts:
- Q18NS66LYDC2MH/Q3DIWRBAWYIG4V: 2026-06-15T16:59:00-07:00; chghealthcare_395; audience 31806. chghealthcare (Weatherby Healthcare) - Audience 31806: Audience Export failure for 31806 sent to client.

## Export Checks

- Checks: 1.
- States: `healthy_closed`=1

Check evidence:
- chk_q18ns66lydc2mh_q3diwrbawyig4v (Q18NS66LYDC2MH/Q3DIWRBAWYIG4V): state=`healthy_closed`.
  Scope: env=prod; org=395; audience=31806.
  Command: `glcli --env prod bifrost pizza --audience-id 31806 --org-id 395`
  Run 31806-snowflake_19528-scheduled__2026-06-21T23:00:00+00:00: health=`healthy`; created=2026-06-21T23:43:28.988775+00:00; snapshotting=snapshotting_finished; export=export_finished; failed=0.

## Recent Evidence

- Auto-resolved from Pizza export checks: all 1 alert-scoped export check(s) are healthy_closed with no blockers.
  Source: `check-exports`; kind: `export_check`; captured: `2026-06-22T21:21:43.427Z`.

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
