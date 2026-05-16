# DECISIONS

## 2026-05-15

- The source of truth is a long-lived git-backed case workspace.
- Groups are the primary unit of work and may span multiple PagerDuty incidents.
- Deterministic grouping is conservative and split-first; agents can later merge, split, or enrich with lineage.
- Imported PagerDuty alerts are immutable raw facts.
- Agents may write compact PagerDuty breadcrumbs, but they do not replace the raw import.
- Group state is limited to `new`, `open`, `waiting`, `monitoring`, and `resolved`, with namespaced tags for finer detail.
- Deterministic first-pass grouping creates `new` groups. A group becomes `open` once evidence collection or triage work starts, so the queue distinguishes "known but untouched" from "investigation started."
- `waiting` requires durable evidence that the blocker has been communicated to the owning party; finding an external blocker is not enough by itself.
- There is no scheduler in v2; future work is represented with `next_check_at`.
- Runbooks are structured instructions that may include tool functions or scripts.
- Agents are allowed to explore before choosing a runbook, then proceed to remediation or resolution.
- The workspace keeps append-only evidence, decisions, and actions logs alongside `state.json` and `case.md`.
- Structural mutations go through the CLI; narrative files and artifacts may be edited directly.
- Merged groups act as deterministic-key redirects to their live target when future matching alerts arrive.
- `sync-pd` refreshes stored PagerDuty incident records and can close a group when all attached incidents are resolved externally, tagging it `resolved:pd_closed_external`.
- v2 grouping starts from immutable alert facts. Groups are loose operational workspaces over those facts, not the canonical taxonomy.
- Parsed alert facts are versioned derived facts; raw PagerDuty text remains immutable and parsed versions may be regenerated without rewriting history.
- Import must validate PagerDuty wrapper alert counts before grouping. Count mismatches fail by default, with an explicit partial-import escape hatch.
- Initial grouping is alert-first. Incident titles may enrich display or low-confidence hints, but they are not deterministic matching inputs.
- Evidence-led grouping uses append-only alert annotations: agents run archived tagger scripts, the framework captures per-alert output, and `group --tag` promotes only tagged alerts into a durable group.
- A single PagerDuty alert may produce destination-scoped child facts when multiple checked run IDs prove multiple destinations; the parent PagerDuty alert remains immutable.
- Group IDs use `YYMMDD-<org_identifier>-<something>`, where `<org_identifier>` includes the numeric suffix such as `abc_123`. The date is fixed from the earliest parsed PagerDuty alert in the group at creation time and does not change later.
- Initial groups are incident-local root-cause hypotheses, usually `YYMMDD-<org_identifier>-<failure-class>`. Destination is included only for export-specific classes such as `export-error` and `export-processing`.
- Cross-audience similarities, cohorts, and related groups are generated query/index views unless an agent explicitly records a relationship or merge.
- Match rules are the single model for active deterministic keys, aliases, redirects, and ambiguous split keys.
- Structural group mutations should append events while retaining `state.json` as a materialized convenience snapshot.
- Grouping must not consume legacy collapsed wrapper facts. If `alerts.v2.jsonl` is absent, the tool reparses `alerts.raw.txt` before falling back to legacy `alerts.jsonl`.
