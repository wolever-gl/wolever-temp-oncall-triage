# DECISIONS

## 2026-05-15

- The source of truth is a long-lived git-backed case workspace.
- Groups are the primary unit of work and may span multiple PagerDuty incidents.
- Deterministic grouping is conservative and split-first; agents can later merge, split, or enrich with lineage.
- Imported PagerDuty alerts are immutable raw facts.
- Agents may write compact PagerDuty breadcrumbs, but they do not replace the raw import.
- Group state is limited to `open`, `waiting`, `monitoring`, and `resolved`, with namespaced tags for finer detail.
- There is no scheduler in v2; future work is represented with `next_check_at`.
- Runbooks are structured instructions that may include tool functions or scripts.
- Agents are allowed to explore before choosing a runbook, then proceed to remediation or resolution.
- The workspace keeps append-only evidence, decisions, and actions logs alongside `state.json` and `case.md`.
- Structural mutations go through the CLI; narrative files and artifacts may be edited directly.
- Merged groups act as deterministic-key redirects to their live target when future matching alerts arrive.
- `sync-pd` refreshes stored PagerDuty incident records and can close a group when all attached incidents are resolved externally, tagging it `resolved:pd_closed_external`.
