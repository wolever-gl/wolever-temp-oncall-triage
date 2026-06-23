<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# chghealthcare_395 client-sent-export-failure

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `resolved`
Tags: `triage:needs_review`, `resolved:export-healthy`
Incidents: [Q3H3B5BCFGWPBN](https://growthloop.pagerduty.com/incidents/Q3H3B5BCFGWPBN)
Alerts: 1

## Current Summary

Auto-resolved from Pizza export checks: all 1 alert-scoped export check(s) are healthy_closed with no blockers.

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `chghealthcare_395`
- Audiences: `29545`
- Destinations: none
- State tuples: none
- Commands seen: `glcli --env prod bifrost pizza --audience-id 29545 --org-id 395`

Representative alerts:
- Q3H3B5BCFGWPBN/Q0TCGDM9TZ7P1D: 2026-06-17T16:45:21-07:00; chghealthcare_395; audience 29545. chghealthcare (Omni-Division) - Audience 29545: Audience Export failure for 29545 sent to client.

## Export Checks

- Checks: 1.
- States: `healthy_closed`=1

Check evidence:
- chk_q3h3b5bcfgwpbn_q0tcgdm9tz7p1d (Q3H3B5BCFGWPBN/Q0TCGDM9TZ7P1D): state=`healthy_closed`.
  Scope: env=prod; org=395; audience=29545.
  Command: `glcli --env prod bifrost pizza --audience-id 29545 --org-id 395`
  Run 29545-snowflake_18150-scheduled__2026-06-21T23:00:00+00:00: health=`healthy`; created=2026-06-21T23:28:34.859774+00:00; snapshotting=snapshotting_finished; export=export_finished; failed=0.

## Recent Evidence

- Auto-resolved from Pizza export checks: all 1 alert-scoped export check(s) are healthy_closed with no blockers.
  Source: `check-exports`; kind: `export_check`; captured: `2026-06-22T21:36:25.612Z`.

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
