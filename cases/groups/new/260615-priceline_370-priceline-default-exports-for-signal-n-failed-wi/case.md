<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# priceline_370 priceline-default-exports-for-signal-n-failed-wi

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `new`
Tags: `triage:needs_review`
Incidents: [Q1Y4FAMGUUZ21W](https://growthloop.pagerduty.com/incidents/Q1Y4FAMGUUZ21W)
Alerts: 1

## Current Summary

priceline (default): Exports for signal 1009 failed with states: <(snapshotting_finished,export_error), (snapshotting_finished,export_processing)>

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `priceline_370`
- Audiences: `1009`
- Destinations: `facebook_conversions_object`
- State tuples: none
- Commands seen: `glcli --env prod bifrost pizza --audience-id 1009 --org-id 370`

Representative alerts:
- Q1Y4FAMGUUZ21W/Q09IIKFTSQETHB: 2026-06-15T07:40:38-07:00; priceline_370; audience 1009; facebook_conversions_object. priceline (default): Exports for signal 1009 failed with states: <(snapshotting_finished,export_error), (snapshotting_finished,export_processing)>
  Runs: `1009-facebook_conversions_object_1009-scheduled__2026-05-31T00:00:00+00:00`, `1009-facebook_conversions_object_1009-scheduled__2026-06-07T00:00:00+00:00`, `1009-facebook_conversions_object_1009-webapp__2026-06-05T15:42:02+00:00`, and 1 more

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
