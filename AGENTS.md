# AGENTS

Use this repo as a case-workspace system, not a spreadsheet workflow.

## Operating Rules

- Treat the git-backed case workspace as the source of truth.
- Immutable PagerDuty facts and derived alert facts are the primary query surface.
- Groups are loose operational workspaces over alert facts. A group may span multiple PagerDuty incidents, and alert facts may be queried across group boundaries.
- Keep deterministic grouping conservative and split-first. Agents may enrich, override, merge, or split with lineage.
- Prefer evidence-tagged grouping for root-cause work: run `tag` with an archived script, inspect `--test` output first when practical, then use `group --tag` with rationale.
- Imported PagerDuty raw text is immutable. Parsed alert facts are versioned derived facts.
- Assume facts and event logs should be immutable unless there is a strong reason otherwise.
- PagerDuty wrapper imports must preserve every alert. If the wrapper says `Alerts (N)`, parsed facts must match `N` unless an explicit partial-import escape hatch is used.
- Incident titles may enrich display or low-confidence hints, but they are not matching inputs.
- Match rules are the shared mechanism for active grouping keys, aliases, redirects, and ambiguous split keys.
- Generated cohorts and related groups are navigation aids, not persisted truth, until an agent records an explicit relationship or merge.
- Agents may write compact PagerDuty breadcrumbs when useful.
- Keep state in `state.json`. `case.md` is generated and must not be edited
  directly.
- Keep free-form human or agent notes in `notes.md`; generated `case.md`
  copies `notes.md` into the case view when the notes file is present.
- Open cases must be self-orienting in `case.md`: include enough alert scope,
  export-check results, and investigation evidence for a human to understand
  what has been looked at without opening every JSON artifact first.
- Keep append-only `lineage.jsonl`, `evidence.jsonl`, `decisions.jsonl`, `actions.jsonl`, and structural events.
- Keep `DECISIONS.md`, `LEARNINGS.md`, and `LEXICON.md` current when work changes architecture, behavior, or terminology.
- Use the CLI for structural mutations. Direct file edits are fine for narrative and artifact files.
- Current group states are `new`, `open`, `waiting`, `monitoring`, and `resolved`.
- `new` means imported and grouped, but no evidence collection or triage work has started yet. Move a group to `open` when an agent or human begins investigation, appends evidence, runs a relevant check, or otherwise starts work.
- Move a group to `waiting` only after there is durable evidence that the blocker has been communicated to the owning party. Include that communication evidence in the case when making the transition. If communication has not happened yet, report findings and leave the group `open` unless another state is clearly justified.
- Use namespaced tags such as `triage:*`, `waiting:*`, `monitoring:*`, and `resolved:*`.
- No scheduler for now. Use `next_check_at` fields when a future revisit is needed.
- Runbooks are structured instructions and may include tool functions or scripts.
- Before manual case investigation, run the export preflight when the case has
  export-alert evidence:
  `bun run oncall-triage check-exports cases --group <group-id> --apply --auto-resolve`.
  For a full pass across new cases, run
  `bun run oncall-triage preflight cases --state new`.
  If it resolves the case, stop; if it records blocked or monitoring evidence,
  continue from that generated evidence instead of repeating Pizza checks by
  hand.
- Respect `cases/env_availability.json`. Do not manually probe environments
  marked `unavailable`; update that file when local access changes.
- Agents can explore after the export preflight, then choose a runbook before remediation or resolution.
- See `LEXICON.md` for canonical terms, invariants, and model boundaries.

## Editing Discipline

- Keep changes small and local.
- Keep solutions simple: do the simplest, dumbest thing that works, then add complexity only when real use proves it is needed.
- Prefer the repo’s existing patterns over new abstractions.
- Do not rewrite unrelated files.
- Do not touch source or package files unless the task explicitly requires it.
- After finishing a unit of work, briefly review what was slow or repetitive. If a tool, runbook, parser, command, or workflow update would make the next pass safer or faster, propose it.

## Sub-Agent Model Selection

- Use `gpt-5.4-mini` for bounded, mechanical, low-risk sub-agent tasks such as filesystem migrations, index regeneration, simple verification, formatting, or narrow searches.
- Use the inherited/frontier model for sub-agent work that needs deeper judgment: ambiguous incident investigation, production risk analysis, root-cause triage, or complex code changes.
- When spawning a sub-agent, make the model choice explicit if cost or capability tradeoffs are not obvious.
