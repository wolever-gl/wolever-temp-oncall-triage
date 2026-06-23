<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# priceline_370 priceline-default-exports-for-signal-n-failed-wi

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `open`
Tags: `triage:needs_review`
Incidents: [Q1Y4FAMGUUZ21W](https://growthloop.pagerduty.com/incidents/Q1Y4FAMGUUZ21W)
Alerts: 1

## Current Summary

priceline (default): Exports for signal 1009 failed with states: <(snapshotting_finished,export_error), (snapshotting_finished,export_processing)>

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `priceline_370`
- Audiences: `1009`
- Destinations: `facebook_conversions_object`
- State tuples: none
- Commands seen: `glcli --env prod bifrost pizza --audience-id 1009 --org-id 370`

Representative alerts:
- Q1Y4FAMGUUZ21W/Q09IIKFTSQETHB: 2026-06-15T07:40:38-07:00; priceline_370; audience 1009; facebook_conversions_object. priceline (default): Exports for signal 1009 failed with states: <(snapshotting_finished,export_error), (snapshotting_finished,export_processing)>
  Runs: `1009-facebook_conversions_object_1009-scheduled__2026-05-31T00:00:00+00:00`, `1009-facebook_conversions_object_1009-scheduled__2026-06-07T00:00:00+00:00`, `1009-facebook_conversions_object_1009-webapp__2026-06-05T15:42:02+00:00`, and 1 more

## Export Checks

- Checks: 1.
- States: `blocked`=1
- Blockers seen: `export_error`, `failed_export_count`

Check evidence:
- chk_q1y4famguuz21w_q09iikftsqethb (Q1Y4FAMGUUZ21W/Q09IIKFTSQETHB): state=`blocked`.
  Scope: env=prod; org=370; audience=1009; endpoint=app_facebook_conversions_2347; destination=facebook_conversions_object.
  Checked runs: `1009-facebook_conversions_object_1009-webapp__2026-06-05T15:42:02+00:00`, `1009-facebook_conversions_object_1009-scheduled__2026-05-31T00:00:00+00:00`, `1009-facebook_conversions_object_1009-webapp__2026-06-12T20:47:10+00:00`, `1009-facebook_conversions_object_1009-scheduled__2026-06-07T00:00:00+00:00`
  Command: `glcli --env prod bifrost pizza --audience-id 1009 --org-id 370`
  Blockers: `failed_export_count`, `export_error`
  Run 1009-facebook_conversions_object_1009-webapp__2026-06-05T15:42:02+00:00: health=`blocked`; blockers=failed_export_count, export_error; created=2026-06-05T15:43:25.674449+00:00; snapshotting=snapshotting_finished; export=export_error; failed=7685000.
  Run 1009-facebook_conversions_object_1009-scheduled__2026-05-31T00:00:00+00:00: health=`monitoring`; created=2026-06-07T00:02:56.996126+00:00; snapshotting=snapshotting_finished; export=export_processing; failed=0.
  Run 1009-facebook_conversions_object_1009-webapp__2026-06-12T20:47:10+00:00: health=`healthy`; created=2026-06-12T20:48:17.132952+00:00; snapshotting=snapshotting_finished; export=export_finished; failed=0.
  Run 1009-facebook_conversions_object_1009-scheduled__2026-06-07T00:00:00+00:00: health=`healthy`; created=2026-06-14T00:02:39.209313+00:00; snapshotting=snapshotting_finished; export=export_finished; failed=0.

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
