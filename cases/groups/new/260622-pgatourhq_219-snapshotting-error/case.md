<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# pgatourhq_219 snapshotting-error

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `new`
Tags: `triage:needs_review`
Incidents: [Q0RI5NUJV9RFO8](https://growthloop.pagerduty.com/incidents/Q0RI5NUJV9RFO8)
Alerts: 1

## Current Summary

pgatourhq (New World Order): Exports for audience 38588 failed with states: <(snapshotting_error,no_batches)>

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `pgatourhq_219`
- Audiences: `38588`
- Destinations: `facebook`
- State tuples: `snapshotting_error/no_batches`
- Commands seen: `glcli --env prod bifrost pizza --audience-id 38588 --org-id 219`

Representative alerts:
- Q0RI5NUJV9RFO8/Q2UDK1R59503R4: 2026-06-22T07:47:24-07:00; pgatourhq_219; audience 38588; facebook; snapshotting_error/no_batches. pgatourhq (New World Order): Exports for audience 38588 failed with states: <(snapshotting_error,no_batches)>
  Runs: `38588-facebook_22794-webapp__2026-06-18T20:45:27+00:00`, `38588-google_adwords_22804-webapp__2026-06-18T23:27:16+00:00`

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
