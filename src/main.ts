
class User {
  private id: number;
  constructor(id: number) {
    this.id = id;
  }

  find(id: number): User {
    return new User(id);
  }
}
class UserRepository {
  // 永続化に関する処理
  // DBに書き込むなど
  find(id: number): User {
    return new User(id);
  }
}

class UserService {
  private userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  public find(id: number): User {
    return this.userRepository.find(id);
  }
}

const userRepository = new UserRepository();
const userService = new UserService(userRepository);
userService.find(1);