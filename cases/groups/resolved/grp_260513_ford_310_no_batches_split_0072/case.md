<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# ford_310 no-batches split

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `resolved`
Tags: `triage:needs_review`, `evidence:retry-succeeded`
Incidents: [Q1TJJ4MEVOF1W3](https://growthloop.pagerduty.com/incidents/Q1TJJ4MEVOF1W3)
Alerts: 1

## Current Summary

Resolved: Ford audience 34010 reddit_ads had a failed-count alert on 2026-05-13, but later 2026-05-14 through 2026-05-16 runs succeeded with zero failures.

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `ford_310`
- Audiences: `34010`
- Destinations: `reddit_ads`
- State tuples: `snapshotting_finished/no_batches`
- Commands seen: `glcli --env prod bifrost pizza --audience-id 34010 --org-id 310`

Representative alerts:
- Q1TJJ4MEVOF1W3/Q1VGETGKE29BNK: 2026-05-13T07:57:15-07:00; ford_310; audience 34010; reddit_ads; snapshotting_finished/no_batches. ford (Marketing Production): Exports for audience 34010 failed with states: <(snapshotting_finished,no_batches)>
  Runs: `34010-dv360_20863-scheduled__2026-05-13T00:00:00+00:00`, `34010-facebook_20864-scheduled__2026-05-13T00:00:00+00:00`, `34010-pinterest_21757-scheduled__2026-05-13T00:00:00+00:00`, and 3 more

## Export Checks

- Checks: 1.
- States: `blocked`=1
- Blockers seen: `failed_export_count`

Check evidence:
- chk_q1tjj4mevof1w3_q1vgetgke29bnk (Q1TJJ4MEVOF1W3/Q1VGETGKE29BNK): state=`blocked`.
  Scope: env=prod; org=310; audience=34010; destination=reddit_ads.
  Checked runs: `34010-reddit_ads_21799-scheduled__2026-05-13T00:00:00+00:00`, `34010-pinterest_21757-scheduled__2026-05-13T00:00:00+00:00`, `34010-the_trade_desk_crm_20865-scheduled__2026-05-13T00:00:00+00:00`, `34010-tik_tok_streaming_21808-scheduled__2026-05-13T00:00:00+00:00`, and 2 more
  Command: `glcli --env prod bifrost pizza --audience-id 34010 --org-id 310`
  Blockers: `failed_export_count`
  Run 34010-reddit_ads_21799-scheduled__2026-05-13T00:00:00+00:00: health=`blocked`; blockers=failed_export_count; created=2026-05-13T00:27:01.228054+00:00; snapshotting=snapshotting_finished; export=export_finished; failed=16.

## Recent Evidence

- Ford audience 34010 reddit_ads had failed_export_count=16 on alert run 34010-reddit_ads_21799-scheduled__2026-05-13T00:00:00+00:00, but later scheduled runs recovered: 2026-05-14, 2026-05-15, and 2026-05-16 are snapshotting_finished/export_finished with zero failures. Latest checked row is 2026-05-16 00:44:14 UTC with total rows 194823, failures 0, rejects 3331.
  Source: `glcli bifrost pizza`; kind: `pizza`; captured: `2026-05-16T22:34:02.287Z`.
  Command: `glcli --env prod bifrost pizza --audience-id 34010 --org-id 310 --format json`

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
