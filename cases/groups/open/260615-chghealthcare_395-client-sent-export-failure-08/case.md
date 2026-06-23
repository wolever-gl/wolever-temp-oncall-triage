<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# chghealthcare_395 client-sent-export-failure

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `open`
Tags: `triage:needs_review`
Incidents: [Q2T1IQJR5VIAD7](https://growthloop.pagerduty.com/incidents/Q2T1IQJR5VIAD7)
Alerts: 1

## Current Summary

chghealthcare (Weatherby Healthcare) - Audience 18153: Audience Export failure for 18153 sent to client.

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `chghealthcare_395`
- Audiences: `18153`
- Destinations: none
- State tuples: none
- Commands seen: `glcli --env prod bifrost pizza --audience-id 18153 --org-id 395`

Representative alerts:
- Q2T1IQJR5VIAD7/Q22GXDQ7RULI3F: 2026-06-15T16:26:53-07:00; chghealthcare_395; audience 18153. chghealthcare (Weatherby Healthcare) - Audience 18153: Audience Export failure for 18153 sent to client.

## Export Checks

- Checks: 1.
- States: `blocked`=1
- Blockers seen: `export_error`, `failed_export_count`

Check evidence:
- chk_q2t1iqjr5viad7_q22gxdq7ruli3f (Q2T1IQJR5VIAD7/Q22GXDQ7RULI3F): state=`blocked`.
  Scope: env=prod; org=395; audience=18153.
  Command: `glcli --env prod bifrost pizza --audience-id 18153 --org-id 395`
  Blockers: `failed_export_count`, `export_error`
  Run 18153-pulse_point_11586-scheduled__2026-06-21T23:00:00+00:00: health=`blocked`; blockers=failed_export_count, export_error; created=2026-06-21T23:20:08.632000+00:00; snapshotting=snapshotting_finished; export=export_error; failed=20.

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
