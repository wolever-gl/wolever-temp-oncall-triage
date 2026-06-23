<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# Albertsons BigQuery type mismatch failures

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `open`
Tags: `triage:albertsons-client-sent`, `triage:bigquery-type-mismatch`, `triage:tag_grouped`
Incidents: [Q0B75DL9CGNBG0](https://growthloop.pagerduty.com/incidents/Q0B75DL9CGNBG0), [Q0EQCF34RA3FHN](https://growthloop.pagerduty.com/incidents/Q0EQCF34RA3FHN), [Q0P4ONJOGF8NUI](https://growthloop.pagerduty.com/incidents/Q0P4ONJOGF8NUI), [Q0YS1762L6N8Z7](https://growthloop.pagerduty.com/incidents/Q0YS1762L6N8Z7), [Q13AGUZO2RZY3E](https://growthloop.pagerduty.com/incidents/Q13AGUZO2RZY3E), [Q140U7GG9RCAQU](https://growthloop.pagerduty.com/incidents/Q140U7GG9RCAQU), [Q14QMYQC78PXAR](https://growthloop.pagerduty.com/incidents/Q14QMYQC78PXAR), [Q18OLT4XU8V6Z5](https://growthloop.pagerduty.com/incidents/Q18OLT4XU8V6Z5), [Q18RUDPFI5PNR0](https://growthloop.pagerduty.com/incidents/Q18RUDPFI5PNR0), [Q1ADWD3D2HKZOL](https://growthloop.pagerduty.com/incidents/Q1ADWD3D2HKZOL), [Q1LPO13841C1IC](https://growthloop.pagerduty.com/incidents/Q1LPO13841C1IC), [Q1S0Q38FOEN2XY](https://growthloop.pagerduty.com/incidents/Q1S0Q38FOEN2XY), [Q1TBCJPRHS9RAX](https://growthloop.pagerduty.com/incidents/Q1TBCJPRHS9RAX), [Q1U4985AOBV356](https://growthloop.pagerduty.com/incidents/Q1U4985AOBV356), [Q1VZ0A4IVOZMGM](https://growthloop.pagerduty.com/incidents/Q1VZ0A4IVOZMGM), [Q245CIL2A3XI32](https://growthloop.pagerduty.com/incidents/Q245CIL2A3XI32), [Q24B1M4BAXAHKN](https://growthloop.pagerduty.com/incidents/Q24B1M4BAXAHKN), [Q25HOZVKOE3XJP](https://growthloop.pagerduty.com/incidents/Q25HOZVKOE3XJP), [Q28Z0B0GA51K35](https://growthloop.pagerduty.com/incidents/Q28Z0B0GA51K35), [Q2DET6AW1NICU7](https://growthloop.pagerduty.com/incidents/Q2DET6AW1NICU7), [Q2J49L2EK3Q237](https://growthloop.pagerduty.com/incidents/Q2J49L2EK3Q237), [Q2RVKX275SCHT7](https://growthloop.pagerduty.com/incidents/Q2RVKX275SCHT7), [Q2YTLIYU53UIVU](https://growthloop.pagerduty.com/incidents/Q2YTLIYU53UIVU), [Q33XKCHKMWQNOF](https://growthloop.pagerduty.com/incidents/Q33XKCHKMWQNOF), [Q35FXUK3R7EP76](https://growthloop.pagerduty.com/incidents/Q35FXUK3R7EP76), [Q368INPJJF6K5Y](https://growthloop.pagerduty.com/incidents/Q368INPJJF6K5Y), [Q3D5BM8QKKHA3E](https://growthloop.pagerduty.com/incidents/Q3D5BM8QKKHA3E), [Q3IROJH5XM5T4U](https://growthloop.pagerduty.com/incidents/Q3IROJH5XM5T4U), [Q3O313HUCTB2WD](https://growthloop.pagerduty.com/incidents/Q3O313HUCTB2WD), [Q3QCKCZMRUR8MC](https://growthloop.pagerduty.com/incidents/Q3QCKCZMRUR8MC), [Q3QEKPH9YZV412](https://growthloop.pagerduty.com/incidents/Q3QEKPH9YZV412)
Alerts: 39

## Current Summary

Added 9 SE05 snapshotting alerts whose Pizza/log evidence shows BigQuery expression type mismatch during pre_snapshotting_check.

## Notes

## 2026-06-22 read-only root-cause pass

Known failure: Quervice compiles saved UPC predicates as
`Product_Transactions_Table.upc_id IN UNNEST(%(upc_id_1:STRING)s)`, while
BigQuery now exposes `gcp-abs-emgi-prod-prj-01.emgi_ds_views.Product_Transactions_Table.upc_id`
as `NUMERIC`. BigQuery rejects that as `NUMERIC, ARRAY<STRING>`.

Timing:

- Last confirmed success: 2026-06-19 02:13:23 UTC. Audience 12991
  `LiquidIV_BigGame26_UPCCatEB_L26` ran a UPC string-array predicate against
  `Product_Transactions_Table.upc_id` and completed successfully.
- First confirmed failure: 2026-06-19 03:51:28 UTC. Audience 9373
  `Froneri_OutshineCoughCold25_UPCList_L26` ran the same predicate shape and
  failed with `No matching signature for operator IN UNNEST for argument types:
  NUMERIC, ARRAY<STRING>`.
- Break window: 2026-06-19 02:13:23 UTC to 2026-06-19 03:51:28 UTC.
- Vortex warehouse metadata version 3 for `upc_id` was written later, at
  2026-06-19 17:51:20 UTC, so the Vortex metadata refresh did not cause the
  first failures. It recorded the changed warehouse-visible type after the fact.

Read-only exclusions checked:

- No GrowthLoop service deploy in the break window explains this: Vortex was on
  release-20260611, Snapshotting on a 2026-05-18 image, and Quervice code
  history did not show a recent operator/type-coercion change that would turn
  this into `NUMERIC, ARRAY<STRING>`.
- Host-project Composer/k8s logs in the break window did not show a dbt,
  Composer, or `composer-user-workloads` job for dataset 217 or
  `Product_Transactions_Table`.
- GrowthLoop local repo searches did not find ownership/definition of
  `emgi_ds_views.Product_Transactions_Table`; only normal usage/config references
  and generic UPC tests were found.
- Quervice logs did not show a direct cache miss/reflection for
  `emgi_ds_views.Product_Transactions_Table` in the searched window, nor a store
  cache invalidation for `gcp-abs-emgi-prod-prj-01_collective_prod_61` in the
  break window. The observed Quervice activity was normal audience/snapshotting
  traffic.
- Slack support thread records the same suspicion that this may relate to recent
  Albertsons schema changes, but does not identify a specific actor/job.

Current conclusion: the strongest supported cause is an upstream/customer-managed
BigQuery schema/view/table definition change for
`gcp-abs-emgi-prod-prj-01.emgi_ds_views.Product_Transactions_Table.upc_id`
between 2026-06-19 02:13:23 and 03:51:28 UTC. The exact BigQuery actor/job is
not visible from the host-project logs available here. Direct data-project
BigQuery metadata/audit access is blocked by PermissionDenied/VPC Service
Controls in the current read-only path.

## Alert Scope

- Alert facts: 39 imported, 39 linked to this group.
- Orgs: `albertsons_6`
- Audiences: `10678`, `11117`, `11120`, `11147`, `11148`, `11158`, `11159`, `11283`, and 19 more
- Destinations: `live_ramp_activation`
- State tuples: `snapshotting_error/no_batches`
- Commands seen: `glcli --env albertsons bifrost pizza --audience-id 10678 --org-id 6`, `glcli --env albertsons bifrost pizza --audience-id 11117 --org-id 6`, `glcli --env albertsons bifrost pizza --audience-id 11120 --org-id 6`, and 24 more

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
- Showing 10 of 39 alert facts; see `indexes/alert_facts.json` for the full imported set.

## Export Checks

- Checks: 39.
- States: `blocked`=39
- Blockers seen: `missing_export_after_alert`, `snapshotting_error_requires_review`

Check evidence:
- chk_q0b75dl9cgnbg0_q36fujn2v8r8tz (Q0B75DL9CGNBG0/Q36FUJN2V8R8TZ): state=`blocked`.
  Scope: env=albertsons; org=6; audience=9670; destination=live_ramp_activation.
  Checked runs: `9670-live_ramp_activation_1945-scheduled__2026-06-22T00:00:00+00:00`
  Command: `glcli --env albertsons bifrost pizza --audience-id 9670 --org-id 6`
  Blockers: `snapshotting_error_requires_review`
  Run 9670-live_ramp_activation_1945-scheduled__2026-06-22T00:00:00+00:00: health=`blocked`; blockers=snapshotting_error_requires_review; created=2026-06-22T03:51:18.491131+00:00; snapshotting=snapshotting_error; export=no_batches; failed=0.
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
- chk_q140u7gg9rcaqu_q2au0ie7ccv4t6 (Q140U7GG9RCAQU/Q2AU0IE7CCV4T6): state=`blocked`.
  Scope: env=albertsons; org=6; audience=9792.
  Command: `glcli --env albertsons bifrost pizza --audience-id 9792 --org-id 6`
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
- Showing 10 of 39 checks; see `indexes/checks.json` and `checks/*/check.json` for the full evidence set.

## Recent Evidence

- Added 9 SE05 snapshotting alerts whose Pizza/log evidence shows BigQuery expression type mismatch during pre_snapshotting_check.
  Source: `oncall-triage`; kind: `tag_grouping`; captured: `2026-06-22T20:36:26.801Z`.
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

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
