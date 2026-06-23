<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# 174 zero-success

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `open`
Tags: `triage:needs_review`
Incidents: [Q1VWS2NM6NLXNA](https://growthloop.pagerduty.com/incidents/Q1VWS2NM6NLXNA)
Alerts: 1

## Current Summary

NJ Devils (default) - Audience 38578: 0 successfull_exports from pizza tracker found 10 minutes after new export

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `174`
- Audiences: `38578`
- Destinations: none
- State tuples: none
- Commands seen: `glcli --env prod bifrost pizza --audience-id 38578 --org-id 174`

Representative alerts:
- Q1VWS2NM6NLXNA/Q23B72SDTXXQ2X: 2026-06-18T10:57:01-07:00; 174; audience 38578. NJ Devils (default) - Audience 38578: 0 successfull_exports from pizza tracker found 10 minutes after new export

## Export Checks

- Checks: 1.
- States: `blocked`=1
- Blockers seen: `missing_export_after_alert`

Check evidence:
- chk_q1vws2nm6nlxna_q23b72sdtxxq2x (Q1VWS2NM6NLXNA/Q23B72SDTXXQ2X): state=`blocked`.
  Scope: env=prod; org=174; audience=38578.
  Command: `glcli --env prod bifrost pizza --audience-id 38578 --org-id 174`
  Blockers: `missing_export_after_alert`

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
