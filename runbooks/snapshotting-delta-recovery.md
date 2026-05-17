---
id: snapshotting-delta-recovery
name: Snapshotting Delta Recovery / Redrop Decision
state_terminal: resolved
terminal_tag: resolved:retry_succeeded
approval_required_for_remediation: true
---

# Snapshotting Delta Recovery / Redrop Decision

Use this runbook when a PagerDuty alert reports an audience or signal export
failure and Pizza shows a `snapshotting_error` or `no_batches` run for a delta
export. The goal is to decide whether a later run recovered the missed delta
window, or whether files from the failed run were already generated and need a
manual re-drop/retry.

This runbook is intentionally stricter than `retry-later-succeeded`: future
successful runs are not enough by themselves for delta exports. The important
distinction is whether the failed run could have generated delta files. A run
that fails before delta generation/unload is lower risk than a run that reached
delta or unload stages.

## Applicability

This runbook can apply when:

- The alert is for an audience/signal export that uses snapshotting and deltas.
- Pizza or logs identify org, target id, destination/export id, and at least one
  candidate failed external run id.
- The failed run and a later same-scope run can be checked with scoped Pizza and
  logs.

Do not use this runbook when:

- The investigation cannot identify the failed run family or destination/export id.
- Logs are only broad org logs and are not scoped to the target/run/request.
- The failed run reached export destination processing and has failed/rejected
  destination rows; use a destination-specific runbook or escalate.
- You need to run replay, retry, unload, or re-drop commands. Those are
  production-impacting and require explicit human approval.

## Required Evidence

Capture evidence in the group before resolving or escalating:

- The raw PagerDuty alert id(s), incident id, org id, target id, destination, and
  source Pizza command.
- Pizza rows for the failed run and later same-scope runs, including:
  - `export_run_id`
  - created time
  - snapshotting state
  - export state
  - total/add/remove/failure/reject counts when available
  - failure reason when present
- Scoped logs for the failed external run id or request id. Minimum useful
  filters are org id, internal target id, and the run id/request id.
- Whether the failed run reached each quervice stage:
  - `snapshot_history_write_up`
  - `metadata_write_up`
  - `delta_history_write_up`
  - `unload`
  - `unloaded_deltas_write`
- Scoped logs for the later same-scope run proving which stages completed.
- A short explanation of whether delta files existed and whether they were
  marked unloaded.

Useful command shapes:

```bash
glcli --env prod bifrost pizza --audience-id <target_id> --org-id <org_id> --format=json
```

```bash
gcloud logging read 'timestamp>="<start>" AND timestamp<="<end>" AND resource.type="k8s_container" AND jsonPayload.organization_id="<org_slug>_<org_id>" AND jsonPayload.internal_audience_id="<target_id>" AND (jsonPayload.external_run_id="<external_run_id>" OR jsonPayload.request_id="<request_id>")' --project=flywheel-prod-328213 --limit=200 --format=json
```

```bash
gcloud logging read 'timestamp>="<start>" AND timestamp<="<end>" AND resource.type="k8s_container" AND jsonPayload.organization_id="<org_slug>_<org_id>" AND jsonPayload.internal_audience_id="<target_id>" AND (jsonPayload.report_name="snapshot_history_write_up" OR jsonPayload.report_name="metadata_write_up" OR jsonPayload.report_name="delta_history_write_up" OR jsonPayload.report_name="unload" OR jsonPayload.report_name="unloaded_deltas_write")' --project=flywheel-prod-328213 --limit=300 --format=json
```

## Decision Rules

### Safe To Resolve As Recovered

Resolve with `resolved:retry_succeeded` when either safe recovery path is
satisfied.

#### Path A: Failed Before Delta Files Existed

Use this path when the failed run died before it could create delta files. All
of these must be true:

- Scoped logs show the failed run did not complete `delta_history_write_up`.
- Scoped logs show the failed run did not complete `unload`.
- Scoped logs show the failed run did not complete `unloaded_deltas_write`.
- The failure occurred in an earlier stage such as pre-snapshot validation,
  snapshot history, metadata, query compilation, or another stage before delta
  rows/files were generated.
- A later same target/export id run completed enough of the same export path to
  prove recovery:
  - for a full delta recovery, it completed `snapshot_history_write_up`,
    `metadata_write_up`, `delta_history_write_up`, `unload`, and
    `unloaded_deltas_write`;
  - if the alert was only about the pre-delta snapshotting failure, destination
    row-level failures/rejects in the later run should be handled separately
    with a destination-specific case or tag, not treated as evidence that delta
    files from the failed run were stranded.
- Pizza/logs for the later run show the snapshotting/delta stages succeeded.

Reasoning: if the failed run never completed `delta_history_write_up`, `unload`,
or `unloaded_deltas_write`, then it did not create delta files that could be
stranded or missed. A subsequent successful same-scope run can recover the
snapshotting/delta window. Later destination row failures may still matter, but
they are a separate destination-delivery question, not a blocker for resolving
the original pre-delta snapshotting failure.

#### Path B: Failed After Delta Rows May Exist

Use this stricter path when the failed run reached or may have reached delta
generation. All of these must be true:

- The failed run did not complete `unload`.
- The failed run did not complete `unloaded_deltas_write`.
- The failed run either did not complete `delta_history_write_up`, or later
  evidence shows its delta rows were selected and marked by a later unload.
- A later same target/export id run completed `snapshot_history_write_up`,
  `metadata_write_up`, `delta_history_write_up`, `unload`, and
  `unloaded_deltas_write`.
- Pizza for the later run is healthy, such as `snapshotting_finished` and
  `export_finished` with zero failures/rejects.

Reasoning: quervice delta generation compares the current snapshot to the most
recent metadata run for that export, and unload selects delta rows that do not
yet have an `unloaded_deltas` marker, plus current-run deltas. If the failed run
never generated/unloaded files, the next successful same-scope run should cover
the missed delta window.

### Do Not Resolve Without Human Review

Leave open or transition to `waiting` only after communication evidence when:

- The failed run completed `unload` but did not complete `unloaded_deltas_write`.
  Files may exist without a durable unloaded marker.
- The failed run completed `unloaded_deltas_write` but Pizza/export did not send
  successfully. Files may need destination-specific retry or re-drop.
- Later runs are healthy but use a different destination/export id.
- Logs show `delta_history_write_up` succeeded for the failed run, but you cannot
  prove whether its deltas were later selected by unload.
- The failure is due to schema, query, permissions, credentials, or client data.
  These are not retry-later cases unless the scoped evidence proves the failure
  happened before delta files existed and a later same-scope run recovered the
  snapshotting/delta path. In that pre-delta case, resolve the snapshotting
  failure and track any remaining client/destination issue separately.

Use `waiting:*` only when the blocker has been communicated to the owning team or
client and the case includes durable evidence of that communication.

## Guardrails

- Do not infer from broad logs. Scope by org, target id, and run/request id.
- Do not treat a future healthy run as sufficient for delta exports unless the
  stage evidence above is present.
- Do not run production-impacting commands under this runbook without explicit
  approval: retry, replay, unload, re-drop, destination send, export trigger, or
  data mutation.
- Do not resolve if any attached alert lacks its own scoped explanation.
- Prefer keeping the case open with `triage:needs_evidence` over guessing.

## Case Note Template

```text
Delta recovery checked: failed run <run_id> reached <last_successful_stage> and
failed at <failed_stage> with <error>. It did/did not complete unload or
unloaded_deltas_write. Later same-scope run <run_id> completed
snapshot_history_write_up, metadata_write_up, delta_history_write_up, unload,
and unloaded_deltas_write, and Pizza shows <healthy_state>. Conclusion:
<safe to resolve / needs redrop review>, because <delta-file reasoning>.
```

## Terminal Criteria

The group may be resolved when every alert in the group has scoped evidence that
no generated delta files are stranded, or that a later same-scope run selected
and marked the missed deltas. Otherwise keep the group open or waiting with the
specific missing evidence or owner action.
