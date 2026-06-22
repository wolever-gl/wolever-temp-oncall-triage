<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# allegro_3 facebook export-error

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `new`
Tags: `triage:needs_review`
Incidents: [Q0QZZZPU022XG8](https://growthloop.pagerduty.com/incidents/Q0QZZZPU022XG8)
Alerts: 1

## Current Summary

allegro (Marketing): Exports for audience 64 failed with states: <(snapshotting_finished,export_error)>

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `allegro_3`
- Audiences: `64`
- Destinations: `facebook`
- State tuples: `snapshotting_finished/export_error`
- Commands seen: `glcli --env allegro bifrost pizza --audience-id 64 --org-id 3`

Representative alerts:
- Q0QZZZPU022XG8/Q01PQXH8VWNEUS: 2026-06-19T07:30:08-07:00; allegro_3; audience 64; facebook; snapshotting_finished/export_error. allegro (Marketing): Exports for audience 64 failed with states: <(snapshotting_finished,export_error)>
  Runs: `64-facebook_125-scheduled__2026-06-10T00:00:00+00:00`, `64-facebook_125-scheduled__2026-06-11T00:00:00+00:00`, `64-facebook_125-scheduled__2026-06-12T00:00:00+00:00`, and 7 more

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
