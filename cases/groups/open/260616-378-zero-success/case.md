<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# 378 zero-success

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `open`
Tags: `triage:needs_review`
Incidents: [Q2H4VBZL5V5S9O](https://growthloop.pagerduty.com/incidents/Q2H4VBZL5V5S9O)
Alerts: 1

## Current Summary

Cincinnati Reds (default) - Audience 38500: 0 successfull_exports from pizza tracker found 10 minutes after new export

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `378`
- Audiences: `38500`
- Destinations: none
- State tuples: none
- Commands seen: `glcli --env prod bifrost pizza --audience-id 38500 --org-id 378`

Representative alerts:
- Q2H4VBZL5V5S9O/Q29HUUHU8QVYYA: 2026-06-16T12:56:35-07:00; 378; audience 38500. Cincinnati Reds (default) - Audience 38500: 0 successfull_exports from pizza tracker found 10 minutes after new export

## Export Checks

- Checks: 1.
- States: `blocked`=1
- Blockers seen: `export_error`, `failed_export_count`

Check evidence:
- chk_q2h4vbzl5v5s9o_q29huuhu8qvyya (Q2H4VBZL5V5S9O/Q29HUUHU8QVYYA): state=`blocked`.
  Scope: env=prod; org=378; audience=38500.
  Command: `glcli --env prod bifrost pizza --audience-id 38500 --org-id 378`
  Blockers: `failed_export_count`, `export_error`
  Run 38500-dynamics_22736-webapp__2026-06-16T20:00:54+00:00: health=`blocked`; blockers=failed_export_count, export_error; created=2026-06-16T20:01:39.259461+00:00; snapshotting=snapshotting_finished; export=export_error; failed=7.

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
