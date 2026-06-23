<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# ford_310 client-sent-export-failure

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `resolved`
Tags: `triage:needs_review`, `resolved:export-healthy`
Incidents: [Q2FAMW1B9VZV5J](https://growthloop.pagerduty.com/incidents/Q2FAMW1B9VZV5J)
Alerts: 3

## Current Summary

Auto-resolved from Pizza export checks: all 3 alert-scoped export check(s) are healthy_closed with no blockers.

## Alert Scope

- Alert facts: 3 imported, 3 linked to this group.
- Orgs: `ford_310`
- Audiences: `33347`, `34010`, `34059`
- Destinations: none
- State tuples: none
- Commands seen: `glcli --env prod bifrost pizza --audience-id 33347 --org-id 310`, `glcli --env prod bifrost pizza --audience-id 34010 --org-id 310`, `glcli --env prod bifrost pizza --audience-id 34059 --org-id 310`

Representative alerts:
- Q2FAMW1B9VZV5J/Q1BCN36AR4EM6L: 2026-06-05T10:56:39-07:00; ford_310; audience 34059. ford (Marketing Production) - Audience 34059: Audience Export failure for 34059 sent to client.
- Q2FAMW1B9VZV5J/Q1NVQOLD406GRF: 2026-06-06T06:22:43-07:00; ford_310; audience 34010. ford (Marketing Production) - Audience 34010: Audience Export failure for 34010 sent to client.
- Q2FAMW1B9VZV5J/Q2932GTM81FIBB: 2026-06-07T10:28:21-07:00; ford_310; audience 33347. ford (Marketing Production) - Audience 33347: Audience Export failure for 33347 sent to client.

## Export Checks

- Checks: 3.
- States: `healthy_closed`=3

Check evidence:
- chk_q2famw1b9vzv5j_q1bcn36ar4em6l (Q2FAMW1B9VZV5J/Q1BCN36AR4EM6L): state=`healthy_closed`.
  Scope: env=prod; org=310; audience=34059.
  Command: `glcli --env prod bifrost pizza --audience-id 34059 --org-id 310`
  Run 34059-gcs_22278-scheduled__2026-06-22T00:00:00+00:00: health=`healthy`; created=2026-06-22T00:55:01.699616+00:00; snapshotting=snapshotting_finished; export=export_finished; failed=0.
- chk_q2famw1b9vzv5j_q1nvqold406grf (Q2FAMW1B9VZV5J/Q1NVQOLD406GRF): state=`healthy_closed`.
  Scope: env=prod; org=310; audience=34010.
  Command: `glcli --env prod bifrost pizza --audience-id 34010 --org-id 310`
  Run 34010-facebook_20864-scheduled__2026-06-22T00:00:00+00:00: health=`healthy`; created=2026-06-22T00:50:00.613762+00:00; snapshotting=snapshotting_finished; export=export_finished; failed=0.
- chk_q2famw1b9vzv5j_q2932gtm81fibb (Q2FAMW1B9VZV5J/Q2932GTM81FIBB): state=`healthy_closed`.
  Scope: env=prod; org=310; audience=33347.
  Command: `glcli --env prod bifrost pizza --audience-id 33347 --org-id 310`
  Run 33347-the_trade_desk_crm_20850-scheduled__2026-06-22T00:00:00+00:00: health=`healthy`; created=2026-06-22T00:34:41.937978+00:00; snapshotting=snapshotting_finished; export=export_finished; failed=0.

## Recent Evidence

- Auto-resolved from Pizza export checks: all 3 alert-scoped export check(s) are healthy_closed with no blockers.
  Source: `check-exports`; kind: `export_check`; captured: `2026-06-22T21:18:23.832Z`.

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
