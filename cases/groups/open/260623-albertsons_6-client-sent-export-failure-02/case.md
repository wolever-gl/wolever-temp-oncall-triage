<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# albertsons_6 client-sent-export-failure

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `open`
Tags: `triage:needs_review`
Incidents: [Q1UEOA2CBT90GM](https://growthloop.pagerduty.com/incidents/Q1UEOA2CBT90GM)
Alerts: 1

## Current Summary

albertsons (Albertsons Media) - Audience 11572: Audience Export failure for 11572 sent to client.

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `albertsons_6`
- Audiences: `11572`
- Destinations: none
- State tuples: none
- Commands seen: `glcli --env albertsons bifrost pizza --audience-id 11572 --org-id 6`

Representative alerts:
- Q1UEOA2CBT90GM/Q1A0XR0WZLCIBX: 2026-06-23T00:15:45-07:00; albertsons_6; audience 11572. albertsons (Albertsons Media) - Audience 11572: Audience Export failure for 11572 sent to client.

## Export Checks

- Checks: 1.
- States: `blocked`=1
- Blockers seen: `missing_export_after_alert`

Check evidence:
- chk_q1ueoa2cbt90gm_q1a0xr0wzlcibx (Q1UEOA2CBT90GM/Q1A0XR0WZLCIBX): state=`blocked`.
  Scope: env=albertsons; org=6; audience=11572.
  Command: `glcli --env albertsons bifrost pizza --audience-id 11572 --org-id 6`
  Blockers: `missing_export_after_alert`

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
