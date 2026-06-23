<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# 444 client-sent-export-failure

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `open`
Tags: `triage:needs_review`
Incidents: [Q3A6N68PLPADPJ](https://growthloop.pagerduty.com/incidents/Q3A6N68PLPADPJ)
Alerts: 1

## Current Summary

GrowthLoop 4 GrowthLoop (GrowthLoop) - Audience 38541: Audience Export failure for 38541 sent to client.

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `444`
- Audiences: `38541`
- Destinations: none
- State tuples: none
- Commands seen: `glcli --env prod bifrost pizza --audience-id 38541 --org-id 444`

Representative alerts:
- Q3A6N68PLPADPJ/Q03WQ6N7QAFBQA: 2026-06-17T14:18:06-07:00; 444; audience 38541. GrowthLoop 4 GrowthLoop (GrowthLoop) - Audience 38541: Audience Export failure for 38541 sent to client.

## Export Checks

- Checks: 1.
- States: `blocked`=1
- Blockers seen: `export_error`, `failed_export_count`

Check evidence:
- chk_q3a6n68plpadpj_q03wq6n7qafbqa (Q3A6N68PLPADPJ/Q03WQ6N7QAFBQA): state=`blocked`.
  Scope: env=prod; org=444; audience=38541.
  Command: `glcli --env prod bifrost pizza --audience-id 38541 --org-id 444`
  Blockers: `failed_export_count`, `export_error`
  Run 38541-linkedin_ads_22762-webapp__2026-06-17T21:28:29+00:00: health=`blocked`; blockers=failed_export_count, export_error; created=2026-06-17T21:29:14.269609+00:00; snapshotting=snapshotting_finished; export=export_error; failed=7790.

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
