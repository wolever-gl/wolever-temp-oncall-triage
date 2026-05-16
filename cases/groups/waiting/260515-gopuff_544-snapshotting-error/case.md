<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# gopuff_544 snapshotting-error

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `waiting`
Tags: `triage:needs_review`, `triage:client_schema_missing`, `waiting:client_schema`
Incidents: [Q1X9CE7BIDK9MV](https://growthloop.pagerduty.com/incidents/Q1X9CE7BIDK9MV)
Alerts: 1

## Current Summary

Waiting on support/client remediation for missing source column CORE.GOPUFF_ORDER_ITEMS.CLASS in GoPuff Snowflake source schema; support thread opened.

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `gopuff_544`
- Audiences: `36168`
- Destinations: `facebook`
- State tuples: `snapshotting_error/no_batches`
- Commands seen: `glcli --env prod bifrost pizza --audience-id 36168 --org-id 544`

Representative alerts:
- Q1X9CE7BIDK9MV/Q2FR98BS698HII: 2026-05-15T08:23:25-07:00; gopuff_544; audience 36168; facebook; snapshotting_error/no_batches. gopuff (default): Exports for audience 36168 failed with states: <(snapshotting_error,no_batches)>
  Runs: `36168-facebook_22063-scheduled__2026-05-15T00:00:00+00:00`

## Recent Evidence

- Client support follow-up started for missing source schema field CORE.GOPUFF_ORDER_ITEMS.CLASS; waiting on support/client remediation.
  Source: `slack`; kind: `support_thread`; captured: `2026-05-16T20:52:46.590Z`.
  Links: [Support thread](https://flywheeltechnologies.slack.com/archives/C02J2RJ6VSL/p1778964420710189).
- Audience 36168 facebook_22063 still fails through 2026-05-16. Pizza and scoped logs show non-retryable pre_snapshotting_check validation failure: CORE.GOPUFF_ORDER_ITEMS.CLASS is referenced by the audience query but is absent from the Snowflake source schema. Looks client/source-schema or audience-definition related, not auto-recoverable.
  Source: `agent read-only glcli/gcloud`; kind: `triage`; captured: `2026-05-16T20:36:53.420Z`.

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
