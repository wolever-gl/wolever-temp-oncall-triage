<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# fanatics_502 the-trade-desk-crm export-error

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `open`
Tags: `triage:needs_review`
Incidents: [Q3BJLPQPULFKR9](https://growthloop.pagerduty.com/incidents/Q3BJLPQPULFKR9)
Alerts: 1

## Current Summary

fanatics (default): Exports for audience 30232 failed with states: <(snapshotting_finished,export_error)>

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `fanatics_502`
- Audiences: `30232`
- Destinations: `the_trade_desk_crm`
- State tuples: `snapshotting_finished/export_error`
- Commands seen: `glcli --env prod bifrost pizza --audience-id 30232 --org-id 502`

Representative alerts:
- Q3BJLPQPULFKR9/Q3WGJV7HWJEMQK: 2026-06-17T08:06:35-07:00; fanatics_502; audience 30232; the_trade_desk_crm; snapshotting_finished/export_error. fanatics (default): Exports for audience 30232 failed with states: <(snapshotting_finished,export_error)>
  Runs: `30232-the_trade_desk_crm_22569-scheduled__2026-06-17T00:00:00+00:00`

## Export Checks

- Checks: 1.
- States: `blocked`=1
- Blockers seen: `export_error`, `failed_export_count`

Check evidence:
- chk_q3bjlpqpulfkr9_q3wgjv7hwjemqk (Q3BJLPQPULFKR9/Q3WGJV7HWJEMQK): state=`blocked`.
  Scope: env=prod; org=502; audience=30232; endpoint=app_thetradedesk_crm_2299; destination=the_trade_desk_crm.
  Checked runs: `30232-the_trade_desk_crm_22569-scheduled__2026-06-17T00:00:00+00:00`
  Command: `glcli --env prod bifrost pizza --audience-id 30232 --org-id 502`
  Blockers: `failed_export_count`, `export_error`
  Run 30232-the_trade_desk_crm_22569-scheduled__2026-06-17T00:00:00+00:00: health=`blocked`; blockers=failed_export_count, export_error; created=2026-06-17T01:31:17.787559+00:00; snapshotting=snapshotting_finished; export=export_error; failed=262839.

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
