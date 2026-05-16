<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# 451 client-sent-export-failure

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `open`
Tags: `triage:needs_review`
Incidents: [Q31XLLHUNNMAK9](https://growthloop.pagerduty.com/incidents/Q31XLLHUNNMAK9)
Alerts: 1

## Current Summary

ASU Enterprise Partners (General - ASU Data) - SignalRoute 995: SignalRoute Export failure for 995 sent to client.

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `451`
- Audiences: `995`
- Destinations: none
- State tuples: none
- Commands seen: `glcli --env prod bifrost pizza --audience-id 995 --org-id 451`

Representative alerts:
- Q31XLLHUNNMAK9/Q14QGYRQTYNKJV: 2026-05-15T16:32:16-07:00; 451; audience 995. ASU Enterprise Partners (General - ASU Data) - SignalRoute 995: SignalRoute Export failure for 995 sent to client.

## Export Checks

- Checks: 1.
- States: `blocked`=1
- Blockers seen: `missing_run_identity`

Check evidence:
- chk_q31xllhunnmak9_q14qgyrqtynkjv (Q31XLLHUNNMAK9/Q14QGYRQTYNKJV): state=`blocked`.
  Scope: env=prod; org=451; audience=995.
  Command: `glcli --env prod bifrost pizza --audience-id 995 --org-id 451`
  Blockers: `missing_run_identity`

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
