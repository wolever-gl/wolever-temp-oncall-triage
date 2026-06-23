<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# albertsons_6 albertsons-albertsons-media-no-exports-for-audie

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `monitoring`
Tags: `triage:needs_review`, `monitoring:next_sweep`
Incidents: [Q1S0Q38FOEN2XY](https://growthloop.pagerduty.com/incidents/Q1S0Q38FOEN2XY)
Alerts: 30

## Current Summary

Most delayed Albertsons Media exports recovered after quervice/snapshotting errors; monitor next sweep for residual audience 13048 missing June 22 export evidence.

## Alert Scope

- Alert facts: 30 imported, 30 linked to this group.
- Orgs: `albertsons_6`
- Audiences: `10795`, `11202`, `11270`, `11271`, `11272`, `11283`, `11480`, `11481`, and 22 more
- Destinations: none
- State tuples: none
- Commands seen: `glcli --env albertsons bifrost pizza --audience-id 10795 --org-id 6`, `glcli --env albertsons bifrost pizza --audience-id 11202 --org-id 6`, `glcli --env albertsons bifrost pizza --audience-id 11270 --org-id 6`, and 27 more

Representative alerts:
- Q1S0Q38FOEN2XY/Q2XZFHFFWBPSE0: 2026-06-22T07:38:27-07:00; albertsons_6; audience 10795. albertsons (Albertsons Media): No exports for audience 10795 found in scheduled interval
- Q1S0Q38FOEN2XY/Q3CACW0RZJX8F5: 2026-06-22T07:39:18-07:00; albertsons_6; audience 11202. albertsons (Albertsons Media): No exports for audience 11202 found in scheduled interval
- Q1S0Q38FOEN2XY/Q3ZU55F3BRTE3K: 2026-06-22T07:39:27-07:00; albertsons_6; audience 11270. albertsons (Albertsons Media): No exports for audience 11270 found in scheduled interval
- Q1S0Q38FOEN2XY/Q2PUJ74I70R6FA: 2026-06-22T07:39:28-07:00; albertsons_6; audience 11271. albertsons (Albertsons Media): No exports for audience 11271 found in scheduled interval
- Q1S0Q38FOEN2XY/Q37K6YHSUDCIBR: 2026-06-22T07:39:28-07:00; albertsons_6; audience 11272. albertsons (Albertsons Media): No exports for audience 11272 found in scheduled interval
- Q1S0Q38FOEN2XY/Q3BJ8ZQ6G9WINC: 2026-06-22T07:39:30-07:00; albertsons_6; audience 11283. albertsons (Albertsons Media): No exports for audience 11283 found in scheduled interval
- Q1S0Q38FOEN2XY/Q16JWD96F28MID: 2026-06-22T07:39:52-07:00; albertsons_6; audience 11480. albertsons (Albertsons Media): No exports for audience 11480 found in scheduled interval
- Q1S0Q38FOEN2XY/Q1Q8NBNAOY7FKO: 2026-06-22T07:39:52-07:00; albertsons_6; audience 11481. albertsons (Albertsons Media): No exports for audience 11481 found in scheduled interval
- Q1S0Q38FOEN2XY/Q0CDMM59V4CUUZ: 2026-06-22T07:40:15-07:00; albertsons_6; audience 11700. albertsons (Albertsons Media): No exports for audience 11700 found in scheduled interval
- Q1S0Q38FOEN2XY/Q14GYOG9D1D7EX: 2026-06-22T07:40:17-07:00; albertsons_6; audience 11709. albertsons (Albertsons Media): No exports for audience 11709 found in scheduled interval
- Showing 10 of 30 alert facts; see `indexes/alert_facts.json` for the full imported set.

## Export Checks

- Checks: 30.
- States: `blocked`=30
- Blockers seen: `missing_run_identity`

Check evidence:
- chk_q1s0q38foen2xy_q038otuaze8a8r (Q1S0Q38FOEN2XY/Q038OTUAZE8A8R): state=`blocked`.
  Scope: env=albertsons; org=6; audience=13010.
  Command: `glcli --env albertsons bifrost pizza --audience-id 13010 --org-id 6`
  Blockers: `missing_run_identity`
- chk_q1s0q38foen2xy_q09v12hxzeac1j (Q1S0Q38FOEN2XY/Q09V12HXZEAC1J): state=`blocked`.
  Scope: env=albertsons; org=6; audience=11710.
  Command: `glcli --env albertsons bifrost pizza --audience-id 11710 --org-id 6`
  Blockers: `missing_run_identity`
- chk_q1s0q38foen2xy_q0bqgan8yguajj (Q1S0Q38FOEN2XY/Q0BQGAN8YGUAJJ): state=`blocked`.
  Scope: env=albertsons; org=6; audience=13250.
  Command: `glcli --env albertsons bifrost pizza --audience-id 13250 --org-id 6`
  Blockers: `missing_run_identity`
- chk_q1s0q38foen2xy_q0cdmm59v4cuuz (Q1S0Q38FOEN2XY/Q0CDMM59V4CUUZ): state=`blocked`.
  Scope: env=albertsons; org=6; audience=11700.
  Command: `glcli --env albertsons bifrost pizza --audience-id 11700 --org-id 6`
  Blockers: `missing_run_identity`
- chk_q1s0q38foen2xy_q0fa1rrq0oq1xg (Q1S0Q38FOEN2XY/Q0FA1RRQ0OQ1XG): state=`blocked`.
  Scope: env=albertsons; org=6; audience=13059.
  Command: `glcli --env albertsons bifrost pizza --audience-id 13059 --org-id 6`
  Blockers: `missing_run_identity`
- chk_q1s0q38foen2xy_q14gyog9d1d7ex (Q1S0Q38FOEN2XY/Q14GYOG9D1D7EX): state=`blocked`.
  Scope: env=albertsons; org=6; audience=11709.
  Command: `glcli --env albertsons bifrost pizza --audience-id 11709 --org-id 6`
  Blockers: `missing_run_identity`
- chk_q1s0q38foen2xy_q16jwd96f28mid (Q1S0Q38FOEN2XY/Q16JWD96F28MID): state=`blocked`.
  Scope: env=albertsons; org=6; audience=11480.
  Command: `glcli --env albertsons bifrost pizza --audience-id 11480 --org-id 6`
  Blockers: `missing_run_identity`
- chk_q1s0q38foen2xy_q1q8nbnaoy7fko (Q1S0Q38FOEN2XY/Q1Q8NBNAOY7FKO): state=`blocked`.
  Scope: env=albertsons; org=6; audience=11481.
  Command: `glcli --env albertsons bifrost pizza --audience-id 11481 --org-id 6`
  Blockers: `missing_run_identity`
- chk_q1s0q38foen2xy_q1vnjui4tcc77r (Q1S0Q38FOEN2XY/Q1VNJUI4TCC77R): state=`blocked`.
  Scope: env=albertsons; org=6; audience=11858.
  Command: `glcli --env albertsons bifrost pizza --audience-id 11858 --org-id 6`
  Blockers: `missing_run_identity`
- chk_q1s0q38foen2xy_q1wg41mfjwgpfa (Q1S0Q38FOEN2XY/Q1WG41MFJWGPFA): state=`blocked`.
  Scope: env=albertsons; org=6; audience=13251.
  Command: `glcli --env albertsons bifrost pizza --audience-id 13251 --org-id 6`
  Blockers: `missing_run_identity`
- Showing 10 of 30 checks; see `indexes/checks.json` and `checks/*/check.json` for the full evidence set.

## Recent Evidence

- Most no-export alerts were caused by delayed snapshot/export processing after quervice errors; one audience remains missing.
  Source: `gcloud logs + glcli pizza`; kind: `log_evidence`; captured: `2026-06-22T20:22:49.194Z`.
  Command: `gcloud logging read resource.type=k8s_container jsonPayload.organization_id=albertsons_6 timestamp=2026-06-22T14:20:00Z..20:30:00Z --project=gl-client-albertsons; glcli --env albertsons bifrost pizza --audience-id <id> --org-id 6`
  Findings:
  - At alert time (2026-06-22 14:38-14:44Z), PagerDuty had empty checked_export_run_ids for all 30 alerts, so preflight blocked with missing_run_identity.
  - GCP logs around 2026-06-22 14:20-15:10Z show snapshotting/quervice failures, including nginx 503 Service Temporarily Unavailable responses from quervice and quervice unhandled exceptions.
  - A later metadata sweep found June 22 export runs for 27/30 no-export audiences by 2026-06-22 20:14:58Z; representative runs include 13010-live_ramp_activation_4885-scheduled__2026-06-22T00:00:00+00:00 and 13252-live_ramp_activation_5037-scheduled__2026-06-22T00:00:00+00:00.
  - The remaining three were checked individually: 11283 started 11283-live_ramp_activation_3153 at 17:27Z, hit a query error, then appeared in Pizza for June 22; 13041 started 13041-live_ramp_activation_4941 at 17:52Z and appears in Pizza for June 22; 13048 has no June 22 snapshotting logs and no June 22 Pizza row.

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
