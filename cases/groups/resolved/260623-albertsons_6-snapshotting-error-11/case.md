<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# albertsons_6 snapshotting-error

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `resolved`
Tags: `triage:needs_review`, `resolved:merged`
Incidents: [Q2IIOBNUV6BSPG](https://growthloop.pagerduty.com/incidents/Q2IIOBNUV6BSPG)
Alerts: 1

## Current Summary

Merged into 260622-albertsons_6-http-client-errors: 2026-06-23 Albertsons snapshotting alert has pre_snapshotting_check HTTP client error; scoped logs show this is the existing Quervice missing Product_Attributes_Product_Group_categoryL validation class.

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `albertsons_6`
- Audiences: `2237`
- Destinations: `live_ramp_activation`
- State tuples: `snapshotting_error/no_batches`
- Commands seen: `glcli --env albertsons bifrost pizza --audience-id 2237 --org-id 6`

Representative alerts:
- Q2IIOBNUV6BSPG/Q0WKXBFD1QCPXD: 2026-06-23T07:31:43-07:00; albertsons_6; audience 2237; live_ramp_activation; snapshotting_error/no_batches. albertsons (Albertsons Media): Exports for audience 2237 failed with states: <(snapshotting_error,no_batches)>
  Runs: `2237-live_ramp_activation_717-scheduled__2026-06-23T00:00:00+00:00`

## Export Checks

- Checks: 1.
- States: `blocked`=1
- Blockers seen: `snapshotting_error_requires_review`

Check evidence:
- chk_q2iiobnuv6bspg_q0wkxbfd1qcpxd (Q2IIOBNUV6BSPG/Q0WKXBFD1QCPXD): state=`blocked`.
  Scope: env=albertsons; org=6; audience=2237; destination=live_ramp_activation.
  Checked runs: `2237-live_ramp_activation_717-scheduled__2026-06-23T00:00:00+00:00`
  Command: `glcli --env albertsons bifrost pizza --audience-id 2237 --org-id 6`
  Blockers: `snapshotting_error_requires_review`
  Run 2237-live_ramp_activation_717-scheduled__2026-06-23T00:00:00+00:00: health=`blocked`; blockers=snapshotting_error_requires_review; created=2026-06-23T01:00:05.460929+00:00; snapshotting=snapshotting_error; export=no_batches; failed=0.

## Next Action

Follow target group 260622-albertsons_6-http-client-errors.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
