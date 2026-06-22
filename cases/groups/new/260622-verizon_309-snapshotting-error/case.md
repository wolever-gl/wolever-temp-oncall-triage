<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# verizon_309 snapshotting-error

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `new`
Tags: `triage:needs_review`
Incidents: [Q2C6TN3RA4JUKE](https://growthloop.pagerduty.com/incidents/Q2C6TN3RA4JUKE)
Alerts: 1

## Current Summary

verizon (Sandbox): Exports for audience 38460 failed with states: <(snapshotting_error,no_batches)>

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `verizon_309`
- Audiences: `38460`
- Destinations: `adobe_experience_platform`
- State tuples: `snapshotting_error/no_batches`
- Commands seen: `glcli --env prod bifrost pizza --audience-id 38460 --org-id 309`

Representative alerts:
- Q2C6TN3RA4JUKE/Q0JLINX22LVDKZ: 2026-06-22T07:59:01-07:00; verizon_309; audience 38460; adobe_experience_platform; snapshotting_error/no_batches. verizon (Sandbox): Exports for audience 38460 failed with states: <(snapshotting_error,no_batches)>
  Runs: `38460-adobe_experience_platform_22718-webapp__2026-06-16T02:57:46+00:00`

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
