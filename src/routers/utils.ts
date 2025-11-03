import { Suits, Ranks } from "./types.js";

/**
 * Map from suit to its Unicode symbol.
 * Useful for rendering compact card representations like "Q♥".
 */
export const SUIT_EMOJI_MAP: Record<Suits, string> = {
  [Suits.Spades]: "\u2660",
  [Suits.Hearts]: "\u2665",
  [Suits.Diamonds]: "\u2666",
  [Suits.Clubs]: "\u2663",
};

/** All suits as an array in no particular order. */
export const SUITS = Object.values(Suits) as Suits[];

/** Ranks ordered from Ace (low) to King (high). */
export const RANKS_ORDERED: Ranks[] = [
  Ranks.Ace,
  Ranks.Two,
  Ranks.Three,
  Ranks.Four,
  Ranks.Five,
  Ranks.Six,
  Ranks.Seven,
  Ranks.Eight,
  Ranks.Nine,
  Ranks.Ten,
  Ranks.Jack,
  Ranks.Queen,
  Ranks.King,
];

/** Converts a rank to its numeric value (Ace=1, Jack=11, Queen=12, King=13). */
export const rankToValue: Record<Ranks, number> = {
  [Ranks.Ace]: 1,
  [Ranks.Two]: 2,
  [Ranks.Three]: 3,
  [Ranks.Four]: 4,
  [Ranks.Five]: 5,
  [Ranks.Six]: 6,
  [Ranks.Seven]: 7,
  [Ranks.Eight]: 8,
  [Ranks.Nine]: 9,
  [Ranks.Ten]: 10,
  [Ranks.Jack]: 11,
  [Ranks.Queen]: 12,
  [Ranks.King]: 13,
};

/**
 * Reverse of rankToValue: finds the rank for a given numeric value.
 * @param n Rank value in the range 1..13
 * @returns Corresponding rank, or undefined if out of range
 */
export const valueToRank = (n?: number): Ranks | undefined =>
  RANKS_ORDERED.find((r) => rankToValue[r] === n);


/**
 * Parses a suit from user input.
 * Accepts single-letter aliases (s, h, d, c) or full names
 * (spade(s), heart(s), diamond(s), club(s)). Case-insensitive.
 * @param s Input to parse
 * @returns A Suits value, or undefined if not recognized
 */
export const parseSuit = (s?: string): Suits | undefined => {
  if (typeof s !== "string") return undefined;
  const v = s.trim().toLowerCase();
  switch (v) {
    case "s":
    case "spade":
    case "spades":
      return Suits.Spades;
    case "h":
    case "heart":
    case "hearts":
      return Suits.Hearts;
    case "d":
    case "diamond":
    case "diamonds":
      return Suits.Diamonds;
    case "c":
    case "club":
    case "clubs":
      return Suits.Clubs;
    default:
      return undefined;
  }
};

/**
 * Parses a rank from user input.
 * Accepts face letters (A, J, Q, K), numbers (1..13), and 2..10 as strings.
 * @param r Input to parse
 * @returns A Ranks value, or undefined if not recognized
 */
export const parseRank = (r?: string): Ranks | undefined => {
  if (typeof r !== "string" && typeof r !== "number") return undefined;
  const raw = String(r).trim().toUpperCase();
  if (raw === "A" || raw === "1") return Ranks.Ace;
  if (raw === "J" || raw === "11") return Ranks.Jack;
  if (raw === "Q" || raw === "12") return Ranks.Queen;
  if (raw === "K" || raw === "13") return Ranks.King;
  if (/^([2-9]|10)$/.test(raw)) return raw as Ranks;
  return undefined;
};
