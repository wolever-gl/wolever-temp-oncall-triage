<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# ford_310 client-sent-export-failure

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `open`
Tags: `triage:needs_review`
Incidents: [Q3EI9TEW7KOQNI](https://growthloop.pagerduty.com/incidents/Q3EI9TEW7KOQNI)
Alerts: 1

## Current Summary

ford (Marketing Production) - Audience 33347: Audience Export failure for 33347 sent to client.

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `ford_310`
- Audiences: `33347`
- Destinations: none
- State tuples: none
- Commands seen: `glcli --env prod bifrost pizza --audience-id 33347 --org-id 310`

Representative alerts:
- Q3EI9TEW7KOQNI/Q0D0CO76JADBP5: 2026-06-22T17:43:17-07:00; ford_310; audience 33347. ford (Marketing Production) - Audience 33347: Audience Export failure for 33347 sent to client.

## Export Checks

- Checks: 1.
- States: `blocked`=1
- Blockers seen: `missing_export_after_alert`

Check evidence:
- chk_q3ei9tew7koqni_q0d0co76jadbp5 (Q3EI9TEW7KOQNI/Q0D0CO76JADBP5): state=`blocked`.
  Scope: env=prod; org=310; audience=33347.
  Command: `glcli --env prod bifrost pizza --audience-id 33347 --org-id 310`
  Blockers: `missing_export_after_alert`

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
