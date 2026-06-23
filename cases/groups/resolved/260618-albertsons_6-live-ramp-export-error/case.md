<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# albertsons_6 live-ramp export-error

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `resolved`
Tags: `triage:needs_review`, `resolved:merged`
Incidents: [Q19MJO5XIF1NHB](https://growthloop.pagerduty.com/incidents/Q19MJO5XIF1NHB)
Alerts: 1

## Current Summary

Merged into 260622-albertsons_6-live-ramp-export-error: Consolidate Albertsons LiveRamp export_error alerts from the Other open buckets list into a single investigation case.

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `albertsons_6`
- Audiences: `12535`
- Destinations: `live_ramp_activation`
- State tuples: `snapshotting_finished/export_error`
- Commands seen: `glcli --env albertsons bifrost pizza --audience-id 12535 --org-id 6`

Representative alerts:
- Q19MJO5XIF1NHB/Q1IJLLEGNNKSO5: 2026-06-18T07:41:12-07:00; albertsons_6; audience 12535; live_ramp_activation; snapshotting_finished/export_error. albertsons (Albertsons Media): Exports for audience 12535 failed with states: <(snapshotting_finished,export_error)>
  Runs: `12535-live_ramp_activation_4309-scheduled__2026-06-15T00:00:00+00:00`

## Export Checks

- Checks: 1.
- States: `blocked`=1
- Blockers seen: `export_error`

Check evidence:
- chk_q19mjo5xif1nhb_q1ijllegnnkso5 (Q19MJO5XIF1NHB/Q1IJLLEGNNKSO5): state=`blocked`.
  Scope: env=albertsons; org=6; audience=12535; endpoint=app_liveramp_activation_44; destination=live_ramp_activation.
  Checked runs: `12535-live_ramp_activation_4309-scheduled__2026-06-15T00:00:00+00:00`
  Command: `glcli --env albertsons bifrost pizza --audience-id 12535 --org-id 6`
  Blockers: `export_error`
  Run 12535-live_ramp_activation_4309-scheduled__2026-06-15T00:00:00+00:00: health=`blocked`; blockers=export_error; created=2026-06-15T00:20:30.571481+00:00; snapshotting=snapshotting_finished; export=export_error; failed=0.

## Next Action

Follow target group 260622-albertsons_6-live-ramp-export-error.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
