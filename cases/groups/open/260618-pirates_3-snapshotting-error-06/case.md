<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# pirates_3 snapshotting-error

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `open`
Tags: `triage:needs_review`
Incidents: [Q1ZLEX8I949WMI](https://growthloop.pagerduty.com/incidents/Q1ZLEX8I949WMI)
Alerts: 1

## Current Summary

pirates (default): Exports for audience 1441 failed with states: <(snapshotting_error,no_batches)>

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `pirates_3`
- Audiences: `1441`
- Destinations: `dynamics`
- State tuples: `snapshotting_error/no_batches`
- Commands seen: `glcli --env pirates bifrost pizza --audience-id 1441 --org-id 3`

Representative alerts:
- Q1ZLEX8I949WMI/Q2EMSO0C2Y9E1T: 2026-06-18T07:30:04-07:00; pirates_3; audience 1441; dynamics; snapshotting_error/no_batches. pirates (default): Exports for audience 1441 failed with states: <(snapshotting_error,no_batches)>
  Runs: `1441-dynamics_770-scheduled__2026-06-18T12:00:00+00:00`, `1441-dynamics_770-scheduled__2026-06-18T13:00:00+00:00`, `1441-dynamics_770-scheduled__2026-06-18T14:00:00+00:00`

## Export Checks

- Checks: 1.
- States: `open`=1
- Blockers seen: `evidence_unavailable`

Check evidence:
- chk_q1zlex8i949wmi_q2emso0c2y9e1t (Q1ZLEX8I949WMI/Q2EMSO0C2Y9E1T): state=`open`, next_check_at=`2026-06-22T22:00:13.030Z`.
  Scope: env=pirates; org=3; audience=1441; destination=dynamics.
  Checked runs: `1441-dynamics_770-scheduled__2026-06-18T12:00:00+00:00`, `1441-dynamics_770-scheduled__2026-06-18T13:00:00+00:00`, `1441-dynamics_770-scheduled__2026-06-18T14:00:00+00:00`
  Command: `glcli --env pirates bifrost pizza --audience-id 1441 --org-id 3`
  Blockers: `evidence_unavailable`

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
