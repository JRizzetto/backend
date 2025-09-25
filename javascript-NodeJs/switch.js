// Estrutura condicional

/*
switch(valor) {
    case: "esperado": {
    }
    default: {
    }
}
*/

// const animal = "cachorro";

// switch (animal) {
//   case "gato": {
//     console.log(`O ${animal} emitiu um som > Miau`);
//     break;
//   }
//   case "cachorro": {
//     console.log(`O ${animal} emitiu um som > Au AU`);
//     break;
//   }
//   case "vaca": {
//     console.log(`O ${animal} emitiu um som > MUUUUUUUUU`);
//     break;
//   }
// }

const rl = require("node:readline");

const prompt = rl.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("Bem vindo ao programa");
console.log("[1] Data Atual");
console.log("[2] Horário Atual");
console.log("[3] ver animais");
console.log("[4] Ver comidas");
console.log("[5] Ver Linguagens");
console.log("[0] Sair");

prompt.question("> Selecione o que deseja fazer ", (answer) => {
  switch (answer) {
    case "1": {
      const date = new Date();
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      console.log(`Hoje é ${day}/${month}/${year}`);
      break;
    }
    case "2": {
      const date = new Date();
      const hours = date.getHours();
      const minutes = date.getMinutes();
      const seconds = date.getSeconds();
      console.log(`Agora são ${hours}:${minutes}:${seconds}`);
      break;
    }
    case "3": {
      console.log("Galinha");
      console.log("Vaca");
      console.log("Gato");
      console.log("Cachorro");
      break;
    }
    case "4": {
      console.log("Pizza");
      console.log("Bolo");
      console.log("Macarrão");
      console.log("Sorvete");
      break;
    }
    case "5": {
      console.log("JavaScript");
      console.log("Phyton");
      console.log("Java");
      console.log("C#");
      break;
    }
    default: {
      console.log("Fim do programa");
    }
  }
});

const date = new Date();
console.log(date);
