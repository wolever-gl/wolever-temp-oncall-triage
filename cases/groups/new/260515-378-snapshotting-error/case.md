# 378 snapshotting-error

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `new`
Tags: `triage:needs_review`
Incidents: [Q1QD2CX8MRAYBW](https://growthloop.pagerduty.com/incidents/Q1QD2CX8MRAYBW)
Alerts: 1

## Current Summary

Cincinnati Reds (default): Exports for signal 891 failed with states: <(snapshotting_error,no_batches)>

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `378`
- Audiences: `891`
- Destinations: `dynamics_object`
- State tuples: `snapshotting_error/no_batches`
- Commands seen: `glcli --env prod bifrost pizza --audience-id 891 --org-id 378`

Representative alerts:
- Q1QD2CX8MRAYBW/Q08TXNT2TOYP3Q: 2026-05-15T08:09:23-07:00; 378; audience 891; dynamics_object; snapshotting_error/no_batches. Cincinnati Reds (default): Exports for signal 891 failed with states: <(snapshotting_error,no_batches)>
  Runs: `891-dynamics_object_891-scheduled__2026-05-15T12:00:00+00:00`, `891-dynamics_object_891-scheduled__2026-05-15T13:00:00+00:00`, `891-dynamics_object_891-scheduled__2026-05-15T14:00:00+00:00`

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
