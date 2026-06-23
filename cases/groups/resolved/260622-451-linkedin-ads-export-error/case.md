<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# 451 linkedin-ads export-error

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `resolved`
Tags: `triage:needs_review`, `resolved:retry_succeeded`
Incidents: [Q06WSHYZJD9EKK](https://growthloop.pagerduty.com/incidents/Q06WSHYZJD9EKK)
Alerts: 1

## Current Summary

Resolved as retry/false alarm: same-scope LinkedIn Ads replacement run finished healthy with matching row count after the failed run.

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `451`
- Audiences: `24855`
- Destinations: `linkedin_ads`
- State tuples: `snapshotting_finished/export_error`
- Commands seen: `glcli --env prod bifrost pizza --audience-id 24855 --org-id 451`

Representative alerts:
- Q06WSHYZJD9EKK/Q0RVBTBYRZOWQF: 2026-06-22T07:58:07-07:00; 451; audience 24855; linkedin_ads; snapshotting_finished/export_error. ASU Enterprise Partners (General - ASU Data): Exports for audience 24855 failed with states: <(snapshotting_finished,export_error)>
  Runs: `24855-linkedin_ads_22541-scheduled__2026-06-22T00:00:00+00:00`, `24855-linkedin_ads_22542-scheduled__2026-06-22T00:00:00+00:00`

## Export Checks

- Checks: 1.
- States: `blocked`=1
- Blockers seen: `export_error`, `failed_export_count`

Check evidence:
- chk_q06wshyzjd9ekk_q0rvbtbyrzowqf (Q06WSHYZJD9EKK/Q0RVBTBYRZOWQF): state=`blocked`.
  Scope: env=prod; org=451; audience=24855; endpoint=app_linkedin_ads_1600; destination=linkedin_ads.
  Checked runs: `24855-linkedin_ads_22541-scheduled__2026-06-22T00:00:00+00:00`, `24855-linkedin_ads_22542-scheduled__2026-06-22T00:00:00+00:00`
  Command: `glcli --env prod bifrost pizza --audience-id 24855 --org-id 451`
  Blockers: `failed_export_count`, `export_error`
  Run 24855-linkedin_ads_22541-scheduled__2026-06-22T00:00:00+00:00: health=`blocked`; blockers=failed_export_count, export_error; created=2026-06-22T00:57:14.898662+00:00; snapshotting=snapshotting_finished; export=export_error; failed=851.
  Run 24855-linkedin_ads_22542-scheduled__2026-06-22T00:00:00+00:00: health=`healthy`; created=2026-06-22T01:07:19.505067+00:00; snapshotting=snapshotting_finished; export=export_finished; failed=0.

## Recent Evidence

- Same-scope LinkedIn Ads replacement run 24855-linkedin_ads_22542-scheduled__2026-06-22T00:00:00+00:00 finished healthy after failed run 24855-linkedin_ads_22541-scheduled__2026-06-22T00:00:00+00:00. Both runs had 851 total rows; replacement sent 851 successfully with failed=0.
  Source: `agent`; kind: `export_check`; captured: `2026-06-22T23:32:23.281Z`.
  Command: `bun run oncall-triage check-exports cases --filter group.id=260622-451-linkedin-ads-export-error`

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
