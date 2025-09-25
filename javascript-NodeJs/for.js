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

// const produtos = [
//   { id: 1, nome: "Notebook", preco: 2500 },
//   { id: 2, nome: "Mouse", preco: 50 },
//   { id: 3, nome: "Teclado", preco: 120 },
// ];

// // 1. Mostrar apenas os nomes dos produtos?
// for (let nomes of produtos) {
//   console.log(nomes.nome);
// }
// console.log(
//   "-----------------------------------------------------------------------"
// );
// // 2. Mostrar "Produto 1: Notebook", "Produto 2: Mouse", etc?
// for (let linha of produtos) {
//   console.log(`Produto ${linha.id}: ${linha.nome}`);
// }
// console.log(
//   "-----------------------------------------------------------------------"
// );
// // 3. Acessar o índice e o valor ao mesmo tempo?
// for (let indice in produtos) {
//   console.log(`Índice: ${indice}, Valor:`, produtos[indice]);
// }

// const cartItems = [
//   { name: "Laptop", price: 1200, quantity: 1 },
//   { name: "Mouse", price: 25, quantity: 2 },
//   { name: "Keyboard", price: 80, quantity: 1 },
//   { name: "Monitor", price: 300, quantity: 1 },
// ];

// let totalPrice = 0;

// for (let itemPrice of cartItems) {
//   totalPrice += itemPrice.price * itemPrice.quantity;
// }
// console.log(totalPrice);

// // Your for...of loop goes here
// // Multiply each item's price by its quantity and add to totalPrice

// console.log("Total cart value: $" + totalPrice);
// // Expected result: "Total cart value: $1630"

// const cartItems = [
//   { name: "Laptop", price: 1200, quantity: 1, inStock: true },
//   { name: "Mouse", price: 25, quantity: 2, inStock: true },
//   { name: "Keyboard", price: 80, quantity: 1, inStock: false }, // Out of stock!
//   { name: "Monitor", price: 300, quantity: 1, inStock: true },
// ];

// let totalInStock = 0;

// // Your for...of loop here
// // Only add to total if inStock is true

// for (let calcTotal of cartItems) {
//   if (calcTotal.inStock) {
//     totalInStock += calcTotal.price * calcTotal.quantity;
//   }
// }
// console.log(totalInStock);

// console.log("Total in-stock items: $" + totalInStock);
// // Expected: "Total in-stock items: $1550" (excluding the $80 keyboard)

const cartItems = [
  { name: "Laptop", price: 1200, quantity: 1, inStock: true },
  { name: "Mouse", price: 25, quantity: 2, inStock: true },
  { name: "Keyboard", price: 80, quantity: 1, inStock: false },
  { name: "Monitor", price: 300, quantity: 10, inStock: true },
  { name: "Gaming Chair", price: 450, quantity: 1, inStock: true },
];

let totalValue = 0;
let inStockItems = [];
let mostExpensiveItem = null;

// Your for...of loop here
// You need to:
// 1. Calculate totalValue (all items)
// 2. Push in-stock items to inStockItems array
// 3. Find the most expensive single item (price × quantity)

for (let calcTotal of cartItems) {
  if (calcTotal.inStock) {
    totalValue += calcTotal.price * calcTotal.quantity;
  }

  if (calcTotal.inStock) {
    inStockItems.push(calcTotal);
  }

  const itemTotal = calcTotal.price * calcTotal.quantity;
  if (
    mostExpensiveItem === null ||
    itemTotal > mostExpensiveItem.price * mostExpensiveItem.quantity
  ) {
    mostExpensiveItem = calcTotal;
  }
}

console.log(mostExpensiveItem);

console.log("Total cart value: $" + totalValue);
console.log(
  "In-stock items:",
  inStockItems.map((item) => item.name)
);

console.log(
  "Most expensive item:",
  mostExpensiveItem ? mostExpensiveItem.name : "None"
);

// Expected:
// Total cart value: $2055
// In-stock items: ["Laptop", "Mouse", "Monitor", "Gaming Chair"]
// Most expensive item: Laptop
