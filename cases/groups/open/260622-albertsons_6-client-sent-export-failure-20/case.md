<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# albertsons_6 client-sent-export-failure

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `open`
Tags: `triage:needs_review`
Incidents: [Q3C6EY1CXX6DTB](https://growthloop.pagerduty.com/incidents/Q3C6EY1CXX6DTB)
Alerts: 1

## Current Summary

albertsons (Albertsons Media) - Audience 2176: Audience Export failure for 2176 sent to client.

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `albertsons_6`
- Audiences: `2176`
- Destinations: none
- State tuples: none
- Commands seen: `glcli --env albertsons bifrost pizza --audience-id 2176 --org-id 6`

Representative alerts:
- Q3C6EY1CXX6DTB/Q2PPFZR1Z5HHP3: 2026-06-22T20:42:06-07:00; albertsons_6; audience 2176. albertsons (Albertsons Media) - Audience 2176: Audience Export failure for 2176 sent to client.

## Export Checks

- Checks: 1.
- States: `blocked`=1
- Blockers seen: `missing_export_after_alert`

Check evidence:
- chk_q3c6ey1cxx6dtb_q2ppfzr1z5hhp3 (Q3C6EY1CXX6DTB/Q2PPFZR1Z5HHP3): state=`blocked`.
  Scope: env=albertsons; org=6; audience=2176.
  Command: `glcli --env albertsons bifrost pizza --audience-id 2176 --org-id 6`
  Blockers: `missing_export_after_alert`

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
