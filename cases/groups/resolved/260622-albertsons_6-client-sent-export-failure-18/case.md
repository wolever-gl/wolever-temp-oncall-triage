<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# albertsons_6 client-sent-export-failure

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `resolved`
Tags: `triage:needs_review`, `resolved:merged`
Incidents: [Q36ENB8WGMYDAW](https://growthloop.pagerduty.com/incidents/Q36ENB8WGMYDAW)
Alerts: 1

## Current Summary

Merged into 260622-albertsons_6-client-sent-export-failure-04: Targeted preflight for this Albertsons client-sent singleton found the same blocker as the new missing_export_after_alert class: Pizza history exists, but no matching export run after the alert.

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `albertsons_6`
- Audiences: `11948`
- Destinations: none
- State tuples: none
- Commands seen: `glcli --env albertsons bifrost pizza --audience-id 11948 --org-id 6`

Representative alerts:
- Q36ENB8WGMYDAW/Q0J8Z3B3E1AQKE: 2026-06-22T18:11:06-07:00; albertsons_6; audience 11948. albertsons (Albertsons Media) - Audience 11948: Audience Export failure for 11948 sent to client.

## Export Checks

- Checks: 1.
- States: `blocked`=1
- Blockers seen: `missing_export_after_alert`

Check evidence:
- chk_q36enb8wgmydaw_q0j8z3b3e1aqke (Q36ENB8WGMYDAW/Q0J8Z3B3E1AQKE): state=`blocked`.
  Scope: env=albertsons; org=6; audience=11948.
  Command: `glcli --env albertsons bifrost pizza --audience-id 11948 --org-id 6`
  Blockers: `missing_export_after_alert`

## Next Action

Follow target group 260622-albertsons_6-client-sent-export-failure-04.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
