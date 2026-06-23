<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# chghealthcare_395 client-sent-export-failure

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `open`
Tags: `triage:needs_review`
Incidents: [Q3DL1BM2K2NN9L](https://growthloop.pagerduty.com/incidents/Q3DL1BM2K2NN9L)
Alerts: 1

## Current Summary

chghealthcare (CompHealth) - Audience 28130: Audience Export failure for 28130 sent to client.

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `chghealthcare_395`
- Audiences: `28130`
- Destinations: none
- State tuples: none
- Commands seen: `glcli --env prod bifrost pizza --audience-id 28130 --org-id 395`

Representative alerts:
- Q3DL1BM2K2NN9L/Q1EQ5Q5RD1DMDX: 2026-06-15T16:43:14-07:00; chghealthcare_395; audience 28130. chghealthcare (CompHealth) - Audience 28130: Audience Export failure for 28130 sent to client.

## Export Checks

- Checks: 1.
- States: `blocked`=1
- Blockers seen: `export_error`, `failed_export_count`

Check evidence:
- chk_q3dl1bm2k2nn9l_q1eq5q5rd1dmdx (Q3DL1BM2K2NN9L/Q1EQ5Q5RD1DMDX): state=`blocked`.
  Scope: env=prod; org=395; audience=28130.
  Command: `glcli --env prod bifrost pizza --audience-id 28130 --org-id 395`
  Blockers: `failed_export_count`, `export_error`
  Run 28130-pulse_point_17214-scheduled__2026-06-21T23:00:00+00:00: health=`blocked`; blockers=failed_export_count, export_error; created=2026-06-21T23:27:24.968256+00:00; snapshotting=snapshotting_finished; export=export_error; failed=10.

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
