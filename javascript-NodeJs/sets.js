const numbers = new Set([1, 4, 22, 98, 3011, 5, -32]);

// numbers.add(50);
// numbers.delete(4);
// // numbers.clear();

// console.log(numbers.has(98));

// console.log(numbers);

// for (const number of numbers.values()) {
//   console.log(number);
// }

// numbers.forEach((number) => {
//   console.log(number);
// });

import { text } from "@clack/prompts";

async function main() {
  const input = await text({ message: "Digite vários números" });

  const inputNumbers = input.split(" ").map(Number);

  const numbers = new Set(inputNumbers);

  console.log(inputNumbers);
  console.log(numbers);
}
main();
