## 2026-06-22 read-only root-cause pass

Known failure: Quervice compiles saved UPC predicates as
`Product_Transactions_Table.upc_id IN UNNEST(%(upc_id_1:STRING)s)`, while
BigQuery now exposes `gcp-abs-emgi-prod-prj-01.emgi_ds_views.Product_Transactions_Table.upc_id`
as `NUMERIC`. BigQuery rejects that as `NUMERIC, ARRAY<STRING>`.

Timing:

- Last confirmed success: 2026-06-19 02:13:23 UTC. Audience 12991
  `LiquidIV_BigGame26_UPCCatEB_L26` ran a UPC string-array predicate against
  `Product_Transactions_Table.upc_id` and completed successfully.
- First confirmed failure: 2026-06-19 03:51:28 UTC. Audience 9373
  `Froneri_OutshineCoughCold25_UPCList_L26` ran the same predicate shape and
  failed with `No matching signature for operator IN UNNEST for argument types:
  NUMERIC, ARRAY<STRING>`.
- Break window: 2026-06-19 02:13:23 UTC to 2026-06-19 03:51:28 UTC.
- Vortex warehouse metadata version 3 for `upc_id` was written later, at
  2026-06-19 17:51:20 UTC, so the Vortex metadata refresh did not cause the
  first failures. It recorded the changed warehouse-visible type after the fact.

Read-only exclusions checked:

- No GrowthLoop service deploy in the break window explains this: Vortex was on
  release-20260611, Snapshotting on a 2026-05-18 image, and Quervice code
  history did not show a recent operator/type-coercion change that would turn
  this into `NUMERIC, ARRAY<STRING>`.
- Host-project Composer/k8s logs in the break window did not show a dbt,
  Composer, or `composer-user-workloads` job for dataset 217 or
  `Product_Transactions_Table`.
- GrowthLoop local repo searches did not find ownership/definition of
  `emgi_ds_views.Product_Transactions_Table`; only normal usage/config references
  and generic UPC tests were found.
- Quervice logs did not show a direct cache miss/reflection for
  `emgi_ds_views.Product_Transactions_Table` in the searched window, nor a store
  cache invalidation for `gcp-abs-emgi-prod-prj-01_collective_prod_61` in the
  break window. The observed Quervice activity was normal audience/snapshotting
  traffic.
- Slack support thread records the same suspicion that this may relate to recent
  Albertsons schema changes, but does not identify a specific actor/job.

Current conclusion: the strongest supported cause is an upstream/customer-managed
BigQuery schema/view/table definition change for
`gcp-abs-emgi-prod-prj-01.emgi_ds_views.Product_Transactions_Table.upc_id`
between 2026-06-19 02:13:23 and 03:51:28 UTC. The exact BigQuery actor/job is
not visible from the host-project logs available here. Direct data-project
BigQuery metadata/audit access is blocked by PermissionDenied/VPC Service
Controls in the current read-only path.
