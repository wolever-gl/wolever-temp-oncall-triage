<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# albertsons_6 schema issues

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `open`
Tags: `triage:schema-issue`, `triage:tag_grouped`, `waiting:schema-remediation`, `triage:recent-scope`
Incidents: [Q2EJWG22CER0LA](https://growthloop.pagerduty.com/incidents/Q2EJWG22CER0LA), [Q2T09VCLN9MRZ8](https://growthloop.pagerduty.com/incidents/Q2T09VCLN9MRZ8), [Q38JR11G2ENK2W](https://growthloop.pagerduty.com/incidents/Q38JR11G2ENK2W)
Alerts: 14

## Current Summary

Recent-scope schema review for 2026-06-15 through 2026-06-22. Prior May evidence is out of scope for this pass; current evidence should focus on recent Quervice/snapshotting schema-field failures before any new support handoff.

## Alert Scope

- Alert facts: 14 imported, 14 linked to this group.
- Orgs: `albertsons_6`
- Audiences: `10073`, `10074`, `10370`, `10372`, `10663`, `10749`, `2189`, `8473`
- Destinations: `live_ramp_activation`
- State tuples: `snapshotting_error/no_batches`, `snapshotting_processing/no_batches`
- Commands seen: `glcli --env albertsons bifrost pizza --audience-id 10073 --org-id 6`, `glcli --env albertsons bifrost pizza --audience-id 10074 --org-id 6`, `glcli --env albertsons bifrost pizza --audience-id 10370 --org-id 6`, and 5 more

Representative alerts:
- Q2T09VCLN9MRZ8/Q2FA9QPTXF9MJM: 2026-05-11T07:31:17-07:00; albertsons_6; audience 2189; live_ramp_activation; snapshotting_processing/no_batches. albertsons (Albertsons Media): Exports for audience 2189 failed with states: <(snapshotting_processing,no_batches)>
  Runs: `2189-live_ramp_activation_678-scheduled__2026-05-05T00:00:00+00:00`
- Q2T09VCLN9MRZ8/Q3HGOVLPIQWNZ0: 2026-05-11T07:33:58-07:00; albertsons_6; audience 8473; live_ramp_activation; snapshotting_processing/no_batches. albertsons (Albertsons Media): Exports for audience 8473 failed with states: <(snapshotting_processing,no_batches)>
  Runs: `8473-live_ramp_activation_1649-scheduled__2026-05-06T00:00:00+00:00`
- Q2T09VCLN9MRZ8/Q14V88Y9W3XATI: 2026-05-11T07:35:55-07:00; albertsons_6; audience 10074; live_ramp_activation; snapshotting_error/no_batches. albertsons (Albertsons Media): Exports for audience 10074 failed with states: <(snapshotting_error,no_batches)>
  Runs: `10074-live_ramp_activation_2062-scheduled__2026-05-08T00:00:00+00:00`
- Q2T09VCLN9MRZ8/Q2TYR6XMVMLGTB: 2026-05-11T07:35:55-07:00; albertsons_6; audience 10073; live_ramp_activation; snapshotting_processing/no_batches. albertsons (Albertsons Media): Exports for audience 10073 failed with states: <(snapshotting_processing,no_batches)>
  Runs: `10073-live_ramp_activation_2061-scheduled__2026-05-08T00:00:00+00:00`
- Q2T09VCLN9MRZ8/Q14XXYJMQ2YAP3: 2026-05-11T07:36:14-07:00; albertsons_6; audience 10372; live_ramp_activation; snapshotting_error/no_batches. albertsons (Albertsons Media): Exports for audience 10372 failed with states: <(snapshotting_error,no_batches)>
  Runs: `10372-live_ramp_activation_2261-scheduled__2026-05-05T00:00:00+00:00`
- Q2T09VCLN9MRZ8/Q1MJ4HIBTPB61E: 2026-05-11T07:36:14-07:00; albertsons_6; audience 10370; live_ramp_activation; snapshotting_error/no_batches. albertsons (Albertsons Media): Exports for audience 10370 failed with states: <(snapshotting_error,no_batches)>
  Runs: `10370-live_ramp_activation_2259-scheduled__2026-05-05T00:00:00+00:00`
- Q2T09VCLN9MRZ8/Q214HEH2KED82E: 2026-05-11T07:36:25-07:00; albertsons_6; audience 10663; live_ramp_activation; snapshotting_error/no_batches. albertsons (Albertsons Media): Exports for audience 10663 failed with states: <(snapshotting_error,no_batches)>
  Runs: `10663-live_ramp_activation_2367-scheduled__2026-05-06T00:00:00+00:00`
- Q2T09VCLN9MRZ8/Q2MNS4QOMCJWAW: 2026-05-11T07:36:32-07:00; albertsons_6; audience 10749; live_ramp_activation; snapshotting_error/no_batches. albertsons (Albertsons Media): Exports for audience 10749 failed with states: <(snapshotting_error,no_batches)>
  Runs: `10749-live_ramp_activation_2412-scheduled__2026-05-05T00:00:00+00:00`
- Q2T09VCLN9MRZ8/Q3TL521CW7Y2J2: 2026-05-11T21:26:39-07:00; albertsons_6; audience 10749. albertsons (Albertsons Media) - Audience 10749: Audience Export failure for 10749 sent to client.
- Q2T09VCLN9MRZ8/Q0GX8AZ1GWYKL9: 2026-05-11T21:27:07-07:00; albertsons_6; audience 10372. albertsons (Albertsons Media) - Audience 10372: Audience Export failure for 10372 sent to client.
- Showing 10 of 14 alert facts; see `indexes/alert_facts.json` for the full imported set.

## Export Checks

- Checks: 14.
- States: `blocked`=10, `monitoring`=4
- Blockers seen: `missing_export_after_alert`, `snapshotting_error_requires_review`

Check evidence:
- chk_q2ejwg22cer0la_q2n69vpqcmrhgl (Q2EJWG22CER0LA/Q2N69VPQCMRHGL): state=`blocked`.
  Scope: env=albertsons; org=6; audience=8473.
  Command: `glcli --env albertsons bifrost pizza --audience-id 8473 --org-id 6`
  Blockers: `missing_export_after_alert`
- chk_q2t09vcln9mrz8_q0gx8az1gwykl9 (Q2T09VCLN9MRZ8/Q0GX8AZ1GWYKL9): state=`blocked`.
  Scope: env=albertsons; org=6; audience=10372.
  Command: `glcli --env albertsons bifrost pizza --audience-id 10372 --org-id 6`
  Blockers: `snapshotting_error_requires_review`
  Run 10372-live_ramp_activation_2261-scheduled__2026-05-19T00:00:00+00:00: health=`blocked`; blockers=snapshotting_error_requires_review; created=2026-05-19T04:52:01.250831+00:00; snapshotting=snapshotting_error; export=no_batches; failed=0.
- chk_q2t09vcln9mrz8_q0odpxtye0fork (Q2T09VCLN9MRZ8/Q0ODPXTYE0FORK): state=`blocked`.
  Scope: env=albertsons; org=6; audience=10370.
  Command: `glcli --env albertsons bifrost pizza --audience-id 10370 --org-id 6`
  Blockers: `missing_export_after_alert`
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
- chk_q2t09vcln9mrz8_q24l2jiwvy4gis (Q2T09VCLN9MRZ8/Q24L2JIWVY4GIS): state=`monitoring`, next_check_at=`2026-06-22T15:21:58.855Z`.
  Scope: env=albertsons; org=6; audience=2189.
  Command: `glcli --env albertsons bifrost pizza --audience-id 2189 --org-id 6`
  Run 2189-live_ramp_activation_678-manual__2026-05-18T20:23:35+00:00: health=`monitoring`; created=2026-05-18T20:29:49.982482+00:00; snapshotting=snapshotting_processing; export=no_batches; failed=0.
- chk_q2t09vcln9mrz8_q2fa9qptxf9mjm (Q2T09VCLN9MRZ8/Q2FA9QPTXF9MJM): state=`monitoring`, next_check_at=`2026-06-15T16:41:35.352Z`.
  Scope: env=albertsons; org=6; audience=2189; destination=live_ramp_activation.
  Checked runs: `2189-live_ramp_activation_678-scheduled__2026-05-05T00:00:00+00:00`
  Command: `glcli --env albertsons bifrost pizza --audience-id 2189 --org-id 6`
  Run 2189-live_ramp_activation_678-scheduled__2026-05-05T00:00:00+00:00: health=`monitoring`; created=2026-05-05T01:42:54.344376+00:00; snapshotting=snapshotting_processing; export=no_batches; failed=0.
- chk_q2t09vcln9mrz8_q2mns4qomcjwaw (Q2T09VCLN9MRZ8/Q2MNS4QOMCJWAW): state=`blocked`.
  Scope: env=albertsons; org=6; audience=10749; destination=live_ramp_activation.
  Checked runs: `10749-live_ramp_activation_2412-scheduled__2026-05-05T00:00:00+00:00`
  Command: `glcli --env albertsons bifrost pizza --audience-id 10749 --org-id 6`
  Blockers: `snapshotting_error_requires_review`
  Run 10749-live_ramp_activation_2412-scheduled__2026-05-05T00:00:00+00:00: health=`blocked`; blockers=snapshotting_error_requires_review; created=2026-05-05T06:16:10.782768+00:00; snapshotting=snapshotting_error; export=no_batches; failed=0.
- Showing 10 of 14 checks; see `indexes/checks.json` and `checks/*/check.json` for the full evidence set.

## Recent Evidence

- Recent Albertsons schema-field evidence for 2026-06-15 through 2026-06-22; older May evidence intentionally removed from the active case scope.
  Source: `gcloud logging, recent scope`; kind: `log_evidence`; captured: `2026-06-22T18:22:37.248Z`.
  Log query: `quervice recent FieldNotFoundException: resource.type="k8s_container" AND timestamp >= "2026-06-15T00:00:00Z" AND timestamp <= "2026-06-22T23:59:59Z" AND resource.labels.namespace_name="quervice-21201878" AND jsonPayload.organization_id="albertsons_6" AND "FieldNotFoundException"`
  Log query: `quervice recent missing SQL names: same scope with "Name SCHEDULE_N_SAVE_IND not found inside users"`
  Log query: `snapshotting recent errors: resource.labels.namespace_name="snapshotting-30755505" AND jsonPayload.organization_id="albertsons_6" AND severity>=ERROR`
  Findings:
  - No recent Albertsons PagerDuty alert facts were imported for created_at >= 2026-06-15; this current scope is based on live Cloud Logging evidence.
  - Journey 95 (/v1/journeys/action): 181 FieldNotFoundException rows for P13N_CHANGE_IND missing from CDP_CUSTOMER_PROFILE_FEED_VW; 182 BigQuery rows for SCHEDULE_N_SAVE_IND not found inside users/CDP_CUSTOMER_PROFILE_FEED_VW.
  - Audience 564: 22 FieldNotFoundException rows for FRESHPASS_SUBSCRIPTION_STATUS_CD missing from CDP_CUSTOMER_PROFILE_FEED_VW across /v1/audiences/results and /v2/reports field_breakdown.
  - Audience 12270: 3 pre_snapshotting_check FieldNotFoundException rows for Product_Attributes_Product_Group_categoryL.Purchase_Group_Category_FrozenVegetables_FrozenVegSteam4715_L12W.
  - Audience 3391: 1 pre_snapshotting_check FieldNotFoundException row for Product_Attributes_Product_Group_categoryL.Purchase_Group_Category_SeasonalContinuityPromotion_BackToSchoolSeasonalMerchandise7975_L52W.
  - Audience 9323: 3 pre_snapshotting_check FieldNotFoundException rows for Product_Attributes_Product_Group_categoryL.Purchase_Group_Category_SeasonalContinuityPromotion_SpringSummerSeasonalMerchandise7930_L52W.
  - Related but separate recent issue: 348 access-denied rows against gcp-abs-udco-res-prod-prj-99:dw_bizops_views_data.JAA_HH_DIV_PRIMARY_STORE; treat as permissions/table-access triage rather than missing-field schema remediation.
  - Snapshotting also showed Jun 18 timeout/lock-expiry errors for audiences 8938, 8940, 9964, 10431, 10432, 10434, 10612, 12064, and 12205; these are not current schema-field evidence.

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
