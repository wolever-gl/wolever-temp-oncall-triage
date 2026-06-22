# Investigation: pre-snapshotting failures on 2026-06-22

Captured: 2026-06-22T20:00:00Z

## Scope

- Group: `260622-albertsons_6-http-client-errors`
- Org: `albertsons_6`
- Audiences: `12270`, `3391`, `9323`
- PagerDuty alerts:
  - `Q054DZZ6GFL4FT/Q1QZ9JCZZESMEY` for audience `12270`, alert at `2026-06-22T17:48:07Z`
  - `Q337ZKYTMRUI8M/Q1MJO784QBCSKX` for audience `3391`, alert at `2026-06-22T17:39:30Z`
  - `Q18PJFCK0IYHAO/Q2TVHR26NUJHQC` for audience `9323`, alert at `2026-06-22T17:49:57Z`

## Commands run

```sh
gcloud auth list --filter=status:ACTIVE --format='value(account)'
bun run oncall-triage import-active-pd cases
bun run oncall-triage preflight cases --filter group.id=260622-albertsons_6-http-client-errors
glcli --env albertsons bifrost pizza --audience-id 12270 --org-id 6 --format=json
glcli --env albertsons bifrost pizza --audience-id 3391 --org-id 6 --format=json
glcli --env albertsons bifrost pizza --audience-id 9323 --org-id 6 --format=json
kubectl --context gke_gl-client-albertsons_us-west1-a_albertsons-production exec vortex-app-6f86f5fcfc-6fwqg -n vortex-app-24341005 -- sh -lc '... bin/rails runner ...'
```

## Audience links

Vortex impersonation links were generated with `ImpersonationHelper#build_audience_url_with_impersonation`.
All three audiences are in team `9` (`Albertsons Media`) and dataset group `82` (`Business DG`).

| Audience | Name | Impersonation link |
| --- | --- | --- |
| `12270` | `Perion_FrozenVegSteam_12` | https://albertsons.growthloop.com/v2/dataset_groups/82/audiences/12270?impersonate_user_id=29&impersonate_team_id=9 |
| `3391` | `AA_LR_RMN_FY24Personas_BackToSchool_L52` | https://albertsons.growthloop.com/v2/dataset_groups/82/audiences/3391?impersonate_user_id=29&impersonate_team_id=9 |
| `9323` | `AA_LR_RMN_FY23ExpPcg_BBQHost_L26W` | https://albertsons.growthloop.com/v2/dataset_groups/82/audiences/9323?impersonate_user_id=29&impersonate_team_id=9 |

## Pizza state

The targeted preflight still reports `missing_export_after_alert` for all three alerts. Pizza has one failed scheduled run for each audience before or at the alert window, and no newer export after the PagerDuty alert:

| Audience | Export run id | Created at UTC | Snapshot state | Export state | Surface failure reason |
| --- | --- | --- | --- | --- | --- |
| `12270` | `12270-live_ramp_activation_4063-scheduled__2026-06-22T00:00:00+00:00` | `2026-06-22T17:48:03Z` | `snapshotting_error` | `no_batches` | `Snapshotting failed while running pre_snapshotting_check: HTTP client error` |
| `3391` | `3391-live_ramp_activation_1321-scheduled__2026-06-22T00:00:00+00:00` | `2026-06-22T16:19:48Z` | `snapshotting_error` | `no_batches` | `Snapshotting failed while running pre_snapshotting_check: HTTP client error` |
| `9323` | `9323-live_ramp_activation_1824-scheduled__2026-06-22T00:00:00+00:00` | `2026-06-22T17:49:53Z` | `snapshotting_error` | `no_batches` | `Snapshotting failed while running pre_snapshotting_check: HTTP client error` |

## Scoped log findings

Cloud Logging project: `gl-client-albertsons`

Namespace: `snapshotting-30755505`

Trace IDs:

- `12270`: `6a39754d0000000037c3865acef62473`
- `3391`: `6a39609d0000000070544afd9949a26b`
- `9323`: `6a3975bb00000000d7dfd2ecb4dbd9dd`

Logs Explorer:
https://console.cloud.google.com/logs/query;query=timestamp%20%3E%3D%20%222026-06-22T16:00:00Z%22%20timestamp%20%3C%20%222026-06-22T18:15:00Z%22%20resource.type%3D%22k8s_container%22%20resource.labels.namespace_name%3D%22snapshotting-30755505%22%20%2528jsonPayload.%22dd.trace_id%22%3D%226a39754d0000000037c3865acef62473%22%20OR%20jsonPayload.%22dd.trace_id%22%3D%226a39609d0000000070544afd9949a26b%22%20OR%20jsonPayload.%22dd.trace_id%22%3D%226a3975bb00000000d7dfd2ecb4dbd9dd%22%2529;histogramBreakdownField=severity;duration=P1D?project=gl-client-albertsons

The `HTTP client error` text is a wrapper. The underlying Quervice failures are:

| Audience | Underlying failure |
| --- | --- |
| `12270` | Quervice validation error: field `Purchase_Group_Category_FrozenVegetables_FrozenVegSteam4715_L12W` not found in `Product_Attributes_Product_Group_categoryL`. |
| `3391` | Quervice `pre_snapshotting_check` repeatedly timed out after 600 seconds, then returned nginx `502 Bad Gateway`, and later returned a validation error: field `Purchase_Group_Category_SeasonalContinuityPromotion_BackToSchoolSeasonalMerchandise7975_L52W` not found in `Product_Attributes_Product_Group_categoryL`. |
| `9323` | Quervice validation error: field `Purchase_Group_Category_SeasonalContinuityPromotion_SpringSummerSeasonalMerchandise7930_L52W` not found in `Product_Attributes_Product_Group_categoryL`. |

## Conclusion

Do not treat this case as a generic HTTP-client issue. These are `pre_snapshotting_check` failures from Quervice over Albertsons `emgi_ds_audience_sg.Product_Attributes_Product_Group_categoryL`, primarily missing-column validation failures. Audience `3391` also had timeout/502 symptoms before the missing-column validation surfaced.

This looks closer to an Albertsons audience/schema drift or stale audience definition problem than a transport-level HTTP client outage.
