<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# chghealthcare_395 client-sent-export-failure

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `resolved`
Tags: `triage:needs_review`, `resolved:export-healthy`
Incidents: [Q13Q0C2ETC8SKY](https://growthloop.pagerduty.com/incidents/Q13Q0C2ETC8SKY)
Alerts: 1

## Current Summary

Auto-resolved from Pizza export checks: all 1 alert-scoped export check(s) are healthy_closed with no blockers.

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `chghealthcare_395`
- Audiences: `27244`
- Destinations: none
- State tuples: none
- Commands seen: `glcli --env prod bifrost pizza --audience-id 27244 --org-id 395`

Representative alerts:
- Q13Q0C2ETC8SKY/Q2WS8A6CYL2JAI: 2026-06-17T16:39:55-07:00; chghealthcare_395; audience 27244. chghealthcare (CompHealth) - Audience 27244: Audience Export failure for 27244 sent to client.

## Export Checks

- Checks: 1.
- States: `healthy_closed`=1

Check evidence:
- chk_q13q0c2etc8sky_q2ws8a6cyl2jai (Q13Q0C2ETC8SKY/Q2WS8A6CYL2JAI): state=`healthy_closed`.
  Scope: env=prod; org=395; audience=27244.
  Command: `glcli --env prod bifrost pizza --audience-id 27244 --org-id 395`
  Run 27244-snowflake_16866-scheduled__2026-06-21T23:00:00+00:00: health=`healthy`; created=2026-06-21T23:53:23.749098+00:00; snapshotting=snapshotting_finished; export=export_finished; failed=0.

## Recent Evidence

- Auto-resolved from Pizza export checks: all 1 alert-scoped export check(s) are healthy_closed with no blockers.
  Source: `check-exports`; kind: `export_check`; captured: `2026-06-22T21:35:18.690Z`.

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
