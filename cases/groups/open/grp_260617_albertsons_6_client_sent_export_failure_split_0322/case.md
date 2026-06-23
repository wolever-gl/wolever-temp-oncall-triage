<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# albertsons_6 client-sent-export-failure split

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `open`
Tags: `triage:needs_review`
Incidents: [Q1NCQUL11TZXWI](https://growthloop.pagerduty.com/incidents/Q1NCQUL11TZXWI)
Alerts: 1

## Current Summary

Audience 13176 has a distinct run family and failure mode: a 2026-06-11 webapp delta LiveRamp activation run with destination validation/SFTP errors, while the remaining six alerts share stale 2026-06-05 scheduled LiveRamp activation runs stuck in Batch Tracker retries until retry 1000.

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `albertsons_6`
- Audiences: `13176`
- Destinations: none
- State tuples: none
- Commands seen: `glcli --env albertsons bifrost pizza --audience-id 13176 --org-id 6`

Representative alerts:
- Q1NCQUL11TZXWI/Q2PMGVTPJ7WKIH: 2026-06-16T12:39:00-07:00; albertsons_6; audience 13176. albertsons (Albertsons Media) - Audience 13176: Audience Export failure for 13176 sent to client.

## Export Checks

- Checks: 1.
- States: `blocked`=1
- Blockers seen: `missing_export_after_alert`

Check evidence:
- chk_q1ncqul11tzxwi_q2pmgvtpj7wkih (Q1NCQUL11TZXWI/Q2PMGVTPJ7WKIH): state=`blocked`.
  Scope: env=albertsons; org=6; audience=13176.
  Command: `glcli --env albertsons bifrost pizza --audience-id 13176 --org-id 6`
  Blockers: `missing_export_after_alert`

## Recent Evidence

- Audience 13176 is a distinct LiveRamp activation webapp delta export failure: Pizza shows a single 2026-06-11 run with all 2,551,734 rows failed, and scoped logs show destination validation plus SFTP permission errors.
  Source: `Pizza + gcloud logs + runbook`; kind: `log_investigation`; captured: `2026-06-22T22:32:52.178Z`.
  Artifact: runbook: `runbooks/snapshotting-delta-recovery.md`
  Command: `glcli --env albertsons bifrost pizza --audience-id 13176 --org-id 6 --limit 5 --format json`
  Command: `gcloud logging read scoped to gl-client-albertsons bifrost logs for export_run_id=13176-live_ramp_activation_5018-webapp__2026-06-11T18:33:56+00:00, 2026-06-11..2026-06-12`
  Findings:
  - Pizza latest row: 2026-06-11 18:35:55 UTC, export_run_id 13176-live_ramp_activation_5018-webapp__2026-06-11T18:33:56+00:00, snapshotting_finished/export_error, total_rows=2551734, adds=0, removes=0, failures=2551734, rejects=0.
  - Scoped logs include export_type=deltas for this run, so snapshotting-delta-recovery guardrails apply: do not resolve only because a later same-scope run may succeed unless delta/unload stage evidence proves no stranded files.
  - Scoped ERROR logs show repeated Destination Send Task SFTP PermissionError [Errno 13] Permission denied and Destination Validation failures against LiveRamp activation segment-configs with HTTP 400 BadRequest: DistributionManager integration type is DATA_STORE; cannot add Onboarding segments.
  - This does not share the remaining case root cause: it is not a stale 2026-06-05 scheduled run stuck to retry 1000; it is a 2026-06-11 webapp delta destination/delivery failure requiring destination-specific or delta-recovery review.

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
