# albertsons_6 zero-success

State: `new`
Tags: `triage:needs_review`
Incidents: [Q269WMZF4MKMNL](https://growthloop.pagerduty.com/incidents/Q269WMZF4MKMNL)
Alerts: 2

## Current Summary

albertsons (Albertsons Media) - Audience 10684: 0 successfull_exports from pizza tracker found 10 minutes after new export

## Alert Scope

- Alert facts: 2 imported, 2 linked to this group.
- Orgs: `albertsons_6`
- Audiences: `10684`, `10685`
- Destinations: none
- State tuples: none
- Commands seen: `glcli --env albertsons bifrost pizza --audience-id 10684 --org-id 6`, `glcli --env albertsons bifrost pizza --audience-id 10685 --org-id 6`

Representative alerts:
- Q269WMZF4MKMNL/Q0BQKJWVBSB8AY: 2026-05-15T14:25:24-07:00; albertsons_6; audience 10685. albertsons (Albertsons Media) - Audience 10685: 0 successfull_exports from pizza tracker found 10 minutes after new export
- Q269WMZF4MKMNL/Q1E9RQ6EFI68FV: 2026-05-15T14:46:08-07:00; albertsons_6; audience 10684. albertsons (Albertsons Media) - Audience 10684: 0 successfull_exports from pizza tracker found 10 minutes after new export

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
