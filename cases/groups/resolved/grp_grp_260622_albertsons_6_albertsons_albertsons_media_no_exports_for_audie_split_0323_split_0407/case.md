<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# albertsons_6 albertsons-albertsons-media-no-exports-for-audie split split

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `resolved`
Tags: `triage:needs_review`, `resolved:merged`
Incidents: [Q07WN7B40A87BL](https://growthloop.pagerduty.com/incidents/Q07WN7B40A87BL), [Q0FGJPZCXZLXHR](https://growthloop.pagerduty.com/incidents/Q0FGJPZCXZLXHR), [Q0P2NAYBB0ZKX9](https://growthloop.pagerduty.com/incidents/Q0P2NAYBB0ZKX9), [Q2W5HQOV4HP3EU](https://growthloop.pagerduty.com/incidents/Q2W5HQOV4HP3EU), [Q2Y616K4SJRW9K](https://growthloop.pagerduty.com/incidents/Q2Y616K4SJRW9K)
Alerts: 5

## Current Summary

Merged into 260622-albertsons_6-bigquery-type-mismatch: Existing split evidence classifies these no-export alerts as latest snapshotting_error/no_batches with BigQuery incompatible expression types, matching the Albertsons BigQuery type mismatch case.

## Alert Scope

- Alert facts: 5 imported, 5 linked to this group.
- Orgs: `albertsons_6`
- Audiences: `9668`, `9671`, `9696`, `9737`, `9738`
- Destinations: none
- State tuples: none
- Commands seen: `glcli --env albertsons bifrost pizza --audience-id 9668 --org-id 6`, `glcli --env albertsons bifrost pizza --audience-id 9671 --org-id 6`, `glcli --env albertsons bifrost pizza --audience-id 9696 --org-id 6`, and 2 more

Representative alerts:
- Q2Y616K4SJRW9K/Q1DQEGHV9I3BKB: 2026-06-22T07:35:56-07:00; albertsons_6; audience 9668. albertsons (Albertsons Media): No exports for audience 9668 found in scheduled interval
- Q07WN7B40A87BL/Q2JTQO1QPYNXR5: 2026-06-22T07:35:58-07:00; albertsons_6; audience 9696. albertsons (Albertsons Media): No exports for audience 9696 found in scheduled interval
- Q2W5HQOV4HP3EU/Q0VZ60NZVSYJU0: 2026-06-22T07:35:58-07:00; albertsons_6; audience 9671. albertsons (Albertsons Media): No exports for audience 9671 found in scheduled interval
- Q0P2NAYBB0ZKX9/Q242WOR3SSY0CB: 2026-06-22T07:36:04-07:00; albertsons_6; audience 9737. albertsons (Albertsons Media): No exports for audience 9737 found in scheduled interval
- Q0FGJPZCXZLXHR/Q33CABFZE6WJLU: 2026-06-22T07:36:05-07:00; albertsons_6; audience 9738. albertsons (Albertsons Media): No exports for audience 9738 found in scheduled interval

## Export Checks

- Checks: 5.
- States: `blocked`=5
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
- chk_q2w5hqov4hp3eu_q0vz60nzvsyju0 (Q2W5HQOV4HP3EU/Q0VZ60NZVSYJU0): state=`blocked`.
  Scope: env=albertsons; org=6; audience=9671.
  Command: `glcli --env albertsons bifrost pizza --audience-id 9671 --org-id 6`
  Blockers: `missing_run_identity`
- chk_q2y616k4sjrw9k_q1dqeghv9i3bkb (Q2Y616K4SJRW9K/Q1DQEGHV9I3BKB): state=`blocked`.
  Scope: env=albertsons; org=6; audience=9668.
  Command: `glcli --env albertsons bifrost pizza --audience-id 9668 --org-id 6`
  Blockers: `missing_run_identity`

## Next Action

Follow target group 260622-albertsons_6-bigquery-type-mismatch.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
