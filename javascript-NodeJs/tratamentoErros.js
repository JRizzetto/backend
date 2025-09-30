// import { readFile } from "node:fs/promises";

// async function main() {
//   const file = await readFile("./tratamentoErros.js");

//   console.log(file.toString());
// }
// main();

// import { readFile } from "node:fs/promises";

// async function main() {
//   //   readFile().then().catch().finally;

//   try {
//     const file = await readFile("./src/index.js");
//     console.log(file.toString());
//   } catch (error) {
//     console.log("Não foi possível ler o arquivo");
//   } finally {
//     console.log("Fim do tratamento de erro");
//   }

//   console.log("Fim do programa");
// }
// main();

function upper(text) {
  text.toUpperCase();
  console.log(text);
}
upper("jefferson");
