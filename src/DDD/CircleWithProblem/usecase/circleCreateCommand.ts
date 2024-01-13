import { UserId } from "../valueObject/userId";

export class CircleCreateCommand {
  constructor(
    public readonly name: string,
    public readonly userId: string,
  ) {}
}
