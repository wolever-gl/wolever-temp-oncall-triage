# chghealthcare_395 no-batches

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `open`
Tags: `triage:needs_review`
Incidents: [Q064V2C56CNTCR](https://growthloop.pagerduty.com/incidents/Q064V2C56CNTCR)
Alerts: 174

## Current Summary

chghealthcare (TESTING): Exports for signal 341 failed with states: <(snapshotting_finished,no_batches)>

## Alert Scope

- Alert facts: 174 imported, 174 linked to this group.
- Orgs: `chghealthcare_395`
- Audiences: `11189`, `11347`, `11592`, `12011`, `13605`, `14103`, `15667`, `15710`, and 166 more
- Destinations: `facebook`, `google_adwords`, `linkedin_ads`, `marketing_cloud`, `marketing_cloud_object`, `pulse_point`, `snowflake`
- State tuples: `snapshotting_finished/no_batches`
- Commands seen: `glcli --env prod bifrost pizza --audience-id 11189 --org-id 395`, `glcli --env prod bifrost pizza --audience-id 11347 --org-id 395`, `glcli --env prod bifrost pizza --audience-id 11592 --org-id 395`, and 171 more

Representative alerts:
- Q064V2C56CNTCR/Q06HB0PXWE7TLR: 2026-05-14T07:30:05-07:00; chghealthcare_395; audience 11189; marketing_cloud; snapshotting_finished/no_batches. chghealthcare (TESTING): Exports for audience 11189 failed with states: <(snapshotting_finished,no_batches)>
  Runs: `11189-marketing_cloud_7771-scheduled__2026-05-13T23:00:00+00:00`
- Q064V2C56CNTCR/Q14JV74LR94ZQ3: 2026-05-14T07:30:09-07:00; chghealthcare_395; audience 11347; marketing_cloud; snapshotting_finished/no_batches. chghealthcare (Weatherby Healthcare): Exports for audience 11347 failed with states: <(snapshotting_finished,no_batches)>
  Runs: `11347-marketing_cloud_8093-scheduled__2026-05-13T23:00:00+00:00`
- Q064V2C56CNTCR/Q25J2A8ERIRDFM: 2026-05-14T07:30:21-07:00; chghealthcare_395; audience 11592; marketing_cloud; snapshotting_finished/no_batches. chghealthcare (TESTING): Exports for audience 11592 failed with states: <(snapshotting_finished,no_batches)>
  Runs: `11592-marketing_cloud_8023-scheduled__2026-05-13T23:00:00+00:00`
- Q064V2C56CNTCR/Q104AANULUMQHE: 2026-05-14T07:30:22-07:00; chghealthcare_395; audience 12011; marketing_cloud; snapshotting_finished/no_batches. chghealthcare (TESTING): Exports for audience 12011 failed with states: <(snapshotting_finished,no_batches)>
  Runs: `12011-marketing_cloud_8042-scheduled__2026-05-13T23:00:00+00:00`
- Q064V2C56CNTCR/Q1T129KSH11UUQ: 2026-05-14T07:30:32-07:00; chghealthcare_395; audience 13605; marketing_cloud; snapshotting_finished/no_batches. chghealthcare (Weatherby Healthcare): Exports for audience 13605 failed with states: <(snapshotting_finished,no_batches)>
  Runs: `13605-marketing_cloud_8910-scheduled__2026-05-13T23:00:00+00:00`
- Q064V2C56CNTCR/Q2LLYLBLRCBOQ6: 2026-05-14T07:30:37-07:00; chghealthcare_395; audience 14103; facebook; snapshotting_finished/no_batches. chghealthcare (Weatherby Healthcare): Exports for audience 14103 failed with states: <(snapshotting_finished,no_batches)>
  Runs: `14103-facebook_9221-scheduled__2026-05-13T23:00:00+00:00`, `14103-facebook_9408-scheduled__2026-05-13T23:00:00+00:00`, `14103-linkedin_ads_9223-scheduled__2026-05-13T23:00:00+00:00`
- Q064V2C56CNTCR/Q2E3K7Q27JBEPC: 2026-05-14T07:31:02-07:00; chghealthcare_395; audience 15667; marketing_cloud; snapshotting_finished/no_batches. chghealthcare (Marketing Cloud - Transactional): Exports for audience 15667 failed with states: <(snapshotting_finished,no_batches)>
  Runs: `15667-marketing_cloud_10202-scheduled__2026-05-13T23:00:00+00:00`
- Q064V2C56CNTCR/Q038EFZ7HTAKIP: 2026-05-14T07:31:06-07:00; chghealthcare_395; audience 15710; marketing_cloud; snapshotting_finished/no_batches. chghealthcare (Marketing Cloud - Transactional): Exports for audience 15710 failed with states: <(snapshotting_finished,no_batches)>
  Runs: `15710-marketing_cloud_10218-scheduled__2026-05-13T23:00:00+00:00`
- Q064V2C56CNTCR/Q2GKKNKZ6XFX7G: 2026-05-14T07:31:09-07:00; chghealthcare_395; audience 15711; marketing_cloud; snapshotting_finished/no_batches. chghealthcare (Marketing Cloud - Transactional): Exports for audience 15711 failed with states: <(snapshotting_finished,no_batches)>
  Runs: `15711-marketing_cloud_10219-scheduled__2026-05-13T23:00:00+00:00`
- Q064V2C56CNTCR/Q0ZHQY7FCE3R0Y: 2026-05-14T07:31:13-07:00; chghealthcare_395; audience 15712; marketing_cloud; snapshotting_finished/no_batches. chghealthcare (Marketing Cloud - Transactional): Exports for audience 15712 failed with states: <(snapshotting_finished,no_batches)>
  Runs: `15712-marketing_cloud_10221-scheduled__2026-05-13T23:00:00+00:00`
- Showing 10 of 174 alert facts; see `indexes/alert_facts.json` for the full imported set.

## Export Checks

- Checks: 174.
- States: `blocked`=26, `open`=148
- Proposed states: `healthy_closed`=148
- Blockers seen: `destination_mismatch`, `failed_export_count`

Check evidence:
- chk_q064v2c56cntcr_q01q2gj9ws4qwx (Q064V2C56CNTCR/Q01Q2GJ9WS4QWX): state=`open`, proposed=`healthy_closed`.
  Scope: env=prod; org=395; audience=34618; destination=snowflake.
  Checked runs: `34618-snowflake_21168-scheduled__2026-05-13T23:00:00+00:00`
  Command: `glcli --env prod bifrost pizza --audience-id 34618 --org-id 395`
  Run 34618-snowflake_21168-scheduled__2026-05-13T23:00:00+00:00: health=`healthy`; created=2026-05-14T00:10:06.645721+00:00; snapshotting=snapshotting_finished; export=export_finished; failed=0.
- chk_q064v2c56cntcr_q01realy7pgfux (Q064V2C56CNTCR/Q01REALY7PGFUX): state=`open`, proposed=`healthy_closed`.
  Scope: env=prod; org=395; audience=28128; destination=snowflake.
  Checked runs: `28128-snowflake_20024-scheduled__2026-05-13T23:00:00+00:00`
  Command: `glcli --env prod bifrost pizza --audience-id 28128 --org-id 395`
  Run 28128-snowflake_20024-scheduled__2026-05-13T23:00:00+00:00: health=`healthy`; created=2026-05-13T23:42:55.971561+00:00; snapshotting=snapshotting_finished; export=export_finished; failed=0.
- chk_q064v2c56cntcr_q024wdwuq24e10 (Q064V2C56CNTCR/Q024WDWUQ24E10): state=`open`, proposed=`healthy_closed`.
  Scope: env=prod; org=395; audience=34240; destination=snowflake.
  Checked runs: `34240-snowflake_20938-scheduled__2026-05-13T23:00:00+00:00`
  Command: `glcli --env prod bifrost pizza --audience-id 34240 --org-id 395`
  Run 34240-snowflake_20938-scheduled__2026-05-13T23:00:00+00:00: health=`healthy`; created=2026-05-14T00:07:26.964118+00:00; snapshotting=snapshotting_finished; export=export_finished; failed=0.
- chk_q064v2c56cntcr_q02o1u4aoth9fg (Q064V2C56CNTCR/Q02O1U4AOTH9FG): state=`open`, proposed=`healthy_closed`.
  Scope: env=prod; org=395; audience=32222; destination=snowflake.
  Checked runs: `32222-snowflake_19835-scheduled__2026-05-13T23:00:00+00:00`
  Command: `glcli --env prod bifrost pizza --audience-id 32222 --org-id 395`
  Run 32222-snowflake_19835-scheduled__2026-05-13T23:00:00+00:00: health=`healthy`; created=2026-05-14T00:00:12.662210+00:00; snapshotting=snapshotting_finished; export=export_finished; failed=0.
- chk_q064v2c56cntcr_q032369n84snwe (Q064V2C56CNTCR/Q032369N84SNWE): state=`open`, proposed=`healthy_closed`.
  Scope: env=prod; org=395; audience=34359; destination=snowflake.
  Checked runs: `34359-snowflake_20972-scheduled__2026-05-13T23:00:00+00:00`
  Command: `glcli --env prod bifrost pizza --audience-id 34359 --org-id 395`
  Run 34359-snowflake_20972-scheduled__2026-05-13T23:00:00+00:00: health=`healthy`; created=2026-05-14T00:03:23.941478+00:00; snapshotting=snapshotting_finished; export=export_finished; failed=0.
- chk_q064v2c56cntcr_q038efz7htakip (Q064V2C56CNTCR/Q038EFZ7HTAKIP): state=`open`, proposed=`healthy_closed`.
  Scope: env=prod; org=395; audience=15710; destination=marketing_cloud.
  Checked runs: `15710-marketing_cloud_10218-scheduled__2026-05-13T23:00:00+00:00`
  Command: `glcli --env prod bifrost pizza --audience-id 15710 --org-id 395`
  Run 15710-marketing_cloud_10218-scheduled__2026-05-13T23:00:00+00:00: health=`healthy`; created=2026-05-13T23:24:29.675040+00:00; snapshotting=snapshotting_finished; export=export_finished; failed=0.
- chk_q064v2c56cntcr_q04j7tfoue7x0j (Q064V2C56CNTCR/Q04J7TFOUE7X0J): state=`open`, proposed=`healthy_closed`.
  Scope: env=prod; org=395; audience=32727; destination=snowflake.
  Checked runs: `32727-snowflake_20079-scheduled__2026-05-13T23:00:00+00:00`
  Command: `glcli --env prod bifrost pizza --audience-id 32727 --org-id 395`
  Run 32727-snowflake_20079-scheduled__2026-05-13T23:00:00+00:00: health=`healthy`; created=2026-05-14T00:08:56.198644+00:00; snapshotting=snapshotting_finished; export=export_finished; failed=0.
- chk_q064v2c56cntcr_q04jzbnjrdzjer (Q064V2C56CNTCR/Q04JZBNJRDZJER): state=`blocked`.
  Scope: env=prod; org=395; audience=31726; destination=pulse_point.
  Checked runs: `31726-pulse_point_19520-scheduled__2026-05-13T23:00:00+00:00`, `31726-snowflake_19519-scheduled__2026-05-13T23:00:00+00:00`
  Command: `glcli --env prod bifrost pizza --audience-id 31726 --org-id 395`
  Blockers: `destination_mismatch`
  Run 31726-pulse_point_19520-scheduled__2026-05-13T23:00:00+00:00: health=`healthy`; created=2026-05-13T23:55:37.481057+00:00; snapshotting=snapshotting_finished; export=export_finished; failed=0.
  Run 31726-snowflake_19519-scheduled__2026-05-13T23:00:00+00:00: health=`blocked`; blockers=destination_mismatch; created=2026-05-13T23:55:44.314152+00:00; snapshotting=snapshotting_finished; export=export_finished; failed=0.
- chk_q064v2c56cntcr_q04qppo67t1tme (Q064V2C56CNTCR/Q04QPPO67T1TME): state=`blocked`.
  Scope: env=prod; org=395; audience=21184; destination=pulse_point.
  Checked runs: `21184-pulse_point_13454-scheduled__2026-05-13T23:00:00+00:00`, `21184-google_adwords_13456-scheduled__2026-05-13T23:00:00+00:00`, `21184-facebook_13489-scheduled__2026-05-13T23:00:00+00:00`, `21184-linkedin_ads_13538-scheduled__2026-05-13T23:00:00+00:00`
  Command: `glcli --env prod bifrost pizza --audience-id 21184 --org-id 395`
  Blockers: `destination_mismatch`, `destination_mismatch`, `destination_mismatch`
  Run 21184-pulse_point_13454-scheduled__2026-05-13T23:00:00+00:00: health=`healthy`; created=2026-05-13T23:28:24.930659+00:00; snapshotting=snapshotting_finished; export=export_finished; failed=0.
  Run 21184-google_adwords_13456-scheduled__2026-05-13T23:00:00+00:00: health=`blocked`; blockers=destination_mismatch; created=2026-05-13T23:28:24.898494+00:00; snapshotting=snapshotting_finished; export=export_finished; failed=0.
  Run 21184-facebook_13489-scheduled__2026-05-13T23:00:00+00:00: health=`blocked`; blockers=destination_mismatch; created=2026-05-13T23:28:24.797393+00:00; snapshotting=snapshotting_finished; export=export_finished; failed=0.
  Run 21184-linkedin_ads_13538-scheduled__2026-05-13T23:00:00+00:00: health=`blocked`; blockers=destination_mismatch; created=2026-05-13T23:28:24.956452+00:00; snapshotting=snapshotting_finished; export=export_finished; failed=0.
- chk_q064v2c56cntcr_q04tizn9dlevz2 (Q064V2C56CNTCR/Q04TIZN9DLEVZ2): state=`open`, proposed=`healthy_closed`.
  Scope: env=prod; org=395; audience=35065; destination=snowflake.
  Checked runs: `35065-snowflake_21280-scheduled__2026-05-13T23:00:00+00:00`
  Command: `glcli --env prod bifrost pizza --audience-id 35065 --org-id 395`
  Run 35065-snowflake_21280-scheduled__2026-05-13T23:00:00+00:00: health=`healthy`; created=2026-05-14T00:10:45.040238+00:00; snapshotting=snapshotting_finished; export=export_finished; failed=0.
- Showing 10 of 174 checks; see `indexes/checks.json` and `checks/*/check.json` for the full evidence set.

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
