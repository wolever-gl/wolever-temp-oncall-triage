## Triage

This case tracks Albertsons client-sent export failure alerts where targeted
preflight can fetch Pizza history for the audience, but cannot identify a
matching export run after the PagerDuty alert. The shared blocker is
`missing_export_after_alert`.

This differs from the already-classified Albertsons BigQuery type mismatch,
Quervice HTTP-client missing-column, Quervice timeout, LiveRamp SFTP/retry, and
no-exports/progressing buckets.

Affected audiences found in the 2026-06-22/2026-06-23 singleton pass:
13072, 10680, 13149, 11017, 11948, 12865, 11014, 11280, 10679, 11996, 11572,
11596, 11488, and 11489.
