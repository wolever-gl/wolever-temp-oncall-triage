<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# ford_310 client-sent-export-failure

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `open`
Tags: `triage:needs_review`, `triage:no-batches-zero-rows`
Incidents: [Q3HWKW0FS3VTHE](https://growthloop.pagerduty.com/incidents/Q3HWKW0FS3VTHE)
Alerts: 1

## Current Summary

Needs investigation: Ford audience 34059 is not a recovered client-sent duplicate; current 2026-05-16 Pizza rows across destinations are snapshotting_finished/no_batches with total_rows=0 and failures=0.

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `ford_310`
- Audiences: `34059`
- Destinations: none
- State tuples: none
- Commands seen: `glcli --env prod bifrost pizza --audience-id 34059 --org-id 310`

Representative alerts:
- Q3HWKW0FS3VTHE/Q2BK8G803N1MIK: 2026-05-14T08:06:41-07:00; ford_310; audience 34059. ford (Marketing Production) - Audience 34059: Audience Export failure for 34059 sent to client.

## Export Checks

- Checks: 1.
- States: `blocked`=1
- Blockers seen: `missing_run_identity`

Check evidence:
- chk_q3hwkw0fs3vthe_q2bk8g803n1mik (Q3HWKW0FS3VTHE/Q2BK8G803N1MIK): state=`blocked`.
  Scope: env=prod; org=310; audience=34059.
  Command: `glcli --env prod bifrost pizza --audience-id 34059 --org-id 310`
  Blockers: `missing_run_identity`

## Recent Evidence

- Audience 34059 remains zero-row/no-batches rather than recovered: latest 2026-05-16 runs for DV360, Facebook, TTD, TikTok, Reddit, and Pinterest are all snapshotting_finished/no_batches with total_rows=0 and failures=0. This needs manual investigation of why the audience is empty/no-batch across destinations.
  Source: `glcli prod bifrost pizza`; kind: `pizza`; captured: `2026-05-16T22:39:00.571Z`.
  Command: `PATH=/Users/wolever/.local/share/mise/installs/gcloud/562.0.0/bin:$PATH glcli --env prod bifrost pizza --audience-id 34059 --org-id 310 --format=json`

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
