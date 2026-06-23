<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# 174 client-sent-export-failure

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `open`
Tags: `triage:needs_review`
Incidents: [Q2JQFGHZYQMT3U](https://growthloop.pagerduty.com/incidents/Q2JQFGHZYQMT3U)
Alerts: 1

## Current Summary

NJ Devils (default) - Audience 21168: Audience Export failure for 21168 sent to client.

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `174`
- Audiences: `21168`
- Destinations: none
- State tuples: none
- Commands seen: `glcli --env prod bifrost pizza --audience-id 21168 --org-id 174`

Representative alerts:
- Q2JQFGHZYQMT3U/Q190TA56B5ZMGL: 2026-06-22T03:32:07-07:00; 174; audience 21168. NJ Devils (default) - Audience 21168: Audience Export failure for 21168 sent to client.

## Export Checks

- Checks: 1.
- States: `blocked`=1
- Blockers seen: `missing_export_after_alert`

Check evidence:
- chk_q2jqfghzyqmt3u_q190ta56b5zmgl (Q2JQFGHZYQMT3U/Q190TA56B5ZMGL): state=`blocked`.
  Scope: env=prod; org=174; audience=21168.
  Command: `glcli --env prod bifrost pizza --audience-id 21168 --org-id 174`
  Blockers: `missing_export_after_alert`

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
