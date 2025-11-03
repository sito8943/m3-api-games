import express from "express";
import { FlipRouter, RollRouter, DrawRouter } from "../src/routers/index.js";

const app = express();
app.use("/roll", RollRouter);
app.use("/flip", FlipRouter);
app.use("/draw", DrawRouter);

export default app;
