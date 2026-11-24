// One Line, One Chill — entry program.
// Writes a single original horror sentence (under 200 characters) to
// <MAKEFUN_OUTPUT_DIR>/entry.txt, deterministically.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR
  ? process.env.MAKEFUN_OUTPUT_DIR
  : join(repoRoot, "output");

const ENTRY =
  "The voicemail from my own number, dated tomorrow, is me whispering, \"Don't answer the door — I already did.\"";

if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`entry length ${ENTRY.length} outside the 1-200 gate`);
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry is only whitespace");
}

if (ENTRY.includes("\n")) {
  throw new Error("entry must be a single line");
}

mkdirSync(outDir, { recursive: true });
const entryPath = join(outDir, "entry.txt");
writeFileSync(entryPath, ENTRY, "utf8");
const written = readFileSync(entryPath, "utf8");
if (written !== ENTRY) {
  throw new Error("written entry does not match the source line");
}
console.log(`wrote ${ENTRY.length} characters to ${entryPath}`);
