<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# albertsons_6 albertsons-albertsons-media-no-exports-for-audie split

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `open`
Tags: `triage:needs_review`
Incidents: [Q07WN7B40A87BL](https://growthloop.pagerduty.com/incidents/Q07WN7B40A87BL), [Q0FGJPZCXZLXHR](https://growthloop.pagerduty.com/incidents/Q0FGJPZCXZLXHR), [Q0P2NAYBB0ZKX9](https://growthloop.pagerduty.com/incidents/Q0P2NAYBB0ZKX9), [Q0V8KAU4ZZ4R4J](https://growthloop.pagerduty.com/incidents/Q0V8KAU4ZZ4R4J), [Q2W5HQOV4HP3EU](https://growthloop.pagerduty.com/incidents/Q2W5HQOV4HP3EU), [Q2Y616K4SJRW9K](https://growthloop.pagerduty.com/incidents/Q2Y616K4SJRW9K)
Alerts: 6

## Current Summary

Split the six audiences whose latest 2026-06-22 scheduled LiveRamp activation run is snapshotting_error/no_batches from the delayed/progressing cohort. Affected audiences: 9668,9671,9696,9737,9738,10075.

## Alert Scope

- Alert facts: 6 imported, 6 linked to this group.
- Orgs: `albertsons_6`
- Audiences: `10075`, `9668`, `9671`, `9696`, `9737`, `9738`
- Destinations: none
- State tuples: none
- Commands seen: `glcli --env albertsons bifrost pizza --audience-id 10075 --org-id 6`, `glcli --env albertsons bifrost pizza --audience-id 9668 --org-id 6`, `glcli --env albertsons bifrost pizza --audience-id 9671 --org-id 6`, and 3 more

Representative alerts:
- Q2Y616K4SJRW9K/Q1DQEGHV9I3BKB: 2026-06-22T07:35:56-07:00; albertsons_6; audience 9668. albertsons (Albertsons Media): No exports for audience 9668 found in scheduled interval
- Q07WN7B40A87BL/Q2JTQO1QPYNXR5: 2026-06-22T07:35:58-07:00; albertsons_6; audience 9696. albertsons (Albertsons Media): No exports for audience 9696 found in scheduled interval
- Q2W5HQOV4HP3EU/Q0VZ60NZVSYJU0: 2026-06-22T07:35:58-07:00; albertsons_6; audience 9671. albertsons (Albertsons Media): No exports for audience 9671 found in scheduled interval
- Q0P2NAYBB0ZKX9/Q242WOR3SSY0CB: 2026-06-22T07:36:04-07:00; albertsons_6; audience 9737. albertsons (Albertsons Media): No exports for audience 9737 found in scheduled interval
- Q0FGJPZCXZLXHR/Q33CABFZE6WJLU: 2026-06-22T07:36:05-07:00; albertsons_6; audience 9738. albertsons (Albertsons Media): No exports for audience 9738 found in scheduled interval
- Q0V8KAU4ZZ4R4J/Q0QM073YDZVAC4: 2026-06-22T07:36:45-07:00; albertsons_6; audience 10075. albertsons (Albertsons Media): No exports for audience 10075 found in scheduled interval

## Export Checks

- Checks: 6.
- States: `blocked`=6
- Blockers seen: `missing_run_identity`

Check evidence:
- chk_q07wn7b40a87bl_q2jtqo1qpynxr5 (Q07WN7B40A87BL/Q2JTQO1QPYNXR5): state=`blocked`.
  Scope: env=albertsons; org=6; audience=9696.
  Command: `glcli --env albertsons bifrost pizza --audience-id 9696 --org-id 6`
  Blockers: `missing_run_identity`
- chk_q0fgjpzcxzlxhr_q33cabfze6wjlu (Q0FGJPZCXZLXHR/Q33CABFZE6WJLU): state=`blocked`.
  Scope: env=albertsons; org=6; audience=9738.
  Command: `glcli --env albertsons bifrost pizza --audience-id 9738 --org-id 6`
  Blockers: `missing_run_identity`
- chk_q0p2naybb0zkx9_q242wor3ssy0cb (Q0P2NAYBB0ZKX9/Q242WOR3SSY0CB): state=`blocked`.
  Scope: env=albertsons; org=6; audience=9737.
  Command: `glcli --env albertsons bifrost pizza --audience-id 9737 --org-id 6`
  Blockers: `missing_run_identity`
- chk_q0v8kau4zz4r4j_q0qm073ydzvac4 (Q0V8KAU4ZZ4R4J/Q0QM073YDZVAC4): state=`blocked`.
  Scope: env=albertsons; org=6; audience=10075.
  Command: `glcli --env albertsons bifrost pizza --audience-id 10075 --org-id 6`
  Blockers: `missing_run_identity`
- chk_q2w5hqov4hp3eu_q0vz60nzvsyju0 (Q2W5HQOV4HP3EU/Q0VZ60NZVSYJU0): state=`blocked`.
  Scope: env=albertsons; org=6; audience=9671.
  Command: `glcli --env albertsons bifrost pizza --audience-id 9671 --org-id 6`
  Blockers: `missing_run_identity`
- chk_q2y616k4sjrw9k_q1dqeghv9i3bkb (Q2Y616K4SJRW9K/Q1DQEGHV9I3BKB): state=`blocked`.
  Scope: env=albertsons; org=6; audience=9668.
  Command: `glcli --env albertsons bifrost pizza --audience-id 9668 --org-id 6`
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

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
