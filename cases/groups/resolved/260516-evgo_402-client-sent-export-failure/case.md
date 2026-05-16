<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# evgo_402 client-sent-export-failure

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `resolved`
Tags: `triage:needs_review`, `resolved:retry_succeeded`
Incidents: [Q22U9UI0BTFNJC](https://growthloop.pagerduty.com/incidents/Q22U9UI0BTFNJC)
Alerts: 1

## Current Summary

Resolved as retry/false alarm: failed Braze run 29790-braze_18238-scheduled__2026-05-16T14:00:00+00:00 hit transient Snowflake connector response-ended-prematurely during snapshotting, but later same-scope scheduled runs at 15:00 and 16:00 UTC completed export_finished with zero failures/rejects.

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `evgo_402`
- Audiences: `29790`
- Destinations: none
- State tuples: none
- Commands seen: `glcli --env prod bifrost pizza --audience-id 29790 --org-id 402`

Representative alerts:
- Q22U9UI0BTFNJC/Q0K1H7M6L0BBDH: 2026-05-16T07:24:58-07:00; evgo_402; audience 29790. EVgo (EVgo Prod) - Audience 29790: Audience Export failure for 29790 sent to client.

## Export Checks

- Checks: 1.
- States: `blocked`=1
- Blockers seen: `missing_run_identity`

Check evidence:
- chk_q22u9ui0btfnjc_q0k1h7m6l0bbdh (Q22U9UI0BTFNJC/Q0K1H7M6L0BBDH): state=`blocked`.
  Scope: env=prod; org=402; audience=29790.
  Command: `glcli --env prod bifrost pizza --audience-id 29790 --org-id 402`
  Blockers: `missing_run_identity`

## Recent Evidence

- Follow-up on delta redrop risk: scoped logs for 2026-05-16T14:00 run show two snapshot_history_write_up attempts returned 500 at 14:24:55Z and 14:34:10Z, with no delta_history_write_up/unload/unloaded_deltas_write/metadata_write_up success for that external_run_id. The 15:00 run completed snapshot_history_write_up, metadata_write_up, delta_history_write_up, unload, and unloaded_deltas_write successfully. Quervice source shows delta_history_write_up chooses the previous completed run from metadata excluding current external_run_id, and unload/unloaded_deltas_write select delta_history rows with no unloaded_deltas marker or the current run. Therefore there were no specific 14:00 delta files to re-drop; the next successful run generated/unloaded the accumulated deltas and marked them against the 15:00 cloud_storage_uri.
  Source: `gcloud scoped logs + quervice/bifrost source`; kind: `triage`; captured: `2026-05-16T16:59:58.528Z`.
- Alert Q0K1H7M6L0BBDH for EVgo org 402 audience 29790 fired at 2026-05-16T07:24:58-07:00. Scoped pizza command 'glcli --env prod bifrost pizza --audience-id 29790 --org-id 402 --format=json' identified failed run 29790-braze_18238-scheduled__2026-05-16T14:00:00+00:00 created 2026-05-16 14:21:22 UTC with snapshot state snapshotting_error, export state no_batches, failure reason 'Snapshotting failed while running unload: Unexpected error'. Scoped gcloud logs for org evgo_402/internal_audience_id 29790/request_id 8048cc39-d46d-4382-abb0-f693ff4aba67 show quervice snapshot_history_write_up returned 500 from Snowflake connector ChunkedEncodingError: Response ended prematurely at 2026-05-16T14:24:55Z. Later same-scope scheduled Braze runs 29790-braze_18238-scheduled__2026-05-16T15:00:00+00:00 and 2026-05-16T16:00:00+00:00 reached snapshotting_finished/export_finished with 0 failures/rejects. This looks like a transient Snowflake/downstream/network interruption, not an active GrowthLoop product bug; no manual remediation observed.
  Source: `glcli+pizza+gcloud scoped logs`; kind: `triage`; captured: `2026-05-16T16:47:47.172Z`.

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
