<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# albertsons_6 no-batches

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `new`
Tags: `triage:needs_review`
Incidents: [Q1E4EUPF9HDZNA](https://growthloop.pagerduty.com/incidents/Q1E4EUPF9HDZNA)
Alerts: 1

## Current Summary

albertsons (Albertsons Media): Exports for audience 11048 failed with states: <(snapshotting_finished,no_batches)>

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `albertsons_6`
- Audiences: `11048`
- Destinations: `live_ramp_activation`
- State tuples: `snapshotting_finished/no_batches`
- Commands seen: `glcli --env albertsons bifrost pizza --audience-id 11048 --org-id 6`

Representative alerts:
- Q1E4EUPF9HDZNA/Q2E6SESXB0EPQT: 2026-06-04T07:39:03-07:00; albertsons_6; audience 11048; live_ramp_activation; snapshotting_finished/no_batches. albertsons (Albertsons Media): Exports for audience 11048 failed with states: <(snapshotting_finished,no_batches)>
  Runs: `11048-live_ramp_activation_2993-scheduled__2026-06-03T00:00:00+00:00`

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
