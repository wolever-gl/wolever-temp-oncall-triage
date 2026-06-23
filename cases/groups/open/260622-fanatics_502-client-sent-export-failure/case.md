<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# fanatics_502 client-sent-export-failure

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `open`
Tags: `triage:needs_review`
Incidents: [Q2TTDND3R51RWH](https://growthloop.pagerduty.com/incidents/Q2TTDND3R51RWH)
Alerts: 1

## Current Summary

fanatics (default) - Audience 36234: Audience Export failure for 36234 sent to client.

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `fanatics_502`
- Audiences: `36234`
- Destinations: none
- State tuples: none
- Commands seen: `glcli --env prod bifrost pizza --audience-id 36234 --org-id 502`

Representative alerts:
- Q2TTDND3R51RWH/Q0IBJJ98JSJM2X: 2026-06-22T19:10:57-07:00; fanatics_502; audience 36234. fanatics (default) - Audience 36234: Audience Export failure for 36234 sent to client.

## Export Checks

- Checks: 1.
- States: `blocked`=1
- Blockers seen: `snapshotting_error_requires_review`

Check evidence:
- chk_q2ttdnd3r51rwh_q0ibjj98jsjm2x (Q2TTDND3R51RWH/Q0IBJJ98JSJM2X): state=`blocked`.
  Scope: env=prod; org=502; audience=36234.
  Command: `glcli --env prod bifrost pizza --audience-id 36234 --org-id 502`
  Blockers: `snapshotting_error_requires_review`
  Run 36234-magnite_id_graph_22111-scheduled__2026-06-23T00:00:00+00:00: health=`blocked`; blockers=snapshotting_error_requires_review; created=2026-06-23T04:33:15.701185+00:00; snapshotting=snapshotting_error; export=export_finished; failed=0.

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
