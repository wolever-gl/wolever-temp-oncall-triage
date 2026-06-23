<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# chghealthcare_395 client-sent-export-failure

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `open`
Tags: `triage:needs_review`
Incidents: [Q321DIC1V8M7X0](https://growthloop.pagerduty.com/incidents/Q321DIC1V8M7X0)
Alerts: 1

## Current Summary

chghealthcare (Weatherby Healthcare) - Audience 26083: Audience Export failure for 26083 sent to client.

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `chghealthcare_395`
- Audiences: `26083`
- Destinations: none
- State tuples: none
- Commands seen: `glcli --env prod bifrost pizza --audience-id 26083 --org-id 395`

Representative alerts:
- Q321DIC1V8M7X0/Q0RU43TQDIXZG8: 2026-06-22T16:40:31-07:00; chghealthcare_395; audience 26083. chghealthcare (Weatherby Healthcare) - Audience 26083: Audience Export failure for 26083 sent to client.

## Export Checks

- Checks: 1.
- States: `blocked`=1
- Blockers seen: `missing_export_after_alert`

Check evidence:
- chk_q321dic1v8m7x0_q0ru43tqdixzg8 (Q321DIC1V8M7X0/Q0RU43TQDIXZG8): state=`blocked`.
  Scope: env=prod; org=395; audience=26083.
  Command: `glcli --env prod bifrost pizza --audience-id 26083 --org-id 395`
  Blockers: `missing_export_after_alert`

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
