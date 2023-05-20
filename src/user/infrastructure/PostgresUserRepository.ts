import { User } from "../domain/User";
import { UserRepository } from "../domain/UserRepository";
import { pool } from "./postgres/database";

export class PostgresUserRepository implements UserRepository {
  async createUser(user: User): Promise<User | null> {
    console.log("Registrado con exito, los datos del usuario son:");
    console.log(
      `primer nombre:${user.firstName} apellido:${user.lastName} nombre de usuario ${user.username}`
    );
    await pool.query(
      'INSERT INTO public."Users" (first_name,last_name,username,password) VALUES ($1,$2,$3,$4)',
      [user.firstName, user.lastName, user.username, user.password]
    );
    return user;
  }
}
