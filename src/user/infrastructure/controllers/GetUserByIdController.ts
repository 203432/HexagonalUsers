import { Request, Response } from "express";

import { GetUserByIdUseCase } from "../../application/GetUserByIdUseCase";
import { User } from "../../domain/User";

export class GetUserByIdController {
  constructor(readonly getUserByIdUseCase: GetUserByIdUseCase) {}

  async run(req: Request, res: Response) {
    const userId = req.params.id;
    const user: User | null = await this.getUserByIdUseCase.run(userId);
    console.log(user);
    if (!user) {
      return res.status(400).json({
        message: "No existe este usuario",
      });
    }
    console.log(user?.id);
    return res.status(200).json({
      message: "Usuario encontrado",
      data: {
        first_name: user?.first_name,
        last_name: user?.last_name,
        username: user?.username,
        password: user?.password,
      },
    });
  }
}
