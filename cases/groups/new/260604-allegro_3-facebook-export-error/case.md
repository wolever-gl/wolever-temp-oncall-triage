<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# allegro_3 facebook export-error

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `new`
Tags: `triage:needs_review`
Incidents: [Q0IL94HA9T56IR](https://growthloop.pagerduty.com/incidents/Q0IL94HA9T56IR)
Alerts: 1

## Current Summary

allegro (Advertising): Exports for audience 1069 failed with states: <(snapshotting_finished,export_error)>

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `allegro_3`
- Audiences: `1069`
- Destinations: `facebook`
- State tuples: `snapshotting_finished/export_error`
- Commands seen: `glcli --env allegro bifrost pizza --audience-id 1069 --org-id 3`

Representative alerts:
- Q0IL94HA9T56IR/Q0SEVG1BZABK6I: 2026-06-04T07:32:50-07:00; allegro_3; audience 1069; facebook; snapshotting_finished/export_error. allegro (Advertising): Exports for audience 1069 failed with states: <(snapshotting_finished,export_error)>
  Runs: `1069-facebook_1446-scheduled__2026-06-04T00:00:00+00:00`

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
