# 3 client-sent-export-failure

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `open`
Tags: `triage:needs_review`
Incidents: [Q15FI03XBQ4OW5](https://growthloop.pagerduty.com/incidents/Q15FI03XBQ4OW5)
Alerts: 1

## Current Summary

Costco Non Prod (default) - Audience 5689: Audience Export failure for 5689 sent to client.

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `3`
- Audiences: `5689`
- Destinations: none
- State tuples: none
- Commands seen: `glcli --env costco bifrost pizza --audience-id 5689 --org-id 3`

Representative alerts:
- Q15FI03XBQ4OW5/Q28O1DLLDEV7DA: 2026-05-15T17:17:14-07:00; 3; audience 5689. Costco Non Prod (default) - Audience 5689: Audience Export failure for 5689 sent to client.

## Export Checks

- Checks: 1.
- States: `open`=1
- Blockers seen: `evidence_unavailable`

Check evidence:
- chk_q15fi03xbq4ow5_q28o1dlldev7da (Q15FI03XBQ4OW5/Q28O1DLLDEV7DA): state=`open`, next_check_at=`2026-05-16T16:52:45.724Z`.
  Scope: env=costco; org=3; audience=5689.
  Command: `glcli --env costco bifrost pizza --audience-id 5689 --org-id 3`
  Blockers: `evidence_unavailable`

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
