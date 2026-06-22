<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# albertsons_6 live-ramp export-error

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `new`
Tags: `triage:needs_review`
Incidents: [Q19MJO5XIF1NHB](https://growthloop.pagerduty.com/incidents/Q19MJO5XIF1NHB)
Alerts: 1

## Current Summary

albertsons (Albertsons Media): Exports for audience 12535 failed with states: <(snapshotting_finished,export_error)>

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `albertsons_6`
- Audiences: `12535`
- Destinations: `live_ramp_activation`
- State tuples: `snapshotting_finished/export_error`
- Commands seen: `glcli --env albertsons bifrost pizza --audience-id 12535 --org-id 6`

Representative alerts:
- Q19MJO5XIF1NHB/Q1IJLLEGNNKSO5: 2026-06-18T07:41:12-07:00; albertsons_6; audience 12535; live_ramp_activation; snapshotting_finished/export_error. albertsons (Albertsons Media): Exports for audience 12535 failed with states: <(snapshotting_finished,export_error)>
  Runs: `12535-live_ramp_activation_4309-scheduled__2026-06-15T00:00:00+00:00`

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
