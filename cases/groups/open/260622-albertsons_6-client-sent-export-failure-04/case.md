<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# albertsons_6 client-sent-export-failure

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `open`
Tags: `triage:needs_review`
Incidents: [Q09FHOR4ZDMTUL](https://growthloop.pagerduty.com/incidents/Q09FHOR4ZDMTUL), [Q0LBNI4LMZSL99](https://growthloop.pagerduty.com/incidents/Q0LBNI4LMZSL99), [Q16DX9IDPC15VD](https://growthloop.pagerduty.com/incidents/Q16DX9IDPC15VD), [Q1QQT96DKTRQSZ](https://growthloop.pagerduty.com/incidents/Q1QQT96DKTRQSZ), [Q1UEOA2CBT90GM](https://growthloop.pagerduty.com/incidents/Q1UEOA2CBT90GM), [Q2DZPMOJTWNQ11](https://growthloop.pagerduty.com/incidents/Q2DZPMOJTWNQ11), [Q30P00WNLHRK9W](https://growthloop.pagerduty.com/incidents/Q30P00WNLHRK9W), [Q36ENB8WGMYDAW](https://growthloop.pagerduty.com/incidents/Q36ENB8WGMYDAW), [Q3AEWETRMJ9LHR](https://growthloop.pagerduty.com/incidents/Q3AEWETRMJ9LHR), [Q3D07SXX5MT8PD](https://growthloop.pagerduty.com/incidents/Q3D07SXX5MT8PD), [Q3DJKJ88F7961S](https://growthloop.pagerduty.com/incidents/Q3DJKJ88F7961S), [Q3F2J2NZQGCBA8](https://growthloop.pagerduty.com/incidents/Q3F2J2NZQGCBA8), [Q3T8YVL0VO05SK](https://growthloop.pagerduty.com/incidents/Q3T8YVL0VO05SK), [Q3VC2EL90AOSKX](https://growthloop.pagerduty.com/incidents/Q3VC2EL90AOSKX)
Alerts: 14

## Current Summary

albertsons (Albertsons Media) - Audience 13072: Audience Export failure for 13072 sent to client.

## Notes

## Triage

This case tracks Albertsons client-sent export failure alerts where targeted
preflight can fetch Pizza history for the audience, but cannot identify a
matching export run after the PagerDuty alert. The shared blocker is
`missing_export_after_alert`.

This differs from the already-classified Albertsons BigQuery type mismatch,
Quervice HTTP-client missing-column, Quervice timeout, LiveRamp SFTP/retry, and
no-exports/progressing buckets.

Affected audiences found in the 2026-06-22/2026-06-23 singleton pass:
13072, 10680, 13149, 11017, 11948, 12865, 11014, 11280, 10679, 11996, 11572,
11596, 11488, and 11489.

## Alert Scope

- Alert facts: 14 imported, 14 linked to this group.
- Orgs: `albertsons_6`
- Audiences: `10679`, `10680`, `11014`, `11017`, `11280`, `11488`, `11489`, `11572`, and 6 more
- Destinations: none
- State tuples: none
- Commands seen: `glcli --env albertsons bifrost pizza --audience-id 10679 --org-id 6`, `glcli --env albertsons bifrost pizza --audience-id 10680 --org-id 6`, `glcli --env albertsons bifrost pizza --audience-id 11014 --org-id 6`, and 11 more

Representative alerts:
- Q2DZPMOJTWNQ11/Q33SWUVXWDER0M: 2026-06-22T18:03:50-07:00; albertsons_6; audience 11017. albertsons (Albertsons Media) - Audience 11017: Audience Export failure for 11017 sent to client.
- Q36ENB8WGMYDAW/Q0J8Z3B3E1AQKE: 2026-06-22T18:11:06-07:00; albertsons_6; audience 11948. albertsons (Albertsons Media) - Audience 11948: Audience Export failure for 11948 sent to client.
- Q3AEWETRMJ9LHR/Q38LA4RYLYTPNT: 2026-06-22T19:33:08-07:00; albertsons_6; audience 12865. albertsons (Albertsons Media) - Audience 12865: Audience Export failure for 12865 sent to client.
- Q0LBNI4LMZSL99/Q0T7GVQKHEAEO7: 2026-06-22T21:37:57-07:00; albertsons_6; audience 13072. albertsons (Albertsons Media) - Audience 13072: Audience Export failure for 13072 sent to client.
- Q1QQT96DKTRQSZ/Q15RZGRDXMEDXL: 2026-06-22T22:27:38-07:00; albertsons_6; audience 13149. albertsons (Albertsons Media) - Audience 13149: Audience Export failure for 13149 sent to client.
- Q3F2J2NZQGCBA8/Q018C1J4RA2SH3: 2026-06-22T22:53:38-07:00; albertsons_6; audience 10679. albertsons (Albertsons Media) - Audience 10679: Audience Export failure for 10679 sent to client.
- Q16DX9IDPC15VD/Q12WSM8W1Z42F8: 2026-06-22T22:53:59-07:00; albertsons_6; audience 10680. albertsons (Albertsons Media) - Audience 10680: Audience Export failure for 10680 sent to client.
- Q3D07SXX5MT8PD/Q1TYLG4M1RSOKJ: 2026-06-22T23:28:13-07:00; albertsons_6; audience 11014. albertsons (Albertsons Media) - Audience 11014: Audience Export failure for 11014 sent to client.
- Q3DJKJ88F7961S/Q006NOHXUQU5B2: 2026-06-22T23:56:02-07:00; albertsons_6; audience 11280. albertsons (Albertsons Media) - Audience 11280: Audience Export failure for 11280 sent to client.
- Q3VC2EL90AOSKX/Q1H4VUHM7XYAY8: 2026-06-23T00:11:20-07:00; albertsons_6; audience 11489. albertsons (Albertsons Media) - Audience 11489: Audience Export failure for 11489 sent to client.
- Showing 10 of 14 alert facts; see `indexes/alert_facts.json` for the full imported set.

## Export Checks

- Checks: 14.
- States: `blocked`=14
- Blockers seen: `missing_export_after_alert`

Check evidence:
- chk_q09fhor4zdmtul_q01ytivwye60ti (Q09FHOR4ZDMTUL/Q01YTIVWYE60TI): state=`blocked`.
  Scope: env=albertsons; org=6; audience=11996.
  Command: `glcli --env albertsons bifrost pizza --audience-id 11996 --org-id 6`
  Blockers: `missing_export_after_alert`
- chk_q0lbni4lmzsl99_q0t7gvqkheaeo7 (Q0LBNI4LMZSL99/Q0T7GVQKHEAEO7): state=`blocked`.
  Scope: env=albertsons; org=6; audience=13072.
  Command: `glcli --env albertsons bifrost pizza --audience-id 13072 --org-id 6`
  Blockers: `missing_export_after_alert`
- chk_q16dx9idpc15vd_q12wsm8w1z42f8 (Q16DX9IDPC15VD/Q12WSM8W1Z42F8): state=`blocked`.
  Scope: env=albertsons; org=6; audience=10680.
  Command: `glcli --env albertsons bifrost pizza --audience-id 10680 --org-id 6`
  Blockers: `missing_export_after_alert`
- chk_q1qqt96dktrqsz_q15rzgrdxmedxl (Q1QQT96DKTRQSZ/Q15RZGRDXMEDXL): state=`blocked`.
  Scope: env=albertsons; org=6; audience=13149.
  Command: `glcli --env albertsons bifrost pizza --audience-id 13149 --org-id 6`
  Blockers: `missing_export_after_alert`
- chk_q1ueoa2cbt90gm_q1a0xr0wzlcibx (Q1UEOA2CBT90GM/Q1A0XR0WZLCIBX): state=`blocked`.
  Scope: env=albertsons; org=6; audience=11572.
  Command: `glcli --env albertsons bifrost pizza --audience-id 11572 --org-id 6`
  Blockers: `missing_export_after_alert`
- chk_q2dzpmojtwnq11_q33swuvxwder0m (Q2DZPMOJTWNQ11/Q33SWUVXWDER0M): state=`blocked`.
  Scope: env=albertsons; org=6; audience=11017.
  Command: `glcli --env albertsons bifrost pizza --audience-id 11017 --org-id 6`
  Blockers: `missing_export_after_alert`
- chk_q30p00wnlhrk9w_q18de0vwxepbdv (Q30P00WNLHRK9W/Q18DE0VWXEPBDV): state=`blocked`.
  Scope: env=albertsons; org=6; audience=11596.
  Command: `glcli --env albertsons bifrost pizza --audience-id 11596 --org-id 6`
  Blockers: `missing_export_after_alert`
- chk_q36enb8wgmydaw_q0j8z3b3e1aqke (Q36ENB8WGMYDAW/Q0J8Z3B3E1AQKE): state=`blocked`.
  Scope: env=albertsons; org=6; audience=11948.
  Command: `glcli --env albertsons bifrost pizza --audience-id 11948 --org-id 6`
  Blockers: `missing_export_after_alert`
- chk_q3aewetrmj9lhr_q38la4rylytpnt (Q3AEWETRMJ9LHR/Q38LA4RYLYTPNT): state=`blocked`.
  Scope: env=albertsons; org=6; audience=12865.
  Command: `glcli --env albertsons bifrost pizza --audience-id 12865 --org-id 6`
  Blockers: `missing_export_after_alert`
- chk_q3d07sxx5mt8pd_q1tylg4m1rsokj (Q3D07SXX5MT8PD/Q1TYLG4M1RSOKJ): state=`blocked`.
  Scope: env=albertsons; org=6; audience=11014.
  Command: `glcli --env albertsons bifrost pizza --audience-id 11014 --org-id 6`
  Blockers: `missing_export_after_alert`
- Showing 10 of 14 checks; see `indexes/checks.json` and `checks/*/check.json` for the full evidence set.

## Recent Evidence

- Targeted preflight across the remaining Albertsons client-sent singleton alerts found a consistent blocker: Pizza rows exist for each audience, but no matching export run after the PagerDuty alert, so checks are blocked as missing_export_after_alert. This does not match the existing BigQuery type mismatch, Quervice HTTP-client missing-column, Quervice timeout, LiveRamp SFTP/retry, or no-exports/progressing cases. Affected audiences: 13072, 10680, 13149, 11017, 11948, 12865, 11014, 11280, 10679, 11996, 11572, 11596, 11488, 11489.
  Source: `oncall-triage preflight`; kind: `export_check`; captured: `2026-06-23T15:42:47.546Z`.
  Command: `bun run oncall-triage preflight cases --filter group.id=<each remaining Albertsons client-sent singleton>`
  Findings:
  - New class: client-sent export failure where preflight cannot find an export run after the alert despite available Pizza history.

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
