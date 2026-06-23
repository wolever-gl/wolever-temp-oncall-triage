<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# fanatics_502 magnite-id-graph export-processing

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `monitoring`
Tags: `triage:needs_review`, `monitoring:export-processing`
Incidents: [Q252C2NNBIQ8WP](https://growthloop.pagerduty.com/incidents/Q252C2NNBIQ8WP)
Alerts: 1

## Current Summary

Auto-monitored from Pizza export checks: 1 alert-scoped export check(s) are still processing and 0 are already healthy.

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `fanatics_502`
- Audiences: `35085`
- Destinations: `magnite_id_graph`
- State tuples: `snapshotting_finished/export_processing`
- Commands seen: `glcli --env prod bifrost pizza --audience-id 35085 --org-id 502`

Representative alerts:
- Q252C2NNBIQ8WP/Q02DAOLT6HYMG0: 2026-06-03T08:17:40-07:00; fanatics_502; audience 35085; magnite_id_graph; snapshotting_finished/export_processing. fanatics (default): Exports for audience 35085 failed with states: <(snapshotting_finished,export_processing)>
  Runs: `35085-magnite_id_graph_21319-scheduled__2026-06-03T00:00:00+00:00`

## Export Checks

- Checks: 1.
- States: `monitoring`=1

Check evidence:
- chk_q252c2nnbiq8wp_q02daolt6hymg0 (Q252C2NNBIQ8WP/Q02DAOLT6HYMG0): state=`monitoring`, next_check_at=`2026-06-22T21:27:19.303Z`.
  Scope: env=prod; org=502; audience=35085; endpoint=app_magnite_id_graph_1920; destination=magnite_id_graph.
  Checked runs: `35085-magnite_id_graph_21319-scheduled__2026-06-03T00:00:00+00:00`
  Command: `glcli --env prod bifrost pizza --audience-id 35085 --org-id 502`
  Run 35085-magnite_id_graph_21319-scheduled__2026-06-03T00:00:00+00:00: health=`monitoring`; created=2026-06-03T02:14:08.618709+00:00; snapshotting=snapshotting_finished; export=export_processing; failed=0.

## Recent Evidence

- Auto-monitored from Pizza export checks: 1 alert-scoped export check(s) are still processing and 0 are already healthy.
  Source: `check-exports`; kind: `export_check`; captured: `2026-06-22T21:12:35.597Z`.

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
