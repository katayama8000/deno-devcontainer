import { ICircleFactory } from "../interface/circle.factory.interface.ts";
import { ICircleRepository } from "../interface/circle.repository.ts";
import { IUserRepository } from "../interface/user.repository.ts";
import { CircleService } from "../service/circleService.ts";
import { CircleId } from "../valueObject/circleId.ts";
import { CircleName } from "../valueObject/circleName.ts";
import { UserId } from "../valueObject/userId.ts";
import { CircleCreateCommand } from "./circleCreateCommand.ts";
import { CircleJoinCommand } from "./cirlceJoinCommand.ts";

export class CircleApplicationService {
  private readonly ICircleRepository: ICircleRepository;
  private readonly IUserRepository: IUserRepository;
  private readonly CircleFactory: ICircleFactory;
  private readonly CircleService: CircleService;
  constructor(
    ICircleRepository: ICircleRepository,
    IUserRepository: IUserRepository,
    CircleFactory: ICircleFactory,
    CircleService: CircleService,
  ) {
    this.ICircleRepository = ICircleRepository;
    this.IUserRepository = IUserRepository;
    this.CircleFactory = CircleFactory;
    this.CircleService = CircleService;
  }

  public create(command: CircleCreateCommand): void {
    // start transaction
    const userId = new UserId(command.userId);
    const owner = this.IUserRepository.findById(userId);
    if (owner === null) {
      throw new Error("サークルのオーナーが存在しません");
    }
    const name = new CircleName(command.name);
    const circle = this.CircleFactory.create(name);
    if (this.CircleService.exists(circle)) {
      throw new Error("サークルは既に存在しています");
    }
    this.ICircleRepository.save(circle);
    // end transaction
  }

  public join(command: CircleJoinCommand): void {
    // start transaction
    const memberId = new UserId(command.userId);
    const member = this.IUserRepository.findById(memberId);
    if (member === null) {
      throw new Error("サークルのメンバーが存在しません");
    }
    const circleId = new CircleId(command.circleId);
    const circle = this.ICircleRepository.findById(circleId);
    if (circle === null) {
      throw new Error("サークルが存在しません");
    }
    // check if circle member is over 30
    if (circle.member.length >= 29) {
      throw new Error("サークルのメンバーが30人を超えています");
    }
    circle.member.push(member);
    this.ICircleRepository.save(circle);
    // end transaction
  }
}
