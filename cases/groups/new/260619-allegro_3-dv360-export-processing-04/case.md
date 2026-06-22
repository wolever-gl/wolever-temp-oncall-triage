<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# allegro_3 dv360 export-processing

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `new`
Tags: `triage:needs_review`
Incidents: [Q14JSSBF3DF275](https://growthloop.pagerduty.com/incidents/Q14JSSBF3DF275)
Alerts: 1

## Current Summary

allegro (Advertising): Exports for audience 318 failed with states: <(snapshotting_finished,export_processing)>

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `allegro_3`
- Audiences: `318`
- Destinations: `dv360`
- State tuples: `snapshotting_finished/export_processing`
- Commands seen: `glcli --env allegro bifrost pizza --audience-id 318 --org-id 3`

Representative alerts:
- Q14JSSBF3DF275/Q0KD60664GCGTN: 2026-06-19T07:30:51-07:00; allegro_3; audience 318; dv360; snapshotting_finished/export_processing. allegro (Advertising): Exports for audience 318 failed with states: <(snapshotting_finished,export_processing)>
  Runs: `318-dv360_641-scheduled__2026-06-19T00:00:00+00:00`

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
