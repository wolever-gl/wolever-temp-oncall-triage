<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# trumanshow_336 snapshotting-error

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `open`
Tags: `triage:needs_review`
Incidents: [Q04M030A9T2DXG](https://growthloop.pagerduty.com/incidents/Q04M030A9T2DXG)
Alerts: 1

## Current Summary

trumanshow (BJS): Exports for signal 1007 failed with states: <(snapshotting_error,no_batches)>

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `trumanshow_336`
- Audiences: `1007`
- Destinations: `personalization_api_object`
- State tuples: `snapshotting_error/no_batches`
- Commands seen: `glcli --env prod bifrost pizza --audience-id 1007 --org-id 336`

Representative alerts:
- Q04M030A9T2DXG/Q00XSOLDNZF41W: 2026-06-22T07:54:23-07:00; trumanshow_336; audience 1007; personalization_api_object; snapshotting_error/no_batches. trumanshow (BJS): Exports for signal 1007 failed with states: <(snapshotting_error,no_batches)>
  Runs: `1007-personalization_api_object_1007-scheduled__2026-06-21T00:00:00+00:00`

## Export Checks

- Checks: 1.
- States: `blocked`=1
- Blockers seen: `snapshotting_error_requires_review`

Check evidence:
- chk_q04m030a9t2dxg_q00xsoldnzf41w (Q04M030A9T2DXG/Q00XSOLDNZF41W): state=`blocked`.
  Scope: env=prod; org=336; audience=1007; destination=personalization_api_object.
  Checked runs: `1007-personalization_api_object_1007-scheduled__2026-06-21T00:00:00+00:00`
  Command: `glcli --env prod bifrost pizza --audience-id 1007 --org-id 336`
  Blockers: `snapshotting_error_requires_review`
  Run 1007-personalization_api_object_1007-scheduled__2026-06-21T00:00:00+00:00: health=`blocked`; blockers=snapshotting_error_requires_review; created=2026-06-22T00:01:45.221796+00:00; snapshotting=snapshotting_error; export=no_batches; failed=0.

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
