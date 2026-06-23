<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# 88 client-sent-export-failure

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `resolved`
Tags: `triage:needs_review`, `resolved:export-healthy`
Incidents: [Q2GWFMBG96HKQF](https://growthloop.pagerduty.com/incidents/Q2GWFMBG96HKQF)
Alerts: 2

## Current Summary

Auto-resolved from Pizza export checks: all 2 alert-scoped export check(s) are healthy_closed with no blockers.

## Alert Scope

- Alert facts: 2 imported, 2 linked to this group.
- Orgs: `88`
- Audiences: `20347`, `23740`
- Destinations: none
- State tuples: none
- Commands seen: `glcli --env prod bifrost pizza --audience-id 20347 --org-id 88`, `glcli --env prod bifrost pizza --audience-id 23740 --org-id 88`

Representative alerts:
- Q2GWFMBG96HKQF/Q39HWM8OH98Z1O: 2026-06-06T15:00:36-07:00; 88; audience 20347. Chicago Cubs (default) - Audience 20347: Audience Export failure for 20347 sent to client.
- Q2GWFMBG96HKQF/Q38A6XEEN16GUC: 2026-06-06T15:26:02-07:00; 88; audience 23740. Chicago Cubs (default) - Audience 23740: Audience Export failure for 23740 sent to client.

## Export Checks

- Checks: 2.
- States: `healthy_closed`=2

Check evidence:
- chk_q2gwfmbg96hkqf_q38a6xeen16guc (Q2GWFMBG96HKQF/Q38A6XEEN16GUC): state=`healthy_closed`.
  Scope: env=prod; org=88; audience=23740.
  Command: `glcli --env prod bifrost pizza --audience-id 23740 --org-id 88`
  Run 23740-zeta_22398-scheduled__2026-06-21T21:30:00+00:00: health=`healthy`; created=2026-06-21T21:45:32.300080+00:00; snapshotting=snapshotting_finished_no_deltas; export=no_batches; failed=0.
- chk_q2gwfmbg96hkqf_q39hwm8oh98z1o (Q2GWFMBG96HKQF/Q39HWM8OH98Z1O): state=`healthy_closed`.
  Scope: env=prod; org=88; audience=20347.
  Command: `glcli --env prod bifrost pizza --audience-id 20347 --org-id 88`
  Run 20347-facebook_ads_12818-scheduled__2026-06-21T21:30:00+00:00: health=`healthy`; created=2026-06-21T22:09:12.150910+00:00; snapshotting=snapshotting_finished_no_deltas; export=no_batches; failed=0.

## Recent Evidence

- Auto-resolved from Pizza export checks: all 2 alert-scoped export check(s) are healthy_closed with no blockers.
  Source: `check-exports`; kind: `export_check`; captured: `2026-06-22T21:17:06.244Z`.

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
