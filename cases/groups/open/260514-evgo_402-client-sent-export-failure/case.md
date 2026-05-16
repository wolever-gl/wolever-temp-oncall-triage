<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# evgo_402 client-sent-export-failure

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `open`
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

## Export Checks

- Checks: 1.
- States: `blocked`=1
- Blockers seen: `missing_run_identity`

Check evidence:
- chk_q157ko5on9twgo_q08oe2lvf6xgmu (Q157KO5ON9TWGO/Q08OE2LVF6XGMU): state=`blocked`.
  Scope: env=prod; org=402; audience=373.
  Command: `glcli --env prod bifrost pizza --audience-id 373 --org-id 402`
  Blockers: `missing_run_identity`

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
