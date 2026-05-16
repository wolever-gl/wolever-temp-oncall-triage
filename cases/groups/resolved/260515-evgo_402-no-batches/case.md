<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# evgo_402 no-batches

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `resolved`
Tags: `triage:needs_review`, `resolved:export-healthy`
Incidents: [Q157KO5ON9TWGO](https://growthloop.pagerduty.com/incidents/Q157KO5ON9TWGO)
Alerts: 9

## Current Summary

Resolved as false alarm/export healthy: all nine EVgo Braze alerts were checked in Pizza and the referenced runs are healthy_closed with snapshotting_finished/export_finished and failed=0.

## Alert Scope

- Alert facts: 9 imported, 9 linked to this group.
- Orgs: `evgo_402`
- Audiences: `12438`, `12439`, `12515`, `12517`, `15494`, `22633`, `27021`, `28448`, and 1 more
- Destinations: `braze`
- State tuples: `snapshotting_finished/no_batches`
- Commands seen: `glcli --env prod bifrost pizza --audience-id 12438 --org-id 402`, `glcli --env prod bifrost pizza --audience-id 12439 --org-id 402`, `glcli --env prod bifrost pizza --audience-id 12515 --org-id 402`, and 6 more

Representative alerts:
- Q157KO5ON9TWGO/Q23QRTJVMEZ4QW: 2026-05-15T07:59:13-07:00; evgo_402; audience 12438; braze; snapshotting_finished/no_batches. EVgo (default): Exports for audience 12438 failed with states: <(snapshotting_finished,no_batches)>
  Runs: `12438-braze_8405-scheduled__2026-05-14T14:30:00+00:00`
- Q157KO5ON9TWGO/Q0WBQIUFYSLK0N: 2026-05-15T07:59:21-07:00; evgo_402; audience 12439; braze; snapshotting_finished/no_batches. EVgo (default): Exports for audience 12439 failed with states: <(snapshotting_finished,no_batches)>
  Runs: `12439-braze_8406-scheduled__2026-05-14T16:00:00+00:00`
- Q157KO5ON9TWGO/Q3Q035J0UOBMIC: 2026-05-15T07:59:31-07:00; evgo_402; audience 12515; braze; snapshotting_finished/no_batches. EVgo (default): Exports for audience 12515 failed with states: <(snapshotting_finished,no_batches)>
  Runs: `12515-braze_8451-scheduled__2026-05-14T18:30:00+00:00`
- Q157KO5ON9TWGO/Q3ORFM9I02A91Y: 2026-05-15T07:59:38-07:00; evgo_402; audience 12517; braze; snapshotting_finished/no_batches. EVgo (default): Exports for audience 12517 failed with states: <(snapshotting_finished,no_batches)>
  Runs: `12517-braze_8453-scheduled__2026-05-14T14:15:00+00:00`
- Q157KO5ON9TWGO/Q2D1S9TLC4TWNS: 2026-05-15T08:00:11-07:00; evgo_402; audience 15494; braze; snapshotting_finished/no_batches. EVgo (EVgo Prod): Exports for audience 15494 failed with states: <(snapshotting_finished,no_batches)>
  Runs: `15494-braze_10094-scheduled__2026-05-13T00:00:00+00:00`
- Q157KO5ON9TWGO/Q237T3CPXIN2SY: 2026-05-15T08:01:20-07:00; evgo_402; audience 22633; braze; snapshotting_finished/no_batches. EVgo (default): Exports for audience 22633 failed with states: <(snapshotting_finished,no_batches)>
  Runs: `22633-braze_14199-scheduled__2026-05-14T17:00:00+00:00`
- Q157KO5ON9TWGO/Q0T0BAGCYBEHII: 2026-05-15T08:01:33-07:00; evgo_402; audience 27021; braze; snapshotting_finished/no_batches. EVgo (EVgo Prod): Exports for audience 27021 failed with states: <(snapshotting_finished,no_batches)>
  Runs: `27021-braze_16579-scheduled__2026-05-14T22:00:00+00:00`
- Q157KO5ON9TWGO/Q3HHTRB9TTDA8J: 2026-05-15T08:01:50-07:00; evgo_402; audience 28448; braze; snapshotting_finished/no_batches. EVgo (EVgo Prod): Exports for audience 28448 failed with states: <(snapshotting_finished,no_batches)>
  Runs: `28448-braze_17405-scheduled__2026-05-14T20:00:00+00:00`
- Q157KO5ON9TWGO/Q1CLWH1FCYZ8JN: 2026-05-15T08:01:55-07:00; evgo_402; audience 28561; braze; snapshotting_finished/no_batches. EVgo (default): Exports for audience 28561 failed with states: <(snapshotting_finished,no_batches)>
  Runs: `28561-braze_17453-scheduled__2026-05-14T18:00:00+00:00`

## Export Checks

- Checks: 9.
- States: `healthy_closed`=9

Check evidence:
- chk_q157ko5on9twgo_q0t0bagcybehii (Q157KO5ON9TWGO/Q0T0BAGCYBEHII): state=`healthy_closed`.
  Scope: env=prod; org=402; audience=27021; destination=braze.
  Checked runs: `27021-braze_16579-scheduled__2026-05-14T22:00:00+00:00`
  Command: `glcli --env prod bifrost pizza --audience-id 27021 --org-id 402`
  Run 27021-braze_16579-scheduled__2026-05-14T22:00:00+00:00: health=`healthy`; created=2026-05-14T22:24:12.115463+00:00; snapshotting=snapshotting_finished; export=export_finished; failed=0.
- chk_q157ko5on9twgo_q0wbqiufyslk0n (Q157KO5ON9TWGO/Q0WBQIUFYSLK0N): state=`healthy_closed`.
  Scope: env=prod; org=402; audience=12439; destination=braze.
  Checked runs: `12439-braze_8406-scheduled__2026-05-14T16:00:00+00:00`
  Command: `glcli --env prod bifrost pizza --audience-id 12439 --org-id 402`
  Run 12439-braze_8406-scheduled__2026-05-14T16:00:00+00:00: health=`healthy`; created=2026-05-14T16:21:42.060461+00:00; snapshotting=snapshotting_finished; export=export_finished; failed=0.
- chk_q157ko5on9twgo_q1clwh1fcyz8jn (Q157KO5ON9TWGO/Q1CLWH1FCYZ8JN): state=`healthy_closed`.
  Scope: env=prod; org=402; audience=28561; destination=braze.
  Checked runs: `28561-braze_17453-scheduled__2026-05-14T18:00:00+00:00`
  Command: `glcli --env prod bifrost pizza --audience-id 28561 --org-id 402`
  Run 28561-braze_17453-scheduled__2026-05-14T18:00:00+00:00: health=`healthy`; created=2026-05-14T18:22:41.358880+00:00; snapshotting=snapshotting_finished; export=export_finished; failed=0.
- chk_q157ko5on9twgo_q237t3cpxin2sy (Q157KO5ON9TWGO/Q237T3CPXIN2SY): state=`healthy_closed`.
  Scope: env=prod; org=402; audience=22633; destination=braze.
  Checked runs: `22633-braze_14199-scheduled__2026-05-14T17:00:00+00:00`
  Command: `glcli --env prod bifrost pizza --audience-id 22633 --org-id 402`
  Run 22633-braze_14199-scheduled__2026-05-14T17:00:00+00:00: health=`healthy`; created=2026-05-14T17:18:26.613226+00:00; snapshotting=snapshotting_finished; export=export_finished; failed=0.
- chk_q157ko5on9twgo_q23qrtjvmez4qw (Q157KO5ON9TWGO/Q23QRTJVMEZ4QW): state=`healthy_closed`.
  Scope: env=prod; org=402; audience=12438; destination=braze.
  Checked runs: `12438-braze_8405-scheduled__2026-05-14T14:30:00+00:00`
  Command: `glcli --env prod bifrost pizza --audience-id 12438 --org-id 402`
  Run 12438-braze_8405-scheduled__2026-05-14T14:30:00+00:00: health=`healthy`; created=2026-05-14T14:48:16.402143+00:00; snapshotting=snapshotting_finished; export=export_finished; failed=0.
- chk_q157ko5on9twgo_q2d1s9tlc4twns (Q157KO5ON9TWGO/Q2D1S9TLC4TWNS): state=`healthy_closed`.
  Scope: env=prod; org=402; audience=15494; destination=braze.
  Checked runs: `15494-braze_10094-scheduled__2026-05-13T00:00:00+00:00`
  Command: `glcli --env prod bifrost pizza --audience-id 15494 --org-id 402`
  Run 15494-braze_10094-scheduled__2026-05-13T00:00:00+00:00: health=`healthy`; created=2026-05-13T00:27:09.061039+00:00; snapshotting=snapshotting_finished; export=export_finished; failed=0.
- chk_q157ko5on9twgo_q3hhtrb9ttda8j (Q157KO5ON9TWGO/Q3HHTRB9TTDA8J): state=`healthy_closed`.
  Scope: env=prod; org=402; audience=28448; destination=braze.
  Checked runs: `28448-braze_17405-scheduled__2026-05-14T20:00:00+00:00`
  Command: `glcli --env prod bifrost pizza --audience-id 28448 --org-id 402`
  Run 28448-braze_17405-scheduled__2026-05-14T20:00:00+00:00: health=`healthy`; created=2026-05-14T20:28:19.096775+00:00; snapshotting=snapshotting_finished; export=export_finished; failed=0.
- chk_q157ko5on9twgo_q3orfm9i02a91y (Q157KO5ON9TWGO/Q3ORFM9I02A91Y): state=`healthy_closed`.
  Scope: env=prod; org=402; audience=12517; destination=braze.
  Checked runs: `12517-braze_8453-scheduled__2026-05-14T14:15:00+00:00`
  Command: `glcli --env prod bifrost pizza --audience-id 12517 --org-id 402`
  Run 12517-braze_8453-scheduled__2026-05-14T14:15:00+00:00: health=`healthy`; created=2026-05-14T14:33:05.278263+00:00; snapshotting=snapshotting_finished; export=export_finished; failed=0.
- chk_q157ko5on9twgo_q3q035j0uobmic (Q157KO5ON9TWGO/Q3Q035J0UOBMIC): state=`healthy_closed`.
  Scope: env=prod; org=402; audience=12515; destination=braze.
  Checked runs: `12515-braze_8451-scheduled__2026-05-14T18:30:00+00:00`
  Command: `glcli --env prod bifrost pizza --audience-id 12515 --org-id 402`
  Run 12515-braze_8451-scheduled__2026-05-14T18:30:00+00:00: health=`healthy`; created=2026-05-14T18:47:59.436548+00:00; snapshotting=snapshotting_finished; export=export_finished; failed=0.

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
