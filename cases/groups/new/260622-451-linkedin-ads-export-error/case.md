<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# 451 linkedin-ads export-error

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `new`
Tags: `triage:needs_review`
Incidents: [Q06WSHYZJD9EKK](https://growthloop.pagerduty.com/incidents/Q06WSHYZJD9EKK)
Alerts: 1

## Current Summary

ASU Enterprise Partners (General - ASU Data): Exports for audience 24855 failed with states: <(snapshotting_finished,export_error)>

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `451`
- Audiences: `24855`
- Destinations: `linkedin_ads`
- State tuples: `snapshotting_finished/export_error`
- Commands seen: `glcli --env prod bifrost pizza --audience-id 24855 --org-id 451`

Representative alerts:
- Q06WSHYZJD9EKK/Q0RVBTBYRZOWQF: 2026-06-22T07:58:07-07:00; 451; audience 24855; linkedin_ads; snapshotting_finished/export_error. ASU Enterprise Partners (General - ASU Data): Exports for audience 24855 failed with states: <(snapshotting_finished,export_error)>
  Runs: `24855-linkedin_ads_22541-scheduled__2026-06-22T00:00:00+00:00`, `24855-linkedin_ads_22542-scheduled__2026-06-22T00:00:00+00:00`

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
