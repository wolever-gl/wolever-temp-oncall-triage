<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# growthloop_268 zero-success

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `open`
Tags: `triage:needs_review`
Incidents: [Q0ER3R4BLU5KSU](https://growthloop.pagerduty.com/incidents/Q0ER3R4BLU5KSU)
Alerts: 1

## Current Summary

growthloop (default) - Audience 38430: 0 successfull_exports from pizza tracker found 10 minutes after new export

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `growthloop_268`
- Audiences: `38430`
- Destinations: none
- State tuples: none
- Commands seen: `glcli --env prod bifrost pizza --audience-id 38430 --org-id 268`

Representative alerts:
- Q0ER3R4BLU5KSU/Q2D9T8955Q5ILW: 2026-06-15T07:42:42-07:00; growthloop_268; audience 38430. growthloop (default) - Audience 38430: 0 successfull_exports from pizza tracker found 10 minutes after new export

## Export Checks

- Checks: 1.
- States: `blocked`=1
- Blockers seen: `missing_export_after_alert`

Check evidence:
- chk_q0er3r4blu5ksu_q2d9t8955q5ilw (Q0ER3R4BLU5KSU/Q2D9T8955Q5ILW): state=`blocked`.
  Scope: env=prod; org=268; audience=38430.
  Command: `glcli --env prod bifrost pizza --audience-id 38430 --org-id 268`
  Blockers: `missing_export_after_alert`

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
