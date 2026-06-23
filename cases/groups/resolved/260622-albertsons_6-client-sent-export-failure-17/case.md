<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# albertsons_6 client-sent-export-failure

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `resolved`
Tags: `triage:needs_review`, `resolved:merged`
Incidents: [Q35FXUK3R7EP76](https://growthloop.pagerduty.com/incidents/Q35FXUK3R7EP76)
Alerts: 1

## Current Summary

Merged into 260622-albertsons_6-bigquery-type-mismatch: Client-sent failure is for the same Albertsons audience as a 2026-06-23 snapshotting alert already classified as BigQuery expression type incompatibility.

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `albertsons_6`
- Audiences: `9879`
- Destinations: none
- State tuples: none
- Commands seen: `glcli --env albertsons bifrost pizza --audience-id 9879 --org-id 6`

Representative alerts:
- Q35FXUK3R7EP76/Q2MKFM548X6EUT: 2026-06-22T19:06:41-07:00; albertsons_6; audience 9879. albertsons (Albertsons Media) - Audience 9879: Audience Export failure for 9879 sent to client.

## Export Checks

- Checks: 1.
- States: `blocked`=1
- Blockers seen: `missing_export_after_alert`

Check evidence:
- chk_q35fxuk3r7ep76_q2mkfm548x6eut (Q35FXUK3R7EP76/Q2MKFM548X6EUT): state=`blocked`.
  Scope: env=albertsons; org=6; audience=9879.
  Command: `glcli --env albertsons bifrost pizza --audience-id 9879 --org-id 6`
  Blockers: `missing_export_after_alert`

## Next Action

Follow target group 260622-albertsons_6-bigquery-type-mismatch.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
