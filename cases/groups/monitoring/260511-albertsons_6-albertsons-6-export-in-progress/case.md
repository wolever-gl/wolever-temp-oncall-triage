<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# albertsons_6 export in progress

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `monitoring`
Tags: `monitoring:export-processing`, `triage:tag_grouped`
Incidents: [Q2EJWG22CER0LA](https://growthloop.pagerduty.com/incidents/Q2EJWG22CER0LA), [Q2T09VCLN9MRZ8](https://growthloop.pagerduty.com/incidents/Q2T09VCLN9MRZ8), [Q38JR11G2ENK2W](https://growthloop.pagerduty.com/incidents/Q38JR11G2ENK2W)
Alerts: 7

## Current Summary

Albertsons audience failures where the latest evidence shows export processing or waiting with no current blocker.

## Alert Scope

- Alert facts: 7 imported, 7 linked to this group.
- Orgs: `albertsons_6`
- Audiences: `11688`, `11820`, `12719`, `12801`, `12810`, `12814`, `12878`
- Destinations: `live_ramp_activation`
- State tuples: `snapshotting_finished/export_processing`
- Commands seen: `glcli --env albertsons bifrost pizza --audience-id 11688 --org-id 6`, `glcli --env albertsons bifrost pizza --audience-id 11820 --org-id 6`, `glcli --env albertsons bifrost pizza --audience-id 12719 --org-id 6`, and 4 more

Representative alerts:
- Q2T09VCLN9MRZ8/Q06RN07M3BVDQB: 2026-05-11T07:40:52-07:00; albertsons_6; audience 12719; live_ramp_activation; snapshotting_finished/export_processing. albertsons (Albertsons Media): Exports for audience 12719 failed with states: <(snapshotting_finished,export_processing)>
  Runs: `12719-live_ramp_activation_4469-webapp__2026-05-07T00:40:33+00:00`
- Q2EJWG22CER0LA/Q2S03JXYQD34WM: 2026-05-12T10:08:23-07:00; albertsons_6; audience 11820. albertsons (Albertsons Media) - Audience 11820: Audience Export failure for 11820 sent to client.
- Q2EJWG22CER0LA/Q311OEQ3IZ6GPG: 2026-05-12T12:10:10-07:00; albertsons_6; audience 11688. albertsons (Albertsons Media) - Audience 11688: Audience Export failure for 11688 sent to client.
- Q2EJWG22CER0LA/Q3U0RMO0GSEU83: 2026-05-12T16:05:54-07:00; albertsons_6; audience 12801. albertsons (Albertsons Media) - Audience 12801: 0 successfull_exports from pizza tracker found 10 minutes after new export
- Q38JR11G2ENK2W/Q2M2BHX98MHZQ4: 2026-05-14T13:39:20-07:00; albertsons_6; audience 12878. albertsons (Albertsons Media) - Audience 12878: 0 successfull_exports from pizza tracker found 10 minutes after new export
- Q38JR11G2ENK2W/Q3WNLOQE86QYWA: 2026-05-15T12:50:16-07:00; albertsons_6; audience 12810. albertsons (Albertsons Media) - Audience 12810: 0 successfull_exports from pizza tracker found 10 minutes after new export
- Q38JR11G2ENK2W/Q0ZDIAGV3OJULA: 2026-05-15T12:51:58-07:00; albertsons_6; audience 12814. albertsons (Albertsons Media) - Audience 12814: 0 successfull_exports from pizza tracker found 10 minutes after new export

## Export Checks

- Checks: 7.
- States: `blocked`=1, `monitoring`=4, `open`=2
- Blockers seen: `evidence_unavailable`, `missing_export_after_alert`

Check evidence:
- chk_q2ejwg22cer0la_q2s03jxyqd34wm (Q2EJWG22CER0LA/Q2S03JXYQD34WM): state=`monitoring`, next_check_at=`2026-05-16T23:25:55.908Z`.
  Scope: env=albertsons; org=6; audience=11820.
  Command: `glcli --env albertsons bifrost pizza --audience-id 11820 --org-id 6`
  Run 11820-live_ramp_activation_3695-scheduled__2026-05-15T00:00:00+00:00: health=`monitoring`; created=2026-05-15T04:29:17.918441+00:00; snapshotting=snapshotting_finished; export=export_processing; failed=0.
- chk_q2ejwg22cer0la_q311oeq3iz6gpg (Q2EJWG22CER0LA/Q311OEQ3IZ6GPG): state=`monitoring`, next_check_at=`2026-05-16T23:25:55.908Z`.
  Scope: env=albertsons; org=6; audience=11688.
  Command: `glcli --env albertsons bifrost pizza --audience-id 11688 --org-id 6`
  Run 11688-live_ramp_activation_3691-scheduled__2026-05-15T00:00:00+00:00: health=`monitoring`; created=2026-05-15T04:26:31.490889+00:00; snapshotting=snapshotting_finished; export=export_processing; failed=0.
- chk_q2ejwg22cer0la_q3u0rmo0gseu83 (Q2EJWG22CER0LA/Q3U0RMO0GSEU83): state=`blocked`.
  Scope: env=albertsons; org=6; audience=12801.
  Command: `glcli --env albertsons bifrost pizza --audience-id 12801 --org-id 6`
  Blockers: `missing_export_after_alert`
- chk_q2t09vcln9mrz8_q06rn07m3bvdqb (Q2T09VCLN9MRZ8/Q06RN07M3BVDQB): state=`monitoring`, next_check_at=`2026-05-16T23:15:27.526Z`.
  Scope: env=albertsons; org=6; audience=12719; endpoint=app_liveramp_activation_44; destination=live_ramp_activation.
  Checked runs: `12719-live_ramp_activation_4469-webapp__2026-05-07T00:40:33+00:00`
  Command: `glcli --env albertsons bifrost pizza --audience-id 12719 --org-id 6`
  Run 12719-live_ramp_activation_4469-webapp__2026-05-07T00:40:33+00:00: health=`monitoring`; created=2026-05-07T00:46:17.756011+00:00; snapshotting=snapshotting_finished; export=export_processing; failed=0.
- chk_q38jr11g2enk2w_q0zdiagv3ojula (Q38JR11G2ENK2W/Q0ZDIAGV3OJULA): state=`monitoring`, next_check_at=`2026-05-16T23:26:07.319Z`.
  Scope: env=albertsons; org=6; audience=12814.
  Command: `glcli --env albertsons bifrost pizza --audience-id 12814 --org-id 6`
  Run 12814-live_ramp_activation_4621-webapp__2026-05-15T19:36:57+00:00: health=`monitoring`; created=2026-05-15T19:52:26.324863+00:00; snapshotting=snapshotting_finished; export=export_processing; failed=0.
- chk_q38jr11g2enk2w_q2m2bhx98mhzq4 (Q38JR11G2ENK2W/Q2M2BHX98MHZQ4): state=`open`, next_check_at=`2026-05-18T20:17:22.257Z`.
  Scope: env=albertsons; org=6; audience=12878.
  Command: `glcli --env albertsons bifrost pizza --audience-id 12878 --org-id 6`
  Blockers: `evidence_unavailable`
- chk_q38jr11g2enk2w_q3wnloqe86qywa (Q38JR11G2ENK2W/Q3WNLOQE86QYWA): state=`open`, next_check_at=`2026-05-18T20:17:22.257Z`.
  Scope: env=albertsons; org=6; audience=12810.
  Command: `glcli --env albertsons bifrost pizza --audience-id 12810 --org-id 6`
  Blockers: `evidence_unavailable`

## Recent Evidence

- Albertsons audience failures where the latest evidence shows export processing or waiting with no current blocker.
  Source: `oncall-triage`; kind: `tag_grouping`; captured: `2026-05-18T22:09:53.777Z`.

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
