<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# chghealthcare_395 client-sent-export-failure

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `open`
Tags: `triage:needs_review`
Incidents: [Q3EPPJOPPUF6ZF](https://growthloop.pagerduty.com/incidents/Q3EPPJOPPUF6ZF)
Alerts: 1

## Current Summary

chghealthcare (CompHealth) - Audience 31904: Audience Export failure for 31904 sent to client.

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `chghealthcare_395`
- Audiences: `31904`
- Destinations: none
- State tuples: none
- Commands seen: `glcli --env prod bifrost pizza --audience-id 31904 --org-id 395`

Representative alerts:
- Q3EPPJOPPUF6ZF/Q2P5LAGZSSAE6H: 2026-06-22T17:08:34-07:00; chghealthcare_395; audience 31904. chghealthcare (CompHealth) - Audience 31904: Audience Export failure for 31904 sent to client.

## Export Checks

- Checks: 1.
- States: `blocked`=1
- Blockers seen: `missing_export_after_alert`

Check evidence:
- chk_q3eppjoppuf6zf_q2p5lagzssae6h (Q3EPPJOPPUF6ZF/Q2P5LAGZSSAE6H): state=`blocked`.
  Scope: env=prod; org=395; audience=31904.
  Command: `glcli --env prod bifrost pizza --audience-id 31904 --org-id 395`
  Blockers: `missing_export_after_alert`

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
