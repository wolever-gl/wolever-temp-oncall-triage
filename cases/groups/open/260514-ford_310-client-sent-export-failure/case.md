<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# ford_310 client-sent-export-failure

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `open`
Tags: `triage:needs_review`
Incidents: [Q1TJJ4MEVOF1W3](https://growthloop.pagerduty.com/incidents/Q1TJJ4MEVOF1W3)
Alerts: 2

## Current Summary

ford (Marketing Production) - Audience 32921: Audience Export failure for 32921 sent to client.

## Alert Scope

- Alert facts: 2 imported, 2 linked to this group.
- Orgs: `ford_310`
- Audiences: `32921`, `34062`
- Destinations: none
- State tuples: none
- Commands seen: `glcli --env prod bifrost pizza --audience-id 32921 --org-id 310`, `glcli --env prod bifrost pizza --audience-id 34062 --org-id 310`

Representative alerts:
- Q1TJJ4MEVOF1W3/Q2SYBH7W8MGPL4: 2026-05-14T07:49:25-07:00; ford_310; audience 34062. ford (Marketing Production) - Audience 34062: Audience Export failure for 34062 sent to client.
- Q1TJJ4MEVOF1W3/Q1DMVWD0F3T9DI: 2026-05-14T07:52:48-07:00; ford_310; audience 32921. ford (Marketing Production) - Audience 32921: Audience Export failure for 32921 sent to client.

## Export Checks

- Checks: 2.
- States: `blocked`=2
- Blockers seen: `missing_run_identity`

Check evidence:
- chk_q1tjj4mevof1w3_q1dmvwd0f3t9di (Q1TJJ4MEVOF1W3/Q1DMVWD0F3T9DI): state=`blocked`.
  Scope: env=prod; org=310; audience=32921.
  Command: `glcli --env prod bifrost pizza --audience-id 32921 --org-id 310`
  Blockers: `missing_run_identity`
- chk_q1tjj4mevof1w3_q2sybh7w8mgpl4 (Q1TJJ4MEVOF1W3/Q2SYBH7W8MGPL4): state=`blocked`.
  Scope: env=prod; org=310; audience=34062.
  Command: `glcli --env prod bifrost pizza --audience-id 34062 --org-id 310`
  Blockers: `missing_run_identity`

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
