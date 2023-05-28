import express from "express";

import {
  createUserController,
  getUserByIdController,
  getUserByUserNameController,
} from "./dependecies";

export const userRouter = express.Router();

userRouter.post("/", createUserController.run.bind(createUserController));
userRouter.get(
  "/username/:username",
  getUserByUserNameController.run.bind(getUserByUserNameController)
);
userRouter.get(
  "/id/:id",
  getUserByIdController.run.bind(getUserByIdController)
);
