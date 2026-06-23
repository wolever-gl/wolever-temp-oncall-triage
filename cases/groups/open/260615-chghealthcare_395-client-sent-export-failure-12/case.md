<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# chghealthcare_395 client-sent-export-failure

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `open`
Tags: `triage:needs_review`
Incidents: [Q3EEB368JDFW2H](https://growthloop.pagerduty.com/incidents/Q3EEB368JDFW2H)
Alerts: 1

## Current Summary

chghealthcare (Omni-Division) - Audience 31799: Audience Export failure for 31799 sent to client.

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `chghealthcare_395`
- Audiences: `31799`
- Destinations: none
- State tuples: none
- Commands seen: `glcli --env prod bifrost pizza --audience-id 31799 --org-id 395`

Representative alerts:
- Q3EEB368JDFW2H/Q208H49HN164SB: 2026-06-15T16:57:57-07:00; chghealthcare_395; audience 31799. chghealthcare (Omni-Division) - Audience 31799: Audience Export failure for 31799 sent to client.

## Export Checks

- Checks: 1.
- States: `blocked`=1
- Blockers seen: `export_error`, `failed_export_count`

Check evidence:
- chk_q3eeb368jdfw2h_q208h49hn164sb (Q3EEB368JDFW2H/Q208H49HN164SB): state=`blocked`.
  Scope: env=prod; org=395; audience=31799.
  Command: `glcli --env prod bifrost pizza --audience-id 31799 --org-id 395`
  Blockers: `failed_export_count`, `export_error`
  Run 31799-pulse_point_19409-scheduled__2026-06-21T23:00:00+00:00: health=`blocked`; blockers=failed_export_count, export_error; created=2026-06-21T23:45:24.293054+00:00; snapshotting=snapshotting_finished; export=export_error; failed=4.

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
