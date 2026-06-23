<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# 378 client-sent-export-failure

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `open`
Tags: `triage:needs_review`
Incidents: [Q3NV6UZFGARR8L](https://growthloop.pagerduty.com/incidents/Q3NV6UZFGARR8L)
Alerts: 1

## Current Summary

Cincinnati Reds (default) - Audience 38500: Audience Export failure for 38500 sent to client.

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `378`
- Audiences: `38500`
- Destinations: none
- State tuples: none
- Commands seen: `glcli --env prod bifrost pizza --audience-id 38500 --org-id 378`

Representative alerts:
- Q3NV6UZFGARR8L/Q1371PXS6Z9Q5H: 2026-06-16T14:01:09-07:00; 378; audience 38500. Cincinnati Reds (default) - Audience 38500: Audience Export failure for 38500 sent to client.

## Export Checks

- Checks: 1.
- States: `blocked`=1
- Blockers seen: `missing_export_after_alert`

Check evidence:
- chk_q3nv6uzfgarr8l_q1371pxs6z9q5h (Q3NV6UZFGARR8L/Q1371PXS6Z9Q5H): state=`blocked`.
  Scope: env=prod; org=378; audience=38500.
  Command: `glcli --env prod bifrost pizza --audience-id 38500 --org-id 378`
  Blockers: `missing_export_after_alert`

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
