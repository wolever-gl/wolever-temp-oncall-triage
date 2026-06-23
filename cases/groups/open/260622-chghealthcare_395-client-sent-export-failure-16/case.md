<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# chghealthcare_395 client-sent-export-failure

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `open`
Tags: `triage:needs_review`
Incidents: [Q2S5EH7KSYZ341](https://growthloop.pagerduty.com/incidents/Q2S5EH7KSYZ341)
Alerts: 1

## Current Summary

chghealthcare (Weatherby Healthcare) - Audience 31726: Audience Export failure for 31726 sent to client.

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `chghealthcare_395`
- Audiences: `31726`
- Destinations: none
- State tuples: none
- Commands seen: `glcli --env prod bifrost pizza --audience-id 31726 --org-id 395`

Representative alerts:
- Q2S5EH7KSYZ341/Q162243M0ZGCIK: 2026-06-22T17:01:35-07:00; chghealthcare_395; audience 31726. chghealthcare (Weatherby Healthcare) - Audience 31726: Audience Export failure for 31726 sent to client.

## Export Checks

- Checks: 1.
- States: `blocked`=1
- Blockers seen: `missing_export_after_alert`

Check evidence:
- chk_q2s5eh7ksyz341_q162243m0zgcik (Q2S5EH7KSYZ341/Q162243M0ZGCIK): state=`blocked`.
  Scope: env=prod; org=395; audience=31726.
  Command: `glcli --env prod bifrost pizza --audience-id 31726 --org-id 395`
  Blockers: `missing_export_after_alert`

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
