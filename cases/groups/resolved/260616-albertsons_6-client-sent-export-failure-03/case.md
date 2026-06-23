<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# albertsons_6 client-sent-export-failure

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `resolved`
Tags: `triage:needs_review`, `resolved:merged`
Incidents: [Q2GHXX0EGGT253](https://growthloop.pagerduty.com/incidents/Q2GHXX0EGGT253)
Alerts: 1

## Current Summary

Merged into 260617-albertsons_6-client-sent-export-failure: Consolidate Albertsons client-sent export failure alerts from the Other open buckets list into a single investigation case.

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `albertsons_6`
- Audiences: `11822`
- Destinations: none
- State tuples: none
- Commands seen: `glcli --env albertsons bifrost pizza --audience-id 11822 --org-id 6`

Representative alerts:
- Q2GHXX0EGGT253/Q2XBL0829AX2BI: 2026-06-16T13:31:33-07:00; albertsons_6; audience 11822. albertsons (Albertsons Media) - Audience 11822: Audience Export failure for 11822 sent to client.

## Export Checks

- Checks: 1.
- States: `blocked`=1
- Blockers seen: `missing_export_after_alert`

Check evidence:
- chk_q2ghxx0eggt253_q2xbl0829ax2bi (Q2GHXX0EGGT253/Q2XBL0829AX2BI): state=`blocked`.
  Scope: env=albertsons; org=6; audience=11822.
  Command: `glcli --env albertsons bifrost pizza --audience-id 11822 --org-id 6`
  Blockers: `missing_export_after_alert`

## Next Action

Follow target group 260617-albertsons_6-client-sent-export-failure.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
