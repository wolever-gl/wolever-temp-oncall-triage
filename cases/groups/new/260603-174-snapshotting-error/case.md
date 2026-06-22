<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# 174 snapshotting-error

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `new`
Tags: `triage:needs_review`
Incidents: [Q1H2G1LPQBKYIZ](https://growthloop.pagerduty.com/incidents/Q1H2G1LPQBKYIZ)
Alerts: 1

## Current Summary

NJ Devils (default): Exports for audience 3866 failed with states: <(snapshotting_error,no_batches)>

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `174`
- Audiences: `3866`
- Destinations: `snapchat`
- State tuples: `snapshotting_error/no_batches`
- Commands seen: `glcli --env prod bifrost pizza --audience-id 3866 --org-id 174`

Representative alerts:
- Q1H2G1LPQBKYIZ/Q3Q0CAZMA3UQDX: 2026-06-03T08:03:11-07:00; 174; audience 3866; snapchat; snapshotting_error/no_batches. NJ Devils (default): Exports for audience 3866 failed with states: <(snapshotting_error,no_batches)>
  Runs: `3866-snapchat_22454-webapp__2026-06-02T13:49:55+00:00`

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
