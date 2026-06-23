<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# chghealthcare_395 client-sent-export-failure

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `open`
Tags: `triage:needs_review`
Incidents: [Q2LW94S8WREK14](https://growthloop.pagerduty.com/incidents/Q2LW94S8WREK14)
Alerts: 1

## Current Summary

chghealthcare (Omni-Division) - Audience 27542: Audience Export failure for 27542 sent to client.

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `chghealthcare_395`
- Audiences: `27542`
- Destinations: none
- State tuples: none
- Commands seen: `glcli --env prod bifrost pizza --audience-id 27542 --org-id 395`

Representative alerts:
- Q2LW94S8WREK14/Q0M14QSI3PBM3T: 2026-06-15T16:42:04-07:00; chghealthcare_395; audience 27542. chghealthcare (Omni-Division) - Audience 27542: Audience Export failure for 27542 sent to client.

## Export Checks

- Checks: 1.
- States: `blocked`=1
- Blockers seen: `export_error`, `failed_export_count`

Check evidence:
- chk_q2lw94s8wrek14_q0m14qsi3pbm3t (Q2LW94S8WREK14/Q0M14QSI3PBM3T): state=`blocked`.
  Scope: env=prod; org=395; audience=27542.
  Command: `glcli --env prod bifrost pizza --audience-id 27542 --org-id 395`
  Blockers: `failed_export_count`, `export_error`
  Run 27542-pulse_point_16817-scheduled__2026-06-21T23:00:00+00:00: health=`blocked`; blockers=failed_export_count, export_error; created=2026-06-21T23:26:54.906361+00:00; snapshotting=snapshotting_finished; export=export_error; failed=571998.

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
