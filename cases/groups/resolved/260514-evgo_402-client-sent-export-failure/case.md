<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# evgo_402 client-sent-export-failure

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `resolved`
Tags: `triage:needs_review`, `resolved:export-healthy`
Incidents: [Q157KO5ON9TWGO](https://growthloop.pagerduty.com/incidents/Q157KO5ON9TWGO)
Alerts: 1

## Current Summary

Auto-resolved from Pizza export checks: all 1 alert-scoped export check(s) are healthy_closed with no blockers.

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
- States: `healthy_closed`=1

Check evidence:
- chk_q157ko5on9twgo_q08oe2lvf6xgmu (Q157KO5ON9TWGO/Q08OE2LVF6XGMU): state=`healthy_closed`.
  Scope: env=prod; org=402; audience=373.
  Command: `glcli --env prod bifrost pizza --audience-id 373 --org-id 402`
  Run 373-braze_object_373-scheduled__2026-05-16T23:30:00+00:00: health=`healthy`; created=2026-05-16T23:45:29.138127+00:00; snapshotting=snapshotting_finished_no_deltas; export=no_batches; failed=0.

## Recent Evidence

- Auto-resolved from Pizza export checks: all 1 alert-scoped export check(s) are healthy_closed with no blockers.
  Source: `check-exports`; kind: `export_check`; captured: `2026-05-17T00:06:08.181Z`.

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
