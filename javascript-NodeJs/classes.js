// const person = {
//   name: "Jefferson",
//   age: 36,
//   intro() {
//     return `Meu nome é ${this.name}`;
//   },
// };

// class Person {
//   #name;
//   #age;
//   #money = 0;
//   constructor(name, age) {
//     this.#name = name;
//     this.#age = age;
//   }
//   intro() {
//     return `Meu nome é ${this.#name} e tenho ${this.#age}`;
//   }
//   getName() {
//     return this.#name;
//   }
//   getAge() {
//     return this.#age;
//   }
//   getMoney() {
//     return this.#money;
//   }
//   setMoney(value) {
//     this.#money = value;
//   }
//   incremetMoney(value) {
//     this.setMoney(this.#money + value);
//   }
// }

// const person = new Person("Jefferson", 36);

// person.setMoney(100);

// console.log(
//   `O ${person.getName()} tem ${person.getAge()} e ${person.getMoney(
//     1000
//   )} reais`
// );

// person.incremetMoney(100);
// person.incremetMoney(20);
// person.incremetMoney(50);

// console.log(person.getMoney());

class Game {
  static games = [];
  title;
  time;
  status = "idle";
  constructor(title, time) {
    this.title = title;
    this.time = time;
    Game.games.push(this);
  }
  star() {
    this.status = "progress";
  }
  stop() {
    this.status = "ended";
  }
  delete() {
    Game.games = Game.games.filter((game) => game.title !== this.title);
  }
}

const parkour = new Game("Parkur", 20);
const puzzle = new Game("Puzzle", 160);

console.log(Game.games);

parkour.delete();

console.log(Game.games);
