<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# albertsons_6 snapshotting-error

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `resolved`
Tags: `triage:needs_review`, `resolved:merged`
Incidents: [Q05QT2VUY5NLIC](https://growthloop.pagerduty.com/incidents/Q05QT2VUY5NLIC)
Alerts: 1

## Current Summary

Merged into 260622-albertsons_6-quervice-timeouts: Audience 3283 has documented Quervice pre_snapshotting_check timeouts/lock-expiry behavior; track with Quervice timeout remediation.

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `albertsons_6`
- Audiences: `3283`
- Destinations: `live_ramp_activation`
- State tuples: `snapshotting_error/no_batches`
- Commands seen: `glcli --env albertsons bifrost pizza --audience-id 3283 --org-id 6`

Representative alerts:
- Q05QT2VUY5NLIC/Q083HD3KBH9L9I: 2026-06-22T07:33:34-07:00; albertsons_6; audience 3283; live_ramp_activation; snapshotting_error/no_batches. albertsons (Albertsons Media): Exports for audience 3283 failed with states: <(snapshotting_error,no_batches)>
  Runs: `3283-live_ramp_activation_1278-scheduled__2026-06-22T00:00:00+00:00`

## Export Checks

- Checks: 1.
- States: `blocked`=1
- Blockers seen: `snapshotting_error_requires_review`

Check evidence:
- chk_q05qt2vuy5nlic_q083hd3kbh9l9i (Q05QT2VUY5NLIC/Q083HD3KBH9L9I): state=`blocked`.
  Scope: env=albertsons; org=6; audience=3283; destination=live_ramp_activation.
  Checked runs: `3283-live_ramp_activation_1278-scheduled__2026-06-22T00:00:00+00:00`
  Command: `glcli --env albertsons bifrost pizza --audience-id 3283 --org-id 6`
  Blockers: `snapshotting_error_requires_review`
  Run 3283-live_ramp_activation_1278-scheduled__2026-06-22T00:00:00+00:00: health=`blocked`; blockers=snapshotting_error_requires_review; created=2026-06-22T12:33:50.267733+00:00; snapshotting=snapshotting_error; export=no_batches; failed=0.

## Next Action

Follow target group 260622-albertsons_6-quervice-timeouts.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
