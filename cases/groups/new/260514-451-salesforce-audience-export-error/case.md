# 451 salesforce-audience export-error

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `new`
Tags: `triage:needs_review`
Incidents: [Q3XQABQFPPVNT5](https://growthloop.pagerduty.com/incidents/Q3XQABQFPPVNT5)
Alerts: 1

## Current Summary

ASU Enterprise Partners (Restricted): Exports for audience 31982 failed with states: <(snapshotting_finished,export_error)>

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `451`
- Audiences: `31982`
- Destinations: `salesforce_audience`
- State tuples: `snapshotting_finished/export_error`
- Commands seen: `glcli --env prod bifrost pizza --audience-id 31982 --org-id 451`

Representative alerts:
- Q3XQABQFPPVNT5/Q07JGZI66746XA: 2026-05-14T08:15:15-07:00; 451; audience 31982; salesforce_audience; snapshotting_finished/export_error. ASU Enterprise Partners (Restricted): Exports for audience 31982 failed with states: <(snapshotting_finished,export_error)>
  Runs: `31982-salesforce_audience_21336-scheduled__2026-05-14T00:00:00+00:00`

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
