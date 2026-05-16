# ford_310 client-sent-export-failure

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `new`
Tags: `triage:needs_review`
Incidents: [Q3HWKW0FS3VTHE](https://growthloop.pagerduty.com/incidents/Q3HWKW0FS3VTHE)
Alerts: 1

## Current Summary

ford (Marketing Production) - Audience 34059: Audience Export failure for 34059 sent to client.

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `ford_310`
- Audiences: `34059`
- Destinations: none
- State tuples: none
- Commands seen: `glcli --env prod bifrost pizza --audience-id 34059 --org-id 310`

Representative alerts:
- Q3HWKW0FS3VTHE/Q2BK8G803N1MIK: 2026-05-14T08:06:41-07:00; ford_310; audience 34059. ford (Marketing Production) - Audience 34059: Audience Export failure for 34059 sent to client.

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
