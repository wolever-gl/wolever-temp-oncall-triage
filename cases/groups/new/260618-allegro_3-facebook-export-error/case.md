<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# allegro_3 facebook export-error

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `new`
Tags: `triage:needs_review`
Incidents: [Q3E8HWF4NF8R5H](https://growthloop.pagerduty.com/incidents/Q3E8HWF4NF8R5H)
Alerts: 1

## Current Summary

allegro (Advertising): Exports for audience 869 failed with states: <(snapshotting_finished,export_error)>

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `allegro_3`
- Audiences: `869`
- Destinations: `facebook`
- State tuples: `snapshotting_finished/export_error`
- Commands seen: `glcli --env allegro bifrost pizza --audience-id 869 --org-id 3`

Representative alerts:
- Q3E8HWF4NF8R5H/Q0BNM0FJ26KPVP: 2026-06-18T07:32:35-07:00; allegro_3; audience 869; facebook; snapshotting_finished/export_error. allegro (Advertising): Exports for audience 869 failed with states: <(snapshotting_finished,export_error)>
  Runs: `869-facebook_1172-scheduled__2026-06-18T00:00:00+00:00`

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
