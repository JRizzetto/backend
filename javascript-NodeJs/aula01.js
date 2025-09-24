// Importa o módulo nativo do node para entrada e saída de dados no terminal
const rl = require("node:readline");

// Cria uma interface de leitura 
const prompt = rl.createInterface({
  input: process.stdin, // Entrada padrão (teclado)
  output: process.stdout, // Saída padrão (terminal)
});

let name;

prompt.question("Qual é seu nome?", (awnser) => {
  name = awnser;
  prompt.close();
});

prompt.on("close", () => {
  console.log("Seja bem vindo", name);
});
