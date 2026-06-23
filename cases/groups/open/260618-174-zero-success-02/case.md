<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# 174 zero-success

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `open`
Tags: `triage:needs_review`
Incidents: [Q3VA13F9VAD11Q](https://growthloop.pagerduty.com/incidents/Q3VA13F9VAD11Q)
Alerts: 1

## Current Summary

NJ Devils (default) - Audience 38598: 0 successfull_exports from pizza tracker found 10 minutes after new export

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `174`
- Audiences: `38598`
- Destinations: none
- State tuples: none
- Commands seen: `glcli --env prod bifrost pizza --audience-id 38598 --org-id 174`

Representative alerts:
- Q3VA13F9VAD11Q/Q2HSB75QSIRGMV: 2026-06-18T15:07:51-07:00; 174; audience 38598. NJ Devils (default) - Audience 38598: 0 successfull_exports from pizza tracker found 10 minutes after new export

## Export Checks

- Checks: 1.
- States: `blocked`=1
- Blockers seen: `missing_export_after_alert`

Check evidence:
- chk_q3va13f9vad11q_q2hsb75qsirgmv (Q3VA13F9VAD11Q/Q2HSB75QSIRGMV): state=`blocked`.
  Scope: env=prod; org=174; audience=38598.
  Command: `glcli --env prod bifrost pizza --audience-id 38598 --org-id 174`
  Blockers: `missing_export_after_alert`

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
