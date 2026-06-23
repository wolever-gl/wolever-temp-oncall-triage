<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# albertsons_6 snapshotting-error

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `resolved`
Tags: `triage:needs_review`, `resolved:merged`
Incidents: [Q2ECAALJOOO1R6](https://growthloop.pagerduty.com/incidents/Q2ECAALJOOO1R6)
Alerts: 1

## Current Summary

Merged into 260622-albertsons_6-http-client-errors: Audience 6999 export check shows pre_snapshotting_check requested field missing from the source schema, matching the client/schema-validation remediation path.

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `albertsons_6`
- Audiences: `6999`
- Destinations: `live_ramp_activation`
- State tuples: `snapshotting_error/no_batches`
- Commands seen: `glcli --env albertsons bifrost pizza --audience-id 6999 --org-id 6`

Representative alerts:
- Q2ECAALJOOO1R6/Q1RO4KL8SVVGTF: 2026-06-22T07:34:11-07:00; albertsons_6; audience 6999; live_ramp_activation; snapshotting_error/no_batches. albertsons (Albertsons Media): Exports for audience 6999 failed with states: <(snapshotting_error,no_batches)>
  Runs: `6999-live_ramp_activation_1435-scheduled__2026-06-18T00:00:00+00:00`

## Export Checks

- Checks: 1.
- States: `blocked`=1
- Blockers seen: `snapshotting_error_requires_review`

Check evidence:
- chk_q2ecaaljooo1r6_q1ro4kl8svvgtf (Q2ECAALJOOO1R6/Q1RO4KL8SVVGTF): state=`blocked`.
  Scope: env=albertsons; org=6; audience=6999; destination=live_ramp_activation.
  Checked runs: `6999-live_ramp_activation_1435-scheduled__2026-06-18T00:00:00+00:00`
  Command: `glcli --env albertsons bifrost pizza --audience-id 6999 --org-id 6`
  Blockers: `snapshotting_error_requires_review`
  Run 6999-live_ramp_activation_1435-scheduled__2026-06-18T00:00:00+00:00: health=`blocked`; blockers=snapshotting_error_requires_review; created=2026-06-18T07:44:10.612704+00:00; snapshotting=snapshotting_error; export=no_batches; failed=0.

## Next Action

Follow target group 260622-albertsons_6-http-client-errors.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
