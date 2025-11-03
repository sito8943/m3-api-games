import request from "supertest";
import app from "./app.js";

describe("GET /roll", () => {
  it("should return a number between 1 and 6 by default", async () => {
    const res = await request(app).get("/roll");
    expect(res.status).toBe(200);
    const value = Number(res.text);
    expect(value).toBeGreaterThanOrEqual(1);
    expect(value).toBeLessThanOrEqual(6);
  });

  it("should accept a query param 'faces'", async () => {
    const res = await request(app).get("/roll?faces=10");
    expect(res.status).toBe(200);
    const value = Number(res.text);
    expect(value).toBeGreaterThanOrEqual(1);
    expect(value).toBeLessThanOrEqual(10);
  });

  it("should accept a path param 'faces'", async () => {
    const res = await request(app).get("/roll/20");
    expect(res.status).toBe(200);
    const value = Number(res.text);
    expect(value).toBeGreaterThanOrEqual(1);
    expect(value).toBeLessThanOrEqual(20);
  });

  it("should fallback to 6 faces when given invalid input", async () => {
    const res = await request(app).get("/roll?faces=abc");
    expect(res.status).toBe(200);
    const value = Number(res.text);
    expect(value).toBeGreaterThanOrEqual(1);
    expect(value).toBeLessThanOrEqual(6);
  });
});
