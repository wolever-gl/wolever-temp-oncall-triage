# priceline_370 no-batches

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `new`
Tags: `triage:needs_review`
Incidents: [Q1YQV4ERKAIVMF](https://growthloop.pagerduty.com/incidents/Q1YQV4ERKAIVMF)
Alerts: 151

## Current Summary

priceline (default): Exports for signal 783 failed with states: <(snapshotting_finished,no_batches)>

## Alert Scope

- Alert facts: 151 imported, 151 linked to this group.
- Orgs: `priceline_370`
- Audiences: `15882`, `15986`, `18471`, `18472`, `18473`, `18474`, `18475`, `18476`, and 143 more
- Destinations: `big_query`, `facebook`, `gam360`, `google_adwords`, `iterable_object`, `microsoft_ads`, `reddit_ads`, `tik_tok`, and 1 more
- State tuples: `snapshotting_finished/no_batches`
- Commands seen: `glcli --env prod bifrost pizza --audience-id 15882 --org-id 370`, `glcli --env prod bifrost pizza --audience-id 15986 --org-id 370`, `glcli --env prod bifrost pizza --audience-id 18471 --org-id 370`, and 148 more

Representative alerts:
- Q1YQV4ERKAIVMF/Q1VQDANT3VVYPV: 2026-05-14T07:39:36-07:00; priceline_370; audience 15882; web_personalization; snapshotting_finished/no_batches. priceline (default): Exports for audience 15882 failed with states: <(snapshotting_finished,no_batches)>
  Runs: `15882-web_personalization_10333-scheduled__2026-05-14T00:00:00+00:00`
- Q1YQV4ERKAIVMF/Q0AU31O7H1TEO6: 2026-05-14T07:39:41-07:00; priceline_370; audience 15986; web_personalization; snapshotting_finished/no_batches. priceline (default): Exports for audience 15986 failed with states: <(snapshotting_finished,no_batches)>
  Runs: `15986-web_personalization_10389-scheduled__2026-05-14T00:00:00+00:00`
- Q1YQV4ERKAIVMF/Q2ROAHDPSV452B: 2026-05-14T07:39:42-07:00; priceline_370; audience 18471; google_adwords; snapshotting_finished/no_batches. priceline (default): Exports for audience 18471 failed with states: <(snapshotting_finished,no_batches)>
  Runs: `18471-google_adwords_11805-scheduled__2026-05-14T00:00:00+00:00`, `18471-microsoft_ads_11806-scheduled__2026-05-14T00:00:00+00:00`
- Q1YQV4ERKAIVMF/Q35ZHTUFJB1FET: 2026-05-14T07:39:43-07:00; priceline_370; audience 18472; google_adwords; snapshotting_finished/no_batches. priceline (default): Exports for audience 18472 failed with states: <(snapshotting_finished,no_batches)>
  Runs: `18472-google_adwords_11803-scheduled__2026-05-14T00:00:00+00:00`, `18472-microsoft_ads_11804-scheduled__2026-05-14T00:00:00+00:00`
- Q1YQV4ERKAIVMF/Q1NEIMISC39WM2: 2026-05-14T07:39:44-07:00; priceline_370; audience 18473; microsoft_ads; snapshotting_finished/no_batches. priceline (default): Exports for audience 18473 failed with states: <(snapshotting_finished,no_batches)>
  Runs: `18473-google_adwords_11801-scheduled__2026-05-14T00:00:00+00:00`, `18473-microsoft_ads_11802-scheduled__2026-05-14T00:00:00+00:00`
- Q1YQV4ERKAIVMF/Q2NS0Q9M0H8T7I: 2026-05-14T07:39:46-07:00; priceline_370; audience 18474; microsoft_ads; snapshotting_finished/no_batches. priceline (default): Exports for audience 18474 failed with states: <(snapshotting_finished,no_batches)>
  Runs: `18474-google_adwords_11799-scheduled__2026-05-14T00:00:00+00:00`, `18474-microsoft_ads_11800-scheduled__2026-05-14T00:00:00+00:00`
- Q1YQV4ERKAIVMF/Q28RGWBPCF60CS: 2026-05-14T07:39:47-07:00; priceline_370; audience 18475; microsoft_ads; snapshotting_finished/no_batches. priceline (default): Exports for audience 18475 failed with states: <(snapshotting_finished,no_batches)>
  Runs: `18475-google_adwords_11797-scheduled__2026-05-14T00:00:00+00:00`, `18475-microsoft_ads_11798-scheduled__2026-05-14T00:00:00+00:00`
- Q1YQV4ERKAIVMF/Q2KZ363OBSF2CB: 2026-05-14T07:39:48-07:00; priceline_370; audience 18476; microsoft_ads; snapshotting_finished/no_batches. priceline (default): Exports for audience 18476 failed with states: <(snapshotting_finished,no_batches)>
  Runs: `18476-google_adwords_11795-scheduled__2026-05-14T00:00:00+00:00`, `18476-microsoft_ads_11796-scheduled__2026-05-14T00:00:00+00:00`
- Q1YQV4ERKAIVMF/Q0QAY8FHCAZL34: 2026-05-14T07:39:49-07:00; priceline_370; audience 18477; google_adwords; snapshotting_finished/no_batches. priceline (default): Exports for audience 18477 failed with states: <(snapshotting_finished,no_batches)>
  Runs: `18477-google_adwords_11793-scheduled__2026-05-14T00:00:00+00:00`, `18477-microsoft_ads_11794-scheduled__2026-05-14T00:00:00+00:00`
- Q1YQV4ERKAIVMF/Q22R92IUFYLD63: 2026-05-14T07:39:50-07:00; priceline_370; audience 18478; microsoft_ads; snapshotting_finished/no_batches. priceline (default): Exports for audience 18478 failed with states: <(snapshotting_finished,no_batches)>
  Runs: `18478-google_adwords_11791-scheduled__2026-05-14T00:00:00+00:00`, `18478-microsoft_ads_11792-scheduled__2026-05-14T00:00:00+00:00`
- Showing 10 of 151 alert facts; see `indexes/alert_facts.json` for the full imported set.

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
