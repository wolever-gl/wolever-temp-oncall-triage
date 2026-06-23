<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# albertsons_6 client-sent-export-failure split

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `resolved`
Tags: `triage:needs_review`, `resolved:merged`
Incidents: [Q0LBNI4LMZSL99](https://growthloop.pagerduty.com/incidents/Q0LBNI4LMZSL99), [Q16DX9IDPC15VD](https://growthloop.pagerduty.com/incidents/Q16DX9IDPC15VD), [Q2DZPMOJTWNQ11](https://growthloop.pagerduty.com/incidents/Q2DZPMOJTWNQ11), [Q3D07SXX5MT8PD](https://growthloop.pagerduty.com/incidents/Q3D07SXX5MT8PD), [Q3DJKJ88F7961S](https://growthloop.pagerduty.com/incidents/Q3DJKJ88F7961S), [Q3F2J2NZQGCBA8](https://growthloop.pagerduty.com/incidents/Q3F2J2NZQGCBA8), [Q3T8YVL0VO05SK](https://growthloop.pagerduty.com/incidents/Q3T8YVL0VO05SK), [Q3VC2EL90AOSKX](https://growthloop.pagerduty.com/incidents/Q3VC2EL90AOSKX)
Alerts: 8

## Current Summary

Merged into 260622-albertsons_6-bigquery-type-mismatch: Direct latest Pizza rows for these client-sent alerts show 2026-06-23 snapshotting_error/no_batches with BigQuery expression type incompatibility, matching the existing Albertsons BigQuery type mismatch case.

## Alert Scope

- Alert facts: 8 imported, 8 linked to this group.
- Orgs: `albertsons_6`
- Audiences: `10679`, `10680`, `11014`, `11017`, `11280`, `11488`, `11489`, `13072`
- Destinations: none
- State tuples: none
- Commands seen: `glcli --env albertsons bifrost pizza --audience-id 10679 --org-id 6`, `glcli --env albertsons bifrost pizza --audience-id 10680 --org-id 6`, `glcli --env albertsons bifrost pizza --audience-id 11014 --org-id 6`, and 5 more

Representative alerts:
- Q2DZPMOJTWNQ11/Q33SWUVXWDER0M: 2026-06-22T18:03:50-07:00; albertsons_6; audience 11017. albertsons (Albertsons Media) - Audience 11017: Audience Export failure for 11017 sent to client.
- Q0LBNI4LMZSL99/Q0T7GVQKHEAEO7: 2026-06-22T21:37:57-07:00; albertsons_6; audience 13072. albertsons (Albertsons Media) - Audience 13072: Audience Export failure for 13072 sent to client.
- Q3F2J2NZQGCBA8/Q018C1J4RA2SH3: 2026-06-22T22:53:38-07:00; albertsons_6; audience 10679. albertsons (Albertsons Media) - Audience 10679: Audience Export failure for 10679 sent to client.
- Q16DX9IDPC15VD/Q12WSM8W1Z42F8: 2026-06-22T22:53:59-07:00; albertsons_6; audience 10680. albertsons (Albertsons Media) - Audience 10680: Audience Export failure for 10680 sent to client.
- Q3D07SXX5MT8PD/Q1TYLG4M1RSOKJ: 2026-06-22T23:28:13-07:00; albertsons_6; audience 11014. albertsons (Albertsons Media) - Audience 11014: Audience Export failure for 11014 sent to client.
- Q3DJKJ88F7961S/Q006NOHXUQU5B2: 2026-06-22T23:56:02-07:00; albertsons_6; audience 11280. albertsons (Albertsons Media) - Audience 11280: Audience Export failure for 11280 sent to client.
- Q3VC2EL90AOSKX/Q1H4VUHM7XYAY8: 2026-06-23T00:11:20-07:00; albertsons_6; audience 11489. albertsons (Albertsons Media) - Audience 11489: Audience Export failure for 11489 sent to client.
- Q3T8YVL0VO05SK/Q0IY038GFO7TJU: 2026-06-23T00:11:47-07:00; albertsons_6; audience 11488. albertsons (Albertsons Media) - Audience 11488: Audience Export failure for 11488 sent to client.

## Export Checks

- Checks: 8.
- States: `blocked`=8
- Blockers seen: `missing_export_after_alert`

Check evidence:
- chk_q0lbni4lmzsl99_q0t7gvqkheaeo7 (Q0LBNI4LMZSL99/Q0T7GVQKHEAEO7): state=`blocked`.
  Scope: env=albertsons; org=6; audience=13072.
  Command: `glcli --env albertsons bifrost pizza --audience-id 13072 --org-id 6`
  Blockers: `missing_export_after_alert`
- chk_q16dx9idpc15vd_q12wsm8w1z42f8 (Q16DX9IDPC15VD/Q12WSM8W1Z42F8): state=`blocked`.
  Scope: env=albertsons; org=6; audience=10680.
  Command: `glcli --env albertsons bifrost pizza --audience-id 10680 --org-id 6`
  Blockers: `missing_export_after_alert`
- chk_q2dzpmojtwnq11_q33swuvxwder0m (Q2DZPMOJTWNQ11/Q33SWUVXWDER0M): state=`blocked`.
  Scope: env=albertsons; org=6; audience=11017.
  Command: `glcli --env albertsons bifrost pizza --audience-id 11017 --org-id 6`
  Blockers: `missing_export_after_alert`
- chk_q3d07sxx5mt8pd_q1tylg4m1rsokj (Q3D07SXX5MT8PD/Q1TYLG4M1RSOKJ): state=`blocked`.
  Scope: env=albertsons; org=6; audience=11014.
  Command: `glcli --env albertsons bifrost pizza --audience-id 11014 --org-id 6`
  Blockers: `missing_export_after_alert`
- chk_q3djkj88f7961s_q006nohxuqu5b2 (Q3DJKJ88F7961S/Q006NOHXUQU5B2): state=`blocked`.
  Scope: env=albertsons; org=6; audience=11280.
  Command: `glcli --env albertsons bifrost pizza --audience-id 11280 --org-id 6`
  Blockers: `missing_export_after_alert`
- chk_q3f2j2nzqgcba8_q018c1j4ra2sh3 (Q3F2J2NZQGCBA8/Q018C1J4RA2SH3): state=`blocked`.
  Scope: env=albertsons; org=6; audience=10679.
  Command: `glcli --env albertsons bifrost pizza --audience-id 10679 --org-id 6`
  Blockers: `missing_export_after_alert`
- chk_q3t8yvl0vo05sk_q0iy038gfo7tju (Q3T8YVL0VO05SK/Q0IY038GFO7TJU): state=`blocked`.
  Scope: env=albertsons; org=6; audience=11488.
  Command: `glcli --env albertsons bifrost pizza --audience-id 11488 --org-id 6`
  Blockers: `missing_export_after_alert`
- chk_q3vc2el90aoskx_q1h4vuhm7xyay8 (Q3VC2EL90AOSKX/Q1H4VUHM7XYAY8): state=`blocked`.
  Scope: env=albertsons; org=6; audience=11489.
  Command: `glcli --env albertsons bifrost pizza --audience-id 11489 --org-id 6`
  Blockers: `missing_export_after_alert`

## Next Action

Follow target group 260622-albertsons_6-bigquery-type-mismatch.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
