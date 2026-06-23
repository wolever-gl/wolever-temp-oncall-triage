<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# albertsons_6 snapshotting-error

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `resolved`
Tags: `triage:needs_review`, `resolved:merged`
Incidents: [Q1TBCJPRHS9RAX](https://growthloop.pagerduty.com/incidents/Q1TBCJPRHS9RAX)
Alerts: 1

## Current Summary

Merged into 260622-albertsons_6-bigquery-type-mismatch: Audience 9373 export check shows pre_snapshotting_check BigQuery expression type incompatibility.

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `albertsons_6`
- Audiences: `9373`
- Destinations: `live_ramp_activation`
- State tuples: `snapshotting_error/no_batches`
- Commands seen: `glcli --env albertsons bifrost pizza --audience-id 9373 --org-id 6`

Representative alerts:
- Q1TBCJPRHS9RAX/Q1ZKREFE2UTI22: 2026-06-22T07:35:43-07:00; albertsons_6; audience 9373; live_ramp_activation; snapshotting_error/no_batches. albertsons (Albertsons Media): Exports for audience 9373 failed with states: <(snapshotting_error,no_batches)>
  Runs: `9373-live_ramp_activation_1859-scheduled__2026-06-19T00:00:00+00:00`

## Export Checks

- Checks: 1.
- States: `blocked`=1
- Blockers seen: `snapshotting_error_requires_review`

Check evidence:
- chk_q1tbcjprhs9rax_q1zkrefe2uti22 (Q1TBCJPRHS9RAX/Q1ZKREFE2UTI22): state=`blocked`.
  Scope: env=albertsons; org=6; audience=9373; destination=live_ramp_activation.
  Checked runs: `9373-live_ramp_activation_1859-scheduled__2026-06-19T00:00:00+00:00`
  Command: `glcli --env albertsons bifrost pizza --audience-id 9373 --org-id 6`
  Blockers: `snapshotting_error_requires_review`
  Run 9373-live_ramp_activation_1859-scheduled__2026-06-19T00:00:00+00:00: health=`blocked`; blockers=snapshotting_error_requires_review; created=2026-06-19T03:51:09.123906+00:00; snapshotting=snapshotting_error; export=no_batches; failed=0.

## Next Action

Follow target group 260622-albertsons_6-bigquery-type-mismatch.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
