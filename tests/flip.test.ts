import request from "supertest";
import app from "./app.js";

describe("GET /flip", () => {
  it("should return either 'head' or 'tails' by default", async () => {
    const res = await request(app).get("/flip");
    expect(res.status).toBe(200);
    expect(["head", "tails"]).toContain(res.text);
  });

  it("should allow custom face names via query params", async () => {
    const res = await request(app).get("/flip?a=dragon&b=tiger");
    expect(res.status).toBe(200);
    expect(["dragon", "tiger"]).toContain(res.text);
  });

  it("should handle missing parameters gracefully", async () => {
    const res = await request(app).get("/flip?a=onlyOne");
    expect(res.status).toBe(200);
    expect(["onlyOne", "tails"]).toContain(res.text);
  });
});
