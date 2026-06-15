<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# ford_310 dv360 export-error split

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `monitoring`
Tags: `triage:needs_review`, `resolved:recovered`, `triage:delta-redrop-review`, `monitoring:dv360-redrop-rate-limited`, `monitoring:dv360-redrop-processing`
Incidents: [Q1TJJ4MEVOF1W3](https://growthloop.pagerduty.com/incidents/Q1TJJ4MEVOF1W3), [Q3HWKW0FS3VTHE](https://growthloop.pagerduty.com/incidents/Q3HWKW0FS3VTHE)
Alerts: 2

## Current Summary

Monitoring: Ford 34062 DV360 re-drop is now reflected in Pizza as export_processing with zero failures.

## Alert Scope

- Alert facts: 2 imported, 2 linked to this group.
- Orgs: `ford_310`
- Audiences: `34062`
- Destinations: `dv360`
- State tuples: `export_error`
- Commands seen: `glcli --env prod bifrost pizza --audience-id 34062 --org-id 310`

Representative alerts:
- Q1TJJ4MEVOF1W3/Q2SYBH7W8MGPL4: 2026-05-14T07:49:25-07:00; ford_310; audience 34062. ford (Marketing Production) - Audience 34062: Audience Export failure for 34062 sent to client.
- Q3HWKW0FS3VTHE/Q2TVZ6ZMW55S6Y: 2026-05-14T07:58:04-07:00; ford_310; audience 34062; dv360; export_error. ford (Marketing Production): Exports for audience 34062 failed with states: <(,export_error)>
  Runs: `d9e26d081f921aafeb5f8bdd4bf6d8c5`

## Export Checks

- Checks: 2.
- States: `healthy_closed`=1, `open`=1
- Blockers seen: `evidence_unavailable`

Check evidence:
- chk_q1tjj4mevof1w3_q2sybh7w8mgpl4 (Q1TJJ4MEVOF1W3/Q2SYBH7W8MGPL4): state=`healthy_closed`.
  Scope: env=prod; org=310; audience=34062.
  Command: `glcli --env prod bifrost pizza --audience-id 34062 --org-id 310`
  Run 34062-facebook_20861-scheduled__2026-05-16T00:00:00+00:00: health=`healthy`; created=2026-05-16T00:49:52.777650+00:00; snapshotting=snapshotting_finished; export=export_finished; failed=0.
- chk_q3hwkw0fs3vthe_q2tvz6zmw55s6y (Q3HWKW0FS3VTHE/Q2TVZ6ZMW55S6Y): state=`open`, next_check_at=`2026-05-18T20:18:24.284Z`.
  Scope: env=prod; org=310; audience=34062; endpoint=app_dv360_1807; destination=dv360.
  Checked runs: `d9e26d081f921aafeb5f8bdd4bf6d8c5`
  Command: `glcli --env prod bifrost pizza --audience-id 34062 --org-id 310`
  Blockers: `evidence_unavailable`

## Recent Evidence

- Monitoring check-in: Ford audience 34062 DV360 latest row is 2026-05-16 22:56:24 UTC, run 34062-dv360_20860-scheduled__2026-05-14T00:00:00+00:00, snapshotting_finished/export_processing with zero failures after the approved re-drop. Keep monitoring until export_finished or terminal failure.
  Source: `monitoring preflight/manual Pizza`; kind: `pizza`; captured: `2026-05-16T23:04:24.177Z`.
  Command: `glcli --env prod bifrost pizza --audience-id 34062 --org-id 310 --format json | select dv360 latest`
- Approved re-drop of Ford audience 34062 DV360 historical delta file. Bifrost accepted the ingest at 2026-05-16 22:56:21Z, found 1 file matching the metadata pattern, created replacement batch 10d20a20-efd9-43d3-8232-04c6f1a724cd for export run 34062-dv360_20860-scheduled__2026-05-14T00:00:00+00:00, and started DV360 jobs for segments 0-4. Follow-up logs showed Google Audience Partner rate limiting with Bifrost scheduling retries, so this is now active processing/monitoring rather than unresolved manual triage.
  Source: `glcli bifrost export / gcloud logs`; kind: `remediation`; captured: `2026-05-16T22:58:10.096Z`.
  Command: `glcli --env prod bifrost export --external-bucket-secret ford_310_external_bucket gs://bkt-tfstate-cdmgl-ext-p/exports/ford_310/dv360/app_dv360_1807/34062__9350017290__20860_20260514004037-000000000000.avro`
- Delta redrop runbook applies. Scoped logs show Ford audience 34062 DV360 uses export_type=deltas and snapshotting delta tables. The failed 2026-05-14 DV360 run completed delta_history_write_up, unload wrote gs://bkt-tfstate-cdmgl-ext-p/exports/ford_310/dv360/app_dv360_1807/34062__9350017290__20860_20260514004037-*.avro, and unloaded_deltas_write completed with status_code=200 for request b83b3288-9f1a-46a8-9db5-b3efa1750c7e. Pizza still marked that run export_error with 9513 failures. Per snapshotting-delta-recovery, later 2026-05-16 success alone is not sufficient because generated delta files were marked unloaded; this needs human redrop/retry review.
  Source: `flywheel-prod-328213`; kind: `gcloud_logs`; captured: `2026-05-16T22:50:04.373Z`.
  Command: `gcloud logging read scoped to ford_310 audience 34062 dv360_20860 on 2026-05-14 and 2026-05-16`
- Audience 34062 DV360 recovered after the 2026-05-14 alert: Pizza shows 34062-dv360_20860-scheduled__2026-05-16T00:00:00+00:00 export_finished at 2026-05-16 00:49:16 UTC with total_rows=43812 and failures=0.
  Source: `glcli prod bifrost pizza`; kind: `pizza`; captured: `2026-05-16T22:38:21.565Z`.
  Command: `PATH=/Users/wolever/.local/share/mise/installs/gcloud/562.0.0/bin:/opt/homebrew/bin:/Users/wolever/bin:/opt/homebrew/bin:/opt/homebrew/sbin:/usr/local/bin:/System/Cryptexes/App/usr/bin:/usr/bin:/bin:/usr/sbin:/sbin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/local/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/appleinternal/bin:/Library/Apple/usr/bin:/Users/wolever/.codex/tmp/arg0/codex-arg0l2tI1p:/Users/wolever/.bun/bin:/Users/wolever/.opencode/bin:/Users/wolever/.local/share/mise/installs/sops/latest:/Users/wolever/.local/share/mise/installs/age/latest/age:/Users/wolever/.cargo/bin:/Users/wolever/.local/share/mise/installs/go/1.26.1/bin:/Users/wolever/.local/share/mise/installs/node/latest/bin:/Users/wolever/.local/share/mise/installs/python/latest/bin:/Users/wolever/.local/share/mise/installs/ruby/latest/bin:/Users/wolever/.local/share/mise/installs/uv/latest/uv-aarch64-apple-darwin:/Users/wolever/.local/share/mise/installs/npm-portless/latest/bin:/Users/wolever/bin:/Users/wolever/.local/bin:/Applications/Codex.app/Contents/Resources:/Users/wolever/.local/bin glcli --env prod bifrost pizza --audience-id 34062 --org-id 310 --format=json`

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
