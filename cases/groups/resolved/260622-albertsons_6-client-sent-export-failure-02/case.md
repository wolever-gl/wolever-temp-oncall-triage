<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# albertsons_6 client-sent-export-failure

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `resolved`
Tags: `triage:needs_review`, `resolved:merged`
Incidents: [Q24B1M4BAXAHKN](https://growthloop.pagerduty.com/incidents/Q24B1M4BAXAHKN)
Alerts: 1

## Current Summary

Merged into 260622-albertsons_6-bigquery-type-mismatch: New Albertsons sent-to-client alert for audience 12901 has latest Pizza row snapshotting_error/no_batches with pre_snapshotting_check BigQuery expression type incompatibility; same remediation path as the existing BigQuery type mismatch cohort.

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `albertsons_6`
- Audiences: `12901`
- Destinations: none
- State tuples: none
- Commands seen: `glcli --env albertsons bifrost pizza --audience-id 12901 --org-id 6`

Representative alerts:
- Q24B1M4BAXAHKN/Q31GDZH2LP6JME: 2026-06-22T12:01:35-07:00; albertsons_6; audience 12901. albertsons (Albertsons Media) - Audience 12901: Audience Export failure for 12901 sent to client.

## Export Checks

- Checks: 1.
- States: `blocked`=1
- Blockers seen: `missing_export_after_alert`

Check evidence:
- chk_q24b1m4baxahkn_q31gdzh2lp6jme (Q24B1M4BAXAHKN/Q31GDZH2LP6JME): state=`blocked`.
  Scope: env=albertsons; org=6; audience=12901.
  Command: `glcli --env albertsons bifrost pizza --audience-id 12901 --org-id 6`
  Blockers: `missing_export_after_alert`

## Next Action

Follow target group 260622-albertsons_6-bigquery-type-mismatch.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
