<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# albertsons_6 live-ramp export-processing

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `monitoring`
Tags: `triage:needs_review`, `monitoring:export-processing`
Incidents: [Q1E4EUPF9HDZNA](https://growthloop.pagerduty.com/incidents/Q1E4EUPF9HDZNA)
Alerts: 1

## Current Summary

Auto-monitored from Pizza export checks: 1 alert-scoped export check(s) are still processing and 0 are already healthy.

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `albertsons_6`
- Audiences: `11596`
- Destinations: `live_ramp_activation`
- State tuples: `snapshotting_finished/export_processing`
- Commands seen: `glcli --env albertsons bifrost pizza --audience-id 11596 --org-id 6`

Representative alerts:
- Q1E4EUPF9HDZNA/Q2WAJ28HX2P4SY: 2026-06-04T07:40:09-07:00; albertsons_6; audience 11596; live_ramp_activation; snapshotting_finished/export_processing. albertsons (Albertsons Media): Exports for audience 11596 failed with states: <(snapshotting_finished,export_processing)>
  Runs: `11596-live_ramp_activation_3712-scheduled__2026-05-26T00:00:00+00:00`, `11596-live_ramp_activation_3712-scheduled__2026-06-02T00:00:00+00:00`

## Export Checks

- Checks: 1.
- States: `monitoring`=1

Check evidence:
- chk_q1e4eupf9hdzna_q2waj28hx2p4sy (Q1E4EUPF9HDZNA/Q2WAJ28HX2P4SY): state=`monitoring`, next_check_at=`2026-06-22T21:28:34.281Z`.
  Scope: env=albertsons; org=6; audience=11596; endpoint=app_liveramp_activation_44; destination=live_ramp_activation.
  Checked runs: `11596-live_ramp_activation_3712-scheduled__2026-05-26T00:00:00+00:00`, `11596-live_ramp_activation_3712-scheduled__2026-06-02T00:00:00+00:00`
  Command: `glcli --env albertsons bifrost pizza --audience-id 11596 --org-id 6`
  Run 11596-live_ramp_activation_3712-scheduled__2026-05-26T00:00:00+00:00: health=`monitoring`; created=2026-05-26T08:09:21.685462+00:00; snapshotting=snapshotting_finished; export=export_processing; failed=0.
  Run 11596-live_ramp_activation_3712-scheduled__2026-06-02T00:00:00+00:00: health=`healthy`; created=2026-06-02T04:49:46.023384+00:00; snapshotting=snapshotting_finished; export=export_finished; failed=0.

## Recent Evidence

- Auto-monitored from Pizza export checks: 1 alert-scoped export check(s) are still processing and 0 are already healthy.
  Source: `check-exports`; kind: `export_check`; captured: `2026-06-22T21:13:53.000Z`.

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
