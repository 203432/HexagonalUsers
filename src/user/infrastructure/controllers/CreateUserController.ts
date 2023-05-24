import { Request, Response } from "express";

import { CreateUserUseCase } from "../../application/CreateUserUseCase";
import { User } from "../../domain/User";

export class CreateUserController {
  constructor(readonly createUserUseCase: CreateUserUseCase) {}

  async run(req: Request, res: Response) {
    const user = req.body;
    const userCreated = await this.createUserUseCase.run(
      new User(
        "1",
        user.first_name,
        user.last_name,
        user.username,
        user.password
      )
    );
    console.log(userCreated);
    return res.status(200).json({
      message: "Registrado",
      data: {
        first_name: user.first_name,
        last_name: user.last_name,
        username: user.username,
        password: user.password,
      },
    });
  }
}
