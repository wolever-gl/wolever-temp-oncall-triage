<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# albertsons_6 export complete

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `resolved`
Tags: `resolved:export-healthy`, `triage:tag_grouped`
Incidents: [Q269WMZF4MKMNL](https://growthloop.pagerduty.com/incidents/Q269WMZF4MKMNL), [Q2EJWG22CER0LA](https://growthloop.pagerduty.com/incidents/Q2EJWG22CER0LA), [Q2T09VCLN9MRZ8](https://growthloop.pagerduty.com/incidents/Q2T09VCLN9MRZ8), [Q38JR11G2ENK2W](https://growthloop.pagerduty.com/incidents/Q38JR11G2ENK2W)
Alerts: 15

## Current Summary

Albertsons audience failures whose alert-scoped exports are now healthy or complete.

## Alert Scope

- Alert facts: 15 imported, 15 linked to this group.
- Orgs: `albertsons_6`
- Audiences: `10684`, `10685`, `12742`, `12862`, `12865`, `12866`, `12873`, `12874`, and 6 more
- Destinations: `live_ramp_activation`
- State tuples: `snapshotting_finished/export_error`, `snapshotting_finished/no_batches`
- Commands seen: `glcli --env albertsons bifrost pizza --audience-id 10684 --org-id 6`, `glcli --env albertsons bifrost pizza --audience-id 10685 --org-id 6`, `glcli --env albertsons bifrost pizza --audience-id 12742 --org-id 6`, and 11 more

Representative alerts:
- Q2T09VCLN9MRZ8/Q2CC3JVTUBUB5N: 2026-05-11T07:32:05-07:00; albertsons_6; audience 2850; live_ramp_activation; snapshotting_finished/no_batches. albertsons (Albertsons Media): Exports for audience 2850 failed with states: <(snapshotting_finished,no_batches)>
  Runs: `2850-live_ramp_activation_1397-scheduled__2026-05-07T00:00:00+00:00`
- Q2T09VCLN9MRZ8/Q0CG1XZ64MROU1: 2026-05-11T07:33:35-07:00; albertsons_6; audience 6696; live_ramp_activation; snapshotting_finished/export_error. albertsons (Albertsons Media): Exports for audience 6696 failed with states: <(snapshotting_finished,export_error)>
  Runs: `6696-live_ramp_activation_1341-manual__2026-05-06T18:09:59+00:00`, `6696-live_ramp_activation_1341-scheduled__2026-05-06T00:00:00+00:00`, `6696-live_ramp_activation_1341-webapp__2026-05-06T06:51:50+00:00`
- Q2T09VCLN9MRZ8/Q0O5PHKZDIR9IS: 2026-05-11T07:33:35-07:00; albertsons_6; audience 6695; live_ramp_activation; snapshotting_finished/export_error. albertsons (Albertsons Media): Exports for audience 6695 failed with states: <(snapshotting_finished,export_error)>
  Runs: `6695-live_ramp_activation_1340-manual__2026-05-06T18:09:59+00:00`, `6695-live_ramp_activation_1340-scheduled__2026-05-06T00:00:00+00:00`, `6695-live_ramp_activation_1340-webapp__2026-05-06T06:50:25+00:00`
- Q2T09VCLN9MRZ8/Q0ODP0MBZ3C4Y2: 2026-05-11T07:34:02-07:00; albertsons_6; audience 8484; live_ramp_activation; snapshotting_finished/export_error. albertsons (Albertsons Media): Exports for audience 8484 failed with states: <(snapshotting_finished,export_error)>
  Runs: `8484-live_ramp_activation_1660-manual__2026-05-06T18:09:59+00:00`, `8484-live_ramp_activation_1660-scheduled__2026-05-06T00:00:00+00:00`
- Q2EJWG22CER0LA/Q36FHDW4FQ2W9V: 2026-05-13T09:32:35-07:00; albertsons_6; audience 12742. albertsons (Albertsons Media) - Audience 12742: 0 successfull_exports from pizza tracker found 10 minutes after new export
- Q38JR11G2ENK2W/Q3WXBZ7NHK8AJM: 2026-05-14T13:46:42-07:00; albertsons_6; audience 12876. albertsons (Albertsons Media) - Audience 12876: 0 successfull_exports from pizza tracker found 10 minutes after new export
- Q38JR11G2ENK2W/Q0UJ754HNUZA0W: 2026-05-14T13:48:49-07:00; albertsons_6; audience 12874. albertsons (Albertsons Media) - Audience 12874: 0 successfull_exports from pizza tracker found 10 minutes after new export
- Q38JR11G2ENK2W/Q0UXYTQAE5SEEF: 2026-05-14T13:49:56-07:00; albertsons_6; audience 12866. albertsons (Albertsons Media) - Audience 12866: 0 successfull_exports from pizza tracker found 10 minutes after new export
- Q38JR11G2ENK2W/Q24005UUW7ICKS: 2026-05-14T13:53:00-07:00; albertsons_6; audience 12862. albertsons (Albertsons Media) - Audience 12862: 0 successfull_exports from pizza tracker found 10 minutes after new export
- Q38JR11G2ENK2W/Q3O67YTDVSANKL: 2026-05-14T13:53:34-07:00; albertsons_6; audience 12865. albertsons (Albertsons Media) - Audience 12865: 0 successfull_exports from pizza tracker found 10 minutes after new export
- Showing 10 of 15 alert facts; see `indexes/alert_facts.json` for the full imported set.

## Export Checks

- Checks: 15.
- States: `blocked`=2, `healthy_closed`=9, `open`=4
- Proposed states: `healthy_closed`=4
- Blockers seen: `missing_run_identity`

Check evidence:
- chk_q269wmzf4mkmnl_q0bqkjwvbsb8ay (Q269WMZF4MKMNL/Q0BQKJWVBSB8AY): state=`blocked`.
  Scope: env=albertsons; org=6; audience=10685.
  Command: `glcli --env albertsons bifrost pizza --audience-id 10685 --org-id 6`
  Blockers: `missing_run_identity`
- chk_q269wmzf4mkmnl_q1e9rq6efi68fv (Q269WMZF4MKMNL/Q1E9RQ6EFI68FV): state=`blocked`.
  Scope: env=albertsons; org=6; audience=10684.
  Command: `glcli --env albertsons bifrost pizza --audience-id 10684 --org-id 6`
  Blockers: `missing_run_identity`
- chk_q2ejwg22cer0la_q36fhdw4fq2w9v (Q2EJWG22CER0LA/Q36FHDW4FQ2W9V): state=`healthy_closed`.
  Scope: env=albertsons; org=6; audience=12742.
  Command: `glcli --env albertsons bifrost pizza --audience-id 12742 --org-id 6`
  Run 12742-big_query_4548-webapp__2026-05-13T16:17:21+00:00: health=`healthy`; created=2026-05-13T16:34:21.405087+00:00; snapshotting=snapshotting_finished; export=export_finished; failed=0.
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
- chk_q38jr11g2enk2w_q0hosdajcfxnku (Q38JR11G2ENK2W/Q0HOSDAJCFXNKU): state=`healthy_closed`.
  Scope: env=albertsons; org=6; audience=12875.
  Command: `glcli --env albertsons bifrost pizza --audience-id 12875 --org-id 6`
  Run 12875-live_ramp_activation_4613-scheduled__2026-05-15T00:00:00+00:00: health=`healthy`; created=2026-05-15T05:15:46.851851+00:00; snapshotting=snapshotting_finished; export=export_finished; failed=0.
- chk_q38jr11g2enk2w_q0uj754hnuza0w (Q38JR11G2ENK2W/Q0UJ754HNUZA0W): state=`healthy_closed`.
  Scope: env=albertsons; org=6; audience=12874.
  Command: `glcli --env albertsons bifrost pizza --audience-id 12874 --org-id 6`
  Run 12874-live_ramp_activation_4607-scheduled__2026-05-16T00:00:00+00:00: health=`healthy`; created=2026-05-16T00:33:54.906547+00:00; snapshotting=snapshotting_finished; export=export_finished; failed=0.
- chk_q38jr11g2enk2w_q0uxytqae5seef (Q38JR11G2ENK2W/Q0UXYTQAE5SEEF): state=`healthy_closed`.
  Scope: env=albertsons; org=6; audience=12866.
  Command: `glcli --env albertsons bifrost pizza --audience-id 12866 --org-id 6`
  Run 12866-live_ramp_activation_4608-scheduled__2026-05-16T00:00:00+00:00: health=`healthy`; created=2026-05-16T00:34:44.061844+00:00; snapshotting=snapshotting_finished; export=export_finished; failed=0.
- Showing 10 of 15 checks; see `indexes/checks.json` and `checks/*/check.json` for the full evidence set.

## Recent Evidence

- Albertsons audience failures whose alert-scoped exports are now healthy or complete.
  Source: `oncall-triage`; kind: `tag_grouping`; captured: `2026-05-18T22:09:06.809Z`.

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
