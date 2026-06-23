<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# chghealthcare_395 client-sent-export-failure

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `open`
Tags: `triage:needs_review`
Incidents: [Q2NW5RRJ7NJO60](https://growthloop.pagerduty.com/incidents/Q2NW5RRJ7NJO60)
Alerts: 1

## Current Summary

chghealthcare (Omni-Division) - Audience 31808: Audience Export failure for 31808 sent to client.

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `chghealthcare_395`
- Audiences: `31808`
- Destinations: none
- State tuples: none
- Commands seen: `glcli --env prod bifrost pizza --audience-id 31808 --org-id 395`

Representative alerts:
- Q2NW5RRJ7NJO60/Q2AOFQ5HZ5HBVZ: 2026-06-22T17:06:26-07:00; chghealthcare_395; audience 31808. chghealthcare (Omni-Division) - Audience 31808: Audience Export failure for 31808 sent to client.

## Export Checks

- Checks: 1.
- States: `blocked`=1
- Blockers seen: `missing_export_after_alert`

Check evidence:
- chk_q2nw5rrj7njo60_q2aofq5hz5hbvz (Q2NW5RRJ7NJO60/Q2AOFQ5HZ5HBVZ): state=`blocked`.
  Scope: env=prod; org=395; audience=31808.
  Command: `glcli --env prod bifrost pizza --audience-id 31808 --org-id 395`
  Blockers: `missing_export_after_alert`

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
