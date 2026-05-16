<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# allegro_3 dv360 export-error

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `open`
Tags: `triage:needs_review`
Incidents: [Q3HYNV525MK1RW](https://growthloop.pagerduty.com/incidents/Q3HYNV525MK1RW)
Alerts: 8

## Current Summary

allegro (Marketing): Exports for audience 731 failed with states: <(snapshotting_finished,export_error)>

## Alert Scope

- Alert facts: 8 imported, 8 linked to this group.
- Orgs: `allegro_3`
- Audiences: `64`, `731`, `79`, `81`, `82`, `83`, `84`, `85`
- Destinations: `dv360`
- State tuples: `snapshotting_finished/export_error`
- Commands seen: `glcli --env allegro bifrost pizza --audience-id 64 --org-id 3`, `glcli --env allegro bifrost pizza --audience-id 731 --org-id 3`, `glcli --env allegro bifrost pizza --audience-id 79 --org-id 3`, and 5 more

Representative alerts:
- Q3HYNV525MK1RW/Q29CGW5G8B13GY: 2026-05-11T07:30:07-07:00; allegro_3; audience 64; dv360; snapshotting_finished/export_error. allegro (Marketing): Exports for audience 64 failed with states: <(snapshotting_finished,export_error)>
  Runs: `64-dv360_122-scheduled__2026-05-02T00:00:00+00:00`, `64-dv360_122-scheduled__2026-05-03T00:00:00+00:00`, `64-dv360_122-scheduled__2026-05-04T00:00:00+00:00`, and 7 more
- Q3HYNV525MK1RW/Q35X0XHHQ7QUQB: 2026-05-11T07:30:09-07:00; allegro_3; audience 79; dv360; snapshotting_finished/export_error. allegro (Marketing): Exports for audience 79 failed with states: <(snapshotting_finished,export_error)>
  Runs: `79-dv360_155-scheduled__2026-05-02T00:00:00+00:00`, `79-dv360_155-scheduled__2026-05-03T00:00:00+00:00`, `79-dv360_155-scheduled__2026-05-04T00:00:00+00:00`, and 7 more
- Q3HYNV525MK1RW/Q02KTNBYR73T4Z: 2026-05-11T07:30:11-07:00; allegro_3; audience 82; dv360; snapshotting_finished/export_error. allegro (Marketing): Exports for audience 82 failed with states: <(snapshotting_finished,export_error)>
  Runs: `82-dv360_161-scheduled__2026-05-02T00:00:00+00:00`, `82-dv360_161-scheduled__2026-05-03T00:00:00+00:00`, `82-dv360_161-scheduled__2026-05-04T00:00:00+00:00`, and 7 more
- Q3HYNV525MK1RW/Q1CX75RDLA3ZW2: 2026-05-11T07:30:11-07:00; allegro_3; audience 84; dv360; snapshotting_finished/export_error. allegro (Marketing): Exports for audience 84 failed with states: <(snapshotting_finished,export_error)>
  Runs: `84-dv360_165-scheduled__2026-05-02T00:00:00+00:00`, `84-dv360_165-scheduled__2026-05-03T00:00:00+00:00`, `84-dv360_165-scheduled__2026-05-04T00:00:00+00:00`, and 7 more
- Q3HYNV525MK1RW/Q2NSJAQIBGGO06: 2026-05-11T07:30:11-07:00; allegro_3; audience 83; dv360; snapshotting_finished/export_error. allegro (Marketing): Exports for audience 83 failed with states: <(snapshotting_finished,export_error)>
  Runs: `83-dv360_163-scheduled__2026-05-02T00:00:00+00:00`, `83-dv360_163-scheduled__2026-05-03T00:00:00+00:00`, `83-dv360_163-scheduled__2026-05-04T00:00:00+00:00`, and 7 more
- Q3HYNV525MK1RW/Q3XS5Z1467IIOT: 2026-05-11T07:30:11-07:00; allegro_3; audience 81; dv360; snapshotting_finished/export_error. allegro (Marketing): Exports for audience 81 failed with states: <(snapshotting_finished,export_error)>
  Runs: `81-dv360_159-scheduled__2026-05-02T00:00:00+00:00`, `81-dv360_159-scheduled__2026-05-03T00:00:00+00:00`, `81-dv360_159-scheduled__2026-05-04T00:00:00+00:00`, and 7 more
- Q3HYNV525MK1RW/Q2VIXXEGDI3CDN: 2026-05-11T07:30:12-07:00; allegro_3; audience 85; dv360; snapshotting_finished/export_error. allegro (Marketing): Exports for audience 85 failed with states: <(snapshotting_finished,export_error)>
  Runs: `85-dv360_167-scheduled__2026-05-02T00:00:00+00:00`, `85-dv360_167-scheduled__2026-05-03T00:00:00+00:00`, `85-dv360_167-scheduled__2026-05-04T00:00:00+00:00`, and 7 more
- Q3HYNV525MK1RW/Q2LKZVLEDH0ZAC: 2026-05-11T07:31:35-07:00; allegro_3; audience 731; dv360; snapshotting_finished/export_error. allegro (Marketing): Exports for audience 731 failed with states: <(snapshotting_finished,export_error)>
  Runs: `731-dv360_1679-webapp__2026-05-05T13:28:32+00:00`

## Export Checks

- Checks: 8.
- States: `open`=8
- Blockers seen: `evidence_unavailable`

Check evidence:
- chk_q3hynv525mk1rw_q02ktnbyr73t4z (Q3HYNV525MK1RW/Q02KTNBYR73T4Z): state=`open`, next_check_at=`2026-05-16T20:55:58.231Z`.
  Scope: env=allegro; org=3; audience=82; endpoint=app_dv360_1; destination=dv360.
  Checked runs: `82-dv360_161-scheduled__2026-05-02T00:00:00+00:00`, `82-dv360_161-scheduled__2026-05-03T00:00:00+00:00`, `82-dv360_161-scheduled__2026-05-04T00:00:00+00:00`, `82-dv360_161-scheduled__2026-05-05T00:00:00+00:00`, and 6 more
  Command: `glcli --env allegro bifrost pizza --audience-id 82 --org-id 3`
  Blockers: `evidence_unavailable`
- chk_q3hynv525mk1rw_q1cx75rdla3zw2 (Q3HYNV525MK1RW/Q1CX75RDLA3ZW2): state=`open`, next_check_at=`2026-05-16T20:55:58.231Z`.
  Scope: env=allegro; org=3; audience=84; endpoint=app_dv360_1; destination=dv360.
  Checked runs: `84-dv360_165-scheduled__2026-05-02T00:00:00+00:00`, `84-dv360_165-scheduled__2026-05-03T00:00:00+00:00`, `84-dv360_165-scheduled__2026-05-04T00:00:00+00:00`, `84-dv360_165-scheduled__2026-05-05T00:00:00+00:00`, and 6 more
  Command: `glcli --env allegro bifrost pizza --audience-id 84 --org-id 3`
  Blockers: `evidence_unavailable`
- chk_q3hynv525mk1rw_q29cgw5g8b13gy (Q3HYNV525MK1RW/Q29CGW5G8B13GY): state=`open`, next_check_at=`2026-05-16T20:55:58.231Z`.
  Scope: env=allegro; org=3; audience=64; endpoint=app_dv360_1; destination=dv360.
  Checked runs: `64-dv360_122-scheduled__2026-05-02T00:00:00+00:00`, `64-dv360_122-scheduled__2026-05-03T00:00:00+00:00`, `64-dv360_122-scheduled__2026-05-04T00:00:00+00:00`, `64-dv360_122-scheduled__2026-05-05T00:00:00+00:00`, and 6 more
  Command: `glcli --env allegro bifrost pizza --audience-id 64 --org-id 3`
  Blockers: `evidence_unavailable`
- chk_q3hynv525mk1rw_q2lkzvledh0zac (Q3HYNV525MK1RW/Q2LKZVLEDH0ZAC): state=`open`, next_check_at=`2026-05-16T20:55:58.231Z`.
  Scope: env=allegro; org=3; audience=731; endpoint=app_dv360_1; destination=dv360.
  Checked runs: `731-dv360_1679-webapp__2026-05-05T13:28:32+00:00`
  Command: `glcli --env allegro bifrost pizza --audience-id 731 --org-id 3`
  Blockers: `evidence_unavailable`
- chk_q3hynv525mk1rw_q2nsjaqibggo06 (Q3HYNV525MK1RW/Q2NSJAQIBGGO06): state=`open`, next_check_at=`2026-05-16T20:55:58.231Z`.
  Scope: env=allegro; org=3; audience=83; endpoint=app_dv360_1; destination=dv360.
  Checked runs: `83-dv360_163-scheduled__2026-05-02T00:00:00+00:00`, `83-dv360_163-scheduled__2026-05-03T00:00:00+00:00`, `83-dv360_163-scheduled__2026-05-04T00:00:00+00:00`, `83-dv360_163-scheduled__2026-05-05T00:00:00+00:00`, and 6 more
  Command: `glcli --env allegro bifrost pizza --audience-id 83 --org-id 3`
  Blockers: `evidence_unavailable`
- chk_q3hynv525mk1rw_q2vixxegdi3cdn (Q3HYNV525MK1RW/Q2VIXXEGDI3CDN): state=`open`, next_check_at=`2026-05-16T20:55:58.231Z`.
  Scope: env=allegro; org=3; audience=85; endpoint=app_dv360_1; destination=dv360.
  Checked runs: `85-dv360_167-scheduled__2026-05-02T00:00:00+00:00`, `85-dv360_167-scheduled__2026-05-03T00:00:00+00:00`, `85-dv360_167-scheduled__2026-05-04T00:00:00+00:00`, `85-dv360_167-scheduled__2026-05-05T00:00:00+00:00`, and 6 more
  Command: `glcli --env allegro bifrost pizza --audience-id 85 --org-id 3`
  Blockers: `evidence_unavailable`
- chk_q3hynv525mk1rw_q35x0xhhq7quqb (Q3HYNV525MK1RW/Q35X0XHHQ7QUQB): state=`open`, next_check_at=`2026-05-16T20:55:58.231Z`.
  Scope: env=allegro; org=3; audience=79; endpoint=app_dv360_1; destination=dv360.
  Checked runs: `79-dv360_155-scheduled__2026-05-02T00:00:00+00:00`, `79-dv360_155-scheduled__2026-05-03T00:00:00+00:00`, `79-dv360_155-scheduled__2026-05-04T00:00:00+00:00`, `79-dv360_155-scheduled__2026-05-05T00:00:00+00:00`, and 6 more
  Command: `glcli --env allegro bifrost pizza --audience-id 79 --org-id 3`
  Blockers: `evidence_unavailable`
- chk_q3hynv525mk1rw_q3xs5z1467iiot (Q3HYNV525MK1RW/Q3XS5Z1467IIOT): state=`open`, next_check_at=`2026-05-16T20:55:58.231Z`.
  Scope: env=allegro; org=3; audience=81; endpoint=app_dv360_1; destination=dv360.
  Checked runs: `81-dv360_159-scheduled__2026-05-02T00:00:00+00:00`, `81-dv360_159-scheduled__2026-05-03T00:00:00+00:00`, `81-dv360_159-scheduled__2026-05-04T00:00:00+00:00`, `81-dv360_159-scheduled__2026-05-05T00:00:00+00:00`, and 6 more
  Command: `glcli --env allegro bifrost pizza --audience-id 81 --org-id 3`
  Blockers: `evidence_unavailable`

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
