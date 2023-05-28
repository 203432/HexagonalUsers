import bodyParser from "body-parser";
import express from "express";

import { userRouter } from "./user/infrastructure/UserRoutes";

const app = express();

const PORT = 3000;

app.use(bodyParser.json());

// app.use("/health", healthRouter);
app.use("/users", userRouter);

app.get("/", function (req, res) {
  res.send("Hola Mundo!");
});

app.listen(PORT, () => {
  console.log(`[APP] - Starting application on port ${PORT}`);
});
