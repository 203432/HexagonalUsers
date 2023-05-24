import { User } from "../domain/User";
import { UserRepository } from "../domain/UserRepository";
import { pool } from "./postgres/database";

export class PostgresUserRepository implements UserRepository {
  async createUser(user: User): Promise<User | null> {
    console.log("Registrado con exito, los datos del usuario son:");
    console.log(
      `primer nombre:${user.first_name} apellido:${user.last_name} nombre de usuario ${user.username}`
    );
    await pool.query(
      'INSERT INTO public."Users" (first_name,last_name,username,password) VALUES ($1,$2,$3,$4)',
      [user.first_name, user.last_name, user.username, user.password]
    );
    return user;
  }

  async getByUserName(username: string): Promise<User | null> {
    console.log("Buscando al usuario " + username);
    const query = await pool.query(
      'SELECT * FROM public."Users" WHERE username = $1',
      [username]
    );

    if (query.rows.length == 0) {
      return null;
    }

    const user: User = query.rows[0];

    return user;
  }
}
