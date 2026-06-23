<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# chghealthcare_395 client-sent-export-failure

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `open`
Tags: `triage:needs_review`
Incidents: [Q2IVN0UCHUQK62](https://growthloop.pagerduty.com/incidents/Q2IVN0UCHUQK62)
Alerts: 1

## Current Summary

chghealthcare (Omni-Division) - Audience 34238: Audience Export failure for 34238 sent to client.

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `chghealthcare_395`
- Audiences: `34238`
- Destinations: none
- State tuples: none
- Commands seen: `glcli --env prod bifrost pizza --audience-id 34238 --org-id 395`

Representative alerts:
- Q2IVN0UCHUQK62/Q0AYYBXQZLVQOJ: 2026-06-22T17:13:33-07:00; chghealthcare_395; audience 34238. chghealthcare (Omni-Division) - Audience 34238: Audience Export failure for 34238 sent to client.

## Export Checks

- Checks: 1.
- States: `blocked`=1
- Blockers seen: `missing_export_after_alert`

Check evidence:
- chk_q2ivn0uchuqk62_q0ayybxqzlvqoj (Q2IVN0UCHUQK62/Q0AYYBXQZLVQOJ): state=`blocked`.
  Scope: env=prod; org=395; audience=34238.
  Command: `glcli --env prod bifrost pizza --audience-id 34238 --org-id 395`
  Blockers: `missing_export_after_alert`

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
