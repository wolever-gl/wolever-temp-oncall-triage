<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# 451 client-sent-export-failure

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `resolved`
Tags: `triage:needs_review`, `resolved:merged`
Incidents: [Q31XLLHUNNMAK9](https://growthloop.pagerduty.com/incidents/Q31XLLHUNNMAK9)
Alerts: 1

## Current Summary

Merged into 260514-451-campaign-manager-360-export-error: SignalRoute 995 client-sent alert is another ASU CM360 endpoint app_campaign_manager_360_2130 failure in the same client/config family as the waiting SignalRoute 981 CM360 case; latest logs show StandardCM360Service NOT_FOUND/INVALID_ARGUMENT for the same Floodlight config/activity family, so track remediation with the existing ASU CM360 waiting case.

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `451`
- Audiences: `995`
- Destinations: none
- State tuples: none
- Commands seen: `glcli --env prod bifrost pizza --audience-id 995 --org-id 451`

Representative alerts:
- Q31XLLHUNNMAK9/Q14QGYRQTYNKJV: 2026-05-15T16:32:16-07:00; 451; audience 995. ASU Enterprise Partners (General - ASU Data) - SignalRoute 995: SignalRoute Export failure for 995 sent to client.

## Export Checks

- Checks: 1.
- States: `blocked`=1
- Blockers seen: `missing_export_after_alert`

Check evidence:
- chk_q31xllhunnmak9_q14qgyrqtynkjv (Q31XLLHUNNMAK9/Q14QGYRQTYNKJV): state=`blocked`.
  Scope: env=prod; org=451; audience=995.
  Command: `glcli --env prod bifrost pizza --audience-id 995 --org-id 451`
  Blockers: `missing_export_after_alert`

## Recent Evidence

- Investigation found this is a client-sent counterpart of the existing ASU CM360 waiting case: SignalRoute 995 uses endpoint app_campaign_manager_360_2130 and fails in StandardCM360Service with the same Floodlight configuration/activity family as SignalRoute 981. Latest run has all 67,393 rows failed; manual tracking should continue in 260514-451-campaign-manager-360-export-error.
  Source: `flywheel-prod-328213 bifrost logs`; kind: `gcloud_logs`; captured: `2026-05-17T16:23:37.783Z`.
  Command: `gcloud logging read resource.type="k8s_container" AND resource.labels.namespace_name="bifrost" AND jsonPayload.batch_id="4368a25b-0d83-4fbb-8d1a-ca13814416bc" --project=flywheel-prod-328213`

## Next Action

Follow target group 260514-451-campaign-manager-360-export-error.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
