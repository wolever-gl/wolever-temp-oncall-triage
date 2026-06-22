<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# fanatics_502 snowflake export-error

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `new`
Tags: `triage:needs_review`
Incidents: [Q04FOTACA3H398](https://growthloop.pagerduty.com/incidents/Q04FOTACA3H398)
Alerts: 1

## Current Summary

fanatics (default): Exports for audience 30807 failed with states: <(snapshotting_finished,export_error)>

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `fanatics_502`
- Audiences: `30807`
- Destinations: `snowflake`
- State tuples: `snapshotting_finished/export_error`
- Commands seen: `glcli --env prod bifrost pizza --audience-id 30807 --org-id 502`

Representative alerts:
- Q04FOTACA3H398/Q21IWIYI0PU0YE: 2026-06-22T08:07:09-07:00; fanatics_502; audience 30807; snowflake; snapshotting_finished/export_error. fanatics (default): Exports for audience 30807 failed with states: <(snapshotting_finished,export_error)>
  Runs: `30807-snowflake_21614-scheduled__2026-06-18T00:00:00+00:00`

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
