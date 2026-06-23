<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# trumanshow_336 client-sent-export-failure

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `open`
Tags: `triage:needs_review`
Incidents: [Q1V27H9N7CL01X](https://growthloop.pagerduty.com/incidents/Q1V27H9N7CL01X)
Alerts: 1

## Current Summary

trumanshow (Retail & CPG) - Audience 35783: Audience Export failure for 35783 sent to client.

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `trumanshow_336`
- Audiences: `35783`
- Destinations: none
- State tuples: none
- Commands seen: `glcli --env prod bifrost pizza --audience-id 35783 --org-id 336`

Representative alerts:
- Q1V27H9N7CL01X/Q39KO3CZLBB02V: 2026-06-20T17:24:25-07:00; trumanshow_336; audience 35783. trumanshow (Retail & CPG) - Audience 35783: Audience Export failure for 35783 sent to client.

## Export Checks

- Checks: 1.
- States: `blocked`=1
- Blockers seen: `snapshotting_error_requires_review`

Check evidence:
- chk_q1v27h9n7cl01x_q39ko3czlbb02v (Q1V27H9N7CL01X/Q39KO3CZLBB02V): state=`blocked`.
  Scope: env=prod; org=336; audience=35783.
  Command: `glcli --env prod bifrost pizza --audience-id 35783 --org-id 336`
  Blockers: `snapshotting_error_requires_review`
  Run 35783-adobe_experience_platform_21768-scheduled__2026-06-22T00:00:00+00:00: health=`blocked`; blockers=snapshotting_error_requires_review; created=2026-06-22T00:18:09.248066+00:00; snapshotting=snapshotting_error; export=no_batches; failed=0.

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
