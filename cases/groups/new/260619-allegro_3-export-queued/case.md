<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# allegro_3 export-queued

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `new`
Tags: `triage:needs_review`
Incidents: [Q05X2P09UQ5OD3](https://growthloop.pagerduty.com/incidents/Q05X2P09UQ5OD3)
Alerts: 1

## Current Summary

allegro (Advertising): Exports for audience 1007 failed with states: <(snapshotting_finished,export_queued)>

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `allegro_3`
- Audiences: `1007`
- Destinations: `facebook`
- State tuples: `snapshotting_finished/export_queued`
- Commands seen: `glcli --env allegro bifrost pizza --audience-id 1007 --org-id 3`

Representative alerts:
- Q05X2P09UQ5OD3/Q261JXDKKVAE5Y: 2026-06-19T07:33:02-07:00; allegro_3; audience 1007; facebook; snapshotting_finished/export_queued. allegro (Advertising): Exports for audience 1007 failed with states: <(snapshotting_finished,export_queued)>
  Runs: `1007-facebook_1341-scheduled__2026-06-19T00:00:00+00:00`

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
