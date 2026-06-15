<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# 451 client-sent-export-failure

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `resolved`
Tags: `triage:needs_review`, `resolved:merged`
Incidents: [Q3XQABQFPPVNT5](https://growthloop.pagerduty.com/incidents/Q3XQABQFPPVNT5)
Alerts: 1

## Current Summary

Merged into 260514-451-salesforce-audience-export-error: Audience 31982 client-sent alert is the notification counterpart of the Salesforce audience export-error case; latest Pizza still shows 31982 export_error.

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `451`
- Audiences: `31982`
- Destinations: none
- State tuples: none
- Commands seen: `glcli --env prod bifrost pizza --audience-id 31982 --org-id 451`

Representative alerts:
- Q3XQABQFPPVNT5/Q20R8OKEQNMTTK: 2026-05-13T19:19:06-07:00; 451; audience 31982. ASU Enterprise Partners (Restricted) - Audience 31982: Audience Export failure for 31982 sent to client.

## Export Checks

- Checks: 1.
- States: `open`=1
- Blockers seen: `evidence_unavailable`

Check evidence:
- chk_q3xqabqfppvnt5_q20r8okeqnmttk (Q3XQABQFPPVNT5/Q20R8OKEQNMTTK): state=`open`, next_check_at=`2026-06-15T16:41:59.827Z`.
  Scope: env=prod; org=451; audience=31982.
  Command: `glcli --env prod bifrost pizza --audience-id 31982 --org-id 451`
  Blockers: `evidence_unavailable`

## Recent Evidence

- Audience 31982 remains failing: latest Pizza row is 2026-05-16 00:18:45 UTC, run 31982-salesforce_audience_21336-scheduled__2026-05-16T00:00:00+00:00, snapshotting_finished/export_error with 14 failures.
  Source: `glcli bifrost pizza`; kind: `pizza`; captured: `2026-05-16T22:08:40.064Z`.
  Command: `glcli --env prod bifrost pizza --audience-id 31982 --org-id 451 --format json`

## Next Action

Follow target group 260514-451-salesforce-audience-export-error.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
