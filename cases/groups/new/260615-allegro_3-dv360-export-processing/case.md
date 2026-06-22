<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# allegro_3 dv360 export-processing

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `new`
Tags: `triage:needs_review`
Incidents: [Q00MFBGA6P78P8](https://growthloop.pagerduty.com/incidents/Q00MFBGA6P78P8)
Alerts: 1

## Current Summary

allegro (Marketing): Exports for audience 1266 failed with states: <(snapshotting_finished,export_processing)>

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `allegro_3`
- Audiences: `1266`
- Destinations: `dv360`
- State tuples: `snapshotting_finished/export_processing`
- Commands seen: `glcli --env allegro bifrost pizza --audience-id 1266 --org-id 3`

Representative alerts:
- Q00MFBGA6P78P8/Q1NDLW0YSMVD3J: 2026-06-15T07:33:40-07:00; allegro_3; audience 1266; dv360; snapshotting_finished/export_processing. allegro (Marketing): Exports for audience 1266 failed with states: <(snapshotting_finished,export_processing)>
  Runs: `1266-dv360_1668-scheduled__2026-06-15T00:00:00+00:00`

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
