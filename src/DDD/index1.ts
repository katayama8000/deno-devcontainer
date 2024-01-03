// 実態に依存した実装

class UserRepository {
  // 永続化に関する処理
  // DBに書き込むなど
  find(): void {
    console.log("find");
    // connect DB and do something
  }
  store(): void {
    console.log("store");
  }
}

class UserService {
  private userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  public find(): void {
    this.userRepository.find();
  }

  public store(): void {
    this.userRepository.store();
  }
}

const userRepository = new UserRepository();
const userService = new UserService(userRepository);
userService.find();
userService.store();
