# AGENTS

Use this repo as a case-workspace system, not a spreadsheet workflow.

## Operating Rules

- Treat the git-backed case workspace as the source of truth.
- Groups are the primary object. A group may span multiple PagerDuty incidents.
- Keep deterministic grouping conservative and split-first. Agents may enrich, override, merge, or split with lineage.
- Imported PagerDuty alerts are immutable raw facts.
- Agents may write compact PagerDuty breadcrumbs when useful.
- Keep state in `state.json` and the human summary in `case.md`.
- Keep append-only `lineage.jsonl`, `evidence.jsonl`, `decisions.jsonl`, and `actions.jsonl`.
- Use the CLI for structural mutations. Direct file edits are fine for narrative and artifact files.
- Current group states are `open`, `waiting`, `monitoring`, and `resolved`.
- Use namespaced tags such as `triage:*`, `waiting:*`, `monitoring:*`, and `resolved:*`.
- No scheduler for now. Use `next_check_at` fields when a future revisit is needed.
- Runbooks are structured instructions and may include tool functions or scripts.
- Agents can explore first, then choose a runbook before remediation or resolution.

## Editing Discipline

- Keep changes small and local.
- Prefer the repo’s existing patterns over new abstractions.
- Do not rewrite unrelated files.
- Do not touch source or package files unless the task explicitly requires it.
