# 174 zero-success

State: `new`
Tags: `triage:needs_review`
Incidents: [Q20XI8KK8YWADB](https://growthloop.pagerduty.com/incidents/Q20XI8KK8YWADB)
Alerts: 1

## Current Summary

NJ Devils (default) - Audience 36378: 0 successfull_exports from pizza tracker found 10 minutes after new export

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `174`
- Audiences: `36378`
- Destinations: none
- State tuples: none
- Commands seen: `glcli --env prod bifrost pizza --audience-id 36378 --org-id 174`

Representative alerts:
- Q20XI8KK8YWADB/Q1V8K8GS8KTX2I: 2026-05-15T06:42:11-07:00; 174; audience 36378. NJ Devils (default) - Audience 36378: 0 successfull_exports from pizza tracker found 10 minutes after new export

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
