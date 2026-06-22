<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# allegro_3 dv360 export-processing

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `new`
Tags: `triage:needs_review`
Incidents: [Q0O2S7YQN9V45V](https://growthloop.pagerduty.com/incidents/Q0O2S7YQN9V45V)
Alerts: 1

## Current Summary

allegro (Marketing): Exports for audience 246 failed with states: <(snapshotting_finished,export_processing)>

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `allegro_3`
- Audiences: `246`
- Destinations: `dv360`
- State tuples: `snapshotting_finished/export_processing`
- Commands seen: `glcli --env allegro bifrost pizza --audience-id 246 --org-id 3`

Representative alerts:
- Q0O2S7YQN9V45V/Q3DMVK8B6DRJTU: 2026-06-19T07:30:39-07:00; allegro_3; audience 246; dv360; snapshotting_finished/export_processing. allegro (Marketing): Exports for audience 246 failed with states: <(snapshotting_finished,export_processing)>
  Runs: `246-dv360_516-scheduled__2026-06-19T00:00:00+00:00`

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
