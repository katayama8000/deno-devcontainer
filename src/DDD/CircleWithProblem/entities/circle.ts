import { CircleId } from "../valueObject/circleId.ts";
import { CircleName } from "../valueObject/circleName.ts";
import { User } from "./user.ts";

export class Circle {
  constructor(
    private _circleId: CircleId,
    private _circleName: CircleName,
    private _owner: User,
    private _member: User[],
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

  get member() {
    return this._member;
  }
}
