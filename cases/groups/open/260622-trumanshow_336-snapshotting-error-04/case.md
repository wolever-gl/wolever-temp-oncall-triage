<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# trumanshow_336 snapshotting-error

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `open`
Tags: `triage:needs_review`
Incidents: [Q1YZX9Q3N73FDF](https://growthloop.pagerduty.com/incidents/Q1YZX9Q3N73FDF)
Alerts: 1

## Current Summary

trumanshow (Healthcare & Education): Exports for audience 37414 failed with states: <(snapshotting_error,no_batches)>

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `trumanshow_336`
- Audiences: `37414`
- Destinations: `iterable`
- State tuples: `snapshotting_error/no_batches`
- Commands seen: `glcli --env prod bifrost pizza --audience-id 37414 --org-id 336`

Representative alerts:
- Q1YZX9Q3N73FDF/Q343XTL7B7WI8M: 2026-06-22T07:53:52-07:00; trumanshow_336; audience 37414; iterable; snapshotting_error/no_batches. trumanshow (Healthcare & Education): Exports for audience 37414 failed with states: <(snapshotting_error,no_batches)>
  Runs: `37414-iterable_22443-webapp__2026-06-01T22:02:48+00:00`

## Export Checks

- Checks: 1.
- States: `blocked`=1
- Blockers seen: `snapshotting_error_requires_review`

Check evidence:
- chk_q1yzx9q3n73fdf_q343xtl7b7wi8m (Q1YZX9Q3N73FDF/Q343XTL7B7WI8M): state=`blocked`.
  Scope: env=prod; org=336; audience=37414; destination=iterable.
  Checked runs: `37414-iterable_22443-webapp__2026-06-01T22:02:48+00:00`
  Command: `glcli --env prod bifrost pizza --audience-id 37414 --org-id 336`
  Blockers: `snapshotting_error_requires_review`
  Run 37414-iterable_22443-webapp__2026-06-01T22:02:48+00:00: health=`blocked`; blockers=snapshotting_error_requires_review; created=2026-06-01T22:02:50.289722+00:00; snapshotting=snapshotting_error; export=no_batches; failed=0.

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
