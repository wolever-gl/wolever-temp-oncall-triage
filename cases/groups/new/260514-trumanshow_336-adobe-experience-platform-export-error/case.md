# trumanshow_336 adobe-experience-platform export-error

State: `new`
Tags: `triage:needs_review`
Incidents: [Q12A5QFIM3F9LN](https://growthloop.pagerduty.com/incidents/Q12A5QFIM3F9LN)
Alerts: 1

## Current Summary

trumanshow (VZN): Exports for audience 36199 failed with states: <(snapshotting_finished,export_error)>

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `trumanshow_336`
- Audiences: `36199`
- Destinations: `adobe_experience_platform`
- State tuples: `snapshotting_finished/export_error`
- Commands seen: `glcli --env prod bifrost pizza --audience-id 36199 --org-id 336`

Representative alerts:
- Q12A5QFIM3F9LN/Q05NTDX4NQ1HYU: 2026-05-14T08:08:31-07:00; trumanshow_336; audience 36199; adobe_experience_platform; snapshotting_finished/export_error. trumanshow (VZN): Exports for audience 36199 failed with states: <(snapshotting_finished,export_error)>
  Runs: `36199-adobe_experience_platform_22089-webapp__2026-05-08T13:13:49+00:00`

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
