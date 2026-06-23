<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# priceline_370 iterable export-processing

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `open`
Tags: `triage:needs_review`
Incidents: [Q33G1FKNUOJQ4Q](https://growthloop.pagerduty.com/incidents/Q33G1FKNUOJQ4Q)
Alerts: 1

## Current Summary

priceline (default): Exports for signal 671 failed with states: <(snapshotting_finished,export_processing)>

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `priceline_370`
- Audiences: `671`
- Destinations: `iterable_object`
- State tuples: `snapshotting_finished/export_processing`
- Commands seen: `glcli --env prod bifrost pizza --audience-id 671 --org-id 370`

Representative alerts:
- Q33G1FKNUOJQ4Q/Q31D2FFRRZ277Q: 2026-06-18T07:37:54-07:00; priceline_370; audience 671; iterable_object; snapshotting_finished/export_processing. priceline (default): Exports for signal 671 failed with states: <(snapshotting_finished,export_processing)>
  Runs: `671-iterable_object_671-scheduled__2026-06-16T17:00:00+00:00`

## Export Checks

- Checks: 1.
- States: `blocked`=1
- Blockers seen: `failed_export_count`

Check evidence:
- chk_q33g1fknuojq4q_q31d2ffrrz277q (Q33G1FKNUOJQ4Q/Q31D2FFRRZ277Q): state=`blocked`.
  Scope: env=prod; org=370; audience=671; endpoint=app_iterable_1009; destination=iterable_object.
  Checked runs: `671-iterable_object_671-scheduled__2026-06-16T17:00:00+00:00`
  Command: `glcli --env prod bifrost pizza --audience-id 671 --org-id 370`
  Blockers: `failed_export_count`
  Run 671-iterable_object_671-scheduled__2026-06-16T17:00:00+00:00: health=`blocked`; blockers=failed_export_count; created=2026-06-17T17:09:24.458980+00:00; snapshotting=snapshotting_finished; export=export_processing; failed=5802.

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
