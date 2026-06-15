<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# allegro_3 facebook export-error

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `resolved`
Tags: `triage:needs_review`, `triage:blocked-env-unavailable`, `resolved:pd_closed_external`
Incidents: [Q2HVIA79CPFWPS](https://growthloop.pagerduty.com/incidents/Q2HVIA79CPFWPS)
Alerts: 1

## Current Summary

All attached PagerDuty incidents are resolved externally.

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `allegro_3`
- Audiences: `1107`
- Destinations: `facebook`
- State tuples: `snapshotting_finished/export_error`
- Commands seen: `glcli --env allegro bifrost pizza --audience-id 1107 --org-id 3`

Representative alerts:
- Q2HVIA79CPFWPS/Q00B2REAKTB2PD: 2026-05-18T07:32:58-07:00; allegro_3; audience 1107; facebook; snapshotting_finished/export_error. allegro (Advertising): Exports for audience 1107 failed with states: <(snapshotting_finished,export_error)>
  Runs: `1107-facebook_1502-scheduled__2026-05-18T00:00:00+00:00`

## Export Checks

- Checks: 1.
- States: `open`=1
- Blockers seen: `evidence_unavailable`

Check evidence:
- chk_q2hvia79cpfwps_q00b2reaktb2pd (Q2HVIA79CPFWPS/Q00B2REAKTB2PD): state=`open`, next_check_at=`2026-05-18T20:41:32.692Z`.
  Scope: env=allegro; org=3; audience=1107; endpoint=app_facebook_27; destination=facebook.
  Checked runs: `1107-facebook_1502-scheduled__2026-05-18T00:00:00+00:00`
  Command: `glcli --env allegro bifrost pizza --audience-id 1107 --org-id 3`
  Blockers: `evidence_unavailable`

## Recent Evidence

- All attached PagerDuty incidents are resolved externally. Attached incidents: Q2HVIA79CPFWPS.
  Source: `pagerduty`; kind: `pd_sync`; captured: `2026-06-15T16:19:18.590Z`.

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
