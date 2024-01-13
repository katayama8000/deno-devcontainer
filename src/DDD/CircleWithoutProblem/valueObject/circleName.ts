export class CircleName {
  constructor(private readonly circleName: string) {
    if (circleName.length < 3) {
      throw new Error("circleName must be 3 characters or more");
    }
    if (circleName.length > 20) {
      throw new Error("circleName must be 20 characters or less");
    }
  }
  get value() {
    return this.circleName;
  }

  equals(other: CircleName) {
    return this.circleName === other.circleName;
  }
}
