# oncall-triage

Case-workspace primitives for handling GrowthLoop PagerDuty incidents.

This is the v2 architecture: the source of truth is a long-lived git-backed case
workspace, not a spreadsheet. The tool handles durable structure and safety
rails; agents make judgment calls using evidence and runbooks.

## Repo Docs

- [AGENTS.md](AGENTS.md)
- [DECISIONS.md](DECISIONS.md)
- [LEARNINGS.md](LEARNINGS.md)
- [LEXICON.md](LEXICON.md)

## How To Triage

Triage is an evidence loop, not a one-shot grouping pass:

1. Refresh the workspace so the agent is looking at current facts. Today that
   usually means `sync-pd`, any relevant evidence refresh such as
   `check-exports`, then `index`. A future `refresh` command should wrap the
   common version of this sequence.
2. Open `cases/index.md` and take the highest-priority non-resolved group. Start
   with the top `New` group unless there is a stronger operational reason to
   continue an `open`, `monitoring`, or `waiting` group.
3. Before manual investigation, run the case-scoped export preflight:

   ```bash
   bun run oncall-triage preflight cases --state new
   ```

   This runs the relevant Pizza checks for each group, records check evidence in
   the cases, and resolves a group automatically when every alert-scoped export
   check is healthy. If it resolves a case, move on to the next group. If it
   records `blocked` or `monitoring` evidence, continue investigation from that
   generated evidence. Environments listed as unavailable in
   `cases/env_availability.json` are skipped instead of probed.
4. Ask the agent to decide what to do with that group. The agent should inspect
   alert facts, prior annotations, case notes, and external evidence; explain
   the likely situation; and guide the next action.
5. Take the smallest justified action: collect more evidence, tag alerts, split
   or merge groups, mark something waiting, resolve a recovered issue, escalate
   a customer-owned problem, or ask for human judgment.
6. Regenerate the index.
7. Before moving on, ask the agent to review how it reached the result. If a
   tool, runbook, parser, command, lexicon entry, or workflow note would have
   made the path faster or safer, update the relevant documentation so the next
   agent benefits.
8. Repeat.

The important habit is to work one group at a time while keeping alerts
queryable across group boundaries. Groups are a work queue and coordination
surface; evidence tags explain why any alert belongs in a remediation path.

## Mental Model

- **Facts first.** Raw PagerDuty imports are immutable facts. Parsed alert facts
  are versioned derived facts and are the primary query surface for org,
  audience, destination, state tuple, run id, incident, and time-range lookups.
- **Groups are loose workspaces.** Alerts and audiences can be attached to a
  group for operational triage, but groups are not the canonical taxonomy. A
  group may span multiple PagerDuty incidents, and agents must be able to query
  alert facts across group boundaries.
- **Evidence-tagged grouping.** The tool can create stable first-pass groups,
  but durable root-cause grouping should come from evidence tags. Agents run
  archived tagger scripts against alert facts, inspect the results, then group
  alerts by tag with explicit rationale.
- **Materialized case files are convenience views.** `state.json` stores the
  current machine snapshot; `case.md` is generated and includes alert scope,
  export-check evidence, recent investigation evidence, and `notes.md` when
  present; append-only JSONL files retain structural events, evidence,
  decisions, lineage, and actions.
- **Spreadsheet/reporting views are generated.** `index.md` and `index.json`
  are views over the case directories and immutable facts.
- **Match rules drive attachment.** Active keys, aliases, redirects, and
  ambiguous split keys are represented as match rules. Generated cohorts and
  related groups are navigation aids unless an agent records an explicit
  relationship or merge.
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
      alerts.v2.jsonl
  groups/
    260515-chghealthcare_395-a16985-marketing-cloud-export-error/
      state.json
      case.md
      notes.md
      lineage.jsonl
      evidence.jsonl
      decisions.jsonl
      actions.jsonl
      group_events.jsonl
      artifacts/
  indexes/
    groups.json
    alert_facts.json
    alert_annotations.jsonl
    group_matches.json
  taggers/
    one-off/
      YYMMDD-investigation-name.ts
    reusable/
      reusable-classifier.ts
  assets/
    taggers/
      tagrun_.../
        manifest.json
        script.ts
        results/
```

## CLI

```bash
bun install

bun run oncall-triage init cases
bun run oncall-triage import-pd cases --incident Q123ABC
bun run oncall-triage group cases
bun run oncall-triage tag cases --script ./tagger.ts --org acme_123 --limit 5 --test
bun run oncall-triage group cases --tag evidence:example --title "Example issue" --summary "..." --rationale "..." --test
bun run oncall-triage preflight cases --state new
bun run oncall-triage check-exports cases --group <group-id> --apply --auto-resolve
bun run oncall-triage evidence cases --group <group-id> --kind triage --source "gcloud scoped logs" --summary "..." --link "Scoped logs=https://console.cloud.google.com/logs/query;query=...?...project=..."
bun run oncall-triage index cases
bun run oncall-triage sync-pd cases --incident Q123ABC
```

Long-running commands should print progress as they work. In particular,
commands that fetch external evidence, open proxies, or evaluate many checks
should report what they are checking and what state they wrote instead of
remaining silent until completion.

`check-exports` keeps one live Bifrost proxy open per environment for the
duration of a command run, reuses it across checks, and closes it before exit.
With `--group <group-id> --apply --auto-resolve`, it acts as the first
investigation preflight for a case: run Pizza for the group's alert facts,
write export-check evidence, and resolve the group when every alert-scoped
check is `healthy_closed`.
`preflight` runs that case-scoped operation across every group in a selected
state, defaulting to `new`.

`cases/env_availability.json` records local environment reachability. Mark an
environment `unavailable` there when the current machine cannot access its
Bifrost proxy; export preflight skips those environments instead of spending
retries on known failures.

`case.md` is generated as a human-readable case view and should not be edited
directly. It should be enough for a human to understand why the case exists,
what alert facts are in scope, and what evidence has already been checked.
Free-form investigation notes belong in `notes.md`; `index` refreshes every
case file from `state.json`, `notes.md`, imported alert facts, export checks,
and `evidence.jsonl`.

`evidence` appends to `evidence.jsonl` and refreshes `case.md` with a Recent
Evidence section. Use repeated `--link <label=url>` values for Google Cloud
Logs, Slack, PagerDuty, or other investigation links, and repeated `--command`
values for exact commands worth preserving.

`import-pd` validates PagerDuty wrapper alert counts before grouping. If the raw
wrapper says `Alerts (N)`, the parsed derived facts must contain `N` alert facts
unless an explicit partial-import option is used for debugging or fixtures.

Group correction primitives:

```bash
bun run oncall-triage merge cases --source <group-id> --target <group-id> --rationale "Same root cause."
bun run oncall-triage split cases --group <group-id> --alerts <alert-id,alert-id> --rationale "Different root cause."
```

Evidence-tagged grouping:

```bash
bun run oncall-triage tag cases \
  --org albertsons_6 \
  --destination live-ramp \
  --script ./taggers/one-off/260516-albertsons-liveramp-progress.ts \
  --tag waiting:uploads \
  --limit 10 \
  --test

bun run oncall-triage group cases \
  --tag evidence:liveramp-sftp-permission \
  --tag waiting:uploads \
  --group 260511-albertsons_6-liveramp-sftp-permission \
  --title "Albertsons LiveRamp SFTP permission retries" \
  --summary "Verified LiveRamp SFTP permission retries; waiting for uploads." \
  --rationale "Grouped only alerts whose tagger evidence matched the failure mode." \
  --state monitoring \
  --group-tag waiting:uploads
```

`tag` archives the script under `cases/assets/taggers/<run_id>/`, runs it once
per selected alert, captures stdout/stderr/exit status, and appends derived
alert annotations. `--test` and `--limit` preview the run without writing
annotations or assets. `group --tag` moves only alerts with matching annotations
into the durable group; its `--test` mode previews the target group without
changing case files.

Most investigation taggers should be treated as one-off evidence collectors.
Put them under `taggers/one-off/YYMMDD-name.ts` so the filename makes the time
context explicit and flows into archived tag runs. Use `taggers/reusable/` only
for scripts that are intentionally general and maintained across incidents.

Common export triage pattern:

1. Query a broad cohort, such as one org and destination.
2. Run `check-exports` to collect scoped per-alert evidence.
3. Run a classifier tagger with `--test` first.
4. Keep known outcomes as separate tags, such as recovered, waiting, export
   failure, or snapshotting schema error.
5. Leave unfamiliar blocker combinations as `needs_evidence` until an agent
   adds a better rule.
6. Use `group --tag` to create one group per remediation path, not one group
   for the whole cohort.

Fixture import:

```bash
bun run oncall-triage import-pd cases \
  --incident QTEST123 \
  --alerts-file fixtures/pagerduty-alerts.json
```

Structural state transitions go through the CLI:

```bash
bun run oncall-triage transition cases \
  --group 260515-acme_123-a456-marketing-cloud-processing \
  --state monitoring \
  --tag monitoring:retrying \
  --summary "Later export is processing; recheck after the next monitor window."
```

`sync-pd` refreshes stored incident records from PagerDuty, optionally imports
explicit incidents, and resolves groups whose attached PagerDuty incidents have
all closed externally.

Narrative files and artifacts may be edited directly by agents, but structural
mutations should go through CLI primitives so indexes, state, and audit logs stay
consistent.

## Group Identity

v2 group IDs are immutable and human-oriented:

```text
YYMMDD-<org_identifier>-<something>
```

`<org_identifier>` includes the numeric suffix, such as `albertsons_6` or
`chghealthcare_395`. For initial root-cause hypothesis groups, `<something>` is
usually:

```text
<failure-class>
```

Destination is included when it is likely part of the cause boundary, such as
`export-error` or `export-processing`.

The date comes from the earliest parsed PagerDuty alert in the group at creation
time. It does not change if later imports attach older alerts; true alert ranges
belong in facts, indexes, and group state.

## States And Tags

Top-level group states:

- `new` - imported and grouped, but no evidence collection or triage work has started yet.
- `open` - work has started and the case is under investigation or ready for an agent/human to decide the next action.
- `waiting` - blocked on an external owner only after the blocker has been communicated and the case includes durable evidence of that communication.
- `monitoring` - system progress or retry behavior is underway and a later check is needed.
- `resolved` - terminal evidence shows the issue is recovered, closed, merged, or otherwise complete.

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
