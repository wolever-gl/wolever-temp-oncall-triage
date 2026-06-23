<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# albertsons_6 albertsons-albertsons-media-no-exports-for-audie

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `resolved`
Tags: `triage:needs_review`, `resolved:merged`
Incidents: [Q0NB1XLBBBB6OG](https://growthloop.pagerduty.com/incidents/Q0NB1XLBBBB6OG)
Alerts: 1

## Current Summary

Merged into 260622-albertsons_6-albertsons-albertsons-media-no-exports-for-audie: Consolidate Albertsons no-exports-for-audience scheduled interval alerts from the Other open buckets list into a single investigation case.

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `albertsons_6`
- Audiences: `10746`
- Destinations: none
- State tuples: none
- Commands seen: `glcli --env albertsons bifrost pizza --audience-id 10746 --org-id 6`

Representative alerts:
- Q0NB1XLBBBB6OG/Q1Z6210KIQRYAM: 2026-06-22T07:38:19-07:00; albertsons_6; audience 10746. albertsons (Albertsons Media): No exports for audience 10746 found in scheduled interval

## Export Checks

- Checks: 1.
- States: `blocked`=1
- Blockers seen: `missing_run_identity`

Check evidence:
- chk_q0nb1xlbbbb6og_q1z6210kiqryam (Q0NB1XLBBBB6OG/Q1Z6210KIQRYAM): state=`blocked`.
  Scope: env=albertsons; org=6; audience=10746.
  Command: `glcli --env albertsons bifrost pizza --audience-id 10746 --org-id 6`
  Blockers: `missing_run_identity`

## Next Action

Follow target group 260622-albertsons_6-albertsons-albertsons-media-no-exports-for-audie.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
