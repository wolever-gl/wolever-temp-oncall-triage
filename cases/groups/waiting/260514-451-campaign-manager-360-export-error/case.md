<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# 451 campaign-manager-360 export-error

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `waiting`
Tags: `triage:needs_review`, `triage:export-error`, `waiting:client_cm360_matchid_config`
Incidents: [Q3XQABQFPPVNT5](https://growthloop.pagerduty.com/incidents/Q3XQABQFPPVNT5)
Alerts: 3

## Current Summary

Waiting on ASU/WPP/client configuration: SignalRoute 981 keeps failing CM360 uploads with NOT_FOUND for Floodlight activity/config MatchID lookups; retry alone is unlikely to help until the client confirms/fixes the MatchID/Floodlight identifier setup.

## Alert Scope

- Alert facts: 3 imported, 3 linked to this group.
- Orgs: `451`
- Audiences: `981`, `984`
- Destinations: `campaign_manager_360_object`
- State tuples: `snapshotting_finished/export_error`
- Commands seen: `glcli --env prod bifrost pizza --audience-id 981 --org-id 451`, `glcli --env prod bifrost pizza --audience-id 984 --org-id 451`

Representative alerts:
- Q3XQABQFPPVNT5/Q0XF5RYJ4EGXJZ: 2026-05-13T17:01:38-07:00; 451; audience 981. ASU Enterprise Partners (General - ASU Data) - SignalRoute 981: SignalRoute Export failure for 981 sent to client.
- Q3XQABQFPPVNT5/Q01J962O90JJ1O: 2026-05-14T08:15:17-07:00; 451; audience 981; campaign_manager_360_object; snapshotting_finished/export_error. ASU Enterprise Partners (General - ASU Data): Exports for signal 981 failed with states: <(snapshotting_finished,export_error)>
  Runs: `981-campaign_manager_360_object_981-scheduled__2026-05-13T00:00:00+00:00`
- Q3XQABQFPPVNT5/Q003VALSPIPFI1: 2026-05-14T08:15:19-07:00; 451; audience 984; campaign_manager_360_object; snapshotting_finished/export_error. ASU Enterprise Partners (General - ASU Data): Exports for signal 984 failed with states: <(snapshotting_finished,export_error)>
  Runs: `984-campaign_manager_360_object_984-scheduled__2026-05-13T00:00:00+00:00`

## Export Checks

- Checks: 3.
- States: `blocked`=3
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
- chk_q3xqabqfppvnt5_q0xf5ryj4egxjz (Q3XQABQFPPVNT5/Q0XF5RYJ4EGXJZ): state=`blocked`.
  Scope: env=prod; org=451; audience=981.
  Command: `glcli --env prod bifrost pizza --audience-id 981 --org-id 451`
  Blockers: `failed_export_count`, `export_error`
  Run 981-campaign_manager_360_object_981-scheduled__2026-05-15T00:00:00+00:00: health=`blocked`; blockers=failed_export_count, export_error; created=2026-05-16T00:01:26.085781+00:00; snapshotting=snapshotting_finished; export=export_error; failed=1299.

## Recent Evidence

- #eng-support has an existing ASU CM360 thread for this exact failure family. The thread identifies SignalRoute 981 endpoint app_campaign_manager_360_2130, profile_id 10219464, floodlight_activity_id 414092260, floodlightConfigurationId 9277048, and concludes the likely issue is a mismatch between the MatchID values GrowthLoop uploads and the identifiers ASU/CM360 Floodlight has seen. Support/Eng asked ASU to confirm the correct first-party identifier, hashing/normalization, and Floodlight setup; retrying without that client-side/config resolution is expected to keep failing.
  Source: `#eng-support`; kind: `slack`; captured: `2026-05-16T22:36:50.490Z`.
  Links: [ASU CM360 support thread](https://flywheeltechnologies.slack.com/archives/C02J2RJ6VSL/p1778536270359019).
- Latest-run Bifrost destination logs show both CM360 export segments failed in StandardCM360Service. unique_errors_classes=[NOT_FOUND]; failed_status_sample includes floodlightActivityId=414092260, floodlightConfigurationId=9277048, matchId values, endpoint app_campaign_manager_360_2130. Batch metrics then set segment 0 failed count to 1000 and segment 1 failed count to 299, matching all 1299 Pizza failures.
  Source: `flywheel-prod-328213 bifrost logs`; kind: `gcloud_logs`; captured: `2026-05-16T22:36:44.666Z`.
  Command: `gcloud logging read "\"981-campaign_manager_360_object_981-scheduled__2026-05-15T00:00:00+00:00\" AND jsonPayload.message=\"Error report for StandardCM360Service\"" --project=flywheel-prod-328213 --freshness=3d --limit=10 --format=json`
- Fresh Pizza recheck: SignalRoute 981 still has no recovery. Latest row remains 2026-05-16 00:01:26 UTC, run 981-campaign_manager_360_object_981-scheduled__2026-05-15T00:00:00+00:00, snapshotting_finished/export_error with all 1299 rows failed; daily runs since 2026-04-30 have export_error except one no-delta day.
  Source: `glcli bifrost pizza`; kind: `pizza`; captured: `2026-05-16T22:36:38.430Z`.
  Command: `PATH="/Users/wolever/.local/share/mise/installs/gcloud/562.0.0/bin:$PATH" glcli --env prod bifrost pizza --audience-id 981 --org-id 451 --format json`
- SignalRoute 981 still fails on latest Pizza: 2026-05-16 00:01:26 UTC, run 981-campaign_manager_360_object_981-scheduled__2026-05-15T00:00:00+00:00, snapshotting_finished/export_error with 1299 failures.
  Source: `glcli bifrost pizza`; kind: `pizza`; captured: `2026-05-16T22:09:13.977Z`.
  Command: `glcli --env prod bifrost pizza --audience-id 981 --org-id 451 --format json`

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
