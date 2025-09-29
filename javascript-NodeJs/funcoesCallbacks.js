// // Dentro de performance:
// function performance(nome, controleRemoto) {
//   const mensagem = "Curso de Javascript";

//   // performance aperta o botão do controle remoto
//   // e passa a mensagem como argumento
//   controleRemoto(mensagem);
// }

// // Onde meuControleRemoto é:
// const meuControleRemoto = (titulo) => {
//   console.log("O título é ", titulo);
// };

// // Você dá o controle remoto para a função performance
// performance("Jefferson", meuControleRemoto);

// function performance(name, exec) {
//   const title = "Curso de Javascript";
//   console.log(name, "executou uma função");
//   exec(title);
// }

// performance("Jefferson", (mensagem) => {
//   console.log("O título é ", mensagem);
// });

// function performe(exec) {
//   const numbers = [3, 18, 21, 44, -92, 439, -12, 222, 185, 201];

//   for (const number of numbers) {
//     exec(number);
//   }
// }

// performe((number) => console.log("Item Atual", number));

// function filter(array, callback) {
//   const filtered = [];
//   for (let i = 0; i < array.length; i++) {
//     if (callback(array[i], i, array)) {
//       filtered.push(array[i]);
//     }
//   }
//   return filtered;
// }

// const names = ["Rincko", "Juliano", "Cristiano", "Matheus", "Maria"];
// const filteredNames = filter(names, (name) => name.startsWith("M"));
// console.log(filteredNames);

// const names = ["Rincko", "Juliano", "Cristiano", "Matheus", "Maria"];
// const names2 = ["Rincko", "Juliano", "Cristiano", "Matheus", "Maria"];

// names.forEach((item) => console.log(item));

// names2.forEach((item) => {
//   console.log(item);
// });

setTimeout(() => {
  console.log("Olá ");
}, 500);
