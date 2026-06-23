<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# faraday_273 client-sent-export-failure

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `open`
Tags: `triage:needs_review`
Incidents: [Q0P4NVD737BB3A](https://growthloop.pagerduty.com/incidents/Q0P4NVD737BB3A)
Alerts: 1

## Current Summary

Faraday (EmpowerFi - CUNJ) - Audience 21403: Audience Export failure for 21403 sent to client.

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `faraday_273`
- Audiences: `21403`
- Destinations: none
- State tuples: none
- Commands seen: `glcli --env prod bifrost pizza --audience-id 21403 --org-id 273`

Representative alerts:
- Q0P4NVD737BB3A/Q03ZGHIKSG1ZLM: 2026-06-16T05:08:56-07:00; faraday_273; audience 21403. Faraday (EmpowerFi - CUNJ) - Audience 21403: Audience Export failure for 21403 sent to client.

## Export Checks

- Checks: 1.
- States: `blocked`=1
- Blockers seen: `missing_export_after_alert`

Check evidence:
- chk_q0p4nvd737bb3a_q03zghiksg1zlm (Q0P4NVD737BB3A/Q03ZGHIKSG1ZLM): state=`blocked`.
  Scope: env=prod; org=273; audience=21403.
  Command: `glcli --env prod bifrost pizza --audience-id 21403 --org-id 273`
  Blockers: `missing_export_after_alert`

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
