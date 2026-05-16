# LEARNINGS

## 2026-05-15

- The old CSV workflow was too rigid for incident work that needs judgment, lineage, and later correction.
- v2 works better when agents own the judgment layer and the workspace preserves durable evidence.
- Splitting first is safer than guessing at merges when alert boundaries are ambiguous.
- Immutable raw imports reduce drift; compact agent breadcrumbs provide context without rewriting facts.
- Append-only logs make it easier to understand how a group changed over time.
- A small CLI for structural changes keeps state transitions consistent without constraining narrative edits.
- A distinct `new` state is useful because "imported and grouped" is not the same as "someone has started investigation." Evidence collection should move `new` cases to `open`.
- `waiting` is easy to overuse during investigation. Treat it as "communicated and awaiting owner action," not merely "appears blocked on someone else."
- Merge lineage needs redirect behavior; otherwise future imports can reattach to the resolved source group.
- A PagerDuty sync pass can safely refresh incident status in-place and close groups only when every attached incident has actually resolved upstream.
- The current committed cases show a parser failure mode: PagerDuty wrapper output like `Alerts (182)` was collapsed into one synthetic alert, which made every downstream group look like `unknown_org/unknown_destination/unknown_audience`.
- Grouping cannot be reliable until alert facts are parsed one-per-alert, versioned, immutable, and queryable independently of group membership.
- Incident titles are useful as display hints, but alert-level fields must win because titles can be incomplete or wrong for multi-alert incidents.
- Generated cohorts are a better fit than persisted cohort objects; they help agents navigate bursts without adding another lifecycle to maintain.
- For export evidence, rejected rows are usually normal and should not be treated as a failure by default. Failed rows, `export_error`, and `snapshotting_error` are the important blockers.
- A common export triage pattern is: start with a broad related cohort, run scoped evidence checks per alert, classify only evidence-backed outcomes, and group by tags. Known classes should not become a closed taxonomy; unknown blockers should stay visible as `needs_evidence` until a future tagger handles them.
