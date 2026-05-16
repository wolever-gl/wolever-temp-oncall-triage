<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# albertsons_6 client-sent-export-failure

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `resolved`
Tags: `triage:needs_review`, `resolved:merged`
Incidents: [Q2T09VCLN9MRZ8](https://growthloop.pagerduty.com/incidents/Q2T09VCLN9MRZ8)
Alerts: 3

## Current Summary

Merged into 260511-albertsons_6-snapshotting-error: Remaining client-sent alerts for audiences 10370, 10372, and 10749 match the existing Albertsons missing RFM_Category_Group client-schema waiting case.

## Alert Scope

- Alert facts: 3 imported, 3 linked to this group.
- Orgs: `albertsons_6`
- Audiences: `10370`, `10372`, `10749`
- Destinations: none
- State tuples: none
- Commands seen: `glcli --env albertsons bifrost pizza --audience-id 10370 --org-id 6`, `glcli --env albertsons bifrost pizza --audience-id 10372 --org-id 6`, `glcli --env albertsons bifrost pizza --audience-id 10749 --org-id 6`

Representative alerts:
- Q2T09VCLN9MRZ8/Q3TL521CW7Y2J2: 2026-05-11T21:26:39-07:00; albertsons_6; audience 10749. albertsons (Albertsons Media) - Audience 10749: Audience Export failure for 10749 sent to client.
- Q2T09VCLN9MRZ8/Q0GX8AZ1GWYKL9: 2026-05-11T21:27:07-07:00; albertsons_6; audience 10372. albertsons (Albertsons Media) - Audience 10372: Audience Export failure for 10372 sent to client.
- Q2T09VCLN9MRZ8/Q0ODPXTYE0FORK: 2026-05-11T23:13:09-07:00; albertsons_6; audience 10370. albertsons (Albertsons Media) - Audience 10370: Audience Export failure for 10370 sent to client.

## Next Action

Follow target group 260511-albertsons_6-snapshotting-error.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
