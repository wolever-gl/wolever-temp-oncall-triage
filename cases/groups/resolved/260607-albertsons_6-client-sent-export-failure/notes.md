# Investigation notes

2026-06-22:

- Refreshed active PagerDuty incidents: no new active incidents imported; this case remains incident Q1E4EUPF9HDZNA.
- Ran export preflight for this group. Result: 20 checks evaluated, 9 `healthy_closed`, 11 `blocked` with `missing_export_after_alert`.
- Blocked audiences are `12970`, `12971`, `12973`, `12975`, `12976`, `12977`, `12978`, `12979`, `12980`, `12981`, and `12982`. Pizza shows no export after the June 3-5 PagerDuty alerts for these audiences. Direct spot checks:
  - `12970`: only `12970-live_ramp_activation_4860-webapp__2026-05-22T19:40:29+00:00`, created 2026-05-22 19:42:02 UTC, `export_finished`, 14,310,428 rows, 0 failures.
  - `12977`: only May 22 rows; its own `12977-live_ramp_activation_4867-webapp__2026-05-22T19:50:10+00:00` is `no_batches`, and Pizza also returns the related `12970` row.
  - Healthy comparison `12944`: later scheduled exports exist through `12944-live_ramp_activation_4757-scheduled__2026-06-17T00:00:00+00:00`.
- GCP logs in `gl-client-albertsons` show the blocked audience cluster is tied to old May 22 LiveRamp activation webapp runs. Bifrost kept retrying batch tracker tasks with `Status.UNPROCESSED`, then hit the 900-retry reconciliation path and later 1000+ retry task failures.
- Representative log evidence for `12979`: export run `12979-live_ramp_activation_4869-webapp__2026-05-22T20:20:59+00:00` repeatedly logged `Current execution info for batch: False Counter({<Status.UNPROCESSED: 1>: 1})`; at 2026-06-03T18:33:44Z one batch hit `900/1000` retries and reconciled; at 2026-06-03T18:36:13Z one segment transitioned `UNPROCESSED` to `FAILED` with failed count 131,189. Later logs show LiveRamp segment-status API timeouts/HTTP 500s and `Batch Tracker Task failed` at retry 1000+ on 2026-06-04.

Working theory: this is not a new export failure on June 3-5. It is a delayed client-notification wave from May 22 LiveRamp webapp activations whose batch tracker tasks were stuck on `UNPROCESSED` segments for many retries. Some unrelated audiences in the same incident have since had healthy scheduled exports and are closed by preflight, but the 11 blocked audiences have no later export run to prove recovery.
