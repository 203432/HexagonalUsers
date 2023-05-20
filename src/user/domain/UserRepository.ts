import { User } from "./User";

export interface UserRepository {
  createUser(user: User): Promise<User | null>;
}
