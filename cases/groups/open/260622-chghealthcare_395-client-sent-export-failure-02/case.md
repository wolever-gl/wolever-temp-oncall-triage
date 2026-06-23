<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# chghealthcare_395 client-sent-export-failure

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `open`
Tags: `triage:needs_review`
Incidents: [Q03QXQ0W6LAQDC](https://growthloop.pagerduty.com/incidents/Q03QXQ0W6LAQDC)
Alerts: 1

## Current Summary

chghealthcare (Weatherby Healthcare) - Audience 31696: Audience Export failure for 31696 sent to client.

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `chghealthcare_395`
- Audiences: `31696`
- Destinations: none
- State tuples: none
- Commands seen: `glcli --env prod bifrost pizza --audience-id 31696 --org-id 395`

Representative alerts:
- Q03QXQ0W6LAQDC/Q0KAAG9ECWGQQO: 2026-06-22T16:59:10-07:00; chghealthcare_395; audience 31696. chghealthcare (Weatherby Healthcare) - Audience 31696: Audience Export failure for 31696 sent to client.

## Export Checks

- Checks: 1.
- States: `blocked`=1
- Blockers seen: `missing_export_after_alert`

Check evidence:
- chk_q03qxq0w6laqdc_q0kaag9ecwgqqo (Q03QXQ0W6LAQDC/Q0KAAG9ECWGQQO): state=`blocked`.
  Scope: env=prod; org=395; audience=31696.
  Command: `glcli --env prod bifrost pizza --audience-id 31696 --org-id 395`
  Blockers: `missing_export_after_alert`

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
