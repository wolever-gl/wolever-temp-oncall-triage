<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# chghealthcare_395 client-sent-export-failure

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `resolved`
Tags: `triage:needs_review`, `resolved:export-healthy`
Incidents: [Q3GTOAWOIRQZXZ](https://growthloop.pagerduty.com/incidents/Q3GTOAWOIRQZXZ)
Alerts: 1

## Current Summary

Auto-resolved from Pizza export checks: all 1 alert-scoped export check(s) are healthy_closed with no blockers.

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `chghealthcare_395`
- Audiences: `32373`
- Destinations: none
- State tuples: none
- Commands seen: `glcli --env prod bifrost pizza --audience-id 32373 --org-id 395`

Representative alerts:
- Q3GTOAWOIRQZXZ/Q1G3Q6YCU7DPRZ: 2026-06-20T16:57:03-07:00; chghealthcare_395; audience 32373. chghealthcare (CompHealth) - Audience 32373: Audience Export failure for 32373 sent to client.

## Export Checks

- Checks: 1.
- States: `healthy_closed`=1

Check evidence:
- chk_q3gtoawoirqzxz_q1g3q6ycu7dprz (Q3GTOAWOIRQZXZ/Q1G3Q6YCU7DPRZ): state=`healthy_closed`.
  Scope: env=prod; org=395; audience=32373.
  Command: `glcli --env prod bifrost pizza --audience-id 32373 --org-id 395`
  Run 32373-snowflake_19830-scheduled__2026-06-21T23:00:00+00:00: health=`healthy`; created=2026-06-21T23:42:28.103956+00:00; snapshotting=snapshotting_finished; export=export_finished; failed=0.

## Recent Evidence

- Auto-resolved from Pizza export checks: all 1 alert-scoped export check(s) are healthy_closed with no blockers.
  Source: `check-exports`; kind: `export_check`; captured: `2026-06-22T21:59:27.457Z`.

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
