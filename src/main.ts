import bodyParser from "body-parser";
import express from "express";

import { userRouter } from "./user/infrastructure/UserRoutes";

const app = express();

const PORT = 3000;

app.use(bodyParser.json());

// app.use("/health", healthRouter);
app.use("/users", userRouter);

app.listen(PORT, () => {
  console.log(`[APP] - Starting application on port ${PORT}`);
});
