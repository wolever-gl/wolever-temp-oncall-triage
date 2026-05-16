<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# albertsons_6 client-sent-export-failure split

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `open`
Tags: `triage:needs_review`, `triage:snapshotting-error`, `bug:service-quervice`
Incidents: [Q2EJWG22CER0LA](https://growthloop.pagerduty.com/incidents/Q2EJWG22CER0LA)
Alerts: 1

## Current Summary

Needs platform investigation: audience 8473 snapshotting pre-check failed because Quervice returned repeated 502s/upstream premature close for the 2026-05-13 LiveRamp run; latest Pizza remains snapshotting_error/no_batches with no later success.

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `albertsons_6`
- Audiences: `8473`
- Destinations: none
- State tuples: none
- Commands seen: `glcli --env albertsons bifrost pizza --audience-id 8473 --org-id 6`

Representative alerts:
- Q2EJWG22CER0LA/Q2N69VPQCMRHGL: 2026-05-13T00:18:27-07:00; albertsons_6; audience 8473. albertsons (Albertsons Media) - Audience 8473: Audience Export failure for 8473 sent to client.

## Export Checks

- Checks: 1.
- States: `blocked`=1
- Blockers seen: `missing_run_identity`

Check evidence:
- chk_q2ejwg22cer0la_q2n69vpqcmrhgl (Q2EJWG22CER0LA/Q2N69VPQCMRHGL): state=`blocked`.
  Scope: env=albertsons; org=6; audience=8473.
  Command: `glcli --env albertsons bifrost pizza --audience-id 8473 --org-id 6`
  Blockers: `missing_run_identity`

## Recent Evidence

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
