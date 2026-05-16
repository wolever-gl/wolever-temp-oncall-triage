<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# ford_310 no-batches

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `resolved`
Tags: `triage:needs_review`, `resolved:export-healthy`
Incidents: [Q1TJJ4MEVOF1W3](https://growthloop.pagerduty.com/incidents/Q1TJJ4MEVOF1W3)
Alerts: 18

## Current Summary

Resolved: 18 Ford no-batches alert-scoped exports are healthy after destination-scoped Pizza checks; the single 34010 reddit_ads failed-count case was split out.

## Alert Scope

- Alert facts: 18 imported, 18 linked to this group.
- Orgs: `ford_310`
- Audiences: `29560`, `31274`, `31276`, `31289`, `31290`, `31303`, `31315`, `31317`, and 10 more
- Destinations: `facebook`, `marketing_cloud`, `pinterest`, `the_trade_desk_crm`, `tik_tok_streaming`
- State tuples: `snapshotting_finished/no_batches`
- Commands seen: `glcli --env prod bifrost pizza --audience-id 29560 --org-id 310`, `glcli --env prod bifrost pizza --audience-id 31274 --org-id 310`, `glcli --env prod bifrost pizza --audience-id 31276 --org-id 310`, and 15 more

Representative alerts:
- Q1TJJ4MEVOF1W3/Q2JLV0HSSULT41: 2026-05-13T07:56:54-07:00; ford_310; audience 29560; marketing_cloud; snapshotting_finished/no_batches. ford (Marketing Production): Exports for audience 29560 failed with states: <(snapshotting_finished,no_batches)>
  Runs: `29560-marketing_cloud_18087-scheduled__2026-05-13T00:00:00+00:00`
- Q1TJJ4MEVOF1W3/Q04B2OJIZ4F2KT: 2026-05-13T07:56:56-07:00; ford_310; audience 31274; facebook; snapshotting_finished/no_batches. ford (Marketing Production): Exports for audience 31274 failed with states: <(snapshotting_finished,no_batches)>
  Runs: `31274-facebook_19687-scheduled__2026-05-13T00:00:00+00:00`, `31274-the_trade_desk_crm_19688-scheduled__2026-05-13T00:00:00+00:00`
- Q1TJJ4MEVOF1W3/Q3OGA20C8VTH1G: 2026-05-13T07:56:57-07:00; ford_310; audience 31276; facebook; snapshotting_finished/no_batches. ford (Marketing Production): Exports for audience 31276 failed with states: <(snapshotting_finished,no_batches)>
  Runs: `31276-facebook_19690-scheduled__2026-05-13T00:00:00+00:00`, `31276-the_trade_desk_crm_19691-scheduled__2026-05-13T00:00:00+00:00`
- Q1TJJ4MEVOF1W3/Q0EI54D89DOCS9: 2026-05-13T07:56:58-07:00; ford_310; audience 31289; facebook; snapshotting_finished/no_batches. ford (Marketing Production): Exports for audience 31289 failed with states: <(snapshotting_finished,no_batches)>
  Runs: `31289-facebook_19694-scheduled__2026-05-13T00:00:00+00:00`, `31289-the_trade_desk_crm_19695-scheduled__2026-05-13T00:00:00+00:00`
- Q1TJJ4MEVOF1W3/Q24218TGU2M1Y5: 2026-05-13T07:56:59-07:00; ford_310; audience 31290; the_trade_desk_crm; snapshotting_finished/no_batches. ford (Marketing Production): Exports for audience 31290 failed with states: <(snapshotting_finished,no_batches)>
  Runs: `31290-facebook_19698-scheduled__2026-05-13T00:00:00+00:00`, `31290-the_trade_desk_crm_19697-scheduled__2026-05-13T00:00:00+00:00`
- Q1TJJ4MEVOF1W3/Q35G2Y7HOP9WVU: 2026-05-13T07:57:00-07:00; ford_310; audience 31303; the_trade_desk_crm; snapshotting_finished/no_batches. ford (Marketing Production): Exports for audience 31303 failed with states: <(snapshotting_finished,no_batches)>
  Runs: `31303-facebook_19701-scheduled__2026-05-13T00:00:00+00:00`, `31303-the_trade_desk_crm_19700-scheduled__2026-05-13T00:00:00+00:00`
- Q1TJJ4MEVOF1W3/Q35JFDLCVFVCBX: 2026-05-13T07:57:02-07:00; ford_310; audience 31315; the_trade_desk_crm; snapshotting_finished/no_batches. ford (Marketing Production): Exports for audience 31315 failed with states: <(snapshotting_finished,no_batches)>
  Runs: `31315-facebook_19704-scheduled__2026-05-13T00:00:00+00:00`, `31315-the_trade_desk_crm_19703-scheduled__2026-05-13T00:00:00+00:00`
- Q1TJJ4MEVOF1W3/Q10CCC3A5XZFGC: 2026-05-13T07:57:03-07:00; ford_310; audience 31317; the_trade_desk_crm; snapshotting_finished/no_batches. ford (Marketing Production): Exports for audience 31317 failed with states: <(snapshotting_finished,no_batches)>
  Runs: `31317-facebook_19707-scheduled__2026-05-13T00:00:00+00:00`, `31317-the_trade_desk_crm_19706-scheduled__2026-05-13T00:00:00+00:00`
- Q1TJJ4MEVOF1W3/Q22B7QPRRDSA37: 2026-05-13T07:57:05-07:00; ford_310; audience 32702; facebook; snapshotting_finished/no_batches. ford (Marketing Production): Exports for audience 32702 failed with states: <(snapshotting_finished,no_batches)>
  Runs: `32702-facebook_20066-scheduled__2026-05-13T00:00:00+00:00`
- Q1TJJ4MEVOF1W3/Q1LEWIJ102WL8R: 2026-05-13T07:57:07-07:00; ford_310; audience 32703; facebook; snapshotting_finished/no_batches. ford (Marketing Production): Exports for audience 32703 failed with states: <(snapshotting_finished,no_batches)>
  Runs: `32703-facebook_20067-scheduled__2026-05-13T00:00:00+00:00`
- Showing 10 of 18 alert facts; see `indexes/alert_facts.json` for the full imported set.

## Export Checks

- Checks: 18.
- States: `healthy_closed`=18

Check evidence:
- chk_q1tjj4mevof1w3_q04b2ojiz4f2kt (Q1TJJ4MEVOF1W3/Q04B2OJIZ4F2KT): state=`healthy_closed`.
  Scope: env=prod; org=310; audience=31274; destination=facebook.
  Checked runs: `31274-facebook_19687-scheduled__2026-05-13T00:00:00+00:00`, `31274-the_trade_desk_crm_19688-scheduled__2026-05-13T00:00:00+00:00`
  Command: `glcli --env prod bifrost pizza --audience-id 31274 --org-id 310`
  Run 31274-facebook_19687-scheduled__2026-05-13T00:00:00+00:00: health=`healthy`; created=2026-05-13T00:24:29.089291+00:00; snapshotting=snapshotting_finished; export=export_finished; failed=0.
- chk_q1tjj4mevof1w3_q0egepo2j93w4r (Q1TJJ4MEVOF1W3/Q0EGEPO2J93W4R): state=`healthy_closed`.
  Scope: env=prod; org=310; audience=34062; destination=the_trade_desk_crm.
  Checked runs: `34062-the_trade_desk_crm_20862-scheduled__2026-05-13T00:00:00+00:00`, `34062-dv360_20860-scheduled__2026-05-13T00:00:00+00:00`, `34062-reddit_ads_21798-scheduled__2026-05-13T00:00:00+00:00`, `34062-facebook_20861-scheduled__2026-05-13T00:00:00+00:00`, and 2 more
  Command: `glcli --env prod bifrost pizza --audience-id 34062 --org-id 310`
  Run 34062-the_trade_desk_crm_20862-scheduled__2026-05-13T00:00:00+00:00: health=`healthy`; created=2026-05-13T00:59:11.756725+00:00; snapshotting=snapshotting_finished; export=export_finished; failed=0.
- chk_q1tjj4mevof1w3_q0ei54d89docs9 (Q1TJJ4MEVOF1W3/Q0EI54D89DOCS9): state=`healthy_closed`.
  Scope: env=prod; org=310; audience=31289; destination=facebook.
  Checked runs: `31289-facebook_19694-scheduled__2026-05-13T00:00:00+00:00`, `31289-the_trade_desk_crm_19695-scheduled__2026-05-13T00:00:00+00:00`
  Command: `glcli --env prod bifrost pizza --audience-id 31289 --org-id 310`
  Run 31289-facebook_19694-scheduled__2026-05-13T00:00:00+00:00: health=`healthy`; created=2026-05-13T00:26:34.000307+00:00; snapshotting=snapshotting_finished; export=export_finished; failed=0.
- chk_q1tjj4mevof1w3_q10ccc3a5xzfgc (Q1TJJ4MEVOF1W3/Q10CCC3A5XZFGC): state=`healthy_closed`.
  Scope: env=prod; org=310; audience=31317; destination=the_trade_desk_crm.
  Checked runs: `31317-the_trade_desk_crm_19706-scheduled__2026-05-13T00:00:00+00:00`, `31317-facebook_19707-scheduled__2026-05-13T00:00:00+00:00`
  Command: `glcli --env prod bifrost pizza --audience-id 31317 --org-id 310`
  Run 31317-the_trade_desk_crm_19706-scheduled__2026-05-13T00:00:00+00:00: health=`healthy`; created=2026-05-13T00:32:42.925927+00:00; snapshotting=snapshotting_finished; export=export_finished; failed=0.
- chk_q1tjj4mevof1w3_q186trpzm2rud7 (Q1TJJ4MEVOF1W3/Q186TRPZM2RUD7): state=`healthy_closed`.
  Scope: env=prod; org=310; audience=33348; destination=pinterest.
  Checked runs: `33348-pinterest_21753-scheduled__2026-05-13T00:00:00+00:00`, `33348-reddit_ads_21795-scheduled__2026-05-13T00:00:00+00:00`, `33348-facebook_20852-scheduled__2026-05-13T00:00:00+00:00`, `33348-tik_tok_streaming_21804-scheduled__2026-05-13T00:00:00+00:00`, and 2 more
  Command: `glcli --env prod bifrost pizza --audience-id 33348 --org-id 310`
  Run 33348-pinterest_21753-scheduled__2026-05-13T00:00:00+00:00: health=`healthy`; created=2026-05-13T00:50:01.255647+00:00; snapshotting=snapshotting_finished; export=export_finished; failed=0.
- chk_q1tjj4mevof1w3_q18n6x3v6vaajn (Q1TJJ4MEVOF1W3/Q18N6X3V6VAAJN): state=`healthy_closed`.
  Scope: env=prod; org=310; audience=34008; destination=the_trade_desk_crm.
  Checked runs: `34008-the_trade_desk_crm_20856-scheduled__2026-05-13T00:00:00+00:00`, `34008-dv360_20854-scheduled__2026-05-13T00:00:00+00:00`, `34008-pinterest_21754-scheduled__2026-05-13T00:00:00+00:00`, `34008-reddit_ads_21796-scheduled__2026-05-13T00:00:00+00:00`, and 2 more
  Command: `glcli --env prod bifrost pizza --audience-id 34008 --org-id 310`
  Run 34008-the_trade_desk_crm_20856-scheduled__2026-05-13T00:00:00+00:00: health=`healthy`; created=2026-05-13T00:22:04.726071+00:00; snapshotting=snapshotting_finished; export=export_finished; failed=0.
- chk_q1tjj4mevof1w3_q1iu9pjhh47nr3 (Q1TJJ4MEVOF1W3/Q1IU9PJHH47NR3): state=`healthy_closed`.
  Scope: env=prod; org=310; audience=34059; destination=tik_tok_streaming.
  Checked runs: `34059-tik_tok_streaming_21806-scheduled__2026-05-13T00:00:00+00:00`, `34059-dv360_20857-scheduled__2026-05-13T00:00:00+00:00`, `34059-pinterest_21755-scheduled__2026-05-13T00:00:00+00:00`, `34059-reddit_ads_21797-scheduled__2026-05-13T00:00:00+00:00`, and 2 more
  Command: `glcli --env prod bifrost pizza --audience-id 34059 --org-id 310`
  Run 34059-tik_tok_streaming_21806-scheduled__2026-05-13T00:00:00+00:00: health=`healthy`; created=2026-05-13T00:52:54.291787+00:00; snapshotting=snapshotting_finished; export=export_finished; failed=0.
- chk_q1tjj4mevof1w3_q1lewij102wl8r (Q1TJJ4MEVOF1W3/Q1LEWIJ102WL8R): state=`healthy_closed`.
  Scope: env=prod; org=310; audience=32703; destination=facebook.
  Checked runs: `32703-facebook_20067-scheduled__2026-05-13T00:00:00+00:00`
  Command: `glcli --env prod bifrost pizza --audience-id 32703 --org-id 310`
  Run 32703-facebook_20067-scheduled__2026-05-13T00:00:00+00:00: health=`healthy`; created=2026-05-13T00:32:35.138558+00:00; snapshotting=snapshotting_finished; export=export_finished; failed=0.
- chk_q1tjj4mevof1w3_q20m70mqd14d30 (Q1TJJ4MEVOF1W3/Q20M70MQD14D30): state=`healthy_closed`.
  Scope: env=prod; org=310; audience=32920; destination=pinterest.
  Checked runs: `32920-pinterest_21758-scheduled__2026-05-13T00:00:00+00:00`, `32920-reddit_ads_21800-scheduled__2026-05-13T00:00:00+00:00`, `32920-tik_tok_streaming_21809-scheduled__2026-05-13T00:00:00+00:00`, `32920-dv360_20866-scheduled__2026-05-13T00:00:00+00:00`, and 2 more
  Command: `glcli --env prod bifrost pizza --audience-id 32920 --org-id 310`
  Run 32920-pinterest_21758-scheduled__2026-05-13T00:00:00+00:00: health=`healthy`; created=2026-05-13T00:34:30.451772+00:00; snapshotting=snapshotting_finished; export=export_finished; failed=0.
- chk_q1tjj4mevof1w3_q22b7qprrdsa37 (Q1TJJ4MEVOF1W3/Q22B7QPRRDSA37): state=`healthy_closed`.
  Scope: env=prod; org=310; audience=32702; destination=facebook.
  Checked runs: `32702-facebook_20066-scheduled__2026-05-13T00:00:00+00:00`
  Command: `glcli --env prod bifrost pizza --audience-id 32702 --org-id 310`
  Run 32702-facebook_20066-scheduled__2026-05-13T00:00:00+00:00: health=`healthy`; created=2026-05-13T00:32:49.903210+00:00; snapshotting=snapshotting_finished; export=export_finished; failed=0.
- Showing 10 of 18 checks; see `indexes/checks.json` and `checks/*/check.json` for the full evidence set.

## Recent Evidence

- After destination-scoped export checks, 18 of 19 Ford no-batches alerts are healthy_closed. The only remaining blocker was split out separately: audience 34010 reddit_ads failed_export_count=16 on the 2026-05-13 run.
  Source: `oncall-triage check-exports`; kind: `pizza`; captured: `2026-05-16T22:33:53.575Z`.
  Command: `bun run oncall-triage check-exports cases --group 260513-ford_310-no-batches --apply --auto-resolve`

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
