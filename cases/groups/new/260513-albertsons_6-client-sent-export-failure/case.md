<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# albertsons_6 client-sent-export-failure

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `new`
Tags: `triage:needs_review`
Incidents: [Q2EJWG22CER0LA](https://growthloop.pagerduty.com/incidents/Q2EJWG22CER0LA)
Alerts: 3

## Current Summary

albertsons (Albertsons Media) - Audience 8473: Audience Export failure for 8473 sent to client.

## Alert Scope

- Alert facts: 3 imported, 3 linked to this group.
- Orgs: `albertsons_6`
- Audiences: `11688`, `11820`, `8473`
- Destinations: none
- State tuples: none
- Commands seen: `glcli --env albertsons bifrost pizza --audience-id 11688 --org-id 6`, `glcli --env albertsons bifrost pizza --audience-id 11820 --org-id 6`, `glcli --env albertsons bifrost pizza --audience-id 8473 --org-id 6`

Representative alerts:
- Q2EJWG22CER0LA/Q2S03JXYQD34WM: 2026-05-12T10:08:23-07:00; albertsons_6; audience 11820. albertsons (Albertsons Media) - Audience 11820: Audience Export failure for 11820 sent to client.
- Q2EJWG22CER0LA/Q311OEQ3IZ6GPG: 2026-05-12T12:10:10-07:00; albertsons_6; audience 11688. albertsons (Albertsons Media) - Audience 11688: Audience Export failure for 11688 sent to client.
- Q2EJWG22CER0LA/Q2N69VPQCMRHGL: 2026-05-13T00:18:27-07:00; albertsons_6; audience 8473. albertsons (Albertsons Media) - Audience 8473: Audience Export failure for 8473 sent to client.

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
