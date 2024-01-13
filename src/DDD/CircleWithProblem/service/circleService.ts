import { Circle } from "../entities/circle";
import { ICircleRepository } from "../interface/circle.repository";

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
