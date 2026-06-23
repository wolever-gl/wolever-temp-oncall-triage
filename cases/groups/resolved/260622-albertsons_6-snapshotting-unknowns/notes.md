# Deeper snapshotting evidence - 2026-06-22

Scope checked: Albertsons org 6 audiences `10107`, `10581`, `10935`, `11375`, `11379`, `12477`, `12499`, `12591`, `12606`, `3283`.

Sources used:
- Pizza current rows via `glcli --env albertsons bifrost pizza --audience-id <audience_id> --org-id 6 --format=json`.
- Cloud Logging in project `gl-client-albertsons`, namespace `snapshotting-30755505`.
- Main log query shape:
  `gcloud logging read 'resource.type="k8s_container" resource.labels.namespace_name="snapshotting-30755505" timestamp >= "<window-start>" timestamp < "<window-end>" severity>=ERROR (jsonPayload.internal_audience_id=<audience_id> OR jsonPayload.snapshot_target_id=<audience_id> OR "<live_ramp_activation_id>")' --limit=40 --order=asc --format=json --project=gl-client-albertsons`
- For final manager entries, reran by `insertId` in the same project/time window and inspected `jsonPayload.message` for the embedded Quervice response.

## Per-audience findings

- `10107`
  - Facts: Pizza row at `2026-06-20 03:51:26 UTC`, export run `10107-live_ramp_activation_4991-scheduled__2026-06-20T00:00:00+00:00`, `snapshotting_error` / `no_batches`, reason `Snapshotting failed while running pre_snapshotting_check: unknown error`.
  - Log evidence: `snapshotting-30755505`, pod `snapshotting-54fbf7766c-5trls`, request `52af54a3-8c8b-4882-91d9-99af5c451132`, snapshot run `b1c71151-53c3-4302-920a-fd463c29a7a6`. Quervice timeout lines at `2026-06-20T04:01:28Z`, `04:14:01Z`, `04:27:36Z`; final manager entry `2026-06-20T04:39:36Z` insert `debiwp9wypv0o2uy` says Quervice returned `503 Service Temporarily Unavailable`; Bifrost message stayed `pre_snapshotting_check: unknown error`.
  - Inference: pre-snapshotting failed because Quervice was unavailable/returning 503 after repeated long-running precheck timeouts.

- `10581`
  - Facts: Pizza row at `2026-06-22 15:08:02 UTC`, export run `10581-live_ramp_activation_4659-scheduled__2026-06-22T00:00:00+00:00`, `snapshotting_error` / `no_batches`, blank failure reason.
  - Log evidence: `snapshotting-30755505`, pod `snapshotting-54fbf7766c-rwqst`, request `8f5940db-3592-4db2-b9f0-6cb19bd6a8ad`, snapshot run `f87f89ad-30d0-44c0-92b1-856ef0fdc90f`. Quervice precheck timeouts at `2026-06-22T15:26:53Z`, `15:37:00Z`, `15:47:11Z`; `snapshotting.export_lock` at `15:47:24Z` insert `a6ecegynrwfshjdy` says the lock key had `727s` remaining but was no longer owned; final manager insert `r1p1v7hao3b8cn1s` records `LockExpired`.
  - Inference: the blank Pizza reason hides a pre-snapshotting lock ownership loss after repeated Quervice precheck timeouts.

- `10935`
  - Facts: Pizza row at `2026-06-20 03:00:16 UTC`, export run `10935-live_ramp_activation_4988-scheduled__2026-06-20T00:00:00+00:00`, `snapshotting_error` / `no_batches`, reason `Snapshotting failed while running pre_snapshotting_check: unknown error`.
  - Log evidence: `snapshotting-30755505`, pod `snapshotting-54fbf7766c-5trls`, request `b436d488-20bd-4cf5-8ff5-90fe66840210`, snapshot run `7f1d5ec0-b95f-49eb-97c1-a7debefbf4fc`. Repeated `pre_snapshotting_check` Quervice timeouts from `2026-06-20T03:10:18Z` through `04:40:58Z`; final manager `2026-06-20T04:46:22Z` insert `mqsjlnyn3m03758t` says Quervice returned `503 Service Temporarily Unavailable`; Bifrost message stayed `pre_snapshotting_check: unknown error`.
  - Inference: pre-snapshotting failed because Quervice was unavailable/returning 503 after repeated precheck timeouts.

- `11375`
  - Facts: Pizza row at `2026-06-22 04:53:11 UTC`, export run `11375-live_ramp_activation_3407-scheduled__2026-06-22T00:00:00+00:00`, `snapshotting_error` / `no_batches`, reason `Snapshotting failed while running snapshot_history_write_up: unknown error`.
  - Log evidence: `snapshotting-30755505`, pod `snapshotting-54fbf7766c-5trls`, request `3da025f6-2b78-4ffc-9e2b-8cf7232ad01d`, snapshot run `0fdf1ac7-a883-43cb-8cf3-16647c9a2471`. `snapshot_history_write_up` Quervice timeouts at `2026-06-22T05:03:19Z` and `05:13:23Z`; final manager `2026-06-22T05:32:42Z` insert `gp7cm5oxegmjgpdh` says Quervice returned `503 Service Temporarily Unavailable`; Bifrost message stayed `snapshot_history_write_up: unknown error`.
  - Inference: snapshot history write-up failed because Quervice was unavailable/returning 503.

- `11379`
  - Facts: Pizza row at `2026-06-22 04:52:23 UTC`, export run `11379-live_ramp_activation_3409-scheduled__2026-06-22T00:00:00+00:00`, `snapshotting_error` / `no_batches`, reason `Snapshotting failed while running snapshot_history_delete_old_rows: unknown error`.
  - Log evidence: `snapshotting-30755505`, pod `snapshotting-54fbf7766c-5trls`, request `814859ae-ed64-4e1c-8555-aa966081b4bf`, snapshot run `b093026c-6624-4e4a-9d4b-248db303a03a`. `snapshot_history_delete_old_rows` Quervice timeouts at `2026-06-22T05:03:26Z` and `05:13:30Z`; final manager `2026-06-22T05:21:09Z` insert `3mv0wfuorlgq1wk9` says Quervice returned `503 Service Temporarily Unavailable`; Bifrost message stayed `snapshot_history_delete_old_rows: unknown error`.
  - Inference: snapshot history cleanup failed because Quervice was unavailable/returning 503.

- `12477`
  - Facts: Pizza row at `2026-06-21 05:10:19 UTC`, export run `12477-live_ramp_activation_4251-scheduled__2026-06-21T00:00:00+00:00`, `snapshotting_error` / `no_batches`, reason `Snapshotting failed while running base_table_not_empty: unknown error`.
  - Log evidence: `snapshotting-30755505`, pod `snapshotting-54fbf7766c-5trls`, request `f3b346f7-7f36-49f1-94d9-d9c786805d2c`, snapshot run `8fe211b1-bc2a-4eb1-ab93-48a67e59c82d`. `base_table_not_empty` Quervice timeouts from `2026-06-21T05:20:19Z` through `06:13:14Z`; final manager `2026-06-21T06:16:43Z` insert `feqa2t5rgwmjp7fj` says Quervice returned `503 Service Temporarily Unavailable`; Bifrost message stayed `base_table_not_empty: unknown error`.
  - Inference: base-table validation failed because Quervice was unavailable/returning 503 after repeated timeouts.

- `12499`
  - Facts: Pizza row at `2026-06-21 02:34:57 UTC`, export run `12499-live_ramp_activation_4273-scheduled__2026-06-21T00:00:00+00:00`, `snapshotting_error` / `no_batches`, blank failure reason.
  - Log evidence: `snapshotting-30755505`, pod `snapshotting-54fbf7766c-rwqst`, request `18403c3b-bd65-4f57-8b67-70c63317e8d6`, snapshot run `cc515558-bc9b-40b3-9f75-3b21b898584f`. `pre_snapshotting_check` Quervice timeouts at `2026-06-21T02:44:59Z`, `02:57:02Z`, `03:11:36Z`, `03:23:53Z`; final manager insert `8fnogse7fbfab527` records `QuerviceClientError` with `Quervice request timed out after 600 seconds for report 'pre_snapshotting_check'`.
  - Inference: blank Pizza reason hides a pre-snapshotting Quervice timeout.

- `12591`
  - Facts: Pizza row at `2026-06-22 05:43:23 UTC`, export run `12591-live_ramp_activation_4362-scheduled__2026-06-22T00:00:00+00:00`, `snapshotting_error` / `no_batches`, reason `Snapshotting failed while running pre_snapshotting_check: unknown error`.
  - Log evidence: `snapshotting-30755505`, pod `snapshotting-54fbf7766c-5trls`, request `b7d8f69b-342d-40c7-823d-f6e23703fcd3`, snapshot run `493dbf0a-19f9-4516-a6cb-7c58763cefc4`. `pre_snapshotting_check` Quervice timeouts from `2026-06-22T05:54:15Z` through `06:30:00Z`; final manager `2026-06-22T06:45:43Z` insert `2jrgtbibf58535ch` says Quervice returned `503 Service Temporarily Unavailable`; Bifrost message stayed `pre_snapshotting_check: unknown error`.
  - Inference: pre-snapshotting failed because Quervice was unavailable/returning 503 after repeated precheck timeouts.

- `12606`
  - Facts: Pizza row at `2026-06-22 10:59:12 UTC`, export run `12606-live_ramp_activation_4377-scheduled__2026-06-22T00:00:00+00:00`, `snapshotting_error` / `no_batches`, blank failure reason.
  - Log evidence: `snapshotting-30755505`, pod `snapshotting-54fbf7766c-5trls`, request `3cc178d5-f8da-41c2-b26c-e37488a5579d`, snapshot run `7c4fb54b-18e5-4448-8afb-12e1b5bdb8e6`. `pre_snapshotting_check` Quervice timeouts at `2026-06-22T11:09:14Z`, `11:21:26Z`, `11:31:28Z`; `snapshotting.export_lock` at `11:40:47Z` insert `5vkvbkn5wnl1ziee` says a low-TTL lock existed but was not owned; final manager insert `rqxajve2wqmz0ngj` records `LockExpired`.
  - Inference: blank Pizza reason hides lock expiry in `pre_snapshotting_check`, likely following/caused by the long Quervice precheck timeout behavior.

- `3283`
  - Facts: Pizza row at `2026-06-22 12:33:50 UTC`, export run `3283-live_ramp_activation_1278-scheduled__2026-06-22T00:00:00+00:00`, `snapshotting_error` / `no_batches`, blank failure reason.
  - Log evidence: `snapshotting-30755505` has two same-audience/same-run attempts. First: pod `snapshotting-54fbf7766c-5trls`, request `bdb5b5cd-911f-4c8d-bfa3-64c9d8da7f6d`, snapshot run `f4367b60-a617-46eb-a6c8-99a001b79580`, precheck timeouts at `2026-06-22T12:43:52Z`, `12:57:54Z`, `13:14:17Z`, then lock error `13:23:44Z` insert `xts1ff17ki5n8e66` and manager insert `2r3rcxgam9pb27tl`. Second/latest: pod `snapshotting-54fbf7766c-rwqst`, request `25ac0627-bca3-406f-aad1-c9632e694606`, snapshot run `94b4c365-f546-49ef-b348-36b63f28f461`, repeated precheck timeouts through `2026-06-22T14:55:00Z`; final manager insert `o7yaifjo8cc0a1ib` records `QuerviceClientError` with `Quervice request timed out after 600 seconds for report 'pre_snapshotting_check'`.
  - Inference: blank Pizza reason hides pre-snapshotting failure. There were two same-scope attempts; the latest concrete cause is a Quervice precheck timeout, with an earlier same-run lock-expiry failure also present.

## Cross-case pattern

Most unknown/blank snapshotting failures are not audience-specific data mismatches. The logs point to Quervice availability/latency while snapshotting runs validation or history maintenance reports. The concrete failure modes are:

- Quervice `503 Service Temporarily Unavailable` surfaced to snapshotting as `unknown error`: `10107`, `10935`, `11375`, `11379`, `12477`, `12591`.
- Quervice precheck timeout surfaced as blank/unknown: `12499`, latest `3283` attempt.
- Snapshotting lock ownership loss after long precheck behavior: `10581`, `12606`, and an earlier same-scope `3283` attempt.
