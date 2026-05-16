<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# albertsons_6 no-batches

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `resolved`
Tags: `triage:needs_review`, `resolved:export-healthy`
Incidents: [Q2T09VCLN9MRZ8](https://growthloop.pagerduty.com/incidents/Q2T09VCLN9MRZ8)
Alerts: 1

## Current Summary

Resolved from Albertsons LiveRamp tagger evidence: the only alert-scoped export is healthy/export-complete.

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `albertsons_6`
- Audiences: `2850`
- Destinations: `live_ramp_activation`
- State tuples: `snapshotting_finished/no_batches`
- Commands seen: `glcli --env albertsons bifrost pizza --audience-id 2850 --org-id 6`

Representative alerts:
- Q2T09VCLN9MRZ8/Q2CC3JVTUBUB5N: 2026-05-11T07:32:05-07:00; albertsons_6; audience 2850; live_ramp_activation; snapshotting_finished/no_batches. albertsons (Albertsons Media): Exports for audience 2850 failed with states: <(snapshotting_finished,no_batches)>
  Runs: `2850-live_ramp_activation_1397-scheduled__2026-05-07T00:00:00+00:00`

## Export Checks

- Checks: 1.
- States: `open`=1
- Proposed states: `healthy_closed`=1

Check evidence:
- chk_q2t09vcln9mrz8_q2cc3jvtubub5n (Q2T09VCLN9MRZ8/Q2CC3JVTUBUB5N): state=`open`, proposed=`healthy_closed`.
  Scope: env=albertsons; org=6; audience=2850; destination=live_ramp_activation.
  Checked runs: `2850-live_ramp_activation_1397-scheduled__2026-05-07T00:00:00+00:00`
  Command: `glcli --env albertsons bifrost pizza --audience-id 2850 --org-id 6`
  Run 2850-live_ramp_activation_1397-scheduled__2026-05-07T00:00:00+00:00: health=`healthy`; created=2026-05-07T03:31:09.989325+00:00; snapshotting=snapshotting_finished; export=no_batches; failed=0.

## Recent Evidence

- Albertsons LiveRamp tagger classified the only alert as export-complete with healthy checked export evidence.
  Source: `tagrun_20260516211425_260516_albertsons_liveramp_progress`; kind: `tagger`; captured: `2026-05-16T21:15:32.678Z`.
  Command: `bun run oncall-triage tag cases --org albertsons_6 --destination live-ramp --script ./taggers/one-off/260516-albertsons-liveramp-progress.ts`

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
