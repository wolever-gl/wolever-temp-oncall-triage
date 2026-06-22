<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# 451 linkedin-ads export-error

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `new`
Tags: `triage:needs_review`
Incidents: [Q0NLD4FPPASOA5](https://growthloop.pagerduty.com/incidents/Q0NLD4FPPASOA5)
Alerts: 1

## Current Summary

ASU Enterprise Partners (Alumni): Exports for audience 26039 failed with states: <(snapshotting_finished,export_error)>

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `451`
- Audiences: `26039`
- Destinations: `linkedin_ads`
- State tuples: `snapshotting_finished/export_error`
- Commands seen: `glcli --env prod bifrost pizza --audience-id 26039 --org-id 451`

Representative alerts:
- Q0NLD4FPPASOA5/Q1E87Q5VA88DR3: 2026-06-22T07:58:12-07:00; 451; audience 26039; linkedin_ads; snapshotting_finished/export_error. ASU Enterprise Partners (Alumni): Exports for audience 26039 failed with states: <(snapshotting_finished,export_error)>
  Runs: `26039-linkedin_ads_16094-scheduled__2026-06-22T00:00:00+00:00`

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
