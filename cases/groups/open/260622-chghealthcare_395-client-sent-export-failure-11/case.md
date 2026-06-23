<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# chghealthcare_395 client-sent-export-failure

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `open`
Tags: `triage:needs_review`
Incidents: [Q2DG1SA3L1QGW5](https://growthloop.pagerduty.com/incidents/Q2DG1SA3L1QGW5)
Alerts: 1

## Current Summary

chghealthcare (Weatherby Healthcare) - Audience 26145: Audience Export failure for 26145 sent to client.

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `chghealthcare_395`
- Audiences: `26145`
- Destinations: none
- State tuples: none
- Commands seen: `glcli --env prod bifrost pizza --audience-id 26145 --org-id 395`

Representative alerts:
- Q2DG1SA3L1QGW5/Q0F96W896JIF0G: 2026-06-22T16:41:47-07:00; chghealthcare_395; audience 26145. chghealthcare (Weatherby Healthcare) - Audience 26145: Audience Export failure for 26145 sent to client.

## Export Checks

- Checks: 1.
- States: `blocked`=1
- Blockers seen: `missing_export_after_alert`

Check evidence:
- chk_q2dg1sa3l1qgw5_q0f96w896jif0g (Q2DG1SA3L1QGW5/Q0F96W896JIF0G): state=`blocked`.
  Scope: env=prod; org=395; audience=26145.
  Command: `glcli --env prod bifrost pizza --audience-id 26145 --org-id 395`
  Blockers: `missing_export_after_alert`

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
