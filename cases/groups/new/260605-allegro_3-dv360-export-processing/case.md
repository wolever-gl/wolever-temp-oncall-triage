<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# allegro_3 dv360 export-processing

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `new`
Tags: `triage:needs_review`
Incidents: [Q0IL94HA9T56IR](https://growthloop.pagerduty.com/incidents/Q0IL94HA9T56IR)
Alerts: 8

## Current Summary

allegro (Marketing): Exports for audience 1144 failed with states: <(snapshotting_finished,export_processing)>

## Alert Scope

- Alert facts: 8 imported, 8 linked to this group.
- Orgs: `allegro_3`
- Audiences: `1016`, `1144`, `153`, `161`, `164`, `170`, `91`, `996`
- Destinations: `dv360`
- State tuples: `snapshotting_finished/export_processing`
- Commands seen: `glcli --env allegro bifrost pizza --audience-id 1016 --org-id 3`, `glcli --env allegro bifrost pizza --audience-id 1144 --org-id 3`, `glcli --env allegro bifrost pizza --audience-id 153 --org-id 3`, and 5 more

Representative alerts:
- Q0IL94HA9T56IR/Q17FK78FSS63ZY: 2026-06-05T07:30:13-07:00; allegro_3; audience 91; dv360; snapshotting_finished/export_processing. allegro (Marketing): Exports for audience 91 failed with states: <(snapshotting_finished,export_processing)>
  Runs: `91-dv360_176-scheduled__2026-06-05T00:00:00+00:00`
- Q0IL94HA9T56IR/Q22Q0WX9C288HG: 2026-06-05T07:30:23-07:00; allegro_3; audience 153; dv360; snapshotting_finished/export_processing. allegro (Marketing): Exports for audience 153 failed with states: <(snapshotting_finished,export_processing)>
  Runs: `153-dv360_320-scheduled__2026-06-05T00:00:00+00:00`
- Q0IL94HA9T56IR/Q3NSFHPE2HUWGD: 2026-06-05T07:30:24-07:00; allegro_3; audience 161; dv360; snapshotting_finished/export_processing. allegro (Marketing): Exports for audience 161 failed with states: <(snapshotting_finished,export_processing)>
  Runs: `161-dv360_329-scheduled__2026-06-05T00:00:00+00:00`
- Q0IL94HA9T56IR/Q3PASMT3FG2OBP: 2026-06-05T07:30:25-07:00; allegro_3; audience 164; dv360; snapshotting_finished/export_processing. allegro (Marketing): Exports for audience 164 failed with states: <(snapshotting_finished,export_processing)>
  Runs: `164-dv360_337-scheduled__2026-06-05T00:00:00+00:00`
- Q0IL94HA9T56IR/Q0JJF0HYI1XRRH: 2026-06-05T07:30:26-07:00; allegro_3; audience 170; dv360; snapshotting_finished/export_processing. allegro (Marketing): Exports for audience 170 failed with states: <(snapshotting_finished,export_processing)>
  Runs: `170-dv360_346-scheduled__2026-06-05T00:00:00+00:00`
- Q0IL94HA9T56IR/Q2KVZSOFQSLCZW: 2026-06-05T07:32:41-07:00; allegro_3; audience 996; dv360; snapshotting_finished/export_processing. allegro (Marketing): Exports for audience 996 failed with states: <(snapshotting_finished,export_processing)>
  Runs: `996-dv360_1289-scheduled__2026-06-05T00:00:00+00:00`
- Q0IL94HA9T56IR/Q3E1T66YXXU55K: 2026-06-05T07:32:44-07:00; allegro_3; audience 1016; dv360; snapshotting_finished/export_processing. allegro (Marketing): Exports for audience 1016 failed with states: <(snapshotting_finished,export_processing)>
  Runs: `1016-dv360_1321-scheduled__2026-06-05T00:00:00+00:00`
- Q0IL94HA9T56IR/Q2W4DRTC87V08O: 2026-06-05T07:33:07-07:00; allegro_3; audience 1144; dv360; snapshotting_finished/export_processing. allegro (Marketing): Exports for audience 1144 failed with states: <(snapshotting_finished,export_processing)>
  Runs: `1144-dv360_1660-scheduled__2026-06-05T00:00:00+00:00`

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
