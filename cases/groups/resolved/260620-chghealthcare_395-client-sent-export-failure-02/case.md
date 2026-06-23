<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# chghealthcare_395 client-sent-export-failure

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `resolved`
Tags: `triage:needs_review`, `resolved:export-healthy`
Incidents: [Q19KXF9UXR3J3R](https://growthloop.pagerduty.com/incidents/Q19KXF9UXR3J3R)
Alerts: 1

## Current Summary

Auto-resolved from Pizza export checks: all 1 alert-scoped export check(s) are healthy_closed with no blockers.

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `chghealthcare_395`
- Audiences: `31575`
- Destinations: none
- State tuples: none
- Commands seen: `glcli --env prod bifrost pizza --audience-id 31575 --org-id 395`

Representative alerts:
- Q19KXF9UXR3J3R/Q3S5I4SXQIP9U2: 2026-06-20T16:51:21-07:00; chghealthcare_395; audience 31575. chghealthcare (Weatherby Healthcare) - Audience 31575: Audience Export failure for 31575 sent to client.

## Export Checks

- Checks: 1.
- States: `healthy_closed`=1

Check evidence:
- chk_q19kxf9uxr3j3r_q3s5i4sxqip9u2 (Q19KXF9UXR3J3R/Q3S5I4SXQIP9U2): state=`healthy_closed`.
  Scope: env=prod; org=395; audience=31575.
  Command: `glcli --env prod bifrost pizza --audience-id 31575 --org-id 395`
  Run 31575-snowflake_19524-scheduled__2026-06-21T23:00:00+00:00: health=`healthy`; created=2026-06-22T00:04:34.192542+00:00; snapshotting=snapshotting_finished; export=export_finished; failed=0.

## Recent Evidence

- Auto-resolved from Pizza export checks: all 1 alert-scoped export check(s) are healthy_closed with no blockers.
  Source: `check-exports`; kind: `export_check`; captured: `2026-06-22T21:57:10.618Z`.

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
