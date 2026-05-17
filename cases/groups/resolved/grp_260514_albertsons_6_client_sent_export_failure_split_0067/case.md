<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# albertsons_6 client-sent-export-failure split

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `resolved`
Tags: `triage:needs_review`, `triage:snapshotting-error`, `bug:service-quervice`, `resolved:merged`
Incidents: [Q38JR11G2ENK2W](https://growthloop.pagerduty.com/incidents/Q38JR11G2ENK2W)
Alerts: 1

## Current Summary

Merged into grp_260513_albertsons_6_client_sent_export_failure_split_0066: Same Albertsons platform failure class: both audience 8473 and 10073 failed LiveRamp snapshotting pre_snapshotting_check with Quervice 502/upstream premature close and no later success. Track as one Quervice service-side investigation.

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `albertsons_6`
- Audiences: `10073`
- Destinations: none
- State tuples: none
- Commands seen: `glcli --env albertsons bifrost pizza --audience-id 10073 --org-id 6`

Representative alerts:
- Q38JR11G2ENK2W/Q32J02DN0JRYZ0: 2026-05-14T23:51:59-07:00; albertsons_6; audience 10073. albertsons (Albertsons Media) - Audience 10073: Audience Export failure for 10073 sent to client.

## Export Checks

- Checks: 1.
- States: `open`=1
- Blockers seen: `evidence_unavailable`

Check evidence:
- chk_q38jr11g2enk2w_q32j02dn0jryz0 (Q38JR11G2ENK2W/Q32J02DN0JRYZ0): state=`open`, next_check_at=`2026-05-17T16:09:54.764Z`.
  Scope: env=albertsons; org=6; audience=10073.
  Command: `glcli --env albertsons bifrost pizza --audience-id 10073 --org-id 6`
  Blockers: `evidence_unavailable`

## Recent Evidence

- Albertsons logs for audience 10073 show snapshotting started for run 10073-live_ramp_activation_2061-scheduled__2026-05-15T00:00:00+00:00, base_table_not_empty succeeded, and an initial pre_snapshotting_check returned 200. A subsequent pre_snapshotting_check call to Quervice for internal_audience_id=10073 returned 502 after a long upstream wait; nginx logged upstream prematurely closed connection while reading response header. This matches a GrowthLoop/Quervice service-side failure, not client schema or missing field evidence.
  Source: `gl-client-albertsons`; kind: `gcloud_logs`; captured: `2026-05-16T21:47:24.557Z`.
  Command: `gcloud logging read timestamp>=2026-05-15T02:20:00Z timestamp<=2026-05-15T03:00:00Z (10073 OR live_ramp_activation_2061) --project=gl-client-albertsons`
- Audience 10073 latest Pizza row is 2026-05-15 02:40:38 UTC, run 10073-live_ramp_activation_2061-scheduled__2026-05-15T00:00:00+00:00, state snapshotting_error/no_batches with failure reason: Snapshotting failed while running pre_snapshotting_check: unknown error. Prior weekly runs from 2026-04-17 through 2026-05-08 were snapshotting_processing/no_batches, so there is no later successful run.
  Source: `glcli bifrost pizza`; kind: `pizza`; captured: `2026-05-16T21:46:46.855Z`.
  Command: `glcli --env albertsons bifrost pizza --audience-id 10073 --org-id 6 --format json`

## Next Action

Follow target group grp_260513_albertsons_6_client_sent_export_failure_split_0066.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
