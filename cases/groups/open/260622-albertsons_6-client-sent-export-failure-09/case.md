<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# albertsons_6 client-sent-export-failure

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `open`
Tags: `triage:needs_review`
Incidents: [Q16DX9IDPC15VD](https://growthloop.pagerduty.com/incidents/Q16DX9IDPC15VD)
Alerts: 1

## Current Summary

albertsons (Albertsons Media) - Audience 10680: Audience Export failure for 10680 sent to client.

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `albertsons_6`
- Audiences: `10680`
- Destinations: none
- State tuples: none
- Commands seen: `glcli --env albertsons bifrost pizza --audience-id 10680 --org-id 6`

Representative alerts:
- Q16DX9IDPC15VD/Q12WSM8W1Z42F8: 2026-06-22T22:53:59-07:00; albertsons_6; audience 10680. albertsons (Albertsons Media) - Audience 10680: Audience Export failure for 10680 sent to client.

## Export Checks

- Checks: 1.
- States: `blocked`=1
- Blockers seen: `missing_export_after_alert`

Check evidence:
- chk_q16dx9idpc15vd_q12wsm8w1z42f8 (Q16DX9IDPC15VD/Q12WSM8W1Z42F8): state=`blocked`.
  Scope: env=albertsons; org=6; audience=10680.
  Command: `glcli --env albertsons bifrost pizza --audience-id 10680 --org-id 6`
  Blockers: `missing_export_after_alert`

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
