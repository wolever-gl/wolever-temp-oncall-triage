# birchwood_274 client-sent-export-failure

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `new`
Tags: `triage:needs_review`
Incidents: [Q3PJ7W2K3Y9LJV](https://growthloop.pagerduty.com/incidents/Q3PJ7W2K3Y9LJV)
Alerts: 1

## Current Summary

birchwood (default) - SignalRoute 723: SignalRoute Export failure for 723 sent to client.

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `birchwood_274`
- Audiences: `723`
- Destinations: none
- State tuples: none
- Commands seen: `glcli --env prod bifrost pizza --audience-id 723 --org-id 274`

Representative alerts:
- Q3PJ7W2K3Y9LJV/Q0S5D7L5PK1NBX: 2026-05-14T18:28:16-07:00; birchwood_274; audience 723. birchwood (default) - SignalRoute 723: SignalRoute Export failure for 723 sent to client.

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
