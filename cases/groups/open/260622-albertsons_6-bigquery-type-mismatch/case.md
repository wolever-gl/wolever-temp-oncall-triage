<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# Albertsons BigQuery type mismatch failures

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `open`
Tags: `triage:albertsons-client-sent`, `triage:bigquery-type-mismatch`, `triage:tag_grouped`
Incidents: [Q0EQCF34RA3FHN](https://growthloop.pagerduty.com/incidents/Q0EQCF34RA3FHN), [Q0P4ONJOGF8NUI](https://growthloop.pagerduty.com/incidents/Q0P4ONJOGF8NUI), [Q0YS1762L6N8Z7](https://growthloop.pagerduty.com/incidents/Q0YS1762L6N8Z7), [Q13AGUZO2RZY3E](https://growthloop.pagerduty.com/incidents/Q13AGUZO2RZY3E), [Q14QMYQC78PXAR](https://growthloop.pagerduty.com/incidents/Q14QMYQC78PXAR), [Q18OLT4XU8V6Z5](https://growthloop.pagerduty.com/incidents/Q18OLT4XU8V6Z5), [Q18RUDPFI5PNR0](https://growthloop.pagerduty.com/incidents/Q18RUDPFI5PNR0), [Q1ADWD3D2HKZOL](https://growthloop.pagerduty.com/incidents/Q1ADWD3D2HKZOL), [Q1LPO13841C1IC](https://growthloop.pagerduty.com/incidents/Q1LPO13841C1IC), [Q1U4985AOBV356](https://growthloop.pagerduty.com/incidents/Q1U4985AOBV356), [Q1VZ0A4IVOZMGM](https://growthloop.pagerduty.com/incidents/Q1VZ0A4IVOZMGM), [Q245CIL2A3XI32](https://growthloop.pagerduty.com/incidents/Q245CIL2A3XI32), [Q24B1M4BAXAHKN](https://growthloop.pagerduty.com/incidents/Q24B1M4BAXAHKN), [Q25HOZVKOE3XJP](https://growthloop.pagerduty.com/incidents/Q25HOZVKOE3XJP), [Q2DET6AW1NICU7](https://growthloop.pagerduty.com/incidents/Q2DET6AW1NICU7), [Q2RVKX275SCHT7](https://growthloop.pagerduty.com/incidents/Q2RVKX275SCHT7), [Q33XKCHKMWQNOF](https://growthloop.pagerduty.com/incidents/Q33XKCHKMWQNOF), [Q368INPJJF6K5Y](https://growthloop.pagerduty.com/incidents/Q368INPJJF6K5Y), [Q3IROJH5XM5T4U](https://growthloop.pagerduty.com/incidents/Q3IROJH5XM5T4U), [Q3O313HUCTB2WD](https://growthloop.pagerduty.com/incidents/Q3O313HUCTB2WD), [Q3QEKPH9YZV412](https://growthloop.pagerduty.com/incidents/Q3QEKPH9YZV412)
Alerts: 21

## Current Summary

Albertsons export failures whose latest evidence points to BigQuery query/type mismatch during pre_snapshotting_check, including IN UNNEST NUMERIC vs ARRAY<STRING> failures.

## Alert Scope

- Alert facts: 21 imported, 21 linked to this group.
- Orgs: `albertsons_6`
- Audiences: `10678`, `11117`, `11120`, `11147`, `11148`, `11158`, `11159`, `11283`, and 13 more
- Destinations: none
- State tuples: none
- Commands seen: `glcli --env albertsons bifrost pizza --audience-id 10678 --org-id 6`, `glcli --env albertsons bifrost pizza --audience-id 11117 --org-id 6`, `glcli --env albertsons bifrost pizza --audience-id 11120 --org-id 6`, and 18 more

Representative alerts:
- Q1U4985AOBV356/Q149635IJ2130E: 2026-06-19T19:14:01-07:00; albertsons_6; audience 12991. albertsons (Albertsons Media) - Audience 12991: Audience Export failure for 12991 sent to client.
- Q368INPJJF6K5Y/Q0EMF73EAZJKRG: 2026-06-19T20:34:25-07:00; albertsons_6; audience 9738. albertsons (Albertsons Media) - Audience 9738: Audience Export failure for 9738 sent to client.
- Q33XKCHKMWQNOF/Q354HLW0V4Z7CD: 2026-06-19T20:35:02-07:00; albertsons_6; audience 9737. albertsons (Albertsons Media) - Audience 9737: Audience Export failure for 9737 sent to client.
- Q0P4ONJOGF8NUI/Q2G9FWMIC7UFBQ: 2026-06-19T20:35:22-07:00; albertsons_6; audience 9696. albertsons (Albertsons Media) - Audience 9696: Audience Export failure for 9696 sent to client.
- Q3IROJH5XM5T4U/Q31WV46APPT5TW: 2026-06-19T20:37:50-07:00; albertsons_6; audience 9668. albertsons (Albertsons Media) - Audience 9668: Audience Export failure for 9668 sent to client.
- Q18RUDPFI5PNR0/Q1PBK8YQR0P2AC: 2026-06-19T20:44:33-07:00; albertsons_6; audience 9671. albertsons (Albertsons Media) - Audience 9671: Audience Export failure for 9671 sent to client.
- Q2DET6AW1NICU7/Q3HG1SDRVACMZR: 2026-06-19T21:33:14-07:00; albertsons_6; audience 11283. albertsons (Albertsons Media) - Audience 11283: Audience Export failure for 11283 sent to client.
- Q18OLT4XU8V6Z5/Q0QGECSMBBEX3H: 2026-06-20T19:10:10-07:00; albertsons_6; audience 9670. albertsons (Albertsons Media) - Audience 9670: Audience Export failure for 9670 sent to client.
- Q3QEKPH9YZV412/Q309D51601M72I: 2026-06-21T20:08:34-07:00; albertsons_6; audience 11474. albertsons (Albertsons Media) - Audience 11474: Audience Export failure for 11474 sent to client.
- Q1ADWD3D2HKZOL/Q30Z4LJ6K2FHM5: 2026-06-21T20:26:46-07:00; albertsons_6; audience 11473. albertsons (Albertsons Media) - Audience 11473: Audience Export failure for 11473 sent to client.
- Showing 10 of 21 alert facts; see `indexes/alert_facts.json` for the full imported set.

## Export Checks

- Checks: 21.
- States: `blocked`=21
- Blockers seen: `missing_export_after_alert`, `snapshotting_error_requires_review`

Check evidence:
- chk_q0eqcf34ra3fhn_q1je1ojkdoikk2 (Q0EQCF34RA3FHN/Q1JE1OJKDOIKK2): state=`blocked`.
  Scope: env=albertsons; org=6; audience=11120.
  Command: `glcli --env albertsons bifrost pizza --audience-id 11120 --org-id 6`
  Blockers: `missing_export_after_alert`
- chk_q0p4onjogf8nui_q2g9fwmic7ufbq (Q0P4ONJOGF8NUI/Q2G9FWMIC7UFBQ): state=`blocked`.
  Scope: env=albertsons; org=6; audience=9696.
  Command: `glcli --env albertsons bifrost pizza --audience-id 9696 --org-id 6`
  Blockers: `snapshotting_error_requires_review`
  Run 9696-live_ramp_activation_1959-scheduled__2026-06-21T00:00:00+00:00: health=`blocked`; blockers=snapshotting_error_requires_review; created=2026-06-21T04:12:49.854277+00:00; snapshotting=snapshotting_error; export=no_batches; failed=0.
- chk_q0ys1762l6n8z7_q0gu11mikpum0h (Q0YS1762L6N8Z7/Q0GU11MIKPUM0H): state=`blocked`.
  Scope: env=albertsons; org=6; audience=11117.
  Command: `glcli --env albertsons bifrost pizza --audience-id 11117 --org-id 6`
  Blockers: `missing_export_after_alert`
- chk_q13aguzo2rzy3e_q2kbgls3rpvi1j (Q13AGUZO2RZY3E/Q2KBGLS3RPVI1J): state=`blocked`.
  Scope: env=albertsons; org=6; audience=11158.
  Command: `glcli --env albertsons bifrost pizza --audience-id 11158 --org-id 6`
  Blockers: `missing_export_after_alert`
- chk_q14qmyqc78pxar_q0ngyggx72talo (Q14QMYQC78PXAR/Q0NGYGGX72TALO): state=`blocked`.
  Scope: env=albertsons; org=6; audience=13102.
  Command: `glcli --env albertsons bifrost pizza --audience-id 13102 --org-id 6`
  Blockers: `missing_export_after_alert`
- chk_q18olt4xu8v6z5_q0qgecsmbbex3h (Q18OLT4XU8V6Z5/Q0QGECSMBBEX3H): state=`blocked`.
  Scope: env=albertsons; org=6; audience=9670.
  Command: `glcli --env albertsons bifrost pizza --audience-id 9670 --org-id 6`
  Blockers: `snapshotting_error_requires_review`
  Run 9670-live_ramp_activation_1945-scheduled__2026-06-22T00:00:00+00:00: health=`blocked`; blockers=snapshotting_error_requires_review; created=2026-06-22T03:51:18.491131+00:00; snapshotting=snapshotting_error; export=no_batches; failed=0.
- chk_q18rudpfi5pnr0_q1pbk8yqr0p2ac (Q18RUDPFI5PNR0/Q1PBK8YQR0P2AC): state=`blocked`.
  Scope: env=albertsons; org=6; audience=9671.
  Command: `glcli --env albertsons bifrost pizza --audience-id 9671 --org-id 6`
  Blockers: `snapshotting_error_requires_review`
  Run 9671-live_ramp_activation_1946-scheduled__2026-06-21T00:00:00+00:00: health=`blocked`; blockers=snapshotting_error_requires_review; created=2026-06-21T01:52:45.495208+00:00; snapshotting=snapshotting_error; export=no_batches; failed=0.
- chk_q1adwd3d2hkzol_q30z4lj6k2fhm5 (Q1ADWD3D2HKZOL/Q30Z4LJ6K2FHM5): state=`blocked`.
  Scope: env=albertsons; org=6; audience=11473.
  Command: `glcli --env albertsons bifrost pizza --audience-id 11473 --org-id 6`
  Blockers: `missing_export_after_alert`
- chk_q1lpo13841c1ic_q3fktk3g0yz8pq (Q1LPO13841C1IC/Q3FKTK3G0YZ8PQ): state=`blocked`.
  Scope: env=albertsons; org=6; audience=11651.
  Command: `glcli --env albertsons bifrost pizza --audience-id 11651 --org-id 6`
  Blockers: `missing_export_after_alert`
- chk_q1u4985aobv356_q149635ij2130e (Q1U4985AOBV356/Q149635IJ2130E): state=`blocked`.
  Scope: env=albertsons; org=6; audience=12991.
  Command: `glcli --env albertsons bifrost pizza --audience-id 12991 --org-id 6`
  Blockers: `snapshotting_error_requires_review`
  Run 12991-live_ramp_activation_4875-scheduled__2026-06-22T00:00:00+00:00: health=`blocked`; blockers=snapshotting_error_requires_review; created=2026-06-22T04:36:16.385104+00:00; snapshotting=snapshotting_error; export=no_batches; failed=0.
- Showing 10 of 21 checks; see `indexes/checks.json` and `checks/*/check.json` for the full evidence set.

## Recent Evidence

- User reports this BigQuery mismatch cohort is already covered by an open incident; keep case open for active tracking and do not prioritize as the next fresh investigation unless new evidence arrives.
  Source: `user triage update`; kind: `triage`; captured: `2026-06-22T20:15:16.536Z`.
- Three newly imported Albertsons sent-to-client alerts joined the BigQuery type mismatch cohort: audiences 10678, 11651, and 12901.
  Source: `Pizza preflight refresh`; kind: `triage`; captured: `2026-06-22T20:12:17.553Z`.
  Findings:
  - Audience 10678 latest row at 2026-06-22 17:58:57 UTC: snapshotting_error/no_batches; pre_snapshotting_check BigQuery expression types were incompatible.
  - Audience 11651 latest row at 2026-06-22 18:06:54 UTC: snapshotting_error/no_batches; pre_snapshotting_check BigQuery expression types were incompatible.
  - Audience 12901 latest row at 2026-06-22 18:11:25 UTC: snapshotting_error/no_batches; pre_snapshotting_check BigQuery expression types were incompatible.
- Google Cloud Logs query for Albertsons BigQuery IN UNNEST type mismatch failures.
  Source: `gcloud logs`; kind: `log_evidence`; captured: `2026-06-22T19:38:51.468Z`.
  Links: [Logs Explorer](https://console.cloud.google.com/logs/query;query=resource.type%3D%22k8s_container%22%0A%22No%20matching%20signature%20for%20operator%20IN%20UNNEST%22;histogramBreakdownField=severity;duration=P1D?project=gl-client-albertsons).
  Log query: `resource.type="k8s_container"
"No matching signature for operator IN UNNEST"`
  Findings:
  - Representative failures show: No matching signature for operator IN UNNEST for argument types: NUMERIC, ARRAY<STRING>.
- Support handoff Slack thread for the Albertsons BigQuery type mismatch audience cohort.
  Source: `support handoff`; kind: `slack_thread`; captured: `2026-06-22T19:38:38.492Z`.
  Links: [Slack thread](https://flywheeltechnologies.slack.com/archives/C02J2RJ6VSL/p1782156916070389).
- Albertsons export failures whose latest evidence points to BigQuery query/type mismatch during pre_snapshotting_check, including IN UNNEST NUMERIC vs ARRAY<STRING> failures.
  Source: `oncall-triage`; kind: `tag_grouping`; captured: `2026-06-22T19:23:46.004Z`.

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
