<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# trumanshow_336 snapshotting-error

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `new`
Tags: `triage:needs_review`
Incidents: [Q0YDYF1B62RQHL](https://growthloop.pagerduty.com/incidents/Q0YDYF1B62RQHL)
Alerts: 1

## Current Summary

trumanshow (Healthcare & Education): Exports for signal 1008 failed with states: <(snapshotting_error,no_batches)>

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `trumanshow_336`
- Audiences: `1008`
- Destinations: `iterable_object`
- State tuples: `snapshotting_error/no_batches`
- Commands seen: `glcli --env prod bifrost pizza --audience-id 1008 --org-id 336`

Representative alerts:
- Q0YDYF1B62RQHL/Q1CO361QQY3J4V: 2026-06-22T07:54:23-07:00; trumanshow_336; audience 1008; iterable_object; snapshotting_error/no_batches. trumanshow (Healthcare & Education): Exports for signal 1008 failed with states: <(snapshotting_error,no_batches)>
  Runs: `1008-iterable_object_1008-scheduled__2026-06-07T00:00:00+00:00`, `1008-iterable_object_1008-scheduled__2026-06-14T00:00:00+00:00`

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
