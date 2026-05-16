<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# albertsons_6 zero-success

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `resolved`
Tags: `triage:needs_review`, `resolved:export-healthy`
Incidents: [Q269WMZF4MKMNL](https://growthloop.pagerduty.com/incidents/Q269WMZF4MKMNL)
Alerts: 2

## Current Summary

Resolved by zero-success tagger: all attached alerts now have healthy Pizza evidence, either export_finished or snapshotting_finished_no_deltas/no_batches with zero failures.

## Alert Scope

- Alert facts: 2 imported, 2 linked to this group.
- Orgs: `albertsons_6`
- Audiences: `10684`, `10685`
- Destinations: none
- State tuples: none
- Commands seen: `glcli --env albertsons bifrost pizza --audience-id 10684 --org-id 6`, `glcli --env albertsons bifrost pizza --audience-id 10685 --org-id 6`

Representative alerts:
- Q269WMZF4MKMNL/Q0BQKJWVBSB8AY: 2026-05-15T14:25:24-07:00; albertsons_6; audience 10685. albertsons (Albertsons Media) - Audience 10685: 0 successfull_exports from pizza tracker found 10 minutes after new export
- Q269WMZF4MKMNL/Q1E9RQ6EFI68FV: 2026-05-15T14:46:08-07:00; albertsons_6; audience 10684. albertsons (Albertsons Media) - Audience 10684: 0 successfull_exports from pizza tracker found 10 minutes after new export

## Export Checks

- Checks: 2.
- States: `blocked`=2
- Blockers seen: `missing_run_identity`

Check evidence:
- chk_q269wmzf4mkmnl_q0bqkjwvbsb8ay (Q269WMZF4MKMNL/Q0BQKJWVBSB8AY): state=`blocked`.
  Scope: env=albertsons; org=6; audience=10685.
  Command: `glcli --env albertsons bifrost pizza --audience-id 10685 --org-id 6`
  Blockers: `missing_run_identity`
- chk_q269wmzf4mkmnl_q1e9rq6efi68fv (Q269WMZF4MKMNL/Q1E9RQ6EFI68FV): state=`blocked`.
  Scope: env=albertsons; org=6; audience=10684.
  Command: `glcli --env albertsons bifrost pizza --audience-id 10684 --org-id 6`
  Blockers: `missing_run_identity`

## Recent Evidence

- Zero-success tagger found both attached alerts recovered: audience 10684 has a post-alert no-delta/no-batches run with zero failures, and audience 10685 has only no-delta/no-batches rows with zero failures.
  Source: `tagrun_20260516212434_260516_albertsons_zero_success_progress`; kind: `tagger`; captured: `2026-05-16T21:26:17.877Z`.

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
