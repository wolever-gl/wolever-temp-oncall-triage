<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# 451 no-batches

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `new`
Tags: `triage:needs_review`
Incidents: [Q3H4V02MSU117K](https://growthloop.pagerduty.com/incidents/Q3H4V02MSU117K)
Alerts: 1

## Current Summary

ASU Enterprise Partners (General - ASU Data): Exports for audience 24842 failed with states: <(snapshotting_finished,no_batches)>

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `451`
- Audiences: `24842`
- Destinations: `reddit_ads`
- State tuples: `snapshotting_finished/no_batches`
- Commands seen: `glcli --env prod bifrost pizza --audience-id 24842 --org-id 451`

Representative alerts:
- Q3H4V02MSU117K/Q32NAVAXQ1M214: 2026-06-04T08:02:05-07:00; 451; audience 24842; reddit_ads; snapshotting_finished/no_batches. ASU Enterprise Partners (General - ASU Data): Exports for audience 24842 failed with states: <(snapshotting_finished,no_batches)>
  Runs: `24842-microsoft_ads_22505-scheduled__2026-06-04T00:00:00+00:00`, `24842-pinterest_22512-scheduled__2026-06-04T00:00:00+00:00`, `24842-reddit_ads_22519-webapp__2026-06-03T21:16:59+00:00`

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
