<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# trumanshow_336 no-batches

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `resolved`
Tags: `triage:needs_review`, `resolved:export-healthy`
Incidents: [Q12A5QFIM3F9LN](https://growthloop.pagerduty.com/incidents/Q12A5QFIM3F9LN)
Alerts: 2

## Current Summary

Auto-resolved from Pizza export checks: all 2 alert-scoped export check(s) are healthy_closed with no blockers.

## Alert Scope

- Alert facts: 2 imported, 2 linked to this group.
- Orgs: `trumanshow_336`
- Audiences: `35392`, `36293`
- Destinations: `iterable`, `personalization_api`
- State tuples: `snapshotting_finished/no_batches`
- Commands seen: `glcli --env prod bifrost pizza --audience-id 35392 --org-id 336`, `glcli --env prod bifrost pizza --audience-id 36293 --org-id 336`

Representative alerts:
- Q12A5QFIM3F9LN/Q2PYTEEB639Q4I: 2026-05-14T08:08:29-07:00; trumanshow_336; audience 35392; iterable; snapshotting_finished/no_batches. trumanshow (Retail & CPG): Exports for audience 35392 failed with states: <(snapshotting_finished,no_batches)>
  Runs: `35392-iterable_21441-scheduled__2026-05-14T00:00:00+00:00`
- Q12A5QFIM3F9LN/Q10GUO0WFWZCAO: 2026-05-14T08:08:33-07:00; trumanshow_336; audience 36293; personalization_api; snapshotting_finished/no_batches. trumanshow (Travel): Exports for audience 36293 failed with states: <(snapshotting_finished,no_batches)>
  Runs: `36293-personalization_api_22146-webapp__2026-05-13T00:37:15+00:00`

## Export Checks

- Checks: 2.
- States: `healthy_closed`=2

Check evidence:
- chk_q12a5qfim3f9ln_q10guo0wfwzcao (Q12A5QFIM3F9LN/Q10GUO0WFWZCAO): state=`healthy_closed`.
  Scope: env=prod; org=336; audience=36293; destination=personalization_api.
  Checked runs: `36293-personalization_api_22146-webapp__2026-05-13T00:37:15+00:00`
  Command: `glcli --env prod bifrost pizza --audience-id 36293 --org-id 336`
  Run 36293-personalization_api_22146-webapp__2026-05-13T00:37:15+00:00: health=`healthy`; created=2026-05-13T00:38:14.514033+00:00; snapshotting=snapshotting_finished; export=export_finished; failed=0.
- chk_q12a5qfim3f9ln_q2pyteeb639q4i (Q12A5QFIM3F9LN/Q2PYTEEB639Q4I): state=`healthy_closed`.
  Scope: env=prod; org=336; audience=35392; destination=iterable.
  Checked runs: `35392-iterable_21441-scheduled__2026-05-14T00:00:00+00:00`
  Command: `glcli --env prod bifrost pizza --audience-id 35392 --org-id 336`
  Run 35392-iterable_21441-scheduled__2026-05-14T00:00:00+00:00: health=`healthy`; created=2026-05-14T00:17:49.175153+00:00; snapshotting=snapshotting_finished; export=export_finished; failed=0.

## Recent Evidence

- Auto-resolved from Pizza export checks: all 2 alert-scoped export check(s) are healthy_closed with no blockers.
  Source: `check-exports`; kind: `export_check`; captured: `2026-05-16T21:03:21.513Z`.

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
