import { Router } from "express";

const router = Router();

// GET /roll or /roll/:faces — default faces = 6
router.get(["/", "/:faces"], (req, res) => {
  const raw = (req.params.faces ?? req.query.faces) as string | undefined;
  const parsed = raw ? parseInt(raw, 10) : NaN;
  const faces = Number.isFinite(parsed) && parsed > 0 ? parsed : 6;

  const value = Math.floor(Math.random() * faces) + 1;
  res.send(value)
});

export default router;

