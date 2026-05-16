<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# ford_310 client-sent-export-failure

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `resolved`
Tags: `triage:needs_review`, `resolved:merged`
Incidents: [Q1TJJ4MEVOF1W3](https://growthloop.pagerduty.com/incidents/Q1TJJ4MEVOF1W3)
Alerts: 1

## Current Summary

Merged into 260514-ford_310-dv360-export-error: Merge Ford audience 32921 client-sent alert into the active DV360 export-error case; current Pizza shows the client notification corresponds to the still-failing 32921 DV360 run, not a separate issue.

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `ford_310`
- Audiences: `32921`
- Destinations: none
- State tuples: none
- Commands seen: `glcli --env prod bifrost pizza --audience-id 32921 --org-id 310`

Representative alerts:
- Q1TJJ4MEVOF1W3/Q1DMVWD0F3T9DI: 2026-05-14T07:52:48-07:00; ford_310; audience 32921. ford (Marketing Production) - Audience 32921: Audience Export failure for 32921 sent to client.

## Export Checks

- Checks: 1.
- States: `blocked`=1
- Blockers seen: `missing_run_identity`

Check evidence:
- chk_q1tjj4mevof1w3_q1dmvwd0f3t9di (Q1TJJ4MEVOF1W3/Q1DMVWD0F3T9DI): state=`blocked`.
  Scope: env=prod; org=310; audience=32921.
  Command: `glcli --env prod bifrost pizza --audience-id 32921 --org-id 310`
  Blockers: `missing_run_identity`

## Next Action

Follow target group 260514-ford_310-dv360-export-error.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
