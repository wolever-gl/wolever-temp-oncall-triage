<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# fanatics_502 magnite-id-graph export-processing

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `monitoring`
Tags: `triage:needs_review`, `monitoring:export-processing`
Incidents: [Q16PUZFUKXV9JR](https://growthloop.pagerduty.com/incidents/Q16PUZFUKXV9JR)
Alerts: 1

## Current Summary

Auto-monitored from Pizza export checks: 1 alert-scoped export check(s) are still processing and 0 are already healthy.

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `fanatics_502`
- Audiences: `36234`
- Destinations: `magnite_id_graph`
- State tuples: `snapshotting_finished/export_processing`
- Commands seen: `glcli --env prod bifrost pizza --audience-id 36234 --org-id 502`

Representative alerts:
- Q16PUZFUKXV9JR/Q1KA72EYWL61UU: 2026-06-16T08:14:55-07:00; fanatics_502; audience 36234; magnite_id_graph; snapshotting_finished/export_processing. fanatics (default): Exports for audience 36234 failed with states: <(snapshotting_finished,export_processing)>
  Runs: `36234-magnite_id_graph_22111-scheduled__2026-06-16T00:00:00+00:00`

## Export Checks

- Checks: 1.
- States: `monitoring`=1

Check evidence:
- chk_q16puzfukxv9jr_q1ka72eywl61uu (Q16PUZFUKXV9JR/Q1KA72EYWL61UU): state=`monitoring`, next_check_at=`2026-06-22T21:46:59.721Z`.
  Scope: env=prod; org=502; audience=36234; endpoint=app_magnite_id_graph_1920; destination=magnite_id_graph.
  Checked runs: `36234-magnite_id_graph_22111-scheduled__2026-06-16T00:00:00+00:00`, `36234-magnite_id_graph_22111-scheduled__2026-06-16T00:00:00+00:00`
  Command: `glcli --env prod bifrost pizza --audience-id 36234 --org-id 502`
  Run 36234-magnite_id_graph_22111-scheduled__2026-06-16T00:00:00+00:00: health=`monitoring`; created=2026-06-16T03:14:43.939292+00:00; snapshotting=snapshotting_finished; export=export_processing; failed=0.
  Run 36234-magnite_id_graph_22111-scheduled__2026-06-16T00:00:00+00:00: health=`monitoring`; created=2026-06-16T03:14:43.939292+00:00; snapshotting=snapshotting_finished; export=export_processing; failed=0.

## Recent Evidence

- Auto-monitored from Pizza export checks: 1 alert-scoped export check(s) are still processing and 0 are already healthy.
  Source: `check-exports`; kind: `export_check`; captured: `2026-06-22T21:32:15.402Z`.

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
