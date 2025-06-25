import { Circle } from "../entities/circle.ts";
import { CircleName } from "../valueObject/circleName.ts";

export interface ICircleFactory {
  create(name: CircleName): Circle;
}
