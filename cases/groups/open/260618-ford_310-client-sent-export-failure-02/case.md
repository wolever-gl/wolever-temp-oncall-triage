<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# ford_310 client-sent-export-failure

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `open`
Tags: `triage:needs_review`
Incidents: [Q1RQVSTI7426IF](https://growthloop.pagerduty.com/incidents/Q1RQVSTI7426IF)
Alerts: 1

## Current Summary

ford (Marketing Production) - Audience 38522: Audience Export failure for 38522 sent to client.

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `ford_310`
- Audiences: `38522`
- Destinations: none
- State tuples: none
- Commands seen: `glcli --env prod bifrost pizza --audience-id 38522 --org-id 310`

Representative alerts:
- Q1RQVSTI7426IF/Q088HY7FF2V7BN: 2026-06-18T12:04:42-07:00; ford_310; audience 38522. ford (Marketing Production) - Audience 38522: Audience Export failure for 38522 sent to client.

## Export Checks

- Checks: 1.
- States: `blocked`=1
- Blockers seen: `missing_export_after_alert`

Check evidence:
- chk_q1rqvsti7426if_q088hy7ff2v7bn (Q1RQVSTI7426IF/Q088HY7FF2V7BN): state=`blocked`.
  Scope: env=prod; org=310; audience=38522.
  Command: `glcli --env prod bifrost pizza --audience-id 38522 --org-id 310`
  Blockers: `missing_export_after_alert`

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
