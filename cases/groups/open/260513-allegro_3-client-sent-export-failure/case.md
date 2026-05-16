<!-- AUTO-GENERATED: Do not edit case.md directly. Put free-form investigation notes in notes.md. -->

# allegro_3 client-sent-export-failure

> Generated file. Do not edit directly; put free-form investigation notes in `notes.md`.

State: `open`
Tags: `triage:needs_review`, `triage:blocked-env-unavailable`
Incidents: [Q0UU3VAZ2I5R5H](https://growthloop.pagerduty.com/incidents/Q0UU3VAZ2I5R5H)
Alerts: 23

## Current Summary

Triage preflight attempted, but Allegro export checks were skipped because this laptop cannot access the Allegro Bifrost proxy. Manual triage needs an environment with Allegro access or non-Pizza evidence.

## Alert Scope

- Alert facts: 23 imported, 23 linked to this group.
- Orgs: `allegro_3`
- Audiences: `1012`, `1015`, `1016`, `1017`, `1018`, `1020`, `1021`, `1022`, and 15 more
- Destinations: none
- State tuples: none
- Commands seen: `glcli --env allegro bifrost pizza --audience-id 1012 --org-id 3`, `glcli --env allegro bifrost pizza --audience-id 1015 --org-id 3`, `glcli --env allegro bifrost pizza --audience-id 1016 --org-id 3`, and 20 more

Representative alerts:
- Q0UU3VAZ2I5R5H/Q0SXEVX7VLBQIV: 2026-05-12T20:27:53-07:00; allegro_3; audience 1266. allegro (Marketing) - Audience 1266: Audience Export failure for 1266 sent to client.
- Q0UU3VAZ2I5R5H/Q3G323CVS1S58E: 2026-05-12T21:37:03-07:00; allegro_3; audience 1061. allegro (Advertising) - Audience 1061: Audience Export failure for 1061 sent to client.
- Q0UU3VAZ2I5R5H/Q10J9HZTECJKEH: 2026-05-12T21:47:16-07:00; allegro_3; audience 1077. allegro (Advertising) - Audience 1077: Audience Export failure for 1077 sent to client.
- Q0UU3VAZ2I5R5H/Q23DUUGHKQXHSE: 2026-05-13T09:49:31-07:00; allegro_3; audience 1146. allegro (Marketing) - Audience 1146: Audience Export failure for 1146 sent to client.
- Q0UU3VAZ2I5R5H/Q1WYNUA3C67JC7: 2026-05-13T10:24:31-07:00; allegro_3; audience 638. allegro (Marketing) - Audience 638: Audience Export failure for 638 sent to client.
- Q0UU3VAZ2I5R5H/Q0NC9D8CFRAFHS: 2026-05-13T10:39:00-07:00; allegro_3; audience 1268. allegro (Marketing) - Audience 1268: Audience Export failure for 1268 sent to client.
- Q0UU3VAZ2I5R5H/Q1NI0JQY5RJWKA: 2026-05-13T10:39:05-07:00; allegro_3; audience 1156. allegro (Marketing) - Audience 1156: Audience Export failure for 1156 sent to client.
- Q0UU3VAZ2I5R5H/Q0THVKC0QVK347: 2026-05-13T10:39:48-07:00; allegro_3; audience 637. allegro (Marketing) - Audience 637: Audience Export failure for 637 sent to client.
- Q0UU3VAZ2I5R5H/Q2ZM6I8K6KTA4E: 2026-05-13T10:53:51-07:00; allegro_3; audience 1144. allegro (Marketing) - Audience 1144: Audience Export failure for 1144 sent to client.
- Q0UU3VAZ2I5R5H/Q38NTWTJJLVY7S: 2026-05-13T10:59:10-07:00; allegro_3; audience 1269. allegro (Marketing) - Audience 1269: Audience Export failure for 1269 sent to client.
- Showing 10 of 23 alert facts; see `indexes/alert_facts.json` for the full imported set.

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
