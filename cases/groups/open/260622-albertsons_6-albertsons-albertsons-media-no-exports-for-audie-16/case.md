<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# albertsons_6 albertsons-albertsons-media-no-exports-for-audie

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `open`
Tags: `triage:needs_review`
Incidents: [Q15MYGKQELDC1U](https://growthloop.pagerduty.com/incidents/Q15MYGKQELDC1U)
Alerts: 1

## Current Summary

albertsons (Albertsons Media): No exports for audience 10742 found in scheduled interval

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `albertsons_6`
- Audiences: `10742`
- Destinations: none
- State tuples: none
- Commands seen: `glcli --env albertsons bifrost pizza --audience-id 10742 --org-id 6`

Representative alerts:
- Q15MYGKQELDC1U/Q01WUMJRYMTHEM: 2026-06-22T07:38:18-07:00; albertsons_6; audience 10742. albertsons (Albertsons Media): No exports for audience 10742 found in scheduled interval

## Export Checks

- Checks: 1.
- States: `blocked`=1
- Blockers seen: `missing_run_identity`

Check evidence:
- chk_q15mygkqeldc1u_q01wumjrymthem (Q15MYGKQELDC1U/Q01WUMJRYMTHEM): state=`blocked`.
  Scope: env=albertsons; org=6; audience=10742.
  Command: `glcli --env albertsons bifrost pizza --audience-id 10742 --org-id 6`
  Blockers: `missing_run_identity`

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
