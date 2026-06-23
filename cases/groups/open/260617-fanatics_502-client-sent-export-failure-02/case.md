<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# fanatics_502 client-sent-export-failure

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `open`
Tags: `triage:needs_review`
Incidents: [Q3TCZGMX16OTB1](https://growthloop.pagerduty.com/incidents/Q3TCZGMX16OTB1)
Alerts: 1

## Current Summary

fanatics (default) - Audience 35291: Audience Export failure for 35291 sent to client.

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `fanatics_502`
- Audiences: `35291`
- Destinations: none
- State tuples: none
- Commands seen: `glcli --env prod bifrost pizza --audience-id 35291 --org-id 502`

Representative alerts:
- Q3TCZGMX16OTB1/Q16M6Z3K9MSTHE: 2026-06-17T18:30:44-07:00; fanatics_502; audience 35291. fanatics (default) - Audience 35291: Audience Export failure for 35291 sent to client.

## Export Checks

- Checks: 1.
- States: `blocked`=1
- Blockers seen: `missing_export_after_alert`

Check evidence:
- chk_q3tczgmx16otb1_q16m6z3k9msthe (Q3TCZGMX16OTB1/Q16M6Z3K9MSTHE): state=`blocked`.
  Scope: env=prod; org=502; audience=35291.
  Command: `glcli --env prod bifrost pizza --audience-id 35291 --org-id 502`
  Blockers: `missing_export_after_alert`

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
