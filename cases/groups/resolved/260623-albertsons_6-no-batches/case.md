<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# albertsons_6 no-batches

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `resolved`
Tags: `triage:needs_review`, `resolved:export-healthy`
Incidents: [Q2PLLXIG936TK5](https://growthloop.pagerduty.com/incidents/Q2PLLXIG936TK5)
Alerts: 1

## Current Summary

Auto-resolved from Pizza export checks: all 1 alert-scoped export check(s) are healthy_closed with no blockers.

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `albertsons_6`
- Audiences: `9095`
- Destinations: `live_ramp_activation`
- State tuples: `snapshotting_finished/no_batches`
- Commands seen: `glcli --env albertsons bifrost pizza --audience-id 9095 --org-id 6`

Representative alerts:
- Q2PLLXIG936TK5/Q3RTO230DDF2W5: 2026-06-23T07:35:39-07:00; albertsons_6; audience 9095; live_ramp_activation; snapshotting_finished/no_batches. albertsons (Albertsons Media): Exports for audience 9095 failed with states: <(snapshotting_finished,no_batches)>
  Runs: `9095-live_ramp_activation_1737-scheduled__2026-06-22T00:00:00+00:00`

## Export Checks

- Checks: 1.
- States: `healthy_closed`=1

Check evidence:
- chk_q2pllxig936tk5_q3rto230ddf2w5 (Q2PLLXIG936TK5/Q3RTO230DDF2W5): state=`healthy_closed`.
  Scope: env=albertsons; org=6; audience=9095; destination=live_ramp_activation.
  Checked runs: `9095-live_ramp_activation_1737-scheduled__2026-06-22T00:00:00+00:00`
  Command: `glcli --env albertsons bifrost pizza --audience-id 9095 --org-id 6`
  Run 9095-live_ramp_activation_1737-scheduled__2026-06-22T00:00:00+00:00: health=`healthy`; created=2026-06-22T19:23:26.705376+00:00; snapshotting=snapshotting_finished; export=no_batches; failed=0.

## Recent Evidence

- Auto-resolved from Pizza export checks: all 1 alert-scoped export check(s) are healthy_closed with no blockers.
  Source: `check-exports`; kind: `export_check`; captured: `2026-06-23T14:41:57.800Z`.

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
