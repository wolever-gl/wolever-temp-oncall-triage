<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# ford_310 no-batches

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `new`
Tags: `triage:needs_review`
Incidents: [Q1TJJ4MEVOF1W3](https://growthloop.pagerduty.com/incidents/Q1TJJ4MEVOF1W3)
Alerts: 19

## Current Summary

ford (Marketing Production): Exports for audience 34062 failed with states: <(snapshotting_finished,no_batches)>

## Alert Scope

- Alert facts: 19 imported, 19 linked to this group.
- Orgs: `ford_310`
- Audiences: `29560`, `31274`, `31276`, `31289`, `31290`, `31303`, `31315`, `31317`, and 11 more
- Destinations: `facebook`, `marketing_cloud`, `pinterest`, `reddit_ads`, `the_trade_desk_crm`, `tik_tok_streaming`
- State tuples: `snapshotting_finished/no_batches`
- Commands seen: `glcli --env prod bifrost pizza --audience-id 29560 --org-id 310`, `glcli --env prod bifrost pizza --audience-id 31274 --org-id 310`, `glcli --env prod bifrost pizza --audience-id 31276 --org-id 310`, and 16 more

Representative alerts:
- Q1TJJ4MEVOF1W3/Q2JLV0HSSULT41: 2026-05-13T07:56:54-07:00; ford_310; audience 29560; marketing_cloud; snapshotting_finished/no_batches. ford (Marketing Production): Exports for audience 29560 failed with states: <(snapshotting_finished,no_batches)>
  Runs: `29560-marketing_cloud_18087-scheduled__2026-05-13T00:00:00+00:00`
- Q1TJJ4MEVOF1W3/Q04B2OJIZ4F2KT: 2026-05-13T07:56:56-07:00; ford_310; audience 31274; facebook; snapshotting_finished/no_batches. ford (Marketing Production): Exports for audience 31274 failed with states: <(snapshotting_finished,no_batches)>
  Runs: `31274-facebook_19687-scheduled__2026-05-13T00:00:00+00:00`, `31274-the_trade_desk_crm_19688-scheduled__2026-05-13T00:00:00+00:00`
- Q1TJJ4MEVOF1W3/Q3OGA20C8VTH1G: 2026-05-13T07:56:57-07:00; ford_310; audience 31276; facebook; snapshotting_finished/no_batches. ford (Marketing Production): Exports for audience 31276 failed with states: <(snapshotting_finished,no_batches)>
  Runs: `31276-facebook_19690-scheduled__2026-05-13T00:00:00+00:00`, `31276-the_trade_desk_crm_19691-scheduled__2026-05-13T00:00:00+00:00`
- Q1TJJ4MEVOF1W3/Q0EI54D89DOCS9: 2026-05-13T07:56:58-07:00; ford_310; audience 31289; facebook; snapshotting_finished/no_batches. ford (Marketing Production): Exports for audience 31289 failed with states: <(snapshotting_finished,no_batches)>
  Runs: `31289-facebook_19694-scheduled__2026-05-13T00:00:00+00:00`, `31289-the_trade_desk_crm_19695-scheduled__2026-05-13T00:00:00+00:00`
- Q1TJJ4MEVOF1W3/Q24218TGU2M1Y5: 2026-05-13T07:56:59-07:00; ford_310; audience 31290; the_trade_desk_crm; snapshotting_finished/no_batches. ford (Marketing Production): Exports for audience 31290 failed with states: <(snapshotting_finished,no_batches)>
  Runs: `31290-facebook_19698-scheduled__2026-05-13T00:00:00+00:00`, `31290-the_trade_desk_crm_19697-scheduled__2026-05-13T00:00:00+00:00`
- Q1TJJ4MEVOF1W3/Q35G2Y7HOP9WVU: 2026-05-13T07:57:00-07:00; ford_310; audience 31303; the_trade_desk_crm; snapshotting_finished/no_batches. ford (Marketing Production): Exports for audience 31303 failed with states: <(snapshotting_finished,no_batches)>
  Runs: `31303-facebook_19701-scheduled__2026-05-13T00:00:00+00:00`, `31303-the_trade_desk_crm_19700-scheduled__2026-05-13T00:00:00+00:00`
- Q1TJJ4MEVOF1W3/Q35JFDLCVFVCBX: 2026-05-13T07:57:02-07:00; ford_310; audience 31315; the_trade_desk_crm; snapshotting_finished/no_batches. ford (Marketing Production): Exports for audience 31315 failed with states: <(snapshotting_finished,no_batches)>
  Runs: `31315-facebook_19704-scheduled__2026-05-13T00:00:00+00:00`, `31315-the_trade_desk_crm_19703-scheduled__2026-05-13T00:00:00+00:00`
- Q1TJJ4MEVOF1W3/Q10CCC3A5XZFGC: 2026-05-13T07:57:03-07:00; ford_310; audience 31317; the_trade_desk_crm; snapshotting_finished/no_batches. ford (Marketing Production): Exports for audience 31317 failed with states: <(snapshotting_finished,no_batches)>
  Runs: `31317-facebook_19707-scheduled__2026-05-13T00:00:00+00:00`, `31317-the_trade_desk_crm_19706-scheduled__2026-05-13T00:00:00+00:00`
- Q1TJJ4MEVOF1W3/Q22B7QPRRDSA37: 2026-05-13T07:57:05-07:00; ford_310; audience 32702; facebook; snapshotting_finished/no_batches. ford (Marketing Production): Exports for audience 32702 failed with states: <(snapshotting_finished,no_batches)>
  Runs: `32702-facebook_20066-scheduled__2026-05-13T00:00:00+00:00`
- Q1TJJ4MEVOF1W3/Q1LEWIJ102WL8R: 2026-05-13T07:57:07-07:00; ford_310; audience 32703; facebook; snapshotting_finished/no_batches. ford (Marketing Production): Exports for audience 32703 failed with states: <(snapshotting_finished,no_batches)>
  Runs: `32703-facebook_20067-scheduled__2026-05-13T00:00:00+00:00`
- Showing 10 of 19 alert facts; see `indexes/alert_facts.json` for the full imported set.

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
