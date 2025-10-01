// Spread e Rest

// const player = {
//   nickname: "Rincko",
//   health: 20,
//   inventary: {
//     items: ["sword", "shield", "bow"],
//     potions: [
//       { type: "regeneration", duration: 8 },
//       { type: "defende", duration: 8 },
//     ],
//   },
// };

// function updatePlayer(player, newProps) {
//   return { ...player, ...newProps };
// }

// const uptadedPlayer = updatePlayer(player, {
//   nickname: "Jefferson",
//   health: 100,
// });

// console.log(player);
// console.log(uptadedPlayer);

// ----------------------------------------------------------------------

// const person = { name: "Rincko", age: 22 };
// const newPerson = { ...person, name: "Jefferson", age: 36 };
// console.log(newPerson);

// ----------------------------------------------------------------------

// const positive = [1, 2, 3, 4];
// const negative = [-1, -2, -3, -4];

// const newArray = [...positive, ...negative];

// console.log(newArray);

// ----------------------------------------------------------------------

// const positive = [1, 2, 3, 4];
// const negative = [-1, -2, -3, -4];
// const numbers = [...positive, ...negative];

// const [one, two, ...others] = numbers;
// console.log(one, two);
// console.log(others);

// ----------------------------------------------------------------------

const player = {
  nickname: "Rincko",
  health: 20,
  inventary: {
    items: ["sword", "shield", "bow"],
    potions: [
      { type: "regeneration", duration: 8 },
      { type: "defende", duration: 8 },
    ],
  },
};

const { inventary, ...playerInfo } = player;

console.log(inventary);
console.log(playerInfo);
