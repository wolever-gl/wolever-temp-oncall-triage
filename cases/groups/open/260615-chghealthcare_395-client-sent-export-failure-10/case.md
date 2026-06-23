<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# chghealthcare_395 client-sent-export-failure

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `open`
Tags: `triage:needs_review`
Incidents: [Q37NI86Y0Q3WN2](https://growthloop.pagerduty.com/incidents/Q37NI86Y0Q3WN2)
Alerts: 1

## Current Summary

chghealthcare (Omni-Division) - Audience 31800: Audience Export failure for 31800 sent to client.

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `chghealthcare_395`
- Audiences: `31800`
- Destinations: none
- State tuples: none
- Commands seen: `glcli --env prod bifrost pizza --audience-id 31800 --org-id 395`

Representative alerts:
- Q37NI86Y0Q3WN2/Q19I6L86AKW09A: 2026-06-15T16:58:07-07:00; chghealthcare_395; audience 31800. chghealthcare (Omni-Division) - Audience 31800: Audience Export failure for 31800 sent to client.

## Export Checks

- Checks: 1.
- States: `blocked`=1
- Blockers seen: `export_error`, `failed_export_count`

Check evidence:
- chk_q37ni86y0q3wn2_q19i6l86akw09a (Q37NI86Y0Q3WN2/Q19I6L86AKW09A): state=`blocked`.
  Scope: env=prod; org=395; audience=31800.
  Command: `glcli --env prod bifrost pizza --audience-id 31800 --org-id 395`
  Blockers: `failed_export_count`, `export_error`
  Run 31800-pulse_point_19410-scheduled__2026-06-21T23:00:00+00:00: health=`blocked`; blockers=failed_export_count, export_error; created=2026-06-21T23:45:23.529499+00:00; snapshotting=snapshotting_finished; export=export_error; failed=6.

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
