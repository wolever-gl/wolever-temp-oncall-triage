<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# royals_4 snapshotting-error

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `new`
Tags: `triage:needs_review`
Incidents: [Q04I15TNP1B3TD](https://growthloop.pagerduty.com/incidents/Q04I15TNP1B3TD)
Alerts: 1

## Current Summary

royals (default): Exports for signal 116 failed with states: <(snapshotting_error,no_batches)>

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `royals_4`
- Audiences: `116`
- Destinations: `salesforce_audience_object`
- State tuples: `snapshotting_error/no_batches`
- Commands seen: `glcli --env royals bifrost pizza --audience-id 116 --org-id 4`

Representative alerts:
- Q04I15TNP1B3TD/Q1E2788YIL0ZTF: 2026-06-18T07:30:08-07:00; royals_4; audience 116; salesforce_audience_object; snapshotting_error/no_batches. royals (default): Exports for signal 116 failed with states: <(snapshotting_error,no_batches)>
  Runs: `116-salesforce_audience_object_116-scheduled__2026-06-18T11:00:00+00:00`, `116-salesforce_audience_object_116-scheduled__2026-06-18T12:00:00+00:00`, `116-salesforce_audience_object_116-scheduled__2026-06-18T13:00:00+00:00`

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
