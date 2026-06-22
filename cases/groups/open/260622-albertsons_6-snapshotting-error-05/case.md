<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# albertsons_6 snapshotting-error

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `open`
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

## Export Checks

- Checks: 28.
- States: `blocked`=28
- Blockers seen: `snapshotting_error_requires_review`

Check evidence:
- chk_q1s0q38foen2xy_q04peho7q7b29t (Q1S0Q38FOEN2XY/Q04PEHO7Q7B29T): state=`blocked`.
  Scope: env=albertsons; org=6; audience=12498; destination=live_ramp_activation.
  Checked runs: `12498-live_ramp_activation_4272-scheduled__2026-06-21T00:00:00+00:00`
  Command: `glcli --env albertsons bifrost pizza --audience-id 12498 --org-id 6`
  Blockers: `snapshotting_error_requires_review`
  Run 12498-live_ramp_activation_4272-scheduled__2026-06-21T00:00:00+00:00: health=`blocked`; blockers=snapshotting_error_requires_review; created=2026-06-21T01:20:30.584774+00:00; snapshotting=snapshotting_error; export=no_batches; failed=0.
- chk_q1s0q38foen2xy_q04s47zk76c24b (Q1S0Q38FOEN2XY/Q04S47ZK76C24B): state=`blocked`.
  Scope: env=albertsons; org=6; audience=12591; destination=live_ramp_activation.
  Checked runs: `12591-live_ramp_activation_4362-scheduled__2026-06-22T00:00:00+00:00`
  Command: `glcli --env albertsons bifrost pizza --audience-id 12591 --org-id 6`
  Blockers: `snapshotting_error_requires_review`
  Run 12591-live_ramp_activation_4362-scheduled__2026-06-22T00:00:00+00:00: health=`blocked`; blockers=snapshotting_error_requires_review; created=2026-06-22T05:43:23.381255+00:00; snapshotting=snapshotting_error; export=no_batches; failed=0.
- chk_q1s0q38foen2xy_q0710ttpxjlkdr (Q1S0Q38FOEN2XY/Q0710TTPXJLKDR): state=`blocked`.
  Scope: env=albertsons; org=6; audience=11148; destination=live_ramp_activation.
  Checked runs: `11148-live_ramp_activation_3045-scheduled__2026-06-22T00:00:00+00:00`
  Command: `glcli --env albertsons bifrost pizza --audience-id 11148 --org-id 6`
  Blockers: `snapshotting_error_requires_review`
  Run 11148-live_ramp_activation_3045-scheduled__2026-06-22T00:00:00+00:00: health=`blocked`; blockers=snapshotting_error_requires_review; created=2026-06-22T12:11:01.087730+00:00; snapshotting=snapshotting_error; export=no_batches; failed=0.
- chk_q1s0q38foen2xy_q07l8hvm5vf8z0 (Q1S0Q38FOEN2XY/Q07L8HVM5VF8Z0): state=`blocked`.
  Scope: env=albertsons; org=6; audience=12477; destination=live_ramp_activation.
  Checked runs: `12477-live_ramp_activation_4251-scheduled__2026-06-21T00:00:00+00:00`
  Command: `glcli --env albertsons bifrost pizza --audience-id 12477 --org-id 6`
  Blockers: `snapshotting_error_requires_review`
  Run 12477-live_ramp_activation_4251-scheduled__2026-06-21T00:00:00+00:00: health=`blocked`; blockers=snapshotting_error_requires_review; created=2026-06-21T05:10:19.157425+00:00; snapshotting=snapshotting_error; export=no_batches; failed=0.
- chk_q1s0q38foen2xy_q07ps9setozbsq (Q1S0Q38FOEN2XY/Q07PS9SETOZBSQ): state=`blocked`.
  Scope: env=albertsons; org=6; audience=12991; destination=live_ramp_activation.
  Checked runs: `12991-live_ramp_activation_4875-scheduled__2026-06-22T00:00:00+00:00`
  Command: `glcli --env albertsons bifrost pizza --audience-id 12991 --org-id 6`
  Blockers: `snapshotting_error_requires_review`
  Run 12991-live_ramp_activation_4875-scheduled__2026-06-22T00:00:00+00:00: health=`blocked`; blockers=snapshotting_error_requires_review; created=2026-06-22T04:36:16.385104+00:00; snapshotting=snapshotting_error; export=no_batches; failed=0.
- chk_q1s0q38foen2xy_q0gb6gmztnla6n (Q1S0Q38FOEN2XY/Q0GB6GMZTNLA6N): state=`blocked`.
  Scope: env=albertsons; org=6; audience=12258; destination=live_ramp_activation.
  Checked runs: `12258-live_ramp_activation_4050-scheduled__2026-06-22T00:00:00+00:00`
  Command: `glcli --env albertsons bifrost pizza --audience-id 12258 --org-id 6`
  Blockers: `snapshotting_error_requires_review`
  Run 12258-live_ramp_activation_4050-scheduled__2026-06-22T00:00:00+00:00: health=`blocked`; blockers=snapshotting_error_requires_review; created=2026-06-22T11:41:00.298680+00:00; snapshotting=snapshotting_error; export=no_batches; failed=0.
- chk_q1s0q38foen2xy_q0ix8nofzkpwf5 (Q1S0Q38FOEN2XY/Q0IX8NOFZKPWF5): state=`blocked`.
  Scope: env=albertsons; org=6; audience=12499; destination=live_ramp_activation.
  Checked runs: `12499-live_ramp_activation_4273-scheduled__2026-06-21T00:00:00+00:00`
  Command: `glcli --env albertsons bifrost pizza --audience-id 12499 --org-id 6`
  Blockers: `snapshotting_error_requires_review`
  Run 12499-live_ramp_activation_4273-scheduled__2026-06-21T00:00:00+00:00: health=`blocked`; blockers=snapshotting_error_requires_review; created=2026-06-21T02:34:57.627745+00:00; snapshotting=snapshotting_error; export=no_batches; failed=0.
- chk_q1s0q38foen2xy_q0nmc9y9w3rqgn (Q1S0Q38FOEN2XY/Q0NMC9Y9W3RQGN): state=`blocked`.
  Scope: env=albertsons; org=6; audience=12514; destination=live_ramp_activation.
  Checked runs: `12514-live_ramp_activation_4288-scheduled__2026-06-22T00:00:00+00:00`
  Command: `glcli --env albertsons bifrost pizza --audience-id 12514 --org-id 6`
  Blockers: `snapshotting_error_requires_review`
  Run 12514-live_ramp_activation_4288-scheduled__2026-06-22T00:00:00+00:00: health=`blocked`; blockers=snapshotting_error_requires_review; created=2026-06-22T01:28:27.302163+00:00; snapshotting=snapshotting_error; export=no_batches; failed=0.
- chk_q1s0q38foen2xy_q0u1lxtt47o3nz (Q1S0Q38FOEN2XY/Q0U1LXTT47O3NZ): state=`blocked`.
  Scope: env=albertsons; org=6; audience=11120; destination=live_ramp_activation.
  Checked runs: `11120-live_ramp_activation_3053-scheduled__2026-06-22T00:00:00+00:00`
  Command: `glcli --env albertsons bifrost pizza --audience-id 11120 --org-id 6`
  Blockers: `snapshotting_error_requires_review`
  Run 11120-live_ramp_activation_3053-scheduled__2026-06-22T00:00:00+00:00: health=`blocked`; blockers=snapshotting_error_requires_review; created=2026-06-22T12:27:11.554802+00:00; snapshotting=snapshotting_error; export=no_batches; failed=0.
- chk_q1s0q38foen2xy_q0ul47e3yfqtvv (Q1S0Q38FOEN2XY/Q0UL47E3YFQTVV): state=`blocked`.
  Scope: env=albertsons; org=6; audience=11290; destination=live_ramp_activation.
  Checked runs: `11290-live_ramp_activation_3403-scheduled__2026-06-19T00:00:00+00:00`
  Command: `glcli --env albertsons bifrost pizza --audience-id 11290 --org-id 6`
  Blockers: `snapshotting_error_requires_review`
  Run 11290-live_ramp_activation_3403-scheduled__2026-06-19T00:00:00+00:00: health=`blocked`; blockers=snapshotting_error_requires_review; created=2026-06-19T06:31:10.898690+00:00; snapshotting=snapshotting_error; export=no_batches; failed=0.
- Showing 10 of 28 checks; see `indexes/checks.json` and `checks/*/check.json` for the full evidence set.

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
