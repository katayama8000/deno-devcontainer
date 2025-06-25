export class UserId {
  private readonly value: string;

  constructor(value: string) {
    if (!/^user_[a-zA-Z0-9]+$/.test(value)) {
      throw new Error("Invalid user id");
    }
    this.value = value;
  }

  equals(other: UserId): boolean {
    return this.value === other.value;
  }

  toString(): string {
    return this.value;
  }
}
