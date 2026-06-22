<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# albertsons_6 snapshotting-error

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `open`
Tags: `triage:needs_review`
Incidents: [Q3BE6H76WFUNBR](https://growthloop.pagerduty.com/incidents/Q3BE6H76WFUNBR)
Alerts: 1

## Current Summary

albertsons (Albertsons Media): Exports for audience 8938 failed with states: <(snapshotting_error,no_batches)>

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `albertsons_6`
- Audiences: `8938`
- Destinations: `live_ramp_sftp`
- State tuples: `snapshotting_error/no_batches`
- Commands seen: `glcli --env albertsons bifrost pizza --audience-id 8938 --org-id 6`

Representative alerts:
- Q3BE6H76WFUNBR/Q2NZ5FSINHUVGK: 2026-06-22T07:35:18-07:00; albertsons_6; audience 8938; live_ramp_sftp; snapshotting_error/no_batches. albertsons (Albertsons Media): Exports for audience 8938 failed with states: <(snapshotting_error,no_batches)>
  Runs: `8938-live_ramp_activation_2895-scheduled__2026-06-19T00:00:00+00:00`, `8938-live_ramp_sftp_3203-scheduled__2026-06-18T00:00:00+00:00`

## Export Checks

- Checks: 1.
- States: `blocked`=1
- Blockers seen: `snapshotting_error_requires_review`

Check evidence:
- chk_q3be6h76wfunbr_q2nz5fsinhuvgk (Q3BE6H76WFUNBR/Q2NZ5FSINHUVGK): state=`blocked`.
  Scope: env=albertsons; org=6; audience=8938; destination=live_ramp_sftp.
  Checked runs: `8938-live_ramp_sftp_3203-scheduled__2026-06-18T00:00:00+00:00`, `8938-live_ramp_activation_2895-scheduled__2026-06-19T00:00:00+00:00`
  Command: `glcli --env albertsons bifrost pizza --audience-id 8938 --org-id 6`
  Blockers: `snapshotting_error_requires_review`
  Run 8938-live_ramp_sftp_3203-scheduled__2026-06-18T00:00:00+00:00: health=`blocked`; blockers=snapshotting_error_requires_review; created=2026-06-18T01:41:55.409613+00:00; snapshotting=snapshotting_error; export=no_batches; failed=0.

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
