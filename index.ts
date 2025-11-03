import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

import { RollRouter, DrawRouter } from "./src/routers/index.js";

app.get("/", (_, res) => res.send("Welcome to the Games API"));

app.use("/roll", RollRouter);
app.use("/draw", DrawRouter);

app.listen(3000, () => console.log("API running on http://localhost:3000"));
