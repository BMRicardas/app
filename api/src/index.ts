import express, { Request, Response } from "express";
import "@dotenvx/dotenvx/config";

const app = express();
const port = process.env.PORT ?? 8000;

app.get("/", (_req: Request, res: Response) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(
    `Example app listening on port ${port} in ${process.env.NODE_ENV} mode`
  );
});
