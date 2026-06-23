<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# albertsons_6 snapshotting-error

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `resolved`
Tags: `triage:needs_review`, `resolved:merged`
Incidents: [Q2J49L2EK3Q237](https://growthloop.pagerduty.com/incidents/Q2J49L2EK3Q237)
Alerts: 1

## Current Summary

Merged into 260622-albertsons_6-bigquery-type-mismatch: 2026-06-23 Albertsons snapshotting alert failed pre_snapshotting_check with BigQuery expression type incompatibility; same remediation path as existing BigQuery type mismatch cohort.

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `albertsons_6`
- Audiences: `9879`
- Destinations: `live_ramp_activation`
- State tuples: `snapshotting_error/no_batches`
- Commands seen: `glcli --env albertsons bifrost pizza --audience-id 9879 --org-id 6`

Representative alerts:
- Q2J49L2EK3Q237/Q2QI81T3ZL3N13: 2026-06-23T07:36:27-07:00; albertsons_6; audience 9879; live_ramp_activation; snapshotting_error/no_batches. albertsons (Albertsons Media): Exports for audience 9879 failed with states: <(snapshotting_error,no_batches)>
  Runs: `9879-live_ramp_activation_2009-scheduled__2026-06-23T00:00:00+00:00`

## Export Checks

- Checks: 1.
- States: `blocked`=1
- Blockers seen: `snapshotting_error_requires_review`

Check evidence:
- chk_q2j49l2ek3q237_q2qi81t3zl3n13 (Q2J49L2EK3Q237/Q2QI81T3ZL3N13): state=`blocked`.
  Scope: env=albertsons; org=6; audience=9879; destination=live_ramp_activation.
  Checked runs: `9879-live_ramp_activation_2009-scheduled__2026-06-23T00:00:00+00:00`
  Command: `glcli --env albertsons bifrost pizza --audience-id 9879 --org-id 6`
  Blockers: `snapshotting_error_requires_review`
  Run 9879-live_ramp_activation_2009-scheduled__2026-06-23T00:00:00+00:00: health=`blocked`; blockers=snapshotting_error_requires_review; created=2026-06-23T02:05:39.595289+00:00; snapshotting=snapshotting_error; export=no_batches; failed=0.

## Next Action

Follow target group 260622-albertsons_6-bigquery-type-mismatch.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
