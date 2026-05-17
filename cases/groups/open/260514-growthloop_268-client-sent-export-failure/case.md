<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# growthloop_268 client-sent-export-failure

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `open`
Tags: `triage:needs_review`
Incidents: [Q3PW7IHI1KCDWS](https://growthloop.pagerduty.com/incidents/Q3PW7IHI1KCDWS)
Alerts: 1

## Current Summary

growthloop (default) - Audience 35826: Audience Export failure for 35826 sent to client.

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `growthloop_268`
- Audiences: `35826`
- Destinations: none
- State tuples: none
- Commands seen: `glcli --env prod bifrost pizza --audience-id 35826 --org-id 268`

Representative alerts:
- Q3PW7IHI1KCDWS/Q14N3EWLBRLVPF: 2026-05-14T17:15:33-07:00; growthloop_268; audience 35826. growthloop (default) - Audience 35826: Audience Export failure for 35826 sent to client.

## Export Checks

- Checks: 1.
- States: `blocked`=1
- Blockers seen: `snapshotting_error_requires_review`

Check evidence:
- chk_q3pw7ihi1kcdws_q14n3ewlbrlvpf (Q3PW7IHI1KCDWS/Q14N3EWLBRLVPF): state=`blocked`.
  Scope: env=prod; org=268; audience=35826.
  Command: `glcli --env prod bifrost pizza --audience-id 35826 --org-id 268`
  Blockers: `snapshotting_error_requires_review`
  Run 35826-google_adwords_21816-scheduled__2026-05-17T00:00:00+00:00: health=`blocked`; blockers=snapshotting_error_requires_review; created=2026-05-17T00:15:24.157494+00:00; snapshotting=snapshotting_error; export=no_batches; failed=0.

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
