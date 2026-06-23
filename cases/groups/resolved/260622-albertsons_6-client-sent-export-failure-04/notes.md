## Triage

Initial preflight blocked this mixed singleton cohort as
`missing_export_after_alert`, but direct latest Pizza rows showed that blocker
was a matching limitation rather than a root-cause class.

The cohort was split by latest Pizza failure reason:

- BigQuery type mismatch: 13072, 10680, 11017, 11014, 11280, 10679, 11488,
  11489.
- HTTP-client pre_snapshotting_check: 13149, 11948, 11996, 11572, 11596.
- LiveRamp export_error: 12865.

After splitting, this source case only contains audience 12865 and should be
merged into the existing Albertsons LiveRamp export_error case.
