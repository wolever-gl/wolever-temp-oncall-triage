<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# ford_310 dv360 export-error

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `open`
Tags: `triage:needs_review`
Incidents: [Q3VN9Y4WC7ZHBB](https://growthloop.pagerduty.com/incidents/Q3VN9Y4WC7ZHBB)
Alerts: 1

## Current Summary

ford (Marketing Production): Exports for audience 32920 failed with states: <(snapshotting_finished,export_error)>

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `ford_310`
- Audiences: `32920`
- Destinations: `dv360`
- State tuples: `snapshotting_finished/export_error`
- Commands seen: `glcli --env prod bifrost pizza --audience-id 32920 --org-id 310`

Representative alerts:
- Q3VN9Y4WC7ZHBB/Q1WH4KAFM5HNRS: 2026-06-19T07:51:00-07:00; ford_310; audience 32920; dv360; snapshotting_finished/export_error. ford (Marketing Production): Exports for audience 32920 failed with states: <(snapshotting_finished,export_error)>
  Runs: `32920-dv360_20866-scheduled__2026-05-25T00:00:00+00:00`, `32920-dv360_20866-scheduled__2026-05-26T00:00:00+00:00`, `32920-dv360_20866-scheduled__2026-05-27T00:00:00+00:00`, and 23 more

## Export Checks

- Checks: 1.
- States: `blocked`=1
- Blockers seen: `export_error`, `failed_export_count`, `missing_pizza_row`

Check evidence:
- chk_q3vn9y4wc7zhbb_q1wh4kafm5hnrs (Q3VN9Y4WC7ZHBB/Q1WH4KAFM5HNRS): state=`blocked`.
  Scope: env=prod; org=310; audience=32920; endpoint=app_dv360_1807; destination=dv360.
  Checked runs: `32920-dv360_20866-scheduled__2026-05-25T00:00:00+00:00`, `32920-dv360_20866-scheduled__2026-05-26T00:00:00+00:00`, `32920-dv360_20866-scheduled__2026-05-27T00:00:00+00:00`, `32920-dv360_20866-scheduled__2026-05-28T00:00:00+00:00`, and 22 more
  Command: `glcli --env prod bifrost pizza --audience-id 32920 --org-id 310`
  Blockers: `missing_pizza_row`, `failed_export_count`, `failed_export_count`, `failed_export_count`, `failed_export_count`, `failed_export_count`, `failed_export_count`, `failed_export_count`, and 1 more
  Run 32920-dv360_20866-scheduled__2026-05-25T00:00:00+00:00: health=`missing`; blockers=missing_pizza_row.
  Run 32920-dv360_20866-scheduled__2026-05-26T00:00:00+00:00: health=`healthy`; created=2026-05-26T00:25:30.785998+00:00; snapshotting=snapshotting_finished; export=export_finished; failed=0.
  Run 32920-dv360_20866-scheduled__2026-05-27T00:00:00+00:00: health=`healthy`; created=2026-05-27T00:28:24.642847+00:00; snapshotting=snapshotting_finished; export=export_finished; failed=0.
  Run 32920-dv360_20866-scheduled__2026-05-28T00:00:00+00:00: health=`healthy`; created=2026-05-28T00:27:40.608798+00:00; snapshotting=snapshotting_finished; export=export_finished; failed=0.
  Showing 4 of 26 run evaluations.

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
