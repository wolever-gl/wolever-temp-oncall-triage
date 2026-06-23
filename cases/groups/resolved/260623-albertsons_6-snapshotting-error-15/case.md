<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# albertsons_6 snapshotting-error

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `resolved`
Tags: `triage:needs_review`, `resolved:merged`
Incidents: [Q38JIFOCY2F0AO](https://growthloop.pagerduty.com/incidents/Q38JIFOCY2F0AO)
Alerts: 1

## Current Summary

Merged into 260622-albertsons_6-http-client-errors: 2026-06-23 Albertsons snapshotting alert has pre_snapshotting_check HTTP client error; scoped logs show this is the existing Quervice missing Product_Attributes_Product_Group_categoryL validation class.

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `albertsons_6`
- Audiences: `9323`
- Destinations: `live_ramp_activation`
- State tuples: `snapshotting_error/no_batches`
- Commands seen: `glcli --env albertsons bifrost pizza --audience-id 9323 --org-id 6`

Representative alerts:
- Q38JIFOCY2F0AO/Q30GIKI5S5ODZQ: 2026-06-23T07:35:50-07:00; albertsons_6; audience 9323; live_ramp_activation; snapshotting_error/no_batches. albertsons (Albertsons Media): Exports for audience 9323 failed with states: <(snapshotting_error,no_batches)>
  Runs: `9323-live_ramp_activation_1824-scheduled__2026-06-22T00:00:00+00:00`

## Export Checks

- Checks: 1.
- States: `blocked`=1
- Blockers seen: `snapshotting_error_requires_review`

Check evidence:
- chk_q38jifocy2f0ao_q30giki5s5odzq (Q38JIFOCY2F0AO/Q30GIKI5S5ODZQ): state=`blocked`.
  Scope: env=albertsons; org=6; audience=9323; destination=live_ramp_activation.
  Checked runs: `9323-live_ramp_activation_1824-scheduled__2026-06-22T00:00:00+00:00`
  Command: `glcli --env albertsons bifrost pizza --audience-id 9323 --org-id 6`
  Blockers: `snapshotting_error_requires_review`
  Run 9323-live_ramp_activation_1824-scheduled__2026-06-22T00:00:00+00:00: health=`blocked`; blockers=snapshotting_error_requires_review; created=2026-06-22T17:49:53.474519+00:00; snapshotting=snapshotting_error; export=no_batches; failed=0.

## Next Action

Follow target group 260622-albertsons_6-http-client-errors.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
