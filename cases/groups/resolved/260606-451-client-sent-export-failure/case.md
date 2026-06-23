<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# 451 client-sent-export-failure

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `resolved`
Tags: `triage:needs_review`, `resolved:export-healthy`
Incidents: [Q3H4V02MSU117K](https://growthloop.pagerduty.com/incidents/Q3H4V02MSU117K)
Alerts: 5

## Current Summary

Auto-resolved from Pizza export checks: all 5 alert-scoped export check(s) are healthy_closed with no blockers.

## Alert Scope

- Alert facts: 5 imported, 5 linked to this group.
- Orgs: `451`
- Audiences: `24855`, `25884`, `25885`, `26037`, `26039`
- Destinations: none
- State tuples: none
- Commands seen: `glcli --env prod bifrost pizza --audience-id 24855 --org-id 451`, `glcli --env prod bifrost pizza --audience-id 25884 --org-id 451`, `glcli --env prod bifrost pizza --audience-id 25885 --org-id 451`, and 2 more

Representative alerts:
- Q3H4V02MSU117K/Q0NTWAEKYBE138: 2026-06-03T19:01:27-07:00; 451; audience 25884. ASU Enterprise Partners (General - ASU Data) - Audience 25884: Audience Export failure for 25884 sent to client.
- Q3H4V02MSU117K/Q0BKKBBFH5CINN: 2026-06-03T19:28:52-07:00; 451; audience 26037. ASU Enterprise Partners (General - ASU Data) - Audience 26037: Audience Export failure for 26037 sent to client.
- Q3H4V02MSU117K/Q0EJUVME0TY8CC: 2026-06-04T14:42:24-07:00; 451; audience 24855. ASU Enterprise Partners (General - ASU Data) - Audience 24855: Audience Export failure for 24855 sent to client.
- Q3H4V02MSU117K/Q1BGR34WR9RA7U: 2026-06-06T19:22:31-07:00; 451; audience 25885. ASU Enterprise Partners (Alumni) - Audience 25885: Audience Export failure for 25885 sent to client.
- Q3H4V02MSU117K/Q3DTLJYDZ4NONK: 2026-06-06T20:18:54-07:00; 451; audience 26039. ASU Enterprise Partners (Alumni) - Audience 26039: Audience Export failure for 26039 sent to client.

## Export Checks

- Checks: 5.
- States: `healthy_closed`=5

Check evidence:
- chk_q3h4v02msu117k_q0bkkbbfh5cinn (Q3H4V02MSU117K/Q0BKKBBFH5CINN): state=`healthy_closed`.
  Scope: env=prod; org=451; audience=26037.
  Command: `glcli --env prod bifrost pizza --audience-id 26037 --org-id 451`
  Run 26037-reddit_ads_16102-scheduled__2026-06-22T00:00:00+00:00: health=`healthy`; created=2026-06-22T01:32:58.760774+00:00; snapshotting=snapshotting_finished; export=export_finished; failed=0.
- chk_q3h4v02msu117k_q0ejuvme0ty8cc (Q3H4V02MSU117K/Q0EJUVME0TY8CC): state=`healthy_closed`.
  Scope: env=prod; org=451; audience=24855.
  Command: `glcli --env prod bifrost pizza --audience-id 24855 --org-id 451`
  Run 24855-google_adwords_18294-scheduled__2026-06-22T00:00:00+00:00: health=`healthy`; created=2026-06-22T01:12:38.419790+00:00; snapshotting=snapshotting_finished; export=export_finished; failed=0.
- chk_q3h4v02msu117k_q0ntwaekybe138 (Q3H4V02MSU117K/Q0NTWAEKYBE138): state=`healthy_closed`.
  Scope: env=prod; org=451; audience=25884.
  Command: `glcli --env prod bifrost pizza --audience-id 25884 --org-id 451`
  Run 25884-google_adwords_16091-scheduled__2026-06-22T00:00:00+00:00: health=`healthy`; created=2026-06-22T01:58:00.757472+00:00; snapshotting=snapshotting_finished; export=export_finished; failed=0.
- chk_q3h4v02msu117k_q1bgr34wr9ra7u (Q3H4V02MSU117K/Q1BGR34WR9RA7U): state=`healthy_closed`.
  Scope: env=prod; org=451; audience=25885.
  Command: `glcli --env prod bifrost pizza --audience-id 25885 --org-id 451`
  Run 25885-viant_16921-scheduled__2026-06-22T00:00:00+00:00: health=`healthy`; created=2026-06-22T02:14:55.983602+00:00; snapshotting=snapshotting_finished; export=export_finished; failed=0.
- chk_q3h4v02msu117k_q3dtljydz4nonk (Q3H4V02MSU117K/Q3DTLJYDZ4NONK): state=`healthy_closed`.
  Scope: env=prod; org=451; audience=26039.
  Command: `glcli --env prod bifrost pizza --audience-id 26039 --org-id 451`
  Run 26039-reddit_ads_16099-scheduled__2026-06-22T00:00:00+00:00: health=`healthy`; created=2026-06-22T02:05:39.740088+00:00; snapshotting=snapshotting_finished; export=export_finished; failed=0.

## Recent Evidence

- Auto-resolved from Pizza export checks: all 5 alert-scoped export check(s) are healthy_closed with no blockers.
  Source: `check-exports`; kind: `export_check`; captured: `2026-06-22T21:16:40.947Z`.

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
