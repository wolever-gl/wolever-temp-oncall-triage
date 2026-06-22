<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# 451 linkedin-ads export-error

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `new`
Tags: `triage:needs_review`
Incidents: [Q3H4V02MSU117K](https://growthloop.pagerduty.com/incidents/Q3H4V02MSU117K)
Alerts: 2

## Current Summary

ASU Enterprise Partners (General - ASU Data): Exports for audience 26037 failed with states: <(snapshotting_finished,export_error)>

## Alert Scope

- Alert facts: 2 imported, 2 linked to this group.
- Orgs: `451`
- Audiences: `25884`, `26037`
- Destinations: `linkedin_ads`
- State tuples: `snapshotting_finished/export_error`
- Commands seen: `glcli --env prod bifrost pizza --audience-id 25884 --org-id 451`, `glcli --env prod bifrost pizza --audience-id 26037 --org-id 451`

Representative alerts:
- Q3H4V02MSU117K/Q3CFJFCVA0N716: 2026-06-04T08:02:09-07:00; 451; audience 25884; linkedin_ads; snapshotting_finished/export_error. ASU Enterprise Partners (General - ASU Data): Exports for audience 25884 failed with states: <(snapshotting_finished,export_error)>
  Runs: `25884-linkedin_ads_16092-scheduled__2026-06-04T00:00:00+00:00`
- Q3H4V02MSU117K/Q0PDUEWCNJAOWX: 2026-06-04T08:02:11-07:00; 451; audience 26037; linkedin_ads; snapshotting_finished/export_error. ASU Enterprise Partners (General - ASU Data): Exports for audience 26037 failed with states: <(snapshotting_finished,export_error)>
  Runs: `26037-linkedin_ads_16093-scheduled__2026-06-04T00:00:00+00:00`

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
