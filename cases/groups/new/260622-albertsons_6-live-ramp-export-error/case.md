<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# albertsons_6 live-ramp export-error

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `new`
Tags: `triage:needs_review`
Incidents: [Q1S0Q38FOEN2XY](https://growthloop.pagerduty.com/incidents/Q1S0Q38FOEN2XY)
Alerts: 3

## Current Summary

albertsons (Albertsons Media): Exports for audience 12506 failed with states: <(snapshotting_finished,export_error)>

## Alert Scope

- Alert facts: 3 imported, 3 linked to this group.
- Orgs: `albertsons_6`
- Audiences: `12468`, `12495`, `12506`
- Destinations: `live_ramp_activation`
- State tuples: `snapshotting_finished/export_error`
- Commands seen: `glcli --env albertsons bifrost pizza --audience-id 12468 --org-id 6`, `glcli --env albertsons bifrost pizza --audience-id 12495 --org-id 6`, `glcli --env albertsons bifrost pizza --audience-id 12506 --org-id 6`

Representative alerts:
- Q1S0Q38FOEN2XY/Q0QLGOOH2BMW5P: 2026-06-22T07:42:25-07:00; albertsons_6; audience 12468; live_ramp_activation; snapshotting_finished/export_error. albertsons (Albertsons Media): Exports for audience 12468 failed with states: <(snapshotting_finished,export_error)>
  Runs: `12468-live_ramp_activation_4242-scheduled__2026-06-14T00:00:00+00:00`, `12468-live_ramp_activation_4242-scheduled__2026-06-21T00:00:00+00:00`
- Q1S0Q38FOEN2XY/Q0491BXP5ERJ3Q: 2026-06-22T07:42:32-07:00; albertsons_6; audience 12495; live_ramp_activation; snapshotting_finished/export_error. albertsons (Albertsons Media): Exports for audience 12495 failed with states: <(snapshotting_finished,export_error)>
  Runs: `12495-live_ramp_activation_4269-scheduled__2026-06-14T00:00:00+00:00`, `12495-live_ramp_activation_4269-scheduled__2026-06-21T00:00:00+00:00`
- Q1S0Q38FOEN2XY/Q2T6FOTOJONNB5: 2026-06-22T07:42:35-07:00; albertsons_6; audience 12506; live_ramp_activation; snapshotting_finished/export_error. albertsons (Albertsons Media): Exports for audience 12506 failed with states: <(snapshotting_finished,export_error)>
  Runs: `12506-live_ramp_activation_4280-scheduled__2026-06-14T00:00:00+00:00`, `12506-live_ramp_activation_4280-scheduled__2026-06-21T00:00:00+00:00`

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
