<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# albertsons_6 client-sent-export-failure

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `resolved`
Tags: `triage:needs_review`, `resolved:merged`
Incidents: [Q2EEZBO0CVUEW3](https://growthloop.pagerduty.com/incidents/Q2EEZBO0CVUEW3)
Alerts: 1

## Current Summary

Merged into 260622-albertsons_6-http-client-errors: Client-sent failure is for the same Albertsons audience as a 2026-06-23 snapshotting HTTP-client alert already classified as the existing Quervice missing Product_Attributes_Product_Group_categoryL validation class.

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `albertsons_6`
- Audiences: `2218`
- Destinations: none
- State tuples: none
- Commands seen: `glcli --env albertsons bifrost pizza --audience-id 2218 --org-id 6`

Representative alerts:
- Q2EEZBO0CVUEW3/Q1VCDT9LMVFUFE: 2026-06-22T19:49:13-07:00; albertsons_6; audience 2218. albertsons (Albertsons Media) - Audience 2218: Audience Export failure for 2218 sent to client.

## Export Checks

- Checks: 1.
- States: `blocked`=1
- Blockers seen: `missing_export_after_alert`

Check evidence:
- chk_q2eezbo0cvuew3_q1vcdt9lmvfufe (Q2EEZBO0CVUEW3/Q1VCDT9LMVFUFE): state=`blocked`.
  Scope: env=albertsons; org=6; audience=2218.
  Command: `glcli --env albertsons bifrost pizza --audience-id 2218 --org-id 6`
  Blockers: `missing_export_after_alert`

## Next Action

Follow target group 260622-albertsons_6-http-client-errors.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
