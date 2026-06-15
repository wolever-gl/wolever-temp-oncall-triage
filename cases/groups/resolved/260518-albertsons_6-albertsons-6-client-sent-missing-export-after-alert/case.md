<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# albertsons_6 client sent missing export after alert

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `resolved`
Tags: `triage:needs-evidence`, `triage:tag_grouped`, `resolved:pd_closed_external`
Incidents: [Q2CAIXK91KMVOP](https://growthloop.pagerduty.com/incidents/Q2CAIXK91KMVOP)
Alerts: 1

## Current Summary

All attached PagerDuty incidents are resolved externally.

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `albertsons_6`
- Audiences: `11826`
- Destinations: none
- State tuples: none
- Commands seen: `glcli --env albertsons bifrost pizza --audience-id 11826 --org-id 6`

Representative alerts:
- Q2CAIXK91KMVOP/Q03J7N55FWQB24: 2026-05-18T06:52:43-07:00; albertsons_6; audience 11826. albertsons (Albertsons Media) - Audience 11826: Audience Export failure for 11826 sent to client.

## Export Checks

- Checks: 1.
- States: `blocked`=1
- Blockers seen: `missing_export_after_alert`

Check evidence:
- chk_q2caixk91kmvop_q03j7n55fwqb24 (Q2CAIXK91KMVOP/Q03J7N55FWQB24): state=`blocked`.
  Scope: env=albertsons; org=6; audience=11826.
  Command: `glcli --env albertsons bifrost pizza --audience-id 11826 --org-id 6`
  Blockers: `missing_export_after_alert`

## Recent Evidence

- All attached PagerDuty incidents are resolved externally. Attached incidents: Q2CAIXK91KMVOP.
  Source: `pagerduty`; kind: `pd_sync`; captured: `2026-06-15T16:19:15.114Z`.
- Albertsons client-sent export failure alerts where preflight found Pizza rows but no matching export after the alert.
  Source: `oncall-triage`; kind: `tag_grouping`; captured: `2026-05-18T22:10:02.192Z`.

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
