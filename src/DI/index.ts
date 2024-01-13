export const tmp = [];

class Action {
  eat() {
    console.log("eat");
  }

  sleep() {
    console.log("sleep");
  }
}

class User {
  constructor(public action: Action) {}
}

const action = new Action();
const user = new User(action);
user.action.eat();

// class Engine {}
class Wheel {}
class Battery {}
// not dependency injection
// class Car {
//   engine = new Engine();
//   wheel = new Wheel();
//   battery = new Battery();
// }

interface IEngine {
  start(): void;
}

class Engine implements IEngine {
  start() {
    console.log("start");
  }
}

// dependency injection
class Car {
  constructor(
    public engine: IEngine,
  ) {}
}
