<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# ford_310 dv360 export-error split

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `resolved`
Tags: `triage:needs_review`, `resolved:recovered`
Incidents: [Q3HWKW0FS3VTHE](https://growthloop.pagerduty.com/incidents/Q3HWKW0FS3VTHE)
Alerts: 1

## Current Summary

Resolved: audience 34062 DV360 recovered; latest 2026-05-16 DV360 run export_finished with zero failures.

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `ford_310`
- Audiences: `34062`
- Destinations: `dv360`
- State tuples: `export_error`
- Commands seen: `glcli --env prod bifrost pizza --audience-id 34062 --org-id 310`

Representative alerts:
- Q3HWKW0FS3VTHE/Q2TVZ6ZMW55S6Y: 2026-05-14T07:58:04-07:00; ford_310; audience 34062; dv360; export_error. ford (Marketing Production): Exports for audience 34062 failed with states: <(,export_error)>
  Runs: `d9e26d081f921aafeb5f8bdd4bf6d8c5`

## Export Checks

- Checks: 1.
- States: `blocked`=1
- Blockers seen: `missing_pizza_row`

Check evidence:
- chk_q3hwkw0fs3vthe_q2tvz6zmw55s6y (Q3HWKW0FS3VTHE/Q2TVZ6ZMW55S6Y): state=`blocked`.
  Scope: env=prod; org=310; audience=34062; endpoint=app_dv360_1807; destination=dv360.
  Checked runs: `d9e26d081f921aafeb5f8bdd4bf6d8c5`
  Command: `glcli --env prod bifrost pizza --audience-id 34062 --org-id 310`
  Blockers: `missing_pizza_row`
  Run d9e26d081f921aafeb5f8bdd4bf6d8c5: health=`missing`; blockers=missing_pizza_row.

## Recent Evidence

- Audience 34062 DV360 recovered after the 2026-05-14 alert: Pizza shows 34062-dv360_20860-scheduled__2026-05-16T00:00:00+00:00 export_finished at 2026-05-16 00:49:16 UTC with total_rows=43812 and failures=0.
  Source: `glcli prod bifrost pizza`; kind: `pizza`; captured: `2026-05-16T22:38:21.565Z`.
  Command: `PATH=/Users/wolever/.local/share/mise/installs/gcloud/562.0.0/bin:/opt/homebrew/bin:/Users/wolever/bin:/opt/homebrew/bin:/opt/homebrew/sbin:/usr/local/bin:/System/Cryptexes/App/usr/bin:/usr/bin:/bin:/usr/sbin:/sbin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/local/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/appleinternal/bin:/Library/Apple/usr/bin:/Users/wolever/.codex/tmp/arg0/codex-arg0l2tI1p:/Users/wolever/.bun/bin:/Users/wolever/.opencode/bin:/Users/wolever/.local/share/mise/installs/sops/latest:/Users/wolever/.local/share/mise/installs/age/latest/age:/Users/wolever/.cargo/bin:/Users/wolever/.local/share/mise/installs/go/1.26.1/bin:/Users/wolever/.local/share/mise/installs/node/latest/bin:/Users/wolever/.local/share/mise/installs/python/latest/bin:/Users/wolever/.local/share/mise/installs/ruby/latest/bin:/Users/wolever/.local/share/mise/installs/uv/latest/uv-aarch64-apple-darwin:/Users/wolever/.local/share/mise/installs/npm-portless/latest/bin:/Users/wolever/bin:/Users/wolever/.local/bin:/Applications/Codex.app/Contents/Resources:/Users/wolever/.local/bin glcli --env prod bifrost pizza --audience-id 34062 --org-id 310 --format=json`

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
