export class User {
  constructor(
    readonly id: string,
    readonly firstName: string,
    readonly lastName: string,
    readonly username: string,
    readonly password: string
  ) {}
}
