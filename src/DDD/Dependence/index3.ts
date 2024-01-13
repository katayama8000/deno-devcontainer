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

class UserRepositoryWithMySQL implements IUserRepository {
  find(): User {
    // connect MySQL and find user
    return new User("test", 20);
  }
  store(): void {
    console.log("store");
  }
}

class UserRepositoryWithFireBase implements IUserRepository {
  find(): User {
    // connect FireBase and find user
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

const userRepositoryWithMySQL: IUserRepository = new UserRepositoryWithMySQL();
const userRepositoryWithFireBase: IUserRepository =
  new UserRepositoryWithFireBase();
const userService1 = new UserService(userRepositoryWithMySQL);
const userService2 = new UserService(userRepositoryWithFireBase);
userService1.find();
userService1.store();
userService2.find();
userService2.store();
