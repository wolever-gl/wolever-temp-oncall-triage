<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# evgo_402 client-sent-export-failure

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `new`
Tags: `triage:needs_review`
Incidents: [Q2SD1O3BRD8DHQ](https://growthloop.pagerduty.com/incidents/Q2SD1O3BRD8DHQ)
Alerts: 5

## Current Summary

EVgo (default) - SignalRoute 375: SignalRoute Export failure for 375 sent to client.

## Alert Scope

- Alert facts: 5 imported, 5 linked to this group.
- Orgs: `evgo_402`
- Audiences: `13721`, `14107`, `27828`, `28662`, `375`
- Destinations: none
- State tuples: none
- Commands seen: `glcli --env prod bifrost pizza --audience-id 13721 --org-id 402`, `glcli --env prod bifrost pizza --audience-id 14107 --org-id 402`, `glcli --env prod bifrost pizza --audience-id 27828 --org-id 402`, and 2 more

Representative alerts:
- Q2SD1O3BRD8DHQ/Q26G9LI7KYFV9L: 2026-06-03T17:28:44-07:00; evgo_402; audience 14107. EVgo (EVgo Prod) - Audience 14107: Audience Export failure for 14107 sent to client.
- Q2SD1O3BRD8DHQ/Q231GAGRR6FQGV: 2026-06-04T17:04:31-07:00; evgo_402; audience 27828. EVgo (default) - Audience 27828: Audience Export failure for 27828 sent to client.
- Q2SD1O3BRD8DHQ/Q2BSU5P5WO8SRP: 2026-06-04T17:20:28-07:00; evgo_402; audience 13721. EVgo (default) - Audience 13721: Audience Export failure for 13721 sent to client.
- Q2SD1O3BRD8DHQ/Q1MJNESE2S7JMW: 2026-06-04T17:28:47-07:00; evgo_402; audience 28662. EVgo (EVgo Prod) - Audience 28662: Audience Export failure for 28662 sent to client.
- Q2SD1O3BRD8DHQ/Q2HLLGHPGAAOWQ: 2026-06-06T05:46:50-07:00; evgo_402; audience 375. EVgo (default) - SignalRoute 375: SignalRoute Export failure for 375 sent to client.

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
