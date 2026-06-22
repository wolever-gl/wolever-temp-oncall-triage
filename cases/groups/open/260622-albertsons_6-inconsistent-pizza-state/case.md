<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# Albertsons inconsistent Pizza state

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `open`
Tags: `triage:albertsons-client-sent`, `triage:needs_evidence`, `triage:tag_grouped`
Incidents: [Q3F3T8YUI45U70](https://growthloop.pagerduty.com/incidents/Q3F3T8YUI45U70)
Alerts: 1

## Current Summary

Albertsons audience 11299 has latest Pizza state snapshotting_error/export_finished, which is internally inconsistent and needs manual review.

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `albertsons_6`
- Audiences: `11299`
- Destinations: none
- State tuples: none
- Commands seen: `glcli --env albertsons bifrost pizza --audience-id 11299 --org-id 6`

Representative alerts:
- Q3F3T8YUI45U70/Q32IDZ6UZD4FV9: 2026-06-22T00:35:28-07:00; albertsons_6; audience 11299. albertsons (Albertsons Media) - Audience 11299: Audience Export failure for 11299 sent to client.

## Export Checks

- Checks: 1.
- States: `blocked`=1
- Blockers seen: `missing_export_after_alert`

Check evidence:
- chk_q3f3t8yui45u70_q32idz6uzd4fv9 (Q3F3T8YUI45U70/Q32IDZ6UZD4FV9): state=`blocked`.
  Scope: env=albertsons; org=6; audience=11299.
  Command: `glcli --env albertsons bifrost pizza --audience-id 11299 --org-id 6`
  Blockers: `missing_export_after_alert`

## Recent Evidence

- Albertsons audience 11299 has latest Pizza state snapshotting_error/export_finished, which is internally inconsistent and needs manual review.
  Source: `oncall-triage`; kind: `tag_grouping`; captured: `2026-06-22T19:24:48.840Z`.

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
