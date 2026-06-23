<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# chghealthcare_395 client-sent-export-failure

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `open`
Tags: `triage:needs_review`
Incidents: [Q25DTSW9KXJQ6B](https://growthloop.pagerduty.com/incidents/Q25DTSW9KXJQ6B)
Alerts: 1

## Current Summary

chghealthcare (CompHealth) - Audience 32373: Audience Export failure for 32373 sent to client.

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `chghealthcare_395`
- Audiences: `32373`
- Destinations: none
- State tuples: none
- Commands seen: `glcli --env prod bifrost pizza --audience-id 32373 --org-id 395`

Representative alerts:
- Q25DTSW9KXJQ6B/Q0VFBQKL46Z75H: 2026-06-22T17:10:47-07:00; chghealthcare_395; audience 32373. chghealthcare (CompHealth) - Audience 32373: Audience Export failure for 32373 sent to client.

## Export Checks

- Checks: 1.
- States: `blocked`=1
- Blockers seen: `missing_export_after_alert`

Check evidence:
- chk_q25dtsw9kxjq6b_q0vfbqkl46z75h (Q25DTSW9KXJQ6B/Q0VFBQKL46Z75H): state=`blocked`.
  Scope: env=prod; org=395; audience=32373.
  Command: `glcli --env prod bifrost pizza --audience-id 32373 --org-id 395`
  Blockers: `missing_export_after_alert`

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
