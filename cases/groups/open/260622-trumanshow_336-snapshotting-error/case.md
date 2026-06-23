<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# trumanshow_336 snapshotting-error

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `open`
Tags: `triage:needs_review`
Incidents: [Q013DQMS89S80I](https://growthloop.pagerduty.com/incidents/Q013DQMS89S80I)
Alerts: 1

## Current Summary

trumanshow (Healthcare & Education): Exports for audience 37376 failed with states: <(snapshotting_error,no_batches)>

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `trumanshow_336`
- Audiences: `37376`
- Destinations: `iterable`
- State tuples: `snapshotting_error/no_batches`
- Commands seen: `glcli --env prod bifrost pizza --audience-id 37376 --org-id 336`

Representative alerts:
- Q013DQMS89S80I/Q22PW476GL9QOA: 2026-06-22T07:53:51-07:00; trumanshow_336; audience 37376; iterable; snapshotting_error/no_batches. trumanshow (Healthcare & Education): Exports for audience 37376 failed with states: <(snapshotting_error,no_batches)>
  Runs: `37376-iterable_22434-webapp__2026-06-01T21:26:26+00:00`, `37376-iterable_22434-webapp__2026-06-01T21:36:38+00:00`, `37376-iterable_22434-webapp__2026-06-01T21:43:02+00:00`, and 1 more

## Export Checks

- Checks: 1.
- States: `blocked`=1
- Blockers seen: `snapshotting_error_requires_review`

Check evidence:
- chk_q013dqms89s80i_q22pw476gl9qoa (Q013DQMS89S80I/Q22PW476GL9QOA): state=`blocked`.
  Scope: env=prod; org=336; audience=37376; destination=iterable.
  Checked runs: `37376-iterable_22434-webapp__2026-06-01T21:26:26+00:00`, `37376-iterable_22434-webapp__2026-06-01T21:36:38+00:00`, `37376-iterable_22434-webapp__2026-06-01T21:43:02+00:00`, `37376-iterable_22434-webapp__2026-06-01T21:57:18+00:00`
  Command: `glcli --env prod bifrost pizza --audience-id 37376 --org-id 336`
  Blockers: `snapshotting_error_requires_review`
  Run 37376-iterable_22434-webapp__2026-06-01T21:26:26+00:00: health=`healthy`; created=2026-06-01T21:26:29.111200+00:00; snapshotting=snapshotting_finished_no_deltas; export=no_batches; failed=0.
  Run 37376-iterable_22434-webapp__2026-06-01T21:36:38+00:00: health=`healthy`; created=2026-06-01T21:36:39.906601+00:00; snapshotting=snapshotting_finished_no_deltas; export=no_batches; failed=0.
  Run 37376-iterable_22434-webapp__2026-06-01T21:43:02+00:00: health=`healthy`; created=2026-06-01T21:43:03.491182+00:00; snapshotting=snapshotting_finished_no_deltas; export=no_batches; failed=0.
  Run 37376-iterable_22434-webapp__2026-06-01T21:57:18+00:00: health=`blocked`; blockers=snapshotting_error_requires_review; created=2026-06-01T21:57:19.868209+00:00; snapshotting=snapshotting_error; export=no_batches; failed=0.

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
