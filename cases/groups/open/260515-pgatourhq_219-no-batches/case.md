<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# pgatourhq_219 no-batches

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `open`
Tags: `triage:needs_review`
Incidents: [Q2DJCY3XC2BSBG](https://growthloop.pagerduty.com/incidents/Q2DJCY3XC2BSBG)
Alerts: 13

## Current Summary

pgatourhq (New World Order): Exports for audience 31918 failed with states: <(snapshotting_finished,no_batches)>

## Alert Scope

- Alert facts: 13 imported, 13 linked to this group.
- Orgs: `pgatourhq_219`
- Audiences: `30678`, `31338`, `31343`, `31357`, `31360`, `31361`, `31362`, `31363`, and 5 more
- Destinations: `facebook`, `linkedin_ads`, `live_ramp_sftp`
- State tuples: `snapshotting_finished/no_batches`
- Commands seen: `glcli --env prod bifrost pizza --audience-id 30678 --org-id 219`, `glcli --env prod bifrost pizza --audience-id 31338 --org-id 219`, `glcli --env prod bifrost pizza --audience-id 31343 --org-id 219`, and 10 more

Representative alerts:
- Q2DJCY3XC2BSBG/Q1VIL2ATKPYWAW: 2026-05-15T07:54:34-07:00; pgatourhq_219; audience 30678; facebook; snapshotting_finished/no_batches. pgatourhq (New World Order): Exports for audience 30678 failed with states: <(snapshotting_finished,no_batches)>
  Runs: `30678-facebook_19071-scheduled__2026-04-12T00:00:00+00:00`, `30678-facebook_19071-scheduled__2026-04-13T00:00:00+00:00`, `30678-facebook_19071-scheduled__2026-04-15T00:00:00+00:00`, and 5 more
- Q2DJCY3XC2BSBG/Q3O6C4VDS4GOF7: 2026-05-15T07:54:52-07:00; pgatourhq_219; audience 31338; live_ramp_sftp; snapshotting_finished/no_batches. pgatourhq (New World Order): Exports for audience 31338 failed with states: <(snapshotting_finished,no_batches)>
  Runs: `31338-live_ramp_sftp_19058-scheduled__2026-04-13T00:00:00+00:00`, `31338-live_ramp_sftp_19058-scheduled__2026-05-13T00:00:00+00:00`
- Q2DJCY3XC2BSBG/Q2QLB7CN88KWD6: 2026-05-15T07:54:55-07:00; pgatourhq_219; audience 31343; facebook; snapshotting_finished/no_batches. pgatourhq (New World Order): Exports for audience 31343 failed with states: <(snapshotting_finished,no_batches)>
  Runs: `31343-facebook_19066-scheduled__2026-04-11T00:00:00+00:00`, `31343-facebook_19066-scheduled__2026-04-12T00:00:00+00:00`, `31343-facebook_19066-scheduled__2026-04-13T00:00:00+00:00`, and 14 more
- Q2DJCY3XC2BSBG/Q2ITQ0LQY11R6J: 2026-05-15T07:55:02-07:00; pgatourhq_219; audience 31357; facebook; snapshotting_finished/no_batches. pgatourhq (New World Order): Exports for audience 31357 failed with states: <(snapshotting_finished,no_batches)>
  Runs: `31357-facebook_19080-scheduled__2026-04-11T00:00:00+00:00`, `31357-facebook_19080-scheduled__2026-04-12T00:00:00+00:00`, `31357-facebook_19080-scheduled__2026-04-13T00:00:00+00:00`, and 14 more
- Q2DJCY3XC2BSBG/Q2JQJTB6T3OKCA: 2026-05-15T07:55:11-07:00; pgatourhq_219; audience 31360; facebook; snapshotting_finished/no_batches. pgatourhq (New World Order): Exports for audience 31360 failed with states: <(snapshotting_finished,no_batches)>
  Runs: `31360-facebook_19084-scheduled__2026-05-13T00:00:00+00:00`, `31360-facebook_19084-scheduled__2026-05-14T00:00:00+00:00`, `31360-facebook_19912-scheduled__2026-05-13T00:00:00+00:00`, and 10 more
- Q2DJCY3XC2BSBG/Q02703IIW4PO6C: 2026-05-15T07:55:14-07:00; pgatourhq_219; audience 31361; facebook; snapshotting_finished/no_batches. pgatourhq (New World Order): Exports for audience 31361 failed with states: <(snapshotting_finished,no_batches)>
  Runs: `31361-facebook_19085-scheduled__2026-05-13T00:00:00+00:00`, `31361-facebook_19085-scheduled__2026-05-14T00:00:00+00:00`, `31361-facebook_19913-scheduled__2026-05-13T00:00:00+00:00`, and 12 more
- Q2DJCY3XC2BSBG/Q3Z3FIGUT07HXO: 2026-05-15T07:55:17-07:00; pgatourhq_219; audience 31362; linkedin_ads; snapshotting_finished/no_batches. pgatourhq (New World Order): Exports for audience 31362 failed with states: <(snapshotting_finished,no_batches)>
  Runs: `31362-facebook_19087-scheduled__2026-04-11T00:00:00+00:00`, `31362-facebook_19087-scheduled__2026-04-12T00:00:00+00:00`, `31362-facebook_19087-scheduled__2026-04-13T00:00:00+00:00`, and 29 more
- Q2DJCY3XC2BSBG/Q2ZEHMAWDZ0TGE: 2026-05-15T07:55:20-07:00; pgatourhq_219; audience 31363; facebook; snapshotting_finished/no_batches. pgatourhq (New World Order): Exports for audience 31363 failed with states: <(snapshotting_finished,no_batches)>
  Runs: `31363-facebook_19089-scheduled__2026-04-11T00:00:00+00:00`, `31363-facebook_19089-scheduled__2026-04-12T00:00:00+00:00`, `31363-facebook_19089-scheduled__2026-04-13T00:00:00+00:00`, and 14 more
- Q2DJCY3XC2BSBG/Q0SBO9KD9FONZW: 2026-05-15T07:55:24-07:00; pgatourhq_219; audience 31366; facebook; snapshotting_finished/no_batches. pgatourhq (New World Order): Exports for audience 31366 failed with states: <(snapshotting_finished,no_batches)>
  Runs: `31366-facebook_19091-scheduled__2026-04-15T00:00:00+00:00`, `31366-facebook_19091-scheduled__2026-04-16T00:00:00+00:00`, `31366-facebook_19091-scheduled__2026-04-17T00:00:00+00:00`, and 30 more
- Q2DJCY3XC2BSBG/Q2NHT7FC3CI1K6: 2026-05-15T07:55:26-07:00; pgatourhq_219; audience 31374; facebook; snapshotting_finished/no_batches. pgatourhq (New World Order): Exports for audience 31374 failed with states: <(snapshotting_finished,no_batches)>
  Runs: `31374-facebook_19093-scheduled__2026-04-11T00:00:00+00:00`, `31374-facebook_19093-scheduled__2026-04-12T00:00:00+00:00`, `31374-facebook_19093-scheduled__2026-04-13T00:00:00+00:00`, and 12 more
- Showing 10 of 13 alert facts; see `indexes/alert_facts.json` for the full imported set.

## Export Checks

- Checks: 13.
- States: `blocked`=1, `healthy_closed`=12
- Blockers seen: `export_error`, `failed_export_count`, `missing_pizza_row`

Check evidence:
- chk_q2djcy3xc2bsbg_q02703iiw4po6c (Q2DJCY3XC2BSBG/Q02703IIW4PO6C): state=`healthy_closed`.
  Scope: env=prod; org=219; audience=31361; destination=facebook.
  Checked runs: `31361-facebook_19913-scheduled__2026-05-13T00:00:00+00:00`, `31361-facebook_19085-scheduled__2026-05-13T00:00:00+00:00`, `31361-linkedin_ads_19875-scheduled__2026-05-13T00:00:00+00:00`, `31361-linkedin_ads_19856-scheduled__2026-05-13T00:00:00+00:00`, and 11 more
  Command: `glcli --env prod bifrost pizza --audience-id 31361 --org-id 219`
  Run 31361-facebook_19913-scheduled__2026-05-13T00:00:00+00:00: health=`healthy`; created=2026-05-13T00:34:32.560722+00:00; snapshotting=snapshotting_finished; export=export_finished; failed=0.
  Run 31361-facebook_19085-scheduled__2026-05-13T00:00:00+00:00: health=`healthy`; created=2026-05-13T00:46:19.080916+00:00; snapshotting=snapshotting_finished; export=export_finished; failed=0.
  Run 31361-facebook_19913-scheduled__2026-05-14T00:00:00+00:00: health=`healthy`; created=2026-05-14T00:46:12.310868+00:00; snapshotting=snapshotting_finished; export=export_finished; failed=0.
  Run 31361-facebook_19085-scheduled__2026-05-14T00:00:00+00:00: health=`healthy`; created=2026-05-14T00:59:03.469859+00:00; snapshotting=snapshotting_finished; export=export_finished; failed=0.
- chk_q2djcy3xc2bsbg_q0788517neyw5k (Q2DJCY3XC2BSBG/Q0788517NEYW5K): state=`healthy_closed`.
  Scope: env=prod; org=219; audience=31656; destination=facebook.
  Checked runs: `31656-facebook_19290-scheduled__2026-05-13T00:00:00+00:00`, `31656-facebook_20031-scheduled__2026-05-13T00:00:00+00:00`, `31656-tik_tok_21085-scheduled__2026-05-13T00:00:00+00:00`, `31656-tik_tok_21089-scheduled__2026-05-13T00:00:00+00:00`, and 6 more
  Command: `glcli --env prod bifrost pizza --audience-id 31656 --org-id 219`
  Run 31656-facebook_19290-scheduled__2026-05-13T00:00:00+00:00: health=`healthy`; created=2026-05-13T00:39:00.021002+00:00; snapshotting=snapshotting_finished; export=export_finished; failed=0.
  Run 31656-facebook_20031-scheduled__2026-05-13T00:00:00+00:00: health=`healthy`; created=2026-05-13T00:39:40.000984+00:00; snapshotting=snapshotting_finished; export=export_finished; failed=0.
  Run 31656-facebook_21084-scheduled__2026-05-13T00:00:00+00:00: health=`healthy`; created=2026-05-13T00:41:51.437447+00:00; snapshotting=snapshotting_finished; export=export_finished; failed=0.
  Run 31656-facebook_19290-scheduled__2026-05-14T00:00:00+00:00: health=`healthy`; created=2026-05-14T00:26:05.761238+00:00; snapshotting=snapshotting_finished; export=export_finished; failed=0.
  Showing 4 of 6 run evaluations.
- chk_q2djcy3xc2bsbg_q09i74zyevzpsq (Q2DJCY3XC2BSBG/Q09I74ZYEVZPSQ): state=`healthy_closed`.
  Scope: env=prod; org=219; audience=31381; destination=live_ramp_sftp.
  Checked runs: `31381-live_ramp_sftp_19096-scheduled__2026-04-14T00:00:00+00:00`, `31381-live_ramp_sftp_19096-scheduled__2026-05-14T00:00:00+00:00`
  Command: `glcli --env prod bifrost pizza --audience-id 31381 --org-id 219`
  Run 31381-live_ramp_sftp_19096-scheduled__2026-04-14T00:00:00+00:00: health=`healthy`; created=2026-04-14T00:36:13.995092+00:00; snapshotting=snapshotting_finished_no_deltas; export=no_batches; failed=0.
  Run 31381-live_ramp_sftp_19096-scheduled__2026-05-14T00:00:00+00:00: health=`healthy`; created=2026-05-14T00:22:19.823083+00:00; snapshotting=snapshotting_finished; export=export_finished; failed=0.
- chk_q2djcy3xc2bsbg_q0sbo9kd9fonzw (Q2DJCY3XC2BSBG/Q0SBO9KD9FONZW): state=`healthy_closed`.
  Scope: env=prod; org=219; audience=31366; destination=facebook.
  Checked runs: `31366-facebook_19091-scheduled__2026-04-15T00:00:00+00:00`, `31366-linkedin_ads_19332-scheduled__2026-04-15T00:00:00+00:00`, `31366-facebook_19091-scheduled__2026-04-16T00:00:00+00:00`, `31366-linkedin_ads_19332-scheduled__2026-04-16T00:00:00+00:00`, and 29 more
  Command: `glcli --env prod bifrost pizza --audience-id 31366 --org-id 219`
  Run 31366-facebook_19091-scheduled__2026-04-15T00:00:00+00:00: health=`healthy`; created=2026-04-15T03:59:28.614083+00:00; snapshotting=snapshotting_finished_no_deltas; export=no_batches; failed=0.
  Run 31366-facebook_19091-scheduled__2026-04-16T00:00:00+00:00: health=`healthy`; created=2026-04-16T00:27:02.794080+00:00; snapshotting=snapshotting_finished_no_deltas; export=no_batches; failed=0.
  Run 31366-facebook_20030-scheduled__2026-04-16T00:00:00+00:00: health=`healthy`; created=2026-04-16T00:27:33.327125+00:00; snapshotting=snapshotting_finished_no_deltas; export=no_batches; failed=0.
  Run 31366-facebook_20030-scheduled__2026-04-17T00:00:00+00:00: health=`healthy`; created=2026-04-17T00:32:55.325429+00:00; snapshotting=snapshotting_finished_no_deltas; export=no_batches; failed=0.
  Showing 4 of 21 run evaluations.
- chk_q2djcy3xc2bsbg_q1vil2atkpywaw (Q2DJCY3XC2BSBG/Q1VIL2ATKPYWAW): state=`healthy_closed`.
  Scope: env=prod; org=219; audience=30678; destination=facebook.
  Checked runs: `30678-facebook_19071-scheduled__2026-04-12T00:00:00+00:00`, `30678-facebook_19071-scheduled__2026-04-13T00:00:00+00:00`, `30678-facebook_19071-scheduled__2026-04-15T00:00:00+00:00`, `30678-facebook_19071-scheduled__2026-04-17T00:00:00+00:00`, and 4 more
  Command: `glcli --env prod bifrost pizza --audience-id 30678 --org-id 219`
  Run 30678-facebook_19071-scheduled__2026-04-12T00:00:00+00:00: health=`healthy`; created=2026-04-12T00:16:44.349191+00:00; snapshotting=snapshotting_finished_no_deltas; export=no_batches; failed=0.
  Run 30678-facebook_19071-scheduled__2026-04-13T00:00:00+00:00: health=`healthy`; created=2026-04-13T00:16:34.663919+00:00; snapshotting=snapshotting_finished_no_deltas; export=no_batches; failed=0.
  Run 30678-facebook_19071-scheduled__2026-04-15T00:00:00+00:00: health=`healthy`; created=2026-04-15T02:18:34.875164+00:00; snapshotting=snapshotting_finished_no_deltas; export=no_batches; failed=0.
  Run 30678-facebook_19071-scheduled__2026-04-17T00:00:00+00:00: health=`healthy`; created=2026-04-17T00:16:44.053837+00:00; snapshotting=snapshotting_finished_no_deltas; export=no_batches; failed=0.
  Showing 4 of 7 run evaluations.
- chk_q2djcy3xc2bsbg_q278x02prsovh4 (Q2DJCY3XC2BSBG/Q278X02PRSOVH4): state=`healthy_closed`.
  Scope: env=prod; org=219; audience=31918; destination=facebook.
  Checked runs: `31918-facebook_19538-scheduled__2026-04-11T00:00:00+00:00`, `31918-facebook_19538-scheduled__2026-04-12T00:00:00+00:00`, `31918-facebook_19538-scheduled__2026-04-13T00:00:00+00:00`, `31918-facebook_19538-scheduled__2026-04-14T00:00:00+00:00`, and 11 more
  Command: `glcli --env prod bifrost pizza --audience-id 31918 --org-id 219`
  Run 31918-facebook_19538-scheduled__2026-04-11T00:00:00+00:00: health=`healthy`; created=2026-04-11T00:45:33.893795+00:00; snapshotting=snapshotting_finished_no_deltas; export=no_batches; failed=0.
  Run 31918-facebook_19538-scheduled__2026-04-12T00:00:00+00:00: health=`healthy`; created=2026-04-12T00:25:04.051978+00:00; snapshotting=snapshotting_finished_no_deltas; export=no_batches; failed=0.
  Run 31918-facebook_19538-scheduled__2026-04-13T00:00:00+00:00: health=`healthy`; created=2026-04-13T00:31:54.672486+00:00; snapshotting=snapshotting_finished_no_deltas; export=no_batches; failed=0.
  Run 31918-facebook_19538-scheduled__2026-04-14T00:00:00+00:00: health=`healthy`; created=2026-04-14T00:30:51.364845+00:00; snapshotting=snapshotting_finished_no_deltas; export=no_batches; failed=0.
  Showing 4 of 15 run evaluations.
- chk_q2djcy3xc2bsbg_q2itq0lqy11r6j (Q2DJCY3XC2BSBG/Q2ITQ0LQY11R6J): state=`blocked`.
  Scope: env=prod; org=219; audience=31357; destination=facebook.
  Checked runs: `31357-facebook_19080-scheduled__2026-04-11T00:00:00+00:00`, `31357-facebook_19080-scheduled__2026-04-12T00:00:00+00:00`, `31357-facebook_19080-scheduled__2026-04-13T00:00:00+00:00`, `31357-facebook_19080-scheduled__2026-04-14T00:00:00+00:00`, and 13 more
  Command: `glcli --env prod bifrost pizza --audience-id 31357 --org-id 219`
  Blockers: `missing_pizza_row`, `missing_pizza_row`, `missing_pizza_row`, `missing_pizza_row`, `missing_pizza_row`, `missing_pizza_row`, `missing_pizza_row`, `missing_pizza_row`, and 4 more
  Run 31357-facebook_19080-scheduled__2026-04-11T00:00:00+00:00: health=`missing`; blockers=missing_pizza_row.
  Run 31357-facebook_19080-scheduled__2026-04-12T00:00:00+00:00: health=`missing`; blockers=missing_pizza_row.
  Run 31357-facebook_19080-scheduled__2026-04-13T00:00:00+00:00: health=`missing`; blockers=missing_pizza_row.
  Run 31357-facebook_19080-scheduled__2026-04-14T00:00:00+00:00: health=`missing`; blockers=missing_pizza_row.
  Showing 4 of 15 run evaluations.
- chk_q2djcy3xc2bsbg_q2jqjtb6t3okca (Q2DJCY3XC2BSBG/Q2JQJTB6T3OKCA): state=`healthy_closed`.
  Scope: env=prod; org=219; audience=31360; destination=facebook.
  Checked runs: `31360-facebook_19084-scheduled__2026-05-13T00:00:00+00:00`, `31360-linkedin_ads_20669-scheduled__2026-05-13T00:00:00+00:00`, `31360-linkedin_ads_19342-scheduled__2026-05-13T00:00:00+00:00`, `31360-linkedin_ads_19855-scheduled__2026-05-13T00:00:00+00:00`, and 9 more
  Command: `glcli --env prod bifrost pizza --audience-id 31360 --org-id 219`
  Run 31360-facebook_19084-scheduled__2026-05-13T00:00:00+00:00: health=`healthy`; created=2026-05-13T00:32:10.859459+00:00; snapshotting=snapshotting_finished; export=export_finished; failed=0.
  Run 31360-facebook_19912-scheduled__2026-05-13T00:00:00+00:00: health=`healthy`; created=2026-05-13T00:33:16.846584+00:00; snapshotting=snapshotting_finished; export=export_finished; failed=0.
  Run 31360-facebook_19084-scheduled__2026-05-14T00:00:00+00:00: health=`healthy`; created=2026-05-14T00:58:30.963580+00:00; snapshotting=snapshotting_finished; export=export_finished; failed=0.
  Run 31360-facebook_19912-scheduled__2026-05-14T00:00:00+00:00: health=`healthy`; created=2026-05-14T00:59:03.475259+00:00; snapshotting=snapshotting_finished; export=export_finished; failed=0.
- chk_q2djcy3xc2bsbg_q2nht7fc3ci1k6 (Q2DJCY3XC2BSBG/Q2NHT7FC3CI1K6): state=`healthy_closed`.
  Scope: env=prod; org=219; audience=31374; destination=facebook.
  Checked runs: `31374-facebook_19093-scheduled__2026-04-11T00:00:00+00:00`, `31374-facebook_19093-scheduled__2026-04-12T00:00:00+00:00`, `31374-facebook_19093-scheduled__2026-04-13T00:00:00+00:00`, `31374-facebook_19093-scheduled__2026-04-14T00:00:00+00:00`, and 11 more
  Command: `glcli --env prod bifrost pizza --audience-id 31374 --org-id 219`
  Run 31374-facebook_19093-scheduled__2026-04-11T00:00:00+00:00: health=`healthy`; created=2026-04-11T00:51:58.799332+00:00; snapshotting=snapshotting_finished_no_deltas; export=no_batches; failed=0.
  Run 31374-facebook_19093-scheduled__2026-04-12T00:00:00+00:00: health=`healthy`; created=2026-04-12T00:36:25.084577+00:00; snapshotting=snapshotting_finished_no_deltas; export=no_batches; failed=0.
  Run 31374-facebook_19093-scheduled__2026-04-13T00:00:00+00:00: health=`healthy`; created=2026-04-13T00:35:41.254577+00:00; snapshotting=snapshotting_finished_no_deltas; export=no_batches; failed=0.
  Run 31374-facebook_19093-scheduled__2026-04-14T00:00:00+00:00: health=`healthy`; created=2026-04-14T00:36:11.368296+00:00; snapshotting=snapshotting_finished_no_deltas; export=no_batches; failed=0.
  Showing 4 of 15 run evaluations.
- chk_q2djcy3xc2bsbg_q2qlb7cn88kwd6 (Q2DJCY3XC2BSBG/Q2QLB7CN88KWD6): state=`healthy_closed`.
  Scope: env=prod; org=219; audience=31343; destination=facebook.
  Checked runs: `31343-facebook_19066-scheduled__2026-04-11T00:00:00+00:00`, `31343-facebook_19066-scheduled__2026-04-12T00:00:00+00:00`, `31343-live_ramp_sftp_19065-scheduled__2026-04-13T00:00:00+00:00`, `31343-facebook_19066-scheduled__2026-04-13T00:00:00+00:00`, and 13 more
  Command: `glcli --env prod bifrost pizza --audience-id 31343 --org-id 219`
  Run 31343-facebook_19066-scheduled__2026-04-11T00:00:00+00:00: health=`healthy`; created=2026-04-11T00:38:44.715260+00:00; snapshotting=snapshotting_finished_no_deltas; export=no_batches; failed=0.
  Run 31343-facebook_19066-scheduled__2026-04-12T00:00:00+00:00: health=`healthy`; created=2026-04-12T00:18:50.777950+00:00; snapshotting=snapshotting_finished_no_deltas; export=no_batches; failed=0.
  Run 31343-facebook_19066-scheduled__2026-04-13T00:00:00+00:00: health=`healthy`; created=2026-04-13T00:26:35.290483+00:00; snapshotting=snapshotting_finished_no_deltas; export=no_batches; failed=0.
  Run 31343-facebook_19066-scheduled__2026-04-14T00:00:00+00:00: health=`healthy`; created=2026-04-14T00:28:37.889356+00:00; snapshotting=snapshotting_finished_no_deltas; export=no_batches; failed=0.
  Showing 4 of 15 run evaluations.
- Showing 10 of 13 checks; see `indexes/checks.json` and `checks/*/check.json` for the full evidence set.

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
