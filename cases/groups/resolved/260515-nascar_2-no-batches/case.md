<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# nascar_2 no-batches

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `resolved`
Tags: `triage:needs_review`, `resolved:export-healthy`
Incidents: [Q16KSAQEWECSDD](https://growthloop.pagerduty.com/incidents/Q16KSAQEWECSDD)
Alerts: 2

## Current Summary

Auto-resolved from Pizza export checks: all 2 alert-scoped export check(s) are healthy_closed with no blockers.

## Alert Scope

- Alert facts: 2 imported, 2 linked to this group.
- Orgs: `nascar_2`
- Audiences: `117`, `125`
- Destinations: `dynamics_object`
- State tuples: `snapshotting_finished/no_batches`
- Commands seen: `glcli --env nascar_aws bifrost pizza --audience-id 117 --org-id 2`, `glcli --env nascar_aws bifrost pizza --audience-id 125 --org-id 2`

Representative alerts:
- Q16KSAQEWECSDD/Q1YF7AYAWE053M: 2026-05-15T07:30:15-07:00; nascar_2; audience 117; dynamics_object; snapshotting_finished/no_batches. Nascar (default): Exports for signal 117 failed with states: <(snapshotting_finished,no_batches)>
  Runs: `117-dynamics_object_117-scheduled__2026-05-13T12:15:00+00:00`
- Q16KSAQEWECSDD/Q22AWVQWAGXLX7: 2026-05-15T07:30:17-07:00; nascar_2; audience 125; dynamics_object; snapshotting_finished/no_batches. Nascar (default): Exports for signal 125 failed with states: <(snapshotting_finished,no_batches)>
  Runs: `125-dynamics_object_125-scheduled__2026-05-13T12:15:00+00:00`

## Export Checks

- Checks: 2.
- States: `healthy_closed`=2

Check evidence:
- chk_q16ksaqewecsdd_q1yf7ayawe053m (Q16KSAQEWECSDD/Q1YF7AYAWE053M): state=`healthy_closed`.
  Scope: env=nascar_aws; org=2; audience=117; destination=dynamics_object.
  Checked runs: `117-dynamics_object_117-scheduled__2026-05-13T12:15:00+00:00`
  Command: `glcli --env nascar_aws bifrost pizza --audience-id 117 --org-id 2`
  Run 117-dynamics_object_117-scheduled__2026-05-13T12:15:00+00:00: health=`healthy`; created=2026-05-14T12:16:26.375443+00:00; snapshotting=snapshotting_finished; export=no_batches; failed=0.
- chk_q16ksaqewecsdd_q22awvqwagxlx7 (Q16KSAQEWECSDD/Q22AWVQWAGXLX7): state=`healthy_closed`.
  Scope: env=nascar_aws; org=2; audience=125; destination=dynamics_object.
  Checked runs: `125-dynamics_object_125-scheduled__2026-05-13T12:15:00+00:00`
  Command: `glcli --env nascar_aws bifrost pizza --audience-id 125 --org-id 2`
  Run 125-dynamics_object_125-scheduled__2026-05-13T12:15:00+00:00: health=`healthy`; created=2026-05-14T12:16:42.436332+00:00; snapshotting=snapshotting_finished; export=no_batches; failed=0.

## Recent Evidence

- Auto-resolved from Pizza export checks: all 2 alert-scoped export check(s) are healthy_closed with no blockers.
  Source: `check-exports`; kind: `export_check`; captured: `2026-05-16T21:05:50.963Z`.

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
