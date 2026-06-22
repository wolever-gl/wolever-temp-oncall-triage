<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# albertsons_6 client-sent-export-failure

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `resolved`
Tags: `triage:needs_review`, `resolved:merged`
Incidents: [Q2T09VCLN9MRZ8](https://growthloop.pagerduty.com/incidents/Q2T09VCLN9MRZ8)
Alerts: 4

## Current Summary

Merged into 260511-albertsons_6-albertsons-6-schema-issues: Client-sent alerts are notification counterparts for the same Albertsons schema-remediation audiences already tracked in the waiting schema group; latest preflight shows the same blocked schema/missing-export evidence for 10370, 10372, and 10749, plus monitoring for 2189.

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

- Checks: 4.
- States: `blocked`=3, `monitoring`=1
- Blockers seen: `missing_export_after_alert`, `snapshotting_error_requires_review`

Check evidence:
- chk_q2t09vcln9mrz8_q0gx8az1gwykl9 (Q2T09VCLN9MRZ8/Q0GX8AZ1GWYKL9): state=`blocked`.
  Scope: env=albertsons; org=6; audience=10372.
  Command: `glcli --env albertsons bifrost pizza --audience-id 10372 --org-id 6`
  Blockers: `snapshotting_error_requires_review`
  Run 10372-live_ramp_activation_2261-scheduled__2026-05-19T00:00:00+00:00: health=`blocked`; blockers=snapshotting_error_requires_review; created=2026-05-19T04:52:01.250831+00:00; snapshotting=snapshotting_error; export=no_batches; failed=0.
- chk_q2t09vcln9mrz8_q0odpxtye0fork (Q2T09VCLN9MRZ8/Q0ODPXTYE0FORK): state=`blocked`.
  Scope: env=albertsons; org=6; audience=10370.
  Command: `glcli --env albertsons bifrost pizza --audience-id 10370 --org-id 6`
  Blockers: `missing_export_after_alert`
- chk_q2t09vcln9mrz8_q24l2jiwvy4gis (Q2T09VCLN9MRZ8/Q24L2JIWVY4GIS): state=`monitoring`, next_check_at=`2026-06-22T15:21:58.855Z`.
  Scope: env=albertsons; org=6; audience=2189.
  Command: `glcli --env albertsons bifrost pizza --audience-id 2189 --org-id 6`
  Run 2189-live_ramp_activation_678-manual__2026-05-18T20:23:35+00:00: health=`monitoring`; created=2026-05-18T20:29:49.982482+00:00; snapshotting=snapshotting_processing; export=no_batches; failed=0.
- chk_q2t09vcln9mrz8_q3tl521cw7y2j2 (Q2T09VCLN9MRZ8/Q3TL521CW7Y2J2): state=`blocked`.
  Scope: env=albertsons; org=6; audience=10749.
  Command: `glcli --env albertsons bifrost pizza --audience-id 10749 --org-id 6`
  Blockers: `snapshotting_error_requires_review`
  Run 10749-live_ramp_activation_2412-scheduled__2026-05-26T00:00:00+00:00: health=`blocked`; blockers=snapshotting_error_requires_review; created=2026-05-26T05:24:44.312036+00:00; snapshotting=snapshotting_error; export=no_batches; failed=0.

## Next Action

Follow target group 260511-albertsons_6-albertsons-6-schema-issues.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
