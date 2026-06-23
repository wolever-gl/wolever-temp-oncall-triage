<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# chghealthcare_395 client-sent-export-failure

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `resolved`
Tags: `triage:needs_review`, `resolved:export-healthy`
Incidents: [Q3H6E8MZVP8J04](https://growthloop.pagerduty.com/incidents/Q3H6E8MZVP8J04)
Alerts: 1

## Current Summary

Auto-resolved from Pizza export checks: all 1 alert-scoped export check(s) are healthy_closed with no blockers.

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `chghealthcare_395`
- Audiences: `26083`
- Destinations: none
- State tuples: none
- Commands seen: `glcli --env prod bifrost pizza --audience-id 26083 --org-id 395`

Representative alerts:
- Q3H6E8MZVP8J04/Q37DNUL345O3VG: 2026-06-16T17:14:45-07:00; chghealthcare_395; audience 26083. chghealthcare (Weatherby Healthcare) - Audience 26083: Audience Export failure for 26083 sent to client.

## Export Checks

- Checks: 1.
- States: `healthy_closed`=1

Check evidence:
- chk_q3h6e8mzvp8j04_q37dnul345o3vg (Q3H6E8MZVP8J04/Q37DNUL345O3VG): state=`healthy_closed`.
  Scope: env=prod; org=395; audience=26083.
  Command: `glcli --env prod bifrost pizza --audience-id 26083 --org-id 395`
  Run 26083-pulse_point_19618-scheduled__2026-06-20T23:00:00+00:00: health=`healthy`; created=2026-06-20T23:35:32.154889+00:00; snapshotting=snapshotting_finished_no_deltas; export=no_batches; failed=0.

## Recent Evidence

- Auto-resolved from Pizza export checks: all 1 alert-scoped export check(s) are healthy_closed with no blockers.
  Source: `check-exports`; kind: `export_check`; captured: `2026-06-22T21:28:00.275Z`.

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
