<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# evgo_402 no-batches

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `new`
Tags: `triage:needs_review`
Incidents: [Q157KO5ON9TWGO](https://growthloop.pagerduty.com/incidents/Q157KO5ON9TWGO)
Alerts: 9

## Current Summary

EVgo (default): Exports for audience 28561 failed with states: <(snapshotting_finished,no_batches)>

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

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
