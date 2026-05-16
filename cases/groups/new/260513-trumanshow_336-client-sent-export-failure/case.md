# trumanshow_336 client-sent-export-failure

State: `new`
Tags: `triage:needs_review`
Incidents: [Q12A5QFIM3F9LN](https://growthloop.pagerduty.com/incidents/Q12A5QFIM3F9LN)
Alerts: 1

## Current Summary

trumanshow (Retail & CPG) - Audience 35783: Audience Export failure for 35783 sent to client.

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `trumanshow_336`
- Audiences: `35783`
- Destinations: none
- State tuples: none
- Commands seen: `glcli --env prod bifrost pizza --audience-id 35783 --org-id 336`

Representative alerts:
- Q12A5QFIM3F9LN/Q3GVOV55Z30Y4R: 2026-05-13T17:18:48-07:00; trumanshow_336; audience 35783. trumanshow (Retail & CPG) - Audience 35783: Audience Export failure for 35783 sent to client.

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
