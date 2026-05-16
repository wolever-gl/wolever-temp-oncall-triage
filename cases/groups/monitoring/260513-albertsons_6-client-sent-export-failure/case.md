<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# albertsons_6 client-sent-export-failure

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `monitoring`
Tags: `triage:needs_review`, `monitoring:export-processing`
Incidents: [Q2EJWG22CER0LA](https://growthloop.pagerduty.com/incidents/Q2EJWG22CER0LA)
Alerts: 2

## Current Summary

Auto-monitored from Pizza export checks: 2 alert-scoped export check(s) are still processing and 0 are already healthy.

## Alert Scope

- Alert facts: 2 imported, 2 linked to this group.
- Orgs: `albertsons_6`
- Audiences: `11688`, `11820`
- Destinations: none
- State tuples: none
- Commands seen: `glcli --env albertsons bifrost pizza --audience-id 11688 --org-id 6`, `glcli --env albertsons bifrost pizza --audience-id 11820 --org-id 6`

Representative alerts:
- Q2EJWG22CER0LA/Q2S03JXYQD34WM: 2026-05-12T10:08:23-07:00; albertsons_6; audience 11820. albertsons (Albertsons Media) - Audience 11820: Audience Export failure for 11820 sent to client.
- Q2EJWG22CER0LA/Q311OEQ3IZ6GPG: 2026-05-12T12:10:10-07:00; albertsons_6; audience 11688. albertsons (Albertsons Media) - Audience 11688: Audience Export failure for 11688 sent to client.

## Export Checks

- Checks: 2.
- States: `monitoring`=2

Check evidence:
- chk_q2ejwg22cer0la_q2s03jxyqd34wm (Q2EJWG22CER0LA/Q2S03JXYQD34WM): state=`monitoring`, next_check_at=`2026-05-16T23:25:55.908Z`.
  Scope: env=albertsons; org=6; audience=11820.
  Command: `glcli --env albertsons bifrost pizza --audience-id 11820 --org-id 6`
  Run 11820-live_ramp_activation_3695-scheduled__2026-05-15T00:00:00+00:00: health=`monitoring`; created=2026-05-15T04:29:17.918441+00:00; snapshotting=snapshotting_finished; export=export_processing; failed=0.
- chk_q2ejwg22cer0la_q311oeq3iz6gpg (Q2EJWG22CER0LA/Q311OEQ3IZ6GPG): state=`monitoring`, next_check_at=`2026-05-16T23:25:55.908Z`.
  Scope: env=albertsons; org=6; audience=11688.
  Command: `glcli --env albertsons bifrost pizza --audience-id 11688 --org-id 6`
  Run 11688-live_ramp_activation_3691-scheduled__2026-05-15T00:00:00+00:00: health=`monitoring`; created=2026-05-15T04:26:31.490889+00:00; snapshotting=snapshotting_finished; export=export_processing; failed=0.

## Recent Evidence

- Auto-monitored from Pizza export checks: 2 alert-scoped export check(s) are still processing and 0 are already healthy.
  Source: `check-exports`; kind: `export_check`; captured: `2026-05-16T23:11:03.785Z`.
- Monitoring check-in: audiences 11688 and 11820 remain snapshotting_finished/export_processing with zero failures on latest LiveRamp runs from 2026-05-15. Keep monitoring.
  Source: `monitoring preflight/manual Pizza`; kind: `pizza`; captured: `2026-05-16T23:03:08.001Z`.
  Command: `bun run oncall-triage preflight cases --state monitoring; glcli --env albertsons bifrost pizza --audience-id 11688 --org-id 6; glcli --env albertsons bifrost pizza --audience-id 11820 --org-id 6`
- Live Pizza shows audiences 11688 and 11820 have latest LiveRamp runs in export_processing with snapshotting_finished and zero failures; monitor for completion.
  Source: `glcli bifrost pizza`; kind: `pizza`; captured: `2026-05-16T21:42:16.068Z`.
  Command: `glcli --env albertsons bifrost pizza --audience-id 11688 --org-id 6 --format json`
  Command: `glcli --env albertsons bifrost pizza --audience-id 11820 --org-id 6 --format json`

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
