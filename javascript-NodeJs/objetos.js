// Objetos

// const player = {
//   nickName: "jefferson",
//   health: 20,
//   isDead: false,
//   present() {
//     console.log("meu nick é", this.nickName);
//   },
// };

// player.present();

// const game = {
//   score: 0,
//   enemy: "dragon",

//   updateScore(points) {
//     // Precisa do 'this'? ✅ SIM - acessa propriedade do próprio objeto
//     this.score += points;
//   },

//   battle() {
//     // Precisa do 'this'? ❌ NÃO - 'enemy' é parâmetro
//     console.log(`Lutando contra: ${this.enemy}`);
//   },

//   getHighScore() {
//     const highScore = 1000;
//     // Precisa do 'this'? ❌ NÃO - 'highScore' é variável local
//     return highScore - this.score; // ✅ SIM para 'this.score'
//   },
// };

// game.updateScore();
// game.battle();
// game.getHighScore();

// const player = {
//   nickname: "jefferson",
//   health: 20,
//   isDead: false,
//   present() {
//     console.log("Meu nick é ", this.nickname);
//   },
// };

// for (let prop in player) {
//   console.log(prop);
// }

// const ramMemory = {
//   name: "HyperX",
//   size: 16000,
// };

// const computer = {
//   motherBoard: "B360M",
//   videoCard: "RTX 2070",
//   cpu: "Intel i7 8700",
//   font: {
//     name: "XPG Core Reactor",
//     watts: 800,
//   },
//   case: {
//     name: "Draco gameMax",
//     color: "black",
//   },
//   font: {
//     name: "XPG Core Reactor",
//     watts: 800,
//   },
//   ram: [ramMemory, ramMemory],
// };

// for (const ram of computer.ram) {
//   console.log(ram.name, ram.size);
// }

// const rl = require("node:readline");

// const prompt = rl.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// prompt.question();
// prompt.close();
