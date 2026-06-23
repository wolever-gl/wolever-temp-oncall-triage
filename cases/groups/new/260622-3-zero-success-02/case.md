<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# 3 zero-success

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `new`
Tags: `triage:needs_review`
Incidents: [Q2FSP5N1IS120M](https://growthloop.pagerduty.com/incidents/Q2FSP5N1IS120M)
Alerts: 1

## Current Summary

Costco Non Prod (default) - Audience 6295: 0 successfull_exports from pizza tracker found 10 minutes after new export

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `3`
- Audiences: `6295`
- Destinations: none
- State tuples: none
- Commands seen: `glcli --env costco bifrost pizza --audience-id 6295 --org-id 3`

Representative alerts:
- Q2FSP5N1IS120M/Q1UPUXXO6A4HY3: 2026-06-22T20:33:09-07:00; 3; audience 6295. Costco Non Prod (default) - Audience 6295: 0 successfull_exports from pizza tracker found 10 minutes after new export

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
