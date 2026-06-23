<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# chghealthcare_395 client-sent-export-failure

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `resolved`
Tags: `triage:needs_review`, `resolved:export-healthy`
Incidents: [Q357X1DD8NHKAU](https://growthloop.pagerduty.com/incidents/Q357X1DD8NHKAU)
Alerts: 1

## Current Summary

Auto-resolved from Pizza export checks: all 1 alert-scoped export check(s) are healthy_closed with no blockers.

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `chghealthcare_395`
- Audiences: `34238`
- Destinations: none
- State tuples: none
- Commands seen: `glcli --env prod bifrost pizza --audience-id 34238 --org-id 395`

Representative alerts:
- Q357X1DD8NHKAU/Q2BUG6N3KM7OGQ: 2026-06-20T16:59:24-07:00; chghealthcare_395; audience 34238. chghealthcare (Omni-Division) - Audience 34238: Audience Export failure for 34238 sent to client.

## Export Checks

- Checks: 1.
- States: `healthy_closed`=1

Check evidence:
- chk_q357x1dd8nhkau_q2bug6n3km7ogq (Q357X1DD8NHKAU/Q2BUG6N3KM7OGQ): state=`healthy_closed`.
  Scope: env=prod; org=395; audience=34238.
  Command: `glcli --env prod bifrost pizza --audience-id 34238 --org-id 395`
  Run 34238-snowflake_20923-scheduled__2026-06-21T23:00:00+00:00: health=`healthy`; created=2026-06-21T23:39:21.330069+00:00; snapshotting=snapshotting_finished; export=export_finished; failed=0.

## Recent Evidence

- Auto-resolved from Pizza export checks: all 1 alert-scoped export check(s) are healthy_closed with no blockers.
  Source: `check-exports`; kind: `export_check`; captured: `2026-06-22T21:58:41.606Z`.

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
