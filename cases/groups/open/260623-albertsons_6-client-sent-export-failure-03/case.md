<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# albertsons_6 client-sent-export-failure

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `open`
Tags: `triage:needs_review`
Incidents: [Q2W8MBXYOAXD3J](https://growthloop.pagerduty.com/incidents/Q2W8MBXYOAXD3J)
Alerts: 1

## Current Summary

albertsons (Albertsons Media) - Audience 2158: Audience Export failure for 2158 sent to client.

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `albertsons_6`
- Audiences: `2158`
- Destinations: none
- State tuples: none
- Commands seen: `glcli --env albertsons bifrost pizza --audience-id 2158 --org-id 6`

Representative alerts:
- Q2W8MBXYOAXD3J/Q0EEU0PS9HJHXS: 2026-06-23T01:16:34-07:00; albertsons_6; audience 2158. albertsons (Albertsons Media) - Audience 2158: Audience Export failure for 2158 sent to client.

## Export Checks

- Checks: 1.
- States: `blocked`=1
- Blockers seen: `missing_export_after_alert`

Check evidence:
- chk_q2w8mbxyoaxd3j_q0eeu0ps9hjhxs (Q2W8MBXYOAXD3J/Q0EEU0PS9HJHXS): state=`blocked`.
  Scope: env=albertsons; org=6; audience=2158.
  Command: `glcli --env albertsons bifrost pizza --audience-id 2158 --org-id 6`
  Blockers: `missing_export_after_alert`

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
