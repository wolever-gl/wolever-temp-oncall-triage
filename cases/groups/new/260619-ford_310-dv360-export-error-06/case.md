<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# ford_310 dv360 export-error

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `new`
Tags: `triage:needs_review`
Incidents: [Q3VN9Y4WC7ZHBB](https://growthloop.pagerduty.com/incidents/Q3VN9Y4WC7ZHBB)
Alerts: 1

## Current Summary

ford (Marketing Production): Exports for audience 32920 failed with states: <(snapshotting_finished,export_error)>

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `ford_310`
- Audiences: `32920`
- Destinations: `dv360`
- State tuples: `snapshotting_finished/export_error`
- Commands seen: `glcli --env prod bifrost pizza --audience-id 32920 --org-id 310`

Representative alerts:
- Q3VN9Y4WC7ZHBB/Q1WH4KAFM5HNRS: 2026-06-19T07:51:00-07:00; ford_310; audience 32920; dv360; snapshotting_finished/export_error. ford (Marketing Production): Exports for audience 32920 failed with states: <(snapshotting_finished,export_error)>
  Runs: `32920-dv360_20866-scheduled__2026-05-25T00:00:00+00:00`, `32920-dv360_20866-scheduled__2026-05-26T00:00:00+00:00`, `32920-dv360_20866-scheduled__2026-05-27T00:00:00+00:00`, and 23 more

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
