<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# 174 client-sent-export-failure

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `resolved`
Tags: `triage:needs_review`, `resolved:export-healthy`
Incidents: [Q1H2G1LPQBKYIZ](https://growthloop.pagerduty.com/incidents/Q1H2G1LPQBKYIZ)
Alerts: 4

## Current Summary

Auto-resolved from Pizza export checks: all 4 alert-scoped export check(s) are healthy_closed with no blockers.

## Alert Scope

- Alert facts: 4 imported, 4 linked to this group.
- Orgs: `174`
- Audiences: `17206`, `25474`, `27534`, `28188`
- Destinations: none
- State tuples: none
- Commands seen: `glcli --env prod bifrost pizza --audience-id 17206 --org-id 174`, `glcli --env prod bifrost pizza --audience-id 25474 --org-id 174`, `glcli --env prod bifrost pizza --audience-id 27534 --org-id 174`, and 1 more

Representative alerts:
- Q1H2G1LPQBKYIZ/Q0BU4ZPYRD89TH: 2026-06-03T03:42:31-07:00; 174; audience 27534. NJ Devils (default) - Audience 27534: Audience Export failure for 27534 sent to client.
- Q1H2G1LPQBKYIZ/Q0ANXDZ22B4JYD: 2026-06-04T17:19:08-07:00; 174; audience 28188. NJ Devils (default) - Audience 28188: Audience Export failure for 28188 sent to client.
- Q1H2G1LPQBKYIZ/Q20J9ZU32WRHTI: 2026-06-04T18:27:36-07:00; 174; audience 25474. NJ Devils (default) - Audience 25474: Audience Export failure for 25474 sent to client.
- Q1H2G1LPQBKYIZ/Q1YF50ATPD3XZL: 2026-06-06T04:24:24-07:00; 174; audience 17206. NJ Devils (default) - Audience 17206: Audience Export failure for 17206 sent to client.

## Export Checks

- Checks: 4.
- States: `healthy_closed`=4

Check evidence:
- chk_q1h2g1lpqbkyiz_q0anxdz22b4jyd (Q1H2G1LPQBKYIZ/Q0ANXDZ22B4JYD): state=`healthy_closed`.
  Scope: env=prod; org=174; audience=28188.
  Command: `glcli --env prod bifrost pizza --audience-id 28188 --org-id 174`
  Run 28188-linkedin_ads_17259-scheduled__2026-06-19T00:00:00+00:00: health=`healthy`; created=2026-06-19T00:23:47.570339+00:00; snapshotting=snapshotting_finished; export=export_finished; failed=0.
- chk_q1h2g1lpqbkyiz_q0bu4zpyrd89th (Q1H2G1LPQBKYIZ/Q0BU4ZPYRD89TH): state=`healthy_closed`.
  Scope: env=prod; org=174; audience=27534.
  Command: `glcli --env prod bifrost pizza --audience-id 27534 --org-id 174`
  Run 27534-facebook_16810-scheduled__2026-06-22T10:00:00+00:00: health=`healthy`; created=2026-06-22T11:27:25.940216+00:00; snapshotting=snapshotting_finished_no_deltas; export=no_batches; failed=0.
- chk_q1h2g1lpqbkyiz_q1yf50atpd3xzl (Q1H2G1LPQBKYIZ/Q1YF50ATPD3XZL): state=`healthy_closed`.
  Scope: env=prod; org=174; audience=17206.
  Command: `glcli --env prod bifrost pizza --audience-id 17206 --org-id 174`
  Run 17206-facebook_11099-scheduled__2026-06-22T10:00:00+00:00: health=`healthy`; created=2026-06-22T11:12:35.059006+00:00; snapshotting=snapshotting_finished; export=export_finished; failed=0.
- chk_q1h2g1lpqbkyiz_q20j9zu32wrhti (Q1H2G1LPQBKYIZ/Q20J9ZU32WRHTI): state=`healthy_closed`.
  Scope: env=prod; org=174; audience=25474.
  Command: `glcli --env prod bifrost pizza --audience-id 25474 --org-id 174`
  Run 25474-facebook_15654-scheduled__2026-06-19T00:00:00+00:00: health=`healthy`; created=2026-06-19T00:23:02.485507+00:00; snapshotting=snapshotting_finished; export=export_finished; failed=0.

## Recent Evidence

- Auto-resolved from Pizza export checks: all 4 alert-scoped export check(s) are healthy_closed with no blockers.
  Source: `check-exports`; kind: `export_check`; captured: `2026-06-22T21:16:06.253Z`.

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
