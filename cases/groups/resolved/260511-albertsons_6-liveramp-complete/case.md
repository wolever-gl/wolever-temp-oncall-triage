# Albertsons LiveRamp exports complete

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `resolved`
Tags: `resolved:export-healthy`, `triage:tag_grouped`
Incidents: [Q2T09VCLN9MRZ8](https://growthloop.pagerduty.com/incidents/Q2T09VCLN9MRZ8)
Alerts: 4

## Current Summary

Checked exports are healthy with no blocking export evidence.

## Alert Scope

- Alert facts: 4 imported, 4 linked to this group.
- Orgs: `albertsons_6`
- Audiences: `2850`, `6695`, `6696`, `8484`
- Destinations: `live_ramp_activation`
- State tuples: `snapshotting_finished/export_error`, `snapshotting_finished/no_batches`
- Commands seen: `glcli --env albertsons bifrost pizza --audience-id 2850 --org-id 6`, `glcli --env albertsons bifrost pizza --audience-id 6695 --org-id 6`, `glcli --env albertsons bifrost pizza --audience-id 6696 --org-id 6`, and 1 more

Representative alerts:
- Q2T09VCLN9MRZ8/Q2CC3JVTUBUB5N: 2026-05-11T07:32:05-07:00; albertsons_6; audience 2850; live_ramp_activation; snapshotting_finished/no_batches. albertsons (Albertsons Media): Exports for audience 2850 failed with states: <(snapshotting_finished,no_batches)>
  Runs: `2850-live_ramp_activation_1397-scheduled__2026-05-07T00:00:00+00:00`
- Q2T09VCLN9MRZ8/Q0CG1XZ64MROU1: 2026-05-11T07:33:35-07:00; albertsons_6; audience 6696; live_ramp_activation; snapshotting_finished/export_error. albertsons (Albertsons Media): Exports for audience 6696 failed with states: <(snapshotting_finished,export_error)>
  Runs: `6696-live_ramp_activation_1341-manual__2026-05-06T18:09:59+00:00`, `6696-live_ramp_activation_1341-scheduled__2026-05-06T00:00:00+00:00`, `6696-live_ramp_activation_1341-webapp__2026-05-06T06:51:50+00:00`
- Q2T09VCLN9MRZ8/Q0O5PHKZDIR9IS: 2026-05-11T07:33:35-07:00; albertsons_6; audience 6695; live_ramp_activation; snapshotting_finished/export_error. albertsons (Albertsons Media): Exports for audience 6695 failed with states: <(snapshotting_finished,export_error)>
  Runs: `6695-live_ramp_activation_1340-manual__2026-05-06T18:09:59+00:00`, `6695-live_ramp_activation_1340-scheduled__2026-05-06T00:00:00+00:00`, `6695-live_ramp_activation_1340-webapp__2026-05-06T06:50:25+00:00`
- Q2T09VCLN9MRZ8/Q0ODP0MBZ3C4Y2: 2026-05-11T07:34:02-07:00; albertsons_6; audience 8484; live_ramp_activation; snapshotting_finished/export_error. albertsons (Albertsons Media): Exports for audience 8484 failed with states: <(snapshotting_finished,export_error)>
  Runs: `8484-live_ramp_activation_1660-manual__2026-05-06T18:09:59+00:00`, `8484-live_ramp_activation_1660-scheduled__2026-05-06T00:00:00+00:00`

## Export Checks

- Checks: 4.
- States: `open`=4
- Proposed states: `healthy_closed`=4

Check evidence:
- chk_q2t09vcln9mrz8_q0cg1xz64mrou1 (Q2T09VCLN9MRZ8/Q0CG1XZ64MROU1): state=`open`, proposed=`healthy_closed`.
  Scope: env=albertsons; org=6; audience=6696; endpoint=app_liveramp_activation_26; destination=live_ramp_activation.
  Checked runs: `6696-live_ramp_activation_1341-scheduled__2026-05-06T00:00:00+00:00`, `6696-live_ramp_activation_1341-scheduled__2026-05-06T00:00:00+00:00`, `6696-live_ramp_activation_1341-webapp__2026-05-06T06:51:50+00:00`, `6696-live_ramp_activation_1341-manual__2026-05-06T18:09:59+00:00`
  Command: `glcli --env albertsons bifrost pizza --audience-id 6696 --org-id 6`
  Run 6696-live_ramp_activation_1341-scheduled__2026-05-06T00:00:00+00:00: health=`healthy`; created=2026-05-06T02:14:37.140714+00:00; snapshotting=snapshotting_finished; export=export_finished; failed=0.
  Run 6696-live_ramp_activation_1341-scheduled__2026-05-06T00:00:00+00:00: health=`healthy`; created=2026-05-06T02:14:37.140714+00:00; snapshotting=snapshotting_finished; export=export_finished; failed=0.
  Run 6696-live_ramp_activation_1341-webapp__2026-05-06T06:51:50+00:00: health=`healthy`; created=2026-05-06T06:53:32.088305+00:00; snapshotting=snapshotting_finished; export=export_finished; failed=0.
  Run 6696-live_ramp_activation_1341-manual__2026-05-06T18:09:59+00:00: health=`healthy`; created=2026-05-06T19:33:31.016232+00:00; snapshotting=snapshotting_finished; export=export_finished; failed=0.
- chk_q2t09vcln9mrz8_q0o5phkzdir9is (Q2T09VCLN9MRZ8/Q0O5PHKZDIR9IS): state=`open`, proposed=`healthy_closed`.
  Scope: env=albertsons; org=6; audience=6695; endpoint=app_liveramp_activation_26; destination=live_ramp_activation.
  Checked runs: `6695-live_ramp_activation_1340-scheduled__2026-05-06T00:00:00+00:00`, `6695-live_ramp_activation_1340-scheduled__2026-05-06T00:00:00+00:00`, `6695-live_ramp_activation_1340-webapp__2026-05-06T06:50:25+00:00`, `6695-live_ramp_activation_1340-manual__2026-05-06T18:09:59+00:00`
  Command: `glcli --env albertsons bifrost pizza --audience-id 6695 --org-id 6`
  Run 6695-live_ramp_activation_1340-scheduled__2026-05-06T00:00:00+00:00: health=`healthy`; created=2026-05-06T02:14:03.291873+00:00; snapshotting=snapshotting_finished; export=export_finished; failed=0.
  Run 6695-live_ramp_activation_1340-scheduled__2026-05-06T00:00:00+00:00: health=`healthy`; created=2026-05-06T02:14:03.291873+00:00; snapshotting=snapshotting_finished; export=export_finished; failed=0.
  Run 6695-live_ramp_activation_1340-webapp__2026-05-06T06:50:25+00:00: health=`healthy`; created=2026-05-06T06:51:35.523001+00:00; snapshotting=snapshotting_finished; export=export_finished; failed=0.
  Run 6695-live_ramp_activation_1340-manual__2026-05-06T18:09:59+00:00: health=`healthy`; created=2026-05-06T19:32:15.204141+00:00; snapshotting=snapshotting_finished; export=export_finished; failed=0.
- chk_q2t09vcln9mrz8_q0odp0mbz3c4y2 (Q2T09VCLN9MRZ8/Q0ODP0MBZ3C4Y2): state=`open`, proposed=`healthy_closed`.
  Scope: env=albertsons; org=6; audience=8484; endpoint=app_liveramp_activation_26; destination=live_ramp_activation.
  Checked runs: `8484-live_ramp_activation_1660-scheduled__2026-05-06T00:00:00+00:00`, `8484-live_ramp_activation_1660-scheduled__2026-05-06T00:00:00+00:00`, `8484-live_ramp_activation_1660-manual__2026-05-06T18:09:59+00:00`
  Command: `glcli --env albertsons bifrost pizza --audience-id 8484 --org-id 6`
  Run 8484-live_ramp_activation_1660-scheduled__2026-05-06T00:00:00+00:00: health=`healthy`; created=2026-05-06T03:31:07.629195+00:00; snapshotting=snapshotting_finished; export=export_finished; failed=0.
  Run 8484-live_ramp_activation_1660-scheduled__2026-05-06T00:00:00+00:00: health=`healthy`; created=2026-05-06T03:31:07.629195+00:00; snapshotting=snapshotting_finished; export=export_finished; failed=0.
  Run 8484-live_ramp_activation_1660-manual__2026-05-06T18:09:59+00:00: health=`healthy`; created=2026-05-06T20:52:21.499406+00:00; snapshotting=snapshotting_finished; export=export_finished; failed=0.
- chk_q2t09vcln9mrz8_q2cc3jvtubub5n (Q2T09VCLN9MRZ8/Q2CC3JVTUBUB5N): state=`open`, proposed=`healthy_closed`.
  Scope: env=albertsons; org=6; audience=2850; destination=live_ramp_activation.
  Checked runs: `2850-live_ramp_activation_1397-scheduled__2026-05-07T00:00:00+00:00`
  Command: `glcli --env albertsons bifrost pizza --audience-id 2850 --org-id 6`
  Run 2850-live_ramp_activation_1397-scheduled__2026-05-07T00:00:00+00:00: health=`healthy`; created=2026-05-07T03:31:09.989325+00:00; snapshotting=snapshotting_finished; export=no_batches; failed=0.

## Recent Evidence

- Checked exports are healthy with no blocking export evidence.
  Source: `oncall-triage`; kind: `tag_grouping`; captured: `2026-05-16T01:48:42.939Z`.

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
