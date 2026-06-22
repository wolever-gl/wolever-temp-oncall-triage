<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# fanatics_502 magnite-id-graph export-processing

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `new`
Tags: `triage:needs_review`
Incidents: [Q16PUZFUKXV9JR](https://growthloop.pagerduty.com/incidents/Q16PUZFUKXV9JR)
Alerts: 1

## Current Summary

fanatics (default): Exports for audience 36234 failed with states: <(snapshotting_finished,export_processing)>

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `fanatics_502`
- Audiences: `36234`
- Destinations: `magnite_id_graph`
- State tuples: `snapshotting_finished/export_processing`
- Commands seen: `glcli --env prod bifrost pizza --audience-id 36234 --org-id 502`

Representative alerts:
- Q16PUZFUKXV9JR/Q1KA72EYWL61UU: 2026-06-16T08:14:55-07:00; fanatics_502; audience 36234; magnite_id_graph; snapshotting_finished/export_processing. fanatics (default): Exports for audience 36234 failed with states: <(snapshotting_finished,export_processing)>
  Runs: `36234-magnite_id_graph_22111-scheduled__2026-06-16T00:00:00+00:00`

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
