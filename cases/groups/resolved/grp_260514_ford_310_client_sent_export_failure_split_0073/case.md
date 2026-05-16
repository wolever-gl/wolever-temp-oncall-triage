<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# ford_310 client-sent-export-failure split

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `resolved`
Tags: `triage:needs_review`, `resolved:recovered`, `resolved:merged`
Incidents: [Q1TJJ4MEVOF1W3](https://growthloop.pagerduty.com/incidents/Q1TJJ4MEVOF1W3)
Alerts: 1

## Current Summary

Merged into grp_260514_ford_310_dv360_export_error_split_0074: The client-sent Ford audience 34062 alert is the notification counterpart of the reopened DV360 delta redrop-review case; track the remediation decision in the DV360 case.

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `ford_310`
- Audiences: `34062`
- Destinations: none
- State tuples: none
- Commands seen: `glcli --env prod bifrost pizza --audience-id 34062 --org-id 310`

Representative alerts:
- Q1TJJ4MEVOF1W3/Q2SYBH7W8MGPL4: 2026-05-14T07:49:25-07:00; ford_310; audience 34062. ford (Marketing Production) - Audience 34062: Audience Export failure for 34062 sent to client.

## Export Checks

- Checks: 1.
- States: `blocked`=1
- Blockers seen: `missing_run_identity`

Check evidence:
- chk_q1tjj4mevof1w3_q2sybh7w8mgpl4 (Q1TJJ4MEVOF1W3/Q2SYBH7W8MGPL4): state=`blocked`.
  Scope: env=prod; org=310; audience=34062.
  Command: `glcli --env prod bifrost pizza --audience-id 34062 --org-id 310`
  Blockers: `missing_run_identity`

## Recent Evidence

- Audience 34062 client-sent alert is recovered: Pizza shows the latest 2026-05-16 runs all export_finished; DV360 run 34062-dv360_20860-scheduled__2026-05-16T00:00:00+00:00 finished at 2026-05-16 00:49:16 UTC with failures=0.
  Source: `glcli prod bifrost pizza`; kind: `pizza`; captured: `2026-05-16T22:38:21.565Z`.
  Command: `PATH=/Users/wolever/.local/share/mise/installs/gcloud/562.0.0/bin:/opt/homebrew/bin:/Users/wolever/bin:/opt/homebrew/bin:/opt/homebrew/sbin:/usr/local/bin:/System/Cryptexes/App/usr/bin:/usr/bin:/bin:/usr/sbin:/sbin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/local/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/appleinternal/bin:/Library/Apple/usr/bin:/Users/wolever/.codex/tmp/arg0/codex-arg0l2tI1p:/Users/wolever/.bun/bin:/Users/wolever/.opencode/bin:/Users/wolever/.local/share/mise/installs/sops/latest:/Users/wolever/.local/share/mise/installs/age/latest/age:/Users/wolever/.cargo/bin:/Users/wolever/.local/share/mise/installs/go/1.26.1/bin:/Users/wolever/.local/share/mise/installs/node/latest/bin:/Users/wolever/.local/share/mise/installs/python/latest/bin:/Users/wolever/.local/share/mise/installs/ruby/latest/bin:/Users/wolever/.local/share/mise/installs/uv/latest/uv-aarch64-apple-darwin:/Users/wolever/.local/share/mise/installs/npm-portless/latest/bin:/Users/wolever/bin:/Users/wolever/.local/bin:/Applications/Codex.app/Contents/Resources:/Users/wolever/.local/bin glcli --env prod bifrost pizza --audience-id 34062 --org-id 310 --format=json`

## Next Action

Follow target group grp_260514_ford_310_dv360_export_error_split_0074.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
