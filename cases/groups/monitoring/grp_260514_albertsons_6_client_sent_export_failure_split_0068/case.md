<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# albertsons_6 client-sent-export-failure split

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `monitoring`
Tags: `triage:needs_review`, `monitoring:export-processing`
Incidents: [Q38JR11G2ENK2W](https://growthloop.pagerduty.com/incidents/Q38JR11G2ENK2W)
Alerts: 1

## Current Summary

Monitoring: audience 12875 remains export_processing with zero failures on the latest 2026-05-16 LiveRamp run.

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `albertsons_6`
- Audiences: `12875`
- Destinations: none
- State tuples: none
- Commands seen: `glcli --env albertsons bifrost pizza --audience-id 12875 --org-id 6`

Representative alerts:
- Q38JR11G2ENK2W/Q0HOSDAJCFXNKU: 2026-05-14T14:03:48-07:00; albertsons_6; audience 12875. albertsons (Albertsons Media) - Audience 12875: Audience Export failure for 12875 sent to client.

## Export Checks

- Checks: 1.
- States: `blocked`=1
- Blockers seen: `missing_run_identity`

Check evidence:
- chk_q38jr11g2enk2w_q0hosdajcfxnku (Q38JR11G2ENK2W/Q0HOSDAJCFXNKU): state=`blocked`.
  Scope: env=albertsons; org=6; audience=12875.
  Command: `glcli --env albertsons bifrost pizza --audience-id 12875 --org-id 6`
  Blockers: `missing_run_identity`

## Recent Evidence

- Monitoring check-in: audience 12875 remains snapshotting_finished/export_processing with zero failures on latest 2026-05-16 scheduled LiveRamp run.
  Source: `monitoring preflight/manual Pizza`; kind: `pizza`; captured: `2026-05-16T23:03:56.098Z`.
  Command: `glcli --env albertsons bifrost pizza --audience-id 12875 --org-id 6`
- Audience 12875 has recovered past the client-sent alert: 2026-05-15 scheduled run finished export_finished, and latest 2026-05-16 scheduled run is snapshotting_finished/export_processing with zero failures.
  Source: `glcli bifrost pizza`; kind: `pizza`; captured: `2026-05-16T21:46:48.259Z`.
  Command: `glcli --env albertsons bifrost pizza --audience-id 12875 --org-id 6 --format json`

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
