<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# chghealthcare_395 client-sent-export-failure

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `open`
Tags: `triage:needs_review`
Incidents: [Q15KVU3537ODKM](https://growthloop.pagerduty.com/incidents/Q15KVU3537ODKM)
Alerts: 1

## Current Summary

chghealthcare (Global Medical Staffing) - Audience 18684: Audience Export failure for 18684 sent to client.

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `chghealthcare_395`
- Audiences: `18684`
- Destinations: none
- State tuples: none
- Commands seen: `glcli --env prod bifrost pizza --audience-id 18684 --org-id 395`

Representative alerts:
- Q15KVU3537ODKM/Q1FNLRWPNT5B9V: 2026-06-15T16:27:33-07:00; chghealthcare_395; audience 18684. chghealthcare (Global Medical Staffing) - Audience 18684: Audience Export failure for 18684 sent to client.

## Export Checks

- Checks: 1.
- States: `blocked`=1
- Blockers seen: `export_error`, `failed_export_count`

Check evidence:
- chk_q15kvu3537odkm_q1fnlrwpnt5b9v (Q15KVU3537ODKM/Q1FNLRWPNT5B9V): state=`blocked`.
  Scope: env=prod; org=395; audience=18684.
  Command: `glcli --env prod bifrost pizza --audience-id 18684 --org-id 395`
  Blockers: `failed_export_count`, `export_error`
  Run 18684-pulse_point_11878-scheduled__2026-06-21T23:00:00+00:00: health=`blocked`; blockers=failed_export_count, export_error; created=2026-06-21T23:20:02.363198+00:00; snapshotting=snapshotting_finished; export=export_error; failed=3.

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
