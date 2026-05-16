<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# 451 campaign-manager-360 export-error split

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `resolved`
Tags: `triage:needs_review`, `evidence:retry-succeeded`
Incidents: [Q3XQABQFPPVNT5](https://growthloop.pagerduty.com/incidents/Q3XQABQFPPVNT5)
Alerts: 1

## Current Summary

Resolved: ASU SignalRoute 984 Campaign Manager 360 export has a later export_finished run.

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `451`
- Audiences: `984`
- Destinations: `campaign_manager_360_object`
- State tuples: `snapshotting_finished/export_error`
- Commands seen: `glcli --env prod bifrost pizza --audience-id 984 --org-id 451`

Representative alerts:
- Q3XQABQFPPVNT5/Q003VALSPIPFI1: 2026-05-14T08:15:19-07:00; 451; audience 984; campaign_manager_360_object; snapshotting_finished/export_error. ASU Enterprise Partners (General - ASU Data): Exports for signal 984 failed with states: <(snapshotting_finished,export_error)>
  Runs: `984-campaign_manager_360_object_984-scheduled__2026-05-13T00:00:00+00:00`

## Export Checks

- Checks: 1.
- States: `blocked`=1
- Blockers seen: `export_error`, `failed_export_count`

Check evidence:
- chk_q3xqabqfppvnt5_q003valspipfi1 (Q3XQABQFPPVNT5/Q003VALSPIPFI1): state=`blocked`.
  Scope: env=prod; org=451; audience=984; endpoint=app_campaign_manager_360_2240; destination=campaign_manager_360_object.
  Checked runs: `984-campaign_manager_360_object_984-scheduled__2026-05-13T00:00:00+00:00`
  Command: `glcli --env prod bifrost pizza --audience-id 984 --org-id 451`
  Blockers: `failed_export_count`, `export_error`
  Run 984-campaign_manager_360_object_984-scheduled__2026-05-13T00:00:00+00:00: health=`blocked`; blockers=failed_export_count, export_error; created=2026-05-14T00:02:35.129093+00:00; snapshotting=snapshotting_finished; export=export_error; failed=1197.

## Recent Evidence

- SignalRoute 984 recovered: latest Pizza row is 2026-05-16 00:02:18 UTC, run 984-campaign_manager_360_object_984-scheduled__2026-05-15T00:00:00+00:00, snapshotting_finished/export_finished with zero failures.
  Source: `glcli bifrost pizza`; kind: `pizza`; captured: `2026-05-16T22:09:12.565Z`.
  Command: `glcli --env prod bifrost pizza --audience-id 984 --org-id 451 --format json`

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
