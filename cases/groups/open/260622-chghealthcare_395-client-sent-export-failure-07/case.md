<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# chghealthcare_395 client-sent-export-failure

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `open`
Tags: `triage:needs_review`
Incidents: [Q1RLFOTZEKO6ZF](https://growthloop.pagerduty.com/incidents/Q1RLFOTZEKO6ZF)
Alerts: 1

## Current Summary

chghealthcare (Weatherby Healthcare) - Audience 31575: Audience Export failure for 31575 sent to client.

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `chghealthcare_395`
- Audiences: `31575`
- Destinations: none
- State tuples: none
- Commands seen: `glcli --env prod bifrost pizza --audience-id 31575 --org-id 395`

Representative alerts:
- Q1RLFOTZEKO6ZF/Q14MUN2FU7UAW6: 2026-06-22T16:20:25-07:00; chghealthcare_395; audience 31575. chghealthcare (Weatherby Healthcare) - Audience 31575: Audience Export failure for 31575 sent to client.

## Export Checks

- Checks: 1.
- States: `blocked`=1
- Blockers seen: `missing_export_after_alert`

Check evidence:
- chk_q1rlfotzeko6zf_q14mun2fu7uaw6 (Q1RLFOTZEKO6ZF/Q14MUN2FU7UAW6): state=`blocked`.
  Scope: env=prod; org=395; audience=31575.
  Command: `glcli --env prod bifrost pizza --audience-id 31575 --org-id 395`
  Blockers: `missing_export_after_alert`

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
