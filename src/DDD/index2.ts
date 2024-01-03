class User {
  private name: string;
  private age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

interface IUserRepository {
  find(): User;
  store(): void;
}

class UserRepository implements IUserRepository {
  find(): User {
    return new User("test", 20);
  }
  store(): void {
    console.log("store");
  }
}

class UserService {
  private userRepository: IUserRepository;

  constructor(userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }

  public find(): User {
    return this.userRepository.find();
  }

  public store(): void {
    this.userRepository.store();
  }
}

const userRepository: IUserRepository = new UserRepository();
const userService = new UserService(userRepository);
userService.find();
userService.store();
