<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# albertsons_6 live-ramp export-error

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `open`
Tags: `triage:needs_review`, `triage:bucket-consolidated`
Incidents: [Q19MJO5XIF1NHB](https://growthloop.pagerduty.com/incidents/Q19MJO5XIF1NHB), [Q1E4EUPF9HDZNA](https://growthloop.pagerduty.com/incidents/Q1E4EUPF9HDZNA), [Q1R7D9HWJFBV7D](https://growthloop.pagerduty.com/incidents/Q1R7D9HWJFBV7D), [Q1S0Q38FOEN2XY](https://growthloop.pagerduty.com/incidents/Q1S0Q38FOEN2XY), [Q2CD9OGM7RSCXU](https://growthloop.pagerduty.com/incidents/Q2CD9OGM7RSCXU), [Q30L4PHDKA6R4P](https://growthloop.pagerduty.com/incidents/Q30L4PHDKA6R4P), [Q3AEWETRMJ9LHR](https://growthloop.pagerduty.com/incidents/Q3AEWETRMJ9LHR), [Q3BN6VB0TPVXNF](https://growthloop.pagerduty.com/incidents/Q3BN6VB0TPVXNF)
Alerts: 13

## Current Summary

Consolidated Albertsons LiveRamp export_error investigation case for Other open bucket follow-up.

## Alert Scope

- Alert facts: 13 imported, 13 linked to this group.
- Orgs: `albertsons_6`
- Audiences: `11579`, `12214`, `12399`, `12468`, `12495`, `12506`, `12535`, `12537`, and 4 more
- Destinations: `live_ramp_activation`
- State tuples: `snapshotting_finished/export_error`
- Commands seen: `glcli --env albertsons bifrost pizza --audience-id 11579 --org-id 6`, `glcli --env albertsons bifrost pizza --audience-id 12214 --org-id 6`, `glcli --env albertsons bifrost pizza --audience-id 12399 --org-id 6`, and 9 more

Representative alerts:
- Q1E4EUPF9HDZNA/Q239L21T41CUJE: 2026-06-05T08:09:52-07:00; albertsons_6; audience 12214; live_ramp_activation; snapshotting_finished/export_error. albertsons (Albertsons Media): Exports for audience 12214 failed with states: <(snapshotting_finished,export_error)>
  Runs: `12214-live_ramp_activation_4017-scheduled__2026-05-29T00:00:00+00:00`, `12214-live_ramp_activation_4017-scheduled__2026-06-05T00:00:00+00:00`
- Q1E4EUPF9HDZNA/Q3VSW000L0VZB7: 2026-06-05T08:10:34-07:00; albertsons_6; audience 12399; live_ramp_activation; snapshotting_finished/export_error. albertsons (Albertsons Media): Exports for audience 12399 failed with states: <(snapshotting_finished,export_error)>
  Runs: `12399-live_ramp_activation_4176-scheduled__2026-05-28T00:00:00+00:00`, `12399-live_ramp_activation_4176-scheduled__2026-06-04T00:00:00+00:00`
- Q1E4EUPF9HDZNA/Q2L0ANGULZSN05: 2026-06-05T08:11:49-07:00; albertsons_6; audience 12862; live_ramp_activation; snapshotting_finished/export_error. albertsons (Albertsons Media): Exports for audience 12862 failed with states: <(snapshotting_finished,export_error)>
  Runs: `12862-live_ramp_activation_4610-scheduled__2026-06-05T00:00:00+00:00`, `12862-live_ramp_activation_4610-webapp__2026-06-05T05:45:01+00:00`
- Q1E4EUPF9HDZNA/Q15QOMNUU07G2Q: 2026-06-05T08:11:51-07:00; albertsons_6; audience 12875; live_ramp_activation; snapshotting_finished/export_error. albertsons (Albertsons Media): Exports for audience 12875 failed with states: <(snapshotting_finished,export_error)>
  Runs: `12875-live_ramp_activation_4613-scheduled__2026-06-05T00:00:00+00:00`, `12875-live_ramp_activation_4613-webapp__2026-06-05T05:45:52+00:00`
- Q2CD9OGM7RSCXU/Q16XDBUY1UMK8S: 2026-06-15T07:38:45-07:00; albertsons_6; audience 11579; live_ramp_activation; snapshotting_finished/export_error. albertsons (Albertsons Media): Exports for audience 11579 failed with states: <(snapshotting_finished,export_error)>
  Runs: `11579-live_ramp_activation_3543-scheduled__2026-06-15T00:00:00+00:00`
- Q30L4PHDKA6R4P/Q2X0TI1MPFASVB: 2026-06-15T07:41:55-07:00; albertsons_6; audience 12865; live_ramp_activation; snapshotting_finished/export_error. albertsons (Albertsons Media): Exports for audience 12865 failed with states: <(snapshotting_finished,export_error)>
  Runs: `12865-live_ramp_activation_4611-scheduled__2026-06-15T00:00:00+00:00`
- Q19MJO5XIF1NHB/Q1IJLLEGNNKSO5: 2026-06-18T07:41:12-07:00; albertsons_6; audience 12535; live_ramp_activation; snapshotting_finished/export_error. albertsons (Albertsons Media): Exports for audience 12535 failed with states: <(snapshotting_finished,export_error)>
  Runs: `12535-live_ramp_activation_4309-scheduled__2026-06-15T00:00:00+00:00`
- Q1R7D9HWJFBV7D/Q10YRCG470HJYU: 2026-06-18T07:41:12-07:00; albertsons_6; audience 12537; live_ramp_activation; snapshotting_finished/export_error. albertsons (Albertsons Media): Exports for audience 12537 failed with states: <(snapshotting_finished,export_error)>
  Runs: `12537-live_ramp_activation_4311-scheduled__2026-06-15T00:00:00+00:00`
- Q3BN6VB0TPVXNF/Q0AHQNO4EY83ML: 2026-06-19T07:41:15-07:00; albertsons_6; audience 12808; live_ramp_activation; snapshotting_finished/export_error. albertsons (Albertsons Media): Exports for audience 12808 failed with states: <(snapshotting_finished,export_error)>
  Runs: `12808-live_ramp_activation_4615-scheduled__2026-06-12T00:00:00+00:00`, `12808-live_ramp_activation_4615-scheduled__2026-06-19T00:00:00+00:00`
- Q1S0Q38FOEN2XY/Q0QLGOOH2BMW5P: 2026-06-22T07:42:25-07:00; albertsons_6; audience 12468; live_ramp_activation; snapshotting_finished/export_error. albertsons (Albertsons Media): Exports for audience 12468 failed with states: <(snapshotting_finished,export_error)>
  Runs: `12468-live_ramp_activation_4242-scheduled__2026-06-14T00:00:00+00:00`, `12468-live_ramp_activation_4242-scheduled__2026-06-21T00:00:00+00:00`
- Showing 10 of 13 alert facts; see `indexes/alert_facts.json` for the full imported set.

## Export Checks

- Checks: 13.
- States: `blocked`=13
- Blockers seen: `export_error`, `missing_export_after_alert`

Check evidence:
- chk_q19mjo5xif1nhb_q1ijllegnnkso5 (Q19MJO5XIF1NHB/Q1IJLLEGNNKSO5): state=`blocked`.
  Scope: env=albertsons; org=6; audience=12535; endpoint=app_liveramp_activation_44; destination=live_ramp_activation.
  Checked runs: `12535-live_ramp_activation_4309-scheduled__2026-06-15T00:00:00+00:00`
  Command: `glcli --env albertsons bifrost pizza --audience-id 12535 --org-id 6`
  Blockers: `export_error`
  Run 12535-live_ramp_activation_4309-scheduled__2026-06-15T00:00:00+00:00: health=`blocked`; blockers=export_error; created=2026-06-15T00:20:30.571481+00:00; snapshotting=snapshotting_finished; export=export_error; failed=0.
- chk_q1e4eupf9hdzna_q15qomnuu07g2q (Q1E4EUPF9HDZNA/Q15QOMNUU07G2Q): state=`blocked`.
  Scope: env=albertsons; org=6; audience=12875; endpoint=app_liveramp_activation_41; destination=live_ramp_activation.
  Checked runs: `12875-live_ramp_activation_4613-scheduled__2026-06-05T00:00:00+00:00`, `12875-live_ramp_activation_4613-webapp__2026-06-05T05:45:52+00:00`
  Command: `glcli --env albertsons bifrost pizza --audience-id 12875 --org-id 6`
  Blockers: `export_error`, `export_error`
  Run 12875-live_ramp_activation_4613-scheduled__2026-06-05T00:00:00+00:00: health=`blocked`; blockers=export_error; created=2026-06-05T03:36:37.081197+00:00; snapshotting=snapshotting_finished; export=export_error; failed=0.
  Run 12875-live_ramp_activation_4613-webapp__2026-06-05T05:45:52+00:00: health=`blocked`; blockers=export_error; created=2026-06-05T05:51:57.571379+00:00; snapshotting=snapshotting_finished; export=export_error; failed=0.
- chk_q1e4eupf9hdzna_q239l21t41cuje (Q1E4EUPF9HDZNA/Q239L21T41CUJE): state=`blocked`.
  Scope: env=albertsons; org=6; audience=12214; endpoint=app_liveramp_activation_41; destination=live_ramp_activation.
  Checked runs: `12214-live_ramp_activation_4017-scheduled__2026-05-29T00:00:00+00:00`, `12214-live_ramp_activation_4017-scheduled__2026-06-05T00:00:00+00:00`
  Command: `glcli --env albertsons bifrost pizza --audience-id 12214 --org-id 6`
  Blockers: `export_error`
  Run 12214-live_ramp_activation_4017-scheduled__2026-05-29T00:00:00+00:00: health=`healthy`; created=2026-05-29T02:21:42.512758+00:00; snapshotting=snapshotting_finished; export=export_finished; failed=0.
  Run 12214-live_ramp_activation_4017-scheduled__2026-06-05T00:00:00+00:00: health=`blocked`; blockers=export_error; created=2026-06-05T01:57:25.012773+00:00; snapshotting=snapshotting_finished; export=export_error; failed=0.
- chk_q1e4eupf9hdzna_q2l0angulzsn05 (Q1E4EUPF9HDZNA/Q2L0ANGULZSN05): state=`blocked`.
  Scope: env=albertsons; org=6; audience=12862; endpoint=app_liveramp_activation_41; destination=live_ramp_activation.
  Checked runs: `12862-live_ramp_activation_4610-scheduled__2026-06-05T00:00:00+00:00`, `12862-live_ramp_activation_4610-webapp__2026-06-05T05:45:01+00:00`
  Command: `glcli --env albertsons bifrost pizza --audience-id 12862 --org-id 6`
  Blockers: `export_error`, `export_error`
  Run 12862-live_ramp_activation_4610-scheduled__2026-06-05T00:00:00+00:00: health=`blocked`; blockers=export_error; created=2026-06-05T04:54:00.946417+00:00; snapshotting=snapshotting_finished; export=export_error; failed=0.
  Run 12862-live_ramp_activation_4610-webapp__2026-06-05T05:45:01+00:00: health=`blocked`; blockers=export_error; created=2026-06-05T05:51:09.775219+00:00; snapshotting=snapshotting_finished; export=export_error; failed=0.
- chk_q1e4eupf9hdzna_q3vsw000l0vzb7 (Q1E4EUPF9HDZNA/Q3VSW000L0VZB7): state=`blocked`.
  Scope: env=albertsons; org=6; audience=12399; endpoint=app_liveramp_activation_41; destination=live_ramp_activation.
  Checked runs: `12399-live_ramp_activation_4176-scheduled__2026-05-28T00:00:00+00:00`, `12399-live_ramp_activation_4176-scheduled__2026-06-04T00:00:00+00:00`
  Command: `glcli --env albertsons bifrost pizza --audience-id 12399 --org-id 6`
  Blockers: `export_error`, `export_error`
  Run 12399-live_ramp_activation_4176-scheduled__2026-05-28T00:00:00+00:00: health=`blocked`; blockers=export_error; created=2026-05-28T02:07:11.311760+00:00; snapshotting=snapshotting_finished; export=export_error; failed=0.
  Run 12399-live_ramp_activation_4176-scheduled__2026-06-04T00:00:00+00:00: health=`blocked`; blockers=export_error; created=2026-06-04T03:07:13.608991+00:00; snapshotting=snapshotting_finished; export=export_error; failed=0.
- chk_q1r7d9hwjfbv7d_q10yrcg470hjyu (Q1R7D9HWJFBV7D/Q10YRCG470HJYU): state=`blocked`.
  Scope: env=albertsons; org=6; audience=12537; endpoint=app_liveramp_activation_44; destination=live_ramp_activation.
  Checked runs: `12537-live_ramp_activation_4311-scheduled__2026-06-15T00:00:00+00:00`
  Command: `glcli --env albertsons bifrost pizza --audience-id 12537 --org-id 6`
  Blockers: `export_error`
  Run 12537-live_ramp_activation_4311-scheduled__2026-06-15T00:00:00+00:00: health=`blocked`; blockers=export_error; created=2026-06-15T00:19:58.181884+00:00; snapshotting=snapshotting_finished; export=export_error; failed=0.
- chk_q1s0q38foen2xy_q0491bxp5erj3q (Q1S0Q38FOEN2XY/Q0491BXP5ERJ3Q): state=`blocked`.
  Scope: env=albertsons; org=6; audience=12495; endpoint=app_liveramp_activation_44; destination=live_ramp_activation.
  Checked runs: `12495-live_ramp_activation_4269-scheduled__2026-06-14T00:00:00+00:00`, `12495-live_ramp_activation_4269-scheduled__2026-06-14T00:00:00+00:00`, `12495-live_ramp_activation_4269-scheduled__2026-06-21T00:00:00+00:00`
  Command: `glcli --env albertsons bifrost pizza --audience-id 12495 --org-id 6`
  Blockers: `export_error`
  Run 12495-live_ramp_activation_4269-scheduled__2026-06-14T00:00:00+00:00: health=`healthy`; created=2026-06-14T03:04:52.022712+00:00; snapshotting=snapshotting_finished; export=export_finished; failed=0.
  Run 12495-live_ramp_activation_4269-scheduled__2026-06-14T00:00:00+00:00: health=`healthy`; created=2026-06-14T03:04:52.022712+00:00; snapshotting=snapshotting_finished; export=export_finished; failed=0.
  Run 12495-live_ramp_activation_4269-scheduled__2026-06-21T00:00:00+00:00: health=`blocked`; blockers=export_error; created=2026-06-21T01:14:30.236666+00:00; snapshotting=snapshotting_finished; export=export_error; failed=0.
- chk_q1s0q38foen2xy_q0qlgooh2bmw5p (Q1S0Q38FOEN2XY/Q0QLGOOH2BMW5P): state=`blocked`.
  Scope: env=albertsons; org=6; audience=12468; endpoint=app_liveramp_activation_44; destination=live_ramp_activation.
  Checked runs: `12468-live_ramp_activation_4242-scheduled__2026-06-14T00:00:00+00:00`, `12468-live_ramp_activation_4242-scheduled__2026-06-21T00:00:00+00:00`
  Command: `glcli --env albertsons bifrost pizza --audience-id 12468 --org-id 6`
  Blockers: `export_error`
  Run 12468-live_ramp_activation_4242-scheduled__2026-06-14T00:00:00+00:00: health=`healthy`; created=2026-06-14T02:43:07.971329+00:00; snapshotting=snapshotting_finished; export=export_finished; failed=0.
  Run 12468-live_ramp_activation_4242-scheduled__2026-06-21T00:00:00+00:00: health=`blocked`; blockers=export_error; created=2026-06-21T01:13:56.524447+00:00; snapshotting=snapshotting_finished; export=export_error; failed=0.
- chk_q1s0q38foen2xy_q2t6fotojonnb5 (Q1S0Q38FOEN2XY/Q2T6FOTOJONNB5): state=`blocked`.
  Scope: env=albertsons; org=6; audience=12506; endpoint=app_liveramp_activation_44; destination=live_ramp_activation.
  Checked runs: `12506-live_ramp_activation_4280-scheduled__2026-06-14T00:00:00+00:00`, `12506-live_ramp_activation_4280-scheduled__2026-06-21T00:00:00+00:00`
  Command: `glcli --env albertsons bifrost pizza --audience-id 12506 --org-id 6`
  Blockers: `export_error`
  Run 12506-live_ramp_activation_4280-scheduled__2026-06-14T00:00:00+00:00: health=`healthy`; created=2026-06-14T03:15:09.274637+00:00; snapshotting=snapshotting_finished; export=export_finished; failed=0.
  Run 12506-live_ramp_activation_4280-scheduled__2026-06-21T00:00:00+00:00: health=`blocked`; blockers=export_error; created=2026-06-21T01:11:19.084350+00:00; snapshotting=snapshotting_finished; export=export_error; failed=0.
- chk_q2cd9ogm7rscxu_q16xdbuy1umk8s (Q2CD9OGM7RSCXU/Q16XDBUY1UMK8S): state=`blocked`.
  Scope: env=albertsons; org=6; audience=11579; endpoint=app_liveramp_activation_26; destination=live_ramp_activation.
  Checked runs: `11579-live_ramp_activation_3543-scheduled__2026-06-15T00:00:00+00:00`
  Command: `glcli --env albertsons bifrost pizza --audience-id 11579 --org-id 6`
  Blockers: `export_error`
  Run 11579-live_ramp_activation_3543-scheduled__2026-06-15T00:00:00+00:00: health=`blocked`; blockers=export_error; created=2026-06-15T08:47:36.477211+00:00; snapshotting=snapshotting_finished; export=export_error; failed=0.
- Showing 10 of 13 checks; see `indexes/checks.json` and `checks/*/check.json` for the full evidence set.

## Recent Evidence

- Prepared handoff links for latest audience 12495 failure: Vortex impersonation URL and targeted Cloud Logging query for batch 16dbfa53.
  Source: `agent`; kind: `investigation_note`; captured: `2026-06-23T15:06:11.284Z`.
- Rechecked audience 12495 latest LiveRamp export_error on 2026-06-23; it is still the newest Pizza row and still blocked.
  Source: `oncall-triage`; kind: `resolution_check`; captured: `2026-06-23T14:54:05.262Z`.
  Command: `bun run oncall-triage check-exports cases --filter group.id=260622-albertsons_6-live-ramp-export-error --filter alert.audience=12495`
  Command: `glcli --env albertsons bifrost pizza --audience-id 12495 --org-id 6`
  Findings:
  - Fresh check evaluated Q1S0Q38FOEN2XY/Q0491BXP5ERJ3Q and wrote state=blocked with blocker export_error.
  - Updated check artifact shows the 2026-06-21 run remains export_error with failed_batch_count=1; the 2026-06-14 checked runs are healthy/export_finished.
  - Direct Pizza listing returned 9 rows and the 2026-06-21 01:14:30 UTC row is still newest for audience 12495, so there is no later same-audience success in Pizza to supersede this alert.
- Detailed latest-error check for audience 12495 batch 16dbfa53: LiveRamp returned HTTP 500 from the destinations validation endpoint after two read timeouts.
  Source: `gcloud`; kind: `log_query`; captured: `2026-06-22T23:02:44.692Z`.
  Command: `gcloud logging read 'resource.type="k8s_container" resource.labels.namespace_name="bifrost" jsonPayload.batch_id="16dbfa53-4ade-4418-abed-7a48ddfd7323" timestamp >= "2026-06-21T01:14:00Z" timestamp < "2026-06-21T01:16:00Z"' --project=gl-client-albertsons --format=json`
  Findings:
  - Retry sequence: attempts 1-2 were ReadTimeouts to api.liveramp.com with read timeout=10; attempts 3-4 were HTTPError 500 Server Error for https://api.liveramp.com/activation/v2/destinations?limit=1.
  - Bifrost logged the failure in LiveRampActivationClient._execute_request / validate_credentials, then marked validation_failed, moved the batch from EXPORT_QUEUED to EXPORT_ERROR, and aggregate export state from NO_BATCHES to EXPORT_ERROR.
  - The available log payload does not include a LiveRamp response body or request id beyond the HTTP status and URL.
- Checked whether audience 12399 alert can be resolved after the invalid_grant credential symptom disappeared; current export check is still blocked.
  Source: `oncall-triage`; kind: `resolution_check`; captured: `2026-06-22T22:53:10.395Z`.
  Command: `bun run oncall-triage check-exports cases --filter group.id=260622-albertsons_6-live-ramp-export-error --filter alert.audience=12399`
  Findings:
  - Fresh check evaluated Q1E4EUPF9HDZNA/Q3VSW000L0VZB7 for audience 12399 and wrote state=blocked with export_error on both checked runs.
  - Do not mark resolved: the invalid_grant symptom was transient, but the PagerDuty alert is for export_error and Pizza still reports the export runs blocked.
- Follow-up on LiveRamp invalid_grant credential/token rejection: later LiveRamp calls succeeded, so the credential rejection was not a persistent endpoint-wide failure.
  Source: `gcloud`; kind: `log_query`; captured: `2026-06-22T22:51:31.946Z`.
  Command: `gcloud logging read 'resource.type="k8s_container" resource.labels.namespace_name="bifrost" jsonPayload.export_run_id=<run> (invalid_grant or successful activation evidence)' --project=gl-client-albertsons --format=json`
  Findings:
  - Audience 12399 had invalid_grant/token rejection on 2026-05-28 around 02:07 UTC, but later batches in the same run reached SYNCED/DELIVERED and EXPORT_FINISHED.
  - Other invalid-credential classified events on 2026-06-05 and 2026-06-19 were also surrounded by successful LiveRamp activation/status calls in the same export runs. The affected Pizza checks remain blocked, but the current evidence points to mixed per-batch failures rather than an unresolved global LiveRamp credential outage.

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
