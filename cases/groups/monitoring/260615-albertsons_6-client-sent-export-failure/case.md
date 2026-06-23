<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# albertsons_6 client-sent-export-failure

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `monitoring`
Tags: `triage:needs_review`, `monitoring:export-processing`
Incidents: [Q0CP38UJ3N5Y8D](https://growthloop.pagerduty.com/incidents/Q0CP38UJ3N5Y8D)
Alerts: 1

## Current Summary

Auto-monitored from Pizza export checks: 1 alert-scoped export check(s) are still processing and 0 are already healthy.

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `albertsons_6`
- Audiences: `13080`
- Destinations: none
- State tuples: none
- Commands seen: `glcli --env albertsons bifrost pizza --audience-id 13080 --org-id 6`

Representative alerts:
- Q0CP38UJ3N5Y8D/Q2O3NKS4HXHPFR: 2026-06-15T05:29:14-07:00; albertsons_6; audience 13080. albertsons (Albertsons Media) - Audience 13080: Audience Export failure for 13080 sent to client.

## Export Checks

- Checks: 1.
- States: `monitoring`=1

Check evidence:
- chk_q0cp38uj3n5y8d_q2o3nks4hxhpfr (Q0CP38UJ3N5Y8D/Q2O3NKS4HXHPFR): state=`monitoring`, next_check_at=`2026-06-22T21:33:29.681Z`.
  Scope: env=albertsons; org=6; audience=13080.
  Command: `glcli --env albertsons bifrost pizza --audience-id 13080 --org-id 6`
  Run 13080-live_ramp_activation_4935-scheduled__2026-06-16T00:00:00+00:00: health=`monitoring`; created=2026-06-16T01:58:20.834115+00:00; snapshotting=snapshotting_finished; export=export_processing; failed=0.

## Recent Evidence

- Auto-monitored from Pizza export checks: 1 alert-scoped export check(s) are still processing and 0 are already healthy.
  Source: `check-exports`; kind: `export_check`; captured: `2026-06-22T21:18:42.318Z`.

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
