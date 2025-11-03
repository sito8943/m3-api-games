import request from "supertest";
import app from "./app.js";
import { Ranks } from "../src/routers/types.js";
import { rankToValue } from "../src/routers/utils.js";

describe("GET /draw", () => {
  it("returns a valid card shape and code", async () => {
    const res = await request(app).get("/draw").expect(200);
    const card = res.body as {
      rank: Ranks;
      suit: string;
      code: string;
      text: string;
      symbol: string;
    };

    // basic shape
    expect(card.rank).toBeDefined();
    expect(card.suit).toBeDefined();
    expect(card.code).toBeDefined();
    expect(card.text).toBeDefined();
    expect(card.symbol).toBeDefined();

    // code matches rank + suit initial (e.g., AS, 10H)
    const initial = card.suit[0];
    expect(card.code.endsWith(initial)).toBe(true);
    expect(card.code.startsWith(card.rank)).toBe(true);
  });

  it("filters by suit", async () => {
    const res = await request(app).get("/draw?suit=h").expect(200);
    expect(res.body.suit).toBe("Hearts");
  });

  it("filters by min/max rank, regardless of order", async () => {
    // reversed order should still create a valid inclusive window
    const res = await request(app).get("/draw?min=K&max=10").expect(200);
    const value = rankToValue[res.body.rank as Ranks];
    expect(value).toBeGreaterThanOrEqual(10);
    expect(value).toBeLessThanOrEqual(13);
  });
});

