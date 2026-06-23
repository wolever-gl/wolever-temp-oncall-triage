<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# albertsons_6 albertsons-albertsons-media-no-exports-for-audie

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `monitoring`
Tags: `triage:needs_review`, `triage:bucket-consolidated`, `monitoring:export-recheck`
Incidents: [Q01RMY4QJ0EDMW](https://growthloop.pagerduty.com/incidents/Q01RMY4QJ0EDMW), [Q07WN7B40A87BL](https://growthloop.pagerduty.com/incidents/Q07WN7B40A87BL), [Q0C71WMFRHZ86M](https://growthloop.pagerduty.com/incidents/Q0C71WMFRHZ86M), [Q0FGJPZCXZLXHR](https://growthloop.pagerduty.com/incidents/Q0FGJPZCXZLXHR), [Q0GE0XGKVCGEZA](https://growthloop.pagerduty.com/incidents/Q0GE0XGKVCGEZA), [Q0J2QIB5T4ACAP](https://growthloop.pagerduty.com/incidents/Q0J2QIB5T4ACAP), [Q0LWNP6LITRPIU](https://growthloop.pagerduty.com/incidents/Q0LWNP6LITRPIU), [Q0NB1XLBBBB6OG](https://growthloop.pagerduty.com/incidents/Q0NB1XLBBBB6OG), [Q0OZ0872TDR2Y2](https://growthloop.pagerduty.com/incidents/Q0OZ0872TDR2Y2), [Q0P2NAYBB0ZKX9](https://growthloop.pagerduty.com/incidents/Q0P2NAYBB0ZKX9), [Q0QCK7WWM8CB9Y](https://growthloop.pagerduty.com/incidents/Q0QCK7WWM8CB9Y), [Q0V8KAU4ZZ4R4J](https://growthloop.pagerduty.com/incidents/Q0V8KAU4ZZ4R4J), [Q10A7OWTQLCLX0](https://growthloop.pagerduty.com/incidents/Q10A7OWTQLCLX0), [Q13B8W35HWJE0F](https://growthloop.pagerduty.com/incidents/Q13B8W35HWJE0F), [Q13ELBH1205K6I](https://growthloop.pagerduty.com/incidents/Q13ELBH1205K6I), [Q15MYGKQELDC1U](https://growthloop.pagerduty.com/incidents/Q15MYGKQELDC1U), [Q1DEY65ANC77PV](https://growthloop.pagerduty.com/incidents/Q1DEY65ANC77PV), [Q1HXGWVOFQNLBQ](https://growthloop.pagerduty.com/incidents/Q1HXGWVOFQNLBQ), [Q1IKQF303EXNLG](https://growthloop.pagerduty.com/incidents/Q1IKQF303EXNLG), [Q21GFIZRJV32YX](https://growthloop.pagerduty.com/incidents/Q21GFIZRJV32YX), [Q2CJ2DGHY6J8DJ](https://growthloop.pagerduty.com/incidents/Q2CJ2DGHY6J8DJ), [Q2EX4VNNGRRP6D](https://growthloop.pagerduty.com/incidents/Q2EX4VNNGRRP6D), [Q2ST7MHN83WRVP](https://growthloop.pagerduty.com/incidents/Q2ST7MHN83WRVP), [Q2W5HQOV4HP3EU](https://growthloop.pagerduty.com/incidents/Q2W5HQOV4HP3EU), [Q2Y616K4SJRW9K](https://growthloop.pagerduty.com/incidents/Q2Y616K4SJRW9K), [Q2YP3CMCUOBCO8](https://growthloop.pagerduty.com/incidents/Q2YP3CMCUOBCO8), [Q2YQUVRHHFJIZ3](https://growthloop.pagerduty.com/incidents/Q2YQUVRHHFJIZ3), [Q2Z35S4PQM9D26](https://growthloop.pagerduty.com/incidents/Q2Z35S4PQM9D26), [Q323CS0DQL0PYQ](https://growthloop.pagerduty.com/incidents/Q323CS0DQL0PYQ), [Q358IMGILLIALD](https://growthloop.pagerduty.com/incidents/Q358IMGILLIALD), [Q3EWG5PY4MPK8A](https://growthloop.pagerduty.com/incidents/Q3EWG5PY4MPK8A), [Q3RBHKEKA0JLGO](https://growthloop.pagerduty.com/incidents/Q3RBHKEKA0JLGO), [Q3TT7ATB5C8IBD](https://growthloop.pagerduty.com/incidents/Q3TT7ATB5C8IBD)
Alerts: 33

## Current Summary

After splitting six snapshotting_error/no_batches alerts, the remaining 27 Albertsons no-export alerts all have a 2026-06-22 scheduled LiveRamp activation run after the alert window: 19 export_finished and 8 export_processing. Monitor pending processing completions rather than continue root-cause investigation in this group.

## Alert Scope

- Alert facts: 33 imported, 33 linked to this group.
- Orgs: `albertsons_6`
- Audiences: `10013`, `10015`, `10026`, `10027`, `10042`, `10046`, `10048`, `10075`, and 25 more
- Destinations: none
- State tuples: none
- Commands seen: `glcli --env albertsons bifrost pizza --audience-id 10013 --org-id 6`, `glcli --env albertsons bifrost pizza --audience-id 10015 --org-id 6`, `glcli --env albertsons bifrost pizza --audience-id 10026 --org-id 6`, and 30 more

Representative alerts:
- Q1HXGWVOFQNLBQ/Q3CJZPGATBIEIY: 2026-06-22T07:31:21-07:00; albertsons_6; audience 2159. albertsons (Albertsons Media): No exports for audience 2159 found in scheduled interval
- Q0LWNP6LITRPIU/Q20CJS37SV7Q05: 2026-06-22T07:35:55-07:00; albertsons_6; audience 9665. albertsons (Albertsons Media): No exports for audience 9665 found in scheduled interval
- Q10A7OWTQLCLX0/Q271AQ4AM1661D: 2026-06-22T07:35:55-07:00; albertsons_6; audience 9666. albertsons (Albertsons Media): No exports for audience 9666 found in scheduled interval
- Q2Y616K4SJRW9K/Q1DQEGHV9I3BKB: 2026-06-22T07:35:56-07:00; albertsons_6; audience 9668. albertsons (Albertsons Media): No exports for audience 9668 found in scheduled interval
- Q07WN7B40A87BL/Q2JTQO1QPYNXR5: 2026-06-22T07:35:58-07:00; albertsons_6; audience 9696. albertsons (Albertsons Media): No exports for audience 9696 found in scheduled interval
- Q2W5HQOV4HP3EU/Q0VZ60NZVSYJU0: 2026-06-22T07:35:58-07:00; albertsons_6; audience 9671. albertsons (Albertsons Media): No exports for audience 9671 found in scheduled interval
- Q2YQUVRHHFJIZ3/Q2JAGZW3EUFJDO: 2026-06-22T07:36:00-07:00; albertsons_6; audience 9703. albertsons (Albertsons Media): No exports for audience 9703 found in scheduled interval
- Q01RMY4QJ0EDMW/Q188P9C2NJ8A5Y: 2026-06-22T07:36:01-07:00; albertsons_6; audience 9705. albertsons (Albertsons Media): No exports for audience 9705 found in scheduled interval
- Q3RBHKEKA0JLGO/Q13JF5982SP9ZT: 2026-06-22T07:36:01-07:00; albertsons_6; audience 9704. albertsons (Albertsons Media): No exports for audience 9704 found in scheduled interval
- Q0P2NAYBB0ZKX9/Q242WOR3SSY0CB: 2026-06-22T07:36:04-07:00; albertsons_6; audience 9737. albertsons (Albertsons Media): No exports for audience 9737 found in scheduled interval
- Showing 10 of 33 alert facts; see `indexes/alert_facts.json` for the full imported set.

## Export Checks

- Checks: 33.
- States: `blocked`=33
- Blockers seen: `missing_run_identity`

Check evidence:
- chk_q01rmy4qj0edmw_q188p9c2nj8a5y (Q01RMY4QJ0EDMW/Q188P9C2NJ8A5Y): state=`blocked`.
  Scope: env=albertsons; org=6; audience=9705.
  Command: `glcli --env albertsons bifrost pizza --audience-id 9705 --org-id 6`
  Blockers: `missing_run_identity`
- chk_q07wn7b40a87bl_q2jtqo1qpynxr5 (Q07WN7B40A87BL/Q2JTQO1QPYNXR5): state=`blocked`.
  Scope: env=albertsons; org=6; audience=9696.
  Command: `glcli --env albertsons bifrost pizza --audience-id 9696 --org-id 6`
  Blockers: `missing_run_identity`
- chk_q0c71wmfrhz86m_q16s6x2yue978g (Q0C71WMFRHZ86M/Q16S6X2YUE978G): state=`blocked`.
  Scope: env=albertsons; org=6; audience=10260.
  Command: `glcli --env albertsons bifrost pizza --audience-id 10260 --org-id 6`
  Blockers: `missing_run_identity`
- chk_q0fgjpzcxzlxhr_q33cabfze6wjlu (Q0FGJPZCXZLXHR/Q33CABFZE6WJLU): state=`blocked`.
  Scope: env=albertsons; org=6; audience=9738.
  Command: `glcli --env albertsons bifrost pizza --audience-id 9738 --org-id 6`
  Blockers: `missing_run_identity`
- chk_q0ge0xgkvcgeza_q1vthi2niz195p (Q0GE0XGKVCGEZA/Q1VTHI2NIZ195P): state=`blocked`.
  Scope: env=albertsons; org=6; audience=10768.
  Command: `glcli --env albertsons bifrost pizza --audience-id 10768 --org-id 6`
  Blockers: `missing_run_identity`
- chk_q0j2qib5t4acap_q0l0202zm8p9px (Q0J2QIB5T4ACAP/Q0L0202ZM8P9PX): state=`blocked`.
  Scope: env=albertsons; org=6; audience=10792.
  Command: `glcli --env albertsons bifrost pizza --audience-id 10792 --org-id 6`
  Blockers: `missing_run_identity`
- chk_q0lwnp6litrpiu_q20cjs37sv7q05 (Q0LWNP6LITRPIU/Q20CJS37SV7Q05): state=`blocked`.
  Scope: env=albertsons; org=6; audience=9665.
  Command: `glcli --env albertsons bifrost pizza --audience-id 9665 --org-id 6`
  Blockers: `missing_run_identity`
- chk_q0nb1xlbbbb6og_q1z6210kiqryam (Q0NB1XLBBBB6OG/Q1Z6210KIQRYAM): state=`blocked`.
  Scope: env=albertsons; org=6; audience=10746.
  Command: `glcli --env albertsons bifrost pizza --audience-id 10746 --org-id 6`
  Blockers: `missing_run_identity`
- chk_q0oz0872tdr2y2_q2m3ib0ephbhut (Q0OZ0872TDR2Y2/Q2M3IB0EPHBHUT): state=`blocked`.
  Scope: env=albertsons; org=6; audience=10026.
  Command: `glcli --env albertsons bifrost pizza --audience-id 10026 --org-id 6`
  Blockers: `missing_run_identity`
- chk_q0p2naybb0zkx9_q242wor3ssy0cb (Q0P2NAYBB0ZKX9/Q242WOR3SSY0CB): state=`blocked`.
  Scope: env=albertsons; org=6; audience=9737.
  Command: `glcli --env albertsons bifrost pizza --audience-id 9737 --org-id 6`
  Blockers: `missing_run_identity`
- Showing 10 of 33 checks; see `indexes/checks.json` and `checks/*/check.json` for the full evidence set.

## Recent Evidence

- Artifact paths after monitoring transition: export and Airflow evidence artifacts now live under the monitoring group directory.
  Source: `case-workspace`; kind: `artifact_note`; captured: `2026-06-22T22:37:28.205Z`.
  Artifact: latest_export_metrics_json: `cases/groups/monitoring/260622-albertsons_6-albertsons-albertsons-media-no-exports-for-audie/artifacts/2026-06-22-latest-export-metrics.json`
  Artifact: latest_export_metrics_tsv: `cases/groups/monitoring/260622-albertsons_6-albertsons-albertsons-media-no-exports-for-audie/artifacts/2026-06-22-latest-export-metrics.tsv`
  Artifact: export_metrics_summary: `cases/groups/monitoring/260622-albertsons_6-albertsons-albertsons-media-no-exports-for-audie/artifacts/2026-06-22-export-metrics-summary.json`
  Artifact: airflow_not_executing_tsv: `cases/groups/monitoring/260622-albertsons_6-albertsons-albertsons-media-no-exports-for-audie/artifacts/2026-06-22-airflow-not-executing.tsv`
  Artifact: airflow_backlog_summary: `cases/groups/monitoring/260622-albertsons_6-albertsons-albertsons-media-no-exports-for-audie/artifacts/2026-06-22-airflow-backlog-summary.json`
- GCloud org-level logs during the alert window show Airflow scheduler backlog for albertsons_6_audience_snapshotting: the DAG repeatedly had 6/6 running and queued tasks and delayed task execution due to max_active_tasks=6. In the queried 14:20-15:00Z window this matched 131 delayed audience task IDs overall, but only 3 of this case’s 33 audience IDs appeared in those delayed task names.
  Source: `gcloud-logging`; kind: `log_query`; captured: `2026-06-22T22:35:37.623Z`.
  Artifact: airflow_not_executing_tsv: `cases/groups/open/260622-albertsons_6-albertsons-albertsons-media-no-exports-for-audie/artifacts/2026-06-22-airflow-not-executing.tsv`
  Artifact: airflow_backlog_summary: `cases/groups/open/260622-albertsons_6-albertsons-albertsons-media-no-exports-for-audie/artifacts/2026-06-22-airflow-backlog-summary.json`
  Log query: `project=gl-client-albertsons resource.type=k8s_container timestamp 2026-06-22T14:20:00Z..2026-06-22T15:00:00Z textPayload:"Not executing <TaskInstance: albertsons_6_audience_snapshotting.snapshotting_audience_"`
  Findings:
  - Airflow DAG saturation explains broad delayed scheduled work but does not fully explain all 33 case alerts by direct audience ID match; export metrics provide the stronger cohort split.
- Fetched Bifrost/Pizza export metrics for all 33 Albertsons no-export alerts via shared albertsons Bifrost proxy. All 33 have a 2026-06-22 scheduled LiveRamp activation run after the alert window: 19 latest export_finished, 8 latest export_processing, and 6 latest snapshotting_error/no_batches.
  Source: `gcloud-bifrost-pizza`; kind: `export_check`; captured: `2026-06-22T22:35:18.722Z`.
  Artifact: latest_export_metrics_json: `cases/groups/open/260622-albertsons_6-albertsons-albertsons-media-no-exports-for-audie/artifacts/2026-06-22-latest-export-metrics.json`
  Artifact: latest_export_metrics_tsv: `cases/groups/open/260622-albertsons_6-albertsons-albertsons-media-no-exports-for-audie/artifacts/2026-06-22-latest-export-metrics.tsv`
  Artifact: export_metrics_summary: `cases/groups/open/260622-albertsons_6-albertsons-albertsons-media-no-exports-for-audie/artifacts/2026-06-22-export-metrics-summary.json`
  Command: `curl http://localhost:29611/v1/exports?environment=gcp -d {org_id:6,internal_ids:[33 audiences],limit:3000}`
  Findings:
  - The consolidated alert bucket should split into delayed/progressing exports versus snapshotting failures: finished audiences=2159,9665,9666,9703,9704,9705,9739,10026,10027,10042,10046,10048,10260,10304,10688,10689,10746,10768,10792; processing audiences=10013,10015,10612,10613,10692,10693,10742,10779; snapshotting_error/no_batches audiences=9668,9671,9696,9737,9738,10075.

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
