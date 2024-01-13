import { Circle } from "../entities/circle";
import { CircleName } from "../valueObject/circleName";

export interface ICircleFactory {
  create(name: CircleName): Circle;
}
