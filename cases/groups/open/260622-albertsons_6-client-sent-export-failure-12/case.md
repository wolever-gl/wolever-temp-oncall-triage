<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# albertsons_6 client-sent-export-failure

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `open`
Tags: `triage:needs_review`
Incidents: [Q26H5N9E0O7N0Z](https://growthloop.pagerduty.com/incidents/Q26H5N9E0O7N0Z)
Alerts: 1

## Current Summary

albertsons (Albertsons Media) - Audience 2237: Audience Export failure for 2237 sent to client.

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `albertsons_6`
- Audiences: `2237`
- Destinations: none
- State tuples: none
- Commands seen: `glcli --env albertsons bifrost pizza --audience-id 2237 --org-id 6`

Representative alerts:
- Q26H5N9E0O7N0Z/Q1UHFURH997VC0: 2026-06-22T18:00:09-07:00; albertsons_6; audience 2237. albertsons (Albertsons Media) - Audience 2237: Audience Export failure for 2237 sent to client.

## Export Checks

- Checks: 1.
- States: `blocked`=1
- Blockers seen: `missing_export_after_alert`

Check evidence:
- chk_q26h5n9e0o7n0z_q1uhfurh997vc0 (Q26H5N9E0O7N0Z/Q1UHFURH997VC0): state=`blocked`.
  Scope: env=albertsons; org=6; audience=2237.
  Command: `glcli --env albertsons bifrost pizza --audience-id 2237 --org-id 6`
  Blockers: `missing_export_after_alert`

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
