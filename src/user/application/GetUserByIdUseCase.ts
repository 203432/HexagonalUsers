import { UserRepository } from "../domain/UserRepository";

export class GetUserByIdUseCase {
  constructor(readonly userRepository: UserRepository) {}

  async run(id: string) {
    const user = await this.userRepository.getUserById(id);
    return user;
  }
}
