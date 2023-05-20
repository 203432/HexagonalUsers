import express from "express";

import { registerUserController } from "./dependecies";

export const userRouter = express.Router();

userRouter.post("/", registerUserController.run.bind(registerUserController));
