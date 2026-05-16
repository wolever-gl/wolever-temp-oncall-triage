# chghealthcare_395 client-sent-export-failure

State: `open`
Tags: `triage:needs_review`
Incidents: [Q064V2C56CNTCR](https://growthloop.pagerduty.com/incidents/Q064V2C56CNTCR)
Alerts: 8

## Current Summary

chghealthcare (Global Medical Staffing) - Audience 30299: Audience Export failure for 30299 sent to client.

## Alert Scope

- Alert facts: 8 imported, 8 linked to this group.
- Orgs: `chghealthcare_395`
- Audiences: `16985`, `16992`, `16998`, `17010`, `20770`, `30299`, `30367`, `36059`
- Destinations: none
- State tuples: none
- Commands seen: `glcli --env prod bifrost pizza --audience-id 16985 --org-id 395`, `glcli --env prod bifrost pizza --audience-id 16992 --org-id 395`, `glcli --env prod bifrost pizza --audience-id 16998 --org-id 395`, and 5 more

Representative alerts:
- Q064V2C56CNTCR/Q3Z8GH96UIQEAZ: 2026-05-14T11:20:30-07:00; chghealthcare_395; audience 36059. chghealthcare (CompHealth) - Audience 36059: Audience Export failure for 36059 sent to client.
- Q064V2C56CNTCR/Q07518J3N04YCL: 2026-05-14T11:51:33-07:00; chghealthcare_395; audience 16985. chghealthcare (CompHealth) - Audience 16985: Audience Export failure for 16985 sent to client.
- Q064V2C56CNTCR/Q3G4Q7E1OK3XU8: 2026-05-14T11:52:01-07:00; chghealthcare_395; audience 16992. chghealthcare (CompHealth) - Audience 16992: Audience Export failure for 16992 sent to client.
- Q064V2C56CNTCR/Q129BWE1UJ28KO: 2026-05-14T11:53:30-07:00; chghealthcare_395; audience 20770. chghealthcare (Global Medical Staffing) - Audience 20770: Audience Export failure for 20770 sent to client.
- Q064V2C56CNTCR/Q2MF89NIILLM2J: 2026-05-14T12:21:06-07:00; chghealthcare_395; audience 16998. chghealthcare (CompHealth) - Audience 16998: Audience Export failure for 16998 sent to client.
- Q064V2C56CNTCR/Q2FRFVN6PL13YM: 2026-05-14T12:22:07-07:00; chghealthcare_395; audience 17010. chghealthcare (CompHealth) - Audience 17010: Audience Export failure for 17010 sent to client.
- Q064V2C56CNTCR/Q0GIQNJAUIKNV2: 2026-05-14T12:55:32-07:00; chghealthcare_395; audience 30299. chghealthcare (Global Medical Staffing) - Audience 30299: Audience Export failure for 30299 sent to client.
- Q064V2C56CNTCR/Q329MNJYN3CVYV: 2026-05-14T12:56:05-07:00; chghealthcare_395; audience 30367. chghealthcare (Global Medical Staffing) - Audience 30367: Audience Export failure for 30367 sent to client.

## Export Checks

- Checks: 8.
- States: `blocked`=8
- Blockers seen: `missing_run_identity`

Check evidence:
- chk_q064v2c56cntcr_q07518j3n04ycl (Q064V2C56CNTCR/Q07518J3N04YCL): state=`blocked`.
  Scope: env=prod; org=395; audience=16985.
  Command: `glcli --env prod bifrost pizza --audience-id 16985 --org-id 395`
  Blockers: `missing_run_identity`
- chk_q064v2c56cntcr_q0giqnjauiknv2 (Q064V2C56CNTCR/Q0GIQNJAUIKNV2): state=`blocked`.
  Scope: env=prod; org=395; audience=30299.
  Command: `glcli --env prod bifrost pizza --audience-id 30299 --org-id 395`
  Blockers: `missing_run_identity`
- chk_q064v2c56cntcr_q129bwe1uj28ko (Q064V2C56CNTCR/Q129BWE1UJ28KO): state=`blocked`.
  Scope: env=prod; org=395; audience=20770.
  Command: `glcli --env prod bifrost pizza --audience-id 20770 --org-id 395`
  Blockers: `missing_run_identity`
- chk_q064v2c56cntcr_q2frfvn6pl13ym (Q064V2C56CNTCR/Q2FRFVN6PL13YM): state=`blocked`.
  Scope: env=prod; org=395; audience=17010.
  Command: `glcli --env prod bifrost pizza --audience-id 17010 --org-id 395`
  Blockers: `missing_run_identity`
- chk_q064v2c56cntcr_q2mf89niillm2j (Q064V2C56CNTCR/Q2MF89NIILLM2J): state=`blocked`.
  Scope: env=prod; org=395; audience=16998.
  Command: `glcli --env prod bifrost pizza --audience-id 16998 --org-id 395`
  Blockers: `missing_run_identity`
- chk_q064v2c56cntcr_q329mnjyn3cvyv (Q064V2C56CNTCR/Q329MNJYN3CVYV): state=`blocked`.
  Scope: env=prod; org=395; audience=30367.
  Command: `glcli --env prod bifrost pizza --audience-id 30367 --org-id 395`
  Blockers: `missing_run_identity`
- chk_q064v2c56cntcr_q3g4q7e1ok3xu8 (Q064V2C56CNTCR/Q3G4Q7E1OK3XU8): state=`blocked`.
  Scope: env=prod; org=395; audience=16992.
  Command: `glcli --env prod bifrost pizza --audience-id 16992 --org-id 395`
  Blockers: `missing_run_identity`
- chk_q064v2c56cntcr_q3z8gh96uiqeaz (Q064V2C56CNTCR/Q3Z8GH96UIQEAZ): state=`blocked`.
  Scope: env=prod; org=395; audience=36059.
  Command: `glcli --env prod bifrost pizza --audience-id 36059 --org-id 395`
  Blockers: `missing_run_identity`

## Next Action

Agent should gather evidence, choose/apply a runbook when appropriate, and update this case.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
