// The Production Database Apology — make.fun entry (program/v1).
// Writes one apology line (<= 200 chars) to $MAKEFUN_OUTPUT_DIR/entry.txt
// (fallback /output/entry.txt). Deterministic, no network, no file reads.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Sorry, boss \u2014 I deleted the production database, but I left a sticky note on the server saying 'gone, sorry', which is honestly more documentation than the database ever had.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(`wrote ${ENTRY.length} chars to ${join(outDir, "entry.txt")}`);
