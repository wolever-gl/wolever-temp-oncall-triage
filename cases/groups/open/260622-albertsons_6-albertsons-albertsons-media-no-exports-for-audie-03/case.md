<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# albertsons_6 albertsons-albertsons-media-no-exports-for-audie

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `open`
Tags: `triage:needs_review`
Incidents: [Q0C71WMFRHZ86M](https://growthloop.pagerduty.com/incidents/Q0C71WMFRHZ86M)
Alerts: 1

## Current Summary

albertsons (Albertsons Media): No exports for audience 10260 found in scheduled interval

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `albertsons_6`
- Audiences: `10260`
- Destinations: none
- State tuples: none
- Commands seen: `glcli --env albertsons bifrost pizza --audience-id 10260 --org-id 6`

Representative alerts:
- Q0C71WMFRHZ86M/Q16S6X2YUE978G: 2026-06-22T07:36:59-07:00; albertsons_6; audience 10260. albertsons (Albertsons Media): No exports for audience 10260 found in scheduled interval

## Export Checks

- Checks: 1.
- States: `blocked`=1
- Blockers seen: `missing_run_identity`

Check evidence:
- chk_q0c71wmfrhz86m_q16s6x2yue978g (Q0C71WMFRHZ86M/Q16S6X2YUE978G): state=`blocked`.
  Scope: env=albertsons; org=6; audience=10260.
  Command: `glcli --env albertsons bifrost pizza --audience-id 10260 --org-id 6`
  Blockers: `missing_run_identity`

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
