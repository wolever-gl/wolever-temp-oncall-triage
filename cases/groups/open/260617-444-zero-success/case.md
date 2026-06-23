<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# 444 zero-success

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `open`
Tags: `triage:needs_review`
Incidents: [Q0YG3P9JZFEP22](https://growthloop.pagerduty.com/incidents/Q0YG3P9JZFEP22)
Alerts: 1

## Current Summary

GrowthLoop 4 GrowthLoop (GrowthLoop) - Audience 38541: 0 successfull_exports from pizza tracker found 10 minutes after new export

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `444`
- Audiences: `38541`
- Destinations: none
- State tuples: none
- Commands seen: `glcli --env prod bifrost pizza --audience-id 38541 --org-id 444`

Representative alerts:
- Q0YG3P9JZFEP22/Q2E1TQLPFIGSHM: 2026-06-17T14:27:22-07:00; 444; audience 38541. GrowthLoop 4 GrowthLoop (GrowthLoop) - Audience 38541: 0 successfull_exports from pizza tracker found 10 minutes after new export

## Export Checks

- Checks: 1.
- States: `blocked`=1
- Blockers seen: `export_error`, `failed_export_count`

Check evidence:
- chk_q0yg3p9jzfep22_q2e1tqlpfigshm (Q0YG3P9JZFEP22/Q2E1TQLPFIGSHM): state=`blocked`.
  Scope: env=prod; org=444; audience=38541.
  Command: `glcli --env prod bifrost pizza --audience-id 38541 --org-id 444`
  Blockers: `failed_export_count`, `export_error`
  Run 38541-linkedin_ads_22762-webapp__2026-06-17T21:28:29+00:00: health=`blocked`; blockers=failed_export_count, export_error; created=2026-06-17T21:29:14.269609+00:00; snapshotting=snapshotting_finished; export=export_error; failed=7790.

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
