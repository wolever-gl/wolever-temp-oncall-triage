<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# 174 snapshotting-error

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `open`
Tags: `triage:needs_review`
Incidents: [Q0Y6Y6J6EOJPCB](https://growthloop.pagerduty.com/incidents/Q0Y6Y6J6EOJPCB)
Alerts: 1

## Current Summary

NJ Devils (default): Exports for audience 6735 failed with states: <(snapshotting_error,no_batches)>

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `174`
- Audiences: `6735`
- Destinations: `linkedin_ads`
- State tuples: `snapshotting_error/no_batches`
- Commands seen: `glcli --env prod bifrost pizza --audience-id 6735 --org-id 174`

Representative alerts:
- Q0Y6Y6J6EOJPCB/Q398VAHRAO29RN: 2026-06-22T07:54:56-07:00; 174; audience 6735; linkedin_ads; snapshotting_error/no_batches. NJ Devils (default): Exports for audience 6735 failed with states: <(snapshotting_error,no_batches)>
  Runs: `6735-linkedin_ads_22258-scheduled__2026-06-20T00:00:00+00:00`, `6735-linkedin_ads_22258-webapp__2026-05-20T20:10:48+00:00`

## Export Checks

- Checks: 1.
- States: `blocked`=1
- Blockers seen: `snapshotting_error_requires_review`

Check evidence:
- chk_q0y6y6j6eojpcb_q398vahrao29rn (Q0Y6Y6J6EOJPCB/Q398VAHRAO29RN): state=`blocked`.
  Scope: env=prod; org=174; audience=6735; destination=linkedin_ads.
  Checked runs: `6735-linkedin_ads_22258-webapp__2026-05-20T20:10:48+00:00`, `6735-linkedin_ads_22258-scheduled__2026-06-20T00:00:00+00:00`
  Command: `glcli --env prod bifrost pizza --audience-id 6735 --org-id 174`
  Blockers: `snapshotting_error_requires_review`, `snapshotting_error_requires_review`
  Run 6735-linkedin_ads_22258-webapp__2026-05-20T20:10:48+00:00: health=`blocked`; blockers=snapshotting_error_requires_review; created=2026-05-20T20:12:07.784009+00:00; snapshotting=snapshotting_error; export=no_batches; failed=0.
  Run 6735-linkedin_ads_22258-scheduled__2026-06-20T00:00:00+00:00: health=`blocked`; blockers=snapshotting_error_requires_review; created=2026-06-20T00:16:51.606320+00:00; snapshotting=snapshotting_error; export=no_batches; failed=0.

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
