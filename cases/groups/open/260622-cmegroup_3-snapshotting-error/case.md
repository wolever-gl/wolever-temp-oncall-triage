<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# cmegroup_3 snapshotting-error

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `open`
Tags: `triage:needs_review`
Incidents: [Q0O3BU3JCKYTQF](https://growthloop.pagerduty.com/incidents/Q0O3BU3JCKYTQF)
Alerts: 1

## Current Summary

cmegroup (default): Exports for audience 27 failed with states: <(snapshotting_error,no_batches)>

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `cmegroup_3`
- Audiences: `27`
- Destinations: `google_adwords`
- State tuples: `snapshotting_error/no_batches`
- Commands seen: `glcli --env cme bifrost pizza --audience-id 27 --org-id 3`

Representative alerts:
- Q0O3BU3JCKYTQF/Q0LTHPJ74JYUVB: 2026-06-22T07:30:00-07:00; cmegroup_3; audience 27; google_adwords; snapshotting_error/no_batches. cmegroup (default): Exports for audience 27 failed with states: <(snapshotting_error,no_batches)>
  Runs: `27-google_adwords_42-scheduled__2026-06-22T00:00:00+00:00`

## Export Checks

- Checks: 1.
- States: `blocked`=1
- Blockers seen: `snapshotting_error_requires_review`

Check evidence:
- chk_q0o3bu3jckytqf_q0lthpj74jyuvb (Q0O3BU3JCKYTQF/Q0LTHPJ74JYUVB): state=`blocked`.
  Scope: env=cme; org=3; audience=27; destination=google_adwords.
  Checked runs: `27-google_adwords_42-scheduled__2026-06-22T00:00:00+00:00`
  Command: `glcli --env cme bifrost pizza --audience-id 27 --org-id 3`
  Blockers: `snapshotting_error_requires_review`
  Run 27-google_adwords_42-scheduled__2026-06-22T00:00:00+00:00: health=`blocked`; blockers=snapshotting_error_requires_review; created=2026-06-22T00:15:22.560461+00:00; snapshotting=snapshotting_error; export=no_batches; failed=0.

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
