<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# birchwood_274 client-sent-export-failure

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `resolved`
Tags: `triage:needs_review`, `resolved:merged`
Incidents: [Q3PJ7W2K3Y9LJV](https://growthloop.pagerduty.com/incidents/Q3PJ7W2K3Y9LJV)
Alerts: 1

## Current Summary

Merged into 260515-birchwood_274-salesforce-audience-export-error: Client-sent SignalRoute 723 alert is the notification counterpart of the Birchwood Salesforce Audience export failure: same incident, org 274, audience/signal 723, and preflight selected the same salesforce_audience_object endpoint with failed exported rows.

## Alert Scope

- Alert facts: 1 imported, 1 linked to this group.
- Orgs: `birchwood_274`
- Audiences: `723`
- Destinations: none
- State tuples: none
- Commands seen: `glcli --env prod bifrost pizza --audience-id 723 --org-id 274`

Representative alerts:
- Q3PJ7W2K3Y9LJV/Q0S5D7L5PK1NBX: 2026-05-14T18:28:16-07:00; birchwood_274; audience 723. birchwood (default) - SignalRoute 723: SignalRoute Export failure for 723 sent to client.

## Export Checks

- Checks: 1.
- States: `open`=1
- Blockers seen: `evidence_unavailable`

Check evidence:
- chk_q3pj7w2k3y9ljv_q0s5d7l5pk1nbx (Q3PJ7W2K3Y9LJV/Q0S5D7L5PK1NBX): state=`open`, next_check_at=`2026-05-17T13:16:35.108Z`.
  Scope: env=prod; org=274; audience=723.
  Command: `glcli --env prod bifrost pizza --audience-id 723 --org-id 274`
  Blockers: `evidence_unavailable`

## Next Action

Follow target group 260515-birchwood_274-salesforce-audience-export-error.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
