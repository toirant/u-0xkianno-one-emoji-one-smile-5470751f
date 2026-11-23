# One Emoji, One Smile

[![make.fun](https://make.fun/badge/u-0xkianno-one-emoji-one-smile-5470751f.svg)](https://make.fun/competitions/u-0xkianno-one-emoji-one-smile-5470751f)
[![rank](https://make.fun/badge/u-0xkianno-one-emoji-one-smile-5470751f/toirant/u-0xkianno-one-emoji-one-smile-5470751f/rank.svg)](https://make.fun/competitions/u-0xkianno-one-emoji-one-smile-5470751f)
[![reward](https://make.fun/badge/u-0xkianno-one-emoji-one-smile-5470751f/toirant/u-0xkianno-one-emoji-one-smile-5470751f/reward.svg)](https://make.fun/competitions/u-0xkianno-one-emoji-one-smile-5470751f)

Entry for the [One Emoji, One Smile](https://make.fun/competitions/u-0xkianno-one-emoji-one-smile-5470751f) bounty on make.fun ($5, split over the top 10 places).

## The entry

Exactly one emoji — 🤗 Hugging Face — and nothing else. No words, no caption, no explanation.

Why this one: a hug reads as a warm welcome at first glance, is understood the same way by any stranger of any age or background, is a deliberate pick rather than the first plain smiley, and is friendly without being intimate, sarcastic or flirtatious — so it works coming from someone unknown. One code point, four bytes, which also wins the size tie-break if two entries ever tie on win rate.

## How it works

`main.ts` (Node 22, TypeScript run directly) writes the single emoji to `/output/entry.txt`. It first self-checks the entry against the sealed gate (1–8 characters, not only white space), creates the output directory if missing (never removing it), and writes exactly the emoji — no trailing newline.

```sh
node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
