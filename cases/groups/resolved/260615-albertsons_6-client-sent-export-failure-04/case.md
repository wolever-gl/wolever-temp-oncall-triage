<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# albertsons_6 client-sent-export-failure

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `resolved`
Tags: `triage:needs_review`, `resolved:merged`
Incidents: [Q2I0P8BOG77FWF](https://growthloop.pagerduty.com/incidents/Q2I0P8BOG77FWF)
Alerts: 1

## Current Summary

Merged into 260617-albertsons_6-client-sent-export-failure: Consolidate Albertsons client-sent export failure alerts from the Other open buckets list into a single investigation case.

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `albertsons_6`
- Audiences: `11823`
- Destinations: none
- State tuples: none
- Commands seen: `glcli --env albertsons bifrost pizza --audience-id 11823 --org-id 6`

Representative alerts:
- Q2I0P8BOG77FWF/Q1LBPIR2O7LQ26: 2026-06-15T03:36:44-07:00; albertsons_6; audience 11823. albertsons (Albertsons Media) - Audience 11823: Audience Export failure for 11823 sent to client.

## Export Checks

- Checks: 1.
- States: `blocked`=1
- Blockers seen: `missing_export_after_alert`

Check evidence:
- chk_q2i0p8bog77fwf_q1lbpir2o7lq26 (Q2I0P8BOG77FWF/Q1LBPIR2O7LQ26): state=`blocked`.
  Scope: env=albertsons; org=6; audience=11823.
  Command: `glcli --env albertsons bifrost pizza --audience-id 11823 --org-id 6`
  Blockers: `missing_export_after_alert`

## Next Action

Follow target group 260617-albertsons_6-client-sent-export-failure.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
