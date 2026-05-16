<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# nerdwallet_373 tik-tok export-processing

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `new`
Tags: `triage:needs_review`
Incidents: [Q2CEMYYJ9N4IAX](https://growthloop.pagerduty.com/incidents/Q2CEMYYJ9N4IAX)
Alerts: 1

## Current Summary

NerdWallet ( PerfMarketing-Cards): Exports for audience 28175 failed with states: <(snapshotting_finished,export_processing)>

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

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
