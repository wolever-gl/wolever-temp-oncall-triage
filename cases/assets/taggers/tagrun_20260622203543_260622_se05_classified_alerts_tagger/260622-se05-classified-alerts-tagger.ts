type AlertFact = {
  alert_id: string;
  incident_id: string;
  audience_id?: string;
};

const alertPath = argValue("--alert");
if (!alertPath) throw new Error("Missing --alert <file>.");

const alert = (await Bun.file(alertPath).json()) as AlertFact;
const ref = `${alert.incident_id}/${alert.alert_id}`;

const buckets: Record<string, { tag: string; summary: string; refs: string[] }> = {
  bigquery_type_mismatch: {
    tag: "evidence:260622-se05-bigquery-type-mismatch",
    summary: "SE05 alert belongs with Albertsons BigQuery type mismatch failures.",
    refs: [
      "Q1S0Q38FOEN2XY/Q3QSPYAEZCWWX1",
      "Q1S0Q38FOEN2XY/Q0GB6GMZTNLA6N",
      "Q1S0Q38FOEN2XY/Q31KXCL512ORCS",
      "Q1S0Q38FOEN2XY/Q3N3SLVZH82U85",
      "Q1S0Q38FOEN2XY/Q2RB5WG2WUDFPR",
      "Q1S0Q38FOEN2XY/Q0710TTPXJLKDR",
      "Q1S0Q38FOEN2XY/Q2I7PPSFXCE9D0",
      "Q1S0Q38FOEN2XY/Q0U1LXTT47O3NZ",
      "Q1S0Q38FOEN2XY/Q13KHJ175T37N6",
    ],
  },
  quervice_timeout: {
    tag: "evidence:260622-se05-quervice-timeout",
    summary: "SE05 alert belongs with Albertsons Quervice timeout/503 failures.",
    refs: [
      "Q1S0Q38FOEN2XY/Q2IST76K5AY6MR",
      "Q1S0Q38FOEN2XY/Q311410O90EFHR",
      "Q1S0Q38FOEN2XY/Q0NMC9Y9W3RQGN",
      "Q1S0Q38FOEN2XY/Q0IX8NOFZKPWF5",
      "Q1S0Q38FOEN2XY/Q04PEHO7Q7B29T",
      "Q1S0Q38FOEN2XY/Q25LG3U2I3I5V9",
      "Q1S0Q38FOEN2XY/Q2DYXOAK6QJ78M",
      "Q1S0Q38FOEN2XY/Q0UL47E3YFQTVV",
      "Q1S0Q38FOEN2XY/Q3DANNRE1URWVM",
      "Q1S0Q38FOEN2XY/Q3005U6GTLCOFC",
    ],
  },
  missing_source_schema_field: {
    tag: "evidence:260622-se05-missing-source-schema-field",
    summary: "SE05 alert belongs with Albertsons missing-column/source-schema failures.",
    refs: ["Q1S0Q38FOEN2XY/Q2SA2EL0F19V60"],
  },
};

for (const bucket of Object.values(buckets)) {
  if (!bucket.refs.includes(ref)) continue;
  emit({
    decision: "tag",
    tags: [bucket.tag],
    confidence: "high",
    summary: `${bucket.summary} Audience ${alert.audience_id ?? "unknown"}, alert ${ref}.`,
  });
}

emit({
  decision: "skip",
  confidence: "high",
  summary: `Alert ${ref} is not one of the SE05 classified alerts being moved.`,
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
