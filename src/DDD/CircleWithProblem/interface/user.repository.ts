import { User } from "../entities/user.ts";
import { UserId } from "../valueObject/userId.ts";

export interface IUserRepository {
  // FIXME
  save(): void;
  findById(id: UserId): User | null;
}
