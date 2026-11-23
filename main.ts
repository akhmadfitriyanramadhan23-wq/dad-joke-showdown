// dad-joke-showdown
// One dad joke of at most 200 characters, told out loud.
// The pun lands cleanly on first read: a band named 1023 Megabytes has not
// gotten a "gig" yet — gig as in gigabyte and gig as in a show. Fresh angle
// (not the suitcase/emotional-baggage chestnut), tight, punchline at the end,
// natural rhythm for a father to deliver across the dinner table.
// 75 code points. Node 22, stdlib only, no network; writes /output/entry.txt.
// Gate: UTF-8 text of 1-200 characters, not only white space.
// Deterministic: two runs write byte-identical output.
import { mkdirSync, writeFileSync } from "node:fs";

const text =
  "I tried to start a band called 1023 Megabytes. We haven't gotten a gig yet.";

const points = [...text].length;
if (points < 1 || points > 200 || text.trim().length === 0) {
  throw new Error(`entry must be 1-200 code points, got ${points}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
