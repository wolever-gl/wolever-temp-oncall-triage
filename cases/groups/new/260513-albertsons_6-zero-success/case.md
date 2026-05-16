# albertsons_6 zero-success

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `new`
Tags: `triage:needs_review`
Incidents: [Q2EJWG22CER0LA](https://growthloop.pagerduty.com/incidents/Q2EJWG22CER0LA)
Alerts: 2

## Current Summary

albertsons (Albertsons Media) - Audience 12742: 0 successfull_exports from pizza tracker found 10 minutes after new export

## Alert Scope

- Alert facts: 2 imported, 2 linked to this group.
- Orgs: `albertsons_6`
- Audiences: `12742`, `12801`
- Destinations: none
- State tuples: none
- Commands seen: `glcli --env albertsons bifrost pizza --audience-id 12742 --org-id 6`, `glcli --env albertsons bifrost pizza --audience-id 12801 --org-id 6`

Representative alerts:
- Q2EJWG22CER0LA/Q3U0RMO0GSEU83: 2026-05-12T16:05:54-07:00; albertsons_6; audience 12801. albertsons (Albertsons Media) - Audience 12801: 0 successfull_exports from pizza tracker found 10 minutes after new export
- Q2EJWG22CER0LA/Q36FHDW4FQ2W9V: 2026-05-13T09:32:35-07:00; albertsons_6; audience 12742. albertsons (Albertsons Media) - Audience 12742: 0 successfull_exports from pizza tracker found 10 minutes after new export

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
