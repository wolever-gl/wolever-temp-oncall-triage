<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# albertsons_6 snapshotting-error

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `new`
Tags: `triage:needs_review`
Incidents: [Q2VMABQVTJ3GZG](https://growthloop.pagerduty.com/incidents/Q2VMABQVTJ3GZG)
Alerts: 1

## Current Summary

albertsons (Albertsons Media): Exports for audience 1954 failed with states: <(snapshotting_error,no_batches)>

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `albertsons_6`
- Audiences: `1954`
- Destinations: `live_ramp_activation`
- State tuples: `snapshotting_error/no_batches`
- Commands seen: `glcli --env albertsons bifrost pizza --audience-id 1954 --org-id 6`

Representative alerts:
- Q2VMABQVTJ3GZG/Q12TFFXHH1NMG2: 2026-06-22T07:30:38-07:00; albertsons_6; audience 1954; live_ramp_activation; snapshotting_error/no_batches. albertsons (Albertsons Media): Exports for audience 1954 failed with states: <(snapshotting_error,no_batches)>
  Runs: `1954-live_ramp_activation_464-scheduled__2026-06-22T00:00:00+00:00`

## Export Checks

- Checks: 1.
- States: `blocked`=1
- Blockers seen: `snapshotting_error_requires_review`

Check evidence:
- chk_q2vmabqvtj3gzg_q12tffxhh1nmg2 (Q2VMABQVTJ3GZG/Q12TFFXHH1NMG2): state=`blocked`.
  Scope: env=albertsons; org=6; audience=1954; destination=live_ramp_activation.
  Checked runs: `1954-live_ramp_activation_464-scheduled__2026-06-22T00:00:00+00:00`
  Command: `glcli --env albertsons bifrost pizza --audience-id 1954 --org-id 6`
  Blockers: `snapshotting_error_requires_review`
  Run 1954-live_ramp_activation_464-scheduled__2026-06-22T00:00:00+00:00: health=`blocked`; blockers=snapshotting_error_requires_review; created=2026-06-22T01:43:08.497728+00:00; snapshotting=snapshotting_error; export=no_batches; failed=0.

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
