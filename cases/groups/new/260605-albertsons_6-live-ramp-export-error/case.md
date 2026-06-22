<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# albertsons_6 live-ramp export-error

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `new`
Tags: `triage:needs_review`
Incidents: [Q1E4EUPF9HDZNA](https://growthloop.pagerduty.com/incidents/Q1E4EUPF9HDZNA)
Alerts: 4

## Current Summary

albertsons (Albertsons Media): Exports for audience 12875 failed with states: <(snapshotting_finished,export_error)>

## Alert Scope

- Alert facts: 4 imported, 4 linked to this group.
- Orgs: `albertsons_6`
- Audiences: `12214`, `12399`, `12862`, `12875`
- Destinations: `live_ramp_activation`
- State tuples: `snapshotting_finished/export_error`
- Commands seen: `glcli --env albertsons bifrost pizza --audience-id 12214 --org-id 6`, `glcli --env albertsons bifrost pizza --audience-id 12399 --org-id 6`, `glcli --env albertsons bifrost pizza --audience-id 12862 --org-id 6`, and 1 more

Representative alerts:
- Q1E4EUPF9HDZNA/Q239L21T41CUJE: 2026-06-05T08:09:52-07:00; albertsons_6; audience 12214; live_ramp_activation; snapshotting_finished/export_error. albertsons (Albertsons Media): Exports for audience 12214 failed with states: <(snapshotting_finished,export_error)>
  Runs: `12214-live_ramp_activation_4017-scheduled__2026-05-29T00:00:00+00:00`, `12214-live_ramp_activation_4017-scheduled__2026-06-05T00:00:00+00:00`
- Q1E4EUPF9HDZNA/Q3VSW000L0VZB7: 2026-06-05T08:10:34-07:00; albertsons_6; audience 12399; live_ramp_activation; snapshotting_finished/export_error. albertsons (Albertsons Media): Exports for audience 12399 failed with states: <(snapshotting_finished,export_error)>
  Runs: `12399-live_ramp_activation_4176-scheduled__2026-05-28T00:00:00+00:00`, `12399-live_ramp_activation_4176-scheduled__2026-06-04T00:00:00+00:00`
- Q1E4EUPF9HDZNA/Q2L0ANGULZSN05: 2026-06-05T08:11:49-07:00; albertsons_6; audience 12862; live_ramp_activation; snapshotting_finished/export_error. albertsons (Albertsons Media): Exports for audience 12862 failed with states: <(snapshotting_finished,export_error)>
  Runs: `12862-live_ramp_activation_4610-scheduled__2026-06-05T00:00:00+00:00`, `12862-live_ramp_activation_4610-webapp__2026-06-05T05:45:01+00:00`
- Q1E4EUPF9HDZNA/Q15QOMNUU07G2Q: 2026-06-05T08:11:51-07:00; albertsons_6; audience 12875; live_ramp_activation; snapshotting_finished/export_error. albertsons (Albertsons Media): Exports for audience 12875 failed with states: <(snapshotting_finished,export_error)>
  Runs: `12875-live_ramp_activation_4613-scheduled__2026-06-05T00:00:00+00:00`, `12875-live_ramp_activation_4613-webapp__2026-06-05T05:45:52+00:00`

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
