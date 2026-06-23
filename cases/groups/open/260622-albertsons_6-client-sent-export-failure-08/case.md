<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# albertsons_6 client-sent-export-failure

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `open`
Tags: `triage:needs_review`
Incidents: [Q140U7GG9RCAQU](https://growthloop.pagerduty.com/incidents/Q140U7GG9RCAQU)
Alerts: 1

## Current Summary

albertsons (Albertsons Media) - Audience 9792: Audience Export failure for 9792 sent to client.

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `albertsons_6`
- Audiences: `9792`
- Destinations: none
- State tuples: none
- Commands seen: `glcli --env albertsons bifrost pizza --audience-id 9792 --org-id 6`

Representative alerts:
- Q140U7GG9RCAQU/Q2AU0IE7CCV4T6: 2026-06-22T22:39:15-07:00; albertsons_6; audience 9792. albertsons (Albertsons Media) - Audience 9792: Audience Export failure for 9792 sent to client.

## Export Checks

- Checks: 1.
- States: `blocked`=1
- Blockers seen: `missing_export_after_alert`

Check evidence:
- chk_q140u7gg9rcaqu_q2au0ie7ccv4t6 (Q140U7GG9RCAQU/Q2AU0IE7CCV4T6): state=`blocked`.
  Scope: env=albertsons; org=6; audience=9792.
  Command: `glcli --env albertsons bifrost pizza --audience-id 9792 --org-id 6`
  Blockers: `missing_export_after_alert`

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
