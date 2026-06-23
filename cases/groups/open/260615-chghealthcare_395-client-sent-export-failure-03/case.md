<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# chghealthcare_395 client-sent-export-failure

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `open`
Tags: `triage:needs_review`
Incidents: [Q113OWJLGU5VXS](https://growthloop.pagerduty.com/incidents/Q113OWJLGU5VXS)
Alerts: 1

## Current Summary

chghealthcare (CompHealth) - Audience 19070: Audience Export failure for 19070 sent to client.

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `chghealthcare_395`
- Audiences: `19070`
- Destinations: none
- State tuples: none
- Commands seen: `glcli --env prod bifrost pizza --audience-id 19070 --org-id 395`

Representative alerts:
- Q113OWJLGU5VXS/Q3D1NE5RH69J7I: 2026-06-15T16:27:20-07:00; chghealthcare_395; audience 19070. chghealthcare (CompHealth) - Audience 19070: Audience Export failure for 19070 sent to client.

## Export Checks

- Checks: 1.
- States: `blocked`=1
- Blockers seen: `export_error`, `failed_export_count`

Check evidence:
- chk_q113owjlgu5vxs_q3d1ne5rh69j7i (Q113OWJLGU5VXS/Q3D1NE5RH69J7I): state=`blocked`.
  Scope: env=prod; org=395; audience=19070.
  Command: `glcli --env prod bifrost pizza --audience-id 19070 --org-id 395`
  Blockers: `failed_export_count`, `export_error`
  Run 19070-pulse_point_12048-scheduled__2026-06-21T23:00:00+00:00: health=`blocked`; blockers=failed_export_count, export_error; created=2026-06-22T00:13:35.442857+00:00; snapshotting=snapshotting_finished; export=export_error; failed=19.

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
