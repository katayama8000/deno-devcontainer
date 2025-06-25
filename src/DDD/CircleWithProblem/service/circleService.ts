import { Circle } from "../entities/circle.ts";
import { ICircleRepository } from "../interface/circle.repository.ts";

export class CircleService {
  private readonly ICircleRepository: ICircleRepository;
  constructor(ICircleRepository: ICircleRepository) {
    this.ICircleRepository = ICircleRepository;
  }
  public exists(circle: Circle): boolean {
    const duplicated = this.ICircleRepository.findByName(circle.circleName);
    return duplicated !== null;
  }
}
