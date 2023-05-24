import { CreateUserUseCase } from "../application/CreateUserUseCase";
import { GetUserByUserNameUseCase } from "../application/GetUserByUserNameUseCase";
import { CreateUserController } from "./controllers/CreateUserController";
import { GetUserByUserNameController } from "./controllers/GetUserByUserNameController";
import { PostgresUserRepository } from "./PostgresUserRepository";

export const postgresUserRepository = new PostgresUserRepository();
export const createUserUseCase = new CreateUserUseCase(postgresUserRepository);
export const createUserController = new CreateUserController(createUserUseCase);
export const getUserByUserNameUseCase = new GetUserByUserNameUseCase(
  postgresUserRepository
);
export const getUserByUserNameController = new GetUserByUserNameController(
  getUserByUserNameUseCase
);
