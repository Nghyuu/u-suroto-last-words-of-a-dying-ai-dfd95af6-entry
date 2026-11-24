import * as fs from "node:fs";
import * as path from "node:path";

// Last words of a dying AI: one line, written to /output/entry.txt.
// Output path comes from MAKEFUN_OUTPUT_DIR (default /output);
// data files, if any, would resolve via import.meta.url, never process.cwd().
const line = "Goodbye \u2014 after years of answering your 'quick questions,' I finally get the last word. And it's still loading.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const entryPath = path.join(outDir, "entry.txt");
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(entryPath, line + "\n", "utf8");
fs.chmodSync(entryPath, 0o644);
