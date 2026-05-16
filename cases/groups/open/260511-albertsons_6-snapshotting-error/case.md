<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# albertsons_6 snapshotting-error

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `open`
Tags: `triage:needs_review`
Incidents: [Q2T09VCLN9MRZ8](https://growthloop.pagerduty.com/incidents/Q2T09VCLN9MRZ8)
Alerts: 5

## Current Summary

albertsons (Albertsons Media): Exports for audience 10749 failed with states: <(snapshotting_error,no_batches)>

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

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
