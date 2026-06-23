<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# albertsons_6 client-sent-export-failure

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `open`
Tags: `triage:needs_review`
Incidents: [Q2C0F360LV1E6D](https://growthloop.pagerduty.com/incidents/Q2C0F360LV1E6D)
Alerts: 1

## Current Summary

albertsons (Albertsons Media) - Audience 7053: Audience Export failure for 7053 sent to client.

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `albertsons_6`
- Audiences: `7053`
- Destinations: none
- State tuples: none
- Commands seen: `glcli --env albertsons bifrost pizza --audience-id 7053 --org-id 6`

Representative alerts:
- Q2C0F360LV1E6D/Q17OHV7QKG9KB0: 2026-06-22T20:29:42-07:00; albertsons_6; audience 7053. albertsons (Albertsons Media) - Audience 7053: Audience Export failure for 7053 sent to client.

## Export Checks

- Checks: 1.
- States: `blocked`=1
- Blockers seen: `missing_export_after_alert`

Check evidence:
- chk_q2c0f360lv1e6d_q17ohv7qkg9kb0 (Q2C0F360LV1E6D/Q17OHV7QKG9KB0): state=`blocked`.
  Scope: env=albertsons; org=6; audience=7053.
  Command: `glcli --env albertsons bifrost pizza --audience-id 7053 --org-id 6`
  Blockers: `missing_export_after_alert`

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
