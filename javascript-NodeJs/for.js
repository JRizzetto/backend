// Estrutura de repetição for

// for()inicialização, condição, execução

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// const numbers = [];

// for (let i = 0; i < 10; i++) {
//   numbers.push(i);
// }

// console.log(numbers);

// const fruits = ["maça", "banana", "laranja", "uva"];

// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }

// const text = "Se inscreva no canal do youtube: Rincko Dev";
// const letter = "a";
// let times = 0;

// for (let i = 0; i < text.length; i++) {
//   if (text[i] === letter) {
//     times++;
//   }
// }

// console.log(times);

const produtos = [
  { id: 1, nome: "Notebook", preco: 2500 },
  { id: 2, nome: "Mouse", preco: 50 },
  { id: 3, nome: "Teclado", preco: 120 },
];

// 1. Mostrar apenas os nomes dos produtos?
for (let nomes of produtos) {
  console.log(nomes.nome);
}
console.log(
  "-----------------------------------------------------------------------"
);
// 2. Mostrar "Produto 1: Notebook", "Produto 2: Mouse", etc?
for (let linha of produtos) {
  console.log(`Produto ${linha.id}: ${linha.nome}`);
}
console.log(
  "-----------------------------------------------------------------------"
);
// 3. Acessar o índice e o valor ao mesmo tempo?
for (let indice in produtos) {
  console.log(`Índice: ${indice}, Valor:`, produtos[indice]);
}
