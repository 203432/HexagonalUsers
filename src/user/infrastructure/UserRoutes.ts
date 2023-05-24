import express from "express";

import {
  createUserController,
  getUserByUserNameController,
} from "./dependecies";

export const userRouter = express.Router();

userRouter.post("/", createUserController.run.bind(createUserController));
userRouter.get(
  "/:username",
  getUserByUserNameController.run.bind(getUserByUserNameController)
);
