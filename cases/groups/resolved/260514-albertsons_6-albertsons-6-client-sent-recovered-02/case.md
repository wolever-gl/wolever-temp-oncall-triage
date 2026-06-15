<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# albertsons_6 client sent recovered

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `resolved`
Tags: `resolved:export-healthy`, `triage:tag_grouped`
Incidents: [Q38JR11G2ENK2W](https://growthloop.pagerduty.com/incidents/Q38JR11G2ENK2W)
Alerts: 6

## Current Summary

Albertsons client-sent export failure alerts with same-audience recovered export evidence.

## Alert Scope

- Alert facts: 6 imported, 6 linked to this group.
- Orgs: `albertsons_6`
- Audiences: `12213`, `12862`, `12865`, `12866`, `12873`, `12874`
- Destinations: none
- State tuples: none
- Commands seen: `glcli --env albertsons bifrost pizza --audience-id 12213 --org-id 6`, `glcli --env albertsons bifrost pizza --audience-id 12862 --org-id 6`, `glcli --env albertsons bifrost pizza --audience-id 12865 --org-id 6`, and 3 more

Representative alerts:
- Q38JR11G2ENK2W/Q02ZG08UGCS5OA: 2026-05-14T13:53:43-07:00; albertsons_6; audience 12874. albertsons (Albertsons Media) - Audience 12874: Audience Export failure for 12874 sent to client.
- Q38JR11G2ENK2W/Q2852WP5GN2XBE: 2026-05-14T13:53:44-07:00; albertsons_6; audience 12866. albertsons (Albertsons Media) - Audience 12866: Audience Export failure for 12866 sent to client.
- Q38JR11G2ENK2W/Q1TMIDDKP4H2XI: 2026-05-14T14:03:45-07:00; albertsons_6; audience 12873. albertsons (Albertsons Media) - Audience 12873: Audience Export failure for 12873 sent to client.
- Q38JR11G2ENK2W/Q37HTX61KYUTPQ: 2026-05-14T14:03:46-07:00; albertsons_6; audience 12862. albertsons (Albertsons Media) - Audience 12862: Audience Export failure for 12862 sent to client.
- Q38JR11G2ENK2W/Q3XKDL8A9WAX7G: 2026-05-14T14:14:05-07:00; albertsons_6; audience 12865. albertsons (Albertsons Media) - Audience 12865: Audience Export failure for 12865 sent to client.
- Q38JR11G2ENK2W/Q1ULRV0BGTSFB6: 2026-05-14T21:42:02-07:00; albertsons_6; audience 12213. albertsons (Albertsons Media) - Audience 12213: Audience Export failure for 12213 sent to client.

## Export Checks

- Checks: 6.
- States: `blocked`=6
- Blockers seen: `missing_run_identity`

Check evidence:
- chk_q38jr11g2enk2w_q02zg08ugcs5oa (Q38JR11G2ENK2W/Q02ZG08UGCS5OA): state=`blocked`.
  Scope: env=albertsons; org=6; audience=12874.
  Command: `glcli --env albertsons bifrost pizza --audience-id 12874 --org-id 6`
  Blockers: `missing_run_identity`
- chk_q38jr11g2enk2w_q1tmiddkp4h2xi (Q38JR11G2ENK2W/Q1TMIDDKP4H2XI): state=`blocked`.
  Scope: env=albertsons; org=6; audience=12873.
  Command: `glcli --env albertsons bifrost pizza --audience-id 12873 --org-id 6`
  Blockers: `missing_run_identity`
- chk_q38jr11g2enk2w_q1ulrv0bgtsfb6 (Q38JR11G2ENK2W/Q1ULRV0BGTSFB6): state=`blocked`.
  Scope: env=albertsons; org=6; audience=12213.
  Command: `glcli --env albertsons bifrost pizza --audience-id 12213 --org-id 6`
  Blockers: `missing_run_identity`
- chk_q38jr11g2enk2w_q2852wp5gn2xbe (Q38JR11G2ENK2W/Q2852WP5GN2XBE): state=`blocked`.
  Scope: env=albertsons; org=6; audience=12866.
  Command: `glcli --env albertsons bifrost pizza --audience-id 12866 --org-id 6`
  Blockers: `missing_run_identity`
- chk_q38jr11g2enk2w_q37htx61kyutpq (Q38JR11G2ENK2W/Q37HTX61KYUTPQ): state=`blocked`.
  Scope: env=albertsons; org=6; audience=12862.
  Command: `glcli --env albertsons bifrost pizza --audience-id 12862 --org-id 6`
  Blockers: `missing_run_identity`
- chk_q38jr11g2enk2w_q3xkdl8a9wax7g (Q38JR11G2ENK2W/Q3XKDL8A9WAX7G): state=`blocked`.
  Scope: env=albertsons; org=6; audience=12865.
  Command: `glcli --env albertsons bifrost pizza --audience-id 12865 --org-id 6`
  Blockers: `missing_run_identity`

## Recent Evidence

- Albertsons client-sent export failure alerts with same-audience recovered export evidence.
  Source: `oncall-triage`; kind: `tag_grouping`; captured: `2026-05-18T22:09:45.061Z`.

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
