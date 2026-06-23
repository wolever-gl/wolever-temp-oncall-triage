<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# pirates_3 snapshotting-error

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `open`
Tags: `triage:needs_review`
Incidents: [Q3YH3B2U2G6AG5](https://growthloop.pagerduty.com/incidents/Q3YH3B2U2G6AG5)
Alerts: 1

## Current Summary

pirates (default): Exports for audience 1437 failed with states: <(snapshotting_error,no_batches)>

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `pirates_3`
- Audiences: `1437`
- Destinations: `dynamics`
- State tuples: `snapshotting_error/no_batches`
- Commands seen: `glcli --env pirates bifrost pizza --audience-id 1437 --org-id 3`

Representative alerts:
- Q3YH3B2U2G6AG5/Q0UHS68Y86LSZL: 2026-06-18T07:30:01-07:00; pirates_3; audience 1437; dynamics; snapshotting_error/no_batches. pirates (default): Exports for audience 1437 failed with states: <(snapshotting_error,no_batches)>
  Runs: `1437-dynamics_774-scheduled__2026-06-18T12:00:00+00:00`, `1437-dynamics_774-scheduled__2026-06-18T13:00:00+00:00`, `1437-dynamics_774-scheduled__2026-06-18T14:00:00+00:00`

## Export Checks

- Checks: 1.
- States: `open`=1
- Blockers seen: `evidence_unavailable`

Check evidence:
- chk_q3yh3b2u2g6ag5_q0uhs68y86lszl (Q3YH3B2U2G6AG5/Q0UHS68Y86LSZL): state=`open`, next_check_at=`2026-06-22T22:02:30.718Z`.
  Scope: env=pirates; org=3; audience=1437; destination=dynamics.
  Checked runs: `1437-dynamics_774-scheduled__2026-06-18T12:00:00+00:00`, `1437-dynamics_774-scheduled__2026-06-18T13:00:00+00:00`, `1437-dynamics_774-scheduled__2026-06-18T14:00:00+00:00`
  Command: `glcli --env pirates bifrost pizza --audience-id 1437 --org-id 3`
  Blockers: `evidence_unavailable`

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
