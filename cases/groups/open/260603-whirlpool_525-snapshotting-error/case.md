<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# whirlpool_525 snapshotting-error

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `open`
Tags: `triage:needs_review`
Incidents: [Q1WT0Y2J3SAWEC](https://growthloop.pagerduty.com/incidents/Q1WT0Y2J3SAWEC)
Alerts: 1

## Current Summary

Whirlpool (KASA Prod): Exports for audience 36072 failed with states: <(snapshotting_error,no_batches)>

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `whirlpool_525`
- Audiences: `36072`
- Destinations: `live_ramp_sftp`
- State tuples: `snapshotting_error/no_batches`
- Commands seen: `glcli --env prod bifrost pizza --audience-id 36072 --org-id 525`

Representative alerts:
- Q1WT0Y2J3SAWEC/Q1V8NT43KS99Q6: 2026-06-03T07:57:39-07:00; whirlpool_525; audience 36072; live_ramp_sftp; snapshotting_error/no_batches. Whirlpool (KASA Prod): Exports for audience 36072 failed with states: <(snapshotting_error,no_batches)>
  Runs: `36072-live_ramp_sftp_22011-scheduled__2026-05-26T00:00:00+00:00`

## Export Checks

- Checks: 1.
- States: `blocked`=1
- Blockers seen: `snapshotting_error_requires_review`

Check evidence:
- chk_q1wt0y2j3sawec_q1v8nt43ks99q6 (Q1WT0Y2J3SAWEC/Q1V8NT43KS99Q6): state=`blocked`.
  Scope: env=prod; org=525; audience=36072; destination=live_ramp_sftp.
  Checked runs: `36072-live_ramp_sftp_22011-scheduled__2026-05-26T00:00:00+00:00`
  Command: `glcli --env prod bifrost pizza --audience-id 36072 --org-id 525`
  Blockers: `snapshotting_error_requires_review`
  Run 36072-live_ramp_sftp_22011-scheduled__2026-05-26T00:00:00+00:00: health=`blocked`; blockers=snapshotting_error_requires_review; created=2026-05-26T00:15:30.933827+00:00; snapshotting=snapshotting_error; export=no_batches; failed=0.

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
