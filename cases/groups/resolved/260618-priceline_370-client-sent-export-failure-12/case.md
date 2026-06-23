<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# priceline_370 client-sent-export-failure

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `resolved`
Tags: `triage:needs_review`, `resolved:export-healthy`
Incidents: [Q322R4KUP86DWS](https://growthloop.pagerduty.com/incidents/Q322R4KUP86DWS)
Alerts: 1

## Current Summary

Auto-resolved from Pizza export checks: all 1 alert-scoped export check(s) are healthy_closed with no blockers.

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `priceline_370`
- Audiences: `18476`
- Destinations: none
- State tuples: none
- Commands seen: `glcli --env prod bifrost pizza --audience-id 18476 --org-id 370`

Representative alerts:
- Q322R4KUP86DWS/Q1V2SPKAXGD18W: 2026-06-18T17:48:54-07:00; priceline_370; audience 18476. priceline (default) - Audience 18476: Audience Export failure for 18476 sent to client.

## Export Checks

- Checks: 1.
- States: `healthy_closed`=1

Check evidence:
- chk_q322r4kup86dws_q1v2spkaxgd18w (Q322R4KUP86DWS/Q1V2SPKAXGD18W): state=`healthy_closed`.
  Scope: env=prod; org=370; audience=18476.
  Command: `glcli --env prod bifrost pizza --audience-id 18476 --org-id 370`
  Run 18476-google_adwords_11795-scheduled__2026-06-22T00:00:00+00:00: health=`healthy`; created=2026-06-22T00:22:04.602278+00:00; snapshotting=snapshotting_finished; export=export_finished; failed=0.

## Recent Evidence

- Auto-resolved from Pizza export checks: all 1 alert-scoped export check(s) are healthy_closed with no blockers.
  Source: `check-exports`; kind: `export_check`; captured: `2026-06-22T21:52:29.331Z`.

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
