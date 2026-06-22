<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# royals_4 snapshotting-error

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `new`
Tags: `triage:needs_review`
Incidents: [Q1KCFFU18XQJDB](https://growthloop.pagerduty.com/incidents/Q1KCFFU18XQJDB)
Alerts: 1

## Current Summary

royals (default): Exports for signal 105 failed with states: <(snapshotting_error,no_batches)>

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `royals_4`
- Audiences: `105`
- Destinations: `salesforce_audience_object`
- State tuples: `snapshotting_error/no_batches`
- Commands seen: `glcli --env royals bifrost pizza --audience-id 105 --org-id 4`

Representative alerts:
- Q1KCFFU18XQJDB/Q11LAEXV4DADZZ: 2026-06-18T07:30:08-07:00; royals_4; audience 105; salesforce_audience_object; snapshotting_error/no_batches. royals (default): Exports for signal 105 failed with states: <(snapshotting_error,no_batches)>
  Runs: `105-salesforce_audience_object_105-scheduled__2026-06-18T11:00:00+00:00`, `105-salesforce_audience_object_105-scheduled__2026-06-18T12:00:00+00:00`, `105-salesforce_audience_object_105-scheduled__2026-06-18T13:00:00+00:00`

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
