<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# 174 client-sent-export-failure

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `new`
Tags: `triage:needs_review`
Incidents: [Q1H2G1LPQBKYIZ](https://growthloop.pagerduty.com/incidents/Q1H2G1LPQBKYIZ)
Alerts: 4

## Current Summary

NJ Devils (default) - Audience 17206: Audience Export failure for 17206 sent to client.

## Alert Scope

- Alert facts: 4 imported, 4 linked to this group.
- Orgs: `174`
- Audiences: `17206`, `25474`, `27534`, `28188`
- Destinations: none
- State tuples: none
- Commands seen: `glcli --env prod bifrost pizza --audience-id 17206 --org-id 174`, `glcli --env prod bifrost pizza --audience-id 25474 --org-id 174`, `glcli --env prod bifrost pizza --audience-id 27534 --org-id 174`, and 1 more

Representative alerts:
- Q1H2G1LPQBKYIZ/Q0BU4ZPYRD89TH: 2026-06-03T03:42:31-07:00; 174; audience 27534. NJ Devils (default) - Audience 27534: Audience Export failure for 27534 sent to client.
- Q1H2G1LPQBKYIZ/Q0ANXDZ22B4JYD: 2026-06-04T17:19:08-07:00; 174; audience 28188. NJ Devils (default) - Audience 28188: Audience Export failure for 28188 sent to client.
- Q1H2G1LPQBKYIZ/Q20J9ZU32WRHTI: 2026-06-04T18:27:36-07:00; 174; audience 25474. NJ Devils (default) - Audience 25474: Audience Export failure for 25474 sent to client.
- Q1H2G1LPQBKYIZ/Q1YF50ATPD3XZL: 2026-06-06T04:24:24-07:00; 174; audience 17206. NJ Devils (default) - Audience 17206: Audience Export failure for 17206 sent to client.

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
