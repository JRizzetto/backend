// function requestCar(drivers) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (drivers > 0) {
//         return resolve("Seu motorista está a caminho!");
//       }
//       return reject("Não ");
//     }, 3000);
//   });
// }

// async function main() {
//   let drivers = 2;

//   const request = await requestCar(drivers).catch(() => null);

//   if (!request) {
//     console.log("Erro");
//     return;
//   }

//   console.log(`Resultado ${request}`);
// }
// main();

// function getRandom() {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve(Math.random() * 30), 3000);
//   });
// }

// async function main() {
//   console.log("Inicio do programa");
//   const value = await getRandom();
//   console.log(value);

//   console.log("Fim do programa");
// }
// main();

// async function main() {
//   console.log("Inicio do programa");

//   getRandom().then((value) => console.log(value));

//   console.log("Fim do programa");
// }
// main();

// import { setTimeout } from "node:timers/promises";

// async function main() {
//   console.log("Inicio do programa");
//   const value = await setTimeout(2000, Math.random());
//   console.log(value);
// }
// main();

import { text } from "@clack/prompts";

async function main() {
  const name = await text({ message: "Digite seu nome" });
  const age = await text({ message: `Digite a sua idade ${name}` });

  console.log("Seja bem vindo", name);
}
main();
