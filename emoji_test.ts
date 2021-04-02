import { EMOJI_KEYCAP_SEQUENCE, EMOJI_SEQUENCE } from "./emoji.ts";
import { assertEquals } from "https://deno.land/std@0.91.0/testing/asserts.ts";

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
});
