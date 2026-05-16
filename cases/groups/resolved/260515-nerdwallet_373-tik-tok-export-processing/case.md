<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# nerdwallet_373 tik-tok export-processing

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `resolved`
Tags: `triage:needs_review`, `resolved:export-healthy`
Incidents: [Q2CEMYYJ9N4IAX](https://growthloop.pagerduty.com/incidents/Q2CEMYYJ9N4IAX)
Alerts: 1

## Current Summary

Auto-resolved from Pizza export checks: all 1 alert-scoped export check(s) are healthy_closed with no blockers.

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `nerdwallet_373`
- Audiences: `28175`
- Destinations: `tik_tok`
- State tuples: `snapshotting_finished/export_processing`
- Commands seen: `glcli --env prod bifrost pizza --audience-id 28175 --org-id 373`

Representative alerts:
- Q2CEMYYJ9N4IAX/Q3QQZ6V22UZC2A: 2026-05-15T08:33:22-07:00; nerdwallet_373; audience 28175; tik_tok; snapshotting_finished/export_processing. NerdWallet ( PerfMarketing-Cards): Exports for audience 28175 failed with states: <(snapshotting_finished,export_processing)>
  Runs: `28175-tik_tok_17978-scheduled__2026-05-06T00:00:00+00:00`, `28175-tik_tok_17978-scheduled__2026-05-07T00:00:00+00:00`, `28175-tik_tok_17978-scheduled__2026-05-08T00:00:00+00:00`, and 7 more

## Export Checks

- Checks: 1.
- States: `healthy_closed`=1

Check evidence:
- chk_q2cemyyj9n4iax_q3qqz6v22uzc2a (Q2CEMYYJ9N4IAX/Q3QQZ6V22UZC2A): state=`healthy_closed`.
  Scope: env=prod; org=373; audience=28175; endpoint=app_tiktok_1899; destination=tik_tok.
  Checked runs: `28175-tik_tok_17978-scheduled__2026-05-06T00:00:00+00:00`, `28175-tik_tok_17978-scheduled__2026-05-07T00:00:00+00:00`, `28175-tik_tok_17978-scheduled__2026-05-08T00:00:00+00:00`, `28175-tik_tok_17978-scheduled__2026-05-09T00:00:00+00:00`, and 6 more
  Command: `glcli --env prod bifrost pizza --audience-id 28175 --org-id 373`
  Run 28175-tik_tok_17978-scheduled__2026-05-06T00:00:00+00:00: health=`healthy`; created=2026-05-06T00:39:40.386679+00:00; snapshotting=snapshotting_finished; export=export_finished; failed=0.
  Run 28175-tik_tok_17978-scheduled__2026-05-07T00:00:00+00:00: health=`healthy`; created=2026-05-07T00:36:49.387911+00:00; snapshotting=snapshotting_finished; export=export_finished; failed=0.
  Run 28175-tik_tok_17978-scheduled__2026-05-08T00:00:00+00:00: health=`healthy`; created=2026-05-08T00:45:07.463168+00:00; snapshotting=snapshotting_finished; export=export_finished; failed=0.
  Run 28175-tik_tok_17978-scheduled__2026-05-09T00:00:00+00:00: health=`healthy`; created=2026-05-09T00:38:50.196683+00:00; snapshotting=snapshotting_finished; export=export_finished; failed=0.
  Showing 4 of 10 run evaluations.

## Recent Evidence

- Auto-resolved from Pizza export checks: all 1 alert-scoped export check(s) are healthy_closed with no blockers.
  Source: `check-exports`; kind: `export_check`; captured: `2026-05-16T21:05:57.653Z`.

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
