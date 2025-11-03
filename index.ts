import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

import { RollRouter, DrawRouter, FlipRouter } from "./src/routers/index.js";
import { docsHtml } from "./src/docs.js";

app.get("/", (_, res) => {
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.send(docsHtml);
});

app.use("/roll", RollRouter);
app.use("/draw", DrawRouter);
app.use("/flip", FlipRouter);

app.listen(3000, () => console.log("API running on http://localhost:3000"));
