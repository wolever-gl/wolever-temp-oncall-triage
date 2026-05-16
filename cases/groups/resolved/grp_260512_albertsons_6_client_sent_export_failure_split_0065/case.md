<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# albertsons_6 client-sent-export-failure split

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `resolved`
Tags: `triage:needs_review`, `resolved:merged`
Incidents: [Q2T09VCLN9MRZ8](https://growthloop.pagerduty.com/incidents/Q2T09VCLN9MRZ8)
Alerts: 1

## Current Summary

Merged into 260511-albertsons_6-snapshotting-processing: Audience 2189 client-sent failure is the notification counterpart of the existing snapshotting_processing/no_batches monitoring case.

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `albertsons_6`
- Audiences: `2189`
- Destinations: none
- State tuples: none
- Commands seen: `glcli --env albertsons bifrost pizza --audience-id 2189 --org-id 6`

Representative alerts:
- Q2T09VCLN9MRZ8/Q24L2JIWVY4GIS: 2026-05-12T01:04:24-07:00; albertsons_6; audience 2189. albertsons (Albertsons Media) - Audience 2189: Audience Export failure for 2189 sent to client.

## Export Checks

- Checks: 1.
- States: `blocked`=1
- Blockers seen: `missing_export_after_alert`

Check evidence:
- chk_q2t09vcln9mrz8_q24l2jiwvy4gis (Q2T09VCLN9MRZ8/Q24L2JIWVY4GIS): state=`blocked`.
  Scope: env=albertsons; org=6; audience=2189.
  Command: `glcli --env albertsons bifrost pizza --audience-id 2189 --org-id 6`
  Blockers: `missing_export_after_alert`

## Next Action

Follow target group 260511-albertsons_6-snapshotting-processing.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
