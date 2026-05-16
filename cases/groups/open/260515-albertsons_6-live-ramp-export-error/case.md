# albertsons_6 live-ramp export-error

State: `open`
Tags: `triage:needs_review`
Incidents: [Q38JR11G2ENK2W](https://growthloop.pagerduty.com/incidents/Q38JR11G2ENK2W)
Alerts: 1

## Current Summary

albertsons (Albertsons Media): Exports for audience 12862 failed with states: <(snapshotting_finished,export_error)>

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `albertsons_6`
- Audiences: `12862`
- Destinations: `live_ramp_activation`
- State tuples: `snapshotting_finished/export_error`
- Commands seen: `glcli --env albertsons bifrost pizza --audience-id 12862 --org-id 6`

Representative alerts:
- Q38JR11G2ENK2W/Q11T0GQ29JF4Y8: 2026-05-15T07:40:43-07:00; albertsons_6; audience 12862; live_ramp_activation; snapshotting_finished/export_error. albertsons (Albertsons Media): Exports for audience 12862 failed with states: <(snapshotting_finished,export_error)>
  Runs: `12862-live_ramp_activation_4610-scheduled__2026-05-15T00:00:00+00:00`, `12862-live_ramp_activation_4610-webapp__2026-05-14T20:37:56+00:00`

## Export Checks

- Checks: 1.
- States: `blocked`=1
- Blockers seen: `export_error`

Check evidence:
- chk_q38jr11g2enk2w_q11t0gq29jf4y8 (Q38JR11G2ENK2W/Q11T0GQ29JF4Y8): state=`blocked`.
  Scope: env=albertsons; org=6; audience=12862; endpoint=app_liveramp_activation_41; destination=live_ramp_activation.
  Checked runs: `12862-live_ramp_activation_4610-webapp__2026-05-14T20:37:56+00:00`, `12862-live_ramp_activation_4610-scheduled__2026-05-15T00:00:00+00:00`
  Command: `glcli --env albertsons bifrost pizza --audience-id 12862 --org-id 6`
  Blockers: `export_error`
  Run 12862-live_ramp_activation_4610-webapp__2026-05-14T20:37:56+00:00: health=`blocked`; blockers=export_error; created=2026-05-14T20:55:25.032795+00:00; snapshotting=snapshotting_finished; export=export_error; failed=0.
  Run 12862-live_ramp_activation_4610-scheduled__2026-05-15T00:00:00+00:00: health=`healthy`; created=2026-05-15T04:15:21.952730+00:00; snapshotting=snapshotting_finished; export=export_finished; failed=0.

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
