# Albertsons snapshotting schema errors

State: `waiting`
Tags: `triage:snapshotting-schema`, `triage:tag_grouped`, `waiting:source-schema`
Incidents: [Q2T09VCLN9MRZ8](https://growthloop.pagerduty.com/incidents/Q2T09VCLN9MRZ8)
Alerts: 5

## Current Summary

Blocked on Albertsons source/schema remediation: scoped snapshotting logs show missing fields in RFM_Category_Group, and live pizza shows no later successful terminal export for the five alert-scoped runs.

## Alert Scope

- Alert facts: 5 imported, 5 linked to this group.
- Orgs: `albertsons_6`
- Audiences: `10074`, `10370`, `10372`, `10663`, `10749`
- Destinations: `live_ramp_activation`
- State tuples: `snapshotting_error/no_batches`
- Commands seen: `glcli --env albertsons bifrost pizza --audience-id 10074 --org-id 6`, `glcli --env albertsons bifrost pizza --audience-id 10370 --org-id 6`, `glcli --env albertsons bifrost pizza --audience-id 10372 --org-id 6`, and 2 more

Representative alerts:
- Q2T09VCLN9MRZ8/Q14V88Y9W3XATI: 2026-05-11T07:35:55-07:00; albertsons_6; audience 10074; live_ramp_activation; snapshotting_error/no_batches. albertsons (Albertsons Media): Exports for audience 10074 failed with states: <(snapshotting_error,no_batches)>
  Runs: `10074-live_ramp_activation_2062-scheduled__2026-05-08T00:00:00+00:00`
- Q2T09VCLN9MRZ8/Q14XXYJMQ2YAP3: 2026-05-11T07:36:14-07:00; albertsons_6; audience 10372; live_ramp_activation; snapshotting_error/no_batches. albertsons (Albertsons Media): Exports for audience 10372 failed with states: <(snapshotting_error,no_batches)>
  Runs: `10372-live_ramp_activation_2261-scheduled__2026-05-05T00:00:00+00:00`
- Q2T09VCLN9MRZ8/Q1MJ4HIBTPB61E: 2026-05-11T07:36:14-07:00; albertsons_6; audience 10370; live_ramp_activation; snapshotting_error/no_batches. albertsons (Albertsons Media): Exports for audience 10370 failed with states: <(snapshotting_error,no_batches)>
  Runs: `10370-live_ramp_activation_2259-scheduled__2026-05-05T00:00:00+00:00`
- Q2T09VCLN9MRZ8/Q214HEH2KED82E: 2026-05-11T07:36:25-07:00; albertsons_6; audience 10663; live_ramp_activation; snapshotting_error/no_batches. albertsons (Albertsons Media): Exports for audience 10663 failed with states: <(snapshotting_error,no_batches)>
  Runs: `10663-live_ramp_activation_2367-scheduled__2026-05-06T00:00:00+00:00`
- Q2T09VCLN9MRZ8/Q2MNS4QOMCJWAW: 2026-05-11T07:36:32-07:00; albertsons_6; audience 10749; live_ramp_activation; snapshotting_error/no_batches. albertsons (Albertsons Media): Exports for audience 10749 failed with states: <(snapshotting_error,no_batches)>
  Runs: `10749-live_ramp_activation_2412-scheduled__2026-05-05T00:00:00+00:00`

## Export Checks

- Checks: 5.
- States: `blocked`=5
- Blockers seen: `snapshotting_error_requires_review`

Check evidence:
- chk_q2t09vcln9mrz8_q14v88y9w3xati (Q2T09VCLN9MRZ8/Q14V88Y9W3XATI): state=`blocked`.
  Scope: env=albertsons; org=6; audience=10074; destination=live_ramp_activation.
  Checked runs: `10074-live_ramp_activation_2062-scheduled__2026-05-08T00:00:00+00:00`
  Command: `glcli --env albertsons bifrost pizza --audience-id 10074 --org-id 6`
  Blockers: `snapshotting_error_requires_review`
  Run 10074-live_ramp_activation_2062-scheduled__2026-05-08T00:00:00+00:00: health=`blocked`; blockers=snapshotting_error_requires_review; created=2026-05-08T00:22:11.354834+00:00; snapshotting=snapshotting_error; export=no_batches; failed=0.
- chk_q2t09vcln9mrz8_q14xxyjmq2yap3 (Q2T09VCLN9MRZ8/Q14XXYJMQ2YAP3): state=`blocked`.
  Scope: env=albertsons; org=6; audience=10372; destination=live_ramp_activation.
  Checked runs: `10372-live_ramp_activation_2261-scheduled__2026-05-05T00:00:00+00:00`
  Command: `glcli --env albertsons bifrost pizza --audience-id 10372 --org-id 6`
  Blockers: `snapshotting_error_requires_review`
  Run 10372-live_ramp_activation_2261-scheduled__2026-05-05T00:00:00+00:00: health=`blocked`; blockers=snapshotting_error_requires_review; created=2026-05-05T05:11:57.259542+00:00; snapshotting=snapshotting_error; export=no_batches; failed=0.
- chk_q2t09vcln9mrz8_q1mj4hibtpb61e (Q2T09VCLN9MRZ8/Q1MJ4HIBTPB61E): state=`blocked`.
  Scope: env=albertsons; org=6; audience=10370; destination=live_ramp_activation.
  Checked runs: `10370-live_ramp_activation_2259-scheduled__2026-05-05T00:00:00+00:00`
  Command: `glcli --env albertsons bifrost pizza --audience-id 10370 --org-id 6`
  Blockers: `snapshotting_error_requires_review`
  Run 10370-live_ramp_activation_2259-scheduled__2026-05-05T00:00:00+00:00: health=`blocked`; blockers=snapshotting_error_requires_review; created=2026-05-05T04:50:59.351764+00:00; snapshotting=snapshotting_error; export=no_batches; failed=0.
- chk_q2t09vcln9mrz8_q214heh2ked82e (Q2T09VCLN9MRZ8/Q214HEH2KED82E): state=`blocked`.
  Scope: env=albertsons; org=6; audience=10663; destination=live_ramp_activation.
  Checked runs: `10663-live_ramp_activation_2367-scheduled__2026-05-06T00:00:00+00:00`
  Command: `glcli --env albertsons bifrost pizza --audience-id 10663 --org-id 6`
  Blockers: `snapshotting_error_requires_review`
  Run 10663-live_ramp_activation_2367-scheduled__2026-05-06T00:00:00+00:00: health=`blocked`; blockers=snapshotting_error_requires_review; created=2026-05-06T05:32:37.973456+00:00; snapshotting=snapshotting_error; export=no_batches; failed=0.
- chk_q2t09vcln9mrz8_q2mns4qomcjwaw (Q2T09VCLN9MRZ8/Q2MNS4QOMCJWAW): state=`blocked`.
  Scope: env=albertsons; org=6; audience=10749; destination=live_ramp_activation.
  Checked runs: `10749-live_ramp_activation_2412-scheduled__2026-05-05T00:00:00+00:00`
  Command: `glcli --env albertsons bifrost pizza --audience-id 10749 --org-id 6`
  Blockers: `snapshotting_error_requires_review`
  Run 10749-live_ramp_activation_2412-scheduled__2026-05-05T00:00:00+00:00: health=`blocked`; blockers=snapshotting_error_requires_review; created=2026-05-05T06:16:10.782768+00:00; snapshotting=snapshotting_error; export=no_batches; failed=0.

## Recent Evidence

- Albertsons source/schema issue is tracked in the customer support Slack thread.
  Source: `user`; kind: `communication_thread`; captured: `2026-05-16T16:33:33Z`.
  Links: [Slack](https://flywheeltechnologies.slack.com/archives/C02J2RJ6VSL/p1778902074333359).
- Scoped snapshotting ERROR logs joined by grouped audience ids show Quervice pre_snapshotting_check failures because audience definitions reference missing fields in source table RFM_Category_Group.
  Source: `gcloud logging read gl-client-albertsons snapshotting-30755505`; kind: `gcloud_logs`; captured: `2026-05-16T02:06:47Z`.
- Live pizza corroboration found no later successful terminal export for any grouped audience. Original checked runs are snapshotting_error/no_batches with failure_reason=missing_table_field; latest rows are still snapshotting_processing/no_batches or snapshotting_error/no_batches.
  Source: `glcli --env albertsons bifrost pizza`; kind: `glcli_pizza`; captured: `2026-05-16T02:06:47Z`.
- PagerDuty incident Q2T09VCLN9MRZ8 remains triggered with 156 total alerts; this group covers five specific alert refs for audiences 10074, 10370, 10372, 10663, and 10749.
  Source: `pagerduty/details+alerts`; kind: `pagerduty_alert_scope`; captured: `2026-05-16T02:06:47Z`.
- Snapshotting failed because audience queries reference missing source fields.
  Source: `oncall-triage`; kind: `tag_grouping`; captured: `2026-05-16T01:48:36.496Z`.

## Next Action

Track customer/source-owner follow-up in Slack thread https://flywheeltechnologies.slack.com/archives/C02J2RJ6VSL/p1778902074333359, then recheck the five alert-scoped audiences for a later snapshotting_finished/export_finished run before resolving.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
