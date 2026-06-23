<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# albertsons_6 no-batches

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `resolved`
Tags: `triage:needs_review`, `resolved:export-healthy`
Incidents: [Q1E4EUPF9HDZNA](https://growthloop.pagerduty.com/incidents/Q1E4EUPF9HDZNA)
Alerts: 1

## Current Summary

Auto-resolved from Pizza export checks: all 1 alert-scoped export check(s) are healthy_closed with no blockers.

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `albertsons_6`
- Audiences: `11048`
- Destinations: `live_ramp_activation`
- State tuples: `snapshotting_finished/no_batches`
- Commands seen: `glcli --env albertsons bifrost pizza --audience-id 11048 --org-id 6`

Representative alerts:
- Q1E4EUPF9HDZNA/Q2E6SESXB0EPQT: 2026-06-04T07:39:03-07:00; albertsons_6; audience 11048; live_ramp_activation; snapshotting_finished/no_batches. albertsons (Albertsons Media): Exports for audience 11048 failed with states: <(snapshotting_finished,no_batches)>
  Runs: `11048-live_ramp_activation_2993-scheduled__2026-06-03T00:00:00+00:00`

## Export Checks

- Checks: 1.
- States: `healthy_closed`=1

Check evidence:
- chk_q1e4eupf9hdzna_q2e6sesxb0epqt (Q1E4EUPF9HDZNA/Q2E6SESXB0EPQT): state=`healthy_closed`.
  Scope: env=albertsons; org=6; audience=11048; destination=live_ramp_activation.
  Checked runs: `11048-live_ramp_activation_2993-scheduled__2026-06-03T00:00:00+00:00`
  Command: `glcli --env albertsons bifrost pizza --audience-id 11048 --org-id 6`
  Run 11048-live_ramp_activation_2993-scheduled__2026-06-03T00:00:00+00:00: health=`healthy`; created=2026-06-03T06:03:25.876832+00:00; snapshotting=snapshotting_finished; export=no_batches; failed=0.

## Recent Evidence

- Auto-resolved from Pizza export checks: all 1 alert-scoped export check(s) are healthy_closed with no blockers.
  Source: `check-exports`; kind: `export_check`; captured: `2026-06-22T21:14:11.848Z`.

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
