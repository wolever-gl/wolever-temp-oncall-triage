<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# albertsons_6 snapshotting-error

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `new`
Tags: `triage:needs_review`
Incidents: [Q1S0Q38FOEN2XY](https://growthloop.pagerduty.com/incidents/Q1S0Q38FOEN2XY)
Alerts: 28

## Current Summary

albertsons (Albertsons Media): Exports for audience 13102 failed with states: <(snapshotting_error,no_batches)>

## Alert Scope

- Alert facts: 28 imported, 28 linked to this group.
- Orgs: `albertsons_6`
- Audiences: `10935`, `11117`, `11120`, `11147`, `11148`, `11290`, `11293`, `11349`, and 20 more
- Destinations: `live_ramp_activation`, `live_ramp_sftp`
- State tuples: `snapshotting_error/no_batches`
- Commands seen: `glcli --env albertsons bifrost pizza --audience-id 10935 --org-id 6`, `glcli --env albertsons bifrost pizza --audience-id 11117 --org-id 6`, `glcli --env albertsons bifrost pizza --audience-id 11120 --org-id 6`, and 25 more

Representative alerts:
- Q1S0Q38FOEN2XY/Q213WSVKVPKMTM: 2026-06-22T07:38:41-07:00; albertsons_6; audience 10935; live_ramp_activation; snapshotting_error/no_batches. albertsons (Albertsons Media): Exports for audience 10935 failed with states: <(snapshotting_error,no_batches)>
  Runs: `10935-live_ramp_activation_4988-scheduled__2026-06-20T00:00:00+00:00`
- Q1S0Q38FOEN2XY/Q13KHJ175T37N6: 2026-06-22T07:39:03-07:00; albertsons_6; audience 11117; live_ramp_activation; snapshotting_error/no_batches. albertsons (Albertsons Media): Exports for audience 11117 failed with states: <(snapshotting_error,no_batches)>
  Runs: `11117-live_ramp_activation_3056-scheduled__2026-06-22T00:00:00+00:00`
- Q1S0Q38FOEN2XY/Q0U1LXTT47O3NZ: 2026-06-22T07:39:04-07:00; albertsons_6; audience 11120; live_ramp_activation; snapshotting_error/no_batches. albertsons (Albertsons Media): Exports for audience 11120 failed with states: <(snapshotting_error,no_batches)>
  Runs: `11120-live_ramp_activation_3053-scheduled__2026-06-22T00:00:00+00:00`
- Q1S0Q38FOEN2XY/Q2I7PPSFXCE9D0: 2026-06-22T07:39:08-07:00; albertsons_6; audience 11147; live_ramp_activation; snapshotting_error/no_batches. albertsons (Albertsons Media): Exports for audience 11147 failed with states: <(snapshotting_error,no_batches)>
  Runs: `11147-live_ramp_activation_3046-scheduled__2026-06-22T00:00:00+00:00`
- Q1S0Q38FOEN2XY/Q0710TTPXJLKDR: 2026-06-22T07:39:09-07:00; albertsons_6; audience 11148; live_ramp_activation; snapshotting_error/no_batches. albertsons (Albertsons Media): Exports for audience 11148 failed with states: <(snapshotting_error,no_batches)>
  Runs: `11148-live_ramp_activation_3045-scheduled__2026-06-22T00:00:00+00:00`
- Q1S0Q38FOEN2XY/Q0UL47E3YFQTVV: 2026-06-22T07:39:31-07:00; albertsons_6; audience 11290; live_ramp_activation; snapshotting_error/no_batches. albertsons (Albertsons Media): Exports for audience 11290 failed with states: <(snapshotting_error,no_batches)>
  Runs: `11290-live_ramp_activation_3403-scheduled__2026-06-19T00:00:00+00:00`
- Q1S0Q38FOEN2XY/Q3005U6GTLCOFC: 2026-06-22T07:39:32-07:00; albertsons_6; audience 11293; live_ramp_sftp; snapshotting_error/no_batches. albertsons (Albertsons Media): Exports for audience 11293 failed with states: <(snapshotting_error,no_batches)>
  Runs: `11293-live_ramp_sftp_3788-scheduled__2026-06-19T00:00:00+00:00`
- Q1S0Q38FOEN2XY/Q2SA2EL0F19V60: 2026-06-22T07:39:37-07:00; albertsons_6; audience 11349; live_ramp_activation; snapshotting_error/no_batches. albertsons (Albertsons Media): Exports for audience 11349 failed with states: <(snapshotting_error,no_batches)>
  Runs: `11349-live_ramp_activation_3389-scheduled__2026-06-19T00:00:00+00:00`
- Q1S0Q38FOEN2XY/Q11E6OHRIMO8MK: 2026-06-22T07:39:41-07:00; albertsons_6; audience 11374; live_ramp_activation; snapshotting_error/no_batches. albertsons (Albertsons Media): Exports for audience 11374 failed with states: <(snapshotting_error,no_batches)>
  Runs: `11374-live_ramp_activation_3406-scheduled__2026-06-22T00:00:00+00:00`
- Q1S0Q38FOEN2XY/Q1N343UUDXPUWL: 2026-06-22T07:39:41-07:00; albertsons_6; audience 11366; live_ramp_activation; snapshotting_error/no_batches. albertsons (Albertsons Media): Exports for audience 11366 failed with states: <(snapshotting_error,no_batches)>
  Runs: `11366-live_ramp_activation_3401-scheduled__2026-06-22T00:00:00+00:00`
- Showing 10 of 28 alert facts; see `indexes/alert_facts.json` for the full imported set.

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
