<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# albertsons_6 client-sent-export-failure

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `monitoring`
Tags: `triage:needs_review`, `monitoring:export-processing`
Incidents: [Q1J477K9PF6JYJ](https://growthloop.pagerduty.com/incidents/Q1J477K9PF6JYJ)
Alerts: 1

## Current Summary

Auto-monitored from Pizza export checks: 1 alert-scoped export check(s) are still processing and 0 are already healthy.

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `albertsons_6`
- Audiences: `12827`
- Destinations: none
- State tuples: none
- Commands seen: `glcli --env albertsons bifrost pizza --audience-id 12827 --org-id 6`

Representative alerts:
- Q1J477K9PF6JYJ/Q1MDY0GWFZRWM3: 2026-06-16T09:12:42-07:00; albertsons_6; audience 12827. albertsons (Albertsons Media) - Audience 12827: Audience Export failure for 12827 sent to client.

## Export Checks

- Checks: 1.
- States: `monitoring`=1

Check evidence:
- chk_q1j477k9pf6jyj_q1mdy0gwfzrwm3 (Q1J477K9PF6JYJ/Q1MDY0GWFZRWM3): state=`monitoring`, next_check_at=`2026-06-22T21:41:20.639Z`.
  Scope: env=albertsons; org=6; audience=12827.
  Command: `glcli --env albertsons bifrost pizza --audience-id 12827 --org-id 6`
  Run 12827-live_ramp_activation_4959-scheduled__2026-06-19T00:00:00+00:00: health=`monitoring`; created=2026-06-19T01:10:14.812978+00:00; snapshotting=snapshotting_finished; export=export_processing; failed=0.

## Recent Evidence

- Auto-monitored from Pizza export checks: 1 alert-scoped export check(s) are still processing and 0 are already healthy.
  Source: `check-exports`; kind: `export_check`; captured: `2026-06-22T21:26:34.961Z`.

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
