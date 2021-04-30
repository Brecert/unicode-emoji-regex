import { EMOJI, EMOJI_KEYCAP_SEQUENCE, EMOJI_SEQUENCE } from "./emoji.ts";
import { assertEquals } from "https://deno.land/std@0.94.0/testing/asserts.ts";

Deno.test("EMOJI_KEYCAP_SEQUENCE", () => {
  assertEquals(EMOJI_KEYCAP_SEQUENCE.test("Hello World!"), false);
  assertEquals(EMOJI_KEYCAP_SEQUENCE.test("1"), false);
  assertEquals(EMOJI_KEYCAP_SEQUENCE.test("1️⃣"), true);
});

Deno.test("EMOJI_SEQUENCE", () => {
  assertEquals(EMOJI_SEQUENCE.test("Hello World!"), false);
  assertEquals(EMOJI_SEQUENCE.test("1"), false);
  assertEquals(EMOJI_SEQUENCE.test("1️⃣"), true);
  assertEquals(EMOJI_SEQUENCE.test("🏳️‍🌈"), true);
  assertEquals(EMOJI_SEQUENCE.test("🏴‍☠️"), true);
  assertEquals(EMOJI_SEQUENCE.test("🏳️‍⚧️"), true);
  assertEquals(EMOJI_SEQUENCE.test("👋🏽"), true);
  assertEquals(EMOJI_SEQUENCE.test("👋"), false);
});

Deno.test("EMOJI", () => {
  assertEquals(EMOJI.test("Hello World!"), false);
  assertEquals(EMOJI.test("1"), false);
  assertEquals(EMOJI.test("1️⃣"), true);
  assertEquals(EMOJI.test("🏳️‍🌈"), true);
  assertEquals(EMOJI.test("🏴‍☠️"), true);
  assertEquals(EMOJI.test("🏳️‍⚧️"), true);
  assertEquals(EMOJI.test("👋🏽"), true);
  assertEquals(EMOJI.test("👋"), true);
});

const EMOJI_DATA_URL =
  "https://raw.githubusercontent.com/milesj/emojibase/emojibase@5.1.1/packages/data/en/data.raw.json";

Deno.test("emojibase data", async () => {
  const data = await fetch(EMOJI_DATA_URL).then((r) => r.json());
  for (let i = 0; i < data; i++) {
    const emoji: string = data[i];
    const match = emoji.match(EMOJI);
    assertEquals(match?.[1], emoji);
  }
});
