<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# trumanshow_336 adobe-experience-platform export-error

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `open`
Tags: `triage:needs_review`
Incidents: [Q12A5QFIM3F9LN](https://growthloop.pagerduty.com/incidents/Q12A5QFIM3F9LN)
Alerts: 1

## Current Summary

trumanshow (VZN): Exports for audience 36199 failed with states: <(snapshotting_finished,export_error)>

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `trumanshow_336`
- Audiences: `36199`
- Destinations: `adobe_experience_platform`
- State tuples: `snapshotting_finished/export_error`
- Commands seen: `glcli --env prod bifrost pizza --audience-id 36199 --org-id 336`

Representative alerts:
- Q12A5QFIM3F9LN/Q05NTDX4NQ1HYU: 2026-05-14T08:08:31-07:00; trumanshow_336; audience 36199; adobe_experience_platform; snapshotting_finished/export_error. trumanshow (VZN): Exports for audience 36199 failed with states: <(snapshotting_finished,export_error)>
  Runs: `36199-adobe_experience_platform_22089-webapp__2026-05-08T13:13:49+00:00`

## Export Checks

- Checks: 1.
- States: `blocked`=1
- Blockers seen: `export_error`

Check evidence:
- chk_q12a5qfim3f9ln_q05ntdx4nq1hyu (Q12A5QFIM3F9LN/Q05NTDX4NQ1HYU): state=`blocked`.
  Scope: env=prod; org=336; audience=36199; endpoint=app_adobe_experience_platform_2175; destination=adobe_experience_platform.
  Checked runs: `36199-adobe_experience_platform_22089-webapp__2026-05-08T13:13:49+00:00`, `36199-adobe_experience_platform_22089-webapp__2026-05-08T13:13:49+00:00`
  Command: `glcli --env prod bifrost pizza --audience-id 36199 --org-id 336`
  Blockers: `export_error`, `export_error`
  Run 36199-adobe_experience_platform_22089-webapp__2026-05-08T13:13:49+00:00: health=`blocked`; blockers=export_error; created=2026-05-11T17:09:28.265578+00:00; snapshotting=snapshotting_finished; export=export_error; failed=0.
  Run 36199-adobe_experience_platform_22089-webapp__2026-05-08T13:13:49+00:00: health=`blocked`; blockers=export_error; created=2026-05-11T17:09:28.265578+00:00; snapshotting=snapshotting_finished; export=export_error; failed=0.

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
