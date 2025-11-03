import express from "express";
import { FlipRouter, RollRouter } from "../src/routers/index.js";

const app = express();
app.use("/roll", RollRouter);
app.use("/flip", FlipRouter);

export default app;
