<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# albertsons_6 albertsons-albertsons-media-no-exports-for-audie

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `resolved`
Tags: `triage:needs_review`, `resolved:merged`
Incidents: [Q07WN7B40A87BL](https://growthloop.pagerduty.com/incidents/Q07WN7B40A87BL)
Alerts: 1

## Current Summary

Merged into 260622-albertsons_6-albertsons-albertsons-media-no-exports-for-audie: Consolidate Albertsons no-exports-for-audience scheduled interval alerts from the Other open buckets list into a single investigation case.

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `albertsons_6`
- Audiences: `9696`
- Destinations: none
- State tuples: none
- Commands seen: `glcli --env albertsons bifrost pizza --audience-id 9696 --org-id 6`

Representative alerts:
- Q07WN7B40A87BL/Q2JTQO1QPYNXR5: 2026-06-22T07:35:58-07:00; albertsons_6; audience 9696. albertsons (Albertsons Media): No exports for audience 9696 found in scheduled interval

## Export Checks

- Checks: 1.
- States: `blocked`=1
- Blockers seen: `missing_run_identity`

Check evidence:
- chk_q07wn7b40a87bl_q2jtqo1qpynxr5 (Q07WN7B40A87BL/Q2JTQO1QPYNXR5): state=`blocked`.
  Scope: env=albertsons; org=6; audience=9696.
  Command: `glcli --env albertsons bifrost pizza --audience-id 9696 --org-id 6`
  Blockers: `missing_run_identity`

## Next Action

Follow target group 260622-albertsons_6-albertsons-albertsons-media-no-exports-for-audie.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
