<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# chghealthcare_395 client-sent-export-failure

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `resolved`
Tags: `triage:needs_review`, `resolved:export-healthy`
Incidents: [Q2YZT6X3ORSHC5](https://growthloop.pagerduty.com/incidents/Q2YZT6X3ORSHC5)
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
- Q2YZT6X3ORSHC5/Q1K6SVC5B1YPEP: 2026-06-20T16:30:32-07:00; chghealthcare_395; audience 22843. chghealthcare (CompHealth) - Audience 22843: Audience Export failure for 22843 sent to client.

## Export Checks

- Checks: 1.
- States: `healthy_closed`=1

Check evidence:
- chk_q2yzt6x3orshc5_q1k6svc5b1ypep (Q2YZT6X3ORSHC5/Q1K6SVC5B1YPEP): state=`healthy_closed`.
  Scope: env=prod; org=395; audience=22843.
  Command: `glcli --env prod bifrost pizza --audience-id 22843 --org-id 395`
  Run 22843-google_adwords_14253-scheduled__2026-06-21T23:00:00+00:00: health=`healthy`; created=2026-06-22T00:10:34.331256+00:00; snapshotting=snapshotting_finished; export=export_finished; failed=0.

## Recent Evidence

- Auto-resolved from Pizza export checks: all 1 alert-scoped export check(s) are healthy_closed with no blockers.
  Source: `check-exports`; kind: `export_check`; captured: `2026-06-22T21:58:19.123Z`.

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
