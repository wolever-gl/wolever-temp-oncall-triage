<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# royals_4 snapshotting-error

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `open`
Tags: `triage:needs_review`
Incidents: [Q08B553ANQ9KMI](https://growthloop.pagerduty.com/incidents/Q08B553ANQ9KMI)
Alerts: 1

## Current Summary

royals (default): Exports for signal 203 failed with states: <(snapshotting_error,no_batches)>

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `royals_4`
- Audiences: `203`
- Destinations: `salesforce_audience_object`
- State tuples: `snapshotting_error/no_batches`
- Commands seen: `glcli --env royals bifrost pizza --audience-id 203 --org-id 4`

Representative alerts:
- Q08B553ANQ9KMI/Q3GHBYTS94814G: 2026-05-15T07:30:03-07:00; royals_4; audience 203; salesforce_audience_object; snapshotting_error/no_batches. royals (default): Exports for signal 203 failed with states: <(snapshotting_error,no_batches)>
  Runs: `203-salesforce_audience_object_203-scheduled__2026-05-15T13:00:00+00:00`

## Export Checks

- Checks: 1.
- States: `open`=1
- Blockers seen: `evidence_unavailable`

Check evidence:
- chk_q08b553anq9kmi_q3ghbyts94814g (Q08B553ANQ9KMI/Q3GHBYTS94814G): state=`open`, next_check_at=`2026-05-17T16:09:29.997Z`.
  Scope: env=royals; org=4; audience=203; destination=salesforce_audience_object.
  Checked runs: `203-salesforce_audience_object_203-scheduled__2026-05-15T13:00:00+00:00`
  Command: `glcli --env royals bifrost pizza --audience-id 203 --org-id 4`
  Blockers: `evidence_unavailable`

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
