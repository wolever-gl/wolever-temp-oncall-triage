<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# 451 client-sent-export-failure

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `resolved`
Tags: `triage:needs_review`, `resolved:export-healthy`
Incidents: [Q1UC14QNZK76EZ](https://growthloop.pagerduty.com/incidents/Q1UC14QNZK76EZ)
Alerts: 9

## Current Summary

Auto-resolved from Pizza export checks: all 9 alert-scoped export check(s) are healthy_closed with no blockers.

## Alert Scope

- Alert facts: 9 imported, 9 linked to this group.
- Orgs: `451`
- Audiences: `24841`, `24842`, `24855`, `24856`, `25147`, `25884`, `25885`, `26037`, and 1 more
- Destinations: none
- State tuples: none
- Commands seen: `glcli --env prod bifrost pizza --audience-id 24841 --org-id 451`, `glcli --env prod bifrost pizza --audience-id 24842 --org-id 451`, `glcli --env prod bifrost pizza --audience-id 24855 --org-id 451`, and 6 more

Representative alerts:
- Q1UC14QNZK76EZ/Q1YD56CELQD1VT: 2026-05-14T17:33:41-07:00; 451; audience 24841. ASU Enterprise Partners (General - ASU Data) - Audience 24841: Audience Export failure for 24841 sent to client.
- Q1UC14QNZK76EZ/Q1S3OKO4S0KH1M: 2026-05-14T17:36:31-07:00; 451; audience 24842. ASU Enterprise Partners (General - ASU Data) - Audience 24842: Audience Export failure for 24842 sent to client.
- Q1UC14QNZK76EZ/Q1QTJN0ZGPX53D: 2026-05-14T17:42:57-07:00; 451; audience 24856. ASU Enterprise Partners (General - ASU Data) - Audience 24856: Audience Export failure for 24856 sent to client.
- Q1UC14QNZK76EZ/Q1BSQGDW7C6H6C: 2026-05-14T17:43:02-07:00; 451; audience 24855. ASU Enterprise Partners (General - ASU Data) - Audience 24855: Audience Export failure for 24855 sent to client.
- Q1UC14QNZK76EZ/Q0LLHIJ3WBRJFK: 2026-05-14T17:44:31-07:00; 451; audience 25147. ASU Enterprise Partners (General - ASU Data) - Audience 25147: Audience Export failure for 25147 sent to client.
- Q1UC14QNZK76EZ/Q1CMZCWE71HE01: 2026-05-14T17:52:34-07:00; 451; audience 25884. ASU Enterprise Partners (General - ASU Data) - Audience 25884: Audience Export failure for 25884 sent to client.
- Q1UC14QNZK76EZ/Q0F5Q04VQMR20I: 2026-05-14T17:55:48-07:00; 451; audience 25885. ASU Enterprise Partners (Alumni) - Audience 25885: Audience Export failure for 25885 sent to client.
- Q1UC14QNZK76EZ/Q0D81K8YTRD37V: 2026-05-14T17:58:18-07:00; 451; audience 26037. ASU Enterprise Partners (General - ASU Data) - Audience 26037: Audience Export failure for 26037 sent to client.
- Q1UC14QNZK76EZ/Q253LP94B0KMHK: 2026-05-14T18:01:37-07:00; 451; audience 26039. ASU Enterprise Partners (Alumni) - Audience 26039: Audience Export failure for 26039 sent to client.

## Export Checks

- Checks: 9.
- States: `healthy_closed`=9

Check evidence:
- chk_q1uc14qnzk76ez_q0d81k8ytrd37v (Q1UC14QNZK76EZ/Q0D81K8YTRD37V): state=`healthy_closed`.
  Scope: env=prod; org=451; audience=26037.
  Command: `glcli --env prod bifrost pizza --audience-id 26037 --org-id 451`
  Run 26037-facebook_16103-scheduled__2026-05-16T00:00:00+00:00: health=`healthy`; created=2026-05-16T02:50:23.428408+00:00; snapshotting=snapshotting_finished; export=export_finished; failed=0.
- chk_q1uc14qnzk76ez_q0f5q04vqmr20i (Q1UC14QNZK76EZ/Q0F5Q04VQMR20I): state=`healthy_closed`.
  Scope: env=prod; org=451; audience=25885.
  Command: `glcli --env prod bifrost pizza --audience-id 25885 --org-id 451`
  Run 25885-google_adwords_16088-scheduled__2026-05-16T00:00:00+00:00: health=`healthy`; created=2026-05-16T02:48:25.939664+00:00; snapshotting=snapshotting_finished; export=export_finished; failed=0.
- chk_q1uc14qnzk76ez_q0llhij3wbrjfk (Q1UC14QNZK76EZ/Q0LLHIJ3WBRJFK): state=`healthy_closed`.
  Scope: env=prod; org=451; audience=25147.
  Command: `glcli --env prod bifrost pizza --audience-id 25147 --org-id 451`
  Run 25147-marketing_cloud_15450-scheduled__2026-05-16T00:00:00+00:00: health=`healthy`; created=2026-05-16T01:18:06.806688+00:00; snapshotting=snapshotting_finished; export=export_finished; failed=0.
- chk_q1uc14qnzk76ez_q1bsqgdw7c6h6c (Q1UC14QNZK76EZ/Q1BSQGDW7C6H6C): state=`healthy_closed`.
  Scope: env=prod; org=451; audience=24855.
  Command: `glcli --env prod bifrost pizza --audience-id 24855 --org-id 451`
  Run 24855-google_adwords_18969-scheduled__2026-05-16T00:00:00+00:00: health=`healthy`; created=2026-05-16T00:48:56.208506+00:00; snapshotting=snapshotting_finished; export=export_finished; failed=0.
- chk_q1uc14qnzk76ez_q1cmzcwe71he01 (Q1UC14QNZK76EZ/Q1CMZCWE71HE01): state=`healthy_closed`.
  Scope: env=prod; org=451; audience=25884.
  Command: `glcli --env prod bifrost pizza --audience-id 25884 --org-id 451`
  Run 25884-google_adwords_16091-scheduled__2026-05-16T00:00:00+00:00: health=`healthy`; created=2026-05-16T02:06:57.467021+00:00; snapshotting=snapshotting_finished; export=export_finished; failed=0.
- chk_q1uc14qnzk76ez_q1qtjn0zgpx53d (Q1UC14QNZK76EZ/Q1QTJN0ZGPX53D): state=`healthy_closed`.
  Scope: env=prod; org=451; audience=24856.
  Command: `glcli --env prod bifrost pizza --audience-id 24856 --org-id 451`
  Run 24856-facebook_18295-scheduled__2026-05-16T00:00:00+00:00: health=`healthy`; created=2026-05-16T00:48:56.208532+00:00; snapshotting=snapshotting_finished; export=export_finished; failed=0.
- chk_q1uc14qnzk76ez_q1s3oko4s0kh1m (Q1UC14QNZK76EZ/Q1S3OKO4S0KH1M): state=`healthy_closed`.
  Scope: env=prod; org=451; audience=24842.
  Command: `glcli --env prod bifrost pizza --audience-id 24842 --org-id 451`
  Run 24842-snapchat_15474-scheduled__2026-05-16T00:00:00+00:00: health=`healthy`; created=2026-05-16T02:04:28.273936+00:00; snapshotting=snapshotting_finished; export=export_finished; failed=0.
- chk_q1uc14qnzk76ez_q1yd56celqd1vt (Q1UC14QNZK76EZ/Q1YD56CELQD1VT): state=`healthy_closed`.
  Scope: env=prod; org=451; audience=24841.
  Command: `glcli --env prod bifrost pizza --audience-id 24841 --org-id 451`
  Run 24841-facebook_18299-scheduled__2026-05-16T00:00:00+00:00: health=`healthy`; created=2026-05-16T02:19:58.578826+00:00; snapshotting=snapshotting_finished; export=export_finished; failed=0.
- chk_q1uc14qnzk76ez_q253lp94b0kmhk (Q1UC14QNZK76EZ/Q253LP94B0KMHK): state=`healthy_closed`.
  Scope: env=prod; org=451; audience=26039.
  Command: `glcli --env prod bifrost pizza --audience-id 26039 --org-id 451`
  Run 26039-microsoft_ads_16086-scheduled__2026-05-16T00:00:00+00:00: health=`healthy`; created=2026-05-16T02:50:23.401062+00:00; snapshotting=snapshotting_finished; export=export_finished; failed=0.

## Recent Evidence

- Auto-resolved from Pizza export checks: all 9 alert-scoped export check(s) are healthy_closed with no blockers.
  Source: `check-exports`; kind: `export_check`; captured: `2026-05-16T23:54:03.535Z`.

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
