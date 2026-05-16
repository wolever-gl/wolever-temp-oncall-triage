<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# 378 client-sent-export-failure

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `resolved`
Tags: `triage:needs_review`, `resolved:merged`
Incidents: [Q1QD2CX8MRAYBW](https://growthloop.pagerduty.com/incidents/Q1QD2CX8MRAYBW)
Alerts: 1

## Current Summary

Merged into 260515-378-snapshotting-error: Client-sent SignalRoute 891 alert is the notification counterpart of the active Cincinnati Reds snapshotting-error case for the same incident/org/audience; fresh preflight still shows the latest same-scope run blocked by snapshotting_error_requires_review.

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `378`
- Audiences: `891`
- Destinations: none
- State tuples: none
- Commands seen: `glcli --env prod bifrost pizza --audience-id 891 --org-id 378`

Representative alerts:
- Q1QD2CX8MRAYBW/Q3AS52WT001FD8: 2026-05-14T18:01:37-07:00; 378; audience 891. Cincinnati Reds (default) - SignalRoute 891: SignalRoute Export failure for 891 sent to client.

## Export Checks

- Checks: 1.
- States: `blocked`=1
- Blockers seen: `snapshotting_error_requires_review`

Check evidence:
- chk_q1qd2cx8mraybw_q3as52wt001fd8 (Q1QD2CX8MRAYBW/Q3AS52WT001FD8): state=`blocked`.
  Scope: env=prod; org=378; audience=891.
  Command: `glcli --env prod bifrost pizza --audience-id 891 --org-id 378`
  Blockers: `snapshotting_error_requires_review`
  Run 891-dynamics_object_891-scheduled__2026-05-16T22:00:00+00:00: health=`blocked`; blockers=snapshotting_error_requires_review; created=2026-05-16T23:01:35.303004+00:00; snapshotting=snapshotting_error; export=no_batches; failed=0.

## Next Action

Follow target group 260515-378-snapshotting-error.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
