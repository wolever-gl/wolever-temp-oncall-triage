<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# birchwood_274 salesforce-audience export-error

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `open`
Tags: `triage:needs_review`
Incidents: [Q3PJ7W2K3Y9LJV](https://growthloop.pagerduty.com/incidents/Q3PJ7W2K3Y9LJV)
Alerts: 2

## Current Summary

birchwood (default): Exports for signal 723 failed with states: <(snapshotting_finished,export_error)>

## Alert Scope

- Alert facts: 2 imported, 2 linked to this group.
- Orgs: `birchwood_274`
- Audiences: `723`
- Destinations: `salesforce_audience_object`
- State tuples: `snapshotting_finished/export_error`
- Commands seen: `glcli --env prod bifrost pizza --audience-id 723 --org-id 274`

Representative alerts:
- Q3PJ7W2K3Y9LJV/Q0S5D7L5PK1NBX: 2026-05-14T18:28:16-07:00; birchwood_274; audience 723. birchwood (default) - SignalRoute 723: SignalRoute Export failure for 723 sent to client.
- Q3PJ7W2K3Y9LJV/Q15X94N0MBRAVV: 2026-05-15T08:53:02-07:00; birchwood_274; audience 723; salesforce_audience_object; snapshotting_finished/export_error. birchwood (default): Exports for signal 723 failed with states: <(snapshotting_finished,export_error)>
  Runs: `723-salesforce_audience_object_723-scheduled__2026-05-14T00:00:00+00:00`

## Export Checks

- Checks: 2.
- States: `blocked`=2
- Blockers seen: `export_error`, `failed_export_count`

Check evidence:
- chk_q3pj7w2k3y9ljv_q0s5d7l5pk1nbx (Q3PJ7W2K3Y9LJV/Q0S5D7L5PK1NBX): state=`blocked`.
  Scope: env=prod; org=274; audience=723.
  Command: `glcli --env prod bifrost pizza --audience-id 723 --org-id 274`
  Blockers: `failed_export_count`
  Run 723-salesforce_audience_object_723-scheduled__2026-05-16T00:00:00+00:00: health=`blocked`; blockers=failed_export_count; created=2026-05-17T00:05:29.033464+00:00; snapshotting=snapshotting_finished; export=export_finished; failed=2628.
- chk_q3pj7w2k3y9ljv_q15x94n0mbravv (Q3PJ7W2K3Y9LJV/Q15X94N0MBRAVV): state=`blocked`.
  Scope: env=prod; org=274; audience=723; endpoint=app_salesforce_audience_1406; destination=salesforce_audience_object.
  Checked runs: `723-salesforce_audience_object_723-scheduled__2026-05-14T00:00:00+00:00`
  Command: `glcli --env prod bifrost pizza --audience-id 723 --org-id 274`
  Blockers: `failed_export_count`, `export_error`
  Run 723-salesforce_audience_object_723-scheduled__2026-05-14T00:00:00+00:00: health=`blocked`; blockers=failed_export_count, export_error; created=2026-05-15T00:04:55.900871+00:00; snapshotting=snapshotting_finished; export=export_error; failed=2714.

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
