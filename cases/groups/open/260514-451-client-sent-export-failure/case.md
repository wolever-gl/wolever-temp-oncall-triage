<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# 451 client-sent-export-failure

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `open`
Tags: `triage:needs_review`
Incidents: [Q1UC14QNZK76EZ](https://growthloop.pagerduty.com/incidents/Q1UC14QNZK76EZ)
Alerts: 9

## Current Summary

ASU Enterprise Partners (Alumni) - Audience 26039: Audience Export failure for 26039 sent to client.

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
- States: `blocked`=9
- Blockers seen: `missing_run_identity`

Check evidence:
- chk_q1uc14qnzk76ez_q0d81k8ytrd37v (Q1UC14QNZK76EZ/Q0D81K8YTRD37V): state=`blocked`.
  Scope: env=prod; org=451; audience=26037.
  Command: `glcli --env prod bifrost pizza --audience-id 26037 --org-id 451`
  Blockers: `missing_run_identity`
- chk_q1uc14qnzk76ez_q0f5q04vqmr20i (Q1UC14QNZK76EZ/Q0F5Q04VQMR20I): state=`blocked`.
  Scope: env=prod; org=451; audience=25885.
  Command: `glcli --env prod bifrost pizza --audience-id 25885 --org-id 451`
  Blockers: `missing_run_identity`
- chk_q1uc14qnzk76ez_q0llhij3wbrjfk (Q1UC14QNZK76EZ/Q0LLHIJ3WBRJFK): state=`blocked`.
  Scope: env=prod; org=451; audience=25147.
  Command: `glcli --env prod bifrost pizza --audience-id 25147 --org-id 451`
  Blockers: `missing_run_identity`
- chk_q1uc14qnzk76ez_q1bsqgdw7c6h6c (Q1UC14QNZK76EZ/Q1BSQGDW7C6H6C): state=`blocked`.
  Scope: env=prod; org=451; audience=24855.
  Command: `glcli --env prod bifrost pizza --audience-id 24855 --org-id 451`
  Blockers: `missing_run_identity`
- chk_q1uc14qnzk76ez_q1cmzcwe71he01 (Q1UC14QNZK76EZ/Q1CMZCWE71HE01): state=`blocked`.
  Scope: env=prod; org=451; audience=25884.
  Command: `glcli --env prod bifrost pizza --audience-id 25884 --org-id 451`
  Blockers: `missing_run_identity`
- chk_q1uc14qnzk76ez_q1qtjn0zgpx53d (Q1UC14QNZK76EZ/Q1QTJN0ZGPX53D): state=`blocked`.
  Scope: env=prod; org=451; audience=24856.
  Command: `glcli --env prod bifrost pizza --audience-id 24856 --org-id 451`
  Blockers: `missing_run_identity`
- chk_q1uc14qnzk76ez_q1s3oko4s0kh1m (Q1UC14QNZK76EZ/Q1S3OKO4S0KH1M): state=`blocked`.
  Scope: env=prod; org=451; audience=24842.
  Command: `glcli --env prod bifrost pizza --audience-id 24842 --org-id 451`
  Blockers: `missing_run_identity`
- chk_q1uc14qnzk76ez_q1yd56celqd1vt (Q1UC14QNZK76EZ/Q1YD56CELQD1VT): state=`blocked`.
  Scope: env=prod; org=451; audience=24841.
  Command: `glcli --env prod bifrost pizza --audience-id 24841 --org-id 451`
  Blockers: `missing_run_identity`
- chk_q1uc14qnzk76ez_q253lp94b0kmhk (Q1UC14QNZK76EZ/Q253LP94B0KMHK): state=`blocked`.
  Scope: env=prod; org=451; audience=26039.
  Command: `glcli --env prod bifrost pizza --audience-id 26039 --org-id 451`
  Blockers: `missing_run_identity`

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
