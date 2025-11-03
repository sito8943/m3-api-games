import { Router, Request, Response } from "express";
import { FlipDraw } from "./types.js";

const router = Router();

// GET /flip — coin flip with optional custom face names via ?a=&b=
router.get(
  "/",
  (req: Request<{}, {}, {}, FlipDraw>, res) => {
    const faceA = (req.query.a ?? "head").toString();
    const faceB = (req.query.b ?? "tails").toString();

    const faces = [faceA, faceB];
    const value = faces[Math.floor(Math.random() * faces.length)];

    res.send(value);
  }
);

export default router;
