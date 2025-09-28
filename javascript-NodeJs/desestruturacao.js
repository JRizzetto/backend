// const gameState = {
//   players: [
//     { nome: "Jeff", inventory: [{ item: "sword", damage: 10 }] },
//     { nome: "Ana", inventory: [{ item: "bow", damage: 8 }] },
//   ],
//   currentTurn: 1,
// };

// const {
//   players: [{ inventory: currentTurn }],
// } = gameState;

// console.log(currentTurn);

// Desafio: Extrair o damage do inventory do currentTurn player
// em uma linha só com desestruturação

// function main() {
//   const person = {
//     name: "Jefferson",
//     age: 22,
//     isProgrammer: true,
//   };

//   const { name, age, isProgrammer } = person;
// }

// console.log(name, age, isProgrammer);

// main();

// function main() {
//   const colors = ["verde", "amarelo", "azul", "rosa", "laranja"];

//   const [firstColor, , thirdColor] = colors;

//   console.log(thirdColor);
// }

// main();

// function main() {
//   const nickname = "Jefferson Rizzetto";

//   const player = {
//     nickname: "Jefferson",
//     health: 20,
//     inventary: {
//       items: ["sword", "Shield", "bow"],
//       potions: [
//         { type: "regeneration", duration: 8 },
//         { type: "defense", duration: 12 },
//       ],
//     },
//   };

//   const {
//     inventary: {
//       potions: [
//         { type: firstType, duration: firstDuration },
//         { type: secondType, duration: secondDuration },
//       ],
//     },
//   } = player;

//   console.log(secondType, secondDuration);
// }
// main();

// ------------------------------------------------------------------------------- //

// 1.1 Desestruture nome e age do objeto:
const user = { nome: "João", age: 30, city: "São Paulo" };
const { nome, age } = user;
console.log(nome, age);

// 1.2 Desestruture os dois primeiros itens do array:
let fruits = ["maçã", "banana", "laranja"];
let [firstFruit, secondFruit] = fruits;

console.log(firstFruit, secondFruit);

// 2.1 Desestruture street e number do endereço aninhado:
const person = {
  name: "Maria",
  address: {
    street: "Rua A",
    number: 123,
    city: "Rio",
  },
};
const {
  address: { street, number },
} = person;
console.log("Rua: " + street, "- Number: " + number);

// 2.2 Desestruture o primeiro e terceiro item do array:
const numbers = [10, 20, 30, 40];
const [fistNumber, , thirdNumber] = numbers;
console.log(fistNumber, thirdNumber);

// 3.1 Desestruture playerName e weapon do primeiro jogador:
const game = {
  players: [
    { playerName: "Hero", weapon: "sword", level: 5 },
    { playerName: "Mage", weapon: "staff", level: 6 },
  ],
};
const {
  players: [
    { playerName, weapon },
    { playerName: secondPlayerName, weapon: secondWeapon },
  ],
} = game;
console.log(playerName, weapon);
// Pegando o segundo jogador:
console.log(secondPlayerName, secondWeapon);

// 3.2 Desestruture com renomeação: extraia type renomeando para spellType:
const spell = { type: "fire", damage: 50, mana: 20 };
const { type: spellType } = spell;
console.log(spellType);

// 4.1 Desestruture damage da primeira potion do inventory:
const character = {
  name: "Wizard",
  inventory: {
    potions: [
      { name: "healing", damage: 0, effect: "cure" },
      { name: "fire", damage: 25, effect: "burn" },
    ],
  },
};
const {
  inventory: {
    potions: [{ damage }],
  },
} = character;
console.log(damage);

// 4.2 Desestruture parâmetros de função: crie função que recebe objeto e extrai x e y:
// Como declarar a função?
// Como declarar a função?
move({ position: { x: 10, y: 20 }, speed: 5 });
// Esse eu não sei!


const gameState = {
  players: [
    { nome: "Jeff", inventory: [{ item: "sword", damage: 10 }] },
    { nome: "Ana", inventory: [{ item: "bow", damage: 8 }] }
  ],
  currentTurn: 0
};

// Desafio: Extrair o damage do inventory do currentTurn player
// em uma linha só com desestruturação

