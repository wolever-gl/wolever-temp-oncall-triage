<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# royals_4 snapshotting-error

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `new`
Tags: `triage:needs_review`
Incidents: [Q1NRMGJGQVY42F](https://growthloop.pagerduty.com/incidents/Q1NRMGJGQVY42F)
Alerts: 1

## Current Summary

royals (default): Exports for audience 1640 failed with states: <(snapshotting_error,no_batches)>

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `royals_4`
- Audiences: `1640`
- Destinations: `iterable`
- State tuples: `snapshotting_error/no_batches`
- Commands seen: `glcli --env royals bifrost pizza --audience-id 1640 --org-id 4`

Representative alerts:
- Q1NRMGJGQVY42F/Q2SSAXBA6MYO4Q: 2026-06-18T07:30:04-07:00; royals_4; audience 1640; iterable; snapshotting_error/no_batches. royals (default): Exports for audience 1640 failed with states: <(snapshotting_error,no_batches)>
  Runs: `1640-iterable_1386-scheduled__2026-06-18T14:00:00+00:00`

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
