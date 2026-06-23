<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# albertsons_6 client-sent-export-failure

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `resolved`
Tags: `triage:needs_review`, `resolved:merged`
Incidents: [Q1QQT96DKTRQSZ](https://growthloop.pagerduty.com/incidents/Q1QQT96DKTRQSZ)
Alerts: 1

## Current Summary

Merged into 260622-albertsons_6-client-sent-export-failure-04: Targeted preflight for this Albertsons client-sent singleton found the same blocker as the new missing_export_after_alert class: Pizza history exists, but no matching export run after the alert.

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `albertsons_6`
- Audiences: `13149`
- Destinations: none
- State tuples: none
- Commands seen: `glcli --env albertsons bifrost pizza --audience-id 13149 --org-id 6`

Representative alerts:
- Q1QQT96DKTRQSZ/Q15RZGRDXMEDXL: 2026-06-22T22:27:38-07:00; albertsons_6; audience 13149. albertsons (Albertsons Media) - Audience 13149: Audience Export failure for 13149 sent to client.

## Export Checks

- Checks: 1.
- States: `blocked`=1
- Blockers seen: `missing_export_after_alert`

Check evidence:
- chk_q1qqt96dktrqsz_q15rzgrdxmedxl (Q1QQT96DKTRQSZ/Q15RZGRDXMEDXL): state=`blocked`.
  Scope: env=albertsons; org=6; audience=13149.
  Command: `glcli --env albertsons bifrost pizza --audience-id 13149 --org-id 6`
  Blockers: `missing_export_after_alert`

## Next Action

Follow target group 260622-albertsons_6-client-sent-export-failure-04.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
