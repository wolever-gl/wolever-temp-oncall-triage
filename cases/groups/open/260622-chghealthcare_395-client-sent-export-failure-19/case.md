<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# chghealthcare_395 client-sent-export-failure

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `open`
Tags: `triage:needs_review`
Incidents: [Q369XHR0W9ZRK2](https://growthloop.pagerduty.com/incidents/Q369XHR0W9ZRK2)
Alerts: 1

## Current Summary

chghealthcare (Weatherby Healthcare) - Audience 26105: Audience Export failure for 26105 sent to client.

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `chghealthcare_395`
- Audiences: `26105`
- Destinations: none
- State tuples: none
- Commands seen: `glcli --env prod bifrost pizza --audience-id 26105 --org-id 395`

Representative alerts:
- Q369XHR0W9ZRK2/Q32E656BL4Z4LK: 2026-06-22T16:40:31-07:00; chghealthcare_395; audience 26105. chghealthcare (Weatherby Healthcare) - Audience 26105: Audience Export failure for 26105 sent to client.

## Export Checks

- Checks: 1.
- States: `blocked`=1
- Blockers seen: `missing_export_after_alert`

Check evidence:
- chk_q369xhr0w9zrk2_q32e656bl4z4lk (Q369XHR0W9ZRK2/Q32E656BL4Z4LK): state=`blocked`.
  Scope: env=prod; org=395; audience=26105.
  Command: `glcli --env prod bifrost pizza --audience-id 26105 --org-id 395`
  Blockers: `missing_export_after_alert`

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
