<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# allegro_3 dv360 export-processing

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `open`
Tags: `triage:needs_review`, `triage:blocked-env-unavailable`
Incidents: [Q2IX58AKEIP919](https://growthloop.pagerduty.com/incidents/Q2IX58AKEIP919)
Alerts: 1

## Current Summary

Triage preflight attempted, but Allegro export checks were skipped because this laptop cannot access the Allegro Bifrost proxy. Manual triage needs an environment with Allegro access or non-Pizza evidence.

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `allegro_3`
- Audiences: `1266`
- Destinations: `dv360`
- State tuples: `snapshotting_finished/export_processing`
- Commands seen: `glcli --env allegro bifrost pizza --audience-id 1266 --org-id 3`

Representative alerts:
- Q2IX58AKEIP919/Q241163C11ECDT: 2026-05-18T07:33:19-07:00; allegro_3; audience 1266; dv360; snapshotting_finished/export_processing. allegro (Marketing): Exports for audience 1266 failed with states: <(snapshotting_finished,export_processing)>
  Runs: `1266-dv360_1668-scheduled__2026-05-18T00:00:00+00:00`

## Export Checks

- Checks: 1.
- States: `open`=1
- Blockers seen: `evidence_unavailable`

Check evidence:
- chk_q2ix58akeip919_q241163c11ecdt (Q2IX58AKEIP919/Q241163C11ECDT): state=`open`, next_check_at=`2026-05-18T20:40:37.702Z`.
  Scope: env=allegro; org=3; audience=1266; endpoint=app_dv360_5; destination=dv360.
  Checked runs: `1266-dv360_1668-scheduled__2026-05-18T00:00:00+00:00`
  Command: `glcli --env allegro bifrost pizza --audience-id 1266 --org-id 3`
  Blockers: `evidence_unavailable`

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
