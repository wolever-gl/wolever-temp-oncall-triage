<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# chghealthcare_395 client-sent-export-failure

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `resolved`
Tags: `triage:needs_review`, `resolved:export-healthy`
Incidents: [Q2U5RZFS0YIPGH](https://growthloop.pagerduty.com/incidents/Q2U5RZFS0YIPGH)
Alerts: 1

## Current Summary

Auto-resolved from Pizza export checks: all 1 alert-scoped export check(s) are healthy_closed with no blockers.

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `chghealthcare_395`
- Audiences: `29661`
- Destinations: none
- State tuples: none
- Commands seen: `glcli --env prod bifrost pizza --audience-id 29661 --org-id 395`

Representative alerts:
- Q2U5RZFS0YIPGH/Q29NRPAQ2B73FH: 2026-06-15T16:47:47-07:00; chghealthcare_395; audience 29661. chghealthcare (Omni-Division) - Audience 29661: Audience Export failure for 29661 sent to client.

## Export Checks

- Checks: 1.
- States: `healthy_closed`=1

Check evidence:
- chk_q2u5rzfs0yipgh_q29nrpaq2b73fh (Q2U5RZFS0YIPGH/Q29NRPAQ2B73FH): state=`healthy_closed`.
  Scope: env=prod; org=395; audience=29661.
  Command: `glcli --env prod bifrost pizza --audience-id 29661 --org-id 395`
  Run 29661-snowflake_18151-scheduled__2026-06-21T23:00:00+00:00: health=`healthy`; created=2026-06-21T23:49:26.568918+00:00; snapshotting=snapshotting_finished; export=export_finished; failed=0.

## Recent Evidence

- Auto-resolved from Pizza export checks: all 1 alert-scoped export check(s) are healthy_closed with no blockers.
  Source: `check-exports`; kind: `export_check`; captured: `2026-06-22T21:23:10.614Z`.

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
