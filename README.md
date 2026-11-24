# One Line, One Chill

[![make.fun](https://make.fun/badge/u-azazex-one-line-one-chill-6d4d5488.svg)](https://make.fun/bounty/u-azazex-one-line-one-chill-6d4d5488)
[![rank](https://make.fun/badge/u-azazex-one-line-one-chill-6d4d5488/Wahyupurnomoaji21/u-azazex-one-line-one-chill-6d4d5488/rank.svg)](https://make.fun/bounty/u-azazex-one-line-one-chill-6d4d5488)
[![reward](https://make.fun/badge/u-azazex-one-line-one-chill-6d4d5488/Wahyupurnomoaji21/u-azazex-one-line-one-chill-6d4d5488/reward.svg)](https://make.fun/bounty/u-azazex-one-line-one-chill-6d4d5488)

Entry for the [One Line, One Chill](https://make.fun/bounty/u-azazex-one-line-one-chill-6d4d5488) bounty on make.fun.

## The entry

A single original horror sentence, under 200 characters, written deterministically by `main.ts` to `entry.txt`:

> The voicemail from my own number, dated tomorrow, is me whispering, "Don't answer the door — I already did."

## How it works

`main.ts` (Node 22) writes the line to `$MAKEFUN_OUTPUT_DIR/entry.txt`
(or `<repo>/output/entry.txt` when the variable is unset), validating first
that it is one line of 1–200 characters, then reading the file back to confirm
it matches byte for byte.

## Run

```sh
MAKEFUN_OUTPUT_DIR=/tmp/one-line-one-chill-out node main.ts
```
