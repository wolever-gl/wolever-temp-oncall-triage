<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# albertsons_6 client-sent-export-failure split

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `open`
Tags: `triage:needs_review`, `triage:snapshotting-error`
Incidents: [Q38JR11G2ENK2W](https://growthloop.pagerduty.com/incidents/Q38JR11G2ENK2W)
Alerts: 1

## Current Summary

Needs investigation: audience 10073 remains failed; latest Pizza is 2026-05-15 snapshotting_error/no_batches during pre_snapshotting_check with no later success.

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `albertsons_6`
- Audiences: `10073`
- Destinations: none
- State tuples: none
- Commands seen: `glcli --env albertsons bifrost pizza --audience-id 10073 --org-id 6`

Representative alerts:
- Q38JR11G2ENK2W/Q32J02DN0JRYZ0: 2026-05-14T23:51:59-07:00; albertsons_6; audience 10073. albertsons (Albertsons Media) - Audience 10073: Audience Export failure for 10073 sent to client.

## Export Checks

- Checks: 1.
- States: `blocked`=1
- Blockers seen: `missing_run_identity`

Check evidence:
- chk_q38jr11g2enk2w_q32j02dn0jryz0 (Q38JR11G2ENK2W/Q32J02DN0JRYZ0): state=`blocked`.
  Scope: env=albertsons; org=6; audience=10073.
  Command: `glcli --env albertsons bifrost pizza --audience-id 10073 --org-id 6`
  Blockers: `missing_run_identity`

## Recent Evidence

- Audience 10073 latest Pizza row is 2026-05-15 02:40:38 UTC, run 10073-live_ramp_activation_2061-scheduled__2026-05-15T00:00:00+00:00, state snapshotting_error/no_batches with failure reason: Snapshotting failed while running pre_snapshotting_check: unknown error. Prior weekly runs from 2026-04-17 through 2026-05-08 were snapshotting_processing/no_batches, so there is no later successful run.
  Source: `glcli bifrost pizza`; kind: `pizza`; captured: `2026-05-16T21:46:46.855Z`.
  Command: `glcli --env albertsons bifrost pizza --audience-id 10073 --org-id 6 --format json`

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
