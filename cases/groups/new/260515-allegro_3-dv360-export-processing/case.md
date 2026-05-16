<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# allegro_3 dv360 export-processing

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `new`
Tags: `triage:needs_review`
Incidents: [Q3GQQRY1UQLBSN](https://growthloop.pagerduty.com/incidents/Q3GQQRY1UQLBSN)
Alerts: 1

## Current Summary

allegro (Marketing): Exports for audience 605 failed with states: <(snapshotting_finished,export_processing)>

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `allegro_3`
- Audiences: `605`
- Destinations: `dv360`
- State tuples: `snapshotting_finished/export_processing`
- Commands seen: `glcli --env allegro bifrost pizza --audience-id 605 --org-id 3`

Representative alerts:
- Q3GQQRY1UQLBSN/Q0XMBOU011G09E: 2026-05-15T07:31:04-07:00; allegro_3; audience 605; dv360; snapshotting_finished/export_processing. allegro (Marketing): Exports for audience 605 failed with states: <(snapshotting_finished,export_processing)>
  Runs: `605-dv360_796-scheduled__2026-05-08T00:00:00+00:00`, `605-dv360_796-scheduled__2026-05-15T00:00:00+00:00`

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
