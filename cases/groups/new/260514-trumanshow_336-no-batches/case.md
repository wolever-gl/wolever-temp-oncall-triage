# trumanshow_336 no-batches

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `new`
Tags: `triage:needs_review`
Incidents: [Q12A5QFIM3F9LN](https://growthloop.pagerduty.com/incidents/Q12A5QFIM3F9LN)
Alerts: 2

## Current Summary

trumanshow (Travel): Exports for audience 36293 failed with states: <(snapshotting_finished,no_batches)>

## Alert Scope

- Alert facts: 2 imported, 2 linked to this group.
- Orgs: `trumanshow_336`
- Audiences: `35392`, `36293`
- Destinations: `iterable`, `personalization_api`
- State tuples: `snapshotting_finished/no_batches`
- Commands seen: `glcli --env prod bifrost pizza --audience-id 35392 --org-id 336`, `glcli --env prod bifrost pizza --audience-id 36293 --org-id 336`

Representative alerts:
- Q12A5QFIM3F9LN/Q2PYTEEB639Q4I: 2026-05-14T08:08:29-07:00; trumanshow_336; audience 35392; iterable; snapshotting_finished/no_batches. trumanshow (Retail & CPG): Exports for audience 35392 failed with states: <(snapshotting_finished,no_batches)>
  Runs: `35392-iterable_21441-scheduled__2026-05-14T00:00:00+00:00`
- Q12A5QFIM3F9LN/Q10GUO0WFWZCAO: 2026-05-14T08:08:33-07:00; trumanshow_336; audience 36293; personalization_api; snapshotting_finished/no_batches. trumanshow (Travel): Exports for audience 36293 failed with states: <(snapshotting_finished,no_batches)>
  Runs: `36293-personalization_api_22146-webapp__2026-05-13T00:37:15+00:00`

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
