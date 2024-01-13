import { UserId } from "../valueObject/userId";

export class User {
  constructor(public name: string, public userId: UserId) {
    if (name.length < 3) {
      throw new Error("name must be 3 characters or more");
    }
  }
}
