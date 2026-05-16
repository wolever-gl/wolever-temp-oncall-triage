# LEXICON

Canonical terms and invariants for the on-call triage workspace.

## Core Model

### Raw PagerDuty Import

The immutable PagerDuty payload captured at import time, usually stored as
`alerts.raw.txt` plus `incident.json`.

Invariants:

- Never rewrite raw PagerDuty text to correct parser mistakes.
- Raw text is evidence, not a workspace state file.
- If PagerDuty wrapper output says `Alerts (N)`, the parser must produce `N`
  alert facts before grouping, unless a command explicitly allows partial
  import.

### Alert Fact

A normalized, versioned derived fact representing one PagerDuty alert. Alert
facts are the primary query surface.

Expected fields include:

- PagerDuty identity: incident id, alert id, alert status, alert creation time.
- Scope: org identifier, audience or signal id, endpoint, destination, checked
  run ids, state tuple, service, and error signature.
- Provenance: parser version, raw block or raw payload reference, and confidence
  where inference was required.

Invariants:

- Parsed alert facts are derived, not raw truth.
- Parser improvements create a new derived version instead of mutating history.
- One PagerDuty alert may produce destination-scoped child facts when multiple
  checked run ids prove multiple destinations. The parent alert remains
  immutable and queryable.

### Group

A loose operational workspace for triage. Groups help agents coordinate work,
track state, write summaries, and apply runbooks.

Invariants:

- Groups are not the canonical taxonomy of incidents.
- A group may span multiple PagerDuty incidents.
- Alert facts must remain queryable across group boundaries.
- A group can be wrong and later corrected by merge, split, or explicit match
  rule changes.
- `state.json` is a materialized current snapshot, not the only audit record.

### Case

The set of files that make a group usable by humans and tools: `state.json`,
`case.md`, append-only logs, and artifacts.

Invariants:

- `case.md` is narrative and may be edited directly.
- Structural changes should go through CLI operations and append events.

## Identity And Matching

### Org Identifier

The canonical org id used in group IDs and matching, including the numeric
suffix.

Examples:

- `albertsons_6`
- `chghealthcare_395`
- `gopuff_544`

Invariants:

- Do not drop the numeric suffix in canonical IDs.
- Display names may be friendlier, but canonical identity uses the full org
  identifier.

### Group ID

The immutable human-facing identifier for a group.

Format:

```text
YYMMDD-<org_identifier>-<something>
```

For initial root-cause hypothesis groups:

```text
YYMMDD-<org_identifier>-<failure-class>
```

Examples:

- `260514-chghealthcare_395-no-batches`
- `260515-albertsons_6-zero-success`
- `260515-gopuff_544-snapshotting-error`

Destination may be included for export-specific classes:

```text
YYMMDD-<org_identifier>-<destination-product>-<failure-class>
```

Example:

- `260514-trumanshow_336-adobe-experience-platform-export-error`

Invariants:

- The date comes from the earliest parsed PagerDuty alert in the group at
  creation time.
- The group ID does not change if older alerts are attached later.
- Include destination product slugs in group IDs only when destination is part
  of the root-cause hypothesis, such as `export-error` or `export-processing`.
- Preserve exact endpoint and raw destination fields in facts and match keys.

### Match Rule

The single model for active deterministic keys, aliases, redirects, and
ambiguous split keys.

Conceptual fields:

- `match_key`
- `status`: `active`, `redirect`, or `ambiguous`
- `target_group_id`
- `reason`: for example `created`, `merged`, `split`, or `migration_alias`
- provenance: timestamp, actor, and rationale

Invariants:

- Active match rules attach future matching facts to a group.
- Redirect match rules point old keys or old group ids to the canonical group.
- Ambiguous match rules prevent silent reattachment after a split.
- A group may have multiple active match rules only through explicit agent or
  CLI action with rationale.

### Deterministic Key

A structured match key produced from alert-level facts. In v2, deterministic
keys are represented as match rules rather than a single string on `state.json`.

Invariants:

- Initial deterministic matching is alert-first.
- Incident titles are not deterministic matching inputs.
- Derived root-cause evidence does not affect initial import grouping.

## Grouping Boundaries

### Alert-First Grouping

The importer groups parsed alert facts into incident-local root-cause
hypotheses. The default grouping key is incident + org + failure class.
Destination is added only when it is likely part of the cause, such as
`export-error` or `export-processing`.

Invariants:

- Do not run external evidence tools during initial grouping.
- Do not infer root-cause groups from broad alert text alone.
- Do not split initial groups by audience.
- Do not split `no-batches`, `zero-success`, or generic client-sent failures by
  destination on import.
- Split by destination for export-specific states where the destination is a
  plausible cause boundary.
- If parser confidence is too low, fail import or create an explicit
  incident-scoped fallback only when partial import is allowed.

### Alert Annotation

An append-only derived fact created by running an archived tagger script against
one alert fact. An annotation can tag, skip, or mark an alert as needing more
evidence.

Invariants:

- An annotation is evidence about one alert, not proof that every alert in a
  query belongs to a group.
- Tagger scripts are archived with a run id and hash before their output is
  trusted.
- Script stdout, stderr, exit status, parsed output, and parse failures are
  captured per alert.
- `--test` mode may execute the script but must not write annotations or
  assets.

### Evidence Tag

A derived label applied to alert annotations, such as
`evidence:liveramp-sftp-permission` or `waiting:uploads`.

Invariants:

- Tags are produced by evidence collection, not by broad query matching alone.
- Group membership may be selected by tag, but the annotation remains the audit
  trail explaining why each alert matched.
- Multiple tags in a group command mean the alert must have accumulated all
  requested positive tags from prior annotations.

### Tagger Script

An agent-authored executable that receives one alert fact and emits structured
JSON:

```json
{
  "decision": "tag",
  "tags": ["evidence:liveramp-sftp-permission"],
  "confidence": "high",
  "summary": "Found matching permission-denied logs.",
  "evidence": []
}
```

Invariants:

- Allowed decisions are `tag`, `skip`, and `needs_evidence`.
- A malformed or failing tagger run becomes `needs_evidence`; it does not apply
  tags silently.
- Taggers should join external evidence back to alert scope: org, audience,
  endpoint, run id, destination, and time window.

### Related Group

A generated or explicit relationship between groups.

Invariants:

- Same org, destination, state tuple, incident, or error signature may produce
  generated related-group suggestions.
- Generated suggestions are navigation aids and should not be treated as audit
  history.
- Persist relationships only after explicit agent action or merge/split lineage.

### Cohort

A generated view over alert facts or groups, such as same org + destination +
state tuple.

Invariants:

- Cohorts are generated from facts and indexes.
- Cohorts are not persisted objects until a future design explicitly adds that
  lifecycle.
- Cohorts must not hide underlying alert facts or groups.

### Root-Cause Group

A normal group that has been explicitly promoted or merged around a shared
root-cause workflow.

Invariants:

- There is no separate parent-group type for now.
- Root-cause grouping requires explicit evidence and action. The preferred path
  is `tag` followed by `group --tag`.
- Merge child groups only when one remediation path and owner cover them; keep
  them related but separate otherwise.

## Evidence And Events

### Evidence Event

An append-only record of observed facts or investigation output, such as glcli
results, scoped logs, or PagerDuty sync information.

Invariants:

- Evidence should cite scope: org, audience, run id, endpoint, incident, and
  source where applicable.
- A broad log search is not incident evidence unless it joins back to alert
  scope.

### Decision Event

An append-only record explaining why the agent or CLI changed interpretation or
state.

Invariants:

- Decisions should include rationale, not just outcome.
- Merge, split, and promotion decisions must be reconstructable later.

### Structural Event

An append-only record for mutations to materialized group state, match rules, or
attachments.

Invariants:

- `state.json` may be updated for convenience, but structural changes should
  also be recorded as events.

## PagerDuty Fields

### Checked Export Run ID

A run identifier from PagerDuty alert details, often shaped like:

```text
<audience_id>-<destination_type>_<endpoint_id>-<trigger_type>__<timestamp>
```

Example:

```text
28175-tik_tok_17978-scheduled__2026-05-15T00:00:00+00:00
```

Invariants:

- Use checked run ids to derive destination and endpoint when explicit
  `endpoint_id` is absent.
- Multiple checked run ids with different destinations may produce
  destination-scoped child facts.

### State Tuple

The alert state pair from messages like:

```text
states: <(snapshotting_finished,export_processing)>
```

Invariants:

- Preserve both tuple parts, even when one side is empty.
- State tuple is grouping input only with alert-level scope.

### Incident Title

PagerDuty incident-level text.

Invariants:

- May enrich display or low-confidence hints.
- Must not be used for deterministic matching.

## Open Constraints

- The first build slice should complete immutable parsed alert facts and the
  query surface before replacing grouping behavior.
- Existing `grp_*` cases should be migrated through central match-rule aliases
  rather than empty tombstone directories.
- Current committed case data may contain parser-collapsed groups; treat it as
  historical evidence of the failure mode, not a model to preserve.
