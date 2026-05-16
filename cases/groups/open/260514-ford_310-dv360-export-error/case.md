<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# ford_310 dv360 export-error

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `open`
Tags: `triage:needs_review`
Incidents: [Q3HWKW0FS3VTHE](https://growthloop.pagerduty.com/incidents/Q3HWKW0FS3VTHE)
Alerts: 2

## Current Summary

ford (Marketing Production): Exports for audience 34062 failed with states: <(,export_error)>

## Alert Scope

- Alert facts: 2 imported, 2 linked to this group.
- Orgs: `ford_310`
- Audiences: `32921`, `34062`
- Destinations: `dv360`
- State tuples: `export_error`
- Commands seen: `glcli --env prod bifrost pizza --audience-id 32921 --org-id 310`, `glcli --env prod bifrost pizza --audience-id 34062 --org-id 310`

Representative alerts:
- Q3HWKW0FS3VTHE/Q3Q4N4M8UOV684: 2026-05-14T07:57:56-07:00; ford_310; audience 32921; dv360; export_error. ford (Marketing Production): Exports for audience 32921 failed with states: <(,export_error)>
  Runs: `4586c1f25f5e00da3db3dcf3da099324`
- Q3HWKW0FS3VTHE/Q2TVZ6ZMW55S6Y: 2026-05-14T07:58:04-07:00; ford_310; audience 34062; dv360; export_error. ford (Marketing Production): Exports for audience 34062 failed with states: <(,export_error)>
  Runs: `d9e26d081f921aafeb5f8bdd4bf6d8c5`

## Export Checks

- Checks: 2.
- States: `blocked`=2
- Blockers seen: `missing_pizza_row`

Check evidence:
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

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
