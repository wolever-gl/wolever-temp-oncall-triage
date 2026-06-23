<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# chghealthcare_395 client-sent-export-failure

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `resolved`
Tags: `triage:needs_review`, `resolved:export-healthy`
Incidents: [Q04L3ZGFN8PH8R](https://growthloop.pagerduty.com/incidents/Q04L3ZGFN8PH8R)
Alerts: 1

## Current Summary

Auto-resolved from Pizza export checks: all 1 alert-scoped export check(s) are healthy_closed with no blockers.

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `chghealthcare_395`
- Audiences: `31808`
- Destinations: none
- State tuples: none
- Commands seen: `glcli --env prod bifrost pizza --audience-id 31808 --org-id 395`

Representative alerts:
- Q04L3ZGFN8PH8R/Q0XE8N1UMDDEBM: 2026-06-15T16:59:07-07:00; chghealthcare_395; audience 31808. chghealthcare (Omni-Division) - Audience 31808: Audience Export failure for 31808 sent to client.

## Export Checks

- Checks: 1.
- States: `healthy_closed`=1

Check evidence:
- chk_q04l3zgfn8ph8r_q0xe8n1umddebm (Q04L3ZGFN8PH8R/Q0XE8N1UMDDEBM): state=`healthy_closed`.
  Scope: env=prod; org=395; audience=31808.
  Command: `glcli --env prod bifrost pizza --audience-id 31808 --org-id 395`
  Run 31808-pulse_point_19414-scheduled__2026-06-20T23:00:00+00:00: health=`healthy`; created=2026-06-20T23:17:48.709491+00:00; snapshotting=snapshotting_finished_no_deltas; export=no_batches; failed=0.

## Recent Evidence

- Auto-resolved from Pizza export checks: all 1 alert-scoped export check(s) are healthy_closed with no blockers.
  Source: `check-exports`; kind: `export_check`; captured: `2026-06-22T21:20:18.778Z`.

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
