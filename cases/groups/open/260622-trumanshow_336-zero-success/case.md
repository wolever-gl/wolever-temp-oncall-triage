<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# trumanshow_336 zero-success

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `open`
Tags: `triage:needs_review`
Incidents: [Q2O4YGBMUXZEFB](https://growthloop.pagerduty.com/incidents/Q2O4YGBMUXZEFB)
Alerts: 1

## Current Summary

trumanshow (H-E-B) - Audience 34403: 0 successfull_exports from pizza tracker found 10 minutes after new export

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `trumanshow_336`
- Audiences: `34403`
- Destinations: none
- State tuples: none
- Commands seen: `glcli --env prod bifrost pizza --audience-id 34403 --org-id 336`

Representative alerts:
- Q2O4YGBMUXZEFB/Q14TO1UMN0JD4Y: 2026-06-22T12:08:00-07:00; trumanshow_336; audience 34403. trumanshow (H-E-B) - Audience 34403: 0 successfull_exports from pizza tracker found 10 minutes after new export

## Export Checks

- Checks: 1.
- States: `blocked`=1
- Blockers seen: `missing_export_after_alert`

Check evidence:
- chk_q2o4ygbmuxzefb_q14to1umn0jd4y (Q2O4YGBMUXZEFB/Q14TO1UMN0JD4Y): state=`blocked`.
  Scope: env=prod; org=336; audience=34403.
  Command: `glcli --env prod bifrost pizza --audience-id 34403 --org-id 336`
  Blockers: `missing_export_after_alert`

## Recent Evidence

- New Truman Show zero-success incident for audience 34403 has one Pizza row for the alert scope: export_finished with 79 total rows, 0 adds, 0 failures, and 79 rejects.
  Source: `Pizza preflight refresh`; kind: `triage`; captured: `2026-06-22T20:12:39.432Z`.
  Findings:
  - Latest row: 2026-06-22 18:58:30 UTC, export_run_id 34403-marketing_cloud_22828-webapp__2026-06-22T18:57:54+00:00, snapshotting_finished/export_finished, rejects=79.

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
