<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# pgatourhq_219 snapshotting-error

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `open`
Tags: `triage:needs_review`
Incidents: [Q0W2M96IWN1MBN](https://growthloop.pagerduty.com/incidents/Q0W2M96IWN1MBN)
Alerts: 1

## Current Summary

pgatourhq (New World Order): Exports for audience 38589 failed with states: <(snapshotting_error,no_batches)>

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `pgatourhq_219`
- Audiences: `38589`
- Destinations: `facebook`
- State tuples: `snapshotting_error/no_batches`
- Commands seen: `glcli --env prod bifrost pizza --audience-id 38589 --org-id 219`

Representative alerts:
- Q0W2M96IWN1MBN/Q1OMV1SIFEXDSJ: 2026-06-22T07:47:25-07:00; pgatourhq_219; audience 38589; facebook; snapshotting_error/no_batches. pgatourhq (New World Order): Exports for audience 38589 failed with states: <(snapshotting_error,no_batches)>
  Runs: `38589-facebook_22797-webapp__2026-06-18T20:54:56+00:00`

## Export Checks

- Checks: 1.
- States: `blocked`=1
- Blockers seen: `snapshotting_error_requires_review`

Check evidence:
- chk_q0w2m96iwn1mbn_q1omv1sifexdsj (Q0W2M96IWN1MBN/Q1OMV1SIFEXDSJ): state=`blocked`.
  Scope: env=prod; org=219; audience=38589; destination=facebook.
  Checked runs: `38589-facebook_22797-webapp__2026-06-18T20:54:56+00:00`
  Command: `glcli --env prod bifrost pizza --audience-id 38589 --org-id 219`
  Blockers: `snapshotting_error_requires_review`
  Run 38589-facebook_22797-webapp__2026-06-18T20:54:56+00:00: health=`blocked`; blockers=snapshotting_error_requires_review; created=2026-06-18T20:55:00.523199+00:00; snapshotting=snapshotting_error; export=no_batches; failed=0.

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
