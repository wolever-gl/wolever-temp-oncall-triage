<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# albertsons_6 client-sent-export-failure split

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `resolved`
Tags: `triage:needs_review`, `resolved:merged`
Incidents: [Q09FHOR4ZDMTUL](https://growthloop.pagerduty.com/incidents/Q09FHOR4ZDMTUL), [Q1QQT96DKTRQSZ](https://growthloop.pagerduty.com/incidents/Q1QQT96DKTRQSZ), [Q1UEOA2CBT90GM](https://growthloop.pagerduty.com/incidents/Q1UEOA2CBT90GM), [Q30P00WNLHRK9W](https://growthloop.pagerduty.com/incidents/Q30P00WNLHRK9W), [Q36ENB8WGMYDAW](https://growthloop.pagerduty.com/incidents/Q36ENB8WGMYDAW)
Alerts: 5

## Current Summary

Merged into 260622-albertsons_6-http-client-errors: Direct latest Pizza rows for these client-sent alerts show 2026-06-23 snapshotting_error/no_batches with pre_snapshotting_check HTTP client error, matching the existing Albertsons Quervice HTTP-client missing-column validation case.

## Alert Scope

- Alert facts: 5 imported, 5 linked to this group.
- Orgs: `albertsons_6`
- Audiences: `11572`, `11596`, `11948`, `11996`, `13149`
- Destinations: none
- State tuples: none
- Commands seen: `glcli --env albertsons bifrost pizza --audience-id 11572 --org-id 6`, `glcli --env albertsons bifrost pizza --audience-id 11596 --org-id 6`, `glcli --env albertsons bifrost pizza --audience-id 11948 --org-id 6`, and 2 more

Representative alerts:
- Q36ENB8WGMYDAW/Q0J8Z3B3E1AQKE: 2026-06-22T18:11:06-07:00; albertsons_6; audience 11948. albertsons (Albertsons Media) - Audience 11948: Audience Export failure for 11948 sent to client.
- Q1QQT96DKTRQSZ/Q15RZGRDXMEDXL: 2026-06-22T22:27:38-07:00; albertsons_6; audience 13149. albertsons (Albertsons Media) - Audience 13149: Audience Export failure for 13149 sent to client.
- Q1UEOA2CBT90GM/Q1A0XR0WZLCIBX: 2026-06-23T00:15:45-07:00; albertsons_6; audience 11572. albertsons (Albertsons Media) - Audience 11572: Audience Export failure for 11572 sent to client.
- Q30P00WNLHRK9W/Q18DE0VWXEPBDV: 2026-06-23T00:23:25-07:00; albertsons_6; audience 11596. albertsons (Albertsons Media) - Audience 11596: Audience Export failure for 11596 sent to client.
- Q09FHOR4ZDMTUL/Q01YTIVWYE60TI: 2026-06-23T00:42:11-07:00; albertsons_6; audience 11996. albertsons (Albertsons Media) - Audience 11996: Audience Export failure for 11996 sent to client.

## Export Checks

- Checks: 5.
- States: `blocked`=5
- Blockers seen: `missing_export_after_alert`

Check evidence:
- chk_q09fhor4zdmtul_q01ytivwye60ti (Q09FHOR4ZDMTUL/Q01YTIVWYE60TI): state=`blocked`.
  Scope: env=albertsons; org=6; audience=11996.
  Command: `glcli --env albertsons bifrost pizza --audience-id 11996 --org-id 6`
  Blockers: `missing_export_after_alert`
- chk_q1qqt96dktrqsz_q15rzgrdxmedxl (Q1QQT96DKTRQSZ/Q15RZGRDXMEDXL): state=`blocked`.
  Scope: env=albertsons; org=6; audience=13149.
  Command: `glcli --env albertsons bifrost pizza --audience-id 13149 --org-id 6`
  Blockers: `missing_export_after_alert`
- chk_q1ueoa2cbt90gm_q1a0xr0wzlcibx (Q1UEOA2CBT90GM/Q1A0XR0WZLCIBX): state=`blocked`.
  Scope: env=albertsons; org=6; audience=11572.
  Command: `glcli --env albertsons bifrost pizza --audience-id 11572 --org-id 6`
  Blockers: `missing_export_after_alert`
- chk_q30p00wnlhrk9w_q18de0vwxepbdv (Q30P00WNLHRK9W/Q18DE0VWXEPBDV): state=`blocked`.
  Scope: env=albertsons; org=6; audience=11596.
  Command: `glcli --env albertsons bifrost pizza --audience-id 11596 --org-id 6`
  Blockers: `missing_export_after_alert`
- chk_q36enb8wgmydaw_q0j8z3b3e1aqke (Q36ENB8WGMYDAW/Q0J8Z3B3E1AQKE): state=`blocked`.
  Scope: env=albertsons; org=6; audience=11948.
  Command: `glcli --env albertsons bifrost pizza --audience-id 11948 --org-id 6`
  Blockers: `missing_export_after_alert`

## Next Action

Follow target group 260622-albertsons_6-http-client-errors.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
