import { describe, it, expect } from "@jest/globals";
import { Suits, Ranks } from "../src/routers/types.js";
import {
  parseSuit,
  parseRank,
  RANKS_ORDERED,
  rankToValue,
  valueToRank,
  SUIT_EMOJI_MAP,
} from "../src/routers/utils.js";

describe("draw utils", () => {
  it("parses suits and maps to emoji", () => {
    expect(parseSuit("s")).toBe(Suits.Spades);
    expect(parseSuit("H")).toBe(Suits.Hearts);
    expect(parseSuit("diamonds")).toBe(Suits.Diamonds);
    expect(parseSuit("club")).toBe(Suits.Clubs);
    expect(parseSuit("unknown")).toBeUndefined();

    expect(SUIT_EMOJI_MAP[Suits.Spades]).toBe("\u2660");
    expect(SUIT_EMOJI_MAP[Suits.Hearts]).toBe("\u2665");
    expect(SUIT_EMOJI_MAP[Suits.Diamonds]).toBe("\u2666");
    expect(SUIT_EMOJI_MAP[Suits.Clubs]).toBe("\u2663");
  });

  it("parses ranks across faces and numbers", () => {
    expect(parseRank("A")).toBe(Ranks.Ace);
    expect(parseRank("1")).toBe(Ranks.Ace);
    expect(parseRank("10")).toBe(Ranks.Ten);
    expect(parseRank("k")).toBe(Ranks.King);
    expect(parseRank("13")).toBe(Ranks.King);
    expect(parseRank("0")).toBeUndefined();
    expect(parseRank("14")).toBeUndefined();
    expect(parseRank("foo")).toBeUndefined();
  });

  it("keeps ranks ordered and converts to/from values", () => {
    // Ordered sequence length and monotonic increasing values
    expect(RANKS_ORDERED.length).toBe(13);
    const values = RANKS_ORDERED.map((r) => rankToValue[r]);
    for (let i = 1; i < values.length; i++) {
      expect(values[i]).toBe(values[i - 1] + 1);
    }

    // Round-trip value -> rank -> value
    for (let v = 1; v <= 13; v++) {
      const r = valueToRank(v)!;
      expect(rankToValue[r]).toBe(v);
    }

    // Out-of-range returns undefined
    expect(valueToRank(0)).toBeUndefined();
    expect(valueToRank(14)).toBeUndefined();
  });
});

