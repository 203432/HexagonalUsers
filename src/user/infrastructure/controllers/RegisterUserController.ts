import { Request, Response } from "express";

import { RegisterUserUseCase } from "../../application/RegisterUserUseCase";
import { User } from "../../domain/User";

export class RegisterUserController {
  constructor(readonly registerUserUseCase: RegisterUserUseCase) {}

  async run(req: Request, res: Response) {
    const user = req.body;
    const userCreated = await this.registerUserUseCase.run(
      new User("1", user.firstName, user.lastName, user.username, user.password)
    );
    console.log(userCreated);
    return res.status(200).json({
      message: "Registrado",
      data: {
        firstName: user.firstName,
        lastName: user.lastName,
        username: user.username,
        password: user.password,
      },
    });
  }
}
