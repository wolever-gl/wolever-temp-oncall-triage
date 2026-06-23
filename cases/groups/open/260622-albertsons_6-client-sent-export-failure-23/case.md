<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# albertsons_6 client-sent-export-failure

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `open`
Tags: `triage:needs_review`
Incidents: [Q3DJKJ88F7961S](https://growthloop.pagerduty.com/incidents/Q3DJKJ88F7961S)
Alerts: 1

## Current Summary

albertsons (Albertsons Media) - Audience 11280: Audience Export failure for 11280 sent to client.

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `albertsons_6`
- Audiences: `11280`
- Destinations: none
- State tuples: none
- Commands seen: `glcli --env albertsons bifrost pizza --audience-id 11280 --org-id 6`

Representative alerts:
- Q3DJKJ88F7961S/Q006NOHXUQU5B2: 2026-06-22T23:56:02-07:00; albertsons_6; audience 11280. albertsons (Albertsons Media) - Audience 11280: Audience Export failure for 11280 sent to client.

## Export Checks

- Checks: 1.
- States: `blocked`=1
- Blockers seen: `missing_export_after_alert`

Check evidence:
- chk_q3djkj88f7961s_q006nohxuqu5b2 (Q3DJKJ88F7961S/Q006NOHXUQU5B2): state=`blocked`.
  Scope: env=albertsons; org=6; audience=11280.
  Command: `glcli --env albertsons bifrost pizza --audience-id 11280 --org-id 6`
  Blockers: `missing_export_after_alert`

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
