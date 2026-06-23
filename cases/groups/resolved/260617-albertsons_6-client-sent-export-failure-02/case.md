<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# albertsons_6 client-sent-export-failure

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `resolved`
Tags: `triage:needs_review`, `resolved:merged`
Incidents: [Q3YXYZP98NJXIA](https://growthloop.pagerduty.com/incidents/Q3YXYZP98NJXIA)
Alerts: 1

## Current Summary

Merged into 260617-albertsons_6-client-sent-export-failure: Consolidate Albertsons client-sent export failure alerts from the Other open buckets list into a single investigation case.

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `albertsons_6`
- Audiences: `11825`
- Destinations: none
- State tuples: none
- Commands seen: `glcli --env albertsons bifrost pizza --audience-id 11825 --org-id 6`

Representative alerts:
- Q3YXYZP98NJXIA/Q0ZLA8C0RN1FHA: 2026-06-17T19:53:49-07:00; albertsons_6; audience 11825. albertsons (Albertsons Media) - Audience 11825: Audience Export failure for 11825 sent to client.

## Export Checks

- Checks: 1.
- States: `blocked`=1
- Blockers seen: `missing_export_after_alert`

Check evidence:
- chk_q3yxyzp98njxia_q0zla8c0rn1fha (Q3YXYZP98NJXIA/Q0ZLA8C0RN1FHA): state=`blocked`.
  Scope: env=albertsons; org=6; audience=11825.
  Command: `glcli --env albertsons bifrost pizza --audience-id 11825 --org-id 6`
  Blockers: `missing_export_after_alert`

## Next Action

Follow target group 260617-albertsons_6-client-sent-export-failure.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
