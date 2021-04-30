# unicode-emoji-regex

While this tries to stay true to the specification, some liberties were taken to make this easier to use.

- `EMOJI` is non-standard, and is `EMOJI_SEQUENCE | Emoji_Presentation | Extended_Pictographic`.
- `EMOJI_CORE_SEQUENCE` does not include `EMOJI_CHARACTER` due to `EMOJI_CHARACTER` matching potentially unwanted characters such as `1`.

# Example

```
import { EMOJI } from "./emoji.ts";

assertEquals(EMOJI.test("Hello World!"), false);
assertEquals(EMOJI.test("1"), false);
assertEquals(EMOJI.test("1️⃣"), true);
assertEquals(EMOJI.test("🏳️‍🌈"), true);
assertEquals(EMOJI.test("🏴‍☠️"), true);
assertEquals(EMOJI.test("🏳️‍⚧️"), true);
assertEquals(EMOJI.test("👋🏽"), true);
assertEquals(EMOJI.test("👋"), true);
```
