<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# chghealthcare_395 client-sent-export-failure

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `resolved`
Tags: `triage:needs_review`, `resolved:export-healthy`
Incidents: [Q3PX83ZZLEW43G](https://growthloop.pagerduty.com/incidents/Q3PX83ZZLEW43G)
Alerts: 1

## Current Summary

Auto-resolved from Pizza export checks: all 1 alert-scoped export check(s) are healthy_closed with no blockers.

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `chghealthcare_395`
- Audiences: `26105`
- Destinations: none
- State tuples: none
- Commands seen: `glcli --env prod bifrost pizza --audience-id 26105 --org-id 395`

Representative alerts:
- Q3PX83ZZLEW43G/Q3I1BKCU4EAFZI: 2026-06-20T16:36:45-07:00; chghealthcare_395; audience 26105. chghealthcare (Weatherby Healthcare) - Audience 26105: Audience Export failure for 26105 sent to client.

## Export Checks

- Checks: 1.
- States: `healthy_closed`=1

Check evidence:
- chk_q3px83zzlew43g_q3i1bkcu4eafzi (Q3PX83ZZLEW43G/Q3I1BKCU4EAFZI): state=`healthy_closed`.
  Scope: env=prod; org=395; audience=26105.
  Command: `glcli --env prod bifrost pizza --audience-id 26105 --org-id 395`
  Run 26105-snowflake_16082-scheduled__2026-06-21T23:00:00+00:00: health=`healthy`; created=2026-06-21T23:20:40.580891+00:00; snapshotting=snapshotting_finished; export=export_finished; failed=0.

## Recent Evidence

- Auto-resolved from Pizza export checks: all 1 alert-scoped export check(s) are healthy_closed with no blockers.
  Source: `check-exports`; kind: `export_check`; captured: `2026-06-22T21:59:49.802Z`.

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
