<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# ford_310 dv360 export-error

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `open`
Tags: `triage:needs_review`, `triage:dv360-export-error`
Incidents: [Q1TJJ4MEVOF1W3](https://growthloop.pagerduty.com/incidents/Q1TJJ4MEVOF1W3), [Q3HWKW0FS3VTHE](https://growthloop.pagerduty.com/incidents/Q3HWKW0FS3VTHE)
Alerts: 4

## Current Summary

Needs investigation: Ford audience 32921 still fails DV360 on the latest 2026-05-16 scheduled run (export_error, failures=9580), while sibling destinations are export_finished. Audience 34062 was split out as recovered.

## Alert Scope

- Alert facts: 4 imported, 4 linked to this group.
- Orgs: `ford_310`
- Audiences: `32921`, `34062`
- Destinations: `dv360`
- State tuples: `export_error`
- Commands seen: `glcli --env prod bifrost pizza --audience-id 32921 --org-id 310`, `glcli --env prod bifrost pizza --audience-id 34062 --org-id 310`

Representative alerts:
- Q1TJJ4MEVOF1W3/Q2SYBH7W8MGPL4: 2026-05-14T07:49:25-07:00; ford_310; audience 34062. ford (Marketing Production) - Audience 34062: Audience Export failure for 34062 sent to client.
- Q1TJJ4MEVOF1W3/Q1DMVWD0F3T9DI: 2026-05-14T07:52:48-07:00; ford_310; audience 32921. ford (Marketing Production) - Audience 32921: Audience Export failure for 32921 sent to client.
- Q3HWKW0FS3VTHE/Q3Q4N4M8UOV684: 2026-05-14T07:57:56-07:00; ford_310; audience 32921; dv360; export_error. ford (Marketing Production): Exports for audience 32921 failed with states: <(,export_error)>
  Runs: `4586c1f25f5e00da3db3dcf3da099324`
- Q3HWKW0FS3VTHE/Q2TVZ6ZMW55S6Y: 2026-05-14T07:58:04-07:00; ford_310; audience 34062; dv360; export_error. ford (Marketing Production): Exports for audience 34062 failed with states: <(,export_error)>
  Runs: `d9e26d081f921aafeb5f8bdd4bf6d8c5`

## Export Checks

- Checks: 4.
- States: `blocked`=2, `healthy_closed`=2
- Blockers seen: `missing_pizza_row`

Check evidence:
- chk_q1tjj4mevof1w3_q1dmvwd0f3t9di (Q1TJJ4MEVOF1W3/Q1DMVWD0F3T9DI): state=`healthy_closed`.
  Scope: env=prod; org=310; audience=32921.
  Command: `glcli --env prod bifrost pizza --audience-id 32921 --org-id 310`
  Run 32921-facebook_20870-scheduled__2026-05-16T00:00:00+00:00: health=`healthy`; created=2026-05-16T00:35:23.659898+00:00; snapshotting=snapshotting_finished; export=export_finished; failed=0.
- chk_q1tjj4mevof1w3_q2sybh7w8mgpl4 (Q1TJJ4MEVOF1W3/Q2SYBH7W8MGPL4): state=`healthy_closed`.
  Scope: env=prod; org=310; audience=34062.
  Command: `glcli --env prod bifrost pizza --audience-id 34062 --org-id 310`
  Run 34062-facebook_20861-scheduled__2026-05-16T00:00:00+00:00: health=`healthy`; created=2026-05-16T00:49:52.777650+00:00; snapshotting=snapshotting_finished; export=export_finished; failed=0.
- chk_q3hwkw0fs3vthe_q2tvz6zmw55s6y (Q3HWKW0FS3VTHE/Q2TVZ6ZMW55S6Y): state=`blocked`.
  Scope: env=prod; org=310; audience=34062; endpoint=app_dv360_1807; destination=dv360.
  Checked runs: `d9e26d081f921aafeb5f8bdd4bf6d8c5`
  Command: `glcli --env prod bifrost pizza --audience-id 34062 --org-id 310`
  Blockers: `missing_pizza_row`
  Run d9e26d081f921aafeb5f8bdd4bf6d8c5: health=`missing`; blockers=missing_pizza_row.
- chk_q3hwkw0fs3vthe_q3q4n4m8uov684 (Q3HWKW0FS3VTHE/Q3Q4N4M8UOV684): state=`blocked`.
  Scope: env=prod; org=310; audience=32921; endpoint=app_dv360_1807; destination=dv360.
  Checked runs: `4586c1f25f5e00da3db3dcf3da099324`
  Command: `glcli --env prod bifrost pizza --audience-id 32921 --org-id 310`
  Blockers: `missing_pizza_row`
  Run 4586c1f25f5e00da3db3dcf3da099324: health=`missing`; blockers=missing_pizza_row.

## Recent Evidence

- Audience 32921 is still failing DV360: latest 2026-05-16 DV360 run 32921-dv360_20869-scheduled__2026-05-16T00:00:00+00:00 is export_error with total_rows=1938441, failures=9580, rejects=89845. Other 2026-05-16 destinations for this audience are export_finished.
  Source: `glcli prod bifrost pizza`; kind: `pizza`; captured: `2026-05-16T22:38:40.036Z`.
  Command: `PATH=/Users/wolever/.local/share/mise/installs/gcloud/562.0.0/bin:$PATH glcli --env prod bifrost pizza --audience-id 32921 --org-id 310 --format=json`

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
