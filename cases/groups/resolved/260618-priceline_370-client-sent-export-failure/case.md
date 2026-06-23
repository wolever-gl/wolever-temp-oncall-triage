<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# priceline_370 client-sent-export-failure

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `resolved`
Tags: `triage:needs_review`, `resolved:export-healthy`
Incidents: [Q019L5N9ZHBLEV](https://growthloop.pagerduty.com/incidents/Q019L5N9ZHBLEV)
Alerts: 1

## Current Summary

Auto-resolved from Pizza export checks: all 1 alert-scoped export check(s) are healthy_closed with no blockers.

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `priceline_370`
- Audiences: `18474`
- Destinations: none
- State tuples: none
- Commands seen: `glcli --env prod bifrost pizza --audience-id 18474 --org-id 370`

Representative alerts:
- Q019L5N9ZHBLEV/Q3EX3LOMD0CV26: 2026-06-18T17:48:08-07:00; priceline_370; audience 18474. priceline (default) - Audience 18474: Audience Export failure for 18474 sent to client.

## Export Checks

- Checks: 1.
- States: `healthy_closed`=1

Check evidence:
- chk_q019l5n9zhblev_q3ex3lomd0cv26 (Q019L5N9ZHBLEV/Q3EX3LOMD0CV26): state=`healthy_closed`.
  Scope: env=prod; org=370; audience=18474.
  Command: `glcli --env prod bifrost pizza --audience-id 18474 --org-id 370`
  Run 18474-google_adwords_11799-scheduled__2026-06-22T00:00:00+00:00: health=`healthy`; created=2026-06-22T00:21:08.927163+00:00; snapshotting=snapshotting_finished; export=export_finished; failed=0.

## Recent Evidence

- Auto-resolved from Pizza export checks: all 1 alert-scoped export check(s) are healthy_closed with no blockers.
  Source: `check-exports`; kind: `export_check`; captured: `2026-06-22T21:48:20.974Z`.

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
