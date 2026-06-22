<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# ford_310 client-sent-export-failure

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `new`
Tags: `triage:needs_review`
Incidents: [Q2FAMW1B9VZV5J](https://growthloop.pagerduty.com/incidents/Q2FAMW1B9VZV5J)
Alerts: 3

## Current Summary

ford (Marketing Production) - Audience 33347: Audience Export failure for 33347 sent to client.

## Alert Scope

- Alert facts: 3 imported, 3 linked to this group.
- Orgs: `ford_310`
- Audiences: `33347`, `34010`, `34059`
- Destinations: none
- State tuples: none
- Commands seen: `glcli --env prod bifrost pizza --audience-id 33347 --org-id 310`, `glcli --env prod bifrost pizza --audience-id 34010 --org-id 310`, `glcli --env prod bifrost pizza --audience-id 34059 --org-id 310`

Representative alerts:
- Q2FAMW1B9VZV5J/Q1BCN36AR4EM6L: 2026-06-05T10:56:39-07:00; ford_310; audience 34059. ford (Marketing Production) - Audience 34059: Audience Export failure for 34059 sent to client.
- Q2FAMW1B9VZV5J/Q1NVQOLD406GRF: 2026-06-06T06:22:43-07:00; ford_310; audience 34010. ford (Marketing Production) - Audience 34010: Audience Export failure for 34010 sent to client.
- Q2FAMW1B9VZV5J/Q2932GTM81FIBB: 2026-06-07T10:28:21-07:00; ford_310; audience 33347. ford (Marketing Production) - Audience 33347: Audience Export failure for 33347 sent to client.

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
