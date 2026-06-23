<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# albertsons_6 albertsons-albertsons-media-no-exports-for-audie split

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `resolved`
Tags: `triage:needs_review`, `resolved:merged`
Incidents: [Q0V8KAU4ZZ4R4J](https://growthloop.pagerduty.com/incidents/Q0V8KAU4ZZ4R4J)
Alerts: 1

## Current Summary

Merged into 260622-albertsons_6-http-client-errors: After splitting the BigQuery no-export alerts out, the remaining audience 10075 alert has existing evidence of latest snapshotting_error/no_batches with pre_snapshotting_check HTTP client error, matching the Albertsons HTTP-client validation case.

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `albertsons_6`
- Audiences: `10075`
- Destinations: none
- State tuples: none
- Commands seen: `glcli --env albertsons bifrost pizza --audience-id 10075 --org-id 6`

Representative alerts:
- Q0V8KAU4ZZ4R4J/Q0QM073YDZVAC4: 2026-06-22T07:36:45-07:00; albertsons_6; audience 10075. albertsons (Albertsons Media): No exports for audience 10075 found in scheduled interval

## Export Checks

- Checks: 1.
- States: `blocked`=1
- Blockers seen: `missing_run_identity`

Check evidence:
- chk_q0v8kau4zz4r4j_q0qm073ydzvac4 (Q0V8KAU4ZZ4R4J/Q0QM073YDZVAC4): state=`blocked`.
  Scope: env=albertsons; org=6; audience=10075.
  Command: `glcli --env albertsons bifrost pizza --audience-id 10075 --org-id 6`
  Blockers: `missing_run_identity`

## Recent Evidence

- Current source artifact path for the split cohort evidence after the parent group moved to monitoring.
  Source: `case-workspace`; kind: `artifact_note`; captured: `2026-06-22T22:37:34.702Z`.
  Artifact: source_latest_export_metrics: `cases/groups/monitoring/260622-albertsons_6-albertsons-albertsons-media-no-exports-for-audie/artifacts/2026-06-22-latest-export-metrics.json`
- Split cohort evidence: the latest 2026-06-22 scheduled LiveRamp activation run for all six split audiences is snapshotting_error/no_batches, not merely delayed export visibility.
  Source: `gcloud-bifrost-pizza`; kind: `export_check`; captured: `2026-06-22T22:36:27.382Z`.
  Artifact: source_latest_export_metrics: `cases/groups/open/260622-albertsons_6-albertsons-albertsons-media-no-exports-for-audie/artifacts/2026-06-22-latest-export-metrics.json`
  Findings:
  - Open snapshotting-error cohort: audiences 9668,9671,9696,9737,9738 failed pre_snapshotting_check with BigQuery incompatible expression types; audience 10075 failed pre_snapshotting_check with HTTP client error. These need snapshotting/runbook investigation rather than monitoring as successful delayed exports.

## Next Action

Follow target group 260622-albertsons_6-http-client-errors.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
