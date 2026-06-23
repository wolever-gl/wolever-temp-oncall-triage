<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# albertsons_6 live-ramp export-error

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `resolved`
Tags: `triage:needs_review`, `resolved:merged`
Incidents: [Q30L4PHDKA6R4P](https://growthloop.pagerduty.com/incidents/Q30L4PHDKA6R4P)
Alerts: 1

## Current Summary

Merged into 260622-albertsons_6-live-ramp-export-error: Consolidate Albertsons LiveRamp export_error alerts from the Other open buckets list into a single investigation case.

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `albertsons_6`
- Audiences: `12865`
- Destinations: `live_ramp_activation`
- State tuples: `snapshotting_finished/export_error`
- Commands seen: `glcli --env albertsons bifrost pizza --audience-id 12865 --org-id 6`

Representative alerts:
- Q30L4PHDKA6R4P/Q2X0TI1MPFASVB: 2026-06-15T07:41:55-07:00; albertsons_6; audience 12865; live_ramp_activation; snapshotting_finished/export_error. albertsons (Albertsons Media): Exports for audience 12865 failed with states: <(snapshotting_finished,export_error)>
  Runs: `12865-live_ramp_activation_4611-scheduled__2026-06-15T00:00:00+00:00`

## Export Checks

- Checks: 1.
- States: `blocked`=1
- Blockers seen: `export_error`

Check evidence:
- chk_q30l4phdka6r4p_q2x0ti1mpfasvb (Q30L4PHDKA6R4P/Q2X0TI1MPFASVB): state=`blocked`.
  Scope: env=albertsons; org=6; audience=12865; endpoint=app_liveramp_activation_41; destination=live_ramp_activation.
  Checked runs: `12865-live_ramp_activation_4611-scheduled__2026-06-15T00:00:00+00:00`
  Command: `glcli --env albertsons bifrost pizza --audience-id 12865 --org-id 6`
  Blockers: `export_error`
  Run 12865-live_ramp_activation_4611-scheduled__2026-06-15T00:00:00+00:00: health=`blocked`; blockers=export_error; created=2026-06-15T04:33:48.385042+00:00; snapshotting=snapshotting_finished; export=export_error; failed=0.

## Next Action

Follow target group 260622-albertsons_6-live-ramp-export-error.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
