<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# Albertsons LiveRamp API validation failures

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `open`
Tags: `triage:albertsons-client-sent`, `triage:export-error`, `triage:tag_grouped`
Incidents: [Q16ZT0NICO1CYX](https://growthloop.pagerduty.com/incidents/Q16ZT0NICO1CYX), [Q1L98NGVCG68W3](https://growthloop.pagerduty.com/incidents/Q1L98NGVCG68W3), [Q20IPIQEPYPPOW](https://growthloop.pagerduty.com/incidents/Q20IPIQEPYPPOW)
Alerts: 3

## Current Summary

Albertsons audiences 12468, 12495, and 12506 snapshot/unload successfully, then fail LiveRamp activation validation/API calls with timeouts or 500 responses.

## Alert Scope

- Alert facts: 3 imported, 3 linked to this group.
- Orgs: `albertsons_6`
- Audiences: `12468`, `12495`, `12506`
- Destinations: none
- State tuples: none
- Commands seen: `glcli --env albertsons bifrost pizza --audience-id 12468 --org-id 6`, `glcli --env albertsons bifrost pizza --audience-id 12495 --org-id 6`, `glcli --env albertsons bifrost pizza --audience-id 12506 --org-id 6`

Representative alerts:
- Q1L98NGVCG68W3/Q18PGRI36E5UBP: 2026-06-20T18:12:31-07:00; albertsons_6; audience 12506. albertsons (Albertsons Media) - Audience 12506: Audience Export failure for 12506 sent to client.
- Q16ZT0NICO1CYX/Q00IWAVA7CXV8K: 2026-06-20T18:14:52-07:00; albertsons_6; audience 12468. albertsons (Albertsons Media) - Audience 12468: Audience Export failure for 12468 sent to client.
- Q20IPIQEPYPPOW/Q12UU23AU1QACO: 2026-06-20T18:15:09-07:00; albertsons_6; audience 12495. albertsons (Albertsons Media) - Audience 12495: Audience Export failure for 12495 sent to client.

## Export Checks

- Checks: 3.
- States: `blocked`=3
- Blockers seen: `missing_export_after_alert`

Check evidence:
- chk_q16zt0nico1cyx_q00iwava7cxv8k (Q16ZT0NICO1CYX/Q00IWAVA7CXV8K): state=`blocked`.
  Scope: env=albertsons; org=6; audience=12468.
  Command: `glcli --env albertsons bifrost pizza --audience-id 12468 --org-id 6`
  Blockers: `missing_export_after_alert`
- chk_q1l98ngvcg68w3_q18pgri36e5ubp (Q1L98NGVCG68W3/Q18PGRI36E5UBP): state=`blocked`.
  Scope: env=albertsons; org=6; audience=12506.
  Command: `glcli --env albertsons bifrost pizza --audience-id 12506 --org-id 6`
  Blockers: `missing_export_after_alert`
- chk_q20ipiqepyppow_q12uu23au1qaco (Q20IPIQEPYPPOW/Q12UU23AU1QACO): state=`blocked`.
  Scope: env=albertsons; org=6; audience=12495.
  Command: `glcli --env albertsons bifrost pizza --audience-id 12495 --org-id 6`
  Blockers: `missing_export_after_alert`

## Recent Evidence

- LiveRamp API validation case after split: audiences 12468, 12495, and 12506 are delta LiveRamp activation exports that snapshot/unload successfully but fail in Bifrost destination validation/API calls. 12468: repeated api.liveramp.com read timeouts during validate_credentials. 12495: timeouts followed by 500 Internal Server Error from /activation/v2/destinations. 12506: 500 InternalServerError from /activation/v2/deliveries for integrationConnectionID=7250491 and segmentID=245265161.
  Source: `gcloud`; kind: `log_investigation`; captured: `2026-06-22T19:53:03.485Z`.
  Findings:
  - Treat this case as LiveRamp API/credential validation failures for audiences 12468, 12495, and 12506; SFTP/downstream delivery errors for audience 12808 were split into grp_260622_albertsons_6_export_error_blank_split_0322.
- Pizza rows exist just before the sent-to-client alerts; failures are delta LiveRamp activation export runs with blank Pizza failure_reason. 12468 and 12495 failed during pre-batch LiveRamp credential/destination validation after repeated api.liveramp.com timeouts/500s. 12506 failed validation against LiveRamp deliveries with 500 InternalServerError. 12808 endpoint 4615 unloaded deltas, then hit repeated downstream delivery failures including LiveRamp credential invalid_grant and SFTP permission denied retries. Generic preflight reports missing_export_after_alert because the export rows were created seconds before the PagerDuty sent-to-client alert timestamps.
  Source: `gcloud`; kind: `log_investigation`; captured: `2026-06-22T19:50:01.413Z`.
  Command: `gcloud logging read resource.type="k8s_container" jsonPayload.organization_id="albertsons_6" jsonPayload.internal_audience_id in {12468,12495,12506,12808} around export windows --project=gl-client-albertsons`
  Findings:
  - Root cause is downstream destination/API failure after successful snapshotting/unload, not missing snapshotting output. Keep open; remediation likely requires LiveRamp credential/API retry or destination-owner follow-up rather than rerunning snapshotting blindly.
- Albertsons export failures with latest Pizza state snapshotting_finished/export_error and blank failure reason.
  Source: `oncall-triage`; kind: `tag_grouping`; captured: `2026-06-22T19:24:10.174Z`.

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
