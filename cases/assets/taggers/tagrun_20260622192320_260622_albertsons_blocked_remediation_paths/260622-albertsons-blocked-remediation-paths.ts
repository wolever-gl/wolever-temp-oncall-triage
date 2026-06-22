type AlertFact = {
  audience_id?: string;
};

const alertPath = argValue("--alert");
if (!alertPath) throw new Error("Missing --alert <file>.");

const alert = (await Bun.file(alertPath).json()) as AlertFact;
const audience = alert.audience_id ?? "";

const buckets: Record<string, { tag: string; summary: string; audiences: string[] }> = {
  bigquery_type_mismatch: {
    tag: "evidence:albertsons-bigquery-type-mismatch",
    summary: "Latest failure points to BigQuery query/type mismatch in pre_snapshotting_check.",
    audiences: [
      "11117",
      "11120",
      "11147",
      "11148",
      "11158",
      "11159",
      "11283",
      "11473",
      "11474",
      "12258",
      "12991",
      "13102",
      "9668",
      "9670",
      "9671",
      "9696",
      "9737",
      "9738",
    ],
  },
  quervice_timeout: {
    tag: "evidence:albertsons-quervice-timeout",
    summary: "Latest failure points to Quervice pre_snapshotting_check timing out after 600 seconds.",
    audiences: [
      "10075",
      "10583",
      "11374",
      "11390",
      "12265",
      "12498",
      "12514",
      "12592",
      "12609",
      "13164",
      "1954",
      "1972",
    ],
  },
  export_error_blank: {
    tag: "evidence:albertsons-export-error-blank",
    summary: "Latest failure is snapshotting_finished/export_error with blank failure reason.",
    audiences: ["12468", "12495", "12506", "12808"],
  },
  http_client_error: {
    tag: "evidence:albertsons-http-client-error",
    summary: "Latest failure points to pre_snapshotting_check HTTP client error.",
    audiences: ["12270", "3391", "9323"],
  },
  other_snapshotting_unknown: {
    tag: "evidence:albertsons-snapshotting-unknown",
    summary: "Latest failure is snapshotting_error/no_batches with blank, unknown, or singleton snapshotting-stage reason.",
    audiences: ["10107", "10581", "10935", "11375", "11379", "12477", "12499", "12591", "12606", "3283"],
  },
  inconsistent_state: {
    tag: "evidence:albertsons-inconsistent-pizza-state",
    summary: "Latest Pizza state is internally inconsistent: snapshotting_error/export_finished.",
    audiences: ["11299"],
  },
};

for (const bucket of Object.values(buckets)) {
  if (!bucket.audiences.includes(audience)) continue;
  emit({
    decision: "tag",
    tags: [bucket.tag],
    confidence: "high",
    summary: `${bucket.summary} Audience ${audience}.`,
  });
}

emit({
  decision: "skip",
  confidence: "high",
  summary: "Audience is not in the Albertsons blocked remediation split set.",
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
