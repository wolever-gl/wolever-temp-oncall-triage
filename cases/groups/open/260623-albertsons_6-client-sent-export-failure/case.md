<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# albertsons_6 client-sent-export-failure

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `open`
Tags: `triage:needs_review`
Incidents: [Q09FHOR4ZDMTUL](https://growthloop.pagerduty.com/incidents/Q09FHOR4ZDMTUL)
Alerts: 1

## Current Summary

albertsons (Albertsons Media) - Audience 11996: Audience Export failure for 11996 sent to client.

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `albertsons_6`
- Audiences: `11996`
- Destinations: none
- State tuples: none
- Commands seen: `glcli --env albertsons bifrost pizza --audience-id 11996 --org-id 6`

Representative alerts:
- Q09FHOR4ZDMTUL/Q01YTIVWYE60TI: 2026-06-23T00:42:11-07:00; albertsons_6; audience 11996. albertsons (Albertsons Media) - Audience 11996: Audience Export failure for 11996 sent to client.

## Export Checks

- Checks: 1.
- States: `blocked`=1
- Blockers seen: `missing_export_after_alert`

Check evidence:
- chk_q09fhor4zdmtul_q01ytivwye60ti (Q09FHOR4ZDMTUL/Q01YTIVWYE60TI): state=`blocked`.
  Scope: env=albertsons; org=6; audience=11996.
  Command: `glcli --env albertsons bifrost pizza --audience-id 11996 --org-id 6`
  Blockers: `missing_export_after_alert`

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
