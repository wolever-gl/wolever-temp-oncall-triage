<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# growthloop_268 client-sent-export-failure

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `resolved`
Tags: `triage:needs_review`, `triage:customer_bq_permission`, `resolved:internal-test-account`
Incidents: [Q3PW7IHI1KCDWS](https://growthloop.pagerduty.com/incidents/Q3PW7IHI1KCDWS)
Alerts: 1

## Current Summary

Resolved: this is a GrowthLoop internal test account/audience, so it is not customer-impacting and does not need external follow-up.

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `growthloop_268`
- Audiences: `35826`
- Destinations: none
- State tuples: none
- Commands seen: `glcli --env prod bifrost pizza --audience-id 35826 --org-id 268`

Representative alerts:
- Q3PW7IHI1KCDWS/Q14N3EWLBRLVPF: 2026-05-14T17:15:33-07:00; growthloop_268; audience 35826. growthloop (default) - Audience 35826: Audience Export failure for 35826 sent to client.

## Export Checks

- Checks: 1.
- States: `blocked`=1
- Blockers seen: `snapshotting_error_requires_review`

Check evidence:
- chk_q3pw7ihi1kcdws_q14n3ewlbrlvpf (Q3PW7IHI1KCDWS/Q14N3EWLBRLVPF): state=`blocked`.
  Scope: env=prod; org=268; audience=35826.
  Command: `glcli --env prod bifrost pizza --audience-id 35826 --org-id 268`
  Blockers: `snapshotting_error_requires_review`
  Run 35826-google_adwords_21816-scheduled__2026-05-17T00:00:00+00:00: health=`blocked`; blockers=snapshotting_error_requires_review; created=2026-05-17T00:15:24.157494+00:00; snapshotting=snapshotting_error; export=no_batches; failed=0.

## Recent Evidence

- Closed because this is a GrowthLoop internal test account/audience, not a customer-impacting case. The underlying BigQuery permission failure remains non-retryable, but the on-call case does not need external follow-up.
  Source: `operator review`; kind: `triage`; captured: `2026-05-17T16:33:00.405Z`.
- Latest snapshotting run for audience 35826 fails in pre_snapshotting_check when Quervice attempts to create metadata table fs-cmd-center.flywheel_system.snapshotting_audience_35826_metadata. BigQuery returns 403 Access Denied: Permission bigquery.tables.create denied on dataset fs-cmd-center:flywheel_system. The structured glerror is category=authorization, owner=customer, retryable=false, warehouse_dataset=fs-cmd-center.flywheel_system, source_connection_id=flywheeldev_. This is not a retryable export problem.
  Source: `flywheel-prod-328213 snapshotting/quervice logs`; kind: `gcloud_logs`; captured: `2026-05-17T16:29:18.060Z`.
  Command: `gcloud logging read resource.type="k8s_container" AND timestamp>="2026-05-17T00:10:00Z" AND timestamp<="2026-05-17T00:20:00Z" AND jsonPayload.message:"35826" --project=flywheel-prod-328213`
- Pizza shows audience 35826 has no successful recent exports. Both Google Ads exports 21816 and 21820 fail daily; runs through 2026-05-12 report invalid_bigquery_request, and the latest runs from 2026-05-13 through 2026-05-17 fail in pre_snapshotting_check with BigQuery dataset access was denied. Latest affected run is 35826-google_adwords_21816-scheduled__2026-05-17T00:00:00+00:00 with snapshotting_error/no_batches.
  Source: `glcli bifrost pizza`; kind: `pizza`; captured: `2026-05-17T16:29:00.741Z`.
  Command: `PATH=/Users/wolever/.local/share/mise/installs/gcloud/562.0.0/bin:$PATH glcli --env prod bifrost pizza --audience-id 35826 --org-id 268 --format json`

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
