// let count = 0;

// while (count < 10) {
//   console.log(count);
//   count++;
// }

// const x = 20;
// let playerX = 0;

// while (playerX < x) {
//   console.log(" 💚 ".padStart(playerX, "."));
//   playerX++;
// }

// let current;
// let times = 0;
// const expected = 8;

// while (current !== expected) {
//   current = Math.floor(Math.random() * (50 + 1));
//   console.log(current);
//   times++;
// }

// console.log("Foram " + times);

const rl = require("node:readline");

const prompt = rl.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function question(query) {
  return new Promise((resolve) => {
    prompt.question(query, resolve);
  });
}

async function main() {
  let number;

  do {
    const answer = await question("Digite um número qualquer");
    number = Number.parseInt(answer);

    if (Number.isNaN(number)) {
      console.log("O que você digitou é inválido");
    }
  } while (Number.isNaN(number));

  prompt.close;
  console.log(`Você digitou ${number}`);
}
main();
