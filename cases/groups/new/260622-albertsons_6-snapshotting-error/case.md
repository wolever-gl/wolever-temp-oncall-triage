<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# albertsons_6 snapshotting-error

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `new`
Tags: `triage:needs_review`
Incidents: [Q05QT2VUY5NLIC](https://growthloop.pagerduty.com/incidents/Q05QT2VUY5NLIC)
Alerts: 1

## Current Summary

albertsons (Albertsons Media): Exports for audience 3283 failed with states: <(snapshotting_error,no_batches)>

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `albertsons_6`
- Audiences: `3283`
- Destinations: `live_ramp_activation`
- State tuples: `snapshotting_error/no_batches`
- Commands seen: `glcli --env albertsons bifrost pizza --audience-id 3283 --org-id 6`

Representative alerts:
- Q05QT2VUY5NLIC/Q083HD3KBH9L9I: 2026-06-22T07:33:34-07:00; albertsons_6; audience 3283; live_ramp_activation; snapshotting_error/no_batches. albertsons (Albertsons Media): Exports for audience 3283 failed with states: <(snapshotting_error,no_batches)>
  Runs: `3283-live_ramp_activation_1278-scheduled__2026-06-22T00:00:00+00:00`

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
