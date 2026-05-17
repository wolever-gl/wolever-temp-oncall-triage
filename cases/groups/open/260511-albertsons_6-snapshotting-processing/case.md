<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# albertsons_6 snapshotting-processing

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `open`
Tags: `triage:needs_review`, `monitoring:export-processing`, `triage:snapshotting-error`
Incidents: [Q2T09VCLN9MRZ8](https://growthloop.pagerduty.com/incidents/Q2T09VCLN9MRZ8)
Alerts: 4

## Current Summary

Needs review: Albertsons 8473 and 10073 remain snapshotting_processing/no_batches, but audience 2189 now has latest Pizza snapshotting_error/no_batches and should be investigated manually.

## Alert Scope

- Alert facts: 4 imported, 4 linked to this group.
- Orgs: `albertsons_6`
- Audiences: `10073`, `2189`, `8473`
- Destinations: `live_ramp_activation`
- State tuples: `snapshotting_processing/no_batches`
- Commands seen: `glcli --env albertsons bifrost pizza --audience-id 10073 --org-id 6`, `glcli --env albertsons bifrost pizza --audience-id 2189 --org-id 6`, `glcli --env albertsons bifrost pizza --audience-id 8473 --org-id 6`

Representative alerts:
- Q2T09VCLN9MRZ8/Q2FA9QPTXF9MJM: 2026-05-11T07:31:17-07:00; albertsons_6; audience 2189; live_ramp_activation; snapshotting_processing/no_batches. albertsons (Albertsons Media): Exports for audience 2189 failed with states: <(snapshotting_processing,no_batches)>
  Runs: `2189-live_ramp_activation_678-scheduled__2026-05-05T00:00:00+00:00`
- Q2T09VCLN9MRZ8/Q3HGOVLPIQWNZ0: 2026-05-11T07:33:58-07:00; albertsons_6; audience 8473; live_ramp_activation; snapshotting_processing/no_batches. albertsons (Albertsons Media): Exports for audience 8473 failed with states: <(snapshotting_processing,no_batches)>
  Runs: `8473-live_ramp_activation_1649-scheduled__2026-05-06T00:00:00+00:00`
- Q2T09VCLN9MRZ8/Q2TYR6XMVMLGTB: 2026-05-11T07:35:55-07:00; albertsons_6; audience 10073; live_ramp_activation; snapshotting_processing/no_batches. albertsons (Albertsons Media): Exports for audience 10073 failed with states: <(snapshotting_processing,no_batches)>
  Runs: `10073-live_ramp_activation_2061-scheduled__2026-05-08T00:00:00+00:00`
- Q2T09VCLN9MRZ8/Q24L2JIWVY4GIS: 2026-05-12T01:04:24-07:00; albertsons_6; audience 2189. albertsons (Albertsons Media) - Audience 2189: Audience Export failure for 2189 sent to client.

## Export Checks

- Checks: 4.
- States: `blocked`=1, `monitoring`=3
- Blockers seen: `missing_export_after_alert`

Check evidence:
- chk_q2t09vcln9mrz8_q24l2jiwvy4gis (Q2T09VCLN9MRZ8/Q24L2JIWVY4GIS): state=`blocked`.
  Scope: env=albertsons; org=6; audience=2189.
  Command: `glcli --env albertsons bifrost pizza --audience-id 2189 --org-id 6`
  Blockers: `missing_export_after_alert`
- chk_q2t09vcln9mrz8_q2fa9qptxf9mjm (Q2T09VCLN9MRZ8/Q2FA9QPTXF9MJM): state=`monitoring`, next_check_at=`2026-05-17T16:31:26.859Z`.
  Scope: env=albertsons; org=6; audience=2189; destination=live_ramp_activation.
  Checked runs: `2189-live_ramp_activation_678-scheduled__2026-05-05T00:00:00+00:00`
  Command: `glcli --env albertsons bifrost pizza --audience-id 2189 --org-id 6`
  Run 2189-live_ramp_activation_678-scheduled__2026-05-05T00:00:00+00:00: health=`monitoring`; created=2026-05-05T01:42:54.344376+00:00; snapshotting=snapshotting_processing; export=no_batches; failed=0.
- chk_q2t09vcln9mrz8_q2tyr6xmvmlgtb (Q2T09VCLN9MRZ8/Q2TYR6XMVMLGTB): state=`monitoring`, next_check_at=`2026-05-17T16:31:26.859Z`.
  Scope: env=albertsons; org=6; audience=10073; destination=live_ramp_activation.
  Checked runs: `10073-live_ramp_activation_2061-scheduled__2026-05-08T00:00:00+00:00`
  Command: `glcli --env albertsons bifrost pizza --audience-id 10073 --org-id 6`
  Run 10073-live_ramp_activation_2061-scheduled__2026-05-08T00:00:00+00:00: health=`monitoring`; created=2026-05-08T00:22:09.764588+00:00; snapshotting=snapshotting_processing; export=no_batches; failed=0.
- chk_q2t09vcln9mrz8_q3hgovlpiqwnz0 (Q2T09VCLN9MRZ8/Q3HGOVLPIQWNZ0): state=`monitoring`, next_check_at=`2026-05-17T16:31:26.859Z`.
  Scope: env=albertsons; org=6; audience=8473; destination=live_ramp_activation.
  Checked runs: `8473-live_ramp_activation_1649-scheduled__2026-05-06T00:00:00+00:00`
  Command: `glcli --env albertsons bifrost pizza --audience-id 8473 --org-id 6`
  Run 8473-live_ramp_activation_1649-scheduled__2026-05-06T00:00:00+00:00: health=`monitoring`; created=2026-05-06T01:51:06.242469+00:00; snapshotting=snapshotting_processing; export=no_batches; failed=0.

## Recent Evidence

- Monitoring check-in: audiences 8473 and 10073 remain snapshotting_processing/no_batches after retry attempts. Audience 2189 latest Pizza is now snapshotting_error/no_batches on run 2189-live_ramp_activation_678-scheduled__2026-05-12T00:00:00+00:00, so this case is no longer purely processing and needs manual review for 2189.
  Source: `monitoring preflight/manual Pizza`; kind: `pizza`; captured: `2026-05-16T23:04:11.549Z`.
  Command: `glcli --env albertsons bifrost pizza --audience-id 2189 --org-id 6; glcli --env albertsons bifrost pizza --audience-id 8473 --org-id 6; glcli --env albertsons bifrost pizza --audience-id 10073 --org-id 6`
- Auto-monitored from Pizza export checks: 3 alert-scoped export check(s) are still processing and 0 are already healthy.
  Source: `check-exports`; kind: `export_check`; captured: `2026-05-16T21:38:49.938Z`.

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
