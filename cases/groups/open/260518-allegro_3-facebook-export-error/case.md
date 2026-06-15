<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# allegro_3 facebook export-error

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `open`
Tags: `triage:needs_review`, `triage:blocked-env-unavailable`
Incidents: [Q29WSMU9ECGBC8](https://growthloop.pagerduty.com/incidents/Q29WSMU9ECGBC8)
Alerts: 1

## Current Summary

Triage preflight attempted, but Allegro export checks were skipped because this laptop cannot access the Allegro Bifrost proxy. Manual triage needs an environment with Allegro access or non-Pizza evidence.

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `allegro_3`
- Audiences: `1097`
- Destinations: `facebook`
- State tuples: `snapshotting_finished/export_error`
- Commands seen: `glcli --env allegro bifrost pizza --audience-id 1097 --org-id 3`

Representative alerts:
- Q29WSMU9ECGBC8/Q3Z9IW2NW1HVDW: 2026-05-18T07:32:57-07:00; allegro_3; audience 1097; facebook; snapshotting_finished/export_error. allegro (Advertising): Exports for audience 1097 failed with states: <(snapshotting_finished,export_error)>
  Runs: `1097-facebook_1473-scheduled__2026-05-18T00:00:00+00:00`

## Export Checks

- Checks: 1.
- States: `open`=1
- Blockers seen: `evidence_unavailable`

Check evidence:
- chk_q29wsmu9ecgbc8_q3z9iw2nw1hvdw (Q29WSMU9ECGBC8/Q3Z9IW2NW1HVDW): state=`open`, next_check_at=`2026-05-18T20:41:05.290Z`.
  Scope: env=allegro; org=3; audience=1097; endpoint=app_facebook_27; destination=facebook.
  Checked runs: `1097-facebook_1473-scheduled__2026-05-18T00:00:00+00:00`
  Command: `glcli --env allegro bifrost pizza --audience-id 1097 --org-id 3`
  Blockers: `evidence_unavailable`

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
