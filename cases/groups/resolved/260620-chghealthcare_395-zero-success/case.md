<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# chghealthcare_395 zero-success

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `resolved`
Tags: `triage:needs_review`, `resolved:export-healthy`
Incidents: [Q3DVE6431EU237](https://growthloop.pagerduty.com/incidents/Q3DVE6431EU237)
Alerts: 1

## Current Summary

Auto-resolved from Pizza export checks: all 1 alert-scoped export check(s) are healthy_closed with no blockers.

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `chghealthcare_395`
- Audiences: `38601`
- Destinations: none
- State tuples: none
- Commands seen: `glcli --env prod bifrost pizza --audience-id 38601 --org-id 395`

Representative alerts:
- Q3DVE6431EU237/Q2BNL6NY27I4RS: 2026-06-20T18:50:05-07:00; chghealthcare_395; audience 38601. chghealthcare (CompHealth) - Audience 38601: 0 successfull_exports from pizza tracker found 10 minutes after new export

## Export Checks

- Checks: 1.
- States: `healthy_closed`=1

Check evidence:
- chk_q3dve6431eu237_q2bnl6ny27i4rs (Q3DVE6431EU237/Q2BNL6NY27I4RS): state=`healthy_closed`.
  Scope: env=prod; org=395; audience=38601.
  Command: `glcli --env prod bifrost pizza --audience-id 38601 --org-id 395`
  Run 38601-marketing_cloud_22807-webapp__2026-06-22T15:09:18+00:00: health=`healthy`; created=2026-06-22T15:11:47.418923+00:00; snapshotting=snapshotting_finished; export=export_finished; failed=0.

## Recent Evidence

- Auto-resolved from Pizza export checks: all 1 alert-scoped export check(s) are healthy_closed with no blockers.
  Source: `check-exports`; kind: `export_check`; captured: `2026-06-22T22:00:11.820Z`.

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
