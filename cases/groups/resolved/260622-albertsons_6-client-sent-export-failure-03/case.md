<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# albertsons_6 client-sent-export-failure

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `resolved`
Tags: `triage:needs_review`, `resolved:merged`
Incidents: [Q2RVKX275SCHT7](https://growthloop.pagerduty.com/incidents/Q2RVKX275SCHT7)
Alerts: 1

## Current Summary

Merged into 260622-albertsons_6-bigquery-type-mismatch: New Albertsons sent-to-client alert for audience 10678 has latest Pizza row snapshotting_error/no_batches with pre_snapshotting_check BigQuery expression type incompatibility; same remediation path as the existing BigQuery type mismatch cohort.

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `albertsons_6`
- Audiences: `10678`
- Destinations: none
- State tuples: none
- Commands seen: `glcli --env albertsons bifrost pizza --audience-id 10678 --org-id 6`

Representative alerts:
- Q2RVKX275SCHT7/Q05OJ6D50KFC6Z: 2026-06-22T12:00:54-07:00; albertsons_6; audience 10678. albertsons (Albertsons Media) - Audience 10678: Audience Export failure for 10678 sent to client.

## Export Checks

- Checks: 1.
- States: `blocked`=1
- Blockers seen: `missing_export_after_alert`

Check evidence:
- chk_q2rvkx275scht7_q05oj6d50kfc6z (Q2RVKX275SCHT7/Q05OJ6D50KFC6Z): state=`blocked`.
  Scope: env=albertsons; org=6; audience=10678.
  Command: `glcli --env albertsons bifrost pizza --audience-id 10678 --org-id 6`
  Blockers: `missing_export_after_alert`

## Next Action

Follow target group 260622-albertsons_6-bigquery-type-mismatch.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
