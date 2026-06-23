<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# evgo_402 client-sent-export-failure

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `resolved`
Tags: `triage:needs_review`, `resolved:export-healthy`
Incidents: [Q2SD1O3BRD8DHQ](https://growthloop.pagerduty.com/incidents/Q2SD1O3BRD8DHQ)
Alerts: 5

## Current Summary

Auto-resolved from Pizza export checks: all 5 alert-scoped export check(s) are healthy_closed with no blockers.

## Alert Scope

- Alert facts: 5 imported, 5 linked to this group.
- Orgs: `evgo_402`
- Audiences: `13721`, `14107`, `27828`, `28662`, `375`
- Destinations: none
- State tuples: none
- Commands seen: `glcli --env prod bifrost pizza --audience-id 13721 --org-id 402`, `glcli --env prod bifrost pizza --audience-id 14107 --org-id 402`, `glcli --env prod bifrost pizza --audience-id 27828 --org-id 402`, and 2 more

Representative alerts:
- Q2SD1O3BRD8DHQ/Q26G9LI7KYFV9L: 2026-06-03T17:28:44-07:00; evgo_402; audience 14107. EVgo (EVgo Prod) - Audience 14107: Audience Export failure for 14107 sent to client.
- Q2SD1O3BRD8DHQ/Q231GAGRR6FQGV: 2026-06-04T17:04:31-07:00; evgo_402; audience 27828. EVgo (default) - Audience 27828: Audience Export failure for 27828 sent to client.
- Q2SD1O3BRD8DHQ/Q2BSU5P5WO8SRP: 2026-06-04T17:20:28-07:00; evgo_402; audience 13721. EVgo (default) - Audience 13721: Audience Export failure for 13721 sent to client.
- Q2SD1O3BRD8DHQ/Q1MJNESE2S7JMW: 2026-06-04T17:28:47-07:00; evgo_402; audience 28662. EVgo (EVgo Prod) - Audience 28662: Audience Export failure for 28662 sent to client.
- Q2SD1O3BRD8DHQ/Q2HLLGHPGAAOWQ: 2026-06-06T05:46:50-07:00; evgo_402; audience 375. EVgo (default) - SignalRoute 375: SignalRoute Export failure for 375 sent to client.

## Export Checks

- Checks: 5.
- States: `healthy_closed`=5

Check evidence:
- chk_q2sd1o3brd8dhq_q1mjnese2s7jmw (Q2SD1O3BRD8DHQ/Q1MJNESE2S7JMW): state=`healthy_closed`.
  Scope: env=prod; org=402; audience=28662.
  Command: `glcli --env prod bifrost pizza --audience-id 28662 --org-id 402`
  Run 28662-braze_17515-scheduled__2026-06-22T00:00:00+00:00: health=`healthy`; created=2026-06-22T00:25:51.617123+00:00; snapshotting=snapshotting_finished; export=export_finished; failed=0.
- chk_q2sd1o3brd8dhq_q231gagrr6fqgv (Q2SD1O3BRD8DHQ/Q231GAGRR6FQGV): state=`healthy_closed`.
  Scope: env=prod; org=402; audience=27828.
  Command: `glcli --env prod bifrost pizza --audience-id 27828 --org-id 402`
  Run 27828-braze_17063-scheduled__2026-06-22T20:45:00+00:00: health=`healthy`; created=2026-06-22T21:02:11.171563+00:00; snapshotting=snapshotting_finished; export=export_finished; failed=0.
- chk_q2sd1o3brd8dhq_q26g9li7kyfv9l (Q2SD1O3BRD8DHQ/Q26G9LI7KYFV9L): state=`healthy_closed`.
  Scope: env=prod; org=402; audience=14107.
  Command: `glcli --env prod bifrost pizza --audience-id 14107 --org-id 402`
  Run 14107-braze_17445-scheduled__2026-06-22T00:00:00+00:00: health=`healthy`; created=2026-06-22T00:32:27.454006+00:00; snapshotting=snapshotting_finished; export=export_finished; failed=0.
- chk_q2sd1o3brd8dhq_q2bsu5p5wo8srp (Q2SD1O3BRD8DHQ/Q2BSU5P5WO8SRP): state=`healthy_closed`.
  Scope: env=prod; org=402; audience=13721.
  Command: `glcli --env prod bifrost pizza --audience-id 13721 --org-id 402`
  Run 13721-braze_8992-scheduled__2026-06-22T21:00:00+00:00: health=`healthy`; created=2026-06-22T21:15:34.117153+00:00; snapshotting=snapshotting_finished_no_deltas; export=no_batches; failed=0.
- chk_q2sd1o3brd8dhq_q2hllghpgaaowq (Q2SD1O3BRD8DHQ/Q2HLLGHPGAAOWQ): state=`healthy_closed`.
  Scope: env=prod; org=402; audience=375.
  Command: `glcli --env prod bifrost pizza --audience-id 375 --org-id 402`
  Run 375-braze_object_375-scheduled__2026-06-22T21:00:00+00:00: health=`healthy`; created=2026-06-22T21:15:35.570003+00:00; snapshotting=snapshotting_finished_no_deltas; export=no_batches; failed=0.

## Recent Evidence

- Auto-resolved from Pizza export checks: all 5 alert-scoped export check(s) are healthy_closed with no blockers.
  Source: `check-exports`; kind: `export_check`; captured: `2026-06-22T21:17:54.385Z`.

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
