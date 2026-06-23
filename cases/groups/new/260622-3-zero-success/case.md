<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# 3 zero-success

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `new`
Tags: `triage:needs_review`
Incidents: [Q07JFPJF1Z5MSB](https://growthloop.pagerduty.com/incidents/Q07JFPJF1Z5MSB)
Alerts: 1

## Current Summary

Costco Non Prod (default) - Audience 6297: 0 successfull_exports from pizza tracker found 10 minutes after new export

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `3`
- Audiences: `6297`
- Destinations: none
- State tuples: none
- Commands seen: `glcli --env costco bifrost pizza --audience-id 6297 --org-id 3`

Representative alerts:
- Q07JFPJF1Z5MSB/Q2P9NLSCFYA367: 2026-06-22T21:19:23-07:00; 3; audience 6297. Costco Non Prod (default) - Audience 6297: 0 successfull_exports from pizza tracker found 10 minutes after new export

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
