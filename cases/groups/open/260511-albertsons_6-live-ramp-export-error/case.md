<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# albertsons_6 live-ramp export-error

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `open`
Tags: `triage:needs_review`
Incidents: [Q2T09VCLN9MRZ8](https://growthloop.pagerduty.com/incidents/Q2T09VCLN9MRZ8)
Alerts: 142

## Current Summary

albertsons (Albertsons Media): Exports for audience 12632 failed with states: <(snapshotting_finished,export_error)>

## Alert Scope

- Alert facts: 142 imported, 142 linked to this group.
- Orgs: `albertsons_6`
- Audiences: `10114`, `10115`, `10159`, `10160`, `10161`, `10162`, `10163`, `10371`, and 134 more
- Destinations: `live_ramp_activation`
- State tuples: `snapshotting_finished/export_error`
- Commands seen: `glcli --env albertsons bifrost pizza --audience-id 10114 --org-id 6`, `glcli --env albertsons bifrost pizza --audience-id 10115 --org-id 6`, `glcli --env albertsons bifrost pizza --audience-id 10159 --org-id 6`, and 139 more

Representative alerts:
- Q2T09VCLN9MRZ8/Q3UYBIHWE25WN7: 2026-05-11T07:31:34-07:00; albertsons_6; audience 2286; live_ramp_activation; snapshotting_finished/export_error. albertsons (Albertsons Media): Exports for audience 2286 failed with states: <(snapshotting_finished,export_error)>
  Runs: `2286-live_ramp_activation_773-manual__2026-05-06T18:09:59+00:00`, `2286-live_ramp_activation_773-scheduled__2026-05-06T00:00:00+00:00`
- Q2T09VCLN9MRZ8/Q1XDWYZX8SNHMQ: 2026-05-11T07:31:36-07:00; albertsons_6; audience 2296; live_ramp_activation; snapshotting_finished/export_error. albertsons (Albertsons Media): Exports for audience 2296 failed with states: <(snapshotting_finished,export_error)>
  Runs: `2296-live_ramp_activation_782-manual__2026-05-06T18:09:59+00:00`, `2296-live_ramp_activation_782-scheduled__2026-05-06T00:00:00+00:00`
- Q2T09VCLN9MRZ8/Q3B4J5QDCUZBAL: 2026-05-11T07:31:37-07:00; albertsons_6; audience 2300; live_ramp_activation; snapshotting_finished/export_error. albertsons (Albertsons Media): Exports for audience 2300 failed with states: <(snapshotting_finished,export_error)>
  Runs: `2300-live_ramp_activation_786-manual__2026-05-06T18:09:59+00:00`, `2300-live_ramp_activation_786-scheduled__2026-05-06T00:00:00+00:00`
- Q2T09VCLN9MRZ8/Q1EXKPRPG7WVIQ: 2026-05-11T07:31:41-07:00; albertsons_6; audience 2329; live_ramp_activation; snapshotting_finished/export_error. albertsons (Albertsons Media): Exports for audience 2329 failed with states: <(snapshotting_finished,export_error)>
  Runs: `2329-live_ramp_activation_810-manual__2026-05-06T18:09:59+00:00`, `2329-live_ramp_activation_810-scheduled__2026-05-06T00:00:00+00:00`
- Q2T09VCLN9MRZ8/Q2A3KJHFOR4QK7: 2026-05-11T07:31:43-07:00; albertsons_6; audience 2338; live_ramp_activation; snapshotting_finished/export_error. albertsons (Albertsons Media): Exports for audience 2338 failed with states: <(snapshotting_finished,export_error)>
  Runs: `2338-live_ramp_activation_818-manual__2026-05-06T18:09:59+00:00`, `2338-live_ramp_activation_818-scheduled__2026-05-06T00:00:00+00:00`
- Q2T09VCLN9MRZ8/Q0JTGRKR4GMPUI: 2026-05-11T07:31:44-07:00; albertsons_6; audience 2342; live_ramp_activation; snapshotting_finished/export_error. albertsons (Albertsons Media): Exports for audience 2342 failed with states: <(snapshotting_finished,export_error)>
  Runs: `2342-live_ramp_activation_821-manual__2026-05-06T18:09:59+00:00`, `2342-live_ramp_activation_821-scheduled__2026-05-06T00:00:00+00:00`
- Q2T09VCLN9MRZ8/Q1QE1JBE2CXHZS: 2026-05-11T07:31:48-07:00; albertsons_6; audience 2482; live_ramp_activation; snapshotting_finished/export_error. albertsons (Albertsons Media): Exports for audience 2482 failed with states: <(snapshotting_finished,export_error)>
  Runs: `2482-live_ramp_activation_1680-manual__2026-05-06T18:09:59+00:00`, `2482-live_ramp_activation_1680-scheduled__2026-05-06T00:00:00+00:00`
- Q2T09VCLN9MRZ8/Q2J28ZM2RBBAUD: 2026-05-11T07:31:48-07:00; albertsons_6; audience 2453; live_ramp_activation; snapshotting_finished/export_error. albertsons (Albertsons Media): Exports for audience 2453 failed with states: <(snapshotting_finished,export_error)>
  Runs: `2453-live_ramp_activation_1651-manual__2026-05-06T18:09:59+00:00`, `2453-live_ramp_activation_1651-scheduled__2026-05-06T00:00:00+00:00`
- Q2T09VCLN9MRZ8/Q2ZWKOCNJAZPEK: 2026-05-11T07:31:55-07:00; albertsons_6; audience 2718; live_ramp_activation; snapshotting_finished/export_error. albertsons (Albertsons Media): Exports for audience 2718 failed with states: <(snapshotting_finished,export_error)>
  Runs: `2718-live_ramp_activation_1529-manual__2026-05-06T18:09:59+00:00`, `2718-live_ramp_activation_1529-scheduled__2026-05-06T00:00:00+00:00`
- Q2T09VCLN9MRZ8/Q0G1RKF7QL5P6Z: 2026-05-11T07:32:07-07:00; albertsons_6; audience 2971; live_ramp_activation; snapshotting_finished/export_error. albertsons (Albertsons Media): Exports for audience 2971 failed with states: <(snapshotting_finished,export_error)>
  Runs: `2971-live_ramp_activation_1030-manual__2026-05-06T18:09:59+00:00`, `2971-live_ramp_activation_1030-scheduled__2026-05-06T00:00:00+00:00`
- Showing 10 of 142 alert facts; see `indexes/alert_facts.json` for the full imported set.

## Export Checks

- Checks: 142.
- States: `blocked`=139, `open`=3
- Proposed states: `healthy_closed`=3
- Blockers seen: `export_error`, `failed_export_count`

Check evidence:
- chk_q2t09vcln9mrz8_q021l6ap2apagl (Q2T09VCLN9MRZ8/Q021L6AP2APAGL): state=`blocked`.
  Scope: env=albertsons; org=6; audience=8234; endpoint=app_liveramp_activation_26; destination=live_ramp_activation.
  Checked runs: `8234-live_ramp_activation_1502-scheduled__2026-05-06T00:00:00+00:00`, `8234-live_ramp_activation_1502-manual__2026-05-06T18:09:59+00:00`
  Command: `glcli --env albertsons bifrost pizza --audience-id 8234 --org-id 6`
  Blockers: `failed_export_count`, `export_error`
  Run 8234-live_ramp_activation_1502-scheduled__2026-05-06T00:00:00+00:00: health=`blocked`; blockers=failed_export_count, export_error; created=2026-05-06T02:21:06.223716+00:00; snapshotting=snapshotting_finished; export=export_error; failed=1106288.
  Run 8234-live_ramp_activation_1502-manual__2026-05-06T18:09:59+00:00: health=`healthy`; created=2026-05-06T20:10:25.923406+00:00; snapshotting=snapshotting_finished; export=export_finished; failed=0.
- chk_q2t09vcln9mrz8_q038i3b09ye6gy (Q2T09VCLN9MRZ8/Q038I3B09YE6GY): state=`blocked`.
  Scope: env=albertsons; org=6; audience=9713; endpoint=app_liveramp_activation_26; destination=live_ramp_activation.
  Checked runs: `9713-live_ramp_activation_1990-scheduled__2026-05-06T00:00:00+00:00`, `9713-live_ramp_activation_1990-manual__2026-05-06T18:09:59+00:00`
  Command: `glcli --env albertsons bifrost pizza --audience-id 9713 --org-id 6`
  Blockers: `failed_export_count`, `export_error`
  Run 9713-live_ramp_activation_1990-scheduled__2026-05-06T00:00:00+00:00: health=`blocked`; blockers=failed_export_count, export_error; created=2026-05-06T01:09:42.015449+00:00; snapshotting=snapshotting_finished; export=export_error; failed=921075.
  Run 9713-live_ramp_activation_1990-manual__2026-05-06T18:09:59+00:00: health=`healthy`; created=2026-05-06T21:31:30.252382+00:00; snapshotting=snapshotting_finished; export=export_finished; failed=0.
- chk_q2t09vcln9mrz8_q03muyn299jhh1 (Q2T09VCLN9MRZ8/Q03MUYN299JHH1): state=`blocked`.
  Scope: env=albertsons; org=6; audience=11084; endpoint=app_liveramp_activation_26; destination=live_ramp_activation.
  Checked runs: `11084-live_ramp_activation_3018-scheduled__2026-05-06T00:00:00+00:00`, `11084-live_ramp_activation_3018-manual__2026-05-06T18:09:59+00:00`
  Command: `glcli --env albertsons bifrost pizza --audience-id 11084 --org-id 6`
  Blockers: `failed_export_count`, `export_error`
  Run 11084-live_ramp_activation_3018-scheduled__2026-05-06T00:00:00+00:00: health=`blocked`; blockers=failed_export_count, export_error; created=2026-05-06T00:51:12.270541+00:00; snapshotting=snapshotting_finished; export=export_error; failed=2638485.
  Run 11084-live_ramp_activation_3018-manual__2026-05-06T18:09:59+00:00: health=`healthy`; created=2026-05-06T22:08:50.024712+00:00; snapshotting=snapshotting_finished; export=export_finished; failed=0.
- chk_q2t09vcln9mrz8_q056yr2v45hvqt (Q2T09VCLN9MRZ8/Q056YR2V45HVQT): state=`blocked`.
  Scope: env=albertsons; org=6; audience=3004; endpoint=app_liveramp_activation_26; destination=live_ramp_activation.
  Checked runs: `3004-live_ramp_activation_1063-scheduled__2026-05-06T00:00:00+00:00`, `3004-live_ramp_activation_1063-manual__2026-05-06T18:09:59+00:00`
  Command: `glcli --env albertsons bifrost pizza --audience-id 3004 --org-id 6`
  Blockers: `failed_export_count`, `export_error`
  Run 3004-live_ramp_activation_1063-scheduled__2026-05-06T00:00:00+00:00: health=`blocked`; blockers=failed_export_count, export_error; created=2026-05-06T02:08:37.369801+00:00; snapshotting=snapshotting_finished; export=export_error; failed=329779.
  Run 3004-live_ramp_activation_1063-manual__2026-05-06T18:09:59+00:00: health=`healthy`; created=2026-05-06T19:17:02.061360+00:00; snapshotting=snapshotting_finished; export=export_finished; failed=0.
- chk_q2t09vcln9mrz8_q063rxzwef8tvx (Q2T09VCLN9MRZ8/Q063RXZWEF8TVX): state=`blocked`.
  Scope: env=albertsons; org=6; audience=11088; endpoint=app_liveramp_activation_26; destination=live_ramp_activation.
  Checked runs: `11088-live_ramp_activation_3015-scheduled__2026-05-06T00:00:00+00:00`, `11088-live_ramp_activation_3015-webapp__2026-05-06T06:59:16+00:00`, `11088-live_ramp_activation_3015-manual__2026-05-06T18:09:59+00:00`
  Command: `glcli --env albertsons bifrost pizza --audience-id 11088 --org-id 6`
  Blockers: `failed_export_count`, `export_error`
  Run 11088-live_ramp_activation_3015-scheduled__2026-05-06T00:00:00+00:00: health=`blocked`; blockers=failed_export_count, export_error; created=2026-05-06T00:48:19.878784+00:00; snapshotting=snapshotting_finished; export=export_error; failed=283241.
  Run 11088-live_ramp_activation_3015-webapp__2026-05-06T06:59:16+00:00: health=`healthy`; created=2026-05-06T07:01:31.812171+00:00; snapshotting=snapshotting_finished; export=export_finished; failed=0.
  Run 11088-live_ramp_activation_3015-manual__2026-05-06T18:09:59+00:00: health=`healthy`; created=2026-05-06T22:11:01.571963+00:00; snapshotting=snapshotting_finished; export=export_finished; failed=0.
- chk_q2t09vcln9mrz8_q07c3len60cx36 (Q2T09VCLN9MRZ8/Q07C3LEN60CX36): state=`blocked`.
  Scope: env=albertsons; org=6; audience=10114; endpoint=app_liveramp_activation_26; destination=live_ramp_activation.
  Checked runs: `10114-live_ramp_activation_3016-scheduled__2026-05-06T00:00:00+00:00`, `10114-live_ramp_activation_3016-manual__2026-05-06T18:09:59+00:00`
  Command: `glcli --env albertsons bifrost pizza --audience-id 10114 --org-id 6`
  Blockers: `failed_export_count`, `export_error`
  Run 10114-live_ramp_activation_3016-scheduled__2026-05-06T00:00:00+00:00: health=`blocked`; blockers=failed_export_count, export_error; created=2026-05-06T01:08:29.552635+00:00; snapshotting=snapshotting_finished; export=export_error; failed=470658.
  Run 10114-live_ramp_activation_3016-manual__2026-05-06T18:09:59+00:00: health=`healthy`; created=2026-05-06T21:35:53.462931+00:00; snapshotting=snapshotting_finished; export=export_finished; failed=0.
- chk_q2t09vcln9mrz8_q08joks4asyocl (Q2T09VCLN9MRZ8/Q08JOKS4ASYOCL): state=`blocked`.
  Scope: env=albertsons; org=6; audience=8458; endpoint=app_liveramp_activation_26; destination=live_ramp_activation.
  Checked runs: `8458-live_ramp_activation_1635-scheduled__2026-05-06T00:00:00+00:00`, `8458-live_ramp_activation_1635-manual__2026-05-06T18:09:59+00:00`
  Command: `glcli --env albertsons bifrost pizza --audience-id 8458 --org-id 6`
  Blockers: `failed_export_count`, `export_error`
  Run 8458-live_ramp_activation_1635-scheduled__2026-05-06T00:00:00+00:00: health=`blocked`; blockers=failed_export_count, export_error; created=2026-05-06T01:49:40.725505+00:00; snapshotting=snapshotting_finished; export=export_error; failed=131553.
  Run 8458-live_ramp_activation_1635-manual__2026-05-06T18:09:59+00:00: health=`healthy`; created=2026-05-06T20:31:13.420872+00:00; snapshotting=snapshotting_finished; export=export_finished; failed=0.
- chk_q2t09vcln9mrz8_q098j72ia9y0w2 (Q2T09VCLN9MRZ8/Q098J72IA9Y0W2): state=`blocked`.
  Scope: env=albertsons; org=6; audience=6709; endpoint=app_liveramp_activation_26; destination=live_ramp_activation.
  Checked runs: `6709-live_ramp_activation_1504-scheduled__2026-05-06T00:00:00+00:00`, `6709-live_ramp_activation_1504-manual__2026-05-06T18:09:59+00:00`
  Command: `glcli --env albertsons bifrost pizza --audience-id 6709 --org-id 6`
  Blockers: `failed_export_count`, `export_error`
  Run 6709-live_ramp_activation_1504-scheduled__2026-05-06T00:00:00+00:00: health=`blocked`; blockers=failed_export_count, export_error; created=2026-05-06T01:25:47.953451+00:00; snapshotting=snapshotting_finished; export=export_error; failed=500523.
  Run 6709-live_ramp_activation_1504-manual__2026-05-06T18:09:59+00:00: health=`healthy`; created=2026-05-06T19:42:09.315984+00:00; snapshotting=snapshotting_finished; export=export_finished; failed=0.
- chk_q2t09vcln9mrz8_q0cg1xz64mrou1 (Q2T09VCLN9MRZ8/Q0CG1XZ64MROU1): state=`open`, proposed=`healthy_closed`.
  Scope: env=albertsons; org=6; audience=6696; endpoint=app_liveramp_activation_26; destination=live_ramp_activation.
  Checked runs: `6696-live_ramp_activation_1341-scheduled__2026-05-06T00:00:00+00:00`, `6696-live_ramp_activation_1341-scheduled__2026-05-06T00:00:00+00:00`, `6696-live_ramp_activation_1341-webapp__2026-05-06T06:51:50+00:00`, `6696-live_ramp_activation_1341-manual__2026-05-06T18:09:59+00:00`
  Command: `glcli --env albertsons bifrost pizza --audience-id 6696 --org-id 6`
  Run 6696-live_ramp_activation_1341-scheduled__2026-05-06T00:00:00+00:00: health=`healthy`; created=2026-05-06T02:14:37.140714+00:00; snapshotting=snapshotting_finished; export=export_finished; failed=0.
  Run 6696-live_ramp_activation_1341-scheduled__2026-05-06T00:00:00+00:00: health=`healthy`; created=2026-05-06T02:14:37.140714+00:00; snapshotting=snapshotting_finished; export=export_finished; failed=0.
  Run 6696-live_ramp_activation_1341-webapp__2026-05-06T06:51:50+00:00: health=`healthy`; created=2026-05-06T06:53:32.088305+00:00; snapshotting=snapshotting_finished; export=export_finished; failed=0.
  Run 6696-live_ramp_activation_1341-manual__2026-05-06T18:09:59+00:00: health=`healthy`; created=2026-05-06T19:33:31.016232+00:00; snapshotting=snapshotting_finished; export=export_finished; failed=0.
- chk_q2t09vcln9mrz8_q0d481heep5gmn (Q2T09VCLN9MRZ8/Q0D481HEEP5GMN): state=`blocked`.
  Scope: env=albertsons; org=6; audience=6783; endpoint=app_liveramp_activation_26; destination=live_ramp_activation.
  Checked runs: `6783-live_ramp_activation_1355-scheduled__2026-05-06T00:00:00+00:00`, `6783-live_ramp_activation_1355-manual__2026-05-06T18:09:59+00:00`
  Command: `glcli --env albertsons bifrost pizza --audience-id 6783 --org-id 6`
  Blockers: `failed_export_count`, `export_error`
  Run 6783-live_ramp_activation_1355-scheduled__2026-05-06T00:00:00+00:00: health=`blocked`; blockers=failed_export_count, export_error; created=2026-05-06T02:17:03.438680+00:00; snapshotting=snapshotting_finished; export=export_error; failed=269046.
  Run 6783-live_ramp_activation_1355-manual__2026-05-06T18:09:59+00:00: health=`healthy`; created=2026-05-06T19:49:26.241814+00:00; snapshotting=snapshotting_finished; export=export_finished; failed=0.
- Showing 10 of 142 checks; see `indexes/checks.json` and `checks/*/check.json` for the full evidence set.

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
