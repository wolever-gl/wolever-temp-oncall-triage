<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# albertsons_6 live-ramp export-error

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `resolved`
Tags: `triage:needs_review`, `resolved:merged`
Incidents: [Q3BN6VB0TPVXNF](https://growthloop.pagerduty.com/incidents/Q3BN6VB0TPVXNF)
Alerts: 1

## Current Summary

Merged into 260622-albertsons_6-live-ramp-export-error: Consolidate Albertsons LiveRamp export_error alerts from the Other open buckets list into a single investigation case.

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `albertsons_6`
- Audiences: `12808`
- Destinations: `live_ramp_activation`
- State tuples: `snapshotting_finished/export_error`
- Commands seen: `glcli --env albertsons bifrost pizza --audience-id 12808 --org-id 6`

Representative alerts:
- Q3BN6VB0TPVXNF/Q0AHQNO4EY83ML: 2026-06-19T07:41:15-07:00; albertsons_6; audience 12808; live_ramp_activation; snapshotting_finished/export_error. albertsons (Albertsons Media): Exports for audience 12808 failed with states: <(snapshotting_finished,export_error)>
  Runs: `12808-live_ramp_activation_4615-scheduled__2026-06-12T00:00:00+00:00`, `12808-live_ramp_activation_4615-scheduled__2026-06-19T00:00:00+00:00`

## Export Checks

- Checks: 1.
- States: `blocked`=1
- Blockers seen: `export_error`

Check evidence:
- chk_q3bn6vb0tpvxnf_q0ahqno4ey83ml (Q3BN6VB0TPVXNF/Q0AHQNO4EY83ML): state=`blocked`.
  Scope: env=albertsons; org=6; audience=12808; endpoint=app_liveramp_activation_41; destination=live_ramp_activation.
  Checked runs: `12808-live_ramp_activation_4615-scheduled__2026-06-12T00:00:00+00:00`, `12808-live_ramp_activation_4615-scheduled__2026-06-19T00:00:00+00:00`
  Command: `glcli --env albertsons bifrost pizza --audience-id 12808 --org-id 6`
  Blockers: `export_error`
  Run 12808-live_ramp_activation_4615-scheduled__2026-06-12T00:00:00+00:00: health=`healthy`; created=2026-06-12T04:59:16.805331+00:00; snapshotting=snapshotting_finished; export=export_finished; failed=0.
  Run 12808-live_ramp_activation_4615-scheduled__2026-06-19T00:00:00+00:00: health=`blocked`; blockers=export_error; created=2026-06-19T08:59:29.536231+00:00; snapshotting=snapshotting_finished; export=export_error; failed=0.

## Next Action

Follow target group 260622-albertsons_6-live-ramp-export-error.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
