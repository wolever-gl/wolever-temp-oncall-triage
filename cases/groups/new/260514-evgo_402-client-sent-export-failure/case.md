# evgo_402 client-sent-export-failure

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `new`
Tags: `triage:needs_review`
Incidents: [Q157KO5ON9TWGO](https://growthloop.pagerduty.com/incidents/Q157KO5ON9TWGO)
Alerts: 1

## Current Summary

EVgo (default) - SignalRoute 373: SignalRoute Export failure for 373 sent to client.

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `evgo_402`
- Audiences: `373`
- Destinations: none
- State tuples: none
- Commands seen: `glcli --env prod bifrost pizza --audience-id 373 --org-id 402`

Representative alerts:
- Q157KO5ON9TWGO/Q08OE2LVF6XGMU: 2026-05-14T21:16:41-07:00; evgo_402; audience 373. EVgo (default) - SignalRoute 373: SignalRoute Export failure for 373 sent to client.

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
