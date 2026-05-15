# oncall-triage

Case-workspace primitives for handling GrowthLoop PagerDuty incidents.

This is the v2 architecture: the source of truth is a long-lived git-backed case
workspace, not a spreadsheet. The tool handles durable structure and safety
rails; agents make judgment calls using evidence and runbooks.

## Repo Docs

- [AGENTS.md](AGENTS.md)
- [DECISIONS.md](DECISIONS.md)
- [LEARNINGS.md](LEARNINGS.md)

## Mental Model

- **Groups first.** Alerts and audiences are evidence attached to a group. A
  group may span multiple PagerDuty incidents over time.
- **Conservative deterministic grouping.** The tool creates stable first-pass
  groups from obvious fields and avoids false merges. Agents can later attach,
  merge, or split groups with explicit lineage events.
- **Case files are source of truth.** `state.json` stores the current machine
  snapshot; `case.md` is the human summary; append-only JSONL files retain the
  decision trail.
- **Spreadsheet/reporting views are generated.** `index.md` and `index.json`
  are views over the case directories.
- **Runbooks guide remediation.** Runbooks define applicability, required
  evidence, allowed actions, approval requirements, verification, and terminal
  conditions.

## Workspace Layout

```text
cases/
  index.md
  index.json
  events.jsonl
  incidents/
    Q123ABC/
      incident.json
      alerts.raw.txt
      alerts.jsonl
  groups/
    grp_chghealth_395_marketing_cloud_16985_0001/
      state.json
      case.md
      lineage.jsonl
      evidence.jsonl
      decisions.jsonl
      actions.jsonl
      artifacts/
  indexes/
    groups.json
```

## CLI

```bash
bun install

bun run oncall-triage init cases
bun run oncall-triage import-pd cases --incident Q123ABC
bun run oncall-triage group cases
bun run oncall-triage index cases
bun run oncall-triage sync-pd cases --incident Q123ABC
```

Group correction primitives:

```bash
bun run oncall-triage merge cases --source <group-id> --target <group-id> --rationale "Same root cause."
bun run oncall-triage split cases --group <group-id> --alerts <alert-id,alert-id> --rationale "Different root cause."
```

Fixture import:

```bash
bun run oncall-triage import-pd cases \
  --incident QTEST123 \
  --alerts-file fixtures/pagerduty-alerts.json
```

Structural state transitions go through the CLI:

```bash
bun run oncall-triage transition cases \
  --group grp_acme_123_sfmc_456_0001 \
  --state monitoring \
  --tag monitoring:retrying \
  --summary "Later export is processing; recheck after the next monitor window."
```

`sync-pd` refreshes stored incident records from PagerDuty, optionally imports explicit incidents, and resolves groups whose attached PagerDuty incidents have all closed externally.

Narrative files and artifacts may be edited directly by agents, but structural
mutations should go through CLI primitives so indexes, state, and audit logs stay
consistent.

## States And Tags

Top-level group states:

- `open`
- `waiting`
- `monitoring`
- `resolved`

Tags carry specificity. Prefixes are intentionally lightweight and will evolve:

- `triage:*` - still collecting enough evidence to decide
- `waiting:*` - blocked on someone else, such as customer or PR
- `monitoring:*` - system/user needs a future recheck
- `resolved:*` - terminal reason
- `customer:*` - customer-facing/customer-owned context
- `bug:*` - suspected or confirmed product bug context

## First MVP Runbook

Start with [retry-later-succeeded](runbooks/retry-later-succeeded.md). It is
low-risk and exercises the full loop: group, gather evidence, resolve the group,
write a PD breadcrumb, and reconcile PD when every alert is covered.

## Verification

```bash
bun run typecheck
bun run test
```
