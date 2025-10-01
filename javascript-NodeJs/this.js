// This

// console.log(this);

// function greet() {
//   console.log("Eu sou o ", this.name);
// }

// const person = {
//   name: "Jefferson",
//   greet,
// };

// person.greet();

// -----------------------------------------------------

// const person = {
//   name: "Jefferson",
//   greet() {
//     console.log(this.name);

//     const upper = () => {
//       console.log(this.name.toUpperCase());
//     };

//     return { upper };
//   },
// };

// person.greet().upper();

// -----------------------------------------------------

// const person = {
//   name: "Jefferson",
//   greet() {
//     console.log(this.name);

//     return {
//       upper: () => {
//         console.log(this.name.toUpperCase());
//       },
//     };
//   },
// };

// person.greet().upper();

// -----------------------------------------------------

// const person = {
//   name: "Jefferson",
//   greet() {
//     const chars = this.name.split("");
//     chars.forEach((char) => {
//       console.log(char, this.name);
//     });
//   },
// };

// person.greet();

// -----------------------------------------------------

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log("Meu nome é ", this.name, "e eu tenho ", this.age, "anos.");
  }
}

const newPerson = new Person("Jefferson", 22);
console.log(newPerson);
newPerson.greet();
