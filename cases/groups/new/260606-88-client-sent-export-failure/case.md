<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# 88 client-sent-export-failure

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `new`
Tags: `triage:needs_review`
Incidents: [Q2GWFMBG96HKQF](https://growthloop.pagerduty.com/incidents/Q2GWFMBG96HKQF)
Alerts: 2

## Current Summary

Chicago Cubs (default) - Audience 23740: Audience Export failure for 23740 sent to client.

## Alert Scope

- Alert facts: 2 imported, 2 linked to this group.
- Orgs: `88`
- Audiences: `20347`, `23740`
- Destinations: none
- State tuples: none
- Commands seen: `glcli --env prod bifrost pizza --audience-id 20347 --org-id 88`, `glcli --env prod bifrost pizza --audience-id 23740 --org-id 88`

Representative alerts:
- Q2GWFMBG96HKQF/Q39HWM8OH98Z1O: 2026-06-06T15:00:36-07:00; 88; audience 20347. Chicago Cubs (default) - Audience 20347: Audience Export failure for 20347 sent to client.
- Q2GWFMBG96HKQF/Q38A6XEEN16GUC: 2026-06-06T15:26:02-07:00; 88; audience 23740. Chicago Cubs (default) - Audience 23740: Audience Export failure for 23740 sent to client.

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
