<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# flagstar_305 snapshotting-error

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `open`
Tags: `triage:needs_review`
Incidents: [Q1J117KV9G8TBU](https://growthloop.pagerduty.com/incidents/Q1J117KV9G8TBU)
Alerts: 1

## Current Summary

flagstar (default): Exports for audience 30251 failed with states: <(snapshotting_error,no_batches)>

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `flagstar_305`
- Audiences: `30251`
- Destinations: `the_trade_desk`
- State tuples: `snapshotting_error/no_batches`
- Commands seen: `glcli --env prod bifrost pizza --audience-id 30251 --org-id 305`

Representative alerts:
- Q1J117KV9G8TBU/Q1OQUXXJSZJ1CU: 2026-06-22T07:54:28-07:00; flagstar_305; audience 30251; the_trade_desk; snapshotting_error/no_batches. flagstar (default): Exports for audience 30251 failed with states: <(snapshotting_error,no_batches)>
  Runs: `30251-the_trade_desk_19860-scheduled__2026-06-22T00:00:00+00:00`

## Export Checks

- Checks: 1.
- States: `blocked`=1
- Blockers seen: `snapshotting_error_requires_review`

Check evidence:
- chk_q1j117kv9g8tbu_q1oquxxjszj1cu (Q1J117KV9G8TBU/Q1OQUXXJSZJ1CU): state=`blocked`.
  Scope: env=prod; org=305; audience=30251; destination=the_trade_desk.
  Checked runs: `30251-the_trade_desk_19860-scheduled__2026-06-22T00:00:00+00:00`
  Command: `glcli --env prod bifrost pizza --audience-id 30251 --org-id 305`
  Blockers: `snapshotting_error_requires_review`
  Run 30251-the_trade_desk_19860-scheduled__2026-06-22T00:00:00+00:00: health=`blocked`; blockers=snapshotting_error_requires_review; created=2026-06-22T00:16:31.643941+00:00; snapshotting=snapshotting_error; export=no_batches; failed=0.

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
