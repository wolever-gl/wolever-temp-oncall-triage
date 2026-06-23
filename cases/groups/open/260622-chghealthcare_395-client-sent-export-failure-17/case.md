<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# chghealthcare_395 client-sent-export-failure

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `open`
Tags: `triage:needs_review`
Incidents: [Q318F0E9BYFWBP](https://growthloop.pagerduty.com/incidents/Q318F0E9BYFWBP)
Alerts: 1

## Current Summary

chghealthcare (Weatherby Healthcare) - Audience 22844: Audience Export failure for 22844 sent to client.

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `chghealthcare_395`
- Audiences: `22844`
- Destinations: none
- State tuples: none
- Commands seen: `glcli --env prod bifrost pizza --audience-id 22844 --org-id 395`

Representative alerts:
- Q318F0E9BYFWBP/Q1F2XOU580ALHC: 2026-06-22T16:35:33-07:00; chghealthcare_395; audience 22844. chghealthcare (Weatherby Healthcare) - Audience 22844: Audience Export failure for 22844 sent to client.

## Export Checks

- Checks: 1.
- States: `blocked`=1
- Blockers seen: `missing_export_after_alert`

Check evidence:
- chk_q318f0e9byfwbp_q1f2xou580alhc (Q318F0E9BYFWBP/Q1F2XOU580ALHC): state=`blocked`.
  Scope: env=prod; org=395; audience=22844.
  Command: `glcli --env prod bifrost pizza --audience-id 22844 --org-id 395`
  Blockers: `missing_export_after_alert`

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
