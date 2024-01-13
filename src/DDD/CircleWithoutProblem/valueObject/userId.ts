export class UserId {
  constructor(private readonly userId: string) {}
  get value() {
    return this.userId;
  }
}
