<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# fanatics_502 magnite-id-graph export-processing

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `monitoring`
Tags: `triage:needs_review`, `monitoring:export-processing`
Incidents: [Q3CJV4Z2MW22Y4](https://growthloop.pagerduty.com/incidents/Q3CJV4Z2MW22Y4)
Alerts: 1

## Current Summary

Auto-monitored from Pizza export checks: 1 alert-scoped export check(s) are still processing and 0 are already healthy.

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `fanatics_502`
- Audiences: `31238`
- Destinations: `magnite_id_graph`
- State tuples: `snapshotting_finished/export_processing`
- Commands seen: `glcli --env prod bifrost pizza --audience-id 31238 --org-id 502`

Representative alerts:
- Q3CJV4Z2MW22Y4/Q1JDV22LVHD7SD: 2026-06-16T08:12:54-07:00; fanatics_502; audience 31238; magnite_id_graph; snapshotting_finished/export_processing. fanatics (default): Exports for audience 31238 failed with states: <(snapshotting_finished,export_processing)>
  Runs: `31238-magnite_id_graph_19146-scheduled__2026-06-16T00:00:00+00:00`

## Export Checks

- Checks: 1.
- States: `monitoring`=1

Check evidence:
- chk_q3cjv4z2mw22y4_q1jdv22lvhd7sd (Q3CJV4Z2MW22Y4/Q1JDV22LVHD7SD): state=`monitoring`, next_check_at=`2026-06-22T21:47:21.171Z`.
  Scope: env=prod; org=502; audience=31238; endpoint=app_magnite_id_graph_1920; destination=magnite_id_graph.
  Checked runs: `31238-magnite_id_graph_19146-scheduled__2026-06-16T00:00:00+00:00`
  Command: `glcli --env prod bifrost pizza --audience-id 31238 --org-id 502`
  Run 31238-magnite_id_graph_19146-scheduled__2026-06-16T00:00:00+00:00: health=`monitoring`; created=2026-06-16T01:09:03.872315+00:00; snapshotting=snapshotting_finished; export=export_processing; failed=0.

## Recent Evidence

- Auto-monitored from Pizza export checks: 1 alert-scoped export check(s) are still processing and 0 are already healthy.
  Source: `check-exports`; kind: `export_check`; captured: `2026-06-22T21:32:38.695Z`.

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
