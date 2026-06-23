<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# ford_310 client-sent-export-failure

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `resolved`
Tags: `triage:needs_review`, `resolved:export-healthy`
Incidents: [Q1599RYJOP3U3Z](https://growthloop.pagerduty.com/incidents/Q1599RYJOP3U3Z)
Alerts: 1

## Current Summary

Auto-resolved from Pizza export checks: all 1 alert-scoped export check(s) are healthy_closed with no blockers.

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `ford_310`
- Audiences: `34008`
- Destinations: none
- State tuples: none
- Commands seen: `glcli --env prod bifrost pizza --audience-id 34008 --org-id 310`

Representative alerts:
- Q1599RYJOP3U3Z/Q0GGHCQO82B2YU: 2026-06-18T22:20:50-07:00; ford_310; audience 34008. ford (Marketing Production) - Audience 34008: Audience Export failure for 34008 sent to client.

## Export Checks

- Checks: 1.
- States: `healthy_closed`=1

Check evidence:
- chk_q1599ryjop3u3z_q0gghcqo82b2yu (Q1599RYJOP3U3Z/Q0GGHCQO82B2YU): state=`healthy_closed`.
  Scope: env=prod; org=310; audience=34008.
  Command: `glcli --env prod bifrost pizza --audience-id 34008 --org-id 310`
  Run 34008-dv360_20854-scheduled__2026-06-22T00:00:00+00:00: health=`healthy`; created=2026-06-22T00:44:31.188377+00:00; snapshotting=snapshotting_finished; export=export_finished; failed=0.

## Recent Evidence

- Auto-resolved from Pizza export checks: all 1 alert-scoped export check(s) are healthy_closed with no blockers.
  Source: `check-exports`; kind: `export_check`; captured: `2026-06-22T21:41:59.599Z`.

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
