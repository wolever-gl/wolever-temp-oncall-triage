<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# chghealthcare_395 pulse-point export-error

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `open`
Tags: `triage:needs_review`
Incidents: [Q3Q6GO065O9UWX](https://growthloop.pagerduty.com/incidents/Q3Q6GO065O9UWX)
Alerts: 1

## Current Summary

chghealthcare (Weatherby Healthcare): Exports for audience 18153 failed with states: <(snapshotting_finished,export_error)>

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `chghealthcare_395`
- Audiences: `18153`
- Destinations: `pulse_point`
- State tuples: `snapshotting_finished/export_error`
- Commands seen: `glcli --env prod bifrost pizza --audience-id 18153 --org-id 395`

Representative alerts:
- Q3Q6GO065O9UWX/Q0PI6SG3C7ES0M: 2026-06-16T07:38:12-07:00; chghealthcare_395; audience 18153; pulse_point; snapshotting_finished/export_error. chghealthcare (Weatherby Healthcare): Exports for audience 18153 failed with states: <(snapshotting_finished,export_error)>
  Runs: `18153-pulse_point_11586-scheduled__2026-06-15T23:00:00+00:00`

## Export Checks

- Checks: 1.
- States: `blocked`=1
- Blockers seen: `export_error`, `failed_export_count`

Check evidence:
- chk_q3q6go065o9uwx_q0pi6sg3c7es0m (Q3Q6GO065O9UWX/Q0PI6SG3C7ES0M): state=`blocked`.
  Scope: env=prod; org=395; audience=18153; endpoint=app_pulsepoint_1408; destination=pulse_point.
  Checked runs: `18153-pulse_point_11586-scheduled__2026-06-15T23:00:00+00:00`
  Command: `glcli --env prod bifrost pizza --audience-id 18153 --org-id 395`
  Blockers: `failed_export_count`, `export_error`
  Run 18153-pulse_point_11586-scheduled__2026-06-15T23:00:00+00:00: health=`blocked`; blockers=failed_export_count, export_error; created=2026-06-15T23:26:39.366069+00:00; snapshotting=snapshotting_finished; export=export_error; failed=90.

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
