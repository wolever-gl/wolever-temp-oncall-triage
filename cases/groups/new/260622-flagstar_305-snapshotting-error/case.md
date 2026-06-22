<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# flagstar_305 snapshotting-error

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `new`
Tags: `triage:needs_review`
Incidents: [Q1J117KV9G8TBU](https://growthloop.pagerduty.com/incidents/Q1J117KV9G8TBU)
Alerts: 1

## Current Summary

flagstar (default): Exports for audience 30251 failed with states: <(snapshotting_error,no_batches)>

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `flagstar_305`
- Audiences: `30251`
- Destinations: `the_trade_desk`
- State tuples: `snapshotting_error/no_batches`
- Commands seen: `glcli --env prod bifrost pizza --audience-id 30251 --org-id 305`

Representative alerts:
- Q1J117KV9G8TBU/Q1OQUXXJSZJ1CU: 2026-06-22T07:54:28-07:00; flagstar_305; audience 30251; the_trade_desk; snapshotting_error/no_batches. flagstar (default): Exports for audience 30251 failed with states: <(snapshotting_error,no_batches)>
  Runs: `30251-the_trade_desk_19860-scheduled__2026-06-22T00:00:00+00:00`

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
