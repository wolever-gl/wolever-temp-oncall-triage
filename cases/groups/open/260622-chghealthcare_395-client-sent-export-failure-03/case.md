<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# chghealthcare_395 client-sent-export-failure

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `open`
Tags: `triage:needs_review`
Incidents: [Q04X8LNR4I5BWZ](https://growthloop.pagerduty.com/incidents/Q04X8LNR4I5BWZ)
Alerts: 1

## Current Summary

chghealthcare (Omni-Division) - Audience 29545: Audience Export failure for 29545 sent to client.

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `chghealthcare_395`
- Audiences: `29545`
- Destinations: none
- State tuples: none
- Commands seen: `glcli --env prod bifrost pizza --audience-id 29545 --org-id 395`

Representative alerts:
- Q04X8LNR4I5BWZ/Q3O6EPB9LEOW8Z: 2026-06-22T16:49:42-07:00; chghealthcare_395; audience 29545. chghealthcare (Omni-Division) - Audience 29545: Audience Export failure for 29545 sent to client.

## Export Checks

- Checks: 1.
- States: `blocked`=1
- Blockers seen: `missing_export_after_alert`

Check evidence:
- chk_q04x8lnr4i5bwz_q3o6epb9leow8z (Q04X8LNR4I5BWZ/Q3O6EPB9LEOW8Z): state=`blocked`.
  Scope: env=prod; org=395; audience=29545.
  Command: `glcli --env prod bifrost pizza --audience-id 29545 --org-id 395`
  Blockers: `missing_export_after_alert`

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
