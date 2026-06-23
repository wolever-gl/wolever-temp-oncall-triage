<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# chghealthcare_395 client-sent-export-failure

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `open`
Tags: `triage:needs_review`
Incidents: [Q3WTQ2TAGZ5TEI](https://growthloop.pagerduty.com/incidents/Q3WTQ2TAGZ5TEI)
Alerts: 1

## Current Summary

chghealthcare (Omni-Division) - Audience 29661: Audience Export failure for 29661 sent to client.

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `chghealthcare_395`
- Audiences: `29661`
- Destinations: none
- State tuples: none
- Commands seen: `glcli --env prod bifrost pizza --audience-id 29661 --org-id 395`

Representative alerts:
- Q3WTQ2TAGZ5TEI/Q2ZPYQO1WT2ZIP: 2026-06-22T16:51:08-07:00; chghealthcare_395; audience 29661. chghealthcare (Omni-Division) - Audience 29661: Audience Export failure for 29661 sent to client.

## Export Checks

- Checks: 1.
- States: `blocked`=1
- Blockers seen: `missing_export_after_alert`

Check evidence:
- chk_q3wtq2tagz5tei_q2zpyqo1wt2zip (Q3WTQ2TAGZ5TEI/Q2ZPYQO1WT2ZIP): state=`blocked`.
  Scope: env=prod; org=395; audience=29661.
  Command: `glcli --env prod bifrost pizza --audience-id 29661 --org-id 395`
  Blockers: `missing_export_after_alert`

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
