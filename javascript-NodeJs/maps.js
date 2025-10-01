// Maps

// const users = {
//   rincko: {
//     age: 22,
//     coins: 100,
//   },
//   Jefferson: {
//     age: 36,
//     coins: 0,
//   },
//   juliano: {
//     age: 17,
//     coins: 0,
//   },
// };

// users["Matheus"] = { age: 18, coins: 0 };

// console.log(users);

// ------------------------------------------------------------------

// const users = new Map();
// users.set("Rincko", { age: 22, coins: 100 });
// users.set("Cristiano", { age: 12, coins: 0 });
// users.set("Juliano", { age: 17, coins: -30 });
// console.log(users);

// ------------------------------------------------------------------

const users = new Map([
  ["Rincko", { age: 22, coins: 100 }],
  ["Cristiano", { age: 12, coins: 0 }],
  ["Juliano", { age: 17, coins: -30 }],
]);

// users.delete("Juliano");
// users.set("Matheus", { age: 18, coins: 0 });

// console.log(users.has("Juliano"));

// ------------------------------------------------------------------

// for (const [key, value] of users.entries()) {
//   console.log("A chave é ", key);
//   console.log("O valor é ", value);
// }

// for (const { age, coins } of users.values()) {
//   console.log(age, coins);
// }

// for (const [key, { age, coins }] of users.entries()) {
//   console.log(key);
//   console.log(age, coins);
// }

// ------------------------------------------------------------------

// users.forEach((values) => {
//   console.log(values.age);
//   console.log(values.coins);
// });
