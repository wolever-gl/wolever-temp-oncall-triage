<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# ford_310 client-sent-export-failure

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `open`
Tags: `triage:needs_review`
Incidents: [Q33STDMF2JCBF2](https://growthloop.pagerduty.com/incidents/Q33STDMF2JCBF2)
Alerts: 1

## Current Summary

ford (Marketing Production) - Audience 33346: Audience Export failure for 33346 sent to client.

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `ford_310`
- Audiences: `33346`
- Destinations: none
- State tuples: none
- Commands seen: `glcli --env prod bifrost pizza --audience-id 33346 --org-id 310`

Representative alerts:
- Q33STDMF2JCBF2/Q0PXEKXUWTMI76: 2026-06-22T17:42:52-07:00; ford_310; audience 33346. ford (Marketing Production) - Audience 33346: Audience Export failure for 33346 sent to client.

## Export Checks

- Checks: 1.
- States: `blocked`=1
- Blockers seen: `missing_export_after_alert`

Check evidence:
- chk_q33stdmf2jcbf2_q0pxekxuwtmi76 (Q33STDMF2JCBF2/Q0PXEKXUWTMI76): state=`blocked`.
  Scope: env=prod; org=310; audience=33346.
  Command: `glcli --env prod bifrost pizza --audience-id 33346 --org-id 310`
  Blockers: `missing_export_after_alert`

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
