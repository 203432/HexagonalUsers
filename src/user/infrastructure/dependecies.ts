import { RegisterUserUseCase } from "../application/RegisterUserUseCase";
import { RegisterUserController } from "./controllers/RegisterUserController";
import { PostgresUserRepository } from "./PostgresUserRepository";

export const mySqlUserRepository = new PostgresUserRepository();
export const registerUserUseCase = new RegisterUserUseCase(mySqlUserRepository);
export const registerUserController = new RegisterUserController(
  registerUserUseCase
);
