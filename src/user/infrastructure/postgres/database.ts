import { Pool } from "pg";

export const pool = new Pool({
  user: "postgres",
  host: "localhost",
  password: "Nintendo64",
  database: "Hexagonal",
  port: 5432,
});
