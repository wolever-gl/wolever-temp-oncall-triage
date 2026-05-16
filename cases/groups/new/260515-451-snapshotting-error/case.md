# 451 snapshotting-error

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `new`
Tags: `triage:needs_review`
Incidents: [Q1UC14QNZK76EZ](https://growthloop.pagerduty.com/incidents/Q1UC14QNZK76EZ)
Alerts: 6

## Current Summary

ASU Enterprise Partners (Alumni): Exports for audience 26039 failed with states: <(snapshotting_error,no_batches)>

## Alert Scope

- Alert facts: 6 imported, 6 linked to this group.
- Orgs: `451`
- Audiences: `24855`, `25147`, `25884`, `25885`, `26037`, `26039`
- Destinations: `facebook`, `google_adwords`, `marketing_cloud`, `reddit_ads`, `viant`
- State tuples: `snapshotting_error/no_batches`
- Commands seen: `glcli --env prod bifrost pizza --audience-id 24855 --org-id 451`, `glcli --env prod bifrost pizza --audience-id 25147 --org-id 451`, `glcli --env prod bifrost pizza --audience-id 25884 --org-id 451`, and 3 more

Representative alerts:
- Q1UC14QNZK76EZ/Q0BBLWSTOJ1DIE: 2026-05-15T08:29:26-07:00; 451; audience 24855; facebook; snapshotting_error/no_batches. ASU Enterprise Partners (General - ASU Data): Exports for audience 24855 failed with states: <(snapshotting_error,no_batches)>
  Runs: `24855-facebook_18293-scheduled__2026-05-15T00:00:00+00:00`
- Q1UC14QNZK76EZ/Q13EWJ3TWG2U5C: 2026-05-15T08:29:31-07:00; 451; audience 25147; marketing_cloud; snapshotting_error/no_batches. ASU Enterprise Partners (General - ASU Data): Exports for audience 25147 failed with states: <(snapshotting_error,no_batches)>
  Runs: `25147-marketing_cloud_15450-scheduled__2026-05-15T00:00:00+00:00`
- Q1UC14QNZK76EZ/Q3QYQWZLEHZN1L: 2026-05-15T08:29:33-07:00; 451; audience 25884; reddit_ads; snapshotting_error/no_batches. ASU Enterprise Partners (General - ASU Data): Exports for audience 25884 failed with states: <(snapshotting_error,no_batches)>
  Runs: `25884-reddit_ads_16101-scheduled__2026-05-15T00:00:00+00:00`
- Q1UC14QNZK76EZ/Q102PD4GX1C4A2: 2026-05-15T08:29:36-07:00; 451; audience 25885; google_adwords; snapshotting_error/no_batches. ASU Enterprise Partners (Alumni): Exports for audience 25885 failed with states: <(snapshotting_error,no_batches)>
  Runs: `25885-google_adwords_16088-scheduled__2026-05-15T00:00:00+00:00`, `25885-microsoft_ads_16087-scheduled__2026-05-15T00:00:00+00:00`
- Q1UC14QNZK76EZ/Q1RKUEO3Q27VXH: 2026-05-15T08:29:39-07:00; 451; audience 26037; reddit_ads; snapshotting_error/no_batches. ASU Enterprise Partners (General - ASU Data): Exports for audience 26037 failed with states: <(snapshotting_error,no_batches)>
  Runs: `26037-facebook_16103-scheduled__2026-05-15T00:00:00+00:00`, `26037-google_adwords_16090-scheduled__2026-05-15T00:00:00+00:00`, `26037-google_adwords_18971-scheduled__2026-05-15T00:00:00+00:00`, and 4 more
- Q1UC14QNZK76EZ/Q2VJ695TKN2FPF: 2026-05-15T08:29:42-07:00; 451; audience 26039; viant; snapshotting_error/no_batches. ASU Enterprise Partners (Alumni): Exports for audience 26039 failed with states: <(snapshotting_error,no_batches)>
  Runs: `26039-google_adwords_18977-scheduled__2026-05-15T00:00:00+00:00`, `26039-viant_16920-scheduled__2026-05-15T00:00:00+00:00`

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
