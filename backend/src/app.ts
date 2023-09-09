import express from "express";
import { json } from "body-parser";
import cors from "cors";
import { Route } from "./interfaces/route.interface";
import userRouter from "./routes/user.routes";

const app = express();

const API_URL = process.env.API_URL || "/api/v1/";

const routes: Route[] = [
  {
    path: "users",
    router: userRouter,
  },
];

app.use(json());

app.use(
  cors({
    origin: "*",
  })
);

// adding routes
routes.forEach((route) => {
  app.use(`${API_URL}${route.path}`, route.router);
});

export default app;
