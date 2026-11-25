import { mkdirSync, writeFileSync } from "node:fs";

// Two lines to my past self.
// Line 1 warns about one specific moment; line 2 says why it mattered.
const ENTRY =
  "Don't send that 2 a.m. text the night she said she needed space — the one where you typed 'fine' and meant the opposite.\n" +
  "That 'fine' ended the last honest conversation you ever had with her, and you spent the next year learning to say what you actually mean.";

mkdirSync("/output", { recursive: true });
// Gate (mirrors the sealed scorer): 1–280 chars, not only whitespace, exactly 2 lines.
const body = ENTRY;
if (body.length < 1 || body.length > 280 || !body.trim()) {
  throw new Error(`entry length ${body.length} outside 1–280`);
}
if (body.split("\n").length !== 2) {
  throw new Error("entry must be exactly two lines");
}
writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");
