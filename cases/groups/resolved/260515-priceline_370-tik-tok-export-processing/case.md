<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# priceline_370 tik-tok export-processing

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `resolved`
Tags: `triage:needs_review`, `resolved:export-healthy`
Incidents: [Q0X2D8TR82ZQV9](https://growthloop.pagerduty.com/incidents/Q0X2D8TR82ZQV9)
Alerts: 1

## Current Summary

Auto-resolved from Pizza export checks: all 1 alert-scoped export check(s) are healthy_closed with no blockers.

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `priceline_370`
- Audiences: `18623`
- Destinations: `tik_tok`
- State tuples: `snapshotting_finished/export_processing`
- Commands seen: `glcli --env prod bifrost pizza --audience-id 18623 --org-id 370`

Representative alerts:
- Q0X2D8TR82ZQV9/Q0JCB7G5H5G6U4: 2026-05-15T07:43:25-07:00; priceline_370; audience 18623; tik_tok; snapshotting_finished/export_processing. priceline (default): Exports for audience 18623 failed with states: <(snapshotting_finished,export_processing)>
  Runs: `18623-tik_tok_19832-scheduled__2026-05-15T00:00:00+00:00`

## Export Checks

- Checks: 1.
- States: `healthy_closed`=1

Check evidence:
- chk_q0x2d8tr82zqv9_q0jcb7g5h5g6u4 (Q0X2D8TR82ZQV9/Q0JCB7G5H5G6U4): state=`healthy_closed`.
  Scope: env=prod; org=370; audience=18623; endpoint=app_tiktok_1416; destination=tik_tok.
  Checked runs: `18623-tik_tok_19832-scheduled__2026-05-15T00:00:00+00:00`
  Command: `glcli --env prod bifrost pizza --audience-id 18623 --org-id 370`
  Run 18623-tik_tok_19832-scheduled__2026-05-15T00:00:00+00:00: health=`healthy`; created=2026-05-15T00:38:37.814028+00:00; snapshotting=snapshotting_finished; export=export_finished; failed=0.

## Recent Evidence

- Auto-resolved from Pizza export checks: all 1 alert-scoped export check(s) are healthy_closed with no blockers.
  Source: `check-exports`; kind: `export_check`; captured: `2026-05-16T21:06:53.036Z`.

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
