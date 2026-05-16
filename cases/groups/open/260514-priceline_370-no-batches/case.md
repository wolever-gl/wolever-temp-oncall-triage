<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# priceline_370 no-batches

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `open`
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

## Export Checks

- Checks: 151.
- States: `blocked`=62, `healthy_closed`=89
- Blockers seen: `destination_mismatch`, `failed_export_count`

Check evidence:
- chk_q1yqv4erkaivmf_q00wz1wweqkptm (Q1YQV4ERKAIVMF/Q00WZ1WWEQKPTM): state=`healthy_closed`.
  Scope: env=prod; org=370; audience=33819; destination=google_adwords.
  Checked runs: `33819-google_adwords_20698-scheduled__2026-05-14T00:00:00+00:00`
  Command: `glcli --env prod bifrost pizza --audience-id 33819 --org-id 370`
  Run 33819-google_adwords_20698-scheduled__2026-05-14T00:00:00+00:00: health=`healthy`; created=2026-05-14T00:18:24.657725+00:00; snapshotting=snapshotting_finished; export=export_finished; failed=0.
- chk_q1yqv4erkaivmf_q02nle8nn299pr (Q1YQV4ERKAIVMF/Q02NLE8NN299PR): state=`blocked`.
  Scope: env=prod; org=370; audience=671; destination=iterable_object.
  Checked runs: `671-iterable_object_671-scheduled__2026-05-12T17:00:00+00:00`
  Command: `glcli --env prod bifrost pizza --audience-id 671 --org-id 370`
  Blockers: `failed_export_count`
  Run 671-iterable_object_671-scheduled__2026-05-12T17:00:00+00:00: health=`blocked`; blockers=failed_export_count; created=2026-05-13T17:08:31.890041+00:00; snapshotting=snapshotting_finished; export=export_finished; failed=5237.
- chk_q1yqv4erkaivmf_q02t2crnhmdygp (Q1YQV4ERKAIVMF/Q02T2CRNHMDYGP): state=`blocked`.
  Scope: env=prod; org=370; audience=32411; destination=facebook.
  Checked runs: `32411-facebook_19862-scheduled__2026-05-14T00:00:00+00:00`, `32411-snapchat_19863-scheduled__2026-05-14T00:00:00+00:00`, `32411-tik_tok_19864-scheduled__2026-05-14T00:00:00+00:00`
  Command: `glcli --env prod bifrost pizza --audience-id 32411 --org-id 370`
  Blockers: `destination_mismatch`, `destination_mismatch`
  Run 32411-facebook_19862-scheduled__2026-05-14T00:00:00+00:00: health=`healthy`; created=2026-05-14T01:25:50.877538+00:00; snapshotting=snapshotting_finished; export=export_finished; failed=0.
  Run 32411-snapchat_19863-scheduled__2026-05-14T00:00:00+00:00: health=`blocked`; blockers=destination_mismatch; created=2026-05-14T01:26:14.093074+00:00; snapshotting=snapshotting_finished; export=export_finished; failed=0.
  Run 32411-tik_tok_19864-scheduled__2026-05-14T00:00:00+00:00: health=`blocked`; blockers=destination_mismatch; created=2026-05-14T01:26:14.099833+00:00; snapshotting=snapshotting_finished; export=export_finished; failed=0.
- chk_q1yqv4erkaivmf_q03kgz1pfd2o15 (Q1YQV4ERKAIVMF/Q03KGZ1PFD2O15): state=`blocked`.
  Scope: env=prod; org=370; audience=18486; destination=microsoft_ads.
  Checked runs: `18486-microsoft_ads_11776-scheduled__2026-05-14T00:00:00+00:00`, `18486-google_adwords_11775-scheduled__2026-05-14T00:00:00+00:00`
  Command: `glcli --env prod bifrost pizza --audience-id 18486 --org-id 370`
  Blockers: `destination_mismatch`
  Run 18486-microsoft_ads_11776-scheduled__2026-05-14T00:00:00+00:00: health=`healthy`; created=2026-05-14T00:29:08.741447+00:00; snapshotting=snapshotting_finished; export=export_finished; failed=0.
  Run 18486-google_adwords_11775-scheduled__2026-05-14T00:00:00+00:00: health=`blocked`; blockers=destination_mismatch; created=2026-05-14T00:29:08.788900+00:00; snapshotting=snapshotting_finished; export=export_finished; failed=0.
- chk_q1yqv4erkaivmf_q04m7qqsuex4gp (Q1YQV4ERKAIVMF/Q04M7QQSUEX4GP): state=`healthy_closed`.
  Scope: env=prod; org=370; audience=23897; destination=gam360.
  Checked runs: `23897-gam360_15464-scheduled__2026-05-14T00:00:00+00:00`
  Command: `glcli --env prod bifrost pizza --audience-id 23897 --org-id 370`
  Run 23897-gam360_15464-scheduled__2026-05-14T00:00:00+00:00: health=`healthy`; created=2026-05-14T00:58:15.521985+00:00; snapshotting=snapshotting_finished; export=export_finished; failed=0.
- chk_q1yqv4erkaivmf_q04tbdvv318r2n (Q1YQV4ERKAIVMF/Q04TBDVV318R2N): state=`healthy_closed`.
  Scope: env=prod; org=370; audience=24019; destination=gam360.
  Checked runs: `24019-gam360_15467-scheduled__2026-05-14T00:00:00+00:00`
  Command: `glcli --env prod bifrost pizza --audience-id 24019 --org-id 370`
  Run 24019-gam360_15467-scheduled__2026-05-14T00:00:00+00:00: health=`healthy`; created=2026-05-14T00:59:14.415704+00:00; snapshotting=snapshotting_finished; export=export_finished; failed=0.
- chk_q1yqv4erkaivmf_q053pdziz78ack (Q1YQV4ERKAIVMF/Q053PDZIZ78ACK): state=`healthy_closed`.
  Scope: env=prod; org=370; audience=23722; destination=gam360.
  Checked runs: `23722-gam360_15469-scheduled__2026-05-14T00:00:00+00:00`
  Command: `glcli --env prod bifrost pizza --audience-id 23722 --org-id 370`
  Run 23722-gam360_15469-scheduled__2026-05-14T00:00:00+00:00: health=`healthy`; created=2026-05-14T01:12:07.822311+00:00; snapshotting=snapshotting_finished; export=export_finished; failed=0.
- chk_q1yqv4erkaivmf_q05l0szm3f4dwy (Q1YQV4ERKAIVMF/Q05L0SZM3F4DWY): state=`blocked`.
  Scope: env=prod; org=370; audience=18485; destination=google_adwords.
  Checked runs: `18485-google_adwords_11777-scheduled__2026-05-14T00:00:00+00:00`, `18485-microsoft_ads_11778-scheduled__2026-05-14T00:00:00+00:00`
  Command: `glcli --env prod bifrost pizza --audience-id 18485 --org-id 370`
  Blockers: `destination_mismatch`
  Run 18485-google_adwords_11777-scheduled__2026-05-14T00:00:00+00:00: health=`healthy`; created=2026-05-14T00:28:43.776163+00:00; snapshotting=snapshotting_finished; export=export_finished; failed=0.
  Run 18485-microsoft_ads_11778-scheduled__2026-05-14T00:00:00+00:00: health=`blocked`; blockers=destination_mismatch; created=2026-05-14T00:29:08.742497+00:00; snapshotting=snapshotting_finished; export=export_finished; failed=0.
- chk_q1yqv4erkaivmf_q05yt5m83l51du (Q1YQV4ERKAIVMF/Q05YT5M83L51DU): state=`blocked`.
  Scope: env=prod; org=370; audience=18589; destination=microsoft_ads.
  Checked runs: `18589-microsoft_ads_11756-scheduled__2026-05-14T00:00:00+00:00`, `18589-google_adwords_11755-scheduled__2026-05-14T00:00:00+00:00`
  Command: `glcli --env prod bifrost pizza --audience-id 18589 --org-id 370`
  Blockers: `destination_mismatch`
  Run 18589-microsoft_ads_11756-scheduled__2026-05-14T00:00:00+00:00: health=`healthy`; created=2026-05-14T00:39:14.318928+00:00; snapshotting=snapshotting_finished; export=export_finished; failed=0.
  Run 18589-google_adwords_11755-scheduled__2026-05-14T00:00:00+00:00: health=`blocked`; blockers=destination_mismatch; created=2026-05-14T00:40:52.462959+00:00; snapshotting=snapshotting_finished; export=export_finished; failed=0.
- chk_q1yqv4erkaivmf_q066sp19m6sjt4 (Q1YQV4ERKAIVMF/Q066SP19M6SJT4): state=`blocked`.
  Scope: env=prod; org=370; audience=18636; destination=google_adwords.
  Checked runs: `18636-google_adwords_11815-scheduled__2026-05-14T00:00:00+00:00`, `18636-microsoft_ads_11816-scheduled__2026-05-14T00:00:00+00:00`
  Command: `glcli --env prod bifrost pizza --audience-id 18636 --org-id 370`
  Blockers: `destination_mismatch`
  Run 18636-google_adwords_11815-scheduled__2026-05-14T00:00:00+00:00: health=`healthy`; created=2026-05-14T01:21:45.077993+00:00; snapshotting=snapshotting_finished; export=export_finished; failed=0.
  Run 18636-microsoft_ads_11816-scheduled__2026-05-14T00:00:00+00:00: health=`blocked`; blockers=destination_mismatch; created=2026-05-14T01:21:45.079875+00:00; snapshotting=snapshotting_finished; export=export_finished; failed=0.
- Showing 10 of 151 checks; see `indexes/checks.json` and `checks/*/check.json` for the full evidence set.

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
