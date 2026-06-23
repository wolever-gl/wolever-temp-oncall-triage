<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# chghealthcare_395 client-sent-export-failure

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `open`
Tags: `triage:needs_review`
Incidents: [Q17ZTE6KK1UPTW](https://growthloop.pagerduty.com/incidents/Q17ZTE6KK1UPTW)
Alerts: 1

## Current Summary

chghealthcare (CompHealth) - Audience 31437: Audience Export failure for 31437 sent to client.

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `chghealthcare_395`
- Audiences: `31437`
- Destinations: none
- State tuples: none
- Commands seen: `glcli --env prod bifrost pizza --audience-id 31437 --org-id 395`

Representative alerts:
- Q17ZTE6KK1UPTW/Q0TDRFBDBUZJFQ: 2026-06-22T16:57:47-07:00; chghealthcare_395; audience 31437. chghealthcare (CompHealth) - Audience 31437: Audience Export failure for 31437 sent to client.

## Export Checks

- Checks: 1.
- States: `blocked`=1
- Blockers seen: `missing_export_after_alert`

Check evidence:
- chk_q17zte6kk1uptw_q0tdrfbdbuzjfq (Q17ZTE6KK1UPTW/Q0TDRFBDBUZJFQ): state=`blocked`.
  Scope: env=prod; org=395; audience=31437.
  Command: `glcli --env prod bifrost pizza --audience-id 31437 --org-id 395`
  Blockers: `missing_export_after_alert`

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
