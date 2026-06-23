<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# chghealthcare_395 client-sent-export-failure

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `open`
Tags: `triage:needs_review`
Incidents: [Q2APMS8W1488NB](https://growthloop.pagerduty.com/incidents/Q2APMS8W1488NB)
Alerts: 1

## Current Summary

chghealthcare (CompHealth) - Audience 21184: Audience Export failure for 21184 sent to client.

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `chghealthcare_395`
- Audiences: `21184`
- Destinations: none
- State tuples: none
- Commands seen: `glcli --env prod bifrost pizza --audience-id 21184 --org-id 395`

Representative alerts:
- Q2APMS8W1488NB/Q1M9R61N63L7TT: 2026-06-22T16:32:42-07:00; chghealthcare_395; audience 21184. chghealthcare (CompHealth) - Audience 21184: Audience Export failure for 21184 sent to client.

## Export Checks

- Checks: 1.
- States: `blocked`=1
- Blockers seen: `missing_export_after_alert`

Check evidence:
- chk_q2apms8w1488nb_q1m9r61n63l7tt (Q2APMS8W1488NB/Q1M9R61N63L7TT): state=`blocked`.
  Scope: env=prod; org=395; audience=21184.
  Command: `glcli --env prod bifrost pizza --audience-id 21184 --org-id 395`
  Blockers: `missing_export_after_alert`

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
