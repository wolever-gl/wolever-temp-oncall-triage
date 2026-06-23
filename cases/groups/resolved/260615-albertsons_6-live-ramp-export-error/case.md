<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# albertsons_6 live-ramp export-error

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `resolved`
Tags: `triage:needs_review`, `resolved:merged`
Incidents: [Q2CD9OGM7RSCXU](https://growthloop.pagerduty.com/incidents/Q2CD9OGM7RSCXU)
Alerts: 1

## Current Summary

Merged into 260622-albertsons_6-live-ramp-export-error: Consolidate Albertsons LiveRamp export_error alerts from the Other open buckets list into a single investigation case.

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `albertsons_6`
- Audiences: `11579`
- Destinations: `live_ramp_activation`
- State tuples: `snapshotting_finished/export_error`
- Commands seen: `glcli --env albertsons bifrost pizza --audience-id 11579 --org-id 6`

Representative alerts:
- Q2CD9OGM7RSCXU/Q16XDBUY1UMK8S: 2026-06-15T07:38:45-07:00; albertsons_6; audience 11579; live_ramp_activation; snapshotting_finished/export_error. albertsons (Albertsons Media): Exports for audience 11579 failed with states: <(snapshotting_finished,export_error)>
  Runs: `11579-live_ramp_activation_3543-scheduled__2026-06-15T00:00:00+00:00`

## Export Checks

- Checks: 1.
- States: `blocked`=1
- Blockers seen: `export_error`

Check evidence:
- chk_q2cd9ogm7rscxu_q16xdbuy1umk8s (Q2CD9OGM7RSCXU/Q16XDBUY1UMK8S): state=`blocked`.
  Scope: env=albertsons; org=6; audience=11579; endpoint=app_liveramp_activation_26; destination=live_ramp_activation.
  Checked runs: `11579-live_ramp_activation_3543-scheduled__2026-06-15T00:00:00+00:00`
  Command: `glcli --env albertsons bifrost pizza --audience-id 11579 --org-id 6`
  Blockers: `export_error`
  Run 11579-live_ramp_activation_3543-scheduled__2026-06-15T00:00:00+00:00: health=`blocked`; blockers=export_error; created=2026-06-15T08:47:36.477211+00:00; snapshotting=snapshotting_finished; export=export_error; failed=0.

## Next Action

Follow target group 260622-albertsons_6-live-ramp-export-error.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
