import { Circle } from "../entities/circle";
import { CircleId } from "../valueObject/circleId";
import { CircleName } from "../valueObject/circleName";

export interface ICircleRepository {
  save(circle: Circle): void;
  findById(circleId: CircleId): Circle | null;
  findByName(circleName: CircleName): Circle | null;
}
