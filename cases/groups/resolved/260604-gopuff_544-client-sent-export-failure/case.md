<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# gopuff_544 client-sent-export-failure

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `resolved`
Tags: `triage:needs_review`, `resolved:export-healthy`
Incidents: [Q0APHNZLUQS0KH](https://growthloop.pagerduty.com/incidents/Q0APHNZLUQS0KH)
Alerts: 1

## Current Summary

Auto-resolved from Pizza export checks: all 1 alert-scoped export check(s) are healthy_closed with no blockers.

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `gopuff_544`
- Audiences: `37063`
- Destinations: none
- State tuples: none
- Commands seen: `glcli --env prod bifrost pizza --audience-id 37063 --org-id 544`

Representative alerts:
- Q0APHNZLUQS0KH/Q2H04AO87R8CEL: 2026-06-04T07:11:15-07:00; gopuff_544; audience 37063. gopuff (default) - Audience 37063: Audience Export failure for 37063 sent to client.

## Export Checks

- Checks: 1.
- States: `healthy_closed`=1

Check evidence:
- chk_q0aphnzluqs0kh_q2h04ao87r8cel (Q0APHNZLUQS0KH/Q2H04AO87R8CEL): state=`healthy_closed`.
  Scope: env=prod; org=544; audience=37063.
  Command: `glcli --env prod bifrost pizza --audience-id 37063 --org-id 544`
  Run 37063-snowflake_22530-webapp__2026-06-04T16:40:42+00:00: health=`healthy`; created=2026-06-04T16:40:43.504015+00:00; snapshotting=snapshotting_finished_no_deltas; export=no_batches; failed=0.

## Recent Evidence

- Auto-resolved from Pizza export checks: all 1 alert-scoped export check(s) are healthy_closed with no blockers.
  Source: `check-exports`; kind: `export_check`; captured: `2026-06-22T21:14:48.628Z`.

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
