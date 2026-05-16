# allegro_3 dv360 export-processing

State: `new`
Tags: `triage:needs_review`
Incidents: [Q0UU3VAZ2I5R5H](https://growthloop.pagerduty.com/incidents/Q0UU3VAZ2I5R5H)
Alerts: 2

## Current Summary

allegro (Marketing): Exports for audience 638 failed with states: <(snapshotting_finished,export_processing)>

## Alert Scope

- Alert facts: 2 imported, 2 linked to this group.
- Orgs: `allegro_3`
- Audiences: `386`, `638`
- Destinations: `dv360`
- State tuples: `snapshotting_finished/export_processing`
- Commands seen: `glcli --env allegro bifrost pizza --audience-id 386 --org-id 3`, `glcli --env allegro bifrost pizza --audience-id 638 --org-id 3`

Representative alerts:
- Q0UU3VAZ2I5R5H/Q2N568NUPSLQPL: 2026-05-13T07:31:05-07:00; allegro_3; audience 386; dv360; snapshotting_finished/export_processing. allegro (Advertising): Exports for audience 386 failed with states: <(snapshotting_finished,export_processing)>
  Runs: `386-dv360_756-scheduled__2026-05-13T00:00:00+00:00`
- Q0UU3VAZ2I5R5H/Q1PF1QO0XZY8GM: 2026-05-13T07:31:22-07:00; allegro_3; audience 638; dv360; snapshotting_finished/export_processing. allegro (Marketing): Exports for audience 638 failed with states: <(snapshotting_finished,export_processing)>
  Runs: `638-dv360_824-scheduled__2026-05-13T00:00:00+00:00`

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
