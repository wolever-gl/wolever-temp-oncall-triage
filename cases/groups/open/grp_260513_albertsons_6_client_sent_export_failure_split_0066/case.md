<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# albertsons_6 client-sent-export-failure split

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `open`
Tags: `triage:needs_review`, `triage:snapshotting-error`, `bug:service-quervice`
Incidents: [Q2EJWG22CER0LA](https://growthloop.pagerduty.com/incidents/Q2EJWG22CER0LA), [Q38JR11G2ENK2W](https://growthloop.pagerduty.com/incidents/Q38JR11G2ENK2W)
Alerts: 2

## Current Summary

Needs platform investigation: Albertsons audiences 8473 and 10073 both remain failed after LiveRamp snapshotting pre-checks hit Quervice 502/upstream premature-close errors; latest Pizza rows are snapshotting_error/no_batches with no later success.

## Alert Scope

- Alert facts: 2 imported, 2 linked to this group.
- Orgs: `albertsons_6`
- Audiences: `10073`, `8473`
- Destinations: none
- State tuples: none
- Commands seen: `glcli --env albertsons bifrost pizza --audience-id 10073 --org-id 6`, `glcli --env albertsons bifrost pizza --audience-id 8473 --org-id 6`

Representative alerts:
- Q2EJWG22CER0LA/Q2N69VPQCMRHGL: 2026-05-13T00:18:27-07:00; albertsons_6; audience 8473. albertsons (Albertsons Media) - Audience 8473: Audience Export failure for 8473 sent to client.
- Q38JR11G2ENK2W/Q32J02DN0JRYZ0: 2026-05-14T23:51:59-07:00; albertsons_6; audience 10073. albertsons (Albertsons Media) - Audience 10073: Audience Export failure for 10073 sent to client.

## Export Checks

- Checks: 2.
- States: `blocked`=2
- Blockers seen: `missing_run_identity`

Check evidence:
- chk_q2ejwg22cer0la_q2n69vpqcmrhgl (Q2EJWG22CER0LA/Q2N69VPQCMRHGL): state=`blocked`.
  Scope: env=albertsons; org=6; audience=8473.
  Command: `glcli --env albertsons bifrost pizza --audience-id 8473 --org-id 6`
  Blockers: `missing_run_identity`
- chk_q38jr11g2enk2w_q32j02dn0jryz0 (Q38JR11G2ENK2W/Q32J02DN0JRYZ0): state=`blocked`.
  Scope: env=albertsons; org=6; audience=10073.
  Command: `glcli --env albertsons bifrost pizza --audience-id 10073 --org-id 6`
  Blockers: `missing_run_identity`

## Recent Evidence

- Audience 10073 logs show snapshotting started, base_table_not_empty succeeded, and an initial pre_snapshotting_check returned 200; a subsequent pre_snapshotting_check to Quervice returned 502 after a long upstream wait, with nginx logging upstream prematurely closed connection while reading response header. This matches the 8473 Quervice service-side failure pattern.
  Source: `gl-client-albertsons`; kind: `gcloud_logs`; captured: `2026-05-16T21:48:05.458Z`.
  Command: `gcloud logging read timestamp>=2026-05-15T02:20:00Z timestamp<=2026-05-15T03:00:00Z (10073 OR live_ramp_activation_2061) --project=gl-client-albertsons`
- Audience 10073 latest Pizza row is 2026-05-15 02:40:38 UTC, run 10073-live_ramp_activation_2061-scheduled__2026-05-15T00:00:00+00:00, state snapshotting_error/no_batches with failure reason: Snapshotting failed while running pre_snapshotting_check: unknown error. There is no later successful run.
  Source: `glcli bifrost pizza`; kind: `pizza`; captured: `2026-05-16T21:48:05.323Z`.
  Command: `glcli --env albertsons bifrost pizza --audience-id 10073 --org-id 6 --format json`
- Latest Pizza still shows 2026-05-13 run 8473-live_ramp_activation_1649-scheduled__2026-05-13T00:00:00+00:00 in snapshotting_error/no_batches; prior weekly runs from 2026-04-08 through 2026-05-06 were stuck snapshotting_processing/no_batches; last fully successful export_finished run was 2026-04-01.
  Source: `glcli bifrost pizza`; kind: `pizza`; captured: `2026-05-16T21:44:51.432Z`.
  Command: `glcli --env albertsons bifrost pizza --audience-id 8473 --org-id 6 --format json`
- Albertsons logs for the 2026-05-13 audience 8473 run show the snapshotting pre_snapshotting_check repeatedly calling Quervice for internal_audience_id=8473 and receiving 502 Bad Gateway responses after long upstream waits; nginx logged upstream prematurely closed connection while reading response header. This points to a GrowthLoop/Quervice service-side failure path, not client schema or missing field evidence.
  Source: `gl-client-albertsons`; kind: `gcloud_logs`; captured: `2026-05-16T21:44:51.315Z`.
  Command: `gcloud logging read timestamp>=2026-05-13T05:45:00Z timestamp<=2026-05-13T06:15:00Z (8473 OR live_ramp_activation_1649 OR A_LR_RMN_FY23ExpPcg_Bags_L26W) --project=gl-client-albertsons`
- Live Pizza for audience 8473 shows a later 2026-05-13 LiveRamp scheduled run in snapshotting_error/no_batches; no matching #eng-support thread found for audience 8473.
  Source: `glcli bifrost pizza`; kind: `pizza`; captured: `2026-05-16T21:42:17.561Z`.
  Command: `glcli --env albertsons bifrost pizza --audience-id 8473 --org-id 6 --format json`

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
