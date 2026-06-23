<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# albertsons_6 client-sent-export-failure

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `open`
Tags: `triage:needs_review`
Incidents: [Q0LBNI4LMZSL99](https://growthloop.pagerduty.com/incidents/Q0LBNI4LMZSL99)
Alerts: 1

## Current Summary

albertsons (Albertsons Media) - Audience 13072: Audience Export failure for 13072 sent to client.

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `albertsons_6`
- Audiences: `13072`
- Destinations: none
- State tuples: none
- Commands seen: `glcli --env albertsons bifrost pizza --audience-id 13072 --org-id 6`

Representative alerts:
- Q0LBNI4LMZSL99/Q0T7GVQKHEAEO7: 2026-06-22T21:37:57-07:00; albertsons_6; audience 13072. albertsons (Albertsons Media) - Audience 13072: Audience Export failure for 13072 sent to client.

## Export Checks

- Checks: 1.
- States: `blocked`=1
- Blockers seen: `missing_export_after_alert`

Check evidence:
- chk_q0lbni4lmzsl99_q0t7gvqkheaeo7 (Q0LBNI4LMZSL99/Q0T7GVQKHEAEO7): state=`blocked`.
  Scope: env=albertsons; org=6; audience=13072.
  Command: `glcli --env albertsons bifrost pizza --audience-id 13072 --org-id 6`
  Blockers: `missing_export_after_alert`

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
