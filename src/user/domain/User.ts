export class User {
  constructor(
    readonly id: string,
    readonly first_name: string,
    readonly last_name: string,
    readonly username: string,
    readonly password: string
  ) {}
}
