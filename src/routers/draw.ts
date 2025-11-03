import { Router, Request, Response } from "express";
import { Suits, Ranks, Card, DrawQuery } from "./types.js";
import {
  parseSuit,
  parseRank,
  SUITS,
  RANKS_ORDERED,
  SUIT_EMOJI_MAP,
  rankToValue,
} from "./utils.js";

const router = Router();

// GET /draw — returns a random playing card
router.get(
  "/",
  (req: Request<{}, {}, {}, DrawQuery>, res: Response<{}, Card>) => {
    const requestedSuit = parseSuit(req.query.suit);
    const minRank = parseRank(req.query.min);
    const maxRank = parseRank(req.query.max);

    const suitPool: Suits[] = requestedSuit ? [requestedSuit] : SUITS;

    let rankPool: Ranks[] = RANKS_ORDERED;
    if (minRank || maxRank) {
      const minVal = minRank ? rankToValue[minRank] : 1;
      const maxVal = maxRank ? rankToValue[maxRank] : 13;
      const low = Math.min(minVal, maxVal);
      const high = Math.max(minVal, maxVal);
      rankPool = RANKS_ORDERED.filter((r) => {
        const v = rankToValue[r];
        return v >= low && v <= high;
      });
    }

    if (suitPool.length === 0 || rankPool.length === 0) {
      return res.status(400).json({
        error:
          "No cards match the requested filters. Use suit=s|h|d|c and min/max as A,2..10,J,Q,K.",
      });
    }

    const suit = suitPool[Math.floor(Math.random() * suitPool.length)];
    const rank = rankPool[Math.floor(Math.random() * rankPool.length)];

    const symbol = `${rank}${SUIT_EMOJI_MAP[suit]}`;
    const code = `${rank}${suit[0]}`; // e.g., AS, 10H, QC

    const card: Card = { rank, suit, code, text: `${rank} of ${suit}`, symbol };
    res.json(card);
  }
);

export default router;
