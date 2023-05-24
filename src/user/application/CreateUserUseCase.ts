import { User } from "../domain/User";
import { UserRepository } from "../domain/UserRepository";

export class CreateUserUseCase {
  constructor(readonly userRepository: UserRepository) {}

  async run(user: User) {
    await this.userRepository.createUser(user);
  }
}
