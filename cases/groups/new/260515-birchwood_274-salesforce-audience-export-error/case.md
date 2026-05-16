# birchwood_274 salesforce-audience export-error

State: `new`
Tags: `triage:needs_review`
Incidents: [Q3PJ7W2K3Y9LJV](https://growthloop.pagerduty.com/incidents/Q3PJ7W2K3Y9LJV)
Alerts: 1

## Current Summary

birchwood (default): Exports for signal 723 failed with states: <(snapshotting_finished,export_error)>

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `birchwood_274`
- Audiences: `723`
- Destinations: `salesforce_audience_object`
- State tuples: `snapshotting_finished/export_error`
- Commands seen: `glcli --env prod bifrost pizza --audience-id 723 --org-id 274`

Representative alerts:
- Q3PJ7W2K3Y9LJV/Q15X94N0MBRAVV: 2026-05-15T08:53:02-07:00; birchwood_274; audience 723; salesforce_audience_object; snapshotting_finished/export_error. birchwood (default): Exports for signal 723 failed with states: <(snapshotting_finished,export_error)>
  Runs: `723-salesforce_audience_object_723-scheduled__2026-05-14T00:00:00+00:00`

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
