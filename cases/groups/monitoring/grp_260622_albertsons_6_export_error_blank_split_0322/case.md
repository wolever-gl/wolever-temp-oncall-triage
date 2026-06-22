<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# Albertsons audience 12808 SFTP permission denied

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `monitoring`
Tags: `triage:needs_review`, `monitoring:transient-sftp`
Incidents: [Q38ZCOXDOWS5O7](https://growthloop.pagerduty.com/incidents/Q38ZCOXDOWS5O7)
Alerts: 1

## Current Summary

Monitoring transient SFTP permission error for Albertsons audience 12808; recheck export/delivery status before resolving.

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `albertsons_6`
- Audiences: `12808`
- Destinations: none
- State tuples: none
- Commands seen: `glcli --env albertsons bifrost pizza --audience-id 12808 --org-id 6`

Representative alerts:
- Q38ZCOXDOWS5O7/Q2EUBM7M7E8UI5: 2026-06-19T02:03:39-07:00; albertsons_6; audience 12808. albertsons (Albertsons Media) - Audience 12808: Audience Export failure for 12808 sent to client.

## Export Checks

- Checks: 1.
- States: `blocked`=1
- Blockers seen: `missing_export_after_alert`

Check evidence:
- chk_q38zcoxdows5o7_q2eubm7m7e8ui5 (Q38ZCOXDOWS5O7/Q2EUBM7M7E8UI5): state=`blocked`.
  Scope: env=albertsons; org=6; audience=12808.
  Command: `glcli --env albertsons bifrost pizza --audience-id 12808 --org-id 6`
  Blockers: `missing_export_after_alert`

## Recent Evidence

- Alex reported the SFTP permission error appears transient. Move case from waiting to monitoring and periodically recheck export/delivery status.
  Source: `operator`; kind: `owner_handoff`; captured: `2026-06-22T20:19:34.942Z`.
  Findings:
  - No client action is currently required; monitor for recurrence or successful retry before resolving.
- Client-facing SFTP permission issue is being tracked in Slack; waiting on client/destination owner follow-up for SFTP write permissions.
  Source: `slack`; kind: `slack_thread`; captured: `2026-06-22T20:02:31.461Z`.
  Links: [slack_thread](https://flywheeltechnologies.slack.com/archives/C02J2RJ6VSL/p1782158485375299).
- PagerDuty raw alert Q2EUBM7M7E8UI5 includes audience_url impersonation link for Albertsons Media audience 12808. Related export-state alert Q0AHQNO4EY83ML names audience Tyson_WrightSausageInnov26_Tyson_L12W, endpoint app_liveramp_activation_41, checked export run 12808-live_ramp_activation_4615-scheduled__2026-06-19T00:00:00+00:00.
  Source: `pagerduty`; kind: `pagerduty_context`; captured: `2026-06-22T19:53:59.381Z`.
  Links: [impersonate](https://albertsons.growthloop.com/v2/dataset_groups/82/audiences/12808?impersonate_user_id=29&impersonate_team_id=9), [pagerduty_sent_to_client](https://growthloop.pagerduty.com/alerts/Q2EUBM7M7E8UI5), [pagerduty_export_state](https://growthloop.pagerduty.com/alerts/Q0AHQNO4EY83ML).
- SFTP/downstream delivery case after split: audience 12808, export_run_id 12808-live_ramp_activation_4615-scheduled__2026-06-19T00:00:00+00:00, endpoint app_liveramp_activation_41/live_ramp_activation_4615. Snapshotting and unload completed, then Bifrost repeatedly failed downstream delivery with PermissionError: [Errno 13] Permission denied while sending via SFTP. Logs also show LiveRamp invalid_grant credential validation on the same run, but the customer-facing support concern is the SFTP permission denial on the outbound delivery path.
  Source: `gcloud`; kind: `log_investigation`; captured: `2026-06-22T19:53:03.532Z`.
  Findings:
  - Support/customer-owner follow-up should ask Albertsons to check SFTP destination permissions for the configured path/user; do not resolve from later runs without confirming delivery or destination retry.

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
