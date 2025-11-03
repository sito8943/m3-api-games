import express, { Router } from "express";

export const createTestApp = (router: Router) => {
  const app = express();
  app.use("/roll", router);
  return app;
};
