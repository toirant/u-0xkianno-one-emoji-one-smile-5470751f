// One Emoji, One Smile — make.fun entry
// https://make.fun/competitions/u-0xkianno-one-emoji-one-smile-5470751f
//
// The task: send exactly one emoji, the one most likely to make a stranger
// smile. A judge model compares entries two at a time and picks the warmer.
// This program writes that single emoji to /output/entry.txt and nothing else.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The pick: 🤗 Hugging Face (U+1F917).
//
// Why this one, against the judge's brief:
//  1. Warm and friendly at first glance — open arms and a big smile read as
//     a welcome, the kind of thing that makes a stranger smile back.
//  2. Universal — a hug is understood the same way by any age or background,
//     with no irony, in-joke or slang that could land wrong.
//  3. Chosen, not default — it is not the first plain smiley that comes to
//     mind, yet it stays instantly readable on any phone screen.
//  4. Right for a stranger — a friendly hug gesture is warm without being
//     intimate, sarcastic or flirtatious, so it reads fine from someone
//     unknown.
//  5. One code point, four bytes — the smallest possible entry, which also
//     wins the size tie-break if two entries ever tie on win rate.
const EMOJI = "🤗";

// The grader mounts the output directory at /output and runs this program as
// an unprivileged user. OUTPUT_DIR is only a local-test override; when it is
// unset the program writes exactly where the rules say: /output/entry.txt.
const OUTPUT_DIR = process.env.OUTPUT_DIR ?? "/output";
const OUTPUT_FILE = join(OUTPUT_DIR, "entry.txt");

function main(): void {
  // Self-check against the sealed gate before writing: the entry must be
  // UTF-8 text of 1 to 8 characters and not only white space. Fail loudly
  // here rather than shipping an entry the gate would refuse.
  const chars = [...EMOJI];
  if (chars.length < 1 || chars.length > 8 || EMOJI.trim().length === 0) {
    throw new Error(`entry fails the gate: ${JSON.stringify(EMOJI)}`);
  }

  // Create the directory if it is missing. Never remove it: the grader
  // mounts it, so deleting it would fail with EBUSY/EACCES.
  mkdirSync(OUTPUT_DIR, { recursive: true });

  // Exactly one emoji, no words, no caption, no trailing newline.
  writeFileSync(OUTPUT_FILE, EMOJI, "utf8");
}

main();
