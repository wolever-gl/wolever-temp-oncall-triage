<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# albertsons_6 client-sent-export-failure

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `resolved`
Tags: `triage:needs_review`, `resolved:merged`
Incidents: [Q3AEWETRMJ9LHR](https://growthloop.pagerduty.com/incidents/Q3AEWETRMJ9LHR)
Alerts: 1

## Current Summary

Merged into 260622-albertsons_6-live-ramp-export-error: After splitting the mixed client-sent singleton cohort, the remaining audience 12865 alert has latest Pizza row snapshotting_finished/export_error for 2026-06-23, matching the existing Albertsons LiveRamp export_error case.

## Notes

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

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `albertsons_6`
- Audiences: `12865`
- Destinations: none
- State tuples: none
- Commands seen: `glcli --env albertsons bifrost pizza --audience-id 12865 --org-id 6`

Representative alerts:
- Q3AEWETRMJ9LHR/Q38LA4RYLYTPNT: 2026-06-22T19:33:08-07:00; albertsons_6; audience 12865. albertsons (Albertsons Media) - Audience 12865: Audience Export failure for 12865 sent to client.

## Export Checks

- Checks: 1.
- States: `blocked`=1
- Blockers seen: `missing_export_after_alert`

Check evidence:
- chk_q3aewetrmj9lhr_q38la4rylytpnt (Q3AEWETRMJ9LHR/Q38LA4RYLYTPNT): state=`blocked`.
  Scope: env=albertsons; org=6; audience=12865.
  Command: `glcli --env albertsons bifrost pizza --audience-id 12865 --org-id 6`
  Blockers: `missing_export_after_alert`

## Recent Evidence

- Follow-up direct Pizza sampling supersedes the initial missing_export_after_alert grouping: the latest 2026-06-23 rows for these 14 audiences classify into existing cases: BigQuery type mismatch for audiences 13072,10680,11017,11014,11280,10679,11488,11489; HTTP-client pre_snapshotting_check for 13149,11948,11996,11572,11596; LiveRamp export_error for 12865.
  Source: `glcli pizza`; kind: `export_check`; captured: `2026-06-23T16:04:51.001Z`.
  Command: `glcli --env albertsons bifrost pizza --audience-id <audience> --org-id 6 --limit 1 --format json`
  Findings:
  - No standalone new class remains after direct latest-row sampling; split this mixed anchor into existing Albertsons cases by failure reason.
- Targeted preflight across the remaining Albertsons client-sent singleton alerts found a consistent blocker: Pizza rows exist for each audience, but no matching export run after the PagerDuty alert, so checks are blocked as missing_export_after_alert. This does not match the existing BigQuery type mismatch, Quervice HTTP-client missing-column, Quervice timeout, LiveRamp SFTP/retry, or no-exports/progressing cases. Affected audiences: 13072, 10680, 13149, 11017, 11948, 12865, 11014, 11280, 10679, 11996, 11572, 11596, 11488, 11489.
  Source: `oncall-triage preflight`; kind: `export_check`; captured: `2026-06-23T15:42:47.546Z`.
  Command: `bun run oncall-triage preflight cases --filter group.id=<each remaining Albertsons client-sent singleton>`
  Findings:
  - New class: client-sent export failure where preflight cannot find an export run after the alert despite available Pizza history.

## Next Action

Follow target group 260622-albertsons_6-live-ramp-export-error.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
