import { CircleId } from "../valueObject/circleId";
import { CircleName } from "../valueObject/circleName";
import { User } from "./user";

export class Circle {
  constructor(
    private _circleId: CircleId,
    private _circleName: CircleName,
    private _owner: User,
    private _members: User[],
  ) {
  }

  get circleId() {
    return this._circleId;
  }

  get circleName() {
    return this._circleName;
  }

  get owner() {
    return this._owner;
  }

  private get members() {
    return this._members;
  }

  private conuntMembers(): number {
    return this.members.length + 1;
  }

  public isFull(): boolean {
    return this.conuntMembers() >= 30;
  }

  public join(user: User) {
    if (this.isFull()) {
      throw new Error("The circle is full");
    }
    this.members.push(user);
  }
}
