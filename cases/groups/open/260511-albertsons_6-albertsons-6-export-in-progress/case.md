<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# albertsons_6 export in progress

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `open`
Tags: `monitoring:export-processing`, `triage:tag_grouped`, `triage:blockers-found`
Incidents: [Q2EJWG22CER0LA](https://growthloop.pagerduty.com/incidents/Q2EJWG22CER0LA), [Q2T09VCLN9MRZ8](https://growthloop.pagerduty.com/incidents/Q2T09VCLN9MRZ8), [Q38JR11G2ENK2W](https://growthloop.pagerduty.com/incidents/Q38JR11G2ENK2W)
Alerts: 16

## Current Summary

Reopened after 2026-06-22 preflight: Albertsons export-in-progress bucket now has blockers. Audience 11688 has failed_export_count/export_error; audiences 8473 and 12801 have missing_export_after_alert. Audiences 11820 and 12719 remain monitoring; several others refreshed to healthy_closed.

## Alert Scope

- Alert facts: 16 imported, 16 linked to this group.
- Orgs: `albertsons_6`
- Audiences: `11688`, `11820`, `12719`, `12742`, `12801`, `12810`, `12814`, `12862`, and 8 more
- Destinations: `live_ramp_activation`
- State tuples: `snapshotting_finished/export_processing`
- Commands seen: `glcli --env albertsons bifrost pizza --audience-id 11688 --org-id 6`, `glcli --env albertsons bifrost pizza --audience-id 11820 --org-id 6`, `glcli --env albertsons bifrost pizza --audience-id 12719 --org-id 6`, and 13 more

Representative alerts:
- Q2T09VCLN9MRZ8/Q06RN07M3BVDQB: 2026-05-11T07:40:52-07:00; albertsons_6; audience 12719; live_ramp_activation; snapshotting_finished/export_processing. albertsons (Albertsons Media): Exports for audience 12719 failed with states: <(snapshotting_finished,export_processing)>
  Runs: `12719-live_ramp_activation_4469-webapp__2026-05-07T00:40:33+00:00`
- Q2EJWG22CER0LA/Q2S03JXYQD34WM: 2026-05-12T10:08:23-07:00; albertsons_6; audience 11820. albertsons (Albertsons Media) - Audience 11820: Audience Export failure for 11820 sent to client.
- Q2EJWG22CER0LA/Q311OEQ3IZ6GPG: 2026-05-12T12:10:10-07:00; albertsons_6; audience 11688. albertsons (Albertsons Media) - Audience 11688: Audience Export failure for 11688 sent to client.
- Q2EJWG22CER0LA/Q3U0RMO0GSEU83: 2026-05-12T16:05:54-07:00; albertsons_6; audience 12801. albertsons (Albertsons Media) - Audience 12801: 0 successfull_exports from pizza tracker found 10 minutes after new export
- Q2EJWG22CER0LA/Q2N69VPQCMRHGL: 2026-05-13T00:18:27-07:00; albertsons_6; audience 8473. albertsons (Albertsons Media) - Audience 8473: Audience Export failure for 8473 sent to client.
- Q2EJWG22CER0LA/Q36FHDW4FQ2W9V: 2026-05-13T09:32:35-07:00; albertsons_6; audience 12742. albertsons (Albertsons Media) - Audience 12742: 0 successfull_exports from pizza tracker found 10 minutes after new export
- Q38JR11G2ENK2W/Q2M2BHX98MHZQ4: 2026-05-14T13:39:20-07:00; albertsons_6; audience 12878. albertsons (Albertsons Media) - Audience 12878: 0 successfull_exports from pizza tracker found 10 minutes after new export
- Q38JR11G2ENK2W/Q3WXBZ7NHK8AJM: 2026-05-14T13:46:42-07:00; albertsons_6; audience 12876. albertsons (Albertsons Media) - Audience 12876: 0 successfull_exports from pizza tracker found 10 minutes after new export
- Q38JR11G2ENK2W/Q0UJ754HNUZA0W: 2026-05-14T13:48:49-07:00; albertsons_6; audience 12874. albertsons (Albertsons Media) - Audience 12874: 0 successfull_exports from pizza tracker found 10 minutes after new export
- Q38JR11G2ENK2W/Q0UXYTQAE5SEEF: 2026-05-14T13:49:56-07:00; albertsons_6; audience 12866. albertsons (Albertsons Media) - Audience 12866: 0 successfull_exports from pizza tracker found 10 minutes after new export
- Showing 10 of 16 alert facts; see `indexes/alert_facts.json` for the full imported set.

## Export Checks

- Checks: 16.
- States: `blocked`=3, `healthy_closed`=11, `monitoring`=2
- Blockers seen: `export_error`, `failed_export_count`, `missing_export_after_alert`

Check evidence:
- chk_q2ejwg22cer0la_q2n69vpqcmrhgl (Q2EJWG22CER0LA/Q2N69VPQCMRHGL): state=`blocked`.
  Scope: env=albertsons; org=6; audience=8473.
  Command: `glcli --env albertsons bifrost pizza --audience-id 8473 --org-id 6`
  Blockers: `missing_export_after_alert`
- chk_q2ejwg22cer0la_q2s03jxyqd34wm (Q2EJWG22CER0LA/Q2S03JXYQD34WM): state=`monitoring`, next_check_at=`2026-06-22T18:09:18.971Z`.
  Scope: env=albertsons; org=6; audience=11820.
  Command: `glcli --env albertsons bifrost pizza --audience-id 11820 --org-id 6`
  Run 11820-live_ramp_activation_3695-scheduled__2026-05-15T00:00:00+00:00: health=`monitoring`; created=2026-05-15T04:29:17.918441+00:00; snapshotting=snapshotting_finished; export=export_processing; failed=0.
- chk_q2ejwg22cer0la_q311oeq3iz6gpg (Q2EJWG22CER0LA/Q311OEQ3IZ6GPG): state=`blocked`.
  Scope: env=albertsons; org=6; audience=11688.
  Command: `glcli --env albertsons bifrost pizza --audience-id 11688 --org-id 6`
  Blockers: `failed_export_count`, `export_error`
  Run 11688-live_ramp_activation_3691-scheduled__2026-06-05T00:00:00+00:00: health=`blocked`; blockers=failed_export_count, export_error; created=2026-06-05T05:34:05.992747+00:00; snapshotting=snapshotting_finished; export=export_error; failed=85298.
- chk_q2ejwg22cer0la_q36fhdw4fq2w9v (Q2EJWG22CER0LA/Q36FHDW4FQ2W9V): state=`healthy_closed`.
  Scope: env=albertsons; org=6; audience=12742.
  Command: `glcli --env albertsons bifrost pizza --audience-id 12742 --org-id 6`
  Run 12742-big_query_4548-webapp__2026-05-13T16:17:21+00:00: health=`healthy`; created=2026-05-13T16:34:21.405087+00:00; snapshotting=snapshotting_finished; export=export_finished; failed=0.
- chk_q2ejwg22cer0la_q3u0rmo0gseu83 (Q2EJWG22CER0LA/Q3U0RMO0GSEU83): state=`blocked`.
  Scope: env=albertsons; org=6; audience=12801.
  Command: `glcli --env albertsons bifrost pizza --audience-id 12801 --org-id 6`
  Blockers: `missing_export_after_alert`
- chk_q2t09vcln9mrz8_q06rn07m3bvdqb (Q2T09VCLN9MRZ8/Q06RN07M3BVDQB): state=`monitoring`, next_check_at=`2026-06-22T18:09:18.971Z`.
  Scope: env=albertsons; org=6; audience=12719; endpoint=app_liveramp_activation_44; destination=live_ramp_activation.
  Checked runs: `12719-live_ramp_activation_4469-webapp__2026-05-07T00:40:33+00:00`
  Command: `glcli --env albertsons bifrost pizza --audience-id 12719 --org-id 6`
  Run 12719-live_ramp_activation_4469-webapp__2026-05-07T00:40:33+00:00: health=`monitoring`; created=2026-05-07T00:46:17.756011+00:00; snapshotting=snapshotting_finished; export=export_processing; failed=0.
- chk_q38jr11g2enk2w_q0uj754hnuza0w (Q38JR11G2ENK2W/Q0UJ754HNUZA0W): state=`healthy_closed`.
  Scope: env=albertsons; org=6; audience=12874.
  Command: `glcli --env albertsons bifrost pizza --audience-id 12874 --org-id 6`
  Run 12874-live_ramp_activation_4607-scheduled__2026-05-16T00:00:00+00:00: health=`healthy`; created=2026-05-16T00:33:54.906547+00:00; snapshotting=snapshotting_finished; export=export_finished; failed=0.
- chk_q38jr11g2enk2w_q0uxytqae5seef (Q38JR11G2ENK2W/Q0UXYTQAE5SEEF): state=`healthy_closed`.
  Scope: env=albertsons; org=6; audience=12866.
  Command: `glcli --env albertsons bifrost pizza --audience-id 12866 --org-id 6`
  Run 12866-live_ramp_activation_4608-scheduled__2026-05-16T00:00:00+00:00: health=`healthy`; created=2026-05-16T00:34:44.061844+00:00; snapshotting=snapshotting_finished; export=export_finished; failed=0.
- chk_q38jr11g2enk2w_q0zdiagv3ojula (Q38JR11G2ENK2W/Q0ZDIAGV3OJULA): state=`healthy_closed`.
  Scope: env=albertsons; org=6; audience=12814.
  Command: `glcli --env albertsons bifrost pizza --audience-id 12814 --org-id 6`
  Run 12814-live_ramp_activation_4621-scheduled__2026-06-19T00:00:00+00:00: health=`healthy`; created=2026-06-19T03:17:18.441830+00:00; snapshotting=snapshotting_finished; export=export_finished; failed=0.
- chk_q38jr11g2enk2w_q1qonb2zkns7pv (Q38JR11G2ENK2W/Q1QONB2ZKNS7PV): state=`healthy_closed`.
  Scope: env=albertsons; org=6; audience=12875.
  Command: `glcli --env albertsons bifrost pizza --audience-id 12875 --org-id 6`
  Run 12875-live_ramp_activation_4613-scheduled__2026-05-15T00:00:00+00:00: health=`healthy`; created=2026-05-15T05:15:46.851851+00:00; snapshotting=snapshotting_finished; export=export_finished; failed=0.
- Showing 10 of 16 checks; see `indexes/checks.json` and `checks/*/check.json` for the full evidence set.

## Recent Evidence

- Albertsons audience failures where the latest evidence shows export processing or waiting with no current blocker.
  Source: `oncall-triage`; kind: `tag_grouping`; captured: `2026-05-18T22:09:53.777Z`.

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
