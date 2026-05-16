<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# 451 client-sent-export-failure

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `open`
Tags: `triage:needs_review`
Incidents: [Q3XQABQFPPVNT5](https://growthloop.pagerduty.com/incidents/Q3XQABQFPPVNT5)
Alerts: 3

## Current Summary

ASU Enterprise Partners (Restricted) - Audience 31982: Audience Export failure for 31982 sent to client.

## Alert Scope

- Alert facts: 3 imported, 3 linked to this group.
- Orgs: `451`
- Audiences: `31982`, `981`, `984`
- Destinations: none
- State tuples: none
- Commands seen: `glcli --env prod bifrost pizza --audience-id 31982 --org-id 451`, `glcli --env prod bifrost pizza --audience-id 981 --org-id 451`, `glcli --env prod bifrost pizza --audience-id 984 --org-id 451`

Representative alerts:
- Q3XQABQFPPVNT5/Q0XF5RYJ4EGXJZ: 2026-05-13T17:01:38-07:00; 451; audience 981. ASU Enterprise Partners (General - ASU Data) - SignalRoute 981: SignalRoute Export failure for 981 sent to client.
- Q3XQABQFPPVNT5/Q1X4ZB5GQBRSU1: 2026-05-13T17:03:15-07:00; 451; audience 984. ASU Enterprise Partners (General - ASU Data) - SignalRoute 984: SignalRoute Export failure for 984 sent to client.
- Q3XQABQFPPVNT5/Q20R8OKEQNMTTK: 2026-05-13T19:19:06-07:00; 451; audience 31982. ASU Enterprise Partners (Restricted) - Audience 31982: Audience Export failure for 31982 sent to client.

## Export Checks

- Checks: 3.
- States: `blocked`=3
- Blockers seen: `missing_run_identity`

Check evidence:
- chk_q3xqabqfppvnt5_q0xf5ryj4egxjz (Q3XQABQFPPVNT5/Q0XF5RYJ4EGXJZ): state=`blocked`.
  Scope: env=prod; org=451; audience=981.
  Command: `glcli --env prod bifrost pizza --audience-id 981 --org-id 451`
  Blockers: `missing_run_identity`
- chk_q3xqabqfppvnt5_q1x4zb5gqbrsu1 (Q3XQABQFPPVNT5/Q1X4ZB5GQBRSU1): state=`blocked`.
  Scope: env=prod; org=451; audience=984.
  Command: `glcli --env prod bifrost pizza --audience-id 984 --org-id 451`
  Blockers: `missing_run_identity`
- chk_q3xqabqfppvnt5_q20r8okeqnmttk (Q3XQABQFPPVNT5/Q20R8OKEQNMTTK): state=`blocked`.
  Scope: env=prod; org=451; audience=31982.
  Command: `glcli --env prod bifrost pizza --audience-id 31982 --org-id 451`
  Blockers: `missing_run_identity`

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
