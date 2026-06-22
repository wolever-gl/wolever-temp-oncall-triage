<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# 451 client-sent-export-failure

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `new`
Tags: `triage:needs_review`
Incidents: [Q3H4V02MSU117K](https://growthloop.pagerduty.com/incidents/Q3H4V02MSU117K)
Alerts: 5

## Current Summary

ASU Enterprise Partners (Alumni) - Audience 26039: Audience Export failure for 26039 sent to client.

## Alert Scope

- Alert facts: 5 imported, 5 linked to this group.
- Orgs: `451`
- Audiences: `24855`, `25884`, `25885`, `26037`, `26039`
- Destinations: none
- State tuples: none
- Commands seen: `glcli --env prod bifrost pizza --audience-id 24855 --org-id 451`, `glcli --env prod bifrost pizza --audience-id 25884 --org-id 451`, `glcli --env prod bifrost pizza --audience-id 25885 --org-id 451`, and 2 more

Representative alerts:
- Q3H4V02MSU117K/Q0NTWAEKYBE138: 2026-06-03T19:01:27-07:00; 451; audience 25884. ASU Enterprise Partners (General - ASU Data) - Audience 25884: Audience Export failure for 25884 sent to client.
- Q3H4V02MSU117K/Q0BKKBBFH5CINN: 2026-06-03T19:28:52-07:00; 451; audience 26037. ASU Enterprise Partners (General - ASU Data) - Audience 26037: Audience Export failure for 26037 sent to client.
- Q3H4V02MSU117K/Q0EJUVME0TY8CC: 2026-06-04T14:42:24-07:00; 451; audience 24855. ASU Enterprise Partners (General - ASU Data) - Audience 24855: Audience Export failure for 24855 sent to client.
- Q3H4V02MSU117K/Q1BGR34WR9RA7U: 2026-06-06T19:22:31-07:00; 451; audience 25885. ASU Enterprise Partners (Alumni) - Audience 25885: Audience Export failure for 25885 sent to client.
- Q3H4V02MSU117K/Q3DTLJYDZ4NONK: 2026-06-06T20:18:54-07:00; 451; audience 26039. ASU Enterprise Partners (Alumni) - Audience 26039: Audience Export failure for 26039 sent to client.

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
