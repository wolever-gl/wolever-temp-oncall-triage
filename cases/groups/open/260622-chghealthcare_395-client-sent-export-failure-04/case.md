<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# chghealthcare_395 client-sent-export-failure

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `open`
Tags: `triage:needs_review`
Incidents: [Q17FNLVCCRINO4](https://growthloop.pagerduty.com/incidents/Q17FNLVCCRINO4)
Alerts: 1

## Current Summary

chghealthcare (Omni-Division) - Audience 27539: Audience Export failure for 27539 sent to client.

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `chghealthcare_395`
- Audiences: `27539`
- Destinations: none
- State tuples: none
- Commands seen: `glcli --env prod bifrost pizza --audience-id 27539 --org-id 395`

Representative alerts:
- Q17FNLVCCRINO4/Q0HPFTKXRLD527: 2026-06-22T16:45:16-07:00; chghealthcare_395; audience 27539. chghealthcare (Omni-Division) - Audience 27539: Audience Export failure for 27539 sent to client.

## Export Checks

- Checks: 1.
- States: `blocked`=1
- Blockers seen: `export_error`, `failed_export_count`

Check evidence:
- chk_q17fnlvccrino4_q0hpftkxrld527 (Q17FNLVCCRINO4/Q0HPFTKXRLD527): state=`blocked`.
  Scope: env=prod; org=395; audience=27539.
  Command: `glcli --env prod bifrost pizza --audience-id 27539 --org-id 395`
  Blockers: `failed_export_count`, `export_error`
  Run 27539-pulse_point_16816-scheduled__2026-06-22T23:00:00+00:00: health=`blocked`; blockers=failed_export_count, export_error; created=2026-06-22T23:45:51.830247+00:00; snapshotting=snapshotting_finished; export=export_error; failed=809672.

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
