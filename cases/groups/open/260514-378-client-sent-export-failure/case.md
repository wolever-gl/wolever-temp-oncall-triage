<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# 378 client-sent-export-failure

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `open`
Tags: `triage:needs_review`
Incidents: [Q1QD2CX8MRAYBW](https://growthloop.pagerduty.com/incidents/Q1QD2CX8MRAYBW)
Alerts: 1

## Current Summary

Cincinnati Reds (default) - SignalRoute 891: SignalRoute Export failure for 891 sent to client.

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `378`
- Audiences: `891`
- Destinations: none
- State tuples: none
- Commands seen: `glcli --env prod bifrost pizza --audience-id 891 --org-id 378`

Representative alerts:
- Q1QD2CX8MRAYBW/Q3AS52WT001FD8: 2026-05-14T18:01:37-07:00; 378; audience 891. Cincinnati Reds (default) - SignalRoute 891: SignalRoute Export failure for 891 sent to client.

## Export Checks

- Checks: 1.
- States: `blocked`=1
- Blockers seen: `missing_run_identity`

Check evidence:
- chk_q1qd2cx8mraybw_q3as52wt001fd8 (Q1QD2CX8MRAYBW/Q3AS52WT001FD8): state=`blocked`.
  Scope: env=prod; org=378; audience=891.
  Command: `glcli --env prod bifrost pizza --audience-id 891 --org-id 378`
  Blockers: `missing_run_identity`

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
