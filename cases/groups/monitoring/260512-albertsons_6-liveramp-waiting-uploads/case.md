<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# Albertsons LiveRamp uploads still processing

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `monitoring`
Tags: `triage:tag_grouped`, `waiting:uploads`, `monitoring:export-processing`
Incidents: [Q2T09VCLN9MRZ8](https://growthloop.pagerduty.com/incidents/Q2T09VCLN9MRZ8)
Alerts: 4

## Current Summary

Auto-monitored from Pizza export checks: 4 alert-scoped export check(s) are still processing and 0 are already healthy.

## Alert Scope

- Alert facts: 4 imported, 4 linked to this group.
- Orgs: `albertsons_6`
- Audiences: `10073`, `12719`, `2189`, `8473`
- Destinations: `live_ramp_activation`
- State tuples: `snapshotting_finished/export_processing`, `snapshotting_processing/no_batches`
- Commands seen: `glcli --env albertsons bifrost pizza --audience-id 10073 --org-id 6`, `glcli --env albertsons bifrost pizza --audience-id 12719 --org-id 6`, `glcli --env albertsons bifrost pizza --audience-id 2189 --org-id 6`, and 1 more

Representative alerts:
- Q2T09VCLN9MRZ8/Q2FA9QPTXF9MJM: 2026-05-11T07:31:17-07:00; albertsons_6; audience 2189; live_ramp_activation; snapshotting_processing/no_batches. albertsons (Albertsons Media): Exports for audience 2189 failed with states: <(snapshotting_processing,no_batches)>
  Runs: `2189-live_ramp_activation_678-scheduled__2026-05-05T00:00:00+00:00`
- Q2T09VCLN9MRZ8/Q3HGOVLPIQWNZ0: 2026-05-11T07:33:58-07:00; albertsons_6; audience 8473; live_ramp_activation; snapshotting_processing/no_batches. albertsons (Albertsons Media): Exports for audience 8473 failed with states: <(snapshotting_processing,no_batches)>
  Runs: `8473-live_ramp_activation_1649-scheduled__2026-05-06T00:00:00+00:00`
- Q2T09VCLN9MRZ8/Q2TYR6XMVMLGTB: 2026-05-11T07:35:55-07:00; albertsons_6; audience 10073; live_ramp_activation; snapshotting_processing/no_batches. albertsons (Albertsons Media): Exports for audience 10073 failed with states: <(snapshotting_processing,no_batches)>
  Runs: `10073-live_ramp_activation_2061-scheduled__2026-05-08T00:00:00+00:00`
- Q2T09VCLN9MRZ8/Q06RN07M3BVDQB: 2026-05-11T07:40:52-07:00; albertsons_6; audience 12719; live_ramp_activation; snapshotting_finished/export_processing. albertsons (Albertsons Media): Exports for audience 12719 failed with states: <(snapshotting_finished,export_processing)>
  Runs: `12719-live_ramp_activation_4469-webapp__2026-05-07T00:40:33+00:00`

## Export Checks

- Checks: 4.
- States: `monitoring`=4

Check evidence:
- chk_q2t09vcln9mrz8_q06rn07m3bvdqb (Q2T09VCLN9MRZ8/Q06RN07M3BVDQB): state=`monitoring`, next_check_at=`2026-05-16T23:15:27.526Z`.
  Scope: env=albertsons; org=6; audience=12719; endpoint=app_liveramp_activation_44; destination=live_ramp_activation.
  Checked runs: `12719-live_ramp_activation_4469-webapp__2026-05-07T00:40:33+00:00`
  Command: `glcli --env albertsons bifrost pizza --audience-id 12719 --org-id 6`
  Run 12719-live_ramp_activation_4469-webapp__2026-05-07T00:40:33+00:00: health=`monitoring`; created=2026-05-07T00:46:17.756011+00:00; snapshotting=snapshotting_finished; export=export_processing; failed=0.
- chk_q2t09vcln9mrz8_q2fa9qptxf9mjm (Q2T09VCLN9MRZ8/Q2FA9QPTXF9MJM): state=`monitoring`, next_check_at=`2026-05-16T23:15:20.750Z`.
  Scope: env=albertsons; org=6; audience=2189; destination=live_ramp_activation.
  Checked runs: `2189-live_ramp_activation_678-scheduled__2026-05-05T00:00:00+00:00`
  Command: `glcli --env albertsons bifrost pizza --audience-id 2189 --org-id 6`
  Run 2189-live_ramp_activation_678-scheduled__2026-05-05T00:00:00+00:00: health=`monitoring`; created=2026-05-05T01:42:54.344376+00:00; snapshotting=snapshotting_processing; export=no_batches; failed=0.
- chk_q2t09vcln9mrz8_q2tyr6xmvmlgtb (Q2T09VCLN9MRZ8/Q2TYR6XMVMLGTB): state=`monitoring`, next_check_at=`2026-05-16T23:15:20.750Z`.
  Scope: env=albertsons; org=6; audience=10073; destination=live_ramp_activation.
  Checked runs: `10073-live_ramp_activation_2061-scheduled__2026-05-08T00:00:00+00:00`
  Command: `glcli --env albertsons bifrost pizza --audience-id 10073 --org-id 6`
  Run 10073-live_ramp_activation_2061-scheduled__2026-05-08T00:00:00+00:00: health=`monitoring`; created=2026-05-08T00:22:09.764588+00:00; snapshotting=snapshotting_processing; export=no_batches; failed=0.
- chk_q2t09vcln9mrz8_q3hgovlpiqwnz0 (Q2T09VCLN9MRZ8/Q3HGOVLPIQWNZ0): state=`monitoring`, next_check_at=`2026-05-16T23:15:20.750Z`.
  Scope: env=albertsons; org=6; audience=8473; destination=live_ramp_activation.
  Checked runs: `8473-live_ramp_activation_1649-scheduled__2026-05-06T00:00:00+00:00`
  Command: `glcli --env albertsons bifrost pizza --audience-id 8473 --org-id 6`
  Run 8473-live_ramp_activation_1649-scheduled__2026-05-06T00:00:00+00:00: health=`monitoring`; created=2026-05-06T01:51:06.242469+00:00; snapshotting=snapshotting_processing; export=no_batches; failed=0.

## Recent Evidence

- Auto-monitored from Pizza export checks: 4 alert-scoped export check(s) are still processing and 0 are already healthy.
  Source: `check-exports`; kind: `export_check`; captured: `2026-05-16T23:10:54.550Z`.
- Monitoring check-in: audience 12719 has reached snapshotting_finished/export_finished with zero failures. The shared older audience rows remain unresolved elsewhere: 8473 and 10073 are still snapshotting_processing/no_batches after retry attempts, and 2189 latest Pizza is snapshotting_error/no_batches.
  Source: `monitoring preflight/manual Pizza`; kind: `pizza`; captured: `2026-05-16T23:04:10.153Z`.
  Command: `glcli --env albertsons bifrost pizza --audience-id 12719 --org-id 6; plus shared audiences 2189,8473,10073`
- Exports have progress evidence but are not complete yet.
  Source: `oncall-triage`; kind: `tag_grouping`; captured: `2026-05-16T01:48:36.505Z`.

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
