type AlertFact = {
  alert_id: string;
  incident_id: string;
  org_id?: string;
  created_at?: string;
  summary?: string;
  audience_id?: string;
};

const alertPath = argValue("--alert");
if (!alertPath) throw new Error("Missing --alert <file>.");

const alert = (await Bun.file(alertPath).json()) as AlertFact;
const cutoff = Date.parse("2026-06-18T00:00:00-07:00");
const createdAt = alert.created_at ? Date.parse(alert.created_at) : Number.NaN;
const summary = alert.summary ?? "";

if (
  alert.org_id === "albertsons_6" &&
  Number.isFinite(createdAt) &&
  createdAt >= cutoff &&
  /sent to client/i.test(summary)
) {
  emit({
    decision: "tag",
    tags: ["evidence:albertsons-client-sent-since-260618"],
    confidence: "high",
    summary: `Albertsons sent-to-client export failure since 2026-06-18 for audience ${alert.audience_id ?? "unknown"}.`,
  });
}

emit({
  decision: "skip",
  confidence: "high",
  summary: "Alert is outside the Albertsons sent-to-client slice since 2026-06-18.",
});

function argValue(name: string): string | undefined {
  const idx = process.argv.indexOf(name);
  if (idx === -1) return undefined;
  return process.argv[idx + 1];
}

function emit(value: unknown): never {
  console.log(JSON.stringify(value));
  process.exit(0);
}
