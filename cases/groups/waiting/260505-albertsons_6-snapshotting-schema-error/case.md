# Albertsons snapshotting schema errors

State: `waiting`
Tags: `triage:snapshotting-schema`, `triage:tag_grouped`, `waiting:source-schema`
Incidents: [Q2T09VCLN9MRZ8](https://growthloop.pagerduty.com/incidents/Q2T09VCLN9MRZ8)
Alerts: 5

## Current Summary

Blocked on Albertsons source/schema remediation: scoped snapshotting logs show missing fields in RFM_Category_Group, and live pizza shows no later successful terminal export for the five alert-scoped runs.

## Next Action

Track customer/source-owner follow-up in Slack thread https://flywheeltechnologies.slack.com/archives/C02J2RJ6VSL/p1778902074333359, then recheck the five alert-scoped audiences for a later `snapshotting_finished`/`export_finished` run before resolving.

## Decision Trail

See `lineage.jsonl`, `decisions.jsonl`, `evidence.jsonl`, and `actions.jsonl` for the durable audit trail.
