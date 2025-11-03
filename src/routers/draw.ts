import { Router } from "express";
import { Suits, Ranks, Card, SUIT_EMOJI_MAP } from "./types.js";

const router = Router();

// GET /draw — returns a random playing card
router.get("/", (_req, res) => {
  const suits = Object.values(Suits) as Suits[];
  const ranks = Object.values(Ranks) as Ranks[];

  const suit = suits[Math.floor(Math.random() * suits.length)];
  const rank = ranks[Math.floor(Math.random() * ranks.length)];

  const symbol = `${rank}${SUIT_EMOJI_MAP[suit]}`;
  const code = `${rank}${suit[0]}`; // e.g., AS, 10H, QC

  const card: Card = { rank, suit, code, text: `${rank} of ${suit}`, symbol };
  res.json(card);
});

export default router;
