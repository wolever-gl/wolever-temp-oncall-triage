<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# chghealthcare_395 client-sent-export-failure

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `resolved`
Tags: `triage:needs_review`, `resolved:export-healthy`
Incidents: [Q1DU3XX8K2JFO9](https://growthloop.pagerduty.com/incidents/Q1DU3XX8K2JFO9)
Alerts: 1

## Current Summary

Auto-resolved from Pizza export checks: all 1 alert-scoped export check(s) are healthy_closed with no blockers.

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `chghealthcare_395`
- Audiences: `22843`
- Destinations: none
- State tuples: none
- Commands seen: `glcli --env prod bifrost pizza --audience-id 22843 --org-id 395`

Representative alerts:
- Q1DU3XX8K2JFO9/Q0TI0AR366LC8K: 2026-06-22T16:34:29-07:00; chghealthcare_395; audience 22843. chghealthcare (CompHealth) - Audience 22843: Audience Export failure for 22843 sent to client.

## Export Checks

- Checks: 1.
- States: `healthy_closed`=1

Check evidence:
- chk_q1du3xx8k2jfo9_q0ti0ar366lc8k (Q1DU3XX8K2JFO9/Q0TI0AR366LC8K): state=`healthy_closed`.
  Scope: env=prod; org=395; audience=22843.
  Command: `glcli --env prod bifrost pizza --audience-id 22843 --org-id 395`
  Run 22843-google_adwords_14253-scheduled__2026-06-22T23:00:00+00:00: health=`healthy`; created=2026-06-22T23:34:48.432359+00:00; snapshotting=snapshotting_finished; export=export_finished; failed=0.

## Recent Evidence

- Auto-resolved from Pizza export checks: all 1 alert-scoped export check(s) are healthy_closed with no blockers.
  Source: `check-exports`; kind: `export_check`; captured: `2026-06-23T14:04:57.389Z`.

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
