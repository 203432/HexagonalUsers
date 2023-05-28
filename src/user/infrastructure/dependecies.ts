import { CreateUserUseCase } from "../application/CreateUserUseCase";
import { GetUserByIdUseCase } from "../application/GetUserByIdUseCase";
import { GetUserByUserNameUseCase } from "../application/GetUserByUserNameUseCase";
import { CreateUserController } from "./controllers/CreateUserController";
import { GetUserByIdController } from "./controllers/GetUserByIdController";
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
export const getUserByIdUseCase = new GetUserByIdUseCase(
  postgresUserRepository
);
export const getUserByIdController = new GetUserByIdController(
  getUserByIdUseCase
);
