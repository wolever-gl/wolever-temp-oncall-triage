<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# albertsons_6 snapshotting-error

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `resolved`
Tags: `triage:needs_review`, `resolved:merged`
Incidents: [Q3NL9MR59FOSMG](https://growthloop.pagerduty.com/incidents/Q3NL9MR59FOSMG)
Alerts: 1

## Current Summary

Merged into 260622-albertsons_6-quervice-timeouts: Audience 10107 has documented Quervice 503/timeout behavior; track with Quervice timeout remediation.

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `albertsons_6`
- Audiences: `10107`
- Destinations: `live_ramp_activation`
- State tuples: `snapshotting_error/no_batches`
- Commands seen: `glcli --env albertsons bifrost pizza --audience-id 10107 --org-id 6`

Representative alerts:
- Q3NL9MR59FOSMG/Q3J32TKOEPH3JT: 2026-06-22T07:36:51-07:00; albertsons_6; audience 10107; live_ramp_activation; snapshotting_error/no_batches. albertsons (Albertsons Media): Exports for audience 10107 failed with states: <(snapshotting_error,no_batches)>
  Runs: `10107-live_ramp_activation_4991-scheduled__2026-06-20T00:00:00+00:00`

## Export Checks

- Checks: 1.
- States: `blocked`=1
- Blockers seen: `snapshotting_error_requires_review`

Check evidence:
- chk_q3nl9mr59fosmg_q3j32tkoeph3jt (Q3NL9MR59FOSMG/Q3J32TKOEPH3JT): state=`blocked`.
  Scope: env=albertsons; org=6; audience=10107; destination=live_ramp_activation.
  Checked runs: `10107-live_ramp_activation_4991-scheduled__2026-06-20T00:00:00+00:00`
  Command: `glcli --env albertsons bifrost pizza --audience-id 10107 --org-id 6`
  Blockers: `snapshotting_error_requires_review`
  Run 10107-live_ramp_activation_4991-scheduled__2026-06-20T00:00:00+00:00: health=`blocked`; blockers=snapshotting_error_requires_review; created=2026-06-20T03:51:26.974135+00:00; snapshotting=snapshotting_error; export=no_batches; failed=0.

## Next Action

Follow target group 260622-albertsons_6-quervice-timeouts.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
