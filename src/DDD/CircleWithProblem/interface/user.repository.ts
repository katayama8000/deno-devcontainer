import { User } from "../entities/user";
import { UserId } from "../valueObject/userId";

export interface IUserRepository {
  // FIXME
  save(): void;
  findById(id: UserId): User | null;
}
