<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# chghealthcare_395 client-sent-export-failure

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `resolved`
Tags: `triage:needs_review`, `resolved:export-healthy`
Incidents: [Q2PPG1TNLGJ49C](https://growthloop.pagerduty.com/incidents/Q2PPG1TNLGJ49C)
Alerts: 1

## Current Summary

Auto-resolved from Pizza export checks: all 1 alert-scoped export check(s) are healthy_closed with no blockers.

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `chghealthcare_395`
- Audiences: `26379`
- Destinations: none
- State tuples: none
- Commands seen: `glcli --env prod bifrost pizza --audience-id 26379 --org-id 395`

Representative alerts:
- Q2PPG1TNLGJ49C/Q2YVHG8TK8Z9M3: 2026-06-22T16:41:53-07:00; chghealthcare_395; audience 26379. chghealthcare (CompHealth) - Audience 26379: Audience Export failure for 26379 sent to client.

## Export Checks

- Checks: 1.
- States: `healthy_closed`=1

Check evidence:
- chk_q2ppg1tnlgj49c_q2yvhg8tk8z9m3 (Q2PPG1TNLGJ49C/Q2YVHG8TK8Z9M3): state=`healthy_closed`.
  Scope: env=prod; org=395; audience=26379.
  Command: `glcli --env prod bifrost pizza --audience-id 26379 --org-id 395`
  Run 26379-snowflake_16301-scheduled__2026-06-22T23:00:00+00:00: health=`healthy`; created=2026-06-22T23:41:56.383944+00:00; snapshotting=snapshotting_finished; export=export_finished; failed=0.

## Recent Evidence

- Auto-resolved from Pizza export checks: all 1 alert-scoped export check(s) are healthy_closed with no blockers.
  Source: `check-exports`; kind: `export_check`; captured: `2026-06-23T14:08:18.106Z`.

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
