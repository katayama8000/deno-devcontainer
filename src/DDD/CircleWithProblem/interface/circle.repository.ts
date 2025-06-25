import { Circle } from "../entities/circle.ts";
import { CircleId } from "../valueObject/circleId.ts";
import { CircleName } from "../valueObject/circleName.ts";

export interface ICircleRepository {
  save(circle: Circle): void;
  findById(circleId: CircleId): Circle | null;
  findByName(circleName: CircleName): Circle | null;
}
