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
   `preflight`, then `index`. A future `refresh` command should wrap the
   common version of this sequence.
2. Open `cases/index.md` and take the highest-priority non-resolved group. Start
   with the top `New` group unless there is a stronger operational reason to
   continue an `open`, `monitoring`, or `waiting` group.
3. Before manual investigation, check Google auth freshness and run
   `gcloud auth login --update-adc` when credentials are missing or stale,
   then run the case-scoped export preflight:

   ```bash
   bun run oncall-triage preflight cases --filter group.id=<group-id>
   ```

   This runs the relevant Pizza checks for the selected group, records check
   evidence in the case, resolves the group automatically when every
   alert-scoped export check is healthy, and moves the group to `monitoring`
   automatically when every attached check is either healthy or still
   processing. To run that operation across a queue, use
   `--filter group.state=new` or another state. If it resolves or moves a case
   to monitoring, move on to the next group. If it records `blocked` evidence,
   continue investigation from that generated evidence. Environments listed as
   unavailable in `cases/env_availability.json` are skipped instead of probed.
   When you have a hand-picked list of groups, run one batched command with
   `--filter "group.id in id1,id2,id3"` instead of looping over one
   `group.id=<id>` command per group.
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

The important habit is to investigate and decide one group at a time while
keeping alerts queryable across group boundaries. Evidence refresh commands may
cover a state queue or selected group list in one batched run; groups are still
the work queue and coordination surface, and evidence tags explain why any alert
belongs in a remediation path.

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
bun run oncall-triage import-active-pd cases
bun run oncall-triage import-pd cases --incident Q123ABC
bun run oncall-triage group cases
bun run oncall-triage tag cases --script ./tagger.ts --filter alert.org=acme_123 --limit 5 --test
bun run oncall-triage group cases --tag evidence:example --title "Example issue" --summary "..." --rationale "..." --test
bun run oncall-triage preflight cases --filter group.state=new
bun run oncall-triage preflight cases --filter "group.id in group-a,group-b,group-c"
bun run oncall-triage check-exports cases --filter group.id=<group-id> --apply --auto-resolve  # lower-level escape hatch; prefer preflight for normal triage
bun run oncall-triage evidence cases --group <group-id> --kind triage --source "gcloud scoped logs" --summary "..." --link "Scoped logs=https://console.cloud.google.com/logs/query;query=...?...project=..."
bun run oncall-triage index cases
bun run oncall-triage sync-pd cases --incident Q123ABC
```

Long-running commands should print progress as they work. In particular,
commands that fetch external evidence, open proxies, or evaluate many checks
should report what they are checking and what state they wrote instead of
remaining silent until completion.

Use repeatable namespaced `--filter key=value` arguments for command selection.
For selected ID lists, use the quoted `in` operator, for example
`--filter "group.id in group-a,group-b,group-c"`.
Supported alert filters are `alert.incident`, `alert.org`, `alert.audience`,
`alert.destination`, and `alert.state`. Supported group filters are `group.id`,
`group.state`, `group.tag`, and `group.incident`. Selector aliases such as
`--incident`, `--org`, `--audience`, `--destination`, `--group`, and queue
`--state` are no longer supported on selector-driven commands; use `--filter`
instead. Command arguments with distinct meanings, such as
`import-pd --incident`, `sync-pd --incident`, `transition --state`, and
`group --state`, are still valid.

`preflight` is the normal export evidence refresh command. It checks Google auth
freshness, refreshes credentials with `gcloud auth login --update-adc` when
needed, runs Pizza for selected alert facts, writes export-check evidence, and
resolves or monitors groups when the checks prove a terminal or in-flight state.
The lower-level `check-exports` command is still available when you need to
evaluate checks without group auto-transition behavior or when using
`--pizza-rows-file`.
`preflight --filter group.id=<group-id>` runs that case-scoped operation for one
group. `preflight --filter "group.id in id1,id2,id3"` runs selected groups in
one command. Prefer that over shell loops: one preflight command derives selected
checks once, batches Pizza requests by environment and org, keeps one live
Bifrost proxy per environment, and regenerates workspace indexes once at the
end. Without `group.id`, `preflight` runs it across every group in a selected
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
values for exact commands worth preserving. Moving a case to `waiting` requires
communication evidence in `evidence.jsonl` or `notes.md`; blocker evidence alone
is not enough.

When a triage decision depends on logs, keep the case self-orienting by saving a
compact representative artifact under `cases/artifacts/` and appending evidence
that names the artifact, the exact log query, and the relevant findings. Prefer
small per-audience or per-run summaries over dumping raw logs into `case.md`.
For example:

```bash
bun run oncall-triage evidence cases \
  --group <group-id> \
  --kind log_evidence \
  --source "gcloud logging" \
  --summary "Scoped logs show schema lookup failures for the affected audiences." \
  --artifact "Schema log artifact=cases/artifacts/YYMMDD-schema-log-evidence.json" \
  --log-query 'resource.type="k8s_container" jsonPayload.organization_id="org_123" "FieldNotFoundException"' \
  --finding "Audience 123: FieldNotFoundException for missing field customer_id in audience-results request."
```

For a new triage pass, start with `import-active-pd`. It lists active
PagerDuty incidents (`triggered` and `acknowledged`), imports each through the
same alert-preserving PagerDuty wrapper path as `import-pd`, groups imported
alerts, and regenerates the case indexes. Active incidents already stored under
`incidents/` are skipped by default; pass `--include-known` to import them again.

`import-pd` validates PagerDuty wrapper alert counts before grouping. If the raw
wrapper says `Alerts (N)`, the parsed derived facts must contain `N` alert facts
unless an explicit partial-import option is used for debugging or fixtures.

Group correction primitives:

```bash
bun run oncall-triage merge cases --source <group-id> --target <group-id> --rationale "Same root cause."
bun run oncall-triage merge cases --source <group-id> --source <group-id> --target <group-id> --rationale "Same root cause."
bun run oncall-triage split cases --group <group-id> --alerts <alert-id,alert-id> --rationale "Different root cause."
```

Use repeated `--source` flags when several groups merge into the same target;
do not loop one merge command per source.

Evidence-tagged grouping:

```bash
bun run oncall-triage tag cases \
  --filter alert.org=albertsons_6 \
  --filter alert.destination=live-ramp \
  --script ./taggers/one-off/260516-albertsons-liveramp-progress.ts \
  --tag monitoring:export-processing \
  --limit 10 \
  --test

bun run oncall-triage group cases \
  --tag evidence:liveramp-sftp-permission \
  --tag monitoring:export-processing \
  --group 260511-albertsons_6-liveramp-sftp-permission \
  --title "Albertsons LiveRamp SFTP permission retries" \
  --summary "Verified LiveRamp exports are still processing; monitor for upload completion." \
  --rationale "Grouped only alerts whose tagger evidence matched the failure mode." \
  --state monitoring \
  --group-tag monitoring:export-processing
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
2. Run `preflight` for the selected group, group list, or state queue to collect
   scoped export evidence in one batched pass.
3. Run a classifier tagger with `--test` first.
4. Before tagging a later successful run as recovered, check whether the failed
   export was a delta export. If scoped logs or batch messages show
   `export_type=deltas`, `delta_history_write_up`, `unload`, or
   `unloaded_deltas_write`, use
   [snapshotting-delta-recovery](runbooks/snapshotting-delta-recovery.md).
   Later success alone is not terminal evidence for delta exports because
   generated delta files may need re-drop or destination-specific retry.
5. Keep known outcomes as separate tags, such as recovered, monitoring,
   waiting, export failure, or snapshotting schema error. Use `monitoring:*`
   for exports that are still processing; reserve `waiting:*` for cases where
   durable evidence shows the blocker was communicated to an external owner.
6. Leave unfamiliar blocker combinations as `needs_evidence` until an agent
   adds a better rule.
7. Use `group --tag` to create one group per remediation path, not one group
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
  --tag monitoring:export-processing \
  --summary "Later export is processing; recheck after the next monitor window."
```

Before moving a case to `waiting`, record where the blocker was communicated:

```bash
bun run oncall-triage evidence cases \
  --group 260515-acme_123-a456-marketing-cloud-processing \
  --kind support_thread \
  --source "Slack #eng-support" \
  --summary "Support thread opened with the owning team for the client-side blocker." \
  --link "Support thread=https://flywheeltechnologies.slack.com/archives/C02J2RJ6VSL/p1778964420710189"

bun run oncall-triage transition cases \
  --group 260515-acme_123-a456-marketing-cloud-processing \
  --state waiting \
  --tag waiting:client_schema \
  --summary "Waiting on client schema remediation; support thread opened."
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
- `waiting` - blocked on an external owner only after the blocker has been communicated and the case includes durable evidence of that communication. The CLI enforces this using `evidence.jsonl` and `notes.md`; do not edit generated `case.md` to satisfy it.
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

Start with [retry-later-succeeded](runbooks/retry-later-succeeded.md) for
non-delta retries. If the failed export used snapshotting deltas, use
[snapshotting-delta-recovery](runbooks/snapshotting-delta-recovery.md) instead;
that runbook is stricter because future success alone may hide stranded or
already-marked delta files. These runbooks exercise the full loop: group, gather
evidence, resolve or keep open, write a PD breadcrumb when appropriate, and
reconcile PD when every alert is covered.

## Verification

```bash
bun run typecheck
bun run test
```
