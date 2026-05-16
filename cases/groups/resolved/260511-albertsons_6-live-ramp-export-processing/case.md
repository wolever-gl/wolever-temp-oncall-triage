<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# albertsons_6 live-ramp export-processing

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `resolved`
Tags: `triage:needs_review`, `evidence:albertsons-liveramp-progress`, `resolved:merged`
Incidents: [Q2T09VCLN9MRZ8](https://growthloop.pagerduty.com/incidents/Q2T09VCLN9MRZ8)
Alerts: 1

## Current Summary

Merged into 260512-albertsons_6-liveramp-waiting-uploads: Same alert and same export-in-progress evidence; keep the broader Albertsons LiveRamp uploads monitoring group as the live case.

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `albertsons_6`
- Audiences: `12719`
- Destinations: `live_ramp_activation`
- State tuples: `snapshotting_finished/export_processing`
- Commands seen: `glcli --env albertsons bifrost pizza --audience-id 12719 --org-id 6`

Representative alerts:
- Q2T09VCLN9MRZ8/Q06RN07M3BVDQB: 2026-05-11T07:40:52-07:00; albertsons_6; audience 12719; live_ramp_activation; snapshotting_finished/export_processing. albertsons (Albertsons Media): Exports for audience 12719 failed with states: <(snapshotting_finished,export_processing)>
  Runs: `12719-live_ramp_activation_4469-webapp__2026-05-07T00:40:33+00:00`

## Export Checks

- Checks: 1.
- States: `monitoring`=1

Check evidence:
- chk_q2t09vcln9mrz8_q06rn07m3bvdqb (Q2T09VCLN9MRZ8/Q06RN07M3BVDQB): state=`monitoring`, next_check_at=`2026-05-16T23:15:27.526Z`.
  Scope: env=albertsons; org=6; audience=12719; endpoint=app_liveramp_activation_44; destination=live_ramp_activation.
  Checked runs: `12719-live_ramp_activation_4469-webapp__2026-05-07T00:40:33+00:00`
  Command: `glcli --env albertsons bifrost pizza --audience-id 12719 --org-id 6`
  Run 12719-live_ramp_activation_4469-webapp__2026-05-07T00:40:33+00:00: health=`monitoring`; created=2026-05-07T00:46:17.756011+00:00; snapshotting=snapshotting_finished; export=export_processing; failed=0.

## Next Action

Follow target group 260512-albertsons_6-liveramp-waiting-uploads.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
