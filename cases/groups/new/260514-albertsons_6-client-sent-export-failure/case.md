# albertsons_6 client-sent-export-failure

State: `new`
Tags: `triage:needs_review`
Incidents: [Q38JR11G2ENK2W](https://growthloop.pagerduty.com/incidents/Q38JR11G2ENK2W)
Alerts: 8

## Current Summary

albertsons (Albertsons Media) - Audience 10073: Audience Export failure for 10073 sent to client.

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

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
