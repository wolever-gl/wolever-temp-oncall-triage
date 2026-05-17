<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# albertsons_6 client-sent-export-failure

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `resolved`
Tags: `triage:needs_review`, `evidence:retry-succeeded`
Incidents: [Q38JR11G2ENK2W](https://growthloop.pagerduty.com/incidents/Q38JR11G2ENK2W)
Alerts: 8

## Current Summary

Resolved: the remaining six 5/14 Albertsons client-sent alerts all have later Pizza export_finished runs after the alert time.

## Alert Scope

- Alert facts: 8 imported, 8 linked to this group.
- Orgs: `albertsons_6`
- Audiences: `10073`, `12213`, `12862`, `12865`, `12866`, `12873`, `12874`, `12875`
- Destinations: none
- State tuples: none
- Commands seen: `glcli --env albertsons bifrost pizza --audience-id 10073 --org-id 6`, `glcli --env albertsons bifrost pizza --audience-id 12213 --org-id 6`, `glcli --env albertsons bifrost pizza --audience-id 12862 --org-id 6`, and 5 more

Representative alerts:
- Q38JR11G2ENK2W/Q02ZG08UGCS5OA: 2026-05-14T13:53:43-07:00; albertsons_6; audience 12874. albertsons (Albertsons Media) - Audience 12874: Audience Export failure for 12874 sent to client.
- Q38JR11G2ENK2W/Q2852WP5GN2XBE: 2026-05-14T13:53:44-07:00; albertsons_6; audience 12866. albertsons (Albertsons Media) - Audience 12866: Audience Export failure for 12866 sent to client.
- Q38JR11G2ENK2W/Q1TMIDDKP4H2XI: 2026-05-14T14:03:45-07:00; albertsons_6; audience 12873. albertsons (Albertsons Media) - Audience 12873: Audience Export failure for 12873 sent to client.
- Q38JR11G2ENK2W/Q37HTX61KYUTPQ: 2026-05-14T14:03:46-07:00; albertsons_6; audience 12862. albertsons (Albertsons Media) - Audience 12862: Audience Export failure for 12862 sent to client.
- Q38JR11G2ENK2W/Q0HOSDAJCFXNKU: 2026-05-14T14:03:48-07:00; albertsons_6; audience 12875. albertsons (Albertsons Media) - Audience 12875: Audience Export failure for 12875 sent to client.
- Q38JR11G2ENK2W/Q3XKDL8A9WAX7G: 2026-05-14T14:14:05-07:00; albertsons_6; audience 12865. albertsons (Albertsons Media) - Audience 12865: Audience Export failure for 12865 sent to client.
- Q38JR11G2ENK2W/Q1ULRV0BGTSFB6: 2026-05-14T21:42:02-07:00; albertsons_6; audience 12213. albertsons (Albertsons Media) - Audience 12213: Audience Export failure for 12213 sent to client.
- Q38JR11G2ENK2W/Q32J02DN0JRYZ0: 2026-05-14T23:51:59-07:00; albertsons_6; audience 10073. albertsons (Albertsons Media) - Audience 10073: Audience Export failure for 10073 sent to client.

## Export Checks

- Checks: 8.
- States: `blocked`=6, `healthy_closed`=1, `open`=1
- Blockers seen: `evidence_unavailable`, `missing_run_identity`

Check evidence:
- chk_q38jr11g2enk2w_q02zg08ugcs5oa (Q38JR11G2ENK2W/Q02ZG08UGCS5OA): state=`blocked`.
  Scope: env=albertsons; org=6; audience=12874.
  Command: `glcli --env albertsons bifrost pizza --audience-id 12874 --org-id 6`
  Blockers: `missing_run_identity`
- chk_q38jr11g2enk2w_q0hosdajcfxnku (Q38JR11G2ENK2W/Q0HOSDAJCFXNKU): state=`healthy_closed`.
  Scope: env=albertsons; org=6; audience=12875.
  Command: `glcli --env albertsons bifrost pizza --audience-id 12875 --org-id 6`
  Run 12875-live_ramp_activation_4613-scheduled__2026-05-15T00:00:00+00:00: health=`healthy`; created=2026-05-15T05:15:46.851851+00:00; snapshotting=snapshotting_finished; export=export_finished; failed=0.
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
- chk_q38jr11g2enk2w_q32j02dn0jryz0 (Q38JR11G2ENK2W/Q32J02DN0JRYZ0): state=`open`, next_check_at=`2026-05-17T16:09:54.764Z`.
  Scope: env=albertsons; org=6; audience=10073.
  Command: `glcli --env albertsons bifrost pizza --audience-id 10073 --org-id 6`
  Blockers: `evidence_unavailable`
- chk_q38jr11g2enk2w_q37htx61kyutpq (Q38JR11G2ENK2W/Q37HTX61KYUTPQ): state=`blocked`.
  Scope: env=albertsons; org=6; audience=12862.
  Command: `glcli --env albertsons bifrost pizza --audience-id 12862 --org-id 6`
  Blockers: `missing_run_identity`
- chk_q38jr11g2enk2w_q3xkdl8a9wax7g (Q38JR11G2ENK2W/Q3XKDL8A9WAX7G): state=`blocked`.
  Scope: env=albertsons; org=6; audience=12865.
  Command: `glcli --env albertsons bifrost pizza --audience-id 12865 --org-id 6`
  Blockers: `missing_run_identity`

## Recent Evidence

- Remaining 5/14 Albertsons client-sent audiences have later successful runs: 12213 export_finished at 2026-05-15 04:41:01 UTC; 12862 export_finished at 2026-05-16 00:59:11 UTC; 12865 export_finished at 2026-05-16 00:32:34 UTC; 12866 export_finished at 2026-05-16 00:34:44 UTC; 12873 export_finished at 2026-05-16 00:29:57 UTC; 12874 export_finished at 2026-05-16 00:33:54 UTC.
  Source: `glcli bifrost pizza`; kind: `pizza`; captured: `2026-05-16T21:46:49.566Z`.
  Command: `glcli --env albertsons bifrost pizza --audience-id <audience> --org-id 6 --format json for 12213,12862,12865,12866,12873,12874`

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
