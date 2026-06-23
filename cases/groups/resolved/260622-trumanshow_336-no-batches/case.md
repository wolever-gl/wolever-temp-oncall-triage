<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# trumanshow_336 no-batches

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `resolved`
Tags: `triage:needs_review`, `resolved:export-healthy`
Incidents: [Q34AH3IU2OMFFB](https://growthloop.pagerduty.com/incidents/Q34AH3IU2OMFFB)
Alerts: 1

## Current Summary

Auto-resolved from Pizza export checks: all 1 alert-scoped export check(s) are healthy_closed with no blockers.

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `trumanshow_336`
- Audiences: `38604`
- Destinations: `personalization_api`
- State tuples: `snapshotting_finished/no_batches`
- Commands seen: `glcli --env prod bifrost pizza --audience-id 38604 --org-id 336`

Representative alerts:
- Q34AH3IU2OMFFB/Q37PU7V8TBBPFS: 2026-06-22T07:54:02-07:00; trumanshow_336; audience 38604; personalization_api; snapshotting_finished/no_batches. trumanshow (Retail & CPG): Exports for audience 38604 failed with states: <(snapshotting_finished,no_batches)>
  Runs: `38604-personalization_api_22808-webapp__2026-06-19T17:35:08+00:00`

## Export Checks

- Checks: 1.
- States: `healthy_closed`=1

Check evidence:
- chk_q34ah3iu2omffb_q37pu7v8tbbpfs (Q34AH3IU2OMFFB/Q37PU7V8TBBPFS): state=`healthy_closed`.
  Scope: env=prod; org=336; audience=38604; destination=personalization_api.
  Checked runs: `38604-personalization_api_22808-webapp__2026-06-19T17:35:08+00:00`
  Command: `glcli --env prod bifrost pizza --audience-id 38604 --org-id 336`
  Run 38604-personalization_api_22808-webapp__2026-06-19T17:35:08+00:00: health=`healthy`; created=2026-06-19T17:35:12.495994+00:00; snapshotting=snapshotting_finished; export=no_batches; failed=0.

## Recent Evidence

- Auto-resolved from Pizza export checks: all 1 alert-scoped export check(s) are healthy_closed with no blockers.
  Source: `check-exports`; kind: `export_check`; captured: `2026-06-22T22:12:44.954Z`.

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
