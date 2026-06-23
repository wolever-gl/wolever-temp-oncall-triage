<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# chghealthcare_395 client-sent-export-failure

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `open`
Tags: `triage:needs_review`
Incidents: [Q2RRHNLC5TM6TT](https://growthloop.pagerduty.com/incidents/Q2RRHNLC5TM6TT)
Alerts: 1

## Current Summary

chghealthcare (Weatherby Healthcare) - Audience 31806: Audience Export failure for 31806 sent to client.

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `chghealthcare_395`
- Audiences: `31806`
- Destinations: none
- State tuples: none
- Commands seen: `glcli --env prod bifrost pizza --audience-id 31806 --org-id 395`

Representative alerts:
- Q2RRHNLC5TM6TT/Q2B2CJS2JNUY67: 2026-06-22T17:05:05-07:00; chghealthcare_395; audience 31806. chghealthcare (Weatherby Healthcare) - Audience 31806: Audience Export failure for 31806 sent to client.

## Export Checks

- Checks: 1.
- States: `blocked`=1
- Blockers seen: `missing_export_after_alert`

Check evidence:
- chk_q2rrhnlc5tm6tt_q2b2cjs2jnuy67 (Q2RRHNLC5TM6TT/Q2B2CJS2JNUY67): state=`blocked`.
  Scope: env=prod; org=395; audience=31806.
  Command: `glcli --env prod bifrost pizza --audience-id 31806 --org-id 395`
  Blockers: `missing_export_after_alert`

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
