// JSON

// Formato de troca de dados

// const person = {
//   name: "Jefferson",
//   age: 22,
//   isProgrammer: true,
// };

// import customer from "./person.json" with { type: "json" };

// console.log(customer.name);
// console.log(customer.age);
// console.log(customer.isProgrammer);

const person = {
  name: "Jefferson",
  age: 36,
  isProgremmer: true,
  greet() {
    console.log("Meu nome é ", this.name);
  },
};

const stringJson = JSON.stringify(person);
console.log(stringJson);
