<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# 451 campaign-manager-360 export-error

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `open`
Tags: `triage:needs_review`
Incidents: [Q3XQABQFPPVNT5](https://growthloop.pagerduty.com/incidents/Q3XQABQFPPVNT5)
Alerts: 2

## Current Summary

ASU Enterprise Partners (General - ASU Data): Exports for signal 984 failed with states: <(snapshotting_finished,export_error)>

## Alert Scope

- Alert facts: 2 imported, 2 linked to this group.
- Orgs: `451`
- Audiences: `981`, `984`
- Destinations: `campaign_manager_360_object`
- State tuples: `snapshotting_finished/export_error`
- Commands seen: `glcli --env prod bifrost pizza --audience-id 981 --org-id 451`, `glcli --env prod bifrost pizza --audience-id 984 --org-id 451`

Representative alerts:
- Q3XQABQFPPVNT5/Q01J962O90JJ1O: 2026-05-14T08:15:17-07:00; 451; audience 981; campaign_manager_360_object; snapshotting_finished/export_error. ASU Enterprise Partners (General - ASU Data): Exports for signal 981 failed with states: <(snapshotting_finished,export_error)>
  Runs: `981-campaign_manager_360_object_981-scheduled__2026-05-13T00:00:00+00:00`
- Q3XQABQFPPVNT5/Q003VALSPIPFI1: 2026-05-14T08:15:19-07:00; 451; audience 984; campaign_manager_360_object; snapshotting_finished/export_error. ASU Enterprise Partners (General - ASU Data): Exports for signal 984 failed with states: <(snapshotting_finished,export_error)>
  Runs: `984-campaign_manager_360_object_984-scheduled__2026-05-13T00:00:00+00:00`

## Export Checks

- Checks: 2.
- States: `blocked`=2
- Blockers seen: `export_error`, `failed_export_count`

Check evidence:
- chk_q3xqabqfppvnt5_q003valspipfi1 (Q3XQABQFPPVNT5/Q003VALSPIPFI1): state=`blocked`.
  Scope: env=prod; org=451; audience=984; endpoint=app_campaign_manager_360_2240; destination=campaign_manager_360_object.
  Checked runs: `984-campaign_manager_360_object_984-scheduled__2026-05-13T00:00:00+00:00`
  Command: `glcli --env prod bifrost pizza --audience-id 984 --org-id 451`
  Blockers: `failed_export_count`, `export_error`
  Run 984-campaign_manager_360_object_984-scheduled__2026-05-13T00:00:00+00:00: health=`blocked`; blockers=failed_export_count, export_error; created=2026-05-14T00:02:35.129093+00:00; snapshotting=snapshotting_finished; export=export_error; failed=1197.
- chk_q3xqabqfppvnt5_q01j962o90jj1o (Q3XQABQFPPVNT5/Q01J962O90JJ1O): state=`blocked`.
  Scope: env=prod; org=451; audience=981; endpoint=app_campaign_manager_360_2130; destination=campaign_manager_360_object.
  Checked runs: `981-campaign_manager_360_object_981-scheduled__2026-05-13T00:00:00+00:00`
  Command: `glcli --env prod bifrost pizza --audience-id 981 --org-id 451`
  Blockers: `failed_export_count`, `export_error`
  Run 981-campaign_manager_360_object_981-scheduled__2026-05-13T00:00:00+00:00: health=`blocked`; blockers=failed_export_count, export_error; created=2026-05-14T00:01:10.649180+00:00; snapshotting=snapshotting_finished; export=export_error; failed=1893.

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
