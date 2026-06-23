<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# pgatourhq_219 snapshotting-error

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `open`
Tags: `triage:needs_review`
Incidents: [Q3H8KZUKEEIYGW](https://growthloop.pagerduty.com/incidents/Q3H8KZUKEEIYGW)
Alerts: 1

## Current Summary

pgatourhq (New World Order): Exports for audience 38587 failed with states: <(snapshotting_error,no_batches)>

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `pgatourhq_219`
- Audiences: `38587`
- Destinations: `facebook`
- State tuples: `snapshotting_error/no_batches`
- Commands seen: `glcli --env prod bifrost pizza --audience-id 38587 --org-id 219`

Representative alerts:
- Q3H8KZUKEEIYGW/Q17AKK01XNBPJE: 2026-06-22T07:47:24-07:00; pgatourhq_219; audience 38587; facebook; snapshotting_error/no_batches. pgatourhq (New World Order): Exports for audience 38587 failed with states: <(snapshotting_error,no_batches)>
  Runs: `38587-facebook_22799-webapp__2026-06-18T20:58:06+00:00`

## Export Checks

- Checks: 1.
- States: `blocked`=1
- Blockers seen: `snapshotting_error_requires_review`

Check evidence:
- chk_q3h8kzukeeiygw_q17akk01xnbpje (Q3H8KZUKEEIYGW/Q17AKK01XNBPJE): state=`blocked`.
  Scope: env=prod; org=219; audience=38587; destination=facebook.
  Checked runs: `38587-facebook_22799-webapp__2026-06-18T20:58:06+00:00`
  Command: `glcli --env prod bifrost pizza --audience-id 38587 --org-id 219`
  Blockers: `snapshotting_error_requires_review`
  Run 38587-facebook_22799-webapp__2026-06-18T20:58:06+00:00: health=`blocked`; blockers=snapshotting_error_requires_review; created=2026-06-18T20:58:11.179753+00:00; snapshotting=snapshotting_error; export=no_batches; failed=0.

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
