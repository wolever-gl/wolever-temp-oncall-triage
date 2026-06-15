<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# trumanshow_336 adobe-experience-platform export-error

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `waiting`
Tags: `triage:needs_review`, `waiting:client_aep_schema_mismatch`
Incidents: [Q12A5QFIM3F9LN](https://growthloop.pagerduty.com/incidents/Q12A5QFIM3F9LN)
Alerts: 1

## Current Summary

Waiting on Adobe/schema configuration fix: Truman Show audience 36199 AEP export fails because Adobe returns XDM-1413-400 Merge Schema Error for customer_id type conflict (string vs integer). Retry will not help until the schema/type mismatch is resolved.

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `trumanshow_336`
- Audiences: `36199`
- Destinations: `adobe_experience_platform`
- State tuples: `snapshotting_finished/export_error`
- Commands seen: `glcli --env prod bifrost pizza --audience-id 36199 --org-id 336`

Representative alerts:
- Q12A5QFIM3F9LN/Q05NTDX4NQ1HYU: 2026-05-14T08:08:31-07:00; trumanshow_336; audience 36199; adobe_experience_platform; snapshotting_finished/export_error. trumanshow (VZN): Exports for audience 36199 failed with states: <(snapshotting_finished,export_error)>
  Runs: `36199-adobe_experience_platform_22089-webapp__2026-05-08T13:13:49+00:00`

## Export Checks

- Checks: 1.
- States: `open`=1
- Blockers seen: `evidence_unavailable`

Check evidence:
- chk_q12a5qfim3f9ln_q05ntdx4nq1hyu (Q12A5QFIM3F9LN/Q05NTDX4NQ1HYU): state=`open`, next_check_at=`2026-06-15T16:45:07.930Z`.
  Scope: env=prod; org=336; audience=36199; endpoint=app_adobe_experience_platform_2175; destination=adobe_experience_platform.
  Checked runs: `36199-adobe_experience_platform_22089-webapp__2026-05-08T13:13:49+00:00`, `36199-adobe_experience_platform_22089-webapp__2026-05-08T13:13:49+00:00`
  Command: `glcli --env prod bifrost pizza --audience-id 36199 --org-id 336`
  Blockers: `evidence_unavailable`

## Recent Evidence

- Pizza shows the Adobe Experience Platform destination for audience 36199 has no later successful AEP run. The affected run 36199-adobe_experience_platform_22089-webapp__2026-05-08T13:13:49+00:00 appears as export_error at 2026-05-08 13:14:44 UTC and again at 2026-05-11 17:09:28 UTC; a separate personalization_api destination succeeded but does not recover the AEP export.
  Source: `glcli bifrost pizza`; kind: `pizza`; captured: `2026-05-17T16:24:26.151Z`.
  Command: `PATH=/Users/wolever/.local/share/mise/installs/gcloud/562.0.0/bin:$PATH glcli --env prod bifrost pizza --audience-id 36199 --org-id 336 --format json`
- Bifrost logs for batch f0b1f8ef-5bd5-41a3-a0a0-9dea108f7f0b show Adobe Experience Platform returned XDM-1413-400 Merge Schema Error. Adobe says path /_exchangesandboxcharlie/properties/gl/properties/customer_id/type is already defined in the schema using a different type; observed conflicting types are string and integer. This is an Adobe/schema configuration incompatibility and retrying the same payload is expected to fail.
  Source: `flywheel-prod-328213 bifrost logs`; kind: `gcloud_logs`; captured: `2026-05-17T16:24:26.151Z`.
  Command: `gcloud logging read resource.type="k8s_container" AND resource.labels.namespace_name="bifrost" AND timestamp>="2026-05-11T17:05:00Z" AND timestamp<="2026-05-11T17:15:00Z" AND jsonPayload.internal_audience_id="36199" --project=flywheel-prod-328213`

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
