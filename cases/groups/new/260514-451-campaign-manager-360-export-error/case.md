<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# 451 campaign-manager-360 export-error

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `new`
Tags: `triage:needs_review`
Incidents: [Q3XQABQFPPVNT5](https://growthloop.pagerduty.com/incidents/Q3XQABQFPPVNT5)
Alerts: 2

## Current Summary

ASU Enterprise Partners (General - ASU Data): Exports for signal 984 failed with states: <(snapshotting_finished,export_error)>

## Alert Scope

- Alert facts: 2 imported, 2 linked to this group.
- Orgs: `451`
- Audiences: `981`, `984`
- Destinations: `campaign_manager_360_object`
- State tuples: `snapshotting_finished/export_error`
- Commands seen: `glcli --env prod bifrost pizza --audience-id 981 --org-id 451`, `glcli --env prod bifrost pizza --audience-id 984 --org-id 451`

Representative alerts:
- Q3XQABQFPPVNT5/Q01J962O90JJ1O: 2026-05-14T08:15:17-07:00; 451; audience 981; campaign_manager_360_object; snapshotting_finished/export_error. ASU Enterprise Partners (General - ASU Data): Exports for signal 981 failed with states: <(snapshotting_finished,export_error)>
  Runs: `981-campaign_manager_360_object_981-scheduled__2026-05-13T00:00:00+00:00`
- Q3XQABQFPPVNT5/Q003VALSPIPFI1: 2026-05-14T08:15:19-07:00; 451; audience 984; campaign_manager_360_object; snapshotting_finished/export_error. ASU Enterprise Partners (General - ASU Data): Exports for signal 984 failed with states: <(snapshotting_finished,export_error)>
  Runs: `984-campaign_manager_360_object_984-scheduled__2026-05-13T00:00:00+00:00`

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
