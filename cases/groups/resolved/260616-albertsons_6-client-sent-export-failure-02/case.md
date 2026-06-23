<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# albertsons_6 client-sent-export-failure

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `resolved`
Tags: `triage:needs_review`, `resolved:merged`
Incidents: [Q1NCQUL11TZXWI](https://growthloop.pagerduty.com/incidents/Q1NCQUL11TZXWI)
Alerts: 1

## Current Summary

Merged into 260617-albertsons_6-client-sent-export-failure: Consolidate Albertsons client-sent export failure alerts from the Other open buckets list into a single investigation case.

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `albertsons_6`
- Audiences: `13176`
- Destinations: none
- State tuples: none
- Commands seen: `glcli --env albertsons bifrost pizza --audience-id 13176 --org-id 6`

Representative alerts:
- Q1NCQUL11TZXWI/Q2PMGVTPJ7WKIH: 2026-06-16T12:39:00-07:00; albertsons_6; audience 13176. albertsons (Albertsons Media) - Audience 13176: Audience Export failure for 13176 sent to client.

## Export Checks

- Checks: 1.
- States: `blocked`=1
- Blockers seen: `missing_export_after_alert`

Check evidence:
- chk_q1ncqul11tzxwi_q2pmgvtpj7wkih (Q1NCQUL11TZXWI/Q2PMGVTPJ7WKIH): state=`blocked`.
  Scope: env=albertsons; org=6; audience=13176.
  Command: `glcli --env albertsons bifrost pizza --audience-id 13176 --org-id 6`
  Blockers: `missing_export_after_alert`

## Next Action

Follow target group 260617-albertsons_6-client-sent-export-failure.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
