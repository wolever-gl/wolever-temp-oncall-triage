<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# albertsons_6 client-sent-export-failure

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `resolved`
Tags: `triage:needs_review`, `resolved:merged`
Incidents: [Q3ZWQM35XX8FLX](https://growthloop.pagerduty.com/incidents/Q3ZWQM35XX8FLX)
Alerts: 1

## Current Summary

Merged into 260617-albertsons_6-client-sent-export-failure: Consolidate Albertsons client-sent export failure alerts from the Other open buckets list into a single investigation case.

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `albertsons_6`
- Audiences: `11826`
- Destinations: none
- State tuples: none
- Commands seen: `glcli --env albertsons bifrost pizza --audience-id 11826 --org-id 6`

Representative alerts:
- Q3ZWQM35XX8FLX/Q2UZX44FE17GK8: 2026-06-16T12:39:02-07:00; albertsons_6; audience 11826. albertsons (Albertsons Media) - Audience 11826: Audience Export failure for 11826 sent to client.

## Export Checks

- Checks: 1.
- States: `blocked`=1
- Blockers seen: `missing_export_after_alert`

Check evidence:
- chk_q3zwqm35xx8flx_q2uzx44fe17gk8 (Q3ZWQM35XX8FLX/Q2UZX44FE17GK8): state=`blocked`.
  Scope: env=albertsons; org=6; audience=11826.
  Command: `glcli --env albertsons bifrost pizza --audience-id 11826 --org-id 6`
  Blockers: `missing_export_after_alert`

## Next Action

Follow target group 260617-albertsons_6-client-sent-export-failure.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
