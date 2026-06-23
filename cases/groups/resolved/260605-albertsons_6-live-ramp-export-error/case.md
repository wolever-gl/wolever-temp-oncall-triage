<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# albertsons_6 live-ramp export-error

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `resolved`
Tags: `triage:needs_review`, `resolved:merged`
Incidents: [Q1E4EUPF9HDZNA](https://growthloop.pagerduty.com/incidents/Q1E4EUPF9HDZNA)
Alerts: 4

## Current Summary

Merged into 260622-albertsons_6-live-ramp-export-error: Consolidate Albertsons LiveRamp export_error alerts from the Other open buckets list into a single investigation case.

## Alert Scope

- Alert facts: 4 imported, 4 linked to this group.
- Orgs: `albertsons_6`
- Audiences: `12214`, `12399`, `12862`, `12875`
- Destinations: `live_ramp_activation`
- State tuples: `snapshotting_finished/export_error`
- Commands seen: `glcli --env albertsons bifrost pizza --audience-id 12214 --org-id 6`, `glcli --env albertsons bifrost pizza --audience-id 12399 --org-id 6`, `glcli --env albertsons bifrost pizza --audience-id 12862 --org-id 6`, and 1 more

Representative alerts:
- Q1E4EUPF9HDZNA/Q239L21T41CUJE: 2026-06-05T08:09:52-07:00; albertsons_6; audience 12214; live_ramp_activation; snapshotting_finished/export_error. albertsons (Albertsons Media): Exports for audience 12214 failed with states: <(snapshotting_finished,export_error)>
  Runs: `12214-live_ramp_activation_4017-scheduled__2026-05-29T00:00:00+00:00`, `12214-live_ramp_activation_4017-scheduled__2026-06-05T00:00:00+00:00`
- Q1E4EUPF9HDZNA/Q3VSW000L0VZB7: 2026-06-05T08:10:34-07:00; albertsons_6; audience 12399; live_ramp_activation; snapshotting_finished/export_error. albertsons (Albertsons Media): Exports for audience 12399 failed with states: <(snapshotting_finished,export_error)>
  Runs: `12399-live_ramp_activation_4176-scheduled__2026-05-28T00:00:00+00:00`, `12399-live_ramp_activation_4176-scheduled__2026-06-04T00:00:00+00:00`
- Q1E4EUPF9HDZNA/Q2L0ANGULZSN05: 2026-06-05T08:11:49-07:00; albertsons_6; audience 12862; live_ramp_activation; snapshotting_finished/export_error. albertsons (Albertsons Media): Exports for audience 12862 failed with states: <(snapshotting_finished,export_error)>
  Runs: `12862-live_ramp_activation_4610-scheduled__2026-06-05T00:00:00+00:00`, `12862-live_ramp_activation_4610-webapp__2026-06-05T05:45:01+00:00`
- Q1E4EUPF9HDZNA/Q15QOMNUU07G2Q: 2026-06-05T08:11:51-07:00; albertsons_6; audience 12875; live_ramp_activation; snapshotting_finished/export_error. albertsons (Albertsons Media): Exports for audience 12875 failed with states: <(snapshotting_finished,export_error)>
  Runs: `12875-live_ramp_activation_4613-scheduled__2026-06-05T00:00:00+00:00`, `12875-live_ramp_activation_4613-webapp__2026-06-05T05:45:52+00:00`

## Export Checks

- Checks: 4.
- States: `blocked`=4
- Blockers seen: `export_error`

Check evidence:
- chk_q1e4eupf9hdzna_q15qomnuu07g2q (Q1E4EUPF9HDZNA/Q15QOMNUU07G2Q): state=`blocked`.
  Scope: env=albertsons; org=6; audience=12875; endpoint=app_liveramp_activation_41; destination=live_ramp_activation.
  Checked runs: `12875-live_ramp_activation_4613-scheduled__2026-06-05T00:00:00+00:00`, `12875-live_ramp_activation_4613-webapp__2026-06-05T05:45:52+00:00`
  Command: `glcli --env albertsons bifrost pizza --audience-id 12875 --org-id 6`
  Blockers: `export_error`, `export_error`
  Run 12875-live_ramp_activation_4613-scheduled__2026-06-05T00:00:00+00:00: health=`blocked`; blockers=export_error; created=2026-06-05T03:36:37.081197+00:00; snapshotting=snapshotting_finished; export=export_error; failed=0.
  Run 12875-live_ramp_activation_4613-webapp__2026-06-05T05:45:52+00:00: health=`blocked`; blockers=export_error; created=2026-06-05T05:51:57.571379+00:00; snapshotting=snapshotting_finished; export=export_error; failed=0.
- chk_q1e4eupf9hdzna_q239l21t41cuje (Q1E4EUPF9HDZNA/Q239L21T41CUJE): state=`blocked`.
  Scope: env=albertsons; org=6; audience=12214; endpoint=app_liveramp_activation_41; destination=live_ramp_activation.
  Checked runs: `12214-live_ramp_activation_4017-scheduled__2026-05-29T00:00:00+00:00`, `12214-live_ramp_activation_4017-scheduled__2026-06-05T00:00:00+00:00`
  Command: `glcli --env albertsons bifrost pizza --audience-id 12214 --org-id 6`
  Blockers: `export_error`
  Run 12214-live_ramp_activation_4017-scheduled__2026-05-29T00:00:00+00:00: health=`healthy`; created=2026-05-29T02:21:42.512758+00:00; snapshotting=snapshotting_finished; export=export_finished; failed=0.
  Run 12214-live_ramp_activation_4017-scheduled__2026-06-05T00:00:00+00:00: health=`blocked`; blockers=export_error; created=2026-06-05T01:57:25.012773+00:00; snapshotting=snapshotting_finished; export=export_error; failed=0.
- chk_q1e4eupf9hdzna_q2l0angulzsn05 (Q1E4EUPF9HDZNA/Q2L0ANGULZSN05): state=`blocked`.
  Scope: env=albertsons; org=6; audience=12862; endpoint=app_liveramp_activation_41; destination=live_ramp_activation.
  Checked runs: `12862-live_ramp_activation_4610-scheduled__2026-06-05T00:00:00+00:00`, `12862-live_ramp_activation_4610-webapp__2026-06-05T05:45:01+00:00`
  Command: `glcli --env albertsons bifrost pizza --audience-id 12862 --org-id 6`
  Blockers: `export_error`, `export_error`
  Run 12862-live_ramp_activation_4610-scheduled__2026-06-05T00:00:00+00:00: health=`blocked`; blockers=export_error; created=2026-06-05T04:54:00.946417+00:00; snapshotting=snapshotting_finished; export=export_error; failed=0.
  Run 12862-live_ramp_activation_4610-webapp__2026-06-05T05:45:01+00:00: health=`blocked`; blockers=export_error; created=2026-06-05T05:51:09.775219+00:00; snapshotting=snapshotting_finished; export=export_error; failed=0.
- chk_q1e4eupf9hdzna_q3vsw000l0vzb7 (Q1E4EUPF9HDZNA/Q3VSW000L0VZB7): state=`blocked`.
  Scope: env=albertsons; org=6; audience=12399; endpoint=app_liveramp_activation_41; destination=live_ramp_activation.
  Checked runs: `12399-live_ramp_activation_4176-scheduled__2026-05-28T00:00:00+00:00`, `12399-live_ramp_activation_4176-scheduled__2026-06-04T00:00:00+00:00`
  Command: `glcli --env albertsons bifrost pizza --audience-id 12399 --org-id 6`
  Blockers: `export_error`, `export_error`
  Run 12399-live_ramp_activation_4176-scheduled__2026-05-28T00:00:00+00:00: health=`blocked`; blockers=export_error; created=2026-05-28T02:07:11.311760+00:00; snapshotting=snapshotting_finished; export=export_error; failed=0.
  Run 12399-live_ramp_activation_4176-scheduled__2026-06-04T00:00:00+00:00: health=`blocked`; blockers=export_error; created=2026-06-04T03:07:13.608991+00:00; snapshotting=snapshotting_finished; export=export_error; failed=0.

## Next Action

Follow target group 260622-albertsons_6-live-ramp-export-error.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
