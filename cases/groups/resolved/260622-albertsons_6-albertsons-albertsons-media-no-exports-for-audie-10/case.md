<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# albertsons_6 albertsons-albertsons-media-no-exports-for-audie

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `resolved`
Tags: `triage:needs_review`, `resolved:merged`
Incidents: [Q0P2NAYBB0ZKX9](https://growthloop.pagerduty.com/incidents/Q0P2NAYBB0ZKX9)
Alerts: 1

## Current Summary

Merged into 260622-albertsons_6-albertsons-albertsons-media-no-exports-for-audie: Consolidate Albertsons no-exports-for-audience scheduled interval alerts from the Other open buckets list into a single investigation case.

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `albertsons_6`
- Audiences: `9737`
- Destinations: none
- State tuples: none
- Commands seen: `glcli --env albertsons bifrost pizza --audience-id 9737 --org-id 6`

Representative alerts:
- Q0P2NAYBB0ZKX9/Q242WOR3SSY0CB: 2026-06-22T07:36:04-07:00; albertsons_6; audience 9737. albertsons (Albertsons Media): No exports for audience 9737 found in scheduled interval

## Export Checks

- Checks: 1.
- States: `blocked`=1
- Blockers seen: `missing_run_identity`

Check evidence:
- chk_q0p2naybb0zkx9_q242wor3ssy0cb (Q0P2NAYBB0ZKX9/Q242WOR3SSY0CB): state=`blocked`.
  Scope: env=albertsons; org=6; audience=9737.
  Command: `glcli --env albertsons bifrost pizza --audience-id 9737 --org-id 6`
  Blockers: `missing_run_identity`

## Next Action

Follow target group 260622-albertsons_6-albertsons-albertsons-media-no-exports-for-audie.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
