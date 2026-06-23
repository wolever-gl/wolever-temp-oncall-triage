<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# albertsons_6 client-sent-export-failure

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `monitoring`
Tags: `triage:needs_review`, `monitoring:export-processing`
Incidents: [Q1ZBNTRAY7ASQI](https://growthloop.pagerduty.com/incidents/Q1ZBNTRAY7ASQI)
Alerts: 1

## Current Summary

Auto-monitored from Pizza export checks: 1 alert-scoped export check(s) are still processing and 0 are already healthy.

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `albertsons_6`
- Audiences: `12696`
- Destinations: none
- State tuples: none
- Commands seen: `glcli --env albertsons bifrost pizza --audience-id 12696 --org-id 6`

Representative alerts:
- Q1ZBNTRAY7ASQI/Q2WTI8JI3FULX4: 2026-06-15T02:34:43-07:00; albertsons_6; audience 12696. albertsons (Albertsons Media) - Audience 12696: Audience Export failure for 12696 sent to client.

## Export Checks

- Checks: 1.
- States: `monitoring`=1

Check evidence:
- chk_q1zbntray7asqi_q2wti8ji3fulx4 (Q1ZBNTRAY7ASQI/Q2WTI8JI3FULX4): state=`monitoring`, next_check_at=`2026-06-22T21:34:02.570Z`.
  Scope: env=albertsons; org=6; audience=12696.
  Command: `glcli --env albertsons bifrost pizza --audience-id 12696 --org-id 6`
  Run 12696-live_ramp_activation_4459-scheduled__2026-06-17T00:00:00+00:00: health=`monitoring`; created=2026-06-17T02:37:13.288287+00:00; snapshotting=snapshotting_finished; export=export_processing; failed=0.

## Recent Evidence

- Auto-monitored from Pizza export checks: 1 alert-scoped export check(s) are still processing and 0 are already healthy.
  Source: `check-exports`; kind: `export_check`; captured: `2026-06-22T21:19:15.484Z`.

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
