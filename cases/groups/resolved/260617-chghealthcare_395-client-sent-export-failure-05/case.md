<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# chghealthcare_395 client-sent-export-failure

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `resolved`
Tags: `triage:needs_review`, `resolved:export-healthy`
Incidents: [Q2CT8J2QXFDLQB](https://growthloop.pagerduty.com/incidents/Q2CT8J2QXFDLQB)
Alerts: 1

## Current Summary

Auto-resolved from Pizza export checks: all 1 alert-scoped export check(s) are healthy_closed with no blockers.

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `chghealthcare_395`
- Audiences: `21184`
- Destinations: none
- State tuples: none
- Commands seen: `glcli --env prod bifrost pizza --audience-id 21184 --org-id 395`

Representative alerts:
- Q2CT8J2QXFDLQB/Q0UJHAGZ59RFO9: 2026-06-17T16:17:40-07:00; chghealthcare_395; audience 21184. chghealthcare (CompHealth) - Audience 21184: Audience Export failure for 21184 sent to client.

## Export Checks

- Checks: 1.
- States: `healthy_closed`=1

Check evidence:
- chk_q2ct8j2qxfdlqb_q0ujhagz59rfo9 (Q2CT8J2QXFDLQB/Q0UJHAGZ59RFO9): state=`healthy_closed`.
  Scope: env=prod; org=395; audience=21184.
  Command: `glcli --env prod bifrost pizza --audience-id 21184 --org-id 395`
  Run 21184-google_adwords_13456-scheduled__2026-06-21T23:00:00+00:00: health=`healthy`; created=2026-06-22T00:12:06.698439+00:00; snapshotting=snapshotting_finished; export=export_finished; failed=0.

## Recent Evidence

- Auto-resolved from Pizza export checks: all 1 alert-scoped export check(s) are healthy_closed with no blockers.
  Source: `check-exports`; kind: `export_check`; captured: `2026-06-22T21:36:04.162Z`.

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
