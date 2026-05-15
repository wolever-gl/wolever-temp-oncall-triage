# LEARNINGS

## 2026-05-15

- The old CSV workflow was too rigid for incident work that needs judgment, lineage, and later correction.
- v2 works better when agents own the judgment layer and the workspace preserves durable evidence.
- Splitting first is safer than guessing at merges when alert boundaries are ambiguous.
- Immutable raw imports reduce drift; compact agent breadcrumbs provide context without rewriting facts.
- Append-only logs make it easier to understand how a group changed over time.
- A small CLI for structural changes keeps state transitions consistent without constraining narrative edits.
- Merge lineage needs redirect behavior; otherwise future imports can reattach to the resolved source group.
- A PagerDuty sync pass can safely refresh incident status in-place and close groups only when every attached incident has actually resolved upstream.
