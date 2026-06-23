<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# ford_310 the-trade-desk-crm export-error

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `open`
Tags: `triage:needs_review`
Incidents: [Q1B3HV678YSRR6](https://growthloop.pagerduty.com/incidents/Q1B3HV678YSRR6)
Alerts: 1

## Current Summary

ford (Marketing Production): Exports for audience 33347 failed with states: <(snapshotting_finished,export_error)>

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `ford_310`
- Audiences: `33347`
- Destinations: `the_trade_desk_crm`
- State tuples: `snapshotting_finished/export_error`
- Commands seen: `glcli --env prod bifrost pizza --audience-id 33347 --org-id 310`

Representative alerts:
- Q1B3HV678YSRR6/Q0G4U86YQZR17F: 2026-06-17T07:50:53-07:00; ford_310; audience 33347; the_trade_desk_crm; snapshotting_finished/export_error. ford (Marketing Production): Exports for audience 33347 failed with states: <(snapshotting_finished,export_error)>
  Runs: `33347-the_trade_desk_crm_20850-scheduled__2026-06-17T00:00:00+00:00`

## Export Checks

- Checks: 1.
- States: `blocked`=1
- Blockers seen: `export_error`, `failed_export_count`

Check evidence:
- chk_q1b3hv678ysrr6_q0g4u86yqzr17f (Q1B3HV678YSRR6/Q0G4U86YQZR17F): state=`blocked`.
  Scope: env=prod; org=310; audience=33347; endpoint=app_thetradedesk_crm_1910; destination=the_trade_desk_crm.
  Checked runs: `33347-the_trade_desk_crm_20850-scheduled__2026-06-17T00:00:00+00:00`
  Command: `glcli --env prod bifrost pizza --audience-id 33347 --org-id 310`
  Blockers: `failed_export_count`, `export_error`
  Run 33347-the_trade_desk_crm_20850-scheduled__2026-06-17T00:00:00+00:00: health=`blocked`; blockers=failed_export_count, export_error; created=2026-06-17T00:48:23.079111+00:00; snapshotting=snapshotting_finished; export=export_error; failed=9922.

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
