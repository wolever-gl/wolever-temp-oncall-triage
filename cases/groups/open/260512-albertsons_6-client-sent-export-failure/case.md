<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# albertsons_6 client-sent-export-failure

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `open`
Tags: `triage:needs_review`
Incidents: [Q2T09VCLN9MRZ8](https://growthloop.pagerduty.com/incidents/Q2T09VCLN9MRZ8)
Alerts: 4

## Current Summary

albertsons (Albertsons Media) - Audience 2189: Audience Export failure for 2189 sent to client.

## Alert Scope

- Alert facts: 4 imported, 4 linked to this group.
- Orgs: `albertsons_6`
- Audiences: `10370`, `10372`, `10749`, `2189`
- Destinations: none
- State tuples: none
- Commands seen: `glcli --env albertsons bifrost pizza --audience-id 10370 --org-id 6`, `glcli --env albertsons bifrost pizza --audience-id 10372 --org-id 6`, `glcli --env albertsons bifrost pizza --audience-id 10749 --org-id 6`, and 1 more

Representative alerts:
- Q2T09VCLN9MRZ8/Q3TL521CW7Y2J2: 2026-05-11T21:26:39-07:00; albertsons_6; audience 10749. albertsons (Albertsons Media) - Audience 10749: Audience Export failure for 10749 sent to client.
- Q2T09VCLN9MRZ8/Q0GX8AZ1GWYKL9: 2026-05-11T21:27:07-07:00; albertsons_6; audience 10372. albertsons (Albertsons Media) - Audience 10372: Audience Export failure for 10372 sent to client.
- Q2T09VCLN9MRZ8/Q0ODPXTYE0FORK: 2026-05-11T23:13:09-07:00; albertsons_6; audience 10370. albertsons (Albertsons Media) - Audience 10370: Audience Export failure for 10370 sent to client.
- Q2T09VCLN9MRZ8/Q24L2JIWVY4GIS: 2026-05-12T01:04:24-07:00; albertsons_6; audience 2189. albertsons (Albertsons Media) - Audience 2189: Audience Export failure for 2189 sent to client.

## Export Checks

- Checks: 1.
- States: `blocked`=1
- Blockers seen: `missing_run_identity`

Check evidence:
- chk_q2t09vcln9mrz8_q24l2jiwvy4gis (Q2T09VCLN9MRZ8/Q24L2JIWVY4GIS): state=`blocked`.
  Scope: env=albertsons; org=6; audience=2189.
  Command: `glcli --env albertsons bifrost pizza --audience-id 2189 --org-id 6`
  Blockers: `missing_run_identity`

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
