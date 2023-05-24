import { UserRepository } from "../domain/UserRepository";

export class GetUserByUserNameUseCase {
  constructor(readonly userRepository: UserRepository) {}

  async run(username: string) {
    const user = await this.userRepository.getByUserName(username);
    return user;
  }
}
