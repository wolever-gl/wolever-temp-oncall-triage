<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# chghealthcare_395 client-sent-export-failure

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `open`
Tags: `triage:needs_review`
Incidents: [Q1W9HVUW2076M0](https://growthloop.pagerduty.com/incidents/Q1W9HVUW2076M0)
Alerts: 1

## Current Summary

chghealthcare (CompHealth) - Audience 27244: Audience Export failure for 27244 sent to client.

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `chghealthcare_395`
- Audiences: `27244`
- Destinations: none
- State tuples: none
- Commands seen: `glcli --env prod bifrost pizza --audience-id 27244 --org-id 395`

Representative alerts:
- Q1W9HVUW2076M0/Q0WKF4M5IH80NA: 2026-06-22T16:43:23-07:00; chghealthcare_395; audience 27244. chghealthcare (CompHealth) - Audience 27244: Audience Export failure for 27244 sent to client.

## Export Checks

- Checks: 1.
- States: `blocked`=1
- Blockers seen: `missing_export_after_alert`

Check evidence:
- chk_q1w9hvuw2076m0_q0wkf4m5ih80na (Q1W9HVUW2076M0/Q0WKF4M5IH80NA): state=`blocked`.
  Scope: env=prod; org=395; audience=27244.
  Command: `glcli --env prod bifrost pizza --audience-id 27244 --org-id 395`
  Blockers: `missing_export_after_alert`

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
