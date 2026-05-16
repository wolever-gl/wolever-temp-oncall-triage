<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# allegro_3 dv360 export-processing

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `new`
Tags: `triage:needs_review`
Incidents: [Q2KT0WUDEVL42Q](https://growthloop.pagerduty.com/incidents/Q2KT0WUDEVL42Q)
Alerts: 13

## Current Summary

allegro (Marketing): Exports for audience 1156 failed with states: <(snapshotting_finished,export_processing)>

## Alert Scope

- Alert facts: 13 imported, 13 linked to this group.
- Orgs: `allegro_3`
- Audiences: `1146`, `1156`, `147`, `168`, `171`, `198`, `204`, `208`, and 5 more
- Destinations: `dv360`
- State tuples: `snapshotting_finished/export_processing`
- Commands seen: `glcli --env allegro bifrost pizza --audience-id 1146 --org-id 3`, `glcli --env allegro bifrost pizza --audience-id 1156 --org-id 3`, `glcli --env allegro bifrost pizza --audience-id 147 --org-id 3`, and 10 more

Representative alerts:
- Q2KT0WUDEVL42Q/Q3HDTA29C9MC21: 2026-05-14T07:30:23-07:00; allegro_3; audience 147; dv360; snapshotting_finished/export_processing. allegro (Marketing): Exports for audience 147 failed with states: <(snapshotting_finished,export_processing)>
  Runs: `147-dv360_307-scheduled__2026-05-14T00:00:00+00:00`
- Q2KT0WUDEVL42Q/Q20UI4K3DRDUN5: 2026-05-14T07:30:28-07:00; allegro_3; audience 171; dv360; snapshotting_finished/export_processing. allegro (Marketing): Exports for audience 171 failed with states: <(snapshotting_finished,export_processing)>
  Runs: `171-dv360_348-scheduled__2026-05-14T00:00:00+00:00`
- Q2KT0WUDEVL42Q/Q3VG1I7S2QHN5T: 2026-05-14T07:30:28-07:00; allegro_3; audience 168; dv360; snapshotting_finished/export_processing. allegro (Marketing): Exports for audience 168 failed with states: <(snapshotting_finished,export_processing)>
  Runs: `168-dv360_341-scheduled__2026-05-14T00:00:00+00:00`
- Q2KT0WUDEVL42Q/Q20G1Z5CPEUMFR: 2026-05-14T07:30:31-07:00; allegro_3; audience 198; dv360; snapshotting_finished/export_processing. allegro (Marketing): Exports for audience 198 failed with states: <(snapshotting_finished,export_processing)>
  Runs: `198-dv360_397-scheduled__2026-05-14T00:00:00+00:00`
- Q2KT0WUDEVL42Q/Q38IGJL6DWENEO: 2026-05-14T07:30:32-07:00; allegro_3; audience 204; dv360; snapshotting_finished/export_processing. allegro (Marketing): Exports for audience 204 failed with states: <(snapshotting_finished,export_processing)>
  Runs: `204-dv360_409-scheduled__2026-05-14T00:00:00+00:00`
- Q2KT0WUDEVL42Q/Q2WJ0Z0L6FAY38: 2026-05-14T07:30:33-07:00; allegro_3; audience 208; dv360; snapshotting_finished/export_processing. allegro (Marketing): Exports for audience 208 failed with states: <(snapshotting_finished,export_processing)>
  Runs: `208-dv360_417-scheduled__2026-05-14T00:00:00+00:00`
- Q2KT0WUDEVL42Q/Q23OI8UAC2HN59: 2026-05-14T07:30:35-07:00; allegro_3; audience 222; dv360; snapshotting_finished/export_processing. allegro (Marketing): Exports for audience 222 failed with states: <(snapshotting_finished,export_processing)>
  Runs: `222-dv360_492-scheduled__2026-05-14T00:00:00+00:00`
- Q2KT0WUDEVL42Q/Q2T6GT2O71N8XY: 2026-05-14T07:30:38-07:00; allegro_3; audience 247; dv360; snapshotting_finished/export_processing. allegro (Marketing): Exports for audience 247 failed with states: <(snapshotting_finished,export_processing)>
  Runs: `247-dv360_518-scheduled__2026-05-14T00:00:00+00:00`
- Q2KT0WUDEVL42Q/Q0EI28M4KIM55L: 2026-05-14T07:30:41-07:00; allegro_3; audience 290; dv360; snapshotting_finished/export_processing. allegro (Marketing): Exports for audience 290 failed with states: <(snapshotting_finished,export_processing)>
  Runs: `290-dv360_576-scheduled__2026-05-14T00:00:00+00:00`
- Q2KT0WUDEVL42Q/Q0CLYY4QHN5IGY: 2026-05-14T07:30:42-07:00; allegro_3; audience 296; dv360; snapshotting_finished/export_processing. allegro (Marketing): Exports for audience 296 failed with states: <(snapshotting_finished,export_processing)>
  Runs: `296-dv360_588-scheduled__2026-05-14T00:00:00+00:00`
- Showing 10 of 13 alert facts; see `indexes/alert_facts.json` for the full imported set.

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
