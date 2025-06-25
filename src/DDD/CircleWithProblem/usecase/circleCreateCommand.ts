import { UserId } from "../valueObject/userId.ts";

export class CircleCreateCommand {
  constructor(
    public readonly name: string,
    public readonly userId: string,
  ) {}
}
