<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# 451 linkedin-ads export-error

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `new`
Tags: `triage:needs_review`
Incidents: [Q0CE4Y0BVKY7HI](https://growthloop.pagerduty.com/incidents/Q0CE4Y0BVKY7HI)
Alerts: 1

## Current Summary

ASU Enterprise Partners (Alumni): Exports for audience 25885 failed with states: <(snapshotting_finished,export_error)>

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `451`
- Audiences: `25885`
- Destinations: `linkedin_ads`
- State tuples: `snapshotting_finished/export_error`
- Commands seen: `glcli --env prod bifrost pizza --audience-id 25885 --org-id 451`

Representative alerts:
- Q0CE4Y0BVKY7HI/Q2DA0HP73BTGNF: 2026-06-18T08:06:02-07:00; 451; audience 25885; linkedin_ads; snapshotting_finished/export_error. ASU Enterprise Partners (Alumni): Exports for audience 25885 failed with states: <(snapshotting_finished,export_error)>
  Runs: `25885-linkedin_ads_16095-scheduled__2026-06-18T00:00:00+00:00`

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
