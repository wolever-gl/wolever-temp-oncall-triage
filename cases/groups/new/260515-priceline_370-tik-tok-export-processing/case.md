# priceline_370 tik-tok export-processing

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `new`
Tags: `triage:needs_review`
Incidents: [Q0X2D8TR82ZQV9](https://growthloop.pagerduty.com/incidents/Q0X2D8TR82ZQV9)
Alerts: 1

## Current Summary

priceline (default): Exports for audience 18623 failed with states: <(snapshotting_finished,export_processing)>

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `priceline_370`
- Audiences: `18623`
- Destinations: `tik_tok`
- State tuples: `snapshotting_finished/export_processing`
- Commands seen: `glcli --env prod bifrost pizza --audience-id 18623 --org-id 370`

Representative alerts:
- Q0X2D8TR82ZQV9/Q0JCB7G5H5G6U4: 2026-05-15T07:43:25-07:00; priceline_370; audience 18623; tik_tok; snapshotting_finished/export_processing. priceline (default): Exports for audience 18623 failed with states: <(snapshotting_finished,export_processing)>
  Runs: `18623-tik_tok_19832-scheduled__2026-05-15T00:00:00+00:00`

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
