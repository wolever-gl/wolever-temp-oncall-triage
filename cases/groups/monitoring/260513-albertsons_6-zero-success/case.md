<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# albertsons_6 zero-success

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `monitoring`
Tags: `triage:needs_review`, `monitoring:export-processing`
Incidents: [Q2EJWG22CER0LA](https://growthloop.pagerduty.com/incidents/Q2EJWG22CER0LA)
Alerts: 2

## Current Summary

Zero-success tagger found the unresolved attached alert is still export_processing while the other alert has recovered; recheck after the next export monitor window.

## Alert Scope

- Alert facts: 2 imported, 2 linked to this group.
- Orgs: `albertsons_6`
- Audiences: `12742`, `12801`
- Destinations: none
- State tuples: none
- Commands seen: `glcli --env albertsons bifrost pizza --audience-id 12742 --org-id 6`, `glcli --env albertsons bifrost pizza --audience-id 12801 --org-id 6`

Representative alerts:
- Q2EJWG22CER0LA/Q3U0RMO0GSEU83: 2026-05-12T16:05:54-07:00; albertsons_6; audience 12801. albertsons (Albertsons Media) - Audience 12801: 0 successfull_exports from pizza tracker found 10 minutes after new export
- Q2EJWG22CER0LA/Q36FHDW4FQ2W9V: 2026-05-13T09:32:35-07:00; albertsons_6; audience 12742. albertsons (Albertsons Media) - Audience 12742: 0 successfull_exports from pizza tracker found 10 minutes after new export

## Export Checks

- Checks: 2.
- States: `blocked`=2
- Blockers seen: `missing_run_identity`

Check evidence:
- chk_q2ejwg22cer0la_q36fhdw4fq2w9v (Q2EJWG22CER0LA/Q36FHDW4FQ2W9V): state=`blocked`.
  Scope: env=albertsons; org=6; audience=12742.
  Command: `glcli --env albertsons bifrost pizza --audience-id 12742 --org-id 6`
  Blockers: `missing_run_identity`
- chk_q2ejwg22cer0la_q3u0rmo0gseu83 (Q2EJWG22CER0LA/Q3U0RMO0GSEU83): state=`blocked`.
  Scope: env=albertsons; org=6; audience=12801.
  Command: `glcli --env albertsons bifrost pizza --audience-id 12801 --org-id 6`
  Blockers: `missing_run_identity`

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
