<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# albertsons_6 snapshotting-error

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `new`
Tags: `triage:needs_review`
Incidents: [Q0B75DL9CGNBG0](https://growthloop.pagerduty.com/incidents/Q0B75DL9CGNBG0)
Alerts: 1

## Current Summary

albertsons (Albertsons Media): Exports for audience 9670 failed with states: <(snapshotting_error,no_batches)>

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `albertsons_6`
- Audiences: `9670`
- Destinations: `live_ramp_activation`
- State tuples: `snapshotting_error/no_batches`
- Commands seen: `glcli --env albertsons bifrost pizza --audience-id 9670 --org-id 6`

Representative alerts:
- Q0B75DL9CGNBG0/Q36FUJN2V8R8TZ: 2026-06-22T07:35:57-07:00; albertsons_6; audience 9670; live_ramp_activation; snapshotting_error/no_batches. albertsons (Albertsons Media): Exports for audience 9670 failed with states: <(snapshotting_error,no_batches)>
  Runs: `9670-live_ramp_activation_1945-scheduled__2026-06-22T00:00:00+00:00`

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
