<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# albertsons_6 zero-success

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `monitoring`
Tags: `triage:needs_review`, `monitoring:export-processing`
Incidents: [Q38JR11G2ENK2W](https://growthloop.pagerduty.com/incidents/Q38JR11G2ENK2W)
Alerts: 10

## Current Summary

Monitoring: 5 Albertsons zero-success audiences have recovered and 5 remain export_processing with zero failures.

## Alert Scope

- Alert facts: 10 imported, 10 linked to this group.
- Orgs: `albertsons_6`
- Audiences: `12810`, `12814`, `12862`, `12865`, `12866`, `12873`, `12874`, `12875`, and 2 more
- Destinations: none
- State tuples: none
- Commands seen: `glcli --env albertsons bifrost pizza --audience-id 12810 --org-id 6`, `glcli --env albertsons bifrost pizza --audience-id 12814 --org-id 6`, `glcli --env albertsons bifrost pizza --audience-id 12862 --org-id 6`, and 7 more

Representative alerts:
- Q38JR11G2ENK2W/Q2M2BHX98MHZQ4: 2026-05-14T13:39:20-07:00; albertsons_6; audience 12878. albertsons (Albertsons Media) - Audience 12878: 0 successfull_exports from pizza tracker found 10 minutes after new export
- Q38JR11G2ENK2W/Q3WXBZ7NHK8AJM: 2026-05-14T13:46:42-07:00; albertsons_6; audience 12876. albertsons (Albertsons Media) - Audience 12876: 0 successfull_exports from pizza tracker found 10 minutes after new export
- Q38JR11G2ENK2W/Q0UJ754HNUZA0W: 2026-05-14T13:48:49-07:00; albertsons_6; audience 12874. albertsons (Albertsons Media) - Audience 12874: 0 successfull_exports from pizza tracker found 10 minutes after new export
- Q38JR11G2ENK2W/Q0UXYTQAE5SEEF: 2026-05-14T13:49:56-07:00; albertsons_6; audience 12866. albertsons (Albertsons Media) - Audience 12866: 0 successfull_exports from pizza tracker found 10 minutes after new export
- Q38JR11G2ENK2W/Q24005UUW7ICKS: 2026-05-14T13:53:00-07:00; albertsons_6; audience 12862. albertsons (Albertsons Media) - Audience 12862: 0 successfull_exports from pizza tracker found 10 minutes after new export
- Q38JR11G2ENK2W/Q3O67YTDVSANKL: 2026-05-14T13:53:34-07:00; albertsons_6; audience 12865. albertsons (Albertsons Media) - Audience 12865: 0 successfull_exports from pizza tracker found 10 minutes after new export
- Q38JR11G2ENK2W/Q2OTOA7JSD823S: 2026-05-14T13:54:18-07:00; albertsons_6; audience 12873. albertsons (Albertsons Media) - Audience 12873: 0 successfull_exports from pizza tracker found 10 minutes after new export
- Q38JR11G2ENK2W/Q1QONB2ZKNS7PV: 2026-05-14T13:56:05-07:00; albertsons_6; audience 12875. albertsons (Albertsons Media) - Audience 12875: 0 successfull_exports from pizza tracker found 10 minutes after new export
- Q38JR11G2ENK2W/Q3WNLOQE86QYWA: 2026-05-15T12:50:16-07:00; albertsons_6; audience 12810. albertsons (Albertsons Media) - Audience 12810: 0 successfull_exports from pizza tracker found 10 minutes after new export
- Q38JR11G2ENK2W/Q0ZDIAGV3OJULA: 2026-05-15T12:51:58-07:00; albertsons_6; audience 12814. albertsons (Albertsons Media) - Audience 12814: 0 successfull_exports from pizza tracker found 10 minutes after new export

## Export Checks

- Checks: 10.
- States: `blocked`=10
- Blockers seen: `missing_run_identity`

Check evidence:
- chk_q38jr11g2enk2w_q0uj754hnuza0w (Q38JR11G2ENK2W/Q0UJ754HNUZA0W): state=`blocked`.
  Scope: env=albertsons; org=6; audience=12874.
  Command: `glcli --env albertsons bifrost pizza --audience-id 12874 --org-id 6`
  Blockers: `missing_run_identity`
- chk_q38jr11g2enk2w_q0uxytqae5seef (Q38JR11G2ENK2W/Q0UXYTQAE5SEEF): state=`blocked`.
  Scope: env=albertsons; org=6; audience=12866.
  Command: `glcli --env albertsons bifrost pizza --audience-id 12866 --org-id 6`
  Blockers: `missing_run_identity`
- chk_q38jr11g2enk2w_q0zdiagv3ojula (Q38JR11G2ENK2W/Q0ZDIAGV3OJULA): state=`blocked`.
  Scope: env=albertsons; org=6; audience=12814.
  Command: `glcli --env albertsons bifrost pizza --audience-id 12814 --org-id 6`
  Blockers: `missing_run_identity`
- chk_q38jr11g2enk2w_q1qonb2zkns7pv (Q38JR11G2ENK2W/Q1QONB2ZKNS7PV): state=`blocked`.
  Scope: env=albertsons; org=6; audience=12875.
  Command: `glcli --env albertsons bifrost pizza --audience-id 12875 --org-id 6`
  Blockers: `missing_run_identity`
- chk_q38jr11g2enk2w_q24005uuw7icks (Q38JR11G2ENK2W/Q24005UUW7ICKS): state=`blocked`.
  Scope: env=albertsons; org=6; audience=12862.
  Command: `glcli --env albertsons bifrost pizza --audience-id 12862 --org-id 6`
  Blockers: `missing_run_identity`
- chk_q38jr11g2enk2w_q2m2bhx98mhzq4 (Q38JR11G2ENK2W/Q2M2BHX98MHZQ4): state=`blocked`.
  Scope: env=albertsons; org=6; audience=12878.
  Command: `glcli --env albertsons bifrost pizza --audience-id 12878 --org-id 6`
  Blockers: `missing_run_identity`
- chk_q38jr11g2enk2w_q2otoa7jsd823s (Q38JR11G2ENK2W/Q2OTOA7JSD823S): state=`blocked`.
  Scope: env=albertsons; org=6; audience=12873.
  Command: `glcli --env albertsons bifrost pizza --audience-id 12873 --org-id 6`
  Blockers: `missing_run_identity`
- chk_q38jr11g2enk2w_q3o67ytdvsankl (Q38JR11G2ENK2W/Q3O67YTDVSANKL): state=`blocked`.
  Scope: env=albertsons; org=6; audience=12865.
  Command: `glcli --env albertsons bifrost pizza --audience-id 12865 --org-id 6`
  Blockers: `missing_run_identity`
- chk_q38jr11g2enk2w_q3wnloqe86qywa (Q38JR11G2ENK2W/Q3WNLOQE86QYWA): state=`blocked`.
  Scope: env=albertsons; org=6; audience=12810.
  Command: `glcli --env albertsons bifrost pizza --audience-id 12810 --org-id 6`
  Blockers: `missing_run_identity`
- chk_q38jr11g2enk2w_q3wxbz7nhk8ajm (Q38JR11G2ENK2W/Q3WXBZ7NHK8AJM): state=`blocked`.
  Scope: env=albertsons; org=6; audience=12876.
  Command: `glcli --env albertsons bifrost pizza --audience-id 12876 --org-id 6`
  Blockers: `missing_run_identity`

## Recent Evidence

- Monitoring check-in: audiences 12873, 12865, 12862, 12866, and 12874 are now export_finished with zero failures. Audiences 12814, 12810, 12875, 12876, and 12878 remain export_processing with zero failures. Keep monitoring the five processing audiences.
  Source: `monitoring preflight/manual Pizza`; kind: `pizza`; captured: `2026-05-16T23:03:38.886Z`.
  Command: `glcli --env albertsons bifrost pizza for audiences 12810,12814,12862,12865,12866,12873,12874,12875,12876,12878`

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
