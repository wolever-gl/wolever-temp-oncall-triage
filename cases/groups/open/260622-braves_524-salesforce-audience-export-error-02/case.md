<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# braves_524 salesforce-audience export-error

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `open`
Tags: `triage:needs_review`
Incidents: [Q3Q916L0ZN6JD8](https://growthloop.pagerduty.com/incidents/Q3Q916L0ZN6JD8)
Alerts: 1

## Current Summary

Braves (default): Exports for audience 31889 failed with states: <(snapshotting_finished,export_error)>

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `braves_524`
- Audiences: `31889`
- Destinations: `salesforce_audience`
- State tuples: `snapshotting_finished/export_error`
- Commands seen: `glcli --env prod bifrost pizza --audience-id 31889 --org-id 524`

Representative alerts:
- Q3Q916L0ZN6JD8/Q2MPMWAUMRBBL5: 2026-06-22T07:51:23-07:00; braves_524; audience 31889; salesforce_audience; snapshotting_finished/export_error. Braves (default): Exports for audience 31889 failed with states: <(snapshotting_finished,export_error)>
  Runs: `31889-salesforce_audience_22370-scheduled__2026-06-22T00:00:00+00:00`

## Export Checks

- Checks: 1.
- States: `blocked`=1
- Blockers seen: `export_error`

Check evidence:
- chk_q3q916l0zn6jd8_q2mpmwaumrbbl5 (Q3Q916L0ZN6JD8/Q2MPMWAUMRBBL5): state=`blocked`.
  Scope: env=prod; org=524; audience=31889; endpoint=app_salesforce_audience_1885; destination=salesforce_audience.
  Checked runs: `31889-salesforce_audience_22370-scheduled__2026-06-22T00:00:00+00:00`
  Command: `glcli --env prod bifrost pizza --audience-id 31889 --org-id 524`
  Blockers: `export_error`
  Run 31889-salesforce_audience_22370-scheduled__2026-06-22T00:00:00+00:00: health=`blocked`; blockers=export_error; created=2026-06-22T00:17:54.451908+00:00; snapshotting=snapshotting_finished; export=export_error; failed=0.

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
