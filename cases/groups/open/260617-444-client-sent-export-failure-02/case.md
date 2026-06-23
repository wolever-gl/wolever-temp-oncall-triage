<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# 444 client-sent-export-failure

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `open`
Tags: `triage:needs_review`
Incidents: [Q3RXWCEGHJ35YU](https://growthloop.pagerduty.com/incidents/Q3RXWCEGHJ35YU)
Alerts: 1

## Current Summary

GrowthLoop 4 GrowthLoop (GrowthLoop) - Audience 38540: Audience Export failure for 38540 sent to client.

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `444`
- Audiences: `38540`
- Destinations: none
- State tuples: none
- Commands seen: `glcli --env prod bifrost pizza --audience-id 38540 --org-id 444`

Representative alerts:
- Q3RXWCEGHJ35YU/Q25M7CS0W614M4: 2026-06-17T14:17:19-07:00; 444; audience 38540. GrowthLoop 4 GrowthLoop (GrowthLoop) - Audience 38540: Audience Export failure for 38540 sent to client.

## Export Checks

- Checks: 1.
- States: `blocked`=1
- Blockers seen: `export_error`, `failed_export_count`

Check evidence:
- chk_q3rxwceghj35yu_q25m7cs0w614m4 (Q3RXWCEGHJ35YU/Q25M7CS0W614M4): state=`blocked`.
  Scope: env=prod; org=444; audience=38540.
  Command: `glcli --env prod bifrost pizza --audience-id 38540 --org-id 444`
  Blockers: `failed_export_count`, `export_error`
  Run 38540-linkedin_ads_22763-webapp__2026-06-17T21:29:20+00:00: health=`blocked`; blockers=failed_export_count, export_error; created=2026-06-17T21:29:56.293571+00:00; snapshotting=snapshotting_finished; export=export_error; failed=2107.

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
