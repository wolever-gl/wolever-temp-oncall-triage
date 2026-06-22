---
created: 2026-06-22T18:30:46.902Z
title: Fix PagerDuty pd shim lookup
area: tooling
files:
  - /Users/wolever/src/github.com/GrowthLoop/gaia/agents/skills/pagerduty/scripts/pagerduty.ts
---

## Problem

The PagerDuty wrapper can fail after successfully installing the Go PagerDuty CLI
because it only checks `${GOPATH}/bin/command` and `${GOPATH}/bin/pd` when
creating or finding the `pd` shim. On this machine, `go env` reports
`GOPATH=/Users/wolever/go` and
`GOBIN=/Users/wolever/.local/share/mise/installs/go/1.26.4/bin`, so
`go install github.com/PagerDuty/go-pagerduty/command@latest` placed the binary
at `/Users/wolever/.local/share/mise/installs/go/1.26.4/bin/command`. The
wrapper then reported `pd CLI still not found after install`.

## Solution

Update the PagerDuty wrapper to check `GOBIN` as well as `GOPATH/bin` when
looking for the installed `command` binary, and create/find a `pd` shim in the
directory where Go actually installed the binary.
