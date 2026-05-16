# nascar_2 no-batches

State: `new`
Tags: `triage:needs_review`
Incidents: [Q16KSAQEWECSDD](https://growthloop.pagerduty.com/incidents/Q16KSAQEWECSDD)
Alerts: 2

## Current Summary

Nascar (default): Exports for signal 125 failed with states: <(snapshotting_finished,no_batches)>

## Alert Scope

- Alert facts: 2 imported, 2 linked to this group.
- Orgs: `nascar_2`
- Audiences: `117`, `125`
- Destinations: `dynamics_object`
- State tuples: `snapshotting_finished/no_batches`
- Commands seen: `glcli --env nascar_aws bifrost pizza --audience-id 117 --org-id 2`, `glcli --env nascar_aws bifrost pizza --audience-id 125 --org-id 2`

Representative alerts:
- Q16KSAQEWECSDD/Q1YF7AYAWE053M: 2026-05-15T07:30:15-07:00; nascar_2; audience 117; dynamics_object; snapshotting_finished/no_batches. Nascar (default): Exports for signal 117 failed with states: <(snapshotting_finished,no_batches)>
  Runs: `117-dynamics_object_117-scheduled__2026-05-13T12:15:00+00:00`
- Q16KSAQEWECSDD/Q22AWVQWAGXLX7: 2026-05-15T07:30:17-07:00; nascar_2; audience 125; dynamics_object; snapshotting_finished/no_batches. Nascar (default): Exports for signal 125 failed with states: <(snapshotting_finished,no_batches)>
  Runs: `125-dynamics_object_125-scheduled__2026-05-13T12:15:00+00:00`

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
