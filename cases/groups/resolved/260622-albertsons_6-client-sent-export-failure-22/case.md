<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# albertsons_6 client-sent-export-failure

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `resolved`
Tags: `triage:needs_review`, `resolved:merged`
Incidents: [Q3D5BM8QKKHA3E](https://growthloop.pagerduty.com/incidents/Q3D5BM8QKKHA3E)
Alerts: 1

## Current Summary

Merged into 260622-albertsons_6-bigquery-type-mismatch: Client-sent failure is for the same Albertsons audience as a 2026-06-23 snapshotting alert already classified as BigQuery expression type incompatibility.

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `albertsons_6`
- Audiences: `9718`
- Destinations: none
- State tuples: none
- Commands seen: `glcli --env albertsons bifrost pizza --audience-id 9718 --org-id 6`

Representative alerts:
- Q3D5BM8QKKHA3E/Q2EKH842U2JBWZ: 2026-06-22T21:53:04-07:00; albertsons_6; audience 9718. albertsons (Albertsons Media) - Audience 9718: Audience Export failure for 9718 sent to client.

## Export Checks

- Checks: 1.
- States: `blocked`=1
- Blockers seen: `missing_export_after_alert`

Check evidence:
- chk_q3d5bm8qkkha3e_q2ekh842u2jbwz (Q3D5BM8QKKHA3E/Q2EKH842U2JBWZ): state=`blocked`.
  Scope: env=albertsons; org=6; audience=9718.
  Command: `glcli --env albertsons bifrost pizza --audience-id 9718 --org-id 6`
  Blockers: `missing_export_after_alert`

## Next Action

Follow target group 260622-albertsons_6-bigquery-type-mismatch.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
