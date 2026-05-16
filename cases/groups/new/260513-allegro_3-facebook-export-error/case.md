<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# allegro_3 facebook export-error

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `new`
Tags: `triage:needs_review`
Incidents: [Q0UU3VAZ2I5R5H](https://growthloop.pagerduty.com/incidents/Q0UU3VAZ2I5R5H)
Alerts: 2

## Current Summary

allegro (Advertising): Exports for audience 1077 failed with states: <(snapshotting_finished,export_error)>

## Alert Scope

- Alert facts: 2 imported, 2 linked to this group.
- Orgs: `allegro_3`
- Audiences: `1061`, `1077`
- Destinations: `facebook`
- State tuples: `snapshotting_finished/export_error`
- Commands seen: `glcli --env allegro bifrost pizza --audience-id 1061 --org-id 3`, `glcli --env allegro bifrost pizza --audience-id 1077 --org-id 3`

Representative alerts:
- Q0UU3VAZ2I5R5H/Q1BGCBNCLUQNDV: 2026-05-13T07:32:49-07:00; allegro_3; audience 1061; facebook; snapshotting_finished/export_error. allegro (Advertising): Exports for audience 1061 failed with states: <(snapshotting_finished,export_error)>
  Runs: `1061-facebook_1428-scheduled__2026-05-13T00:00:00+00:00`
- Q0UU3VAZ2I5R5H/Q1ZK90SLHIX1R5: 2026-05-13T07:32:51-07:00; allegro_3; audience 1077; facebook; snapshotting_finished/export_error. allegro (Advertising): Exports for audience 1077 failed with states: <(snapshotting_finished,export_error)>
  Runs: `1077-facebook_1454-scheduled__2026-05-13T00:00:00+00:00`

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
