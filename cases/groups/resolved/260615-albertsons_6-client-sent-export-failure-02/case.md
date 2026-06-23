<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# albertsons_6 client-sent-export-failure

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `resolved`
Tags: `triage:needs_review`, `resolved:merged`
Incidents: [Q1XG43NWEJBMVJ](https://growthloop.pagerduty.com/incidents/Q1XG43NWEJBMVJ)
Alerts: 1

## Current Summary

Merged into 260617-albertsons_6-client-sent-export-failure: Consolidate Albertsons client-sent export failure alerts from the Other open buckets list into a single investigation case.

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `albertsons_6`
- Audiences: `11689`
- Destinations: none
- State tuples: none
- Commands seen: `glcli --env albertsons bifrost pizza --audience-id 11689 --org-id 6`

Representative alerts:
- Q1XG43NWEJBMVJ/Q17YHV22EW38QU: 2026-06-15T06:52:11-07:00; albertsons_6; audience 11689. albertsons (Albertsons Media) - Audience 11689: Audience Export failure for 11689 sent to client.

## Export Checks

- Checks: 1.
- States: `blocked`=1
- Blockers seen: `missing_export_after_alert`

Check evidence:
- chk_q1xg43nwejbmvj_q17yhv22ew38qu (Q1XG43NWEJBMVJ/Q17YHV22EW38QU): state=`blocked`.
  Scope: env=albertsons; org=6; audience=11689.
  Command: `glcli --env albertsons bifrost pizza --audience-id 11689 --org-id 6`
  Blockers: `missing_export_after_alert`

## Next Action

Follow target group 260617-albertsons_6-client-sent-export-failure.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
